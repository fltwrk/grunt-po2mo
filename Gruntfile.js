/*
 * grunt-po2mo
 * https://github.com/fltwrk/grunt-po2mo
 *
 * Copyright (c) 2013-2019 Michele Bertoli, floatwork_
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
	const po2mOptions = {
		src: "tmp/fixtures/fr.po",
		dest: "tmp/fr.mo",
	};

	// Project configuration.
	grunt.initConfig({
		eslint: {
			target: ["tasks/po2mo.js"],
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ["tmp"],
		},

		// Configuration to be run (and then tested).
		po2mo: {
			stage: po2mOptions,
			prod: po2mOptions,
		},

		// Unit tests.
		nodeunit: {
			tests: ["test/*_test.js"],
		},
	});

	// Actually load this plugin's task(s).
	grunt.loadTasks("tasks");

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");

	grunt.registerTask("copy", "Copy fixtures to a temp location.", function () {
		grunt.file.copy("test/fixtures/fr.po", "tmp/fixtures/fr.po");
	});

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask("test", ["clean", "copy", "po2mo", "nodeunit"]);

	// Lint the source
	grunt.registerTask("lint", ["eslint"]);

	// By default, lint and run all tests.
	grunt.registerTask("default", ["lint", "test"]);
};
