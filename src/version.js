const color = require('colors');
function getVersion(){
    const _VERSION_ = `APP-CLI\u{0040}0.0.1`;
    console.log(color.cyan(_VERSION_ ));
}
module.exports = getVersion;