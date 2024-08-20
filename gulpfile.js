"use strict";

import gulp from "gulp";
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import fileinclude from "gulp-file-include";
import uglify from "gulp-uglify";
import concat from "gulp-concat";
import htmlformat from "gulp-format-html";
import browserSync from "browser-sync";

const scss = gulpSass(sass);

const server = browserSync.create();

var path = {
    src: {
        html: "src/*.html",
        scss: "src/scss/**/*.scss",
        images: "src/images/**/*.{png,jpg,jpeg,gif,svg}",
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
        .pipe(gulp.dest(path.build.dir))
        .pipe(server.stream());
});

// SCSS
gulp.task("scss:build", function () {
    return gulp
        .src(path.src.scss)
        .pipe(sourcemaps.init())
        .pipe(scss({ outputStyle: "expanded" }).on("error", scss.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(path.build.dir + "css/"))
        .pipe(server.stream());
});

// Javascript
gulp.task("js:build", function () {
    return gulp
        .src(path.src.jsFiles)
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.dir + "js/"))
        .pipe(server.stream());
});

// Images
gulp.task("images:build", function () {
    return gulp.src(path.src.images, { encoding: false })
        .pipe(gulp.dest(path.build.dir + "images/"))
        .pipe(server.stream());
});

// Plugins
gulp.task("plugins:build", function () {
    return gulp
        .src(path.src.plugins)
        .pipe(gulp.dest(path.build.dir + "plugins/"))
        .pipe(server.stream());
});


// Serve and watch files
gulp.task('serve', () => {
    server.init({
        server: {
            baseDir: './dist/'
        }
    });
    gulp.watch(path.src.html, gulp.series("html:build"));
    gulp.watch(path.src.scss, gulp.series("scss:build"));
    gulp.watch(path.src.jsFiles, gulp.series("js:build"));
    gulp.watch(path.src.images, gulp.series("images:build"));
    gulp.watch(path.src.plugins, gulp.series("plugins:build"));
});

// Define default task
gulp.task('default',
    gulp.series(
        gulp.parallel('html:build', 'scss:build', 'js:build', 'images:build', 'plugins:build'),
        'serve'
    ));

// gulp.task(
//     "default",
//     gulp.series(
//         "html:build",
//         "js:build",
//         "scss:build",
//         "images:build",
//         "plugins:build",
//         "watch"
//     )
// );