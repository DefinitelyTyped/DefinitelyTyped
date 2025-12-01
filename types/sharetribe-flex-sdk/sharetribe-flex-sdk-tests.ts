import { createInstance, MarketplaceDataResponse } from "sharetribe-flex-sdk";

const sdk = createInstance({ clientId: "client-id" });

sdk.marketplace.show().then((response: { status: number; statusText: string; data: MarketplaceDataResponse }) => {
    const name: string = response.data.data.attributes.name;
    const description: string | null = response.data.data.attributes.description;
});

sdk.assetByAlias({ path: "/assets", alias: "logo" }).then((result: { status?: number; data: unknown }) => {
    const status: number | undefined = result.status;
    const data: unknown = result.data;
});

const colors = sdk.Branding.data.marketplaceColors;
const primary: string = colors.primaryButton;
const notification: string = colors.notificationPrimaryButton;
const mainColor: string = colors.mainColor;
