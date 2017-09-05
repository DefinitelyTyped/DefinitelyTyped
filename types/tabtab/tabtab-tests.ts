
/// <reference types="node" />

import tabtab = require('tabtab');
import child_process = require('child_process');
import string_decoder = require('string_decoder');

if (process.argv.slice(2)[0] === 'completion') {
    tabtab.complete('pkgname', function(err, data) {
        if (err || !data) return;
        if (/^--\w?/.test(data.last)) return tabtab.log(['help', 'version'], data, '--');
        if (/^-\w?/.test(data.last)) return tabtab.log(['n', 'o', 'd', 'e'], data, '-');
        tabtab.log(['list', 'of', 'commands'], data);

        child_process.exec('rake -H', {encoding: null}, function(err, stdout, stderr) {
            if (err) return;
            var decoder = new string_decoder.StringDecoder('utf8');
            var parsed = tabtab.parseOut(decoder.write(stdout));
            if (/^--\w?/.test(data.last)) return tabtab.log(parsed.longs, data, '--');
            if (/^-\w?/.test(data.last)) return tabtab.log(parsed.shorts, data, '-');
        });

        child_process.exec('cake', {encoding: null}, function(err, stdout, stderr) {
            if (err) return;
            var decoder = new string_decoder.StringDecoder('utf8');
            var tasks = tabtab.parseTasks(decoder.write(stdout), 'cake');
            tabtab.log(tasks, data);
        });
    });
}
