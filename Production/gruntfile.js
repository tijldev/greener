module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        options: {
            livereload: true
        },
        css: {
            files: ['public/sass/*.scss', 'public/sass/**/*.scss'],
            tasks: ['sass', 'postcss'],
            options: {
              spawn: false
            }
        },
        html: {
          files: ['index.html'],
          options: {
            spawn: false
          }
        }
    }, 
    sass: {
        dist: {
            options: {
              style: 'compressed'
            },
            files: {
                'public/style.min.css' : 'public/sass/style.scss'
            }
        }
    },
    postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer'),
                require('postcss-font-magician')
            ]
        },
        dist: {
            src: 'public/style.min.css',
            dest: 'public/style.min.css'
        }
    },
      uglify: {
          my_target: {
              files: {
                  'public/js/main.min.js':
                      ['bower_components/jquery/dist/jquery.min.js',
                        'bower_components/gsap/src/minified/TweenMax.min.js',
                          'bower_components/gsap/src/uncompressed/TimelineMax.js',
                          'bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
                          'bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
                            'bower_components/gsap/src/uncompressed/plugins/ScrollToPlugin.js',
                            'bower_components/typed.js/lib/typed.js',
                            'bower_components/enquire/dist/enquire.js',
                            'public/js/animations.js']
              }
          }
      }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'postcss', 'uglify', 'watch']);

};