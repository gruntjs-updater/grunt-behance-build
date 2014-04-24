/*
 * grunt-behance-build
 * https://github.com/behance/grunt-behance-build
 *
 * Copyright (c) 2014 Behance Javascript
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    options: {
      buildDir: 'public/assets-built',
      tasksDir: 'tasks',
      junitFile: grunt.option('junitFile') || 'test/jasmine/report.xml',
      coverageDir: grunt.option('coverageDir') || 'test/jasmine/coverage'
    },

    clean: {
      build: ['<%= options.buildDir %>']
    }
  });

  grunt.loadTasks('tasks');
};
