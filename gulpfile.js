const gulp = require('gulp');
const postcss = require('gulp-postcss');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

function css() {
  return gulp
    .src('src/css/index.css')
    .pipe(postcss())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('dist/css'));
}

function fileInclude() {
  return gulp
    .src(['src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest((file) => {
      const destpath = file.base.replace(__dirname + '/src', __dirname + '/dist')
      console.log(destpath)
      return destpath
    }));
}

function js() {
  return gulp
    .src('src/js/index.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/js'))
}

const all = gulp.parallel(
  css,
  fileInclude,
  js
)

exports.build = all

exports.watch = (cb) => {
  all()
  gulp.watch('src', all);
  cb()
}