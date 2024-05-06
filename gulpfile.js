// gulpfile.js
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css( done ){
    return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('build/css')) // Guarda el archivo compilado en build/css
        .on('end', done);
}

function js(done) {
    return src('src/javascript/**/*.js') // Actualiza esta línea
        .pipe(dest('build/js'))
        .on('end', done);
}

function watchFiles() {
    watch('src/scss/**/*.scss', css);
    watch('src/javascript/**/*.js', js); // Y esta línea
}

const dev = parallel(css, js, watchFiles);

exports.dev = dev;