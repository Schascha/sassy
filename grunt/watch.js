// https://github.com/gruntjs/grunt-contrib-watch

module.exports = {
    options: {
        spawn: false
    },
    sass: {
        files: [
            '<%= files.scss %>'
        ],
        tasks: [
            'scss'
        ]
    }
};
