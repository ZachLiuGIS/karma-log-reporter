# karma-log-reporter

## About
This is a customized karma report that captures console log messages into file.
It is inspired by [karma-json-log-reporter](https://www.npmjs.com/package/karma-json-log-reporter).
I created this report because I need a reporter that can log plain text.

## Usage

`npm install karma-log-reporter --save-dev`

## Configuration

### Simple text log

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    "logReporter": {
      "outputPath": "test/some/path/", // default name is current directory
      "logFileName": "logfile.log" // default name is logFile_month_day_year_hr:min:sec.log
    },
    "plugins": [
      "karma-log-reporter"
    ],
    "reporters": ["log-reporter"]
  });
};
```

### log with filter_key

A filter_key can be specified in the configuration to only log to file when filter_key is provided in console.log.

To achieve this, provide a filter_key in configuration first:

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    "logReporter": {
      "outputPath": "test/some/path/",
      "logFileName": "logfile.log",
      "filter_key": "log-filter"
    },

	...
  });
};
```

Then only this format will be logged into file.

```javascript
\\ this will be logged.
console.log(JSON.stringify({filter_key: 'log-filter', message: 'this message will be logged to file.'}));

\\ this will not be logged.
console.log('this message will not be logged to file')
```
