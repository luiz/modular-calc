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
		useminPrepare: {
			html: 'dist/index.html'
		},
		usemin: {
			html: 'dist/index.html'
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

	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('compile', ['useminPrepare', 'usemin', 'concat', 'uglify']);
	grunt.registerTask('build', ['clean', 'copy', 'compile']);
	grunt.registerTask('default', ['build', 'connect', 'watch']);
};
