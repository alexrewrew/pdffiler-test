module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('dev/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('dev/**/*.styl', $.gulp.series('stylus'));
        $.gulp.watch('dev/scripts/**/*.js', $.gulp.series('scripts'));
    });
};