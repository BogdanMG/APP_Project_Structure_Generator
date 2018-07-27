#!/usr/local/bin/node
const gen = require('./App-ProjectGenerator');
const confs = require('./App-ConfigsCreator');
const help = require('./help');
const version = require('./version');
const conf = require('./confGen');





(function app(){
    let arg = process.argv.slice(2);
    switch (arg[0]) {
            case'init':
            case'-i':
            gen();
            break;
            case'configs':
            case'-C':
            confs();
            break;
            case '-c':
            case'gen':
            conf();
            break;
            case'--help':
            case'-h':
            help();
            break;
            case'--version':
            case'-v':
            version();
            break;
        default:
            break;
    }

})()
