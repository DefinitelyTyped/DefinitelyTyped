suite('A', () => {
    setUp(() => {});

    tearDown(() => {});

    test('Empty Test', () => {
        assert.isTrue(true);
    });
});

suite('B', () => {
    setUp(() => {
        return { message: 'Hello, World!' };
    });

    tearDown((state: any) => {
        delete state.message;
    });

    test("Test that msg equals 'Hello, World!`", ({ message }: any) => {
        assert.deepEqual(message, 'Hello, World!');
    });
});

suite('C', () => {
    interface State {
        message?: string;
    }

    setUp((): State => {
        return { message: 'QWERTY' };
    });

    tearDown((state: State) => {
        delete state.message;
    });

    test('Empty Test', ({ message }: State) => {
        assert.deepEqual(message, 'QWERTY');
    });
});
