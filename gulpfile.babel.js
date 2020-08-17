'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('./config.json');

function hello(done) {
  console.log('Hi, I\'m Gizmo!');
  console.log(`Config name is: ${config.name}`);
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

function bundle() {
  return gulp
      .src('*.php')
      .pipe(gulp.dest(`../${config.plugin.slug}/`));
}

exports.hello = hello;
exports.lint = lint;
exports.watch = watchGulpFile;
exports.default = gulp.series(lint, watchGulpFile);
exports.bundle = bundle;
