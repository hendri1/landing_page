const { src, dest, parallel } = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-minify-css')
const autoprefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

sass.compiler = require('node-sass')

function html() {
  return src('src/index.html')
    .pipe(dest('build'))
}

function image() {
  return src(['src/assets/images/*.jpg', 'src/assets/images/*.png'])
    .pipe(dest('build/images'))
}

function jquery() {
  return src('node_modules/jquery/dist/jquery.min.js')
    .pipe(dest('build/scripts/jquery'))
}

function fontAwesomeJs() {
  return src(['node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js', 'node_modules/@fortawesome/fontawesome-free/js/solid.min.js'])
    .pipe(concat('fontawesome.min.js'))
    .pipe(uglify())
    .pipe(dest('build/scripts/font-awesome'))
}

function fontAwesomeCss() {
  return src(['node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css', 'node_modules/@fortawesome/fontawesome-free/css/solid.min.css'])
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('fontawesome.min.css'))
    .pipe(dest('build/styles/font-awesome'))
}

function css() {
  return src('src/assets/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(dest('build/styles'))
}

function js() {
  return src('src/assets/scripts/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('build/scripts', { sourcemaps: true }))
}

exports.js = js
exports.css = css
exports.html = html
exports.image = image
exports.jquery = jquery
exports.fontAwesomeJs = fontAwesomeJs
exports.fontAwesomeCss = fontAwesomeCss
exports.default = parallel(fontAwesomeCss, fontAwesomeJs, jquery, image, html, css, js)