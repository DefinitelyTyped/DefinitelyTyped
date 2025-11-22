import ZeroBounceSDK from "@zerobounce/zero-bounce-sdk";

const sdk = new ZeroBounceSDK();

// $ExpectType void
sdk.init("test-api-key");

// $ExpectType Promise<{ Credits: string; }>
sdk.getCredits();

// $ExpectType Promise<ValidateEmailResponse>
sdk.validateEmail("test@example.com");

// $ExpectType Promise<ValidateEmailResponse>
sdk.validateEmail("test@example.com", "192.168.1.1");

// $ExpectType Promise<ApiUsageResponse>
sdk.getApiUsage("2024-01-01", "2024-12-31");

// $ExpectType Promise<ValidateBatchResponse>
sdk.validateBatch([
    { email_address: "test1@example.com" },
    { email_address: "test2@example.com" }
]);

// $ExpectType Promise<EmailActivityResponse>
sdk.getEmailActivity("test@example.com");

// $ExpectType Promise<SendFileResponse>
sdk.sendFile({
    file: new File([], "test.csv"),
    email_address_column: 1
});

// $ExpectType Promise<SendFileResponse>
sdk.sendFile({
    file: new Blob(["email\ntest@example.com"], { type: "text/csv" }),
    email_address_column: 1,
    return_url: "https://example.com/callback",
    first_name_column: 2,
    last_name_column: 3,
    gender_column: 4,
    ip_address_column: 5,
    has_header_row: true,
    remove_duplicate: false
});

// $ExpectType Promise<SendFileResponse>
sdk.sendScoringFile({
    file: new File([], "test.csv"),
    email_address_column: 1,
    has_header_row: true
});

// $ExpectType Promise<FileStatusResponse>
sdk.getFileStatus("file-123");

// $ExpectType Promise<FileStatusResponse>
sdk.getScoringFileStatus("file-456");

// $ExpectType Promise<Blob>
sdk.getFile("file-123");

// $ExpectType Promise<Blob>
sdk.getScoringFile("file-456");

// $ExpectType Promise<DeleteFileResponse>
sdk.deleteFile("file-123");

// $ExpectType Promise<DeleteFileResponse>
sdk.deleteScoringFile("file-456");

// $ExpectType Promise<GuessFormatResponse>
sdk.guessFormat({
    domain: "example.com"
});

// $ExpectType Promise<GuessFormatResponse>
sdk.guessFormat({
    domain: "example.com",
    first_name: "John",
    middle_name: "Michael",
    last_name: "Doe"
});