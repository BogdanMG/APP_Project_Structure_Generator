'use strict';

var fs = require('fs');
var color = require('colors');
//const path = require('path');

var config = '\n\nmodule.exports = { \n\n  configs: { \n      es6_support: [\'.babelrc\',\'webpack.config.js\'], \n\n      ts_support:[\'tsconfig.json\'], \n\n      tasks_runners: [\'Gulpfile.js\',\'Gruntfiles.js\', \'Rollup.js\'],\n\n      packages_menegers:[\'bower.json\',\'yarn.lock\'],\n\n      tests_frameworks:[\'karma.config.js\'],\n\n      linters:[\'.eslinter.js\',\'.eshinter.js\'],\n\n      deploy:[\'travis.yml\'],\n\n      other:[\'README.md\',\'LICENSE\',\'.gitignore\',\'.evn\'] \n\n  },\n  structure:{\n    html: false,\n    styles: false,\n    views: true,\n    styles_src: false,\n    typescript: false,\n    \n\n  }\n};';

function createConfig() {
  //process.chdir(process.cwd());
  fs.writeFile('App.config.js', config, 'utf8', function (err) {
    process.stdout.write(color.green(' \uD83D\uDDCE App.config.js \u2713'));
    if (err) throw err;
    process.exit();
  });
}
// console.log(process.cwd());
module.exports = createConfig;