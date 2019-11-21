module.exports = function() {

    $.gulp.task('clean:generate', function() {
        return $.del([
            './dev/app/img/favicon/*',
            './dev/app/js/lottie.js',
            './dev/app/js/nouislider.js',
            './dev/app/js/html5shiv.js',
            './dev/app/js/respond.min.js'
        ]);
    });

    $.gulp.task('scripts:generate', function() {
        return $.gulp.src([
            'node_modules/html5shiv/dist/html5shiv.js',
            'node_modules/respond.js/dest/respond.min.js',
        ])
            .pipe($.gulp.dest('dev/app/js'));
    });

    $.gulp.task('lottie:clean', function() {
        return $.del([
            './dev/app/js/lottie.js',
        ]);
    });

    $.gulp.task('lottie:generate', function() {
        return $.gulp.src([
            'node_modules/lottie-web/build/player/lottie.js'
        ])
            .pipe($.gulp.dest('dev/app/js'));
    });

    $.gulp.task('noui:clean', function() {
        return $.del([
            './dev/app/js/nouislider.js',
        ]);
    });

    $.gulp.task('noui:generate', function() {
        return $.gulp.src([
            'node_modules/nouislider/distribute/nouislider.js'
        ])
            .pipe($.gulp.dest('dev/app/js'));
    });

    $.gulp.task('favicon:clean', function() {
        return $.del([
            './dev/app/img/favicon/*',
        ]);
    });

    $.gulp.task('favicon:generate', function(done) {
        $.realFavicon.generateFavicon({
            masterPicture: 'src/favicon/favicon.png',
            dest: 'dev/app/img/favicon',
            iconsPath: '/',
            design: {
                ios: {
                    pictureAspect: 'noChange',
                    assets: {
                        ios6AndPriorIcons: true,
                        ios7AndLaterIcons: true,
                        precomposedIcons: false,
                        declareOnlyDefaultIcon: true
                    }
                },
                desktopBrowser: {},
                windows: {
                    pictureAspect: 'noChange',
                    backgroundColor: '#da532c',
                    onConflict: 'override',
                    assets: {
                        windows80Ie10Tile: true,
                        windows10Ie11EdgeTiles: {
                            small: true,
                            medium: true,
                            big: true,
                            rectangle: true
                        }
                    }
                },
                androidChrome: {
                    pictureAspect: 'noChange',
                    themeColor: '#ffffff',
                    manifest: {
                        display: 'standalone',
                        orientation: 'notSet',
                        onConflict: 'override',
                        declared: true
                    },
                    assets: {
                        legacyIcon: true,
                        lowResolutionIcons: true
                    }
                },
                safariPinnedTab: {
                    pictureAspect: 'blackAndWhite',
                    threshold: 50,
                    themeColor: '#5bbad5'
                }
            },
            settings: {
                scalingAlgorithm: 'Lanczos',
                errorOnImageTooSmall: false,
                readmeFile: false,
                htmlCodeFile: false,
                usePathAsIs: false
            },
            markupFile: $.FAVICON_DATA_FILE
        }, function() {
            done();
        });
    });
};