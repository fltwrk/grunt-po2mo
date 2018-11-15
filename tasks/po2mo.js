/*
 * grunt-po2mo
 * https://github.com/floatwork711/grunt-po2mo
 *
 * Copyright (c) 2013-2018 Michele Bertoli, floatwork_
 * Licensed under the MIT license.
 */

'use strict';

const { spawnSync } = require('child_process');

module.exports = function(grunt) {
  grunt.registerMultiTask('po2mo', 'Compile .po files into binary .mo files with msgfmt.', function() {
    const options = this.options({
      deleteSrc: false,
    });

    this.files.forEach(function(file) {

      const src = file.src[0];
      let dest = file.dest;

      if (dest.indexOf('.po') > -1) {
        dest = dest.replace('.po', '.mo');
      }

      grunt.file.write(dest);
      grunt.verbose.writeln('Executing:', 'msgfmt', '-o', dest, src);

      const result = spawnSync('msgfmt', ['-o', dest, src]);

      grunt.verbose.writeln('Executed with status: ' + result.status);

      if (result.status !== 0) {
        grunt.log.error(result.stderr);
      }

      if (options.deleteSrc) {
        grunt.file.delete(src);
      }
    });
  });
};
