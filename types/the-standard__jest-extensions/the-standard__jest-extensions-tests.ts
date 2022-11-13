import { Exception } from '@the-standard/exceptions';
import 'the-standard__jest-extensions';

test('test', () => {
    const action = () => {
        return;
    };
    expect(action).toThrowException(new Exception());
});

test('test', async () => {
    const action = () => Promise.resolve();
    await expect(action).toThrowExceptionAsync(new Exception());
});
