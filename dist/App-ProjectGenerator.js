'use strict';

var fs = require('fs');
var color = require('colors');
var arg = process.argv.slice(2);
var _PROJECT_NAME_ = arg[1];

function build() {
    var config = require(process.cwd() + '/App.config.js').structure;
    var folders = {
        html: config.html,
        styles: config.styles,
        views: config.views,
        styles_src: config.styles_src,
        typescript: config.typescript
    };
    createDir(_PROJECT_NAME_);

    process.stdout.write(color.green.bold('\n|'));

    process.chdir(_PROJECT_NAME_);
    createDir('static', '\n|-');

    process.chdir('static');
    if (folders.html) {
        createDir('html', '\n|--');
    }

    if (folders.styles) {
        createDir('styles', '\n|--');
    }
    createDir('js', '\n|--');

    process.chdir('js');
    if (folders.views) {
        createDir('views', '\n|---');
    }
    createDir('controllers', '\n|---');
    createDir('models', '\n|---');

    process.chdir('../../static');
    createDir('images', '\n|--');
    createDir('fonts', '\n|--');

    process.chdir('../.././' + _PROJECT_NAME_);
    createDir('routes', '\n|-');
    createDir('src', '\n|-');

    process.chdir('src');
    if (folders.styles_src) {
        createDir('styles_src', '\n|--');
    }
    if (folders.typescript) {
        createDir('ts', '\n|--');
        process.chdir('ts');
        createDir('views', '\n|---');
        createDir('controllers', '\n|---');
        createDir('models', '\n|---');
        process.chdir('../../src');
    }

    createDir('js', '\n|--');
    process.chdir('js');
    createDir('views', '\n|---');
    createDir('controllers', '\n|---');
    createDir('models', '\n|---');

    process.chdir('../../../' + _PROJECT_NAME_);

    createDir('srv', '\n|-');
    process.chdir('srv');
    createDir('views', '\n|--');
    createDir('controllers', '\n|--');
    createDir('models', '\n|--');
    process.chdir('../.././' + _PROJECT_NAME_);
    process.stdout.write(color.green.bold('\n Done!'));

    process.exit();
}
function createDir(folder, char) {
    try {
        fs.mkdirSync(folder);
    } catch (e) {
        console.error(e);
    }
    if (char == undefined) {
        process.stdout.write(color.green.bold('\n\uD83D\uDDC0 ' + folder + ' \u2713'));
    } else {
        process.stdout.write(color.green.bold('\n' + char + ' \uD83D\uDDC0 ' + folder + ' \u2713'));
    }
}
module.exports = build;