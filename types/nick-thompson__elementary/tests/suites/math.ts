import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testMath: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // Unary

        const input = el.in(2);
        expect(input).isANode();

        const sin = el.sin(1);
        expect(sin).isANode();

        const cos = el.cos(sin);
        expect(cos).isANode();

        const tan = el.tan(1);
        expect(tan).isANode();

        const tanh = el.tanh(sin);
        expect(tanh).isANode();

        const asinh = el.asinh(1);
        expect(asinh).isANode();

        const ln = el.ln(cos);
        expect(ln).isANode();

        const log = el.log(1);
        expect(log).isANode();

        const log2 = el.log2(log);
        expect(log2).isANode();

        const ceil = el.ceil({key: 'myCeil'}, 1);
        expect(ceil).isANode();

        const floor = el.floor(1);
        expect(floor).isANode();

        const sqrt = el.sqrt({key: 'mySqrt'}, floor);
        expect(sqrt).isANode();

        const exp = el.exp(1);
        expect(exp).isANode();

        const abs = el.abs(1);
        expect(abs).isANode();

        // Binary

        const le = el.le(1, 2);
        expect(le).isANode();

        const leq = el.leq(1, 2);
        expect(leq).isANode();

        const ge = el.ge(1, 2);
        expect(ge).isANode();

        const geq = el.geq(cos, tan);
        expect(geq).isANode();

        const pow = el.pow(1, 2);
        expect(pow).isANode();

        const mod = el.mod({key: 'myMod'}, 1, 2);
        expect(mod).isANode();

        const min = el.min(1, sin);
        expect(min).isANode();

        const max = el.max(1, 2);
        expect(max).isANode();

        // Variadic

        const add = el.add(1);
        expect(add).isANode();

        const sub = el.sub(1, 2, 3, 4, 5, 6, 7, 8);
        expect(sub).isANode();

        const mul = el.mul({key: 'myMul'}, sin, cos);
        expect(mul).isANode();

        const div = el.div(1, 2);
        expect(div).isANode();

        core.render(add, sub);
    };
