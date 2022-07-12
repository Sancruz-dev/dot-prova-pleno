const
  autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel'),
  clean = require('gulp-clean'),
  cleanCss = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  es = require('event-stream'),
  gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  inject = require('gulp-inject'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  tinypng = require('gulp-tinypng-compress'),
  uglify = require('gulp-uglify'),
  { series } = require('gulp');


// SOUCE PATH ------
const
  js_src = "src/assets/js/**/*.js",
  src_babel_dir = "src/assets/js/babel",
  src_babel_file = "src/assets/js/babel/all-babel.js",
  css_src = "src/assets/css/**/*.css",
  img_src = "src/assets/img/**/*";


// DIST PATH ------
const
  js_dist = "./dist/assets/js",
  css_dist = "./dist/assets/css/style",
  img_dist = "./dist/assets/img";


// Compile Javascript ------
function useBabel() {
  return gulp.src(js_src)
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(concat('all-babel.js'))
    .pipe(gulp.dest(src_babel_dir))
}


// BUILD | INJECT | MINIFY | CONCAT 
// Minify only PNG, JPEG and WebP images
function index() {
  let appStreamImg = gulp.src(img_src)
    .pipe(tinypng('5CbTXlCZJm5lSdqHlzhZ5V1vHnt8XsHH'))
    .pipe(gulp.dest(img_dist));

  let appStreamJs = gulp.src([src_babel_file])
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(js_dist));

  let appStreamCSS = gulp.src([css_src])
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(concat('all.css'))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(css_dist));

  return gulp.src('./src/index.html')
    .pipe(inject(es.merge(
      appStreamCSS, appStreamJs, appStreamImg
    )))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
}


// CORRECTS INJECTION ------
function injectJs() {
  return gulp.src('./dist/**/*.html')
    .pipe(inject(
      gulp.src('./dist/**/*.js', { read: false }),
      { relative: true }
    ))
    .pipe(gulp.dest('./dist'));
}


function injectCss() {
  return gulp.src('./dist/**/*.html')
    .pipe(inject(
      gulp.src('./dist/**/*.css', { read: false }),
      { relative: true }
    ))
    .pipe(gulp.dest('./dist'));
}


// if you have problems with tinyMin, use imgMin
function imgMin() {
  return gulp.src(img_src)
    .pipe(imagemin())
    .pipe(gulp.dest(img_dist));
}


// Watch the src folder.
// Runs the build function if there is a change in:
// index.html and img, js and css folders
function stalker() {
  return gulp.watch('./src',
    series(
      useBabel,
      index,
      injectJs,
      injectCss,
      clearBabel
    ))
}


// Delete specific folders ------
function clearDist() {
  return gulp.src('dist', { read: false })
    .pipe(clean());
}
function clearBabel() {
  return gulp.src(src_babel_dir, { read: false })
    .pipe(clean());
}


// TASKS ------
exports.imgmin = imgMin;
exports.clsdist = clearDist;
exports.watch = stalker;
exports.default = series(
  useBabel,
  index,
  injectJs,
  injectCss,
  clearBabel
);