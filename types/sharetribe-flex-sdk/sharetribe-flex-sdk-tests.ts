import {
    createInstance,
    file,
    FileAttachment,
    FileAttachmentScope,
    FileState,
    FileUpload,
    Marketplace,
    MutationResponse,
    OwnFile,
    ShowResponse,
    util,
} from "sharetribe-flex-sdk";

const sdk = createInstance({ clientId: "client-id" });

sdk.marketplace.show().then((response: ShowResponse<Marketplace>) => {
    const name: string = response.data.data.attributes.name;
    const description: string | null = response.data.data.attributes.description;
});

sdk.assetByAlias({ path: "/assets", alias: "logo" }).then((result: { status?: number; data: unknown }) => {
    const status: number | undefined = result.status;
    const data: unknown = result.data;
});

// File upload flow (added in flex-sdk 1.24)
const meta = file.metadata("file-like-object");
const fileName: string = meta.name;

sdk.ownFiles.create({ name: meta.name, mimeType: meta.mimeType, size: meta.size }).then(
    (response: MutationResponse<OwnFile>) => {
        const fileId = response.data.data.id;
        return sdk.fileUploads.create({ fileId }).then((uploadResponse: MutationResponse<FileUpload>) => {
            const { method, url, headers } = uploadResponse.data.data.attributes;
            return file.upload({ method, url, headers, file: "file-like-object" });
        });
    },
);

// Files attached to another resource are reached through the attachment ID, not the file ID
sdk.fileDownloads.create({ fileAttachmentId: "a5d04285-07da-4fa0-b80b-ebabb8bac9e5" }).then(response => {
    const downloadUrl: string = response.data.data.attributes.url;
});

sdk.files.show({ fileAttachmentId: "a5d04285-07da-4fa0-b80b-ebabb8bac9e5" }).then(response => {
    const state: FileState = response.data.data.attributes.state;
});

// Listings carry protected attachments readable by their author (API changelog 2026-07-13)
sdk.ownListings.create({
    title: "Bike",
    protectedFileAttachments: [{ fileId: "a5d04285-07da-4fa0-b80b-ebabb8bac9e5" }],
}).then(response => {
    const attachments = response.data.data.relationships?.protectedFileAttachments;
    if (attachments) {
        const attachmentId: string = attachments.data[0].id.uuid;
    }
});

// Users carry private attachments, set through updateProfile (API changelog 2026-08-10)
sdk.currentUser.updateProfile({
    privateFileAttachments: [{ fileId: "a5d04285-07da-4fa0-b80b-ebabb8bac9e5" }],
}).then(response => {
    const attachments = response.data.data.relationships?.privateFileAttachments;
    if (attachments) {
        const attachmentId: string = attachments.data[0].id.uuid;
    }
});

// Messages take public attachments and can be queried by ids (API changelog 2026-03-25, 2026-05-25)
sdk.messages.send({
    transactionId: { _sdkType: "UUID", uuid: "b1b9e5f9-1a4a-4f0e-9d2f-0f3a3c1f2b7d" },
    content: "Here is the manual",
    publicFileAttachments: [{ fileId: "a5d04285-07da-4fa0-b80b-ebabb8bac9e5" }],
}).then(response => {
    const messageId: string = response.data.data.id.uuid;
});

sdk.messages.query({ ids: ["b1b9e5f9-1a4a-4f0e-9d2f-0f3a3c1f2b7d"], include: ["publicFileAttachments.file"] }).then(
    response => {
        const firstMessage = response.data.data[0];
        if (firstMessage) {
            const isDeleted: boolean | undefined = firstMessage.attributes.deleted;
            const attachments = firstMessage.relationships.publicFileAttachments;
            if (attachments) {
                const attachmentId: string = attachments.data[0].id.uuid;
            }
        }
        // Attachments themselves arrive as included resources
        const included = response.data.included ?? [];
        const attachment = included.find(resource => resource.type === "fileAttachment") as
            | FileAttachment
            | undefined;
        if (attachment) {
            const scope: FileAttachmentScope = attachment.attributes.scope;
            const fileId: string = attachment.relationships.file.data.id.uuid;
        }
    },
);

// Deleting the current user can cascade to Stripe (API changelog 2025-11-13)
sdk.currentUser.delete({ currentPassword: "hunter2", deleteFromStripe: true }).then(response => {
    const status: number = response.status;
});

// Query string utilities (added in flex-sdk 1.23)
const qs: string = util.queryString({ ok: true });
const oqs: string = util.objectQueryString({ a: "foo", b: 150 });
