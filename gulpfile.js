"use strict";

import gulp from "gulp";
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import fileinclude from "gulp-file-include";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import imagemin from "gulp-imagemin";
import htmlformat from "gulp-format-html";

const scss = gulpSass(sass);

var path = {
    src: {
        html: "src/*.html",
        scss: "src/scss/**/*.scss",
        images: "src/images/**/*.+(png|jpg|gif|svg)",
        plugins: "src/plugins/**/*.*",
        jsFiles: [
            "src/js/*.js",
        ]
    },
    build: {
        dir: "dist/",
    },
};

// HTML
gulp.task("html:build", function () {
    return gulp
        .src(path.src.html)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlformat())
        .pipe(gulp.dest(path.build.dir));
});

// SCSS
gulp.task("scss:build", function () {
    return gulp
        .src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(path.build.dir + "css/"));
});

// Javascript
gulp.task("js:build", function () {
    return gulp
        .src(path.src.jsFiles)
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.dir + "js/"));
});

// Images
gulp.task("images:build", function () {
    return gulp
        .src(path.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.dir + "images/"));
});

// Plugins
gulp.task("plugins:build", function () {
    return gulp
        .src(path.src.plugins)
        .pipe(gulp.dest(path.build.dir + "plugins/"));
});

// Watch Task
gulp.task("watch", function () {
    gulp.watch(path.src.html, gulp.series("html:build"));
    gulp.watch(path.src.scss, gulp.series("scss:build"));
    gulp.watch(path.src.jsFiles, gulp.series("js:build"));
    gulp.watch(path.src.images, gulp.series("images:build"));
    gulp.watch(path.src.plugins, gulp.series("plugins:build"));
});

// Dev Task
gulp.task(
    "default",
    gulp.series(
        "html:build",
        "js:build",
        "scss:build",
        "images:build",
        "plugins:build",
        "watch"
    )
);