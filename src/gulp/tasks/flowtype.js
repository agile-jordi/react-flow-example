var gulp = require('gulp');
var config       = require('../config').browserify;
var flow = require('gulp-flowtype');

gulp.task('flowtype', function() {
  return gulp.src('./src/main/javascript/main.js')
    .pipe(flow({
        all: true,
        weak: false,
        declarations: './declarations',
        killFlow: false,
        beep: true
    }))
    .pipe(gulp.dest('./out'));
});