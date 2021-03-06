/* global require */

var gulp = require('gulp');
var stylelint = require('gulp-stylelint');
var eslint = require('gulp-eslint');

var lintPathsCSS = [
  'assets/scss/**/*.scss',
  'assets/css/*.css'
];

var lintPathsJS = [
  'assets/js/**/*.js'
];

gulp.task('css:lint', () => {
  return gulp.src(lintPathsCSS)
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true}]
    }));
});

gulp.task('js:lint', () => {
  return gulp.src(lintPathsJS)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('assets', function(){
  var p = require('./package.json');
  var assets = p.assets;
  return gulp.src(assets, {cwd : 'node_modules/**'})
    .pipe(gulp.dest('assets/lib'));
});

gulp.task('test', function() {
  gulp.start('css:lint');
  gulp.start('js:lint');
});

gulp.task('default', function() {
  gulp.start('assets');
  gulp.start('test');
});
