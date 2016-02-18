/**
 * Created by Thib on 18/02/2016.
 */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('sass', function () {
    gulp.src('dist/sass/main.scss')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
            }}))
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js_app', function () {
    return gulp.src('dist/js/app/**/*.js')
        .pipe(concat('app/js/app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(''));
});


gulp.task('watch', ['browserSync'], function() {
    gulp.watch('dist/sass/**/*.scss', ['sass']);
    gulp.watch('dist/js/app/**/*.js', ['js_app']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('fonts', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('app/fonts'))
});

gulp.task('default', ['sass', 'js_app']);