(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logger = require('./logger');
logger.alert('Hurray, A got the success alert!');
},{"./logger":2}],2:[function(require,module,exports){
module.exports = {
	log: function(string){
		if(console) console.log(string);
	},
	alert: function(string){
		alert(string);
	}
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxndWxwLWxlYXJuaW5nXFxub2RlX21vZHVsZXNcXGJyb3dzZXItcGFja1xcX3ByZWx1ZGUuanMiLCJDOi94YW1wcC9odGRvY3MvZ3VscC1sZWFybmluZy9zcmMvanMvZmFrZV8yMDA0NjhkOC5qcyIsIkM6L3hhbXBwL2h0ZG9jcy9ndWxwLWxlYXJuaW5nL3NyYy9qcy9sb2dnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XHJcbmxvZ2dlci5hbGVydCgnSHVycmF5LCBBIGdvdCB0aGUgc3VjY2VzcyBhbGVydCEnKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRsb2c6IGZ1bmN0aW9uKHN0cmluZyl7XHJcblx0XHRpZihjb25zb2xlKSBjb25zb2xlLmxvZyhzdHJpbmcpO1xyXG5cdH0sXHJcblx0YWxlcnQ6IGZ1bmN0aW9uKHN0cmluZyl7XHJcblx0XHRhbGVydChzdHJpbmcpO1xyXG5cdH1cclxufTsiXX0=
