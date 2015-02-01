var gulp = require('gulp');

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./src/gulp/tasks', { recurse: true });


gulp.task('default', ['images', 'markup', 'flowtype', 'watch']);
 
