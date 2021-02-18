import * as JiraApi from 'jira-client';

// Initialize
const jira = new JiraApi({
  protocol: 'https',
  host: 'jira.somehost.com',
  username: 'username',
  password: 'password',
  apiVersion: '2',
  strictSSL: true
});

const issueNumber = "123";

jira.findIssue(issueNumber)
  .then(issue => {
    console.log(`Status: ${issue.fields.status.name}`);
  })
  .catch(err => {
    console.error(err);
  });
jira.searchJira("test", {
  startAt: 2,
  maxResults: 1
});
jira.getIssueCreateMetadata({
  expand: 'test'
});
async function logIssueName() {
  try {
    const issue = await jira.findIssue(issueNumber);
    console.log(`Status: ${issue.fields.status.name}`);
  } catch (err) {
    console.error(err);
  }
}
