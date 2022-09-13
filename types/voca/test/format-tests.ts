import sprintf = require('voca/sprintf');
import vprintf = require('voca/vprintf');

sprintf();
sprintf('%s, %s!', 'Hello', 'World');
sprintf('%s costs $%d', 'coffee', 2);
sprintf('%1$s %2$s %1$s %2$s, watcha gonna %3$s', 'bad', 'boys', 'do');
sprintf('% 6s', 'bird');
sprintf('%d %i %+d', 15, -2, 25);
sprintf('%06d', 15);
sprintf('%.2e %g', 100.5, 0.455);

vprintf();
vprintf('%s', ['Welcome']);
vprintf('%s has %d apples', ['Alexandra', 3]);
