'use strict';

const gulp = require('gulp');

function hello(done) {
	console.log("Hi, I'm Gizmo!");
	return done();
}

exports.hello = hello;
