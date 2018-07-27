const color = require('colors');
function getHelp(){
    const _COMMANDS_ = `
    app commands:
    --------------------------------------------------------------------------- 
    init, -i <name_of_your_project>   : Create project,
    gen, -c                           : Create 'App.config.js',
    configs, -C                       : Create configurations files for linters,
                                        packagers managers, etc.
    
    
    app info:
    ---------------------------------------------------------------------------
    --help,-h    : Information about pragram,
    --version,-v : Version of program.

    `;
    console.log(color.green(_COMMANDS_));
}
module.exports = getHelp;