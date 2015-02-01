var gulp        = require('gulp');
var config   = require('../config');

gulp.task('clean', function(done) {
  del([config.dest], done);
});