'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const babel = require('gulp-babel');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('babel', () => {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/tmp'));
});

gulp.task('js', function() {
  return gulp.src('src/tmp/**.js')
    .pipe(sourcemaps.init())
    .pipe(concat('build.js'))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*', gulp.series('sass'));
});

gulp.task('watch-js', function() {
  gulp.watch('src/js/*.js', gulp.series('babel'));
});

gulp.task('build', gulp.series('sass', 'js'));
