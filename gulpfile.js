let cleanCSS = require('gulp-clean-css')
var gulp = require('gulp');
var del = require('del')
const sourcemaps = require('gulp-sourcemaps')
var run = require('gulp-run')
var babel = require('gulp-babel')

function clean () {
  return del(['./dist'])
}

function buildCss () {
  return run('npm run build-css').exec()
}
function buildLib () {
  return gulp.src('./src/checkbox/index.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        "presets": ["react-app"]
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}

function copyCss () {
  return gulp.src('./src/checkbox/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}

gulp.task('default', gulp.series(
  clean,
  buildCss,
  buildLib,
  copyCss
))