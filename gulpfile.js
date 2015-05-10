var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var react = require('gulp-react');
var inject = require('gulp-inject');
var sass = require('gulp-sass');


gulp.task('sass', function () {
  gulp.src('client/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('copy', function() {
  gulp.src(['client/**/*.{js,html,ico}', '!client/js/components/*'])
    .pipe(gulp.dest('dist/'));
  gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css'])
    .pipe(gulp.dest('dist/styles'))
});

gulp.task('inject', ['copy','sass'], function () {
  var target = gulp.src('dist/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src('dist/styles/*.css', {read: false});
  return target.pipe(inject(sources))
    .pipe(gulp.dest('dist'));
});

gulp.task('react', function () {
  gulp.src('client/js/components/**/*.js')
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('dist/js/components/'));
});

gulp.task('browserify', function() {
  gulp.src('client/js/app.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('client/**/*.*', ['inject', 'react', 'browserify']);
});

gulp.task('default',['inject', 'react', 'browserify', 'watch']);