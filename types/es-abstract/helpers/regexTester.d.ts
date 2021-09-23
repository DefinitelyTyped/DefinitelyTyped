declare function regexTester(regex: RegExp): OmitThisParameter<typeof RegExp.prototype.test>;
export = regexTester;
