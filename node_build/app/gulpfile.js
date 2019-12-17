var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//js minify
gulp.task('js-minify', function() {
    return gulp.src(['./js/*.js', '!./js/*.min.js'])
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('./js/'));
});
