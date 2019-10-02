import useCombinedReducers from 'use-combined-reducers';

useCombinedReducers<{ a: number; b: any }, () => {}>({
    a: ['', () => { }],
    b: ['', () => { }],
});
