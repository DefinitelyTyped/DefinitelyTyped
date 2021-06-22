import requireHacker from 'require-hacker';

requireHacker.log.options.debug = true;

const hook1 = requireHacker.hook('txt', path => {
    return `module.exports = "hacked ${path}"`;
});
hook1.unmount();

const hook2 = requireHacker.global_hook('network', path => {
    if (!path.startsWith('http://thor.onion/module')) {
        return;
    }
    return {
        source: `module.exports = "hacked ${path}"`,
        path,
    };
});
hook2.unmount();

requireHacker.resolve = path => `foo/${path}`;

const hook3 = requireHacker.resolver(path => `foo/${path}`);
hook3.unmount();

const source = requireHacker.to_javascript_module_source({ foo: 'bar' });
