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
                    require            : ['singularitygs', 'breakpoint'],
                    environment: 'development',
                    outputStyle: 'expanded'
                }
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
}