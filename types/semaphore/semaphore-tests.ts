import semaphore = require("semaphore");

var sem: semaphore.Semaphore = semaphore(10);

function task() {
    console.log("My task");
    sem.leave();
}

sem.take(task);
sem.take(2, task);
sem.leave(2);
sem.current;

const available: boolean = sem.available(2);

// `take` passes `leave` to every task, so a task can release the semaphore
// without closing over it. Tasks that ignore it still type-check.
sem.take((leave: semaphore.Leave) => {
    console.log("My task");
    leave();
});

sem.take(2, (leave) => {
    // $ExpectType Leave
    leave;
    leave(2);
});
