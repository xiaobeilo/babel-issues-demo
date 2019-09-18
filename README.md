### misbehave: babel.config.js VS .babelrc

### Repetition steps:

* npm install

* npm run build

* You can now see the dist/main.js output

```

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-test.js
const babelTest = () => {
  console.log('babel-test');
};

/* harmony default export */ var babel_test = (babelTest);
// CONCATENATED MODULE: ./src/index.js


var test = function test() {
  console.log('test');
};

test();
babel_test();

```

* Then you change Babel.Config.js.bak to Babel.Config.js, .babelrc to .babelrc.bak

* npm run build again

* You can now see the dist/main.js output:
```
"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-test.js
var babelTest = function babelTest() {
  console.log('babel-test');
};

/* harmony default export */ var babel_test = (babelTest);
// CONCATENATED MODULE: ./src/index.js


var test = function test() {
  console.log('test');
};

test();
babel_test();
```