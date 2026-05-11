interface BaseSendsayOptions {
    /**
     * Default: https://api.sendsay.ru
     */
    apiUrl?: string;
}

interface SendsayOptionsApiKey extends BaseSendsayOptions {
    apiKey: string;
}

interface SendsayOptionsAuth extends BaseSendsayOptions {
    auth: {
        login: string;
        sublogin?: string;
        password: string;
    };
}

type SendsayRequestOptions = Record<string, any>;

interface SendsayRequest {
    action: RequestAction;

    [key: string]: unknown;
}

type RequestAction =
    | "ping"
    | "pong"
    | "xxx"
    | "login"
    | "login.agses.challenge"
    | "member.import"
    | "member.exists"
    | "member.update"
    | "member.find"
    | "member.get"
    | "member.set"
    | "member.delete"
    | "member.merge"
    | "member.head.list"
    | "member.head.attach"
    | "member.head.detach"
    | "member.head.replace"
    | "member.where"
    | "member.list"
    | "member.list.count"
    | "member.import.probe"
    | "member.sendconfirm"
    | "batch"
    | "logout"
    | "track.list"
    | "track.get"
    | "email.get"
    | "email.test"
    | "email.cleanerror"
    | "group.list"
    | "group.create"
    | "group.get"
    | "group.set"
    | "group.delete"
    | "group.filter.set"
    | "group.filter.match"
    | "group.snapshot"
    | "group.clean"
    | "anketa.list"
    | "anketa.get"
    | "anketa.delete"
    | "anketa.create"
    | "anketa.set"
    | "anketa.quest.add"
    | "anketa.quest.set"
    | "anketa.quest.delete"
    | "anketa.quest.order"
    | "anketa.quest.response.delete"
    | "anketa.quest.response.order"
    | "issue.send"
    | "issue.send.test"
    | "issue.later.list"
    | "issue.send.multi"
    | "issue.later.get"
    | "issue.later.send"
    | "issue.later.set"
    | "issue.later.delete"
    | "issue.running.list"
    | "issue.running.pause"
    | "issue.running.resume"
    | "issue.running.start"
    | "issue.running.delete"
    | "issue.emailsender.list"
    | "issue.emailsender.get"
    | "issue.emailsender.set"
    | "issue.emailsender.delete"
    | "issue.smssender.list"
    | "issue.smssender.get"
    | "issue.smssender.set"
    | "issue.smssender.delete"
    | "issue.multi.list"
    | "issue.multi.get"
    | "issue.draft.list"
    | "issue.draft.get"
    | "issue.draft.set"
    | "issue.draft.delete"
    | "issue.draft.preview"
    | "issue.class.list"
    | "issue.class.get"
    | "issue.class.delete"
    | "issue.list"
    | "issue.get"
    | "issue.get.attach"
    | "issue.dkim.list"
    | "issue.dkim.get"
    | "issue.dkim.create"
    | "issue.dkim.delete"
    | "issue.dkim.check"
    | "issue.split.list"
    | "issue.split.create"
    | "issue.split.get"
    | "issue.split.set"
    | "issue.split.delete"
    | "issue.split.winner"
    | "issue.split.variant.list"
    | "issue.split.variant.create"
    | "issue.split.variant.set"
    | "issue.split.variant.delete"
    | "stat.uni"
    | "stoplist.get"
    | "stoplist.add"
    | "stoplist.delete"
    | "stoplist.erase"
    | "cron.list"
    | "cron.get"
    | "cron.create"
    | "cron.set"
    | "cron.delete"
    | "cron.runonce"
    | "sequence.list"
    | "sequence.create"
    | "sequence.get"
    | "sequence.set"
    | "sequence.delete"
    | "sequence.steps.get"
    | "sequence.steps.set"
    | "sequence.member.start"
    | "sequence.member.pause"
    | "sequence.member.resume"
    | "sequence.member.stop"
    | "sequence.member.membership"
    | "form.list"
    | "form.get"
    | "form.set"
    | "form.delete"
    | "form.source"
    | "form.transfer"
    | "rfs.list"
    | "rfs.rename"
    | "rfs.file.get"
    | "rfs.file.put"
    | "rfs.file.delete"
    | "rfs.dir.make"
    | "rfs.dir.delete"
    | "campaign.list"
    | "campaign.get"
    | "campaign.set"
    | "campaign.delete"
    | "campaign.member.list"
    | "campaign.member.add"
    | "campaign.member.delete"
    | "datarow.list"
    | "datarow.get"
    | "datarow.create"
    | "datarow.set"
    | "datarow.delete"
    | "datarow.load"
    | "datarow.clean"
    | "lenta.list"
    | "lenta.get"
    | "lenta.set"
    | "lenta.delete"
    | "lenta.source.delete"
    | "lenta.source.refresh"
    | "lenta.send"
    | "infolett.list"
    | "infolett.get"
    | "infolett.set"
    | "infolett.delete"
    | "infolett.preview"
    | "format.list"
    | "format.get"
    | "format.set"
    | "format.delete"
    | "link.list"
    | "link.get"
    | "link.create"
    | "link.set"
    | "link.delete"
    | "link.set.group"
    | "link.group.list"
    | "link.group.get"
    | "link.group.delete"
    | "link.group.set"
    | "webpage.list"
    | "webpage.get"
    | "webpage.set"
    | "webpage.delete"
    | "origin.list"
    | "origin.get"
    | "origin.create"
    | "origin.set"
    | "origin.delete"
    | "authext.list"
    | "authext.get"
    | "authext.create"
    | "authext.set"
    | "authext.delete"
    | "authext.ga.props"
    | "sys.settings.get"
    | "sys.settings.set"
    | "sys.message"
    | "sys.rights.list"
    | "sys.user.list"
    | "sys.user.create"
    | "sys.user.get"
    | "sys.user.set"
    | "sys.user.delete"
    | "sys.password.set"
    | "sys.user.apikey.create"
    | "sys.user.apikey.get"
    | "sys.user.apikey.delete"
    | "sys.user.rights.get"
    | "sys.user.rights.set"
    | "sys.account.create"
    | "sys.log"
    | "sys.storage.list"
    | "sys.storage.get"
    | "sys.storage.set"
    | "sys.storage.delete";

type SendsayResponse = Record<string, any>;

declare class Sendsay {
    constructor(options: SendsayOptionsApiKey | SendsayOptionsAuth);

    login(): Promise<void>;

    setSession(session: string): void;

    setSessionFromCookie(name: string): void;

    setPolicy(policy: string): void;

    setPolicyFromCookie(name: string): void;

    onError(handler: (err: Error) => void): void;

    request(req: SendsayRequest, options?: SendsayRequestOptions): Promise<SendsayResponse>;

    performRequest(req: SendsayRequest, options: SendsayRequestOptions): Promise<SendsayResponse>;

    catchConnectionErrors(err: Error): never;

    checkStatus(res: SendsayResponse): Promise<SendsayResponse>;

    parseResponse(res: SendsayResponse): Promise<SendsayResponse>;

    checkResponseErrors(
        req: SendsayRequest,
        res: SendsayResponse,
        options: SendsayRequestOptions,
    ): SendsayResponse;

    checkRedirect(req: SendsayRequest, res: SendsayResponse, options: SendsayRequestOptions): SendsayResponse;

    callErrorHandler(err: Error): void;

    getRequestBody(req: SendsayResponse): string;

    getRequestData(req: SendsayResponse): string;

    getRequestId(): string;

    getUsername(): string;
}

export = Sendsay;
