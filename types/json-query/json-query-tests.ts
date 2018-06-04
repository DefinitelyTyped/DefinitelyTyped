import jsonQuery = require('json-query');

// API
let data: jsonQuery.Context = {
    people: [
        {name: 'Matt', country: 'NZ'},
        {name: 'Pete', country: 'AU'},
        {name: 'Mikey', country: 'NZ'}
    ]
};
jsonQuery('people[country=NZ].name', {data}); // => {value: 'Matt', parents: [...], key: 0} ... etc

// Deep Queries
data = {
    grouped_people: {
        friends: [
            {name: 'Steve', country: 'NZ'},
            {name: 'Jane', country: 'US'},
            {name: 'Mike', country: 'AU'},
            {name: 'Mary', country: 'NZ'}
        ],
        enemies: [
            {name: 'Evil Steve', country: 'AU'},
            {name: 'Betty', country: 'NZ'}
        ]
    }
};
const result: any = jsonQuery('grouped_people[**][*country=NZ]', {data}).value;

// Inner Queries
data = {
    page: {
        id: 'page_1',
        title: 'Test'
    },
    comments_lookup: {
        page_1: [
            {id: 'comment_1', parent_id: 'page_1', content: "I am a comment"}
        ]
    }
};
jsonQuery('comments_lookup[{page.id}]', {data});

// Local functions (helpers)
const locals: jsonQuery.Locals = {
    greetingName: (input: jsonQuery.Context) => {
        if (input.known_as) {
            return input.known_as;
        } else {
            return input.name;
        }
    },
    and: (inputA: jsonQuery.Context, inputB: boolean) => {
        return inputA && inputB;
    },
    text: (input: jsonQuery.Context, text: string) => {
        return text;
    },
    then: (input: jsonQuery.Context, thenValue: string, elseValue: string) => {
        if (input) {
            return thenValue;
        } else {
            return elseValue;
        }
    }
};
data = {
    is_fullscreen: true,
    is_playing: false,
    user: {
        name: "Matthew McKegg",
        known_as: "Matt"
    }
};
jsonQuery('user:greetingName', {data, locals}).value; // => "Matt"
jsonQuery(['is_fullscreen:and({is_playing}):then(?, ?)', "Playing big!", "Not so much"], {data, locals}).value; // => "Not so much"
jsonQuery(':text(This displays text cos we made it so)', {locals}).value; // => "This displays text cos we made it so"
jsonQuery('people:select(name, country)', {
    data,
    locals: {
        select: (input: jsonQuery.Context, ...keys: string[]) => {
            if (Array.isArray(input)) {
                return input.map((item: any) => {
                    return Object.keys(item).reduce((result: {[p: string]: any}, key: string) => {
                        if (~keys.indexOf(key)) {
                            result[key] = item[key];
                        }
                        return result;
                    }, {});
                });
            }
        }
    }
});
jsonQuery('people[*:recentlyUpdated]', {
    data,
    locals: {
        recentlyUpdated: (item: {updatedAt: number}) => {
            return item.updatedAt < Date.now() - (30 * 24 * 60 * 60 * 1000);
        }
    }
});

// Context
data = {
    styles: {
        bold: 'font-weight:strong',
        red: 'color: red'
    },
    paragraphs: [
        {content: "I am a red paragraph", style: 'red'},
        {content: "I am a bold paragraph", style: 'bold'},
    ],
};
let pageHtml = '';
data.paragraphs.forEach((paragraph: {content: string, style: string}) => {
    const style = jsonQuery('styles[{.style}]', {data, source: paragraph}).value;
    const content = jsonQuery('.content', {data, source: paragraph}).value; // pretty pointless :)
    pageHtml += `<p style='${style}'>${content}</p>`;
});

// Query Params
jsonQuery(['people[country=?]', 'NZ'], {data});
