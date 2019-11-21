module.exports = function () {
    $.gulp.task('stylus', function () {
        return $.gulp.src('dev/stylus/*.styl')
            .pipe($.stylus({
                'include css': true
            }))
            .pipe($.autoprefixer({
                'overrideBrowserslist': ['last 6 versions', 'ie 9', 'ie 10'],
                'cascade': true
            }))

            .pipe($.csscomb())

            .on('error', $.notify.onError({
                'message': 'Error <%= error.message %>',
                'title': 'Error running something'
            }))

            .pipe($.gulp.dest('dev/app/css'))
            .pipe($.browserSync.reload({
                'stream': true
            }));
    });

    $.gulp.task('stylus:build', function () {
        return $.gulp.src('dev/app/css/*.css')
            .pipe($.sourcemaps.init())

            // .pipe($.minify())
            .pipe($.strip.text())

            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/css'));
    });
};