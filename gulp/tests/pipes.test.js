'use strict';
const path = require('path');
const pipes = require('../pipes');
const Vinyl = require('vinyl');
const vfsFake = require('vinyl-fs-fake');

test('can run tests', () => {
  expect(true).toBe(true);
});

describe('pipes.js', () => {

  test('lint pipe works', () => {
    const jsFile = {
      src: [
        {
          path: 'testfile.js',
          contents: new Buffer('let x = 5')
        }
      ],
      dest: (files) => {
        const testFile = files[0];
        expect(testFile.path).toBe('testfile.js');
        expect(testFile.contents.toString('utf-8')).toBe('let x = 5');
      }
    };

    vfsFake.src(jsFile.src)
      .pipe(pipes.lint())
      .pipe(vfsFake.dest(jsFile.dest));
  });

  test('bundle pipe works', () => {
    const testGizmo = {
      src: [
        {
          path: 'wp-gizmo.php',
          contents: new Buffer('not a real file.')
        }
      ],
      dest: (files) => {
        const testFile = files[0];

        testFile.basename = path.basename(testFile.path);

        expect(testFile.basename).toBe('new-plugin.php');
        expect(testFile.contents.toString('utf-8')).toBe('not a real file.');
      }
    };

    vfsFake.src(testGizmo.src)
      .pipe(pipes.bundle())
      .pipe(vfsFake.dest(testGizmo.dest));
  });
});
