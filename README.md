# gatsby-plugin-well-known
Puts files in a `.well-known` folder after build.

## Install
`yarn add gatsby-plugin-well-known`

## How to use
1. Include the plugin in your `gatsby-config.js` file.
2. Put files in the `src/well-known` folder

## Options
The plugin takes one option, a `source` if you would rather put your files someplace other than `src/well-known`.

To change that, include the plugin in your `gatsby-config.js` like this:

```
plugins: [
  {
    resolve: `gatsby-plugin-well-known`,
    options: {
      source: './other/folder/path',
    }
  }
```
