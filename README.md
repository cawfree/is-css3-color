# is-css3-color
A simple tool to check whether a supplied string is a valid [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) compatible color value.

## 🤝 Contributing
Feel free to branch directly from `/master` and [submit a pull request](https://help.github.com/en/articles/about-pull-requests).

## 🚀 Getting Started
Using [npm](https://www.npmjs.com/package/is-css3-color):

```bash
npm install --save is-css3-color
```

Using [yarn](https://www.npmjs.com/package/is-css3-color):
```bash
yarn add is-css3-color
```
## ✍️ Example

```javascript
const isCss3Color = require('is-css3-color');
isCss3Color('firebrick'); // true
isCss3Color('skyblue'); // true
isCss3Color('lightgrey'); // true
isCss3Color('#FFF'); // true
isCss3Color('hsl(360, 100%, 50%)'); // true
isCss3Color(undefined); // false
isCss3Color('cawfree'); //false
```

## 🙏 Dependencies
  - [color-string](https://www.npmjs.com/package/color-string)
  - [css-color-names](https://www.npmjs.com/package/css-color-names)

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="https://www.buymeacoffee.com/cawfree">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy @cawfree a coffee" width="232" height="50" />
  </a>
</p>
