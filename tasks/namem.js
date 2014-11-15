'use strict';

module.exports = function(grunt) {
	var file = require('file');
	var fs   = require('fs');

	grunt.registerMultiTask('namem', 'Names AMD modules', function() {
		var filter  = this.data.filter;
		var basedir = this.data.base;

		file.walkSync(basedir, function(dirPath, dirs, files) {
			files.forEach(function(jsFile) {
				var filepath = file.path.join(dirPath, jsFile);

				if (filepath.indexOf('.js') === -1 || !filter(filepath)) {
					return;
				}

				var contents       = fs.readFileSync(filepath);
				var amdModule      = /^(\s*define\()/m;
				var namedAmdModule = /^(\s*define\("[^"]+")/m;
				var moduleDeps     = /^(\s*define\("[^"]+",)\s*(\[[^\]]*\])?/m;

				if (!amdModule.test(contents)) {
					grunt.log.warn('File', filepath, 'not identified as AMD module; skipping');
					return;
				}
				if (namedAmdModule.test(contents)) {
					grunt.log.warn('File', filepath, 'is already a named AMD module; skipping');
					return;
				}

				var moduleName = filepath.replace(basedir + '/', '').replace('.js', '');
				grunt.log.writeln('Naming ' + filepath + ' as ' + moduleName);

				var namedContents = contents.toString().replace(amdModule, '$1"' + moduleName + '",');

				var deps = eval(moduleDeps.exec(namedContents)[2]);
				var absoluteDeps = deps.map(function(dep) {
					var pathToBaseDir = dirPath.replace(basedir, '');
					return dep.replace('.', pathToBaseDir).replace('/', '');
				});

				var absoluteDepsAsString = '["' + absoluteDeps.toString().replace(/,/g, '","') + '"]';

				var namedDepsContents = namedContents.replace(moduleDeps, '$1' + absoluteDepsAsString);

				fs.writeFileSync(filepath, namedDepsContents);
			});
		});
	});
};
