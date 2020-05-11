import {
	hookRequire,
	hookCreateScript,
	unhookCreateScript,
	hookRunInThisContext,
	unhookRunInThisContext,
	hookRunInContext,
	unhookRunInContext,
	unloadRequireCache
} from 'istanbul-lib-hook';

const matcher = (filename: string) => true;
const transformer = (code: string, options: { filename: string }) => 'foo';

hookRequire(matcher, transformer);
hookRequire(matcher, transformer, {});
hookRequire(matcher, transformer, { verbose: true });

const retVal = hookRequire(matcher, transformer, {
	extensions: ['.js'],
	postLoadHook: (filename: string) => {}
});
retVal();

hookCreateScript(matcher, transformer, {});
hookCreateScript(matcher, transformer, { verbose: true });

unhookCreateScript();

hookRunInThisContext(matcher, transformer, {});
hookRunInThisContext(matcher, transformer, { verbose: true });

unhookRunInThisContext();

unloadRequireCache(matcher);

hookRunInContext(matcher, transformer, {});
hookRunInContext(matcher, transformer, { verbose: true, coverageVariable: '__cov__' });

unhookRunInContext();
