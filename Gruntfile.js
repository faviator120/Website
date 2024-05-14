module.exports = function(grunt) {
    grunt.initConfig({
    //   sass: {
    //     dist: {
    //       files: {
    //         'dist/css/style.css': 'assets/scss/style.scss'
    //       }
    //     }
    //   },
    concat: {
      css: {
        src: [
          'web/assets/**/*.css'
              ],
        dest: 'dest/css/concat.css'
      }
    },
      cssmin: {
        dist: {
          files: {
            'dist/css/style.min.css': 'dest/css/concat.css'
          }
        }
      },
      concat: {
        dist: {
          src: [
            'web/assets/**/*.js'
          ],
          dest: 'dist/js/main.js',
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/js/main.min.js': 'dist/js/main.js'
          }
        }
      },
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'web/assets/img',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/images'
          }]
        }
      },
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: [{
            expand: true,
            cwd: 'web',
            src: ['**/*.html'],
            dest: 'dist'
          }]
        }
      }
    });
  
    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
    grunt.registerTask('default', ['concat','cssmin','uglify','htmlmin','imagemin']);
  };
  