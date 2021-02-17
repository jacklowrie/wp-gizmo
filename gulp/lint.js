'use-strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

export default function lint() {
  return gulp
      .src('./gulpfile.babel.js')
      .pipe(eslint())
      .pipe(eslint.format());
}
