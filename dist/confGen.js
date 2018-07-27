'use strict';

var fs = require('fs');
var color = require('colors');

var config = '\n\n module.exports = { \n\n\n   configs: { \n\n      esSupport: [\'.babelrc\',\'webpack.config.js\'], \n\n      taskrunners: [\'Gulpfile.js\',\'Gruntfiles.js\', \'Rollup.js\'],\n\n      packagemenegers:[\'bower.json\',\'yarn.lock\'],\n\n      testsframeworks:[],\n\n      linters:[\'.eslinrer.js\',\'.eshinter.js\'],\n\n      deploy:[],\n\n      other:[\'README.md\',\'LICENSE\',\'.gitignore\',\'.evn\'] \n\n   },\n   structure:{\n    html: false,\n    styles: false,\n    views: true,\n    styles_src: false,\n    typescript: false,\n    \n\n  }\n };\n';

function createConfig() {
   fs.writeFile('App.config.js', config, 'utf8', function (err) {
      process.stdout.write(color.green(' \uD83D\uDDCE App.config.js \u2713'));
      if (err) throw err;
      process.exit();
   });
}

module.exports = createConfig;