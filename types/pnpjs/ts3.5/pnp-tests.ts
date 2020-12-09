import { sp, ClientSidePage, PromotedState, SearchQueryBuilder, EmailProperties } from '@pnp/sp';
import { taxonomy } from '@pnp/sp-taxonomy';
import { TypedHash } from '@pnp/common';

sp.setup({
    spfxContext: undefined,
    sp: {
        headers: {
            Accept: 'application/json;odata=verbose',
        },
        baseUrl: 'https://demo'
    }
});

const item = sp.web.lists.getById('00000000-0000-0000-0000-000000000000').items.getById(1);
const itemAttachments = item.attachmentFiles.get();
item.attachmentFiles.recycleMultiple('test.txt', 'test.pdf');

item.update({ Title: 'New Title' });

const page = ClientSidePage.create(sp.web, 'mypage', 'My Page Title', 'Article', PromotedState.PromoteOnPublish).then(p => {
    p.enableComments();
});

const contentType = sp.web.contentTypes.getById('0x0101');
const feature = sp.web.features.getById('00000000-0000-0000-0000-000000000000');
const field = sp.web.lists.getByTitle('My List').fields.getById('00000000-0000-0000-0000-000000000000');
const blob = sp.web.getFileByServerRelativeUrl('/url/to/document').getBlob();
const buffer = sp.web.getFileByServerRelativeUrl('/url/to/document').getBuffer();
const json = sp.web.getFileByServerRelativeUrl('/url/to/document').getJSON();
const text = sp.web.getFileByServerRelativeUrl('/url/to/document').getText();
const folders = sp.web.lists.getByTitle('My List').rootFolder.folders.get();
const form = sp.web.lists.getByTitle('My List').forms.getById('00000000-0000-0000-0000-000000000000').get();
const hub = sp.hubSites.get();
const menu = sp.web.navigation.quicklaunch.get();
const roleAssignments = sp.web.roleAssignments.get();
const profile = sp.profiles.myProperties.get();
const user = sp.web.siteUsers.getById(1).get();
const search = sp.search(SearchQueryBuilder('test').
    rowLimit(10).
    enableInterleaving.
    enableQueryRules.
    processPersonalFavorites);
const roleDefinitions = sp.web.roleDefinitions.get();
const share = sp.web.shareWith('user@site.com');
const siteFollower = sp.social.getFollowedSitesUri();
const emailProps: EmailProperties = {
    To: ['user@site.com'],
    CC: ['user2@site.com', 'user3@site.com'],
    BCC: ['user4@site.com', 'user5@site.com'],
    Subject: 'This email is about...',
    Body: 'Here is the body. <b>It supports html</b>',
    AdditionalHeaders: {
        'content-type': 'text/html'
    }
};
sp.utility.sendEmail(emailProps);
const term = taxonomy
    .termStores.getById('00000000-0000-0000-0000-000000000000').
    groups.getById('00000000-0000-0000-0000-000000000000').
    termSets.getById('00000000-0000-0000-0000-000000000000').
    terms.getById('00000000-0000-0000-0000-000000000000').get();
const newValues: TypedHash<string> = {
    Title: 'New Title',
    Description: 'New Description',
    Location: 'ScriptLink',
    ScriptSrc: 'https://...'
};
const action = sp.web.userCustomActions.add(newValues);