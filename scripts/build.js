const fs = require('fs');
const path = require('path');

const config = require('./theme.config');

const root = path.join(__dirname, '..');
const baseFile = path.join(root, config.baseFile);
const buildFile = path.join(root, config.buildFile);
const srcDir = path.join(root, 'src');

function validateSourceFiles() {
    const discovered = fs.readdirSync(srcDir)
        .filter((file) => file.endsWith('.css'))
        .sort((a, b) => a.localeCompare(b));
    const configured = [...config.sourceFiles].sort((a, b) => a.localeCompare(b));
    if (JSON.stringify(discovered) !== JSON.stringify(configured)) {
        throw new Error(
            `CSS source list mismatch.\nConfigured: ${configured.join(', ')}\nDiscovered: ${discovered.join(', ')}`,
        );
    }
}

function generateMenuStaggerCss(maxGroups = 12, maxItemsPerGroup = 8) {
    const lines = [];

    let index = 0;
    for (let group = 1; group <= maxGroups; group++) {
        for (let item = 1; item <= maxItemsPerGroup; item++) {
            index += 1;
            lines.push(
                `    [class*='menu_'] [role='group']:nth-of-type(${group}) [role='menuitem']:nth-of-type(${item}),\n    [class*='menu_'] [role='group']:nth-of-type(${group}) [class*='item_'][id]:nth-of-type(${item}),\n    .menu_c1e9c4 [role='group']:nth-of-type(${group}) [role='menuitem']:nth-of-type(${item}) { animation-delay: calc((${index} - 1) * var(--context-menu-stagger)) !important; }`,
            );
        }
    }

    for (let item = 1; item <= 30; item++) {
        lines.push(
            `    [class*='menu_'] [class*='scroller'] > [role='menuitem']:nth-child(${item}),\n    [class*='menu_'] [class*='scroller'] > [class*='item_'][id]:nth-child(${item}),\n    .menu_c1e9c4 [class*='scroller'] > [role='menuitem']:nth-child(${item}) { animation-delay: calc((${item} - 1) * var(--context-menu-stagger)) !important; }`,
        );
    }

    return `${lines.join('\n')}\n`;
}

function buildSource() {
    validateSourceFiles();
    const combined = config.sourceFiles
        .map((file) => {
            let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
            if (file === 'animations.css') {
                content = content.replace('/* SKYGORAE_MENU_STAGGER */', generateMenuStaggerCss());
            }
            return `/* ${file} */\n${content}\n`;
        })
        .join('');
    fs.mkdirSync(path.dirname(buildFile), { recursive: true });
    fs.writeFileSync(buildFile, combined);
    return combined;
}

function buildCombinedTheme() {
    const compiled = buildSource();
    const base = fs.readFileSync(baseFile, 'utf8');
    const matches = base.split(config.buildImport).length - 1;
    if (matches !== 1) {
        throw new Error(`Expected exactly one build import in ${baseFile}; found ${matches}`);
    }
    return base.replace(config.buildImport, compiled);
}

if (require.main === module) {
    const compiled = buildSource();
    console.log(`Built ${path.relative(root, buildFile)} (${compiled.length} bytes)`);
}

module.exports = { baseFile, buildCombinedTheme, buildFile, buildSource, config, root, srcDir };
