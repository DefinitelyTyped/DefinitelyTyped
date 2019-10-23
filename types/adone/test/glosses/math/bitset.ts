namespace mathTests.bitsetTests {
    const {
        math: {
            BitSet
        }
    } = adone;

    type BitSet = adone.math.BitSet;

    new BitSet(10);
    new BitSet(new BitSet(10).dehydrate());

    { const a: boolean = new BitSet(10).get(0); }
    { const a: boolean = new BitSet(10).set(0); }
    { const a: boolean = new BitSet(10).setRange(0, 10); }
    { const a: boolean = new BitSet(10).unset(0); }
    { const a: boolean = new BitSet(10).unsetRange(0, 10); }
    { const a: boolean = new BitSet(10).toggle(0); }
    { const a: boolean = new BitSet(10).toggleRange(0, 10); }
    { const a: boolean = new BitSet(10).clear(); }
    { const a: BitSet = new BitSet(10).clone(); }
    { const a: string = new BitSet(10).dehydrate(); }

    { const a: BitSet = new BitSet(10).and(1); }
    { const a: BitSet = new BitSet(10).and(new BitSet(10)); }

    { const a: BitSet = new BitSet(10).or(1); }
    { const a: BitSet = new BitSet(10).or(new BitSet(10)); }

    { const a: BitSet = new BitSet(10).xor(1); }
    { const a: BitSet = new BitSet(10).xor(new BitSet(10)); }

    new BitSet(10).forEach((x: number) => {});
    new BitSet(10).forEach((x: number) => false);

    { const a: BitSet = new BitSet(10).circularShift(10); }
    { const a: number = new BitSet(10).getCardinality(); }
    { const a: number[] = new BitSet(10).getIndices(); }
    { const a: boolean = new BitSet(10).isSubsetOf(new BitSet(10)); }
    { const a: boolean = new BitSet(10).isEmpty(); }
    { const a: boolean = new BitSet(10).isEqual(new BitSet(10)); }
    { const a: string = new BitSet(10).toString(); }
    { const a: number = new BitSet(10).ffs(); }
    { const a: number = new BitSet(10).ffs(1); }
    { const a: number = new BitSet(10).ffz(); }
    { const a: number = new BitSet(10).ffz(1); }
    { const a: number = new BitSet(10).fls(); }
    { const a: number = new BitSet(10).fls(1); }
    { const a: number = new BitSet(10).flz(); }
    { const a: number = new BitSet(10).flz(1); }
    { const a: number = new BitSet(10).nextSetBit(1); }
    { const a: number = new BitSet(10).nextUnsetBit(1); }
    { const a: number = new BitSet(10).previousSetBit(1); }
    { const a: number = new BitSet(10).previousUnsetBit(1); }
    { const a: number = new BitSet(10).readUInt(); }
    { const a: number = new BitSet(10).readUInt(1); }
    { const a: number = new BitSet(10).readUInt(1, 2); }
    { new BitSet(10).writeUInt(1); }
    { new BitSet(10).writeUInt(1, 2); }
    { new BitSet(10).writeUInt(1, 2, 3); }
    { const a: BitSet = BitSet.fromLong(new adone.math.Long(10, 20)); }
}
