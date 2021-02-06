import { connect } from 'mongodb';
import { connectionString } from '../index';

// https://docs.mongodb.com/manual/core/map-reduce/
// Declare emit function to be called inside map function
declare function emit(key: any, value: any): void;

interface ITestMapReduceSchema {
    cust_id: string;
    amount: number;
    status: string;
}

function testCollectionMapFunction(this: ITestMapReduceSchema) {
    emit(this.cust_id, this.amount);
}

function testCollectionReduceFunction(_key: string, values: number[]): number {
    return values.reduce((a, v) => a + v, 0);
}

async function run() {
    const client = await connect(connectionString);
    client
        .db('test')
        .collection<ITestMapReduceSchema>('test-mapReduce-collection')
        .mapReduce(testCollectionMapFunction, testCollectionReduceFunction);
}
