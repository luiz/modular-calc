module.exports = function(grunt) {
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
		},
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist/js',
					src: '**/*.js',
					dest: 'dist/js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['clean', 'copy', 'uglify']);
	grunt.registerTask('default', ['build', 'connect', 'watch']);
};
