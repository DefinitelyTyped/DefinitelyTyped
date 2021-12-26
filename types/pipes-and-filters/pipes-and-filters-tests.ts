import * as Pipeline from 'pipes-and-filters';

const unknownTypePipeline = Pipeline.create('test');
// $ExpectType Pipeline<unknown, unknown>
unknownTypePipeline;

const stronglyTypedPipeline = Pipeline.create<number, string>('strong-test');

// $ExpectType Pipeline<number, string>
stronglyTypedPipeline;

// $ExpectType Pipeline<number, string>
stronglyTypedPipeline.use((input, next) => {
    // $ExpectType NextFunction<any>
    next;

    // $ExpectType void
    next(null, Number(input).toFixed(2));
});

// $ExpectType Pipeline<number, string>
stronglyTypedPipeline.breakIf((input) => Number(input) % 2 !== 0);

// $ExpectType void
stronglyTypedPipeline.execute(2, (err, result) => {
    // $ExpectType Error | null | undefined
    err;

    // $ExpectType string | undefined
    result;
});
