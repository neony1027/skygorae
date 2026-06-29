const fs = require('fs');
const path = require('path');

const { buildCombinedTheme, root } = require('./build');

function svgToDataUrl(filePath) {
    const svg = fs
        .readFileSync(filePath, 'utf8')
        .replace(/<\?xml[^>]*>/g, '')
        .replace(/<!DOCTYPE[^>]*>/g, '')
        .replace(/<!--[\s\S]*?-->/g, '')
        .trim();
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

function bundleTheme() {
    let theme = buildCombinedTheme();
    const whaleDataUrl = svgToDataUrl(path.join(root, 'assets', 'whale.svg'));
    theme = theme.replace(
        /--dms-icon-svg-url:\s*url\([^)]+\);/g,
        `--dms-icon-svg-url: ${whaleDataUrl};`,
    );
    return theme;
}

if (require.main === module) {
    const theme = bundleTheme();
    const outputs = [
        path.join(root, 'skygorae.theme.css'),
        path.join(root, '..', 'skygorae.theme.css'),
    ];
    for (const outputPath of outputs) {
        fs.writeFileSync(outputPath, theme);
        console.log(`Bundled ${path.relative(root, outputPath)} (${theme.length} bytes)`);
    }
}

module.exports = { bundleTheme };
