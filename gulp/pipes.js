'use strict';

const lazypipe = require('lazypipe');

const eslint = require('gulp-eslint');


const lint = lazypipe()
  .pipe(eslint)
  .pipe(eslint.format);

exports.lint = lint;
