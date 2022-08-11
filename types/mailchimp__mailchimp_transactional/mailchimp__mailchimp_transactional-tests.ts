import {
    AllowListsAddResponse,
    AllowlistsDeleteResponse,
    AllowlistsListResponse,
    ExportResponse,
    InboundDomainResponse,
    InboundRouteResponse,
    InboundSendRawResponse,
    IpsCheckCustomDnsResponse,
    IpsDeletePoolResponse,
    IpsDeleteResponse,
    IpsInfoResponse,
    IpsPoolInfoResponse,
    IpsProvisionResponse,
    MessagesContentResponse,
    MessagesInfoResponse,
    MessagesParseResponse,
    MessagesScheduledMessageResponse,
    MessagesSearchResponse,
    MessagesSendResponse,
    MetadataResponse,
    RejectsAddResponse,
    RejectsDeleteResponse,
    RejectsListResponse,
    SearchTimeSeriesResponse,
    SendersDomainResponse,
    SendersInfoResponse,
    SendersListResponse,
    SendersVerifyDomainResponse,
    SubaccountResponse,
    TagsInfoResponse,
    TagsResponse,
    TemplateResponse,
    TemplatesRenderResponse,
    TimeSeriesResponse,
    UrlsStatsResponse,
    UrlsTimeSeriesResponse,
    UrlsTrackingDomainResponse,
    UsersInfoResponse,
    UsersPing2Response,
    UsersPingResponse,
    UsersSenderResponse,
    WebhookResponse,
    WhitelistsAddResponse,
    WhitelistsDeleteResponse,
    WhitelistsListResponse,
} from '@mailchimp/mailchimp_transactional';
import transactionalApi = require('@mailchimp/mailchimp_transactional');
import { AxiosError } from 'axios';

// $ExpectType ApiClient
const mailchimp = transactionalApi('my_api_key');

mailchimp.setDefaultOutputFormat('json'); // $ExpectType void
mailchimp.setDefaultTimeoutMs(200); // $ExpectType void

checkType<AllowListsAddResponse>(mailchimp.allowlists.add({ email: '' }));
checkType<AllowlistsDeleteResponse>(mailchimp.allowlists.delete({ email: '' }));
checkType<AllowlistsListResponse[]>(mailchimp.allowlists.list());
checkType<AllowlistsListResponse[]>(mailchimp.allowlists.list({ email: '' }));

checkType<ExportResponse>(mailchimp.exports.activity());
checkType<ExportResponse>(mailchimp.exports.activity({ senders: [] }));
checkType<ExportResponse>(mailchimp.exports.allowlist());
checkType<ExportResponse>(mailchimp.exports.allowlist({ notify_email: '' }));
checkType<ExportResponse>(mailchimp.exports.info({ id: '' }));
checkType<ExportResponse[]>(mailchimp.exports.list());
checkType<ExportResponse>(mailchimp.exports.rejects());
checkType<ExportResponse>(mailchimp.exports.rejects({ notify_email: '' }));
checkType<ExportResponse>(mailchimp.exports.whitelist());
checkType<ExportResponse>(mailchimp.exports.whitelist({ notify_email: '' }));

checkType<InboundDomainResponse>(mailchimp.inbound.addDomain({ domain: '' }));
checkType<InboundRouteResponse>(mailchimp.inbound.addRoute({ domain: '' }));
checkType<InboundDomainResponse>(mailchimp.inbound.checkDomain({ domain: '' }));
checkType<InboundDomainResponse>(mailchimp.inbound.deleteDomain({ domain: '' }));
checkType<InboundRouteResponse>(mailchimp.inbound.deleteRoute({ id: '' }));
checkType<InboundDomainResponse[]>(mailchimp.inbound.domains());
checkType<InboundRouteResponse[]>(mailchimp.inbound.routes({ domain: '' }));
checkType<InboundSendRawResponse[]>(mailchimp.inbound.sendRaw({ raw_message: '' }));
checkType<InboundRouteResponse>(mailchimp.inbound.updateRoute({ id: '' }));

checkType<IpsInfoResponse>(mailchimp.ips.cancelWarmup({ ip: '' }));
checkType<IpsCheckCustomDnsResponse>(mailchimp.ips.checkCustomDns({ domain: '', ip: '' }));
checkType<IpsPoolInfoResponse>(mailchimp.ips.createPool({ pool: '' }));
checkType<IpsDeleteResponse>(mailchimp.ips.delete({ ip: '' }));
checkType<IpsDeletePoolResponse>(mailchimp.ips.deletePool({ pool: '' }));
checkType<IpsInfoResponse>(mailchimp.ips.info());
checkType<IpsInfoResponse>(mailchimp.ips.info({ ip: '' }));
checkType<IpsInfoResponse[]>(mailchimp.ips.list());
checkType<IpsPoolInfoResponse[]>(mailchimp.ips.listPools());
checkType<IpsPoolInfoResponse>(mailchimp.ips.poolInfo({ pool: '' }));
checkType<IpsProvisionResponse>(mailchimp.ips.provision({ pool: '' }));
checkType<IpsInfoResponse>(mailchimp.ips.setCustomDns({ domain: '', ip: '' }));
checkType<IpsInfoResponse>(mailchimp.ips.setPool({ ip: '', pool: '' }));
checkType<IpsInfoResponse>(mailchimp.ips.startWarmup({ ip: '' }));

checkType<MessagesScheduledMessageResponse[]>(mailchimp.messages.cancelScheduled({ id: '' }));
checkType<MessagesContentResponse>(mailchimp.messages.content({ id: '' }));
checkType<MessagesInfoResponse>(mailchimp.messages.info({ id: '' }));
checkType<MessagesScheduledMessageResponse[]>(mailchimp.messages.listScheduled());
checkType<MessagesScheduledMessageResponse[]>(mailchimp.messages.listScheduled({ to: '' }));
checkType<MessagesParseResponse>(mailchimp.messages.parse({ raw_message: '' }));
checkType<MessagesScheduledMessageResponse[]>(mailchimp.messages.reschedule({ id: '', send_at: '' }));
checkType<MessagesSearchResponse[]>(mailchimp.messages.search());
checkType<MessagesSearchResponse[]>(mailchimp.messages.search({ limit: 1 }));
checkType<SearchTimeSeriesResponse[]>(mailchimp.messages.searchTimeSeries());
checkType<SearchTimeSeriesResponse[]>(mailchimp.messages.searchTimeSeries({ query: '' }));
checkType<MessagesSendResponse[]>(
    mailchimp.messages.send({
        message: {
            to: [
                { name: 'John Doe', email: 'johndoe@example.com', type: 'to' },
                { email: 'johndoe@example.com', type: 'to' },
            ],
        },
    }),
);
checkType<MessagesSendResponse[]>(
    mailchimp.messages.sendTemplate({
        template_name: 'my-template-slug',
        template_content: [],
        message: {
            to: [{ name: 'John Doe', email: 'johndoe@example.com', type: 'to' }],
        },
    }),
);
checkType<{}>(mailchimp.messages.sendRaw({ raw_message: '' }));

checkType<MetadataResponse>(mailchimp.metadata.add({ name: '' }));
checkType<MetadataResponse>(mailchimp.metadata.delete({ name: '' }));
checkType<MetadataResponse[]>(mailchimp.metadata.list());
checkType<MetadataResponse>(mailchimp.metadata.update({ name: '', view_template: '' }));

checkType<RejectsAddResponse>(mailchimp.rejects.add({ email: '' }));
checkType<RejectsDeleteResponse>(mailchimp.rejects.delete({ email: '' }));
checkType<RejectsListResponse[]>(mailchimp.rejects.list());
checkType<RejectsListResponse[]>(mailchimp.rejects.list({ email: '' }));

checkType<SendersDomainResponse>(mailchimp.senders.addDomain({ domain: '' }));
checkType<SendersDomainResponse>(mailchimp.senders.checkDomain({ domain: '' }));
checkType<SendersDomainResponse[]>(mailchimp.senders.domains());
checkType<SendersInfoResponse>(mailchimp.senders.info({ address: '' }));
checkType<SendersListResponse[]>(mailchimp.senders.list());
checkType<TimeSeriesResponse[]>(mailchimp.senders.timeSeries({ address: '' }));
checkType<SendersVerifyDomainResponse>(mailchimp.senders.verifyDomain({ domain: '', mailbox: '' }));

checkType<SubaccountResponse>(mailchimp.subaccounts.add({ id: '' }));
checkType<SubaccountResponse>(mailchimp.subaccounts.delete({ id: '' }));
checkType<SubaccountResponse>(mailchimp.subaccounts.info({ id: '' }));
checkType<SubaccountResponse[]>(mailchimp.subaccounts.list());
checkType<SubaccountResponse[]>(mailchimp.subaccounts.list({ q: '' }));
checkType<SubaccountResponse>(mailchimp.subaccounts.pause({ id: '' }));
checkType<SubaccountResponse>(mailchimp.subaccounts.resume({ id: '' }));
checkType<SubaccountResponse>(mailchimp.subaccounts.update({ id: '' }));

checkType<SearchTimeSeriesResponse[]>(mailchimp.tags.allTimeSeries());
checkType<TagsResponse>(mailchimp.tags.delete({ tag: '' }));
checkType<TagsInfoResponse>(mailchimp.tags.info({ tag: '' }));
checkType<TagsResponse[]>(mailchimp.tags.list());
checkType<SearchTimeSeriesResponse[]>(mailchimp.tags.timeSeries({ tag: '' }));

checkType<TemplateResponse>(mailchimp.templates.add({ name: '' }));
checkType<TemplateResponse>(mailchimp.templates.delete({ name: '' }));
checkType<TemplateResponse>(mailchimp.templates.info({ name: '' }));
checkType<TemplateResponse[]>(mailchimp.templates.list());
checkType<TemplateResponse[]>(mailchimp.templates.list({ label: '' }));
checkType<TemplateResponse>(mailchimp.templates.publish({ name: '' }));
checkType<TemplatesRenderResponse>(
    mailchimp.templates.render({ template_content: [{ name: '', content: '' }], template_name: '' }),
);
checkType<TimeSeriesResponse[]>(mailchimp.templates.timeSeries({ name: '' }));
checkType<TemplateResponse>(mailchimp.templates.update({ name: '' }));

checkType<UrlsTrackingDomainResponse>(mailchimp.urls.addTrackingDomain({ domain: '' }));
checkType<UrlsTrackingDomainResponse>(mailchimp.urls.checkTrackingDomain({ domain: '' }));
checkType<UrlsStatsResponse[]>(mailchimp.urls.list());
checkType<UrlsStatsResponse[]>(mailchimp.urls.search({ q: '' }));
checkType<UrlsTimeSeriesResponse[]>(mailchimp.urls.timeSeries({ url: '' }));
checkType<UrlsTrackingDomainResponse[]>(mailchimp.urls.trackingDomains());

checkType<UsersInfoResponse>(mailchimp.users.info());
checkType<UsersPingResponse>(mailchimp.users.ping());
checkType<UsersPing2Response>(mailchimp.users.ping2());
checkType<UsersSenderResponse[]>(mailchimp.users.senders());

checkType<WebhookResponse>(mailchimp.webhooks.add({ url: '' }));
checkType<WebhookResponse>(mailchimp.webhooks.delete({ id: 1 }));
checkType<WebhookResponse>(mailchimp.webhooks.info({ id: 1 }));
checkType<WebhookResponse[]>(mailchimp.webhooks.list());
checkType<WebhookResponse>(mailchimp.webhooks.update({ id: 1, url: '' }));

checkType<WhitelistsAddResponse>(mailchimp.whitelists.add({ email: '' }));
checkType<WhitelistsDeleteResponse>(mailchimp.whitelists.delete({ email: '' }));
checkType<WhitelistsListResponse[]>(mailchimp.whitelists.list());
checkType<WhitelistsListResponse[]>(mailchimp.whitelists.list({ email: '' }));

// This crutch is needed because TS@4.7 doesn't output union types in a predictable order,
// so $ExpectType sometimes produces Promise<Foo | AxiosError> and sometimes Promise<AxiosError | Foo>
// tslint:disable-next-line: no-unnecessary-generics
function checkType<T>(arg: Promise<T | AxiosError>): void {}
