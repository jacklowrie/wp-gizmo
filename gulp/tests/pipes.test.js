'use strict';
const path = require('path');
const pipes = require('../pipes');
const vfsFake = require('vinyl-fs-fake');

test('can run tests', () => {
  expect(true)
      .toBe(true);
});

describe('pipes.js', () => {
  test('lint pipe works', () => {
    const jsFile = {
      src: [
        {
          path: 'testfile.js',
          contents: new Buffer('let x = 5'),
        },
      ],
      dest: (files) => {
        const testFile = files[0];
        expect(testFile.path)
            .toBe('testfile.js');
        expect(testFile.contents.toString('utf-8'))
            .toBe('let x = 5');
      },
    };

    vfsFake.src(jsFile.src)
        .pipe(pipes.lint())
        .pipe(vfsFake.dest(jsFile.dest));
  });

  describe('nameReplace pipe', () => {
    test('replaces WP-Gizmo with the plugin name', () => {
      const testGizmo = {
        src: [
          {
            path: 'wp-gizmo.php',
            contents: new Buffer('WP-Gizmo is the plugin name.'),
          },
        ],
        dest: (files) => {
          const testFile = files[0];

          expect(testFile.contents.toString('utf-8'))
              .toBe('New Plugin is the plugin name.');
        },
      };

      vfsFake.src(testGizmo.src)
          .pipe(pipes.nameReplace())
          .pipe(vfsFake.dest(testGizmo.dest));
    });
    test('replaces WP_Gizmo with the plugin name underscored', () => {
      const testGizmo = {
        src: [
          {
            path: 'wp-gizmo.php',
            contents: new Buffer('WP_Gizmo is the namespace.'),
          },
        ],
        dest: (files) => {
          const testFile = files[0];

          expect(testFile.contents.toString('utf-8'))
              .toBe('New_Plugin is the namespace.');
        },
      };

      vfsFake.src(testGizmo.src)
          .pipe(pipes.nameReplace())
          .pipe(vfsFake.dest(testGizmo.dest));
    });
    test('Replaces Gizmo with PascalCase plugin name', () => {
      const testGizmo = {
        src: [
          {
            path: 'wp-gizmo.php',
            contents: new Buffer('Gizmo definition.'),
          },
        ],
        dest: (files) => {
          const testFile = files[0];

          expect(testFile.contents.toString('utf-8'))
              .toBe('NewPlugin definition.');
        },
      };

      vfsFake.src(testGizmo.src)
          .pipe(pipes.nameReplace())
          .pipe(vfsFake.dest(testGizmo.dest));
    });
    test('Replaces gizmo with snake_case plugin slug', () => {
      const testGizmo = {
        src: [
          {
            path: 'wp-gizmo.php',
            contents: new Buffer('$gizmo variable.'),
          },
        ],
        dest: (files) => {
          const testFile = files[0];

          expect(testFile.contents.toString('utf-8'))
              .toBe('$new_plugin variable.');
        },
      };

      vfsFake.src(testGizmo.src)
          .pipe(pipes.nameReplace())
          .pipe(vfsFake.dest(testGizmo.dest));
    });
  });
  describe('renameSlug pipe', () => {
    test('renames plugin file to slug', () => {
      const testGizmo = {
        src: [
          {
            path: 'wp-gizmo.php',
            contents: new Buffer('wp-gizmo is the slug.'),
          },
        ],
        dest: (files) => {
          const testFile = files[0];
          testFile.basename = path.basename(testFile.path);

          expect(testFile.basename)
              .toBe('new-plugin.php');
        },
      };

      vfsFake.src(testGizmo.src)
          .pipe(pipes.renameSlug())
          .pipe(vfsFake.dest(testGizmo.dest));
    });
  });
  describe('renameMainPluginClass pipe', () => {
    test('renames main plugin file to PascalCase plugin name', () => {
      const testGizmo = {
        src: [
          {
            path: 'gizmo.php',
            contents: new Buffer('wp-gizmo is the slug.'),
          },
        ],
        dest: (files) => {
          const testFile = files[0];
          testFile.basename = path.basename(testFile.path);

          expect(testFile.basename)
              .toBe('NewPlugin.php');
        },
      };

      vfsFake.src(testGizmo.src)
          .pipe(pipes.renameMainPluginClass())
          .pipe(vfsFake.dest(testGizmo.dest));
    });
  });
});
