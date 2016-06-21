'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./app/styles/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.cssGlobbing({
        extensions: ['.css', '.scss']
      }))
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/styles'))
      .pipe($.browserSync.stream());
  })
};
