import Clearout = require("@clearoutio/clearout");

// Construct with `new` and a config object.
const client = new Clearout("api-token", { timeout: 15000 });

// Construct by calling the factory directly (CommonJS style, no `new`).
const factoryClient = Clearout("api-token");

// Full config object.
const configured = new Clearout("api-token", {
    timeout: 5000,
    optimize: "highest_accuracy",
    ignore_result: true,
    ignore_duplicate_file: "false",
    queue: true,
});

// @ts-expect-error - token is required.
new Clearout();

// @ts-expect-error - optimize must be one of the allowed strings.
new Clearout("api-token", { optimize: "fastest" });

// Mirrors real-world usage: dynamic import + default interop.
async function defaultClearoutVerify(email: string): Promise<Clearout.InstantVerifyResult> {
    const { default: ClearoutDefault } = await import("@clearoutio/clearout");
    const c = new ClearoutDefault("api-token", { timeout: 15000 });
    return c.emailVerifier.verify({ email });
}

async function verifierExamples() {
    // $ExpectType InstantVerifyResult
    const result = await client.emailVerifier.verify({ email: "elon.musk@tesla.com" });
    // $ExpectType SafeToSend
    result.safe_to_send;
    // $ExpectType string
    result.status;
    // $ExpectType YesNo
    result.disposable;
    // $ExpectType number
    result.sub_status.code;
    // $ExpectType string
    result.detail_info.domain;

    // timeout is optional and overridable.
    await client.emailVerifier.verify({ email: "test@example.com", timeout: 90000 });

    // @ts-expect-error - email is required.
    await client.emailVerifier.verify({});

    // $ExpectType BulkListResult
    const bulk = await client.emailVerifier.bulkVerify({
        file: "/tmp/emails.csv",
        optimize: "fastest_turnaround",
        ignore_duplicate_file: "true",
    });
    // $ExpectType string
    bulk.list_id;

    // $ExpectType BulkVerifyProgressStatus
    const progress = await client.emailVerifier.getBulkVerifyProgressStatus({ list_id: bulk.list_id });
    // $ExpectType number | undefined
    progress.percentile;
    // @ts-expect-error - percentage is a bulk-finder field, not a bulk-verify one.
    progress.percentage;

    // $ExpectType DownloadResult
    const download = await client.emailVerifier.downloadBulkVerifyResult({ list_id: bulk.list_id });
    // $ExpectType string
    download.url;

    // $ExpectType ListActionResult
    const removed = await client.emailVerifier.removeBulkVerifyList({ list_id: bulk.list_id, ignore_result: true });
    // $ExpectType string
    removed.name;

    // $ExpectType ListActionResult
    await client.emailVerifier.cancelBulkVerifyList({ list_id: bulk.list_id });

    // $ExpectType CatchAllResult
    const catchAll = await client.emailVerifier.isCatchAllEmail({ email: "mike.k@shopify.com" });
    // $ExpectType YesNo
    catchAll.catchall;

    // $ExpectType DisposableResult
    const disposable = await client.emailVerifier.isDisposableEmail({ email: "john@temp-mail.org" });
    // $ExpectType YesNo
    disposable.disposable;

    // $ExpectType BusinessResult
    const business = await client.emailVerifier.isBusinessEmail({ email: "us@clearout.io" });
    // $ExpectType YesNo
    business.business_account;

    // $ExpectType FreeResult
    const free = await client.emailVerifier.isFreeEmail({ email: "john@gmail.com" });
    // $ExpectType YesNo
    free.free_account;

    // $ExpectType RoleResult
    const role = await client.emailVerifier.isRoleEmail({ email: "info@gmail.com" });
    // $ExpectType YesNo
    role.role_account;

    // $ExpectType GibberishResult
    const gibberish = await client.emailVerifier.isGibberishEmail({ email: "abcd12345@gmail.com" });
    // $ExpectType YesNo
    gibberish.gibberish;
}

async function finderExamples() {
    // $ExpectType EmailFinderResult
    const found = await client.emailFinder.find({
        name: "Elon Musk",
        domain: "tesla.com",
        timeout: 10000,
        queue: true,
    });
    // $ExpectType string
    found.emails[0].email_address;
    // $ExpectType number
    found.confidence_score;
    // $ExpectType string
    found.company.name;

    // domain is required.
    // @ts-expect-error
    await client.emailFinder.find({ name: "Elon Musk" });

    // $ExpectType EmailFinderStatusResult
    const status = await client.emailFinder.getStatus({ qid: "61008c4597947d45700f4bb2" });
    if ("emails" in status) {
        // Completed: the full found-email payload is available.
        // $ExpectType FoundEmail[]
        status.emails;
        // $ExpectType number
        status.confidence_score;
    } else {
        // Still queued: only the progress status is available.
        // $ExpectType string
        status.query_status;
        // @ts-expect-error - found-email fields are not present while queued.
        status.emails;
    }

    // $ExpectType BulkListResult
    const bulk = await client.emailFinder.bulkFind({ file: "/tmp/people.csv", ignore_duplicate_file: "true" });

    // $ExpectType BulkFinderProgressStatus
    const progress = await client.emailFinder.getBulkFindProgressStatus({ list_id: bulk.list_id });
    // $ExpectType number | undefined
    progress.percentage;
    // @ts-expect-error - percentile is a bulk-verify field, not a bulk-finder one.
    progress.percentile;

    // $ExpectType DownloadResult
    await client.emailFinder.downloadBulkFindResult({ list_id: bulk.list_id });

    // $ExpectType ListActionResult
    await client.emailFinder.removeBulkFindList({ list_id: bulk.list_id });

    // $ExpectType ListActionResult
    await client.emailFinder.cancelBulkFinderList({ list_id: bulk.list_id });
}

async function accountExamples() {
    // $ExpectType CreditsResult
    const credits = await client.getCredits();
    // $ExpectType number
    credits.available_credits;
    // $ExpectType string | null
    credits.credits.subs;
    // $ExpectType number
    credits.credits.total;
}
