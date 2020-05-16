import { useWait, Waiter } from 'react-wait';

const Spinner = () => <img src="https://a.com/spinner.gif" />;

function A() {
    const { isWaiting } = useWait();
    return (
        <div>
            {isWaiting('creating user')
                ? 'Creating User...'
                : 'Nothing happens'}
        </div>
    );
}

function B() {
    const { anyWaiting } = useWait();
    return (
        <div>
            {anyWaiting() ? 'Something happening on app...' : 'Nothing happens'}
        </div>
    );
}

function C() {
    const { startWaiting, endWaiting, isWaiting, Wait } = useWait();

    function createUser() {
        startWaiting('creating user');
        // Faking the async work:
        setTimeout(() => {
            endWaiting('creating user');
        }, 1000);
    }

    return (
        <button disabled={isWaiting('creating user')} onClick={createUser}>
            <Wait on="creating user" fallback={<Spinner />}>
                Create User
            </Wait>
        </button>
    );
}

const MyComponent = () => (
    <Waiter>
        <C />
    </Waiter>
);

function testCreateWaitingContext() {
    const { createWaitingContext } = useWait();
    const { startWaiting, endWaiting, isWaiting, Wait } = createWaitingContext('creating user');
    return (
        <div>
            <Wait fallback={<Spinner />}>
                <button onClick={startWaiting}>Create user</button>
            </Wait>
            <button disabled={isWaiting()} onClick={endWaiting}>Cancel</button>
        </div>
    );
}

function testWaiters() {
    const { waiters } = useWait();
    return (
        <ul>
            {waiters.map((waiter, index) => <li key={index}>{waiter}</li>)}
        </ul>
    );
}
