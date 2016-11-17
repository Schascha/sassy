// https://github.com/gruntjs/grunt-contrib-copy

module.exports = {
    'normalize-css': {
        expand: true,
        cwd: 'bower_components/normalize-css/',
        src: 'normalize.css',
        dest: 'src/scss/vendor/',
        rename: function(dest, src) {
            return dest + src.replace('normalize.css','_normalize.scss');
        }
    },
    'sass-mq': {
        expand: true,
        cwd: 'bower_components/sass-mq/',
        src: '_mq.scss',
        dest: 'src/scss/vendor/'
    }
};
