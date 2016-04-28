'use strict';

var fs = require( 'fs' );
var path = require('path');

var logReporter = function( config ) {

	var currentTime = new Date().getTime();

	var outputPath = config['outputPath'] ? config['outputPath'] : '';
	var outputName = config['outputName'] ? config['outputName'] : 'logFile_' + currentTime + '.log';

	var outputFile = path.join(outputPath, outputName)

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
