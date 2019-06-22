const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const imagemin = require('gulp-imagemin');

function css_style(done) {
  gulp
    .src("./style.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./css/"))
    .pipe(browserSync.stream());
  done();
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function imgMinifier(done) {
  gulp.src('./assets/*')
   .pipe(imagemin())
   .pipe(gulp.dest('./images'))
  done()
}

function watchFiles() {
  gulp.watch("./scss/**/*", css_style);
  gulp.watch("./**/*.html", browserReload);
  gulp.watch("./**/*.php", browserReload);
  gulp.watch("./**/*.js", browserReload);
}

gulp.task("default", gulp.parallel(watchFiles, sync, imgMinifier));
