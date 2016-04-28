# karma-log-reporter

## About
This is a customized karma report that captures console log messages into file.
It is inspired by [karma-json-log-reporter](https://www.npmjs.com/package/karma-json-log-reporter).
I created this report because I need a reporter that can log plain text.

## Usage

`npm install karma-log-reporter --save-dev`

## Configuration

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    "logReporter": {
      "outputPath": "test/some/path/", // default name is current directory
      "logFileName": "logfile.log" // default name is logFile_month_day_year_hr:min:sec.log
    },
    "plugins": [
      "karma-json-log-reporter"
    ],
    "reporters": ["log-reporter"]
  });
};
```
