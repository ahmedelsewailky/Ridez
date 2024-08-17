"use strict";

import gulp from "gulp";
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import gutil from "gulp-util";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import rimraf from "rimraf";
import comments from "gulp-header-comment";
import jshint from "gulp-jshint";

const scss = gulpSass(sass);

var path = {
  src: {
    html: "source/*.html",
    js: "source/js/*.js",
    scss: "source/scss/**/*.scss",
    images: "source/images/**/*.+(png|jpg|gif|svg)",
    libs: "source/libs/**/*.*"
  },
  build: {
    dir: "dist/",
  },
};

// HTML
gulp.task("html:build", function () {
  return gulp
    .src(path.src.html)
    .pipe(
      comments(`
    TWITTER: https://twitter.com/elsewailky
    FACEBOOK: https://www.facebook.com/ahmedelsewailky
    GITHUB: https://github.com/ahmedelsewailky/
    LINKEDIN: https://www.linkedin.com/in/ahmed-elsewailky-a83882144/
    `)
    )
    .pipe(gulp.dest(path.build.dir));
});

// SCSS
gulp.task("scss:build", function () {
  return gulp
    .src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(
      scss({
        outputStyle: "expanded",
      }).on("error", scss.logError)
    )
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("/"))
    .pipe(
      comments(`
    TWITTER: https://twitter.com/elsewailky
    FACEBOOK: https://www.facebook.com/ahmedelsewailky
    GITHUB: https://github.com/ahmedelsewailky/
    LINKEDIN: https://www.linkedin.com/in/ahmed-elsewailky-a83882144/
    `)
    )
    .pipe(gulp.dest(path.build.dir + "css/"));
});

// Javascript
gulp.task("js:build", function () {
  return gulp
    .src(path.src.js)
    .pipe(jshint.reporter("jshint-stylish"))
    .on("error", gutil.log)
    .pipe(
      comments(`
    TWITTER: https://twitter.com/elsewailky
    FACEBOOK: https://www.facebook.com/ahmedelsewailky
    GITHUB: https://github.com/ahmedelsewailky/
    LINKEDIN: https://www.linkedin.com/in/ahmed-elsewailky-a83882144/
  `)
    )
    .pipe(gulp.dest(path.build.dir + "js/"));
});

// Images
gulp.task("images:build", function () {
  return gulp
    .src(path.src.images)
    .pipe(gulp.dest(path.build.dir + "images/"));
});

// Plugins
gulp.task("libs:build", function () {
  return gulp
    .src(path.src.libs)
    .pipe(gulp.dest(path.build.dir + "libs/"));
});

// Clean Build Folder
gulp.task("clean", function (cb) {
  rimraf("./dist", cb);
});

// Watch Task
gulp.task("watch", function () {
  gulp.watch(path.src.html, gulp.series("html:build"));
  gulp.watch(path.src.scss, gulp.series("scss:build"));
  gulp.watch(path.src.js, gulp.series("js:build"));
  gulp.watch(path.src.images, gulp.series("images:build"));
  gulp.watch(path.src.libs, gulp.series("libs:build"));
});

// Dev Task
gulp.task(
  "default",
  gulp.series(
    "clean",
    "html:build",
    "js:build",
    "scss:build",
    "images:build",
    "libs:build"
  )
);

// Build Task
gulp.task(
  "build",
  gulp.series(
    "html:build",
    "js:build",
    "scss:build",
    "images:build",
    "libs:build",
  )
);
