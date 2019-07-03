const { get } = require('color-string');
const cssColorNames = require('css-color-names/css-color-names.json');

const isCss3Color = (str) => {
  if (typeof str !== 'string') {
    return false;
  }
  const s = get(str);
  if (!s) {
    const n = cssColorNames[str];
    if (n) {
      return n;
    }
  }
  return s;
};

module.exports = str => !!isCss3Color(str);
