import {
    createInstance,
    file,
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

sdk.fileDownloads.create({ fileId: "a5d04285-07da-4fa0-b80b-ebabb8bac9e5" }).then(response => {
    const downloadUrl: string = response.data.data.attributes.url;
});

// Query string utilities (added in flex-sdk 1.23)
const qs: string = util.queryString({ ok: true });
const oqs: string = util.objectQueryString({ a: "foo", b: 150 });
