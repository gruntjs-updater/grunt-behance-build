var localTasks = require('../lib/localTasks');

module.exports = function(grunt) {
  var plugin = 'grunt-contrib-copy';

  localTasks.load(grunt, plugin);
};
