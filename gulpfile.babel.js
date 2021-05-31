'use strict';

const gulp = require('gulp');
const fs = require('fs');
const rimraf = require('rimraf');

const pipes = require('./gulp/pipes');
const config = require('./config.json');

const wpGizmoDirectory = process.cwd();
const productionDirectory = `${wpGizmoDirectory}/../${config.plugin.slug}/`;
const productionInc = productionDirectory + 'inc/';

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
  fs.mkdirSync(`${productionDirectory}inc/`);

  gulp.src(['*.php', '!wp-gizmo.php'])
      .pipe(pipes.nameReplace())
      .pipe(gulp.dest(productionDirectory));

  gulp.src(['inc/*.php', '!inc/gizmo.php'])
      .pipe(pipes.nameReplace())
      .pipe(gulp.dest(productionInc));

  gulp.src('wp-gizmo.php')
      .pipe(pipes.nameReplace())
      .pipe(pipes.renameSlug())
      .pipe(gulp.dest(productionDirectory));

  gulp.src('inc/gizmo.php')
      .pipe(pipes.nameReplace())
      .pipe(pipes.renameSlug())
      .pipe(gulp.dest(productionInc));

  gulp.src(config.filesToCopy)
      .pipe(gulp.dest(productionDirectory));

  gulp.src('inc/gizmo.php')
      .pipe(pipes.nameReplace())
      .pipe(pipes.renameSlug())
      .pipe(gulp.dest(productionInc));

  return done();
}

exports.hello = hello;
exports.lint = lint;
exports.watch = watchGulpFile;
exports.default = gulp.series(lint, watchGulpFile);
exports.bundle = bundle;
