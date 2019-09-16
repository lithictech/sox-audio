'use strict';

var util = require('util');

var utils = {};

utils.args = function() {
	var list = [];

	// Append argument(s) to the list
	var argfunc = function() {
		if (arguments.length === 1 && Array.isArray(arguments[0])) {
			list = list.concat(arguments[0]);
		} else {
			// convert the arguments list to an Array for concatenation
			list = list.concat([].slice.call(arguments));
		}
	};

	argfunc.clear = function() {
		list = [];
	};

	argfunc.get = function() {
		return list;
	};

	argfunc.clone = function() {
		var cloned = utils.args();
		cloned(list);
		return cloned;
	};

	return argfunc;
};

/* Time formatting helpers, particularly useful for trimming */
utils.TimeFormat = function() {
	var ABSOLUTE_TIME_FORMAT = '=%d';
	var TIME_TO_END_FORMAT = '-%d'
	var SAMPLE_FORMAT = '%ds';

	this.formatTimeAbsolute = function(timeInSeconds) {
		return util.format(ABSOLUTE_TIME_FORMAT, timeInSeconds);
	};

	this.formatTimeRelativeToEnd = function(timeBeforeEndInSeconds) {
		return util.format(TIME_TO_END_FORMAT, timeBeforeEndInSeconds);
	};

	this.formatTimeInSamples = function(sampleNumber) {
		return util.format(SAMPLE_FORMAT, sampleNumber);
	};
	return this;
};

module.exports = utils;