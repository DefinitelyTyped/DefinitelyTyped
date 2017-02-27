///<reference path="index.d.ts"/>

// Code examples from http://phonon.quarkdev.com/docs/navigator
phonon.options({
    navigator: {
        defaultPage: 'home',
        hashPrefix: '!',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: '',
        defaultTemplateExtension: 'html',
        useHash: true
    },
    i18n: {
        directory: 'res/lang/',
        localeFallback: 'en',
        localePreferred: 'en-US'
    }
});

phonon.navigator().on({
  page: 'pagename',
  content: 'content.html',
  preventClose: false,
  readyDelay: 1
}, function(activity) {
  activity.onCreate(function() {});
  activity.onReady(function() {});
  activity.onTransitionEnd(function() {});
  activity.onClose(function(self) {});
  activity.onHidden(function() {});
  activity.onHashChanged(function(req1, req2) {});
  activity.onTabChanged(function() {})
});

phonon.navigator().onPage('home').addEvent('create', function () {
});
phonon.navigator().onPage('home').addEvent('close', function (api) {
    api.close();
});

phonon.navigator().start();

phonon.navigator().changePage('page-name', 'optional-parameter');
let page: string = phonon.navigator().currentPage;
page = phonon.navigator().previousPage;


let ev = document.createEvent('');
document.on('pagecreated', function(event) {
  console.log('global state pagecreated: ' + event.detail.page)
});
document.on('pagehash', function(event) {
    console.log('global state pagehash: ' + event.detail.page)
    console.log(event.detail.req[0]);
    console.log(event.detail.req[1]);
    console.log(event.detail.req[2]);
});

// Code examples from http://phonon.quarkdev.com/docs/i18n
let element = document.createElement('<element>');
phonon.i18n().bind();
phonon.i18n().bind(function() {});
phonon.i18n().bind(element);
phonon.i18n().bind(element, function() {});

phonon.i18n().getAll(function(json) {});
phonon.i18n().get('my_key', function(value) {});
phonon.i18n().get(['my_key_1', 'my_key_two'], function(values) {});

phonon.updateLocale('new-language');
phonon.i18n().setPreference("fr");
phonon.i18n().getPreference();
phonon.i18n().getLocale();

// Code examples from http://phonon.quarkdev.com/docs/ajax
var req = phonon.ajax({
    method: 'GET',
    url: 'http://mysite.com/api/',
    crossDomain: true,
    dataType: 'json',
    contentType: 'application/json',
    data: {key1: 'val1', key2: 'val2'},
    timeout: 5000,
    headers: {
        'header-name1': 'value1',
        'header-name2': 'value2'
    },
    success: function(res, xhr) {
        console.log(res);
    },
    error: function(res, flagError, xhr) {
        console.error(flagError);
        console.log(res);
    }
});

req.cancel();

// Code examples from http://phonon.quarkdev.com/docs/device
let os: string = phonon.device.os;
let osVersion: string = phonon.device.osVersion;
let browsername: string = phonon.browser.name;
let browserVersion: string = phonon.browser.version;

// Code examples from http://phonon.quarkdev.com/docs/events
element.on('tap', function() {});
phonon.onReady(function() {});
document.querySelectorAll('.elements').on('tap', function() {});

element.off('tap', function() {});
document.querySelectorAll('.elements').off('tap', function() {});

document.on('pageopened', function(evt) {
    console.log(evt.detail.page + ' is opened');
});

let animationEnd: string = phonon.event.animationEnd;
let transitionEnd: string = phonon.event.transitionEnd;

// Code examples from http://phonon.quarkdev.com/docs/panels
phonon.panel('#my-panel-id').open();
phonon.panel('#my-panel-id').close();

// Code examples from http://phonon.quarkdev.com/docs/side-panels
phonon.sidePanel('#side-panel-id').open();
phonon.sidePanel('#side-panel-id').close();

// Code examples from http://phonon.quarkdev.com/docs/dialogs
let pAlert = phonon.alert("text", "title", true, "textOk");
pAlert.on('confirm', function() {});

var pconfirm = phonon.confirm("text", "title", true, "textOk", "textCancel");
pconfirm.on('confirm', function() {})
pconfirm.on('cancel', function() {});

let pPrompt = phonon.prompt("text", "title", true, "textOk", "textCancel");
pPrompt.on('confirm', function(inputValue) {})
pPrompt.on('cancel', function() {});

phonon.indicator("title", true);

let myDialog = phonon.dialog('#my-dialog');
myDialog.open();
myDialog.close();
myDialog.on('confirm', function() {});

// Code examples from http://phonon.quarkdev.com/docs/notifications
let notif = phonon.notif('Hello', 3000, true, 'CANCEL');
notif.setColor('positive');

notif = phonon.notif("#id");
notif.show();
notif.hide();

// Code examples from http://phonon.quarkdev.com/docs/popovers
let popover = phonon.popover();
popover = phonon.popover('#popover-id');

popover.setList(['a', 'b', 'c']);
popover.setList([
    {
        text: 'a',
        value: 'a'
    },
    {
        text: 'b',
        value: 'tg'
    }
]);
popover.setList(['a', 'b', 'c'], function (item) {
    var text = typeof item === 'string' ? item : item.text;
    var value = typeof item === 'string' ? item : item.value;
    return '<li><a class="padded-list" data-value="' + value + '">' + text + '</a></li>';
});

popover.attachButton('.button-trigger-popover', true);

popover.attachButton(element, true);
popover.openFrom('.button-for-popover');
popover.openFrom(element);

popover.onItemChanged(function (data) {
    console.log('onItemChanged')
    console.error(data)
});
element.on('itemchanged', function(event) {
  console.log(event.detail);
});

popover = phonon.popover()
  .setList(['a', 'b', 'c'])
  .attachButton('.my-button', true)
  .onItemChanged(function (data) {
      console.log(data);
  }).openFrom('.my-button');

// Code examples from http://phonon.quarkdev.com/docs/preloaders
phonon.preloader('#my-preloader').show();
phonon.preloader('#my-preloader').hide();


// Code examples from http://phonon.quarkdev.com/docs/tabs
let tabNumber = 2;
phonon.tab().setCurrentTab('pageName', tabNumber);

phonon.tab().init();
phonon.tab().init('pagename');

// Example from
phonon.options({
    navigator: {
        defaultPage: 'home',
        animatePages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: './tpl'
    },
    i18n: null
});

let app = phonon.navigator();
app.on({page: 'home', preventClose: false, content: null});
app.on({page: 'pagetwo', preventClose: true, content: 'pagetwo.html', readyDelay: 1}, function(activity) {
    let action: string | null = null;
    var onAction = function(evt: any) {
        var target = evt.target;
        action = 'ok';
        if(target.getAttribute('data-order') === 'order') {
            phonon.alert('Thank you for your order!', 'Dear customer');
        } else {
            phonon.alert('Your order has been canceled.', 'Dear customer');
        }
    };
    activity.onCreate(function() {
        let order = document.querySelector('.order');
        if (order != null) {
            order.on('tap', onAction);
        }
        let cancel = document.querySelector('.cancel');
        if (cancel != null) {
            cancel.on('tap', onAction);
        }
    });
    activity.onClose(function(self) {
        if(action !== null) {
            self.close();
        } else {
            phonon.alert('Before leaving this page, you must perform an action.', 'Action required');
        }
    });
    activity.onHidden(function() {
        action = null;
    });
    activity.onHashChanged(function(pizza) {
        let pizzaElt = document.querySelector('.pizza');
        if (pizzaElt != null) {
            pizzaElt.textContent = pizza;
        }
    });
});
app.start();

// Code example from http://phonon.quarkdev.com/App/public/phonon/kitchen-sink/index.html
phonon.options({
	navigator: {
		defaultPage: 'home',
		animatePages: true,
		templateRootDirectory: 'contents/',
		enableBrowserBackButton: true // should be disabled on Cordova
	},
	i18n: {
		directory: 'lang/',
		localeFallback: 'en',
		localePreferred: 'en-US'
	}
});

var app2 = phonon.navigator();
app2.on({page: 'home', content: 'home.html'});
app2.on({page: 'pagedialog', content: 'pagedialog.html'}, function(activity) {
	activity.onCreate(function() {
    let showAlert = document.querySelector('#show-alert');
    if (showAlert) {
      showAlert.on('tap', function() {
        phonon.alert('Example', 'Hello');
      });
    }

    let showConfirm = document.querySelector('#show-confirm');
    if (showConfirm) {
        showConfirm.on('tap', function() {
        let confirm = phonon.confirm('Example', 'Hello');
        confirm.on('confirm', function() {
            phonon.alert('Confirmed!');
        });
        confirm.on('cancel', function(value) {
            phonon.alert('Canceled!');
        });
      });
    }

    let showPrompt = document.querySelector('#show-prompt');
    if (showPrompt) {
        showPrompt.on('tap', function() {
        var prompt = phonon.prompt('Example', 'Hello');
        prompt.on('confirm', function(value) {
            phonon.alert(value, 'Inserted Value');
        });
        prompt.on('cancel', function() {
            phonon.alert('Prompt Canceled');
        });
      });
    }

    let showIndicator = document.querySelector('#show-indicator');
    if (showIndicator) {
        showIndicator.on('tap', function() {
        let indicator = phonon.indicator('Please wait 3 seconds', false);
        window.setTimeout(function() {
          indicator.close();
        }, 3000);
      });
    }
	});
});

app2.on({page: 'pageform', content: 'pageform.html'});
app2.on({page: 'pagefla', content: 'pagefla.html'});
app2.on({page: 'pagegrid', content: 'pagegrid.html'});

app2.on({page: 'pagelist', content: 'pagelist.html'});
app2.on({page: 'pageaccordion', content: 'pageaccordion.html'});

app2.on({page: 'pagenotif', content: 'pagenotif.html', readyDelay: 500}, function(activity) {

	activity.onCreate(function() {
    let showAutoNotif = document.querySelector('#show-auto-notif');
    if (showAutoNotif) {
        showAutoNotif.on('tap', function() {
            phonon.notif('HELLO', 3000, false);
        });
    }

    let showNotif = document.querySelector('#show-notif');
    if (showNotif) {
        showNotif.on('tap', function() {
            phonon.notif('#notif-example').show();
        });
    }

    let showNotifButton = document.querySelector('#show-notif-button');
    if (showNotifButton) {
        showNotifButton.on('tap', function() {
            phonon.notif('HELLO', 3000, true, 'Bye');
        });
    }
	});

	activity.onReady(function() {
		phonon.notif('Welcome!', 3000, true);

	});
});

app2.on({page: 'pagepanel', content: 'pagepanel.html'});
app2.on({page: 'pagepopover', content: 'pagepopover.html'});
app2.on({page: 'pagepreloader', content: 'pagepreloader.html'}, function(activity) {

	activity.onReady(function() {
    let myCircle = document.querySelector('#my-circle');
    if (myCircle) {
        phonon.preloader(myCircle).show();
    }
    let myDeterminate = document.querySelector('#my-determinate');
    if (myDeterminate) {
        phonon.preloader(myDeterminate).show();
    }
	});

	activity.onHidden(function() {
    let myCircle = document.querySelector('#my-circle');
    if (myCircle) {
        phonon.preloader(myCircle).hide();
    }
    let myDeterminate = document.querySelector('#my-determinate');
    if (myDeterminate) {
        phonon.preloader(myDeterminate).hide();
    }
	});
});

app2.on({page: 'pagesidepanel', content: 'pagesidepanel.html'});
app2.on({page: 'pagetable', content: 'pagetable.html'});
app2.on({page: 'pagetabs', content: 'pagetabs.html'}, function(activity) {
    activity.onTabChanged(function(tabNumber) {
        let tab = document.querySelector('.tab-number');
        if (tab) {
            tab.innerHTML = tabNumber + "";
        }
    });
});
app2.start();

// Example from http://phonon.quarkdev.com/App/public/phonon/examples/components/accordion-example/#!home
phonon.options({
    navigator: {
        defaultPage: 'home'
    },
    i18n: null
});
phonon.navigator().start();

// Example from http://phonon.quarkdev.com/App/public/phonon/examples/components/autocomplete-example/#!home
phonon.options({
    navigator: {
        defaultPage: 'home'
    },
    i18n: null
});
phonon.navigator().on({ page: 'home' }, function(activity) {
    activity.onReady(function(){
    		// input where user typed words to query
    		let input = document.querySelector( '#searchJS' );
        let list = '';
        // external autocomplete
        var req = phonon.ajax({
            method: "GET",
    				url: 'https://restcountries.eu/rest/v1/lang/en',
    				dataType: "json",
    				success: function( res, xhr ){
        				list = res.map( function(i: any){
        						return i.name;
        				});
        				// initialize autocomplete
                if (input) {
                    phonon.autocomplete( input, {list:list} );
                }
    		    },
            error: function( res, flagError, xhr ){
                console.error(flagError);
    				    console.log(res);
    		    }
        });
    });
});
phonon.navigator().start();

// Example from http://phonon.quarkdev.com/App/public/phonon/examples/components/dialogs-example/#!home
phonon.options({
    navigator: {
        defaultPage: 'home',
        animatePages: true,
        templateRootDirectory: 'contents/',
        enableBrowserBackButton: true // should be disabled on Cordova
    },
    i18n: null
});

let app3 = phonon.navigator();
app3.on({page: 'home', content: null}, function(activity) {
    activity.onCreate(function() {
        let element = document.querySelector('#show-alert');
        if (element) {
          element.on('tap', function() {
            phonon.alert('Example', 'Hello');
          });
        }

        element = document.querySelector('#show-confirm');
        if (element) {
            element.on('tap', function() {
              var confirm = phonon.confirm('Example', 'Hello');
              confirm.on('confirm', function() {
                phonon.alert('Confirmed!');
              });
              confirm.on('cancel', function(value) {
                phonon.alert('Canceled!');
              });
            });
        }

        element = document.querySelector('#show-prompt');
        if (element) {
          element.on('tap', function() {
            var prompt = phonon.prompt('Example', 'Hello');
            prompt.on('confirm', function(value) {
              phonon.alert(value, 'Inserted Value');
            });
            prompt.on('cancel', function() {
              phonon.alert('Prompt Canceled');
            });
          });
        }

        element = document.querySelector('#show-indicator');
        if (element) {
          element.on('tap', function() {
            var indicator = phonon.indicator('Please wait 3 seconds', false);
            window.setTimeout(function() {
              indicator.close();
            },3000);
          });
        }
    });
});
app3.start();

// Example from http://phonon.quarkdev.com/App/public/phonon/examples/components/i18n-example/#!home
let elPrefLang = document.querySelector('.pref-lang');
let elLang = document.querySelector('.locale-lang');
let elDefault = document.querySelector('.default-lang');
let elSetFr = document.querySelector('.set-fr');
let elSetEnGlobal = document.querySelector('.set-en-global');
let elSetEnUs = document.querySelector('.set-en-us');

let defaultLocale = 'fr';

function setupHTML() {
	let pref = (phonon.i18n().getPreference() ? phonon.i18n().getPreference() : 'not used');
  if (elPrefLang) {
      elPrefLang.textContent = 'Preferred language : ' + pref;
  }
  if (elLang) {
      elLang.textContent = 'Locale language : ' + phonon.i18n().getLocale();
  }
  if (elDefault) {
      elDefault.textContent = 'Default language : ' + defaultLocale;
  }

	// The parameter is optional, if you pass nothing, i18n will bind all the document
	phonon.i18n().bind();
}

var setPreference = function (evt: any) {
	var target = evt.target;
	var lang = target.getAttribute('data-l');
	if(lang) {
		  phonon.updateLocale(lang);
	}
};

if (elSetFr) {
    elSetFr.on('click', setPreference);
}
if (elSetEnGlobal) {
    elSetEnGlobal.on('click', setPreference);
}
if (elSetEnUs) {
    elSetEnUs.on('click', setPreference);
}
phonon.options({
    navigator: {
        defaultPage: 'home',
    },
    i18n: {
		    directory: 'res/lang/',
		    localeFallback: defaultLocale,
		    localePreferred: 'en'
    }
});
setupHTML();
phonon.navigator().start();
