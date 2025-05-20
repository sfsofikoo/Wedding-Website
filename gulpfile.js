const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// SCSS таска
function scssTask() {
  return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// HTML таска
function htmlTask() {
  return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// JS таска
function jsTask() {
  return src('src/js/**/*.js')
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}

// IMG таска — копіює зображення в dist/img
function imgTask() {
  return src('src/img/**/*', {encoding: false})
    .pipe(dest('dist/img'))
    .pipe(browserSync.stream());
}

// СЕРВЕР + відстеження змін
function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  watch('src/scss/**/*.scss', scssTask);
  watch('src/*.html', htmlTask);
  watch('src/js/**/*.js', jsTask);
  watch('src/img/**/*', imgTask); // 🔥 Додаємо відстеження змін зображень
}

function fontsTask() {
  return src('src/fonts/**/*')
    .pipe(dest('dist/fonts'))
    .pipe(browserSync.stream());
}
// Експорт завдань
exports.default = series(
  parallel(scssTask, htmlTask, jsTask, imgTask, fontsTask),
  serve
);
