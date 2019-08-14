import { task } from 'mobx-task';

const func = () => 42;
const funcAsync = (txt: string, num: number) => Promise.resolve(`${txt}${num}`);

const task1 = task(funcAsync);

task1('test', 123); // $ExpectType Promise<string>
task1.result; // $ExpectType string | undefined
task1.state; // $ExpectType TaskState

// $ExpectType number
task1.match({
    resolved: res => 1,
    pending: (txt, num) => num,
    rejected: error => -1,
});

// $ExpectType string
task1.match({
    resolved: res => res,
    pending: (txt, num) => txt,
    rejected: error => error.message,
});

// $ExpectType string | number
task1.match({
    resolved: res => 1,
    pending: (txt, num) => txt,
    rejected: error => error.message,
});

// wrap
const task2 = task(func);
const task2ToString = task2.wrap(inner => {
    return () => {
        return inner().then(r => JSON.stringify(r));
    };
});
task2ToString.result; // $ExpectType string | undefined

// options
const task3 = task(func, { result: 1, state: 'resolved' });
task3.setState({ result: 2, state: 'pending' });
task3.setState({ result: '2', state: 'pending' }); // $ExpectError

class TestClass {
    @task fieldWithArrowFn = () => {};
    @task({ swallow: true }) fieldWithArrowFn2 = () => {};
    fieldWithArrowFn3 = task(() => {}, { swallow: true });

    @task method() {}

    @task({ swallow: true }) method2() {}
}
