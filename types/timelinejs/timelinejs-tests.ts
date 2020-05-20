/**
 * Created by Roland on 6/15/2014.
 */

var timelineSource:knightlab.ITimelineModel = {
    timeline: {
        headline: 'Test Headline',
        type: 'default',
        text: 'Test Text',
        asset: {
            media: 'http://www.vertex42.com/ExcelArticles/Images/timeline/Timeline-for-Benjamin-Franklin.gif',
            credit: 'http://www.vertex42.com',
            caption: 'Test Caption'
        },
        date: [
            {
                startDate: '2011,12,09',
                endDate: '2011,12,10',
                headline: 'Test Date Headline',
                text: 'Test test test test'
            },
            {
                startDate: '2012,12,09',
                endDate: '2012,12,10',
                headline: 'Test Date Headline 2',
                text: 'Test2 test2 test2 test2'
            }
        ]
    }
};

var source:knightlab.ITimeLineConfiguration = {
    width: '100%',
    height: '100%',
    type: 'timeline',
    embed_id: 'test',
    source: timelineSource
};

createStoryJS(source);
