import NextSeo from 'next-seo';

new NextSeo({
    config: {
        canonical: "",
        dangerouslySetAllPagesToNoIndex: false,
        description: "",
        facebook: {
            appId: 0,
        },
        noindex: false,
        openGraph: {
            book: {
                authors: [""],
                isbn: "",
                releaseDate: "",
                tags: [""],
            },
            defaultImageHeight: 0,
            defaultImageWidth: 0,
            description: "",
            images: [{
                alt: "",
                height: 0,
                url: "",
                width: 0,
            }],
            locale: "",
            profile: {
                firstName: "",
                gender: "",
                lastName: "",
                username: "",
            },
            site_name: "",
            title: "",
            type: "",
            url: "",
        },
        title: "",
        titleTemplate: "",
        twitter: {
            cardType: "",
            handle: "",
            site: "",
        },
    },
});
