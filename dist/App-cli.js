#!/usr/local/bin/node
'use strict';

var gen = require('./App-ProjectGenerator');
var confs = require('./App-ConfigsCreator');
var help = require('./help');
var version = require('./version');
var conf = require('./confGen');

(function app() {
    var arg = process.argv.slice(2);
    switch (arg[0]) {
        case 'init':
        case '-i':
            gen();
            break;
        case 'configs':
        case '-C':
            confs();
            break;
        case '-c':
        case 'gen':
            conf();
            break;
        case '--help':
        case '-h':
            help();
            break;
        case '--version':
        case '-v':
            version();
            break;
        default:
            break;
    }
})();