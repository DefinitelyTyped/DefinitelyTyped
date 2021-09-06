import { expect } from './expect';
import { Core, Elementary, ElementaryCallback } from './core';

export const testBasics: ElementaryCallback =
    (core: Core, el: Elementary) =>
    {
        const isNode = core.Node.isNode;

        const inputs = el.inputs();
        expect(inputs).isAnArray();
        expect(inputs).passes(x => x.length == 0);

        const sr = el.sr();
        expect(sr).passes(isNode);

        let counter = el.counter(sr);
        expect(counter).passes(isNode);
        counter = el.counter(10);
        expect(counter).passes(isNode);

        let tau2pole = el.counter(sr);
        expect(tau2pole).passes(isNode);
        tau2pole = el.tau2pole(2);
        expect(tau2pole).isANumber();

        let ms2samps = el.counter(sr);
        expect(ms2samps).passes(isNode);
        ms2samps = el.tau2pole(2);
        expect(ms2samps).isANumber();

        let select = el.select(counter, tau2pole, ms2samps);
        expect(select).passes(isNode);
        select = el.select(0, 0, 0);
        expect(select).passes(isNode);

        core.render(select, select);
    };
