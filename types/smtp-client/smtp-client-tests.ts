import { SMTPClient } from "smtp-client";

const s = new SMTPClient({
    host: "mx.domain.com",
    port: 25,
});

async function main() {
    // $ExpectType void
    await s.connect();
    await s.greet({ hostname: "mx.domain.com" }); // runs EHLO command or HELO as a fallback
    await s.authPlain({ username: "john", password: "secret" }); // authenticates a user
    await s.mail({ from: "from@sender.com" }); // runs MAIL FROM command
    await s.rcpt({ to: "to@recipient.com" }); // runs RCPT TO command (run this multiple times to add more recii)
    await s.data("mail source"); // runs DATA command and streams email source
    await s.quit(); // runs QUIT command
    await s.close(); // runs QUIT command
}

main();
