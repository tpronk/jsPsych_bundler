const path = require('path');
const fs = require('fs');
var files = fs.readFileSync('plugins.json');
files = JSON.parse(files);
console.log(files);
files.unshift('jspsych.js');

module.exports = {
  mode: 'development',
  entry: {
    'jspsych.bundle.js': [
      path.resolve(__dirname, 'jspsych.js'),
      path.resolve(__dirname, 'plugins/jspsych-html-keyboard-response.js'),
      path.resolve(__dirname, 'plugins/jspsych-image-keyboard-response.js')
    ]
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, '.')
  }
};  

