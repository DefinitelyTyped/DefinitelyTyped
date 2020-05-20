import ErrorSubclass from 'error-subclass';

class ExampleError extends ErrorSubclass {
    static displayName = 'ExampleError';
}

throw new ExampleError('Something went wrong!');
