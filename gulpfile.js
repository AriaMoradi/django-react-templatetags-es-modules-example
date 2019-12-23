// packages
const gulp = require('gulp')
const watch_gulp = require('gulp-watch')
const babel = require('gulp-babel')


function build() {
    const src = [
        './**/components/*.js',
        '!./project/static/**/*.js'
    ];

    return gulp.src(src)
    // .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [
                '@babel/react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
        }))
        .pipe(gulp.dest('./project/static/js/'))
}


function watch() {
    const src = [
        './**/components/*.js',
        '!./project/static/**/*.js'
    ];

    return gulp.src(src)
        .pipe(watch_gulp(src))
        .pipe(babel({
            presets: [
                '@babel/react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
        }))
        .pipe(gulp.dest('./project/static/js/'))
}

function modules() {
    const react = gulp.src([
        './node_modules/es-react/dist/react.js',
        './node_modules/es-react/dist/react-dom.js',
    ])
        .pipe(gulp.dest('./project/static/vendor/react'));
    return merge(react);
}

exports.build = build
exports.watch = watch