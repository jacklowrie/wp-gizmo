'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const stringReplace = require('gulp-string-replace');
const config = require('./config.json');
const fs = require('fs');
const rimraf = require('rimraf');

const wpGizmoDirectory = process.cwd();
const productionDirectory = `${wpGizmoDirectory}/../${config.plugin.slug}/`;

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
  if (fs.existsSync(productionDirectory)) {
    console.log('removing old production directory...');
    rimraf.sync( productionDirectory );
  }
  fs.mkdirSync(productionDirectory);

  const stringReplaceOptions = {
				logs: {
					enabled: false,
				},
				searchValue: 'regex',
			};

  return gulp
      .src('wp-gizmo.php')
      .pipe(rename(`${config.plugin.slug}.php`))
      .pipe(stringReplace(
          /wp-gizmo/g,
          config.plugin.slug,
          stringReplaceOptions
      ))
      .pipe(stringReplace(
          /WP-Gizmo/g,
          config.plugin.name,
          stringReplaceOptions
      ))

      .pipe(gulp.dest(productionDirectory));
}

exports.hello = hello;
exports.lint = lint;
exports.watch = watchGulpFile;
exports.default = gulp.series(lint, watchGulpFile);
exports.bundle = bundle;
