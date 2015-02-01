/* @flow */

var React = require('react');

var msg:number = "Hello world!";
console.log("Going to print " + msg);
React.render(
	<h1>Hello, world!</h1>,
	document.getElementById('example')
);
