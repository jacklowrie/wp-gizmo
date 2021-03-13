'use strict';

const gulp = require('gulp');
const fs = require('fs');
const rimraf = require('rimraf');

const pipes = require('./gulp/pipes');
const config = require('./config.json');

const wpGizmoDirectory = process.cwd();
const productionDirectory = `${wpGizmoDirectory}/../${config.plugin.slug}/`;

function hello(done) {
  console.log('Hi, I\'m Gizmo!');
  console.log(`Plugin name is: ${config.plugin.name}`);
  return done();
}

function lint(done) {
  gulp.src('./gulpfile.babel.js')
      .pipe(pipes.lint());
  return done();
}

function watchGulpFile(done) {
  gulp.watch('./gulpfile.babel.js', lint);
  done();
}

function bundle(done) {
  if (fs.existsSync(productionDirectory)) {
    console.log('removing old production directory...');
    rimraf.sync( productionDirectory );
  }
  fs.mkdirSync(productionDirectory);

  gulp.src('wp-gizmo.php')
      .pipe(pipes.bundle())
      .pipe(gulp.dest(productionDirectory));

  return done();
}

exports.hello = hello;
exports.lint = lint;
exports.watch = watchGulpFile;
exports.default = gulp.series(lint, watchGulpFile);
exports.bundle = bundle;
