import { ArrayIterator, AsyncIterator, BufferedIterator, ClonedIterator, EmptyIterator, IntegerIterator,
  MultiTransformIterator, SingletonIterator, SimpleTransformIterator, TransformIterator } from "asynciterator";

function test_asynciterator() {
    // We can't instantiate an abstract class.
    const it1: AsyncIterator<number> = <any> {};
    const read1: number = it1.read();
    it1.each((data: number) => console.log(data));
    it1.each((data: number) => console.log(data), {});
    it1.close();

    const it2: AsyncIterator<string> = <any> {};
    const read2: string = it2.read();
    it2.each((data: string) => console.log(data));
    it2.each((data: string) => console.log(data), {});
    it2.close();

    const it3: AsyncIterator<AsyncIterator<string>> = <any> {};
    const read3: AsyncIterator<string> = it3.read();
    it3.each((data: AsyncIterator<string>) => data.each((data: string) => console.log(data)));
    it3.each((data: AsyncIterator<string>) => data.each((data: string) => console.log(data), {}), {});
    it3.close();

    const readable2: boolean = it1.readable;
    const closed2: boolean = it1.closed;
    const ended2: boolean = it1.ended;

    it1.setProperty('name1', 123);
    it2.setProperty('name2', 'someValue');
    const p1: number = it1.getProperty('name1');
    const p2: string = it1.getProperty('name2');
    it1.getProperty('name1', (value: number) => console.log(value));
    it1.getProperty('name2', (value: string) => console.log(value));
    const ps1: {[id: string]: any} = it1.getProperties();
    it1.setProperties({ name1: 1234, name2: 'someOtherValue' });
    it1.copyProperties(it2, [ 'name1', 'name2' ]);

    const str: string = it1.toString();

    const stit1: SimpleTransformIterator<number, string> = it1.transform();
    const stit2: SimpleTransformIterator<number, string> = it1.map((number: number) => 'i' + number);
    const stit3: AsyncIterator<string> = it1.map((number: number) => 'i' + number);
    const stit4: AsyncIterator<number> = it2.map(parseInt);
    const stit5: AsyncIterator<number> = it1.map((number: number) => number + 1);
    const stit6: AsyncIterator<number> = it1.filter((number: number) => number < 10);
    const stit7: AsyncIterator<number> = it1.prepend([0, 1, 2]);
    const stit8: AsyncIterator<number> = it1.append([0, 1, 2]);
    const stit9: AsyncIterator<number> = it1.surround([0, 1, 2], [0, 1, 2]);
    const stit10: AsyncIterator<number> = it1.skip(2);
    const stit11: AsyncIterator<number> = it1.take(2);
    const stit12: AsyncIterator<number> = it1.range(2, 20);
    const stit13: AsyncIterator<number> = it1.clone();

    const intit1: IntegerIterator = AsyncIterator.range(10, 100, 1);
    const intit2: IntegerIterator = AsyncIterator.range(10, 100);
    const intit3: IntegerIterator = AsyncIterator.range(10);
    const intit4: IntegerIterator = AsyncIterator.range();
}

function test_emptyiterator() {
    const it1: AsyncIterator<number> = new EmptyIterator();
    const it2: AsyncIterator<string> = new EmptyIterator();
}

function test_singletoniterator() {
    const it1: AsyncIterator<number> = new SingletonIterator(3);
    const it2: AsyncIterator<string> = new SingletonIterator('a');
}

function test_arrayiterator() {
    const it1: AsyncIterator<number> = new ArrayIterator([1, 2, 3]);
    const it2: AsyncIterator<string> = new ArrayIterator(['a', 'b', 'c']);
}

function test_integeriterator() {
    const it1: IntegerIterator = new IntegerIterator();
    const it2: AsyncIterator<number> = new IntegerIterator({});
    const it3: AsyncIterator<number> = new IntegerIterator({ start: 0 });
    const it4: AsyncIterator<number> = new IntegerIterator({ end: 100 });
    const it5: AsyncIterator<number> = new IntegerIterator({ step: 10 });
}

function test_bufferediterator() {
    const it1: BufferedIterator<number> = new BufferedIterator();
    const it2: AsyncIterator<number> = new BufferedIterator({});
    const it3: AsyncIterator<number> = new BufferedIterator({ maxBufferSize: 10 });
    const it4: AsyncIterator<number> = new BufferedIterator({ autoStart: true });
}

function test_transformiterator() {
    const it1: TransformIterator<number, string> = new TransformIterator<number, string>();
    const it2: AsyncIterator<string> = new TransformIterator<number, string>();
    const it3: AsyncIterator<number> = new TransformIterator<string, number>(it1);
    const it4: AsyncIterator<number> = new TransformIterator<string, number>(it1, {});
    const it5: AsyncIterator<number> = new TransformIterator<string, number>(it1, { optional: true });
    const it6: AsyncIterator<number> = new TransformIterator<string, number>({ source: it1 });

    const source: AsyncIterator<number> = it1.source;
}

function test_simpletransformiterator() {
    const it1: SimpleTransformIterator<number, string> = new SimpleTransformIterator<number, string>();
    const it2: TransformIterator<number, string> = new SimpleTransformIterator<number, string>();
    const it3: AsyncIterator<string> = new SimpleTransformIterator<number, string>();
    const it4: AsyncIterator<number> = new SimpleTransformIterator<string, number>(it1);
    const it5: AsyncIterator<number> = new SimpleTransformIterator<string, number>(it1, {});
    const it6: AsyncIterator<number> = new SimpleTransformIterator<string, number>({});
    const it7: AsyncIterator<number> = new SimpleTransformIterator<string, number>({ optional: true });
    const it8: AsyncIterator<number> = new SimpleTransformIterator<string, number>({ source: it1 });
    const it9: AsyncIterator<number> = new SimpleTransformIterator<string, number>({ offset: 2 });
    const it10: AsyncIterator<number> = new SimpleTransformIterator<string, number>({ limit: 2 });
    const it11: AsyncIterator<number> = new SimpleTransformIterator<string, number>({ prepend: [0, 1, 2] });
    const it12: AsyncIterator<number> = new SimpleTransformIterator<string, number>({ append: [0, 1, 2] });
    const it13: AsyncIterator<number> = new SimpleTransformIterator<number, number>(
      { filter: (val: number) => val > 10 });
    const it14: AsyncIterator<number> = new SimpleTransformIterator<number, number>({ map: (val: number) => val + 1 });
    const it15: AsyncIterator<number> = new SimpleTransformIterator<number, number>(
      { transform: (val: number, cb: (result: number) => void) => cb(val + 1) });
}

function test_multitransformiterator() {
    const it1: MultiTransformIterator<number, string> = new MultiTransformIterator<number, string>();
    const it2: TransformIterator<number, string> = new MultiTransformIterator<number, string>();
    const it3: AsyncIterator<string> = new MultiTransformIterator<number, string>();
    const it4: AsyncIterator<number> = new MultiTransformIterator<string, number>(it1);
    const it5: AsyncIterator<number> = new MultiTransformIterator<string, number>(it1, {});
    const it6: AsyncIterator<number> = new MultiTransformIterator<string, number>({});
    const it7: AsyncIterator<number> = new MultiTransformIterator<string, number>({ optional: true });
    const it8: AsyncIterator<number> = new MultiTransformIterator<string, number>({ source: it1 });
}

function test_clonediterator() {
    const it1: ClonedIterator<number> = new ClonedIterator<number>();
    const it2: ClonedIterator<number> = new ClonedIterator<number>(it1);
}
