import { show, hide, toggle } from 'cli-cursor';

hide();
hide(process.stderr);

show();
show(process.stderr);

toggle();
toggle(false);
toggle(false, process.stderr);
