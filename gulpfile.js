const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const sourcemap = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const copy = require('gulp-copy');


function gulp_html(){
    return gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
}

function gulp_sass(){
    return gulp.src('./src/**/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(rename('./styles.css'))
    .pipe(postcss([require('autoprefixer'), require('cssnano')]))
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./build/'))
}

function gulp_es(){
    return gulp.src('./src/app.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('./build'));
}

function gulp_copy(){
    return gulp.src('./src/assets/*.svg')
    .pipe(copy('./'))
    .pipe(gulp.dest('./build/assets'))
}

function watch(){
    gulp.watch('./src/*.html',gulp_html);
    gulp.watch('./src/**/*.scss',gulp_sass_dev);
    gulp.watch('./src/*.js',gulp_es)
}





exports.html = gulp_html;
exports.copy = gulp_copy
exports.js=gulp_es;
exports.sass_dev = gulp_sass;
exports.watch = watch;

