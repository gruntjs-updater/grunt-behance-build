module.exports = function(grunt) {
  grunt.registerTask('build', ['clean', 'unswap', 'copy:all', 'be_ugly', 'requirejs:build', 'copy:built', 'swap']);
};

