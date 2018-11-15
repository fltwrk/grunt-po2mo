'use strict';

const grunt = require('grunt');

exports.po2mo = {
  setUp: function(done) {
    done();
  },
  stage: function(test) {
    test.expect(1);

    const actual = grunt.file.read('tmp/fr.mo');
    const expected = grunt.file.read('test/expected/fr.mo');
    test.equal(actual, expected);

    test.done();
  },
  prod: function(test) {
    test.expect(1);

    const expected = grunt.file.exists('tmp/fixtures/fr.po');
    test.equal(expected, false);

    test.done();
  },
};
