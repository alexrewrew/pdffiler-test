module.exports = function () {
    $.gulp.task('imagemin:build', function () {
        return $.gulp.src('dev/app/img/**/*')
            // .pipe($.imagemin())
            .pipe($.imagemin([
                $.imageminGuetzli({
                    quality: 85
                })
            ]))
            .pipe($.gulp.dest('build/img'));
    });
};