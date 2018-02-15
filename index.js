'use strict'

const UglifyJS = require('uglify-js')

exports.name = 'uglify-js'
exports.outputFormat = 'js'
exports.inputFormat = ['js']

exports.render = function (str, options) {
  const result = UglifyJS.minify(str, options)
  return result.code
}
