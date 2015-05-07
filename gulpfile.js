var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var react = require('gulp-react');


gulp.task('copy', function() {
  gulp.src(['client/**/*.{js,html,css}', '!client/js/components/*'])
    .pipe(gulp.dest('dist/'));
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
  gulp.watch('client/js/**/*.*', ['copy', 'react', 'browserify']);
});

gulp.task('default',['copy', 'react', 'browserify', 'watch']);