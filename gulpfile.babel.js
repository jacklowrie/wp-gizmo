'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

function hello(done) {
	console.log("Hi, I'm Gizmo!")
	return done();
}

function lint() {
	return gulp
		.src('./gulpfile.babel.js')
		.pipe(eslint())
		.pipe(eslint.format());
}

function watchGulpFile() {
	return gulp
		.watch('./gulpfile.babel.js', lint);
}

exports.hello = hello;
exports.lint = lint;
exports.watch = watchGulpFile;
exports.default = gulp.series(lint, watchGulpFile);
