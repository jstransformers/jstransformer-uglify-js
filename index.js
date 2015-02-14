'use strict';

var uglifyJS = require('uglify-js');
var fs       = require('fs');

exports.name = 'uglify-js';
exports.outputFormat = 'js';

exports.render = function (str, options) {
  options = options || {};
  options.fromString = true;
  return uglifyJS.minify(str, options).code;
}
