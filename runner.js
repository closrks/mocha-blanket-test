require('blanket')();
// require all test files
require('fs').readdirSync('./test').forEach(function (file) {
  require('./test/' + file);
});
// by default blanket only instruments files required in test files
// this will add all src files for more complete coverage
require('fs').readdirSync('./src').forEach(function (file) {
  require('./src/' + file);
});