var assert = require('assert');
var fs = require('fs');
var join = require('path').join;

var transform = require('../');

var file = join(__dirname, 'input.js');
var input = fs.readFileSync(file, 'utf8');
var expected = fs.readFileSync(join(__dirname, 'expected.js'), 'utf8');
var output;
var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

try {
  console.log('\nrender(input):');
  output = transform.render(input);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

try {
  var options = {mangle: false};
  expected = fs.readFileSync(join(__dirname, 'expected-nomangle.js'), 'utf8');
  console.log('\nrender(input, options):');
  output = transform.render(input, options);
  assertEqual(output, expected);
} catch (e) {
  failed = true;
  console.error(e.stack);
}

console.log('\nTests ' + (failed ? 'FAILED' : 'PASSED'));

if (failed) process.exit(1);
