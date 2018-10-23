
import SVGSpriter = require('svg-sprite');
import * as fs from 'fs';

var config: SVGSpriter.Config;


//
// README.md
//

// Create spriter instance (see below for `config` examples)
var spriter       = new SVGSpriter(config);

// Add SVG source files — the manual way ...
spriter.add('assets/svg-1.svg', null, fs.readFileSync('assets/svg-1.svg', {encoding: 'utf-8'}));
spriter.add('assets/svg-2.svg', null, fs.readFileSync('assets/svg-2.svg', {encoding: 'utf-8'}));
/* ... */

// Compile the sprite
spriter.compile(function(error: any, result: any) {
    /* ... Write `result` files to disk or do whatever with them ... */
});

// General configuration options

config                      = {
    dest                    : '.',                      // Main output directory
    log                     : null,                     // Logging verbosity (default: no logging)
    shape                   : {                         // SVG shape related options
        id                  : {                         // SVG shape ID related options
            separator       : '--',                     // Separator for directory name traversal
            generator       : function(svg: string) { /*...*/ return ''; },   // SVG shape ID generator callback
            pseudo          : '~'                       // File name separator for shape states (e.g. ':hover')
        },
        dimension           : {                         // Dimension related options
            maxWidth        : 2000,                     // Max. shape width
            maxHeight       : 2000,                     // Max. shape height
            precision       : 2,                        // Floating point precision
            attributes      : false,                    // Width and height attributes on embedded shapes
        },
        spacing             : {                         // Spacing related options
            padding         : 0,                        // Padding around all shapes
            box             : 'content'                 // Padding strategy (similar to CSS `box-sizing`)
        },
        transform           : ['svgo'],                 // List of transformations / optimizations
        meta                : null,                     // Path to YAML file with meta / accessibility data
        align               : null,                     // Path to YAML file with extended alignment data
        dest                : null                      // Output directory for optimized intermediate SVG shapes
    },
    svg                     : {                         // General options for created SVG files
        xmlDeclaration      : true,                     // Add XML declaration to SVG sprite
        doctypeDeclaration  : true,                     // Add DOCTYPE declaration to SVG sprite
        namespaceIDs        : true,                     // Add namespace token to all IDs in SVG shapes
        dimensionAttributes : true                      // Width and height attributes on the sprite
    },
    variables               : {}                        // Custom Mustache templating variables and functions
};

// Output modes

config                  = {
    mode                    : {
    css                 : true,     // Create a «css» sprite
    view                : true,     // Create a «view» sprite
    defs                : true,     // Create a «defs» sprite
    symbol              : true,     // Create a «symbol» sprite
    stack               : true      // Create a «stack» sprite
}
};

config                  = {
    mode: {
        css: {
            // Configuration for the «css» sprite
            // ...
        }
    }
};

// Common mode properties

config                  = {
    mode                    : {
        mode1              : {
    dest            : "<mode>",                     // Mode specific output directory
        prefix          : "svg-%s",                     // Prefix for CSS selectors
        dimensions      : "-dims",                      // Suffix for dimension CSS selectors
        sprite          : "svg/sprite.<mode>.svg",       // Sprite path and name
    bust            : true,                   // Cache busting (mode dependent default value)
        render          : {                             // Stylesheet rendering definitions
        /* -------------------------------------------
         css         : false,                        // CSS stylesheet options
         scss        : false,                        // Sass stylesheet options
         less        : false,                        // LESS stylesheet options
         styl        : false                         // Stylus stylesheet options
         <custom>    : ...                           // Custom stylesheet options
         ------------------------------------------- */
    },
    example         : false                         // Create an HTML example document
}
}
};

// Basic examples

// A.) Standalone sprite

config                  = {
    mode                    : {
    inline              : true,     // Prepare for inline embedding
    symbol              : true      // Create a «symbol» sprite
}
};

// B.) CSS sprite with Sass resource

config                  = {
    mode                    : {
    css                 : {         // Create a «css» sprite
    render          : {
        scss        : true      // Render a Sass stylesheet
    }
}
}
};

// C.) Multiple sprites

config                  = {
    mode                    : {
    defs                : true,
    symbol              : true,
    stack               : true
}
};

// D.) No sprite at all

config                  = {
    shape                   : {
    dest                : 'path/to/out/dir'
}
};



//
// docs/configuration.md
//

config = {
    shape               : {
        id              : {                         // SVG shape ID related options
            separator   : '--',                     // Separator for directory name traversal
            generator   : function(svg: string) { /*...*/ return ''; },   // SVG shape ID generator callback
            pseudo      : '~',                      // File name separator for shape states (e.g. ':hover')
            whitespace  : '_'                       // Whitespace replacement for shape IDs
        },
        dimension       : {                         // Dimension related options
            maxWidth    : 2000,                     // Max. shape width
            maxHeight   : 2000,                     // Max. shape height
            precision   : 2,                        // Floating point precision
            attributes  : false,                    // Width and height attributes on embedded shapes
        },
        spacing         : {                         // Spacing related options
            padding     : 0,                        // Padding around all shapes
            box         : 'content'                 // Padding strategy (similar to CSS `box-sizing`)
        },
        transform       : ['svgo'],                 // List of transformations / optimizations
        meta            : null,                     // Path to YAML file with meta / accessibility data
        align           : null,                     // Path to YAML file with extended alignment data
        dest            : null                      // Output directory for optimized intermediate SVG shapes
    }
};

config = // SVGO transformation with default configuration
{
    shape               : {
        transform       : ['svgo']
        /* ... */
    }
};

config = // Equivalent transformation to ['svgo']
{
    shape               : {
        transform       : [
            {svgo       : {}}
        ]
        /* ... */
    }
};

config = // SVGO transformation with custom plugin configuration
{
    shape               : {
        transform       : [
            {svgo       : {
                plugins : [
                    {transformsWithOnePath: true},
                    {moveGroupAttrsToElems: false}
                ]
            }}
        ]
        /* ... */
    }
};

config = // SVGO transformation with custom plugin configuration
{
    shape               : {
        transform       : [
            {custom     :

                /**
                 * Custom callback transformation
                 *
                 * @param {SVGShape} shape              SVG shape object
                 * @param {SVGSpriter} spriter          SVG spriter
                 * @param {Function} callback           Callback
                 * @return {void}
                 */
                    function(shape, sprite, callback) {
                    /* ... */
                    callback(null);
                }
            }
        ]
        /* ... */
    }
};

config = // Custom global post-processing transformation
{
    svg                 : {
        transform       : [
            /**
             * Custom sprite SVG transformation
             *
             * @param {String} svg                  Sprite SVG
             * @return {String}                     Processed SVG
             */
                function(svg) {
                /* ... */
                return svg;
            },

            /* ... */
        ]
    }
};

config = {
    variables   : {
        now     : +new Date(),
        png     : function() {
            return function(sprite: any, render: any) {
                return render(sprite).split('.svg').join('.png');
            }
        }
    }
};

config = // Activate the «css» mode with default configuration
{
    mode            : {
        css         : true
    }
};

config = // Equivalent: Provide an empty configuration object
{
    mode            : {
        css         : {}
    }
};

config = // Multiple sprites of the same output mode
{
    mode            : {
        sprite1     : {
            mode    : 'css'     // Sprite with «css» mode
        },
        sprite2     : {
            mode    : 'css'     // Another sprite with «css» mode
        }
    }
};

config = {
    mode                : {
        css             : {
            example     : true
        }
    }
};

config = {
    mode                : {
        css             : {
            example     : {}
        }
    }
};

config = {
    mode                : {
        css             : {
            render      : {
                css     : {
                    template    : 'path/to/template.html',  // relative to current working directory
                    dest        : 'path/to/demo.html'       // relative to current output directory
                }
            }
        }
    }
};

config = {
    mode                : {
        css             : {
            example     : false
        }
    }
};
