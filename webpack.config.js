const path = require('path');
const fs = require('fs');
var files = fs.readFileSync('plugins.json');
files = JSON.parse(files);
files = files.map(function (file) {
  return path.resolve(__dirname, 'plugins/' + file);
});
files.unshift(path.resolve(__dirname, 'jspsych.js'));
module.exports = {
  mode: 'development',
  entry: {
    'jspsych.bundle.js': files
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, '.')
  }
};  

