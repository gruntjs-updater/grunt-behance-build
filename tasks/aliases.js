module.exports = function(grunt) {
  grunt.registerTask('build', ['clean:build', 'unswap', 'requirejs:build', 'swap']);
};

