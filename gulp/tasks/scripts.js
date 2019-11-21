module.exports = function () {
    $.gulp.task('scripts:lib', function () {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.js',
            // 'node_modules/jquery-migrate/dist/jquery-migrate.js',    

            // 'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',

            // 'snippets/smoothscroll/jQuery.scrollSpeed.js',

            // 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',

            'node_modules/slick-carousel/slick/slick.js',
            // 'node_modules/swiper/dist/js/swiper.js',
            // 'node_modules/owl.carousel/dist/owl.carousel.js',

            // 'node_modules/jquery.marquee/jquery.marquee.js',
            // 'node_modules/jquery.marquee/jquery.marquee.js',

            // 'node_modules/chosen-js/chosen.jquery.js',
            // 'node_modules/select2/dist/js/select2.full.js',

            // 'node_modules/flatpickr/dist/flatpickr.js',
            // 'node_modules/flatpickr/dist/l10n/uk.js',
            // 'node_modules/flatpickr/dist/l10n/ru.js',
            //
            // 'node_modules/nouislider/distribute/nouislider.js',
            // 'node_modules/wnumb/wNumb.js',

            // 'node_modules/jquery-slimscroll/jquery.slimscroll.js',
            // 'node_modules/jquery.nicescroll/jquery.nicescroll.js',
            // 'node_modules/jquery-ui-dist/jquery-ui.js',

            // 'node_modules/bowser/bundled.js',
            // 'node_modules/bowser/es5.js',

            // 'node_modules/popper.js/dist/popper.js',
            // 'node_modules/bootstrap/dist/js/bootstrap.bundle.js',


            // 'node_modules/aos/dist/aos.js',
            // 'node_modules/wowjs/dist/wow.js',
            // 'node_modules/sticky-kit/dist/sticky-kit.js',

            // 'node_modules/autosize/dist/autosize.js',


            // 'node_modules/animejs/anime.js',

            // 'node_modules/rellax/rellax.js',
            // 'node_modules/scroll-out/dist/scroll-out.js',

            // 'node_modules/fullpage.js/dist/fullpage.js',
            // 'node_modules/typed.js/lib/typed.js',

            // 'node_modules/swup/dist/swup.js',
            // 'node_modules/swupjs/dist/swupjs.js',


            // 'node_modules/gsap/src/minified/TweenMax.min.js',
            // 'node_modules/gsap/src/minified/TimelineMax.min.js',
            // 'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
            // 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
            // 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',

            // 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js',

            // 'node_modules/mediaelement/build/mediaelement.js',
            // 'node_modules/mediaelement/build/mediaelement-and-player.js',


            // 'node_modules/@fortawesome/fontawesome-free/js/all.js',

            // 'node_modules/moment/moment.js',
            // 'node_modules/fullcalendar/dist/fullcalendar.js',
            // 'node_modules/fullcalendar/dist/locales/uk.js',
            // 'node_modules/fullcalendar/dist/locales/ru.js',



            // 'node_modules/retinajs/dist/retina.js',
        ])
            .pipe($.concat('vendor.js'))
            .pipe($.gulp.dest('dev/app/js'))
            .pipe($.browserSync.reload({
                'stream': true
            }));
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src([
            // 'dev/components/_partials/accordion/rew.accordion.js',
            // 'dev/components/_partials/tabs/rew.tabs.js',
            'dev/scripts/dev.js',
            // 'dev/scripts/mail.js'
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
            // .pipe($.sourcemaps.init())
            .pipe($.strip.text())
            // .pipe($.uglify())
            // .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/js'));
    });

    $.gulp.task('zip:build', function () {
        return $.gulp.src('build/**/*')
            .pipe($.zip('build.zip'))
            .pipe($.gulp.dest('./'));
    });
};