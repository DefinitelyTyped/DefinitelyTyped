function test_public_methods(): void {

    let ajaxChain: ajaxChain.JQueryAjaxChain,
        configurationObj1: ajaxChain.AjaxChainConfiguration,
        configurationObj2: ajaxChain.AjaxChainConfiguration;

    configurationObj1 = {

        ajaxSettings: {

            type: 'GET',
            dataType: 'xml',
            url: '/endpoint1'

        }

    };

    configurationObj2 = {

        ajaxSettings: {

            type: 'GET',
            dataType: 'xml',
            url: '/endpoint2'

        }

    };

    ajaxChain.enqueue(configurationObj1);
    ajaxChain.clearQueue();
    ajaxChain.enqueue([configurationObj1, configurationObj2]);
    ajaxChain.dequeue().then(doneResult => { console.log(doneResult); },
                             failResult => { console.log(failResult); },
                             progressResult => { console.log(progressResult); });

}

function test_optional_parameters(): void {

    let itemsCollectionCache: XMLDocument = null,
        itemDetailCacheMap: WeakMap<String, XMLDocument> = new WeakMap<String, XMLDocument>(),
        ajaxChain: ajaxChain.JQueryAjaxChain,
        configurationObj1: ajaxChain.AjaxChainConfiguration,
        configurationObj2: ajaxChain.AjaxChainConfiguration,
        configurationObj3: ajaxChain.AjaxChainConfiguration,
        configurationObj4: ajaxChain.AjaxChainConfiguration;

    ajaxChain = new $.AjaxChain();

    configurationObj1 = {

        ajaxSettings: {

            type: 'GET',
            dataType: 'xml',
            url: '/items',
            success: function (xmlResponse): void {

                itemsCollectionCache = xmlResponse;

            },

        },

        hasHaltingCapabilities: function (xmlResponse): Boolean {

            let $tempXmlResponse: JQuery;

            $tempXmlResponse = $(xmlResponse);

            if (!$tempXmlResponse.find('item').length) {

                return true;

            }

            return false;

        },

        hasCache: function (xmlResponse): XMLDocument {

            if (itemsCollectionCache) {

                return itemsCollectionCache;

            };

            return null;
        },

        transform: function (xmlResponse): Object {

            let $tempXmlResponse: JQuery,
                $tempItems: JQuery,
                nextCallDataObj: Object;

            $tempXmlResponse = $(xmlResponse);
            $tempItems = $tempXmlResponse.find('item');

            if ($tempItems.length) {

                nextCallDataObj = {

                    id: $tempItems.first()
                                  .attr('id')

                };

                return nextCallDataObj;

            }

            return null;

        }

    };

    configurationObj2 = {

        ajaxSettings: {

            type: 'GET',
            dataType: 'xml',
            url: '/item',
            success: function (xmlResponse): void {

                let $tempXmlResponse: JQuery,
                    itemId: String;

                $tempXmlResponse = $(xmlResponse);

                itemId = $tempXmlResponse.find('id')
                                         .text();

                if (itemId && !itemDetailCacheMap.has(itemId)) {

                    itemDetailCacheMap.set(itemId, xmlResponse);

                }

            }

        },

        transform: function (xmlResponse): String {

            let $tempXmlResponse: JQuery,
                tempTrackingCode: String,
                nextCallDataStr: String = "";

            $tempXmlResponse = $(xmlResponse);

            tempTrackingCode = $tempXmlResponse.find('code')
                                               .text();

            if (tempTrackingCode) {

                nextCallDataStr = "tracking=" + tempTrackingCode;

            }

            return nextCallDataStr;

        },

        hasCache: function (xmlResponse): XMLDocument {

            let $tempXmlResponse: JQuery,
                itemId: String;

            $tempXmlResponse = $(xmlResponse);

            itemId = $tempXmlResponse.find('id')
                                     .text();

            if (itemDetailCacheMap.has(itemId)) {

                return itemDetailCacheMap.get(itemId);

            }

            return null;

        },

        hasErrors: function (xmlResponse): String {

            var $tempXmlResponse: JQuery,
                categoryFilter: string = '1';

            $tempXmlResponse = $(xmlResponse);

            if ($tempXmlResponse.find('categoryId')
                                .text() === categoryFilter) {

                return '[Exception] forbidden category id: ' + categoryFilter;

            }

            return '';

        },

        appendToUrl: function (xmlResponse): String {

            let $tempXmlResponse: JQuery,
                categoryId: string = '';

            $tempXmlResponse = $(xmlResponse);
            categoryId = $tempXmlResponse.find('categoryId')
                                         .text();

            return (categoryId) ? ('/' + categoryId) : '';

        }

    };

    configurationObj3 = {

        ajaxSettings: {

            type: 'GET',
            dataType: 'xml',
            url: '/categories'

        },

        isSkippable: function (xmlResponse): Boolean {

            return true;

        },

        transform: function (xmlResponse): Object[] {

            let $tempXmlResponse: JQuery,
                nextCallDataArr: Object[] = [];

            $tempXmlResponse = $(xmlResponse);

            $tempXmlResponse.find('subCategory').each(function (index, node) {

                let $tempIdNode = $(node).find('id');

                nextCallDataArr.push({

                    name: $tempIdNode.attr('name'),
                    value: $tempIdNode.text()

                });

            });

            return nextCallDataArr;

        }

    };

    configurationObj4 = {

        ajaxSettings: {

            type: 'GET',
            dataType: 'xml',
            url: '/subcategories'

        }

    };

    ajaxChain.enqueue([configurationObj1, configurationObj2, configurationObj3, configurationObj4])
             .dequeue()
             .then(doneResult => { console.log(doneResult); },
                   failResult => { console.log(failResult); },
                   progressResult => { console.log(progressResult); });

}
