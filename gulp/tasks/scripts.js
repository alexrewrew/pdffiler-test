module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/jquery-mask-plugin/dist/jquery.mask.js',
            'node_modules/jquery-validation/dist/jquery.validate.js',
        ])
            .pipe($.concat('vendor.js'))
            .pipe($.gulp.dest('dev/app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src([
            'dev/scripts/dev.js',
        ])
            .pipe($.concat('scripts.js'))
            // .pipe($.babel({
            //     presets: ['env']
            // }))

            .pipe($.gulp.dest('dev/app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }));
    });

    $.gulp.task('scripts:build', function () {
        return $.gulp.src('dev/app/js/*.js')
            .pipe($.sourcemaps.init())
            .pipe($.strip.text())
            .pipe($.uglify())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/js'));
    });

    $.gulp.task('zip:build', function () {
        return $.gulp.src('build/**/*')
            .pipe($.zip('build.zip'))
            .pipe($.gulp.dest('./'));
    });
};