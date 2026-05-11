// Based on Google's PWA billing docs:
// https://chromeos.dev/en/publish/pwa-play-billing

(async () => {
    const service = await window.getDigitalGoodsService("https://example.com/billing");

    const itemDetails = await service.getDetails(["product_1", "product_2", "product_3"]);
    for (const item of itemDetails) {
        console.log(item.title, item.description, item.price);

        const paymentMethodData = [
            {
                supportedMethods: "https://example.com/billing",
                data: {
                    sku: item.itemId,
                },
            },
        ];

        const paymentDetails = {
            total: {
                label: "Subscription",
                amount: item.price,
            },
        };

        const request = new PaymentRequest(paymentMethodData, paymentDetails);
        const paymentResponse = await request.show();
        const { purchaseToken } = paymentResponse.details;

        await service.consume(purchaseToken);

        console.log(purchaseToken);
    }
})();
