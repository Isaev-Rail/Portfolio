'use strict';

module.exports = function () {
  $.gulp.task('copy.image', function () {
    return $.gulp.src('./app/images/**/*.*', {since: $.gulp.lastRun('copy.image')})
      .pipe($.gulp.dest($.config.root + '/images'));
  });
};
