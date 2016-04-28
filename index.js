'use strict';

var fs = require( 'fs' );
var path = require('path');

var getDefaultFileName = function() {
	var currentTime = new Date();
	var currentTimeStr = currentTime.getMonth() + 1 + '_' + currentTime.getDate()
		+ '_' + currentTime.getFullYear() + '_' + currentTime.getHours() + ':' + currentTime.getMinutes() + ':'
		+ currentTime.getSeconds();
	return currentTimeStr
};

var logReporter = function( config ) {



	var outputPath = config && config['outputPath'] ? config['outputPath'] : '';
	var outputName = config && config['outputName'] ? config['outputName'] : 'logFile_' + getDefaultFileName() + '.log';

	var outputFile = path.join(outputPath, outputName);

	this.onBrowserLog = function( browser, log, type ) {

		if ( log === undefined || typeof log !== 'string' ) {
			return;
		}

		if ( log.substring( 0, 1 ) === '\'' ) {
			log = log.substring( 1, log.length - 1 );
		}

		if (!log.endsWith('\n')) {
			log += '\n';
		}

		fs.writeFileSync(
			outputFile,
			log,
			{
				flag: "a+"
			}
		);

	};

};

logReporter.$inject = ['config.logReporter'];

module.exports = {
	'reporter:log-reporter' : ['type', logReporter]
};
