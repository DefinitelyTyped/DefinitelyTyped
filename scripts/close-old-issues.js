import { Octokit } from '@octokit/rest';
import { paginateRest } from '@octokit/plugin-paginate-rest';

const CustomOctokit = Octokit.plugin(paginateRest);
const octokit = new CustomOctokit({ auth: process.env.GITHUB_API_TOKEN });

const message = `
Hi thread, we're moving DefinitelyTyped to use [GitHub Discussions](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/53377) for conversations the \`@types\` modules in DefinitelyTyped.

To help with the transition, we're closing all issues which haven't had activity in the last 6 months, which includes this issue. If you think closing this issue is a mistake, please pop into the [TypeScript Community Discord](https://discord.gg/typescript) and mention the issue in the \`definitely-typed\` channel.`;

const go = async () => {
    const sixMonthsAgo = addMonths(new Date(), -6);
    const dateQuery = sixMonthsAgo.toISOString().split('T')[0];

    // For example:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/search?q=updated%3A%3C%3D2021-02-01&state=open&type=issues

    const parameters = {
        per_page: 100,
        q: `type:issue updated:<=${dateQuery} repo:DefinitelyTyped/DefinitelyTyped state:open`,
    };

    for await (const response of octokit.paginate.iterator('GET /search/issues', parameters)) {
        console.log('\n-');
        /** @type {Array<import("@octokit/types/src/generated/Endpoints").Endpoints["GET /issues"]["response"]["data"][number]>} */
        const items = response.data;
        for (const issue of items) {
            // Ignore issues with labels
            if (issue.labels.length) continue;

            process.stdout.write('#' + issue.number + ' ');
            await octokit.issues.createComment({
                repo: 'DefinitelyTyped',
                owner: 'DefinitelyTyped',
                issue_number: issue.number,
                body: message,
            });
            await octokit.issues.update({
                repo: 'DefinitelyTyped',
                owner: 'DefinitelyTyped',
                issue_number: issue.number,
                state: 'closed',
            });
        }
    }
};

go();

// https://stackoverflow.com/questions/1648392/get-a-date-object-six-months-prior-from-another-date-object
function addMonths(date, months) {
    var month = (date.getMonth() + months) % 12;
    //create a new Date object that gets the last day of the desired month
    var last = new Date(date.getFullYear(), month + 1, 0);

    //compare dates and set appropriately
    if (date.getDate() <= last.getDate()) {
        date.setMonth(month);
    } else {
        date.setMonth(month, last.getDate());
    }

    return date;
}
