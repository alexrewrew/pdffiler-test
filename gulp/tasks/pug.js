module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('dev/pug/*.pug')
            .pipe($.pug({
                'pretty': true
            }))
            .on('error', $.notify.onError({
                'message': 'Error <%= error.message %>',
                'title': 'Error running something'
            }))
            .pipe($.gulp.dest('dev/app'))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('pug:build', function () {
        return $.gulp.src('dev/app/*.html')
            .pipe($.htmlmin({
                collapseWhitespace: true
            }))
            .pipe($.gulp.dest('build'));
    });
};