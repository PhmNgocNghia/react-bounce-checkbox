
var gulpCopy = require('gulp-copy')
var gulp = require('gulp');
var del = require('del')
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
    .pipe(babel({
        "presets": ["react-app"]
      }))
    .pipe(gulp.dest('dist'))
}

function copyCss () {
  return gulp.src(['./src/checkbox/*.css'])
    .pipe(gulp.dest('dist'))
}

gulp.task('default', gulp.series(
  clean,
  buildCss,
  buildLib,
  copyCss
))