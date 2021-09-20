import { expect } from '../tester';
import { el, ElementaryCallback } from '../load';

export const testMath: ElementaryCallback =
    (core: el.Core, el: el.Elementary) => {
        // Unary

        // $ExpectType NativeNode<"in">
        const input = el.in(2);
        expect(input).isANode();

        // $ExpectType NativeNode<"sin">
        const sin = el.sin(1);
        expect(sin).isANode();

        // $ExpectType NativeNode<"cos">
        const cos = el.cos(sin);
        expect(cos).isANode();

        // $ExpectType NativeNode<"tan">
        const tan = el.tan(1);
        expect(tan).isANode();

        // $ExpectType NativeNode<"tanh">
        const tanh = el.tanh(sin);
        expect(tanh).isANode();

        // $ExpectType NativeNode<"asinh">
        const asinh = el.asinh(1);
        expect(asinh).isANode();

        // $ExpectType NativeNode<"ln">
        const ln = el.ln(cos);
        expect(ln).isANode();

        // $ExpectType NativeNode<"log">
        const log = el.log(1);
        expect(log).isANode();

        // $ExpectType NativeNode<"log2">
        const log2 = el.log2(log);
        expect(log2).isANode();

        // $ExpectType NativeNode<"ceil">
        const ceil = el.ceil({key: 'myCeil'}, 1);
        expect(ceil).isANode();

        // $ExpectType NativeNode<"floor">
        const floor = el.floor(1);
        expect(floor).isANode();

        // $ExpectType NativeNode<"sqrt">
        const sqrt = el.sqrt({key: 'mySqrt'}, floor);
        expect(sqrt).isANode();

        // $ExpectType NativeNode<"exp">
        const exp = el.exp(1);
        expect(exp).isANode();

        // $ExpectType NativeNode<"abs">
        const abs = el.abs(1);
        expect(abs).isANode();

        // Binary

        // $ExpectType NativeNode<"le">
        const le = el.le(1, 2);
        expect(le).isANode();

        // $ExpectType NativeNode<"leq">
        const leq = el.leq(1, 2);
        expect(leq).isANode();

        // $ExpectType NativeNode<"ge">
        const ge = el.ge(1, 2);
        expect(ge).isANode();

        // $ExpectType NativeNode<"geq">
        const geq = el.geq(cos, tan);
        expect(geq).isANode();

        // $ExpectType NativeNode<"pow">
        const pow = el.pow(1, 2);
        expect(pow).isANode();

        // $ExpectType NativeNode<"mod">
        const mod = el.mod({key: 'myMod'}, 1, 2);
        expect(mod).isANode();

        // $ExpectType NativeNode<"min">
        const min = el.min(1, sin);
        expect(min).isANode();

        // $ExpectType NativeNode<"max">
        const max = el.max(1, 2);
        expect(max).isANode();

        // Variadic

        // $ExpectType NativeNode<"add">
        const add = el.add(1);
        expect(add).isANode();

        // $ExpectType NativeNode<"sub">
        const sub = el.sub(1, 2, 3, 4, 5, 6, 7, 8);
        expect(sub).isANode();

        // $ExpectType NativeNode<"mul">
        const mul = el.mul({key: 'myMul'}, sin, cos);
        expect(mul).isANode();

        // $ExpectType NativeNode<"div">
        const div = el.div(1, 2);
        expect(div).isANode();

        // $ExpectType void
        core.render(add, sub);
    };
