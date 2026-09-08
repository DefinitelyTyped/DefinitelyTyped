import { createInstance, file, FileAttachmentScope, util } from "sharetribe-flex-integration-sdk";

const sdk = createInstance({
    clientId: "client-id",
    clientSecret: "client-secret",
});

sdk.marketplace.show().then((response) => {
    const name: string = response.data.data.attributes.name;
});

sdk.users.query({ page: 1, include: ["profileImage"] }).then((response) => {
    const firstUser = response.data.data[0];
    if (firstUser && firstUser.attributes.email) {
        const email: string = firstUser.attributes.email;
    }
});

// Test users.update() method
sdk.users.update({
    id: "user-id",
    privateData: { shopify: { access_token: "token" } },
}).then((response) => {
    const userId: string = response.data.data.id.uuid;
});

sdk.users.update({
    id: "user-id",
    publicData: { country: "US" },
    protectedData: { email: "test@example.com" },
}).then((response) => {
    const status: number = response.status;
});

sdk.transactions.transition({
    id: "transaction-id",
    transition: "request-payment",
    params: { listingId: "listing-id" },
}).then((response) => {
    const status: number = response.status;
});

// Test listings.create() with plain price object
sdk.listings.create({
    authorId: "user-id",
    title: "Test Listing",
    state: "published",
    price: { amount: 5000, currency: "USD" },
    publicData: { category: "electronics" },
}, {
    expand: true,
    include: ["author"],
}).then((response) => {
    const listingId: string = response.data.data.id.uuid;
});

// Test listings.create() with Money type (should still work)
sdk.listings.create({
    authorId: "user-id",
    title: "Test Listing",
    state: "pendingApproval",
    price: { _sdkType: "Money", amount: 5000, currency: "USD" },
}).then((response) => {
    const status: number = response.status;
});

// Test listings.update() with plain price object
sdk.listings.update({
    id: "listing-id",
    title: "Updated Title",
    price: { amount: 6000, currency: "USD" },
    publicData: { updated: true },
}).then((response) => {
    const listingId: string = response.data.data.id.uuid;
});

// Test stock.compareAndSet() with null oldTotal (new listing)
sdk.stock.compareAndSet({
    listingId: "listing-id",
    oldTotal: null,
    newTotal: 10,
}).then((response) => {
    const quantity: number = response.data.data.attributes.quantity;
});

// Test stock.compareAndSet() with number oldTotal (existing listing)
sdk.stock.compareAndSet({
    listingId: "listing-id",
    oldTotal: 10,
    newTotal: 5,
}).then((response) => {
    const status: number = response.status;
});

// Test stockAdjustments.query() with listingId
sdk.stockAdjustments.query({
    listingId: "listing-id",
    page: 1,
    perPage: 10,
}).then((response) => {
    const adjustments = response.data.data;
    const totalPages: number = response.data.meta.totalPages;
});

// Test stockAdjustments.create() with listingId
sdk.stockAdjustments.create({
    listingId: "listing-id",
    quantity: 5,
}).then((response) => {
    const adjustmentId: string = response.data.data.id.uuid;
});

// Mark a user's email as verified (added in integration-sdk 1.12)
sdk.users.verifyEmail({
    id: "user-id",
    email: "test@example.com",
}).then((response) => {
    const userId: string = response.data.data.id.uuid;
});

// Query messages by transaction or by ids (added in integration-sdk 1.13)
sdk.messages.query({ transactionId: "transaction-id" }).then((response) => {
    const firstMessage = response.data.data[0];
    if (firstMessage) {
        const content: string = firstMessage.attributes.content;
    }
});
sdk.messages.query({ ids: ["message-id"], include: ["sender"] }).then((response) => {
    const totalPages: number = response.data.meta.totalPages;
});

// Query files with the supported filters (added in integration-sdk 1.13)
sdk.files.query({
    ownerId: "user-id",
    messageId: "message-id",
    ids: ["file-id"],
    createdAtStart: new Date("2024-01-01T00:00:00.000Z"),
    createdAtEnd: "2024-12-31T23:59:59.000Z",
    include: ["owner"],
}).then((response) => {
    const firstFile = response.data.data[0];
    if (firstFile) {
        const state: string = firstFile.attributes.state;
        const ownerRef: string = firstFile.relationships.owner.data.id.uuid;
    }
});

// Query file attachments by message or file ids (added in integration-sdk 1.13)
sdk.fileAttachments.query({ messageId: "message-id", fileIds: ["file-id"], include: ["file"] }).then((response) => {
    const firstAttachment = response.data.data[0];
    if (firstAttachment) {
        const scope: FileAttachmentScope = firstAttachment.attributes.scope;
    }
});

// Attachments on listings and transactions can be filtered by their attaching resource
// (API changelog 2026-07-13)
sdk.fileAttachments.query({ listingId: "listing-id" }).then((response) => {
    const firstAttachment = response.data.data[0];
    if (firstAttachment && firstAttachment.relationships.listing) {
        const listingId: string = firstAttachment.relationships.listing.data.id.uuid;
    }
});
sdk.fileAttachments.query({ transactionId: "transaction-id", include: ["file"] }).then((response) => {
    const totalItems: number | undefined = response.data.meta.totalItems;
});

// File upload flow: create the file record, get an upload URL, then PUT the bytes
// (added in integration-sdk 1.14)
declare const fileLike: unknown;
const fileMetadata = file.metadata(fileLike);
sdk.files.create({
    ownerId: "user-id",
    name: fileMetadata.name,
    mimeType: fileMetadata.mimeType,
    size: fileMetadata.size,
}).then((response) => {
    const fileId = response.data.data.id;
    return sdk.fileUploads.create({ fileId }).then((uploadResponse) => {
        const upload = uploadResponse.data.data.attributes;
        return file.upload({
            url: upload.url,
            method: upload.method,
            headers: upload.headers,
            file: fileLike,
        });
    });
});

// Download URLs are requested per file (added in integration-sdk 1.14)
sdk.fileDownloads.create({ fileId: "file-id" }, { expand: true }).then((response) => {
    const url: string = response.data.data.attributes.url;
});

// Files can be attached to listings and read back as a relationship (API changelog 2026-07-13)
sdk.listings.update({
    id: "listing-id",
    protectedFileAttachments: [{ fileId: "file-id" }],
}).then((response) => {
    const listingId: string = response.data.data.id.uuid;
});
sdk.listings.show({ id: "listing-id", include: ["protectedFileAttachments.file"] }).then((response) => {
    const attachments = response.data.data.relationships?.protectedFileAttachments;
    if (attachments) {
        const attachmentId: string = attachments.data[0].id.uuid;
    }
});

// Users carry private file attachments, set through updateProfile (API changelog 2026-08-10)
sdk.users.updateProfile({
    id: "user-id",
    privateFileAttachments: [{ fileId: "file-id" }],
}).then((response) => {
    const userId: string = response.data.data.id.uuid;
});

// Messages expose their public attachments and a deleted flag (API changelog 2026-03-25, 2026-05-25)
sdk.messages.query({ transactionId: "transaction-id", include: ["publicFileAttachments.file"] }).then((response) => {
    const firstMessage = response.data.data[0];
    if (firstMessage) {
        const isDeleted: boolean | undefined = firstMessage.attributes.deleted;
        const attachments = firstMessage.relationships.publicFileAttachments;
        if (attachments) {
            const attachmentId: string = attachments.data[0].id.uuid;
        }
    }
});

const rateLimiterConfig = util.prodQueryLimiterConfig;
const rateLimiter = util.createRateLimiter(rateLimiterConfig);
