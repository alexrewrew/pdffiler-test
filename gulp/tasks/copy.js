module.exports = function() {
    $.gulp.task('fonts:copy', function () {
        return $.gulp.src('dev/app/fonts/**/*')
            .pipe($.gulp.dest('build/fonts'));
    });
};