'use strict';

const gulp = require('gulp');

gulp.task('hello', function(done) {
	console.log("Hi, I'm Gizmo!");
	return done();
});
