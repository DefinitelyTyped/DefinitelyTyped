import printf = require("printf");

printf('%c', 0x7f).charCodeAt(0);
printf('%2$s: %1$O', {hello: 'Node'}, 'Test');
printf('%(temperature)s %(crevace)ss', {
    temperature: 'Hot',
    crevace: 'Pocket',
});
printf(process.stdout, '%2$s: %1$O', {hello: 'Node'}, 'Test');
