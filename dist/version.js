'use strict';

var color = require('colors');
function getVersion() {
    var _VERSION_ = 'APP-CLI@0.0.1';
    console.log(color.cyan(_VERSION_));
}
module.exports = getVersion;