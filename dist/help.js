'use strict';

var color = require('colors');
function getHelp() {
    var _COMMANDS_ = '\n    app commands:\n    --------------------------------------------------------------------------- \n    init, -i <name_of_your_project>   : Create project,\n    gen, -c                           : Create \'App.config.js\',\n    configs, -C                       : Create configurations files for linters,\n                                        packagers managers, etc.\n    \n    \n    app info:\n    ---------------------------------------------------------------------------\n    --help,-h    : Information about pragram,\n    --version,-v : Version of program.\n\n    ';
    console.log(color.green(_COMMANDS_));
}
module.exports = getHelp;