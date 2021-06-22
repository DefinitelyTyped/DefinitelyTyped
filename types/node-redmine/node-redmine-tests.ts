import { Issue, Redmine } from 'node-redmine';

const redmine = new Redmine('http://localhost', { apiKey: 'QWERTYUIOP' }, 8080);

const dump_issue = (issue: Issue) => {
  console.log('Dumping issue:');
  for (const item in issue) {
    console.log(`${JSON.stringify(issue)}: `);
  }
};
redmine.issues({ limit: 2 }, (err, data) => {
  if (err) throw err;

  for (const issue of data.issues) {
    dump_issue(issue);
  }
  console.log(`total count: ${data.total_count}`);
});
