module.exports = function(grunt) {
	var file = require('file');
	var distFiles = {};

	file.walkSync('src/js', function(dirPath, dirs, files) {
		if (dirPath.indexOf('/lib') != -1) {
			return;
		}
		files.forEach(function(jsFile) {
			var srcPath = file.path.join(dirPath, jsFile);
			var newPath = srcPath.replace('src', 'dist');
			distFiles[newPath] = srcPath;
		});
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
				tasks: 'build'
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

	grunt.registerTask('compile', ['6to5']);
	grunt.registerTask('build', ['clean', 'copy', 'compile']);
	grunt.registerTask('default', ['build', 'connect', 'watch']);
};
