/**
 * Created by xiayan on 15/12/2015.
 */
var gulp = require ('gulp'),
    gutil = require ('gulp-util'),
    coffee = require ('gulp-coffee'),
    browserify = require ('gulp-browserify'),
    compass = require ('gulp-compass'),
    concat = require ('gulp-concat');

var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js',
];

var sassSources = ['components/sass/style.scss'];


gulp.task('coffee', function () {
    gulp.src('components/coffee/tagline.coffee')
        .pipe(coffee({bare: true})
            .on('error',gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

gulp.task('js',function(){
   gulp.src(jsSources)
       .pipe(concat('script.js'))
       .pipe(gulp.dest('build/development/js'))
});

gulp.task('compass',function(){
    gulp.src(sassSources)
        .pipe(compass({
            sass:'components/sass',
            image:'builds/development/images',
            style:'expanded'
        })
        .on('error',gutil.log))
        .pipe(gulp.dest('build/development/css'))
});