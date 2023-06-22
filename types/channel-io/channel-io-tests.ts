// https://developers.channel.io/docs/web-channel-io#boot
ChannelIO(
    'boot',
    {
        pluginKey: 'YOUR_PLUGIN_KEY',
    },
    function onBoot(error, user) {
        if (error) {
            console.error(error);
        } else {
            console.log('boot success', user);
        }
    },
);

// https://developers.channel.io/docs/web-channel-io#shutdown
ChannelIO('shutdown');

// https://developers.channel.io/docs/web-channel-io#showmessenger
ChannelIO('showMessenger');

// https://developers.channel.io/docs/web-channel-io#show
ChannelIO('show');

// https://developers.channel.io/docs/web-channel-io#hidemessenger
ChannelIO('hideMessenger');

// https://developers.channel.io/docs/web-channel-io#hide
ChannelIO('hide');

// https://developers.channel.io/docs/web-channel-io#lounge
ChannelIO('lounge');

// https://developers.channel.io/docs/web-channel-io#openchat
ChannelIO('openChat', 132);
ChannelIO('openChat', '132');
ChannelIO('openChat', undefined, 'something');

// https://developers.channel.io/docs/web-channel-io#track
ChannelIO('track', 'OrderRequest');
ChannelIO('track', 'Order', {
    price: 100,
    currency: 'USD',
});

// https://developers.channel.io/docs/web-channel-io#onboot
ChannelIO('onBoot', user => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onshowmessenger
ChannelIO('onShowMessenger', () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onshow
ChannelIO('onShow', () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onhidemessenger
ChannelIO('onHideMessenger', () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onhide
ChannelIO('onHide', () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onbadgechanged
ChannelIO('onBadgeChanged', unreadCount => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onchangebadge
ChannelIO('onChangeBadge', unreadCount => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onchatcreated
ChannelIO('onChatCreated', () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onfollowupchanged
ChannelIO('onFollowUpChanged', profile => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#oncreatechat
ChannelIO('onCreateChat', () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onprofilechanged
ChannelIO('onProfileChanged', profile => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onchangeprofile
ChannelIO('onChangeProfile', profile => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onurlclicked
ChannelIO('onUrlClicked', url => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onclickredirect
ChannelIO('onClickRedirect', url => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#clearcallbacks
ChannelIO('clearCallbacks');

// https://developers.channel.io/docs/web-channel-io#updateuser
ChannelIO(
    'updateUser',
    {
        language: 'ko',
        tags: ['a', 'b'], // replace
        profile: {
            email: 'email@email.com',
            mobileNumber: '+18004424000',
            name: 'name',
        },
        profileOnce: {
            email: 'email@email.com',
            mobileNumber: '+18004424000',
            name: 'name',
        },
        unsubscribeEmail: true,
        unsubscribeTexting: true,
    },
    function onUpdateUser(error, user) {
        if (error) {
            console.error(error);
        } else {
            console.log('updateUser success', user);
        }
    },
);

// https://developers.channel.io/docs/web-channel-io#addtags
ChannelIO('addTags', ['tag1', 'tag2'], function onAddTags(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log('addTags success', user);
    }
});

// https://developers.channel.io/docs/web-channel-io#removetags
ChannelIO('removeTags', ['tag1', 'tag2'], function onRemoveTags(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log('removeTags success', user);
    }
});

// https://developers.channel.io/docs/web-channel-io#setpage
ChannelIO('setPage', 'page');

// https://developers.channel.io/docs/web-channel-io#resetpage
ChannelIO('resetPage');

// https://developers.channel.io/docs/web-channel-io#resetpage
ChannelIO('showChannelButton');

// https://developers.channel.io/docs/web-channel-io#showchannelbutton
ChannelIO('showChannelButton');

// https://developers.channel.io/docs/web-channel-io#hidechannelbutton
ChannelIO('hideChannelButton');

const user: ChannelIO.User = {
    id: 'USER_ID',
    memberId: 'MEMBER_ID',
    name: 'USER_NAME',
    avatarUrl: 'AVATAR_URL',
    alert: 0,
    profile: {
        name: 'USER_NAME',
        mobileNumber: 'MOBILE_NUMBER',
        CUSTOM_VALUE_1: 'VALUE_1',
        CUSTOM_VALUE_2: 'VALUE_2',
    },
    unsubscribeEmail: true,
    unsubscribeTexting: true,
    tags: ['TAG_1', 'TAG_2'],
    language: 'LANGUAGE',
};
