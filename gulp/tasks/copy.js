module.exports = function() {
    $.gulp.task('fonts:copy', function () {
        return $.gulp.src('dev/app/fonts/**/*')
            .pipe($.gulp.dest('build/fonts'));
    });

    $.gulp.task('php:copy', function () {
        return $.gulp.src('dev/app/php/**/*')
            .pipe($.gulp.dest('build/php'));
    });

    $.gulp.task('media:copy', function () {
        return $.gulp.src('dev/app/media/**/*')
            .pipe($.gulp.dest('build/media'));
    });
};