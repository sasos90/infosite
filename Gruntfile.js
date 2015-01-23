module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    sassDir: 'style/sass',
                    cssDir: 'style/css',
                    force: true,
                    relativeAssets     : true,
                    environment: 'development',
                    outputStyle: 'expanded'
                }
            },
            prod: {
                options: {
                    sassDir: 'style/sass',
                    cssDir: 'style/css',
                    force: true,
                    relativeAssets     : true,
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            }
        },
        uglify: {
            prod: {
                files: {
                    'style/js/script.min.js': ['style/js/script.js']
                },
                compress: true
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['compass:dev']
            }
        }
    });
    grunt.registerTask('default',['compass:dev']);
    grunt.registerTask('prod',['compass:prod', 'uglify:prod']);
}