module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    md2html: {
      multiple_files: {
        options: {},
        files: [{
          expand: true,
          cwd: './src-md',
          src: ['**/*.md'],
          dest: 'dest-md',
          ext: '.html'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-md2html');

  // Default task(s).
  grunt.registerTask('default', ['md2html']);

};