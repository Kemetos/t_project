/**
 * Created by Thib on 18/02/2016.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');



gulp.task('sass', function () {
    gulp.src('dist/sass/main.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
            }}))
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('js_app', function () {
    return gulp.src('dist/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});


gulp.task('watch', function() {
    gulp.watch('dist/sass/**/*.scss', ['sass']);
    gulp.watch('dist/js/**/*.js', ['js_app']);
});

gulp.task('fonts', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('app/fonts'))
});

gulp.task('default', ['sass', 'js_app']);