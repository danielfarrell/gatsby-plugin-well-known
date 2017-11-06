# gatsby-plugin-well-known
Puts files in a `.well-known` folder after build.

# TURNS OUT THIS PLUGIN ISN'T NEEDED

Gatsby has support for this built in, I just didn't know it. You can use a `static/` folder in your root and those files get copied to public.  In this case, put the files in `static/.well-known` instead of `src/well-known` and you don't need this.

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
