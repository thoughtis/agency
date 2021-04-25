const gulp = require('gulp');
const postcss = require('gulp-postcss');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');

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
      const destpath = file.base.replace(__dirname + '/src', __dirname + '/dist',)
      console.log(destpath)
      return destpath
    }));
}

const all = gulp.parallel(
  css,
  fileInclude
)

exports.build = (cb) => {
  all()
  cb()
}

exports.watch = (cb) => {
  all()
  gulp.watch('src', all);
  cb()
}