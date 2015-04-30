module.exports = function(grunt) {
  require('time-grunt')(grunt);
  grunt.registerTask('build', ['clean', 'unswap', 'copy:all', 'be_ugly', 'requirejs:build', 'copy:built', 'swap']);
};

