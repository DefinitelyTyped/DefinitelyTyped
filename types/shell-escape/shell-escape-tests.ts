import shellEscape = require('shell-escape');

() => {
    const stringRes = shellEscape(['cp', '-r', 'src/', 'dest/']);
};
