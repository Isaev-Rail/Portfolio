'use strict';

module.exports = function() {
  $.gulp.task('jade', function() {
    var YOUR_LOCALS = './app/template/data/YOUR_LOCAL.json';

    return $.gulp.src($.path.template)
      .pipe($.gp.jade({
        locals: JSON.parse($.fs.readFileSync(YOUR_LOCALS, 'utf-8')),
        pretty: '\t'
      }))
      .on('error', $.gp.notify.onError(function(error) {
        console.log(123);
        return {
          title: 'Jade',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
