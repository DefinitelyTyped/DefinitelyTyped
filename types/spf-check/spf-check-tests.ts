import spfCheck = require('spf-check');

(async () => {
    const result1 = await spfCheck('127.0.0.1', 'example.com'); // $ExpectType SPFResultType
    const result2 = await spfCheck('192.168.0.1', 'example.com', 'sender@example.com', { prefetch: true, maxDNS: 10 }); // $ExpectType SPFResultType
    const msg = spfCheck.messages.Fail; // $ExpectType string
    const spf = new spfCheck.SPF('example.com', 'sender@example.com', { prefetch: true }); // $ExpectType SPF
    const checkResult = await spf.check('127.0.0.1'); // $ExpectType SPFResult
    const manualResult = new spfCheck.SPFResult(spfCheck.results.SoftFail, 'Not great...'); // $ExpectType SPFResult
    await spf.resolveMX('example.com', 'MX');
    await spf.resolveDNS('example.com', 'A', true);
    await spf.resolveSPF('example.com', 'TXT');
    // @ts-expect-error
    const evalResult = await spf.evaluate([], '127.0.0.1');
    // @ts-expect-error
    const isMatch = spf.match({ type: 'ip4', value: '127.0.0.1' }, '127.0.0.1'); // $ExpectType boolean
})();