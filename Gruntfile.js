module.exports = function(grunt) {
	var jsFiles = ['main.js', 'binder.js', 'calc.js', 'ops/plus.js', 'ops/minus.js', 'ops/divided.js', 'ops/times.js'];
	var distFiles = {};
	jsFiles.forEach(function(file) {
		distFiles['dist/js/' + file] = 'src/js/' + file;
	});

	grunt.initConfig({
		clean: {
			dist: ['dist']
		},
		copy: {
			dist: {
				cwd: 'src',
				dest: 'dist',
				src: '**',
				expand: true
			}
		},
		'6to5': {
			dist: {
				files: distFiles,
			},
			options: {
				modules: 'amd'
			}
		},
		watch: {
			options: {
				livereload: true
			},
			src: {
				files: ['src/**/*'],
				options: {
					event: ['all']
				},
				tasks: '6to5'
			}
		},
		connect: {
			server: {
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-6to5');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['clean', 'copy', '6to5', 'connect', 'watch']);
};
