// Defining requirements
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var harp = require('harp');
var watch = require('gulp-watch');
var del = require('del');
var prettify = require('gulp-prettify');
var clean = require('gulp-clean');

var paths = {
  templates: '_harp/public/**/*.{jade,md}',
  css: '_harp/public/assets/css/*.css',
  sass: ['_harp/public/assets/**/*.scss', 'assets/stylesheets/*.scss'],
  images: '_harp/public/assets/img/**/*',
  js: '_harp/public/assets/js/**/*.js',
	harp: '_harp/',
	harpPublic: '_harp/public/',
	harpCompiled: 'www/'
};


// Live Reload

gulp.task('watch', ['serve'], function() {

  gulp.watch('_harp/**/*', function() {
		reload(paths.harp, {stream: true});
		console.log("Changes detected");
	});
});

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server(paths.harp, {
    port: 3000
  }, function () {
    browserSync({
			files: [
				'public/**.jade,',
				'public/**.json,',
				'public/_partials/**.jade,'
			],
      proxy: "localhost:3000",
      open: true,
      ghostMode: {
        clicks: true,
        forms: false,
        scroll: true
      },
      logLevel: "info",
      notify: false
    });
	});
});

// Compile and prepare for GitHub Pages
gulp.task('compile', function() {
	return harp.compile(paths.harp , paths.harpCompiled, function() {
		// After compiling with harp, move to root directory
		gulp.src('_harp/www/**/*')
			.pipe(gulp.dest('./'));
	});

});

gulp.task('clean', function() {
	return del.sync(['_harp/www']);
});

/**
 * Default task
 */
gulp.task('default', ['watch']), function() {};
