'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var fs = require('fs');
var color = require('colors');

function configsCreate() {
    var config = require(process.cwd() + '/App.config.js').configs;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(config)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;


            var arr = config[key];
            for (var _key in arr) {
                if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) === "object") {
                    try {
                        fs.writeFileSync(arr[_key], "", 'utf8');
                    } catch (e) {
                        console.error(e);
                    }
                    process.stdout.write(color.green('\n \uD83D\uDDCE ' + arr[_key] + ' \u2713'));
                } else {
                    throw new TypeError("Keys is not objects!");
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    process.exit();
}

module.exports = configsCreate;