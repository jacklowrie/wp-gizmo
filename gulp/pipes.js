'use strict';

const lazypipe = require('lazypipe');

const eslint = require('gulp-eslint');
const config = require('../config.json');
const rename = require('gulp-rename');
const stringReplace = require('gulp-string-replace');

const stringReplaceOptions = {
  logs: {
    enabled: false,
  },
  searchValue: 'regex',
};


const lint = lazypipe()
    .pipe(eslint)
    .pipe(eslint.format);

const nameReplace = lazypipe()
    .pipe(
        stringReplace,
        /wp-gizmo/g,
        config.plugin.slug,
        stringReplaceOptions
    )
    .pipe(
        stringReplace,
        /WP-Gizmo/g,
        config.plugin.name,
        stringReplaceOptions
    )
    .pipe(
        stringReplace,
        /WP_Gizmo/g,
        config.plugin.name.replace(' ', '_'),
        stringReplaceOptions
    )
    .pipe(
        stringReplace,
        /Gizmo/g,
        config.plugin.name.replace(' ', ''),
        stringReplaceOptions
    )
    .pipe(
        stringReplace,
        /gizmo/g,
        config.plugin.slug.replace('-', '_'),
        stringReplaceOptions
    );

const renameSlug = lazypipe()
    .pipe(
        rename,
        `${config.plugin.slug}.php`
    );

exports.lint = lint;
exports.nameReplace = nameReplace;
exports.renameSlug = renameSlug;
