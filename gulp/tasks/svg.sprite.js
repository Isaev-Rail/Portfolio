'use strict'

var config = {
  mode: {
    defs: {
      dest: '.',
      sprite: 'sprite.svg'
    }
  },
  shape: {
    spacing: {
      padding: 0,
      box: 'content'
    }
  }
};

module.exports = function () {
  $.gulp.task('svg.sprite', function () {
    return $.gulp.src('./app/images/svg/*.svg')
      .pipe($.gp.svgSprite(config))
      .pipe($.rsp.remove({ properties: [$.rsp.PROPS_FILL] }))
      .pipe($.gulp.dest($.config.root + '/images'))
  });
};