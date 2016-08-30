module.exports = function(grunt) {
	// project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		paths: {
			git: '',
			dropbox: '',
			dist: {
				src: 'src',
				dest: 'public'
			},
			js: {
				src: '<%= paths.dist.src %>/js',
				dest: '<%= paths.dist.dest %>/js'
			},
			css: {
				lib: {
					pills: 'node_modules/pills/dist/pills.min.css'
				},
				src: '<%= paths.dist.src %>/stylus',
				dest: '<%= paths.dist.dest %>/css'
			},
			jade: {
				src: '<%= paths.dist.src %>/jade',
				dest: '<%= paths.dist.dest %>'
			},
			img: {
				src: '<%= paths.dist.src %>/images',
				dest: '<%= paths.dist.dest %>/img'
			},
			pdf: {
				src: '<%= paths.dist.src %>/pdf',
				dest: '<%= paths.dist.dest %>/pdf'
			},
			icon: {
				src: '<%= paths.dist.src %>/icon',
				dest: '<%= paths.dist.dest %>'
			},
			googlesiteverification: {
				src: '<%= paths.dist.src %>/google-site-verification',
				dest: '<%= paths.dist.dest %>'
			}
		},
		jade: {
			pages: {
				expand: true,
				cwd: '<%= paths.jade.src %>/pages',
				src: ['*.jade'],
				dest: '<%= paths.jade.dest %>',
				ext: '.html'
			}
		},
		stylus: {
			'module-index': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/index.styl'
				],
				dest: '<%= paths.css.dest %>/module.index.css'
			},
			'module-land': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/land.styl'
				],
				dest: '<%= paths.css.dest %>/module.land.css'
			},
			'module-schedule': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/schedule.styl'
				],
				dest: '<%= paths.css.dest %>/module.schedule.css'
			},
			'module-guest': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/guest.styl'
				],
				dest: '<%= paths.css.dest %>/module.guest.css'
			},
			'module-info': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/info.styl'
				],
				dest: '<%= paths.css.dest %>/module.info.css'
			},
			'module-about': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/about.styl'
				],
				dest: '<%= paths.css.dest %>/module.about.css'
			},
			'module-artist_kotaka': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/artist.styl',
					'<%= paths.css.src %>/modules/artist_kotaka.styl'
				],
				dest: '<%= paths.css.dest %>/module.artist_kotaka.css'
			},
			'module-artist_yamamoto': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/artist.styl',
					'<%= paths.css.src %>/modules/artist_yamamoto.styl'
				],
				dest: '<%= paths.css.dest %>/module.artist_yamamoto.css'
			},
			'module-artist_wada': {
				src: [
					'<%= paths.css.src %>/lib/*.styl',
					'<%= paths.css.src %>/common/*.styl',
					'<%= paths.css.lib.pills %>',
					'<%= paths.css.src %>/modules/artist.styl',
					'<%= paths.css.src %>/modules/artist_wada.styl'
				],
				dest: '<%= paths.css.dest %>/module.artist_wada.css'
			}
		},
		copy: {
			'images-png': {
				expand: true,
				cwd: '<%= paths.img.src %>/',
				src: ['*.png'],
				dest: '<%= paths.img.dest %>',
				ext: '.png'
			},
			'images-jpg': {
				expand: true,
				cwd: '<%= paths.img.src %>/',
				src: ['**/*.jpg'],
				dest: '<%= paths.img.dest %>',
				ext: '.jpg'
			},
			'favicon': {
				src: ['<%= paths.icon.src %>/favicon.ico'],
				dest: '<%= paths.icon.dest %>/favicon.ico'
			},
			'pdf-schedule': {
				expand: true,
				cwd: '<%= paths.pdf.src %>/',
				src: ['**/*.pdf'],
				dest: '<%= paths.pdf.dest %>',
				ext: '.pdf'
			},
			'google-site-verification': {
				expand: true,
				cwd: '<%= paths.googlesiteverification.src %>/',
				src: ['*.html'],
				dest: '<%= paths.googlesiteverification.dest %>',
				ext: '.html'
			}
		},
		uglify: {
			options: {
				mangle: true,
				beautify: false
			},
			'module-index': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/index.js'
				],
				dest: '<%= paths.js.dest %>/module.index.js'
			},
			'module-land': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/land.js'
				],
				dest: '<%= paths.js.dest %>/module.land.js'
			},
			'module-schedule': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/schedule.js'
				],
				dest: '<%= paths.js.dest %>/module.schedule.js'
			},
			'module-guest': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/guest.js'
				],
				dest: '<%= paths.js.dest %>/module.guest.js'
			},
			'module-info': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/info.js'
				],
				dest: '<%= paths.js.dest %>/module.info.js'
			},
			'module-about': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/about.js'
				],
				dest: '<%= paths.js.dest %>/module.about.js'
			},
			'module-artist_kotaka': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/artist.js',
					'<%= paths.js.src %>/modules/artist_kotaka.js'
				],
				dest: '<%= paths.js.dest %>/module.artist_kotaka.js'
			},
			'module-artist_yamamoto': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/artist.js',
					'<%= paths.js.src %>/modules/artist_yamamoto.js'
				],
				dest: '<%= paths.js.dest %>/module.artist_yamamoto.js'
			},
			'module-artist_wada': {
				src: [
					'<%= paths.js.src %>/lib/*.js',
					'<%= paths.js.src %>/common/*.js',
					'<%= paths.js.src %>/modules/artist.js',
					'<%= paths.js.src %>/modules/artist_wada.js'
				],
				dest: '<%= paths.js.dest %>/module.artist_wada.js'
			}
		},
		clean: {
			dist: {
				src: ['<%= paths.dist.dest %>']
			}
		},
		watch: {
			src: {
				options: {
					livereload: true
				},
				files: [
					'<%= paths.js.src %>/**/*.js',
					'<%= paths.jade.src %>/**/*.jade',
					'<%= paths.css.src %>/**/*.styl',
					'<%= paths.img.src %>/**/*.*'
				],
				tasks: ['uglify', 'jade', 'stylus', 'copy']
			}
		},
		connect: {
			local: {
				options: {
					port: 3101,
					base: ['<%= paths.dist.dest %>'],
					livereload: true
				}
			}
		}	});

	// load npm tasks.
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// define default tasks.
	grunt.registerTask('default', ['clean', 'stylus', 'jade', 'uglify', 'copy', 'connect', 'watch']);

};
