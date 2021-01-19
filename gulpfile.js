"use strict";

const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const webp = require("gulp-webp");

gulp.task("images", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"));
});

gulp.task("build", gulp.series( "webp", "images"));
