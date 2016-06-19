'use strict';

module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./app/scripts/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./app/styles/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./app/template/**/*.jade', $.gulp.series('jade'));
    $.gulp.watch('./app/images/**/*.*', $.gulp.series('copy.image'));
  });
};
