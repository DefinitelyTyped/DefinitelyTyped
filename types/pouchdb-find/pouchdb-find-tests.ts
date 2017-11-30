function testFind() {
    const db = new PouchDB<{ foo: number }>();

    db.find({
        selector: {},
        fields: ['fieldName'],
        sort: ['fieldName'],
        limit: 1,
        skip: 1,
        use_index: 'ddocName'
    });

    db.find({
        selector: {},
        use_index: ['ddocName', 'name']
    });

    db.find({
        selector: {},
        sort: [{fieldName: 'asc'}]
    });

    // test combinations of selectors
    db.find({
        selector: {
            // test id
            _id: {
                $gt: null
            },

            // conditions
            foo: {
                $lt: null,
                $gt: null,
                $lte: null,
                $gte: null,
                $eq: null,
                $ne: null,
                $elemMatch: null,

                $exists: true,
                $type: "null",
                $in: ["string", null, 1, true, {}, []],
                $nin: ["string", null, 1, true, {}, []],
                $size: 5,
                $mod: [1, 2],
                $regex: "pattern",
                $all: ["string", null, 1, true, {}, []]
            },

            // value
            bar: 'any value',

            // combinatons
            $and: [],
            $or: [],
            $nor: [],
            $not: [],

            // sub combinations
            sub: {
                $and: [
                    {
                        foo: 'bar',
                        bar: {
                            $gt: null
                        }
                    }
                ]
            }
        }
    });
}
