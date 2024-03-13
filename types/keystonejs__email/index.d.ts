// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
/* eslint-disable @definitelytyped/no-declare-current-package */
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "@keystonejs/email" {
    type Sender = (
        fileName: string,
    ) => {
        send: (rendererOpts: any, transportOptions: any) => any;
    };
    interface MailSenderBuilder {
        mjml: (opts?: { root?: string | undefined; transport?: string | undefined }) => Sender;
        jsx: (opts?: { root?: string | undefined; transport?: string | undefined }) => Sender;
        pug: (opts?: { root?: string | undefined; transport?: string | undefined }) => Sender;
    }

    const emailSender: MailSenderBuilder;
}
