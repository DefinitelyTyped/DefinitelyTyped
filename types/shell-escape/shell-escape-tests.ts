import * as shellEscape from 'shell-escape';

() => {
    const stringRes = shellEscape(['cp', '-r', 'src/', 'dest/']);
};
