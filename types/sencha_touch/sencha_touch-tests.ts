
Ext.application({
    name: 'Sencha',

    launch: function() {
        
        Ext.Viewport.add( <Ext.tab.IPanel>{
            xtype: 'tabpanel',
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
            
                <Ext.IComponent>{
                    title: 'Home',
                    iconCls: 'home',
                    cls: 'home',
                    html: [
                        '<img height=260 src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>Building the Getting Started app.</p>",
                        '<h2>Sencha Touch</h2>'
                    ].join("")
                },

                <Ext.IComponent>{
                    xtype: 'nestedlist',
                    title: 'Blog',
                    iconCls: 'star',
                    cls: 'blog',
                    displayField: 'title',

                    store: <Ext.data.ITreeStore>{
                        type: 'tree',

                        fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                            name: 'leaf',
                            defaultValue: true
                        }],

                        root: {
                            leaf: false
                        },

                        proxy: <Ext.data.proxy.IJsonP>{
                            type: 'jsonp',
                            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                            reader: <Ext.data.reader.IJson>{
                                type: 'json',
                                rootProperty: 'responseData.feed.entries'
                            }
                        }
                    },

                    detailCard: <Ext.IPanel>{
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },

                <Ext.form.IPanel>{
                    xtype: 'formpanel',
                    title: 'Contact Us',
                    iconCls: 'user',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        <Ext.form.IFieldSet>{
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: 'Email address is optional',

                            items: [
                                <Ext.field.IText>{
                                    xtype: 'textfield',
                                    label: 'Name',
                                    name: 'name'
                                },
                                <Ext.field.IEmail>{
                                    xtype: 'emailfield',
                                    label: 'Email',
                                    name: 'email'
                                },
                                <Ext.field.ITextArea>{
                                    xtype: 'textareafield',
                                    label: 'Message',
                                    name: 'message',
                                    height: 90
                                }
                            ]
                        },
                        
                        <Ext.IButton>{
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',

                            handler: function() {

                                var form = this.up('formpanel');

                                form.submit({
                                    success: function() {
                                        Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                            form.reset();
                                        });
                                    }
                                });
                            }
                        }
                    ]
                }
            ]
        });
    }
});
