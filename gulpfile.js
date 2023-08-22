const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("./src/assets/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ['./src/**/*.tsx']}))
    .pipe(dest("css"));
}

function watchTask() {
  watch(['shinobi/**/*.scss', './src/assets/**/*.scss', './src/**/*.tsx'], buildStyles);
}

exports.default = series(buildStyles, watchTask);