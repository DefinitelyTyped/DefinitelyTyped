// https://docs.com/manual/core/transactions/

import { ClientSession, MongoClient, connect } from 'mongodb';
import { connectionString } from './index';

async function commitWithRetry(session: ClientSession) {
  try {
    await session.commitTransaction();
    console.log('Transaction committed.');
  } catch (error) {
    if (
      error.errorLabels &&
      error.errorLabels.indexOf('UnknownTransactionCommitResult') < 0
    ) {
      console.log('UnknownTransactionCommitResult, retrying commit operation...');
      await commitWithRetry(session);
    } else {
      console.log('Error during commit...');
      throw error;
    }
  }
}

async function runTransactionWithRetry(
  txnFunc: (client: MongoClient, session: ClientSession) => Promise<void>,
  client: MongoClient,
  session: ClientSession,
) {
  try {
    await txnFunc(client, session);
  } catch (error) {
    console.log('Transaction aborted. Caught exception during transaction.');

    // If transient error, retry the whole transaction
    if (error.errorLabels && error.errorLabels.indexOf('TransientTransactionError') < 0) {
      console.log('TransientTransactionError, retrying transaction ...');
      await runTransactionWithRetry(txnFunc, client, session);
    } else {
      throw error;
    }
  }
}

async function updateEmployeeInfo(client: MongoClient, session: ClientSession) {
  session.startTransaction({
    readConcern: { level: 'snapshot' },
    writeConcern: { w: 'majority' },
  });

  const employeesCollection = client.db('hr').collection('employees');
  const eventsCollection = client.db('reporting').collection('events');

  await employeesCollection.updateOne(
    { employee: 3 },
    { $set: { status: 'Inactive' } },
    { session },
  );
  await eventsCollection.insertOne(
    {
      employee: 3,
      status: { new: 'Inactive', old: 'Active' },
    },
    { session },
  );

  try {
    await commitWithRetry(session);
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }
}

async function transfer(client: MongoClient, from: any, to: any, amount: number) {
  const db = client.db();
  const session = client.startSession();
  session.startTransaction();
  try {
    const opts = { session, returnOriginal: false };
    const A = await db
      .collection('Account')
      .findOneAndUpdate({ name: from }, { $inc: { balance: -amount } }, opts)
      .then(res => res.value);
    if (A.balance < 0) {
      // If A would have negative balance, fail and abort the transaction
      // `session.abortTransaction()` will undo the above `findOneAndUpdate()`
      throw new Error('Insufficient funds: ' + (A.balance + amount));
    }

    const B = await db
      .collection('Account')
      .findOneAndUpdate({ name: to }, { $inc: { balance: amount } }, opts)
      .then(res => res.value);

    await session.commitTransaction();
    session.endSession();
    return { from: A, to: B };
  } catch (error) {
    // If an error occurred, abort the whole transaction and
    // undo any changes that might have happened
    await session.abortTransaction();
    session.endSession();
    throw error; // Rethrow so calling function sees error
  }
}

async function run() {
  const client = await connect(connectionString);
  client.startSession();
  client.withSession(session =>
    runTransactionWithRetry(updateEmployeeInfo, client, session),
  );
}
