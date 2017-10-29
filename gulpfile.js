//----- CONSTANTS -----//
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglifyjs');


//----- LOG MESSAGE -----//
gulp.task('message', function(){
	return console.log('Gulp is running...');
}); // To run type 'gulp message' in command line

//----- COPY ALL HTML FILES TO BUILD FOLDER AD MINIFY -----//
gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
	 .pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('build'));
});

//----- GULP PREFIXER AND CSS NANO -----//
gulp.task('prefixerAndCssNano', function(){
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(cssnano())
        .pipe(gulp.dest('build/css'))
});

//----- BROWSER SYNC -----//
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'build' //build folder
        }
    });
});

//----- UGLIFY JS -----//
gulp.task('uglify', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

//----- RUN MULTIPLE TASKS AT ONCE IN AN ARRAY -----//
gulp.task('default', ['message', 'copyHtml','prefixerAndCssNano', 'uglify']);

//----- GULP WATCH -----//
gulp.task('watch',['browserSync'], function(){
	gulp.watch('src/css/*.css',['prefixerAndCssNano']);
	gulp.watch('src/js/*.js',['uglify']);
	gulp.watch('src/*.html',['copyHtml']);
	
	
	//reload browser when the files change
	gulp.watch('build/css/*.css', browserSync.reload);
	gulp.watch('build/js/*.js', browserSync.reload);
	gulp.watch('build/*.html', browserSync.reload);
 
});
 