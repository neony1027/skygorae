<img width=800 src="https://github.com/neony/skygorae/raw/master/assets/preview.png">

# skygorae

a dark, customizable discord theme.

<img width=800 src="https://github.com/neony/skygorae/raw/master/assets/screenshot1.png">

<img width=800 src="https://github.com/neony/skygorae/raw/master/assets/screenshot2.png">

<img width=800 src="https://github.com/neony/skygorae/raw/master/assets/screenshot3.png">

## install

### vencord/betterdiscord (or any client that supports theme files)

1. download the theme file, [`skygorae.theme.css`](https://github.com/neony/skygorae/blob/master/themes/skygorae.theme.css). (there should be a download button at the top right of the page)
2. drag the file into your theme folder. (there should be a button to open the theme folder in theme settings)
3. (optional) customize the theme by editing the options in `skygorae.theme.css`.

### install through link

add `../build/skygorae.css` to your theme import links. you will need to copy the theme variables to your quickcss in order to customize the theme.

## flavors

flavors are preset customizations for skygorae.

to use a flavor, follow the install instructions above but download the flavor theme file of your choice instead of `skygorae.theme.css`.

- [light](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-light.theme.css)
- [auto (system theme)](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-auto.theme.css)
- [background](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-background.theme.css) (background image + transparent blurred panels)
- [catppuccin mocha](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-catppuccin-mocha.theme.css)
- [catppuccin macchiato](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-catppuccin-macchiato.theme.css)
- [nord](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-nord.theme.css)
- [rose pine](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-rose-pine.theme.css)
- [rose pine moon](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-rose-pine-moon.theme.css)
- [tokyo night](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-tokyo-night.theme.css)
- [lilypichu](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-lilypichu.theme.css)
- [vencord](https://github.com/neony/skygorae/blob/master/themes/flavors/skygorae-vencord.theme.css)

## discord server

need help? want to give feedback? want to be notified about upcoming changes? join <https://discord.gg/nz87hXyvcy>

## contributing

this theme uses a dev script to check for changes in the source css files and combine them into a build file. to run locally:

1. clone the repository.
2. run `npm i`.
3. create a `.env` file in the project root with the paths of any local theme files you want to update (comma separated)

```
DEV_OUTPUT_PATH=C:\Users\USERNAME\AppData\Roaming\Vencord\themes\skygorae-dev.theme.css
```

1. run `npm run dev`.
2. make changes to any file in `/src` or the main theme file. the local theme files you listed will automatically be updated, along with the build file in `/build`.
3. make a pull request with your changes!

## credits

original design inspired by <https://github.com/schnensch0/zelk>

window controls inspired by <https://github.com/Dyzean/Tokyo-Night>

thanks to all the [contributors](https://github.com/neony/skygorae/graphs/contributors)!
