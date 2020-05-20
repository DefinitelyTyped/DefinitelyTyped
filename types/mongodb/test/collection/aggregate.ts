import { connect, MongoError, AggregationCursor } from 'mongodb';
import { connectionString } from '../index';

// collection.aggregate tests
async function run() {
  const client = await connect(connectionString);
  const db = client.db('test');
  const collection = db.collection('test.find');

  interface Payment {
    total: number;
  }
  const cursor: AggregationCursor<Payment> = collection.aggregate<Payment>([{}]);

  collection.aggregate([{ $match: { bar: 1 } }, { $limit: 10 }]);
  collection.aggregate([{ $match: { bar: 1 } }]).limit(10);
  collection
    .aggregate([])
    .match({ bar: 1 })
    .limit(10);
  collection
    .aggregate()
    .match({ bar: 1 })
    .limit(10);

  collection.aggregate<Payment>(
    [{ $match: { bar: 1 } }],
    (err: MongoError, cursor: AggregationCursor<Payment>) => {
      cursor.limit(10);
    },
  );

  collection.aggregate<Payment>(
    [],
    (err: MongoError, cursor: AggregationCursor<Payment>) => {
      cursor.match({ bar: 1 }).limit(10);
    },
  );

  collection.aggregate<Payment>((err: MongoError, cursor: AggregationCursor<Payment>) => {
    cursor.match({ bar: 1 }).limit(10);
  });

  interface Employee {
    firstName: string;
    lastName: string;
    department: string;
  }

  interface EmployeeName {
    fullName: string;
  }

  const cursor1: AggregationCursor<EmployeeName> = collection
    .aggregate<Employee>()
    .project<EmployeeName>({
      fullName: { $concat: ['$firstName', ' ', '$lastName'] },
    });

  interface DepartmentSummary {
    _id: string;
    count: number;
  }

  const cursor2: AggregationCursor<DepartmentSummary> = collection
    .aggregate<Employee>()
    .group<DepartmentSummary>({
      _id: '$department',
      count: { $sum: 1 },
    });
}
