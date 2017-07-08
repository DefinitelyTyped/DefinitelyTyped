
import * as PriorityQueue from "js-priority-queue";

{
    var queue = new PriorityQueue<number>({ comparator: (a, b) => b - a });
    queue.queue(5);
    queue.queue(3);
    queue.queue(2);
    var lowest = queue.dequeue(); // returns 5
}
{
    var compareNumbers = (a: number, b: number) => a - b;
    new PriorityQueue({ comparator: compareNumbers });
}
{
    new PriorityQueue({ initialValues: [1, 2, 3] })
}
{
    new PriorityQueue({ strategy: PriorityQueue.ArrayStrategy }); // Array
    new PriorityQueue({ strategy: PriorityQueue.BinaryHeapStrategy }); // Default
    new PriorityQueue({ strategy: PriorityQueue.BHeapStrategy }); // Slower
}
{
    var a: PriorityQueue.PriorityQueueOptions<number>;
}
