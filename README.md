# PostCSS pxrem

Converts `px` to `rem` based on `baseFontSize` setting.

## Installation this:

`npm install @alexsvg/postcss-pxrem`

## Usage this:

In `webpack.config.js` if you use stylus:

```js
const poststylus = require('poststylus'),
      pxr = require('@alexsvg/postcss-pxrem')
{
    rules: {
        test: /\.styl(us)?$/,
        use: [
            {
                loader: 'stylus-loader',
                options: {
                    use: [
                        poststylus([
                            pxr({ baseFontSize: 18 })
                        ])
                    ],
                }
            },
        ]
    }
}
```

Input code:

```stylus
html, body {
    font-size 18px
}
.style {
    font-size 54pxr
    margin 18pxr 18pxr
}
```

Output code:

```css
html, body {
    font-size: 18px;
}
.style {
    font-size: 3rem;
    margin: 1rem 1rem;
}
```
