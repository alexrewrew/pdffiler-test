'use strict';

global.$ = {
    gulp: require('gulp'),
    pug: require('gulp-pug'),
    stylus: require('gulp-stylus'),
    strip: require('gulp-strip-comments'),
    csscomb: require('gulp-csscomb'),
    minify: require('gulp-clean-css'),
    autoprefixer: require('gulp-autoprefixer'),
    sourcemaps: require('gulp-sourcemaps'),
    notify: require('gulp-notify'),
    concat: require('gulp-concat'),
    imagemin: require('gulp-imagemin'),
    del: require('del'),
    uglify: require('gulp-uglify'),
    htmlmin: require('gulp-htmlmin'),
    browserSync: require('browser-sync').create(),
    babel : require('gulp-babel'),
    fs : require('fs'),
    realFavicon : require ('gulp-real-favicon'),
    FAVICON_DATA_FILE : 'faviconData.json',

    zip : require('gulp-zip'),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});


$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts'),
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('favicon', $.gulp.series(
    'favicon:clean',
    $.gulp.parallel('favicon:generate')
));

$.gulp.task('lottie', $.gulp.series(
    'lottie:clean',
    $.gulp.parallel('lottie:generate')
));

$.gulp.task('noui', $.gulp.series(
    'noui:clean',
    $.gulp.parallel('noui:generate')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'stylus', 'scripts:lib', 'scripts'),
    $.gulp.parallel('pug:build', 'stylus:build', 'scripts:build', 'imagemin:build', 'fonts:copy'),
    $.gulp.parallel('zip:build')
));

$.gulp.task('build:back', $.gulp.series(
    'clean',
    $.gulp.parallel('stylus', 'scripts:lib', 'scripts'),
    $.gulp.parallel('stylus:build', 'scripts:build', 'imagemin:build', 'fonts:copy'),
    $.gulp.parallel('zip:build')
));
