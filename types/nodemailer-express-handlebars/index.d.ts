// Type definitions for nodemailer-express-handlebars 4.0
// Project: https://github.com/yads/nodemailer-express-handlebars
// Definitions by: Gabriel de Oliveira <https://github.com/th3rius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { create } from "express-handlebars";
import { SentMessageInfo, Transporter } from "nodemailer";
import * as Mail from "nodemailer/lib/mailer";

declare function hbs(options: hbs.NodemailerExpressHandlebarsOptions): Mail.PluginFunction;

declare namespace hbs {
    type Exphbs = ReturnType<typeof create>;

    type ExphbsOptions = Parameters<typeof create>[0];

    interface TemplateOptions {
        template?: string | undefined;
        context?: any;
    }

    type HbsTransporter = Transporter & {
        sendMail(
            mailOptions: Mail.Options & TemplateOptions,
            callback: (err: Error | null, info: SentMessageInfo) => void,
        ): void;
        sendMail(mailOptions: Mail.Options & TemplateOptions): Promise<SentMessageInfo>;
    };

    interface NodemailerExpressHandlebarsOptions {
        viewEngine: Exphbs | ExphbsOptions;
        viewPath: string;
        extName?: string | undefined;
    }

    export { TemplateOptions, HbsTransporter, NodemailerExpressHandlebarsOptions };
}

export = hbs;
