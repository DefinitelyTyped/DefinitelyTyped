import * as neo4j from "neo4j";

let db = new neo4j.GraphDatabase("http://localhost:7474");
db = new neo4j.GraphDatabase({
  url: 'http://localhost:7474',
  auth: {
    password: "",
    username: ""
  },
  headers: {},
  proxy: "",
  agent: null
});

/** Password */
db.checkPasswordChangeNeeded((error: any, changed: boolean) => { });
db.changePassword({ password: "" }, (error: any) => { });

/** Query */
db.cypher({ query: 'MATCH (u:User {email: {email}}) RETURN u', params: { email: 'alice@example.com' } }, (error: any, results: any) => { });

/** Constraint */
db.createConstraint({ label: "", property: "" }, (error: any, constraint: any) => { });
db.dropConstraint({ label: "", property: "" }, (error: any) => { });
db.getConstraints({ label: "", property: "" }, (error: any, constraints: any) => { });
db.hasConstraint({ label: "", property: "" }, (error: any, exists: boolean) => { });

/** Index */
db.dropIndex({ label: "", property: "" }, (error: any) => { });
db.getIndexes((error: any, indexes: any) => { });
db.getIndexes({ label: "", property: "" }, (error: any, indexes: any) => { });
db.hasIndex({ label: "", property: "" }, (error: any, exists: boolean) => { });

/** Labels */
db.getLabels((error: any, labels: any) => { });

/** Property keys */
db.getPropertyKeys((error: any, keys: any) => { });

/** Relationship */
db.getRelationshipTypes((error: any, types: any) => { });

/** HTTP */
db.http({ method: "", path: "", headers: {}, body: "", raw: "" }, (error: any, body: any) => { });

/** Transaction */
const transaction: neo4j.Transaction = db.beginTransaction();
transaction.rollback((error: any) => { });
transaction.commit((error: any) => { });
transaction.renew((error: any) => { });
transaction.cypher({ query: 'MATCH (u:User {email: {email}}) RETURN u', params: { email: 'alice@example.com' } }, (error: any, results: any) => { });

const expiresIn: Date | number = transaction.expiresIn;
const expiresAt: Date = transaction.expiresAt;
const state: string = transaction.state
