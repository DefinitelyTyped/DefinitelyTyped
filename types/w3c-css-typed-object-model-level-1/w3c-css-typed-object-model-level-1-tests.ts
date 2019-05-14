() => {
    const v: CSSStyleValue = CSSStyleValue.parse('padding', '10px');
    const vArray: CSSStyleValue = CSSStyleValue.parseAll('padding', '10px 10px');
};

() => {
    const v1: CSSVariableReferenceValue = new CSSVariableReferenceValue(
        'v1', new CSSUnparsedValue([]));
    const vVariable: string = v1.variable;
    v1.variable = 'v3';
    const vFalback: CSSUnparsedValue | undefined = v1.fallback;
};

() => {
    const u = new CSSUnparsedValue(['x', new CSSVariableReferenceValue('v2')]);
    const s = u[1];
    u[2] = 'hellow';
    u[3] = new CSSVariableReferenceValue('world');
    for (const v of Array.from(u)) {
        const x: CSSUnparsedSegment = v;
    }
};

() => {
    const k: CSSKeywordValue = new CSSKeywordValue('inline');
    const keyword = k.value;
    k.value = 'block';
};

() => {
    const v: CSSNumericValue = CSSNumericValue.parse('10px');
    const em1 = CSSNumericValue.parse('1em');
    const vw2 = CSSNumericValue.parse('2vw');

    const addRes: CSSNumericValue = v.add(1).add(em1).add(2, vw2);
    const subRes: CSSNumericValue = v.sub(1).sub(em1).sub(2, vw2);
    const mulRes: CSSNumericValue = v.mul(1).mul(em1).mul(2, vw2);
    const divRes: CSSNumericValue = v.div(1).div(em1).div(2, vw2);
    const minRes: CSSNumericValue = v.min(1).min(em1).min(2, vw2);
    const maxRes: CSSNumericValue = v.max(1).max(em1).max(2, vw2);

    const resEquals1 = v.equals(20);
    const resEquals2 = v.equals(em1);
    const resEquals3 = v.equals(30, vw2);

    const vw: CSSUnitValue = v.to('vw');
    const sum: CSSMathSum = v.toSum('px', 'vw');
    const type: CSSNumericType = v.type();
};

() => {
    const u = new CSSUnitValue(10, 'px');
    const value = u.value;
    u.value = 20;
    const unit = u.unit;
};

() => {
    const math: CSSMathSum = new CSSMathSum(10, CSS.px(10));
    const operator: CSSMathOperator = math.operator;
    const values: CSSNumericArray = math.values;
};

() => {
    const math: CSSMathProduct = new CSSMathProduct(10, CSS.px(10));
    const operator: CSSMathOperator = math.operator;
    const values: CSSNumericArray = math.values;
};

() => {
    const math1: CSSMathNegate = new CSSMathNegate(10);
    const math2: CSSMathNegate = new CSSMathNegate(CSS.px(10));
    const operator: CSSMathOperator = math1.operator;
    const value: CSSNumericValue = math1.value;
};

() => {
    const math1: CSSMathInvert = new CSSMathInvert(10);
    const math2: CSSMathInvert = new CSSMathInvert(CSS.px(10));
    const operator: CSSMathOperator = math1.operator;
    const value: CSSNumericValue = math1.value;
};

() => {
    const math: CSSMathMin = new CSSMathMin(10, CSS.px(10));
    const operator: CSSMathOperator = math.operator;
    const values: CSSNumericArray = math.values;
};

() => {
    const math: CSSMathMax = new CSSMathMax(10, CSS.px(10));
    const operator: CSSMathOperator = math.operator;
    const values: CSSNumericArray = math.values;
};

() => {
    const a: CSSNumericArray = new CSSMathSum().values;
    const l = a.length;
    const v = a[10];
    for (const v of Array.from(a)) {
        const x: CSSNumericValue = v;
    }
};

() => {
    const t: CSSTransformValue = new CSSTransformValue([
        new CSSTranslate(CSS.deg(10), CSS.rad(20)),
        new CSSRotate(CSS.deg(13)),
        new CSSScale(1, 2),
        new CSSSkew(CSS.deg(7), CSS.rad(15)),
        new CSSSkewX(CSS.deg(10)),
        new CSSSkewY(CSS.rad(10)),
    ]);
    const l = t.length;
    const c = t[0];
    t[1] = new CSSScale(20, 30);
    const is2d: boolean = t.is2D;
    const matix: DOMMatrix = t.toMatrix();
    for (const v of Array.from(t)) {
        const x: CSSTransformComponent = v;
    }
};

() => {
    const c: CSSTransformComponent = new CSSTransformValue([])[0];
    const is2d: boolean = c.is2D;
    const matix: DOMMatrix = c.toMatrix();
};

() => {
    const t1: CSSTranslate = new CSSTranslate(CSS.px(20), CSS.px(20));
    const t2: CSSTranslate = new CSSTranslate(CSS.px(20), CSS.px(20), CSS.px(30));
    const is2d: boolean = t1.is2D;
    const matix: DOMMatrix = t1.toMatrix();
    const x: CSSNumericValue = t1.x;
    const y: CSSNumericValue = t1.y;
    const z: CSSNumericValue = t1.z;
};

() => {
    const r1: CSSRotate = new CSSRotate(CSS.deg(1));
    const r2: CSSRotate = new CSSRotate(CSS.px(20), 20, 30, CSS.deg(30));
    const is2d: boolean = r1.is2D;
    const matix: DOMMatrix = r1.toMatrix();
    const x: CSSNumberish = r1.x;
    const y: CSSNumberish = r1.y;
    const z: CSSNumberish = r1.z;
    const a: CSSNumericValue = r1.angle;
};

() => {
    const s1: CSSScale = new CSSScale(20, CSS.number(30));
    const s2: CSSScale = new CSSScale(CSS.px(20), 2, 3);
    const is2d: boolean = s1.is2D;
    const matix: DOMMatrix = s1.toMatrix();
    const x: CSSNumberish = s1.x;
    const y: CSSNumberish = s1.y;
    const z: CSSNumberish = s1.z;
};

() => {
    const s: CSSSkewX = new CSSSkewX(CSS.rad(20));
    const is2d: boolean = s.is2D;
    const matix: DOMMatrix = s.toMatrix();
    const x: CSSNumericValue = s.ax;
};

() => {
    const s: CSSSkewY = new CSSSkewY(CSS.rad(20));
    const is2d: boolean = s.is2D;
    const matix: DOMMatrix = s.toMatrix();
    const y: CSSNumericValue = s.ay;
};

() => {
    const p: CSSPerspective = new CSSPerspective(CSS.px(20));
    const is2d: boolean = p.is2D;
    const matix: DOMMatrix = p.toMatrix();
    const length: CSSNumericValue = p.length;
};

() => {
    const m1: CSSMatrixComponent = new CSSMatrixComponent(new CSSScale(1, 1).toMatrix());
    const m2: CSSMatrixComponent = new CSSMatrixComponent(new CSSScale(1, 1).toMatrix(), {
        is2D: true,
    });
    const m: DOMMatrix = m1.matrix;
};

() => {
    const m: StylePropertyMapReadOnly = document.body.computedStyleMap();
    const v: CSSStyleValue | undefined = m.get('padding');
    const vArray: CSSStyleValue[] = m.getAll('padding');
    const has: boolean = m.has('padding');
    const size: number = m.size;
    for (const v of Array.from(m)) {
        const x: CSSStyleValue = v;
    }
};

() => {
    const m: StylePropertyMap = document.body.attributeStyleMap;
    m.set('padding-top', CSS.px(10));
    m.set('background-image', 'url()', 'url()');
    m.append('background-image', 'url()');
    m.delete('margin');
    m.clear();
    const v: CSSStyleValue | undefined = m.get('padding');
    const vArray: CSSStyleValue[] = m.getAll('padding');
    const has: boolean = m.has('padding');
    const size: number = m.size;
    for (const v of Array.from(m)) {
        const x: CSSStyleValue = v;
    }
};

() => {
    const x: CSSRule = window.getMatchedCSSRules(document.body)[0];
    if (!(x instanceof CSSStyleRule)) {
        return;
    }
    const s: StylePropertyMap = x.styleMap;
};

() => {
    const e: HTMLElement = document.createElement('div');
    const m: StylePropertyMap = e.attributeStyleMap;
    const c: StylePropertyMapReadOnly = e.computedStyleMap();
};

() => {
    const numberVar: CSSUnitValue = CSS.number(1);
    const percentVar: CSSUnitValue = CSS.percent(1);

    // <length>
    const emVar: CSSUnitValue = CSS.em(1);
    const exVar: CSSUnitValue = CSS.ex(1);
    const chVar: CSSUnitValue = CSS.ch(1);
    const icVar: CSSUnitValue = CSS.ic(1);
    const remVar: CSSUnitValue = CSS.rem(1);
    const lhVar: CSSUnitValue = CSS.lh(1);
    const rlhVar: CSSUnitValue = CSS.rlh(1);
    const vwVar: CSSUnitValue = CSS.vw(1);
    const vhVar: CSSUnitValue = CSS.vh(1);
    const viVar: CSSUnitValue = CSS.vi(1);
    const vbVar: CSSUnitValue = CSS.vb(1);
    const vminVar: CSSUnitValue = CSS.vmin(1);
    const vmaxVar: CSSUnitValue = CSS.vmax(1);
    const cmVar: CSSUnitValue = CSS.cm(1);
    const mmVar: CSSUnitValue = CSS.mm(1);
    const QVar: CSSUnitValue = CSS.Q(1);
    const inVar: CSSUnitValue = CSS.in(1);
    const ptVar: CSSUnitValue = CSS.pt(1);
    const pcVar: CSSUnitValue = CSS.pc(1);
    const pxVar: CSSUnitValue = CSS.px(1);

    // <angle>
    const degVar: CSSUnitValue = CSS.deg(1);
    const gradVar: CSSUnitValue = CSS.grad(1);
    const radVar: CSSUnitValue = CSS.rad(1);
    const turnVar: CSSUnitValue = CSS.turn(1);

    // <time>
    const sVar: CSSUnitValue = CSS.s(1);
    const msVar: CSSUnitValue = CSS.ms(1);

    // <frequency>
    const HzVar: CSSUnitValue = CSS.Hz(1);
    const kHzVar: CSSUnitValue = CSS.kHz(1);

    // <resolution>
    const dpiVar: CSSUnitValue = CSS.dpi(1);
    const dpcmVar: CSSUnitValue = CSS.dpcm(1);
    const dppxVar: CSSUnitValue = CSS.dppx(1);

    // <flex>
    const frVar: CSSUnitValue = CSS.fr(1);
};
