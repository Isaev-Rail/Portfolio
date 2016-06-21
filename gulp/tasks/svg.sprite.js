'use strict'

var svg_config = {

  mode: {
    symbol: {
      sprite: "../sprite.svg",
      render: {
        scss: {
          dest:'../../../app/styles/_sprite.scss'
        }
      },
      // example : true
    }
  }
};


module.exports = function () {
  $.gulp.task('svg.sprite', function () {
    return $.gulp.src('./app/images/svg/*.svg')
      .pipe($.gp.svgmin({js2svg: {pretty: true}}))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parseOptions: {xmlMode: true}
      }))
      .pipe($.gp.replace('&gt', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            prefix : "%s",
            sprite : "../sprite.svg"
          }
        }
      }))
      .pipe($.gulp.dest($.config.root + '/images'))
  });
};