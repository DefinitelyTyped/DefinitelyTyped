import { sp } from '@pnp/sp';
import { ITypedHash } from '@pnp/common';
import { CreateClientsidePage, PromotedState } from '@pnp/sp/clientside-pages';
import { IItem } from '@pnp/sp/items/types';
import { IAttachments } from '@pnp/sp/attachments';
import { SearchQueryBuilder } from '@pnp/sp/search';
import { IEmailProperties } from '@pnp/sp/sputilities';

import "@pnp/sp/presets/all";
import '@pnp/sp/comments/clientside-page';

import { graph } from '@pnp/graph/';

import '@pnp/graph/presets/all';
import '@pnp/graph/attachments';
import '@pnp/graph/calendars';

sp.setup({
    spfxContext: undefined,
    sp: {
        headers: {
            Accept: 'application/json;odata=verbose',
        },
        baseUrl: 'https://demo'
    }
});

const item: IItem = sp.web.lists.getById('00000000-0000-0000-0000-000000000000').items.getById(1);
const itemAttachments: IAttachments = item.attachmentFiles;
item.attachmentFiles.recycleMultiple('test.txt', 'test.pdf');

item.update({ Title: 'New Title' });

const page = CreateClientsidePage(sp.web, 'mypage', 'My Page Title', 'Article', PromotedState.PromoteOnPublish).then(p => {
    p.addComment('my comment');
});

const defaultValues = sp.web.lists.getByTitle('My List').getDefaultColumnValues();
const contentType = sp.web.contentTypes.getById('0x0101');
const feature = sp.web.features.getById('00000000-0000-0000-0000-000000000000');
const field = sp.web.lists.getByTitle('My List').fields.getById('00000000-0000-0000-0000-000000000000');
const blob = sp.web.getFileByServerRelativeUrl('/url/to/document').getBlob();
const buffer = sp.web.getFileByServerRelativeUrl('/url/to/document').getBuffer();
const json = sp.web.getFileByServerRelativeUrl('/url/to/document').getJSON();
const text = sp.web.getFileByServerRelativeUrl('/url/to/document').getText();
const folders = sp.web.lists.getByTitle('My List').rootFolder.folders();
const form = sp.web.lists.getByTitle('My List').forms.getById('00000000-0000-0000-0000-000000000000').get();
const hub = sp.hubSites();
const menu = sp.web.navigation.quicklaunch.get();
const roleAssignments = sp.web.roleAssignments.get();
const profile = sp.profiles.myProperties.get();
const user = sp.web.siteUsers.getById(1).get();
const search = sp.search(SearchQueryBuilder('test').
    rowLimit(10).
    enableInterleaving.
    enableQueryRules.
    processPersonalFavorites);
const roleDefinitions = sp.web.roleDefinitions();
const share = sp.web.shareWith('user@site.com');
const siteFollower = sp.social.getFollowedSitesUri();
const emailProps: IEmailProperties = {
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
const term = sp.termStore.
    termGroups.getById('00000000-0000-0000-0000-000000000000').
    termSets.getById('00000000-0000-0000-0000-000000000000').
    terms.getById('00000000-0000-0000-0000-000000000000').get();
const newValues: ITypedHash<string> = {
    Title: 'New Title',
    Description: 'New Description',
    Location: 'ScriptLink',
    ScriptSrc: 'https://...'
};
const action = sp.web.userCustomActions.add(newValues);
const driveItem = graph.me.drive.getItemById('00000000-0000-0000-0000-000000000000').get();