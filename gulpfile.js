// gulpfile.js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var connect = require("gulp-connect");

// define a task with the name of 'default'
// the function is a callback to perform when the task is run
gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('timestamp', function (){
  console.log( new Date() );
});

gulp.task('jshint', function() {      // register jshint task
  return gulp.src('./js/*.js')        // load all .js files in ./js/
  .pipe(jshint())                     // run jshint (from package) on the files
  .pipe(jshint.reporter(stylish));    // report jshint output in a stylish way
});

gulp.task('sass', function () {
return gulp.src('./css/**/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('./css/'))
 .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({ livereload: true });
});
