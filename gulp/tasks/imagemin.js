module.exports = function () {
    $.gulp.task('imagemin:build', function () {
        return $.gulp.src('dev/app/img/**/*')
            .pipe($.imagemin())
            .pipe($.gulp.dest('build/img'));
    });
};