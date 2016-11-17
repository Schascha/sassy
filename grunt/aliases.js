// https://github.com/firstandthird/load-grunt-config

module.exports = {
    'default': [
        'build',
        'watch'
    ],
    'build': [
        'scss'
    ],
    'scss': [
        'scsslint',
        'sass',
        'postcss'
    ]
};
