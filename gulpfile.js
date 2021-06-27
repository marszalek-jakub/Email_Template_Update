// list dependences
const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const imagewebp = require("gulp-webp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const clean = require('gulp-clean');
//functions

function compilecss(){
    return src("src/scss/*.scss")
        .pipe(sass())
        .pipe(prefix())
        .pipe(minify())
        .pipe(dest("dist/css"))
}

function jsmin(){
    return src("src/js/*.js")
        .pipe(terser())
        .pipe(dest("dist/js"))
}

function optimizeImage(){
    return src("src/images/*.{jpg,png")
        .pipe(imagemin([
            imagemin.mozjpeg({quality:90, progressive: true}),
            imagemin.optipng({optimizationLevel:2}),
        ]
     ))
        .pipe(dest("dist/images"))
}


function webpImage(){
    return src("dist/images/*.{jpg,png")
        .pipe(imagewebp())
        .pipe(dest("dist/images"))
}

function copyHtml(){
    return src("src/*.html")
        .pipe(dest("dist/"))
}

function cleanDist() {
    return src("dist", {read: false})
        .pipe(clean());
};

//watchtask

function watchTask(){
    watch("src/scss/*/*.scss",compilecss);
    watch("src/js/*.js",jsmin);
    watch("src/images/*{jpg,png}",optimizeImage);
    watch("src/images/*.{jpg,png}",webpImage);
    watch("src/*.html",copyHtml);
}

// default gulp

exports.default = series(
    cleanDist,
    copyHtml,
    compilecss,
    jsmin,
    optimizeImage,
    webpImage,
    watchTask
);