import svgSprite = require('gulp-svg-sprite');
import spriter = require('svg-sprite');
import gulp = require('gulp')

let config: spriter.Config;

// Basic configuration example
config                  = {
    mode                : {
        css             : {     // Activate the «css» mode
            render      : {
                css     : true  // Activate CSS output (with default options)
            }
        }
    }
};

gulp.src('**/*.svg', {cwd: 'path/to/assets'})
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));


config                  = {
    shape               : {
        dimension       : {         // Set maximum dimensions
            maxWidth    : 32,
            maxHeight   : 32
        },
        spacing         : {         // Add padding
            padding     : 10
        },
        dest            : 'out/intermediate-svg'    // Keep the intermediate files
    },
    mode                : {
        view            : {         // Activate the «view» mode
            bust        : false,
            render      : {
                scss    : true      // Activate Sass output (with default options)
            }
        },
        symbol          : true      // Activate the «symbol» mode
    }
};

gulp.src('**/*.svg', {cwd: 'path/to/assets'})
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));
