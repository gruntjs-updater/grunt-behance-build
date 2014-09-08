module.exports = function(grunt) {
  grunt.registerTask('build', ['clean', 'unswap', 'copy', 'be_ugly', 'requirejs:build', 'swap']);
};

