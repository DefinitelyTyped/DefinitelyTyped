import JSONAPISerializer = require('json-api-serializer');

const data = [
  {
    id: "1",
    title: "JSON API paints my bikeshed!",
    body: "The shortest article. Ever.",
    created: "2015-05-22T14:56:29.000Z",
    updated: "2015-05-22T14:56:28.000Z",
    author: {
      id: "1",
      firstName: "Kaley",
      lastName: "Maggio",
      email: "Kaley-Maggio@example.com",
      age: "80",
      gender: "male"
    },
    tags: ["1", "2"],
    photos: [
      "ed70cf44-9a34-4878-84e6-0c0e4a450cfe",
      "24ba3666-a593-498c-9f5d-55a4ee08c72e",
      "f386492d-df61-4573-b4e3-54f6f5d08acf"
    ],
    comments: [
      {
        _id: "1",
        body: "First !",
        created: "2015-08-14T18:42:16.475Z"
      },
      {
        _id: "2",
        body: "I Like !",
        created: "2015-09-14T18:42:12.475Z"
      },
      {
        _id: "3",
        body: "Awesome",
        created: "2015-09-15T18:42:12.475Z"
      }
    ]
  }
];

const Serializer = new JSONAPISerializer({
  convertCase: "kebab-case",
  unconvertCase: "camelCase"
});

// Register 'article' type
Serializer.register("article", {
  id: "id", // The attributes to use as the reference. Default = 'id'.
  blacklist: ["updated"], // An array of blacklisted attributes. Default = []
  links: {
    // An object or a function that describes links.
    self: (data: any) => {
      // Can be a function or a string value ex: { self: '/articles/1'}
      return "/articles/" + data.id;
    }
  },
  relationships: {
    // An object defining some relationships.
    author: {
      type: "people", // The type of the resource
      links: (data: any) => {
        // An object or a function that describes Relationships links
        return {
          self: `/articles/${data.id}/relationships/author`,
          related: `/articles/${data.id}/author`
        };
      }
    },
    tags: {
      type: "tag"
    },
    photos: {
      type: "photo"
    },
    comments: {
      type: "comment",
      schema: "only-body" // A custom schema
    }
  },
  topLevelMeta: (data: any, extraData: any) => {
    // An object or a function that describes top level meta.
    return {
      count: extraData.count,
      total: data.length
    };
  },
  topLevelLinks: {
    // An object or a function that describes top level links.
    self: "/articles" // Can be a function (with extra data argument) or a string value
  }
});

// Register 'people' type
Serializer.register("people", {
  id: "id",
  links: {
    self: (data: any) => {
      return "/peoples/" + data.id;
    }
  }
});

// Register 'tag' type
Serializer.register("tag", {
  id: "id"
});

// Register 'photo' type
Serializer.register("photo", {
  id: "id"
});

// Register 'comment' type with a custom schema
Serializer.register("comment", "only-body", {
  id: "_id"
});

Serializer.serialize('article', data, {count: 2});
Serializer.serialize('article', data, 'default', {count: 2}, true);
Serializer.serializeAsync('article', data, 'default', {count: 2}, true).then(() => {});

const jsonDocument = {
  data: {
    type: 'article',
    id: '1',
    attributes: {
      title: 'JSON API paints my bikeshed!',
      body: 'The shortest article. Ever.',
      created: '2015-05-22T14:56:29.000Z'
    },
    relationships: {
      author: {
        data: {
          type: 'people',
          id: '1'
        }
      },
      comments: {
        data: [{
          type: 'comment',
          id: '1'
        }, {
          type: 'comment',
          id: '2'
        }]
      },
      photos: {
        meta: {
          counts: 10
        }
      },
      tags: {
        links: {
          related: "/articles/1/tags"
        }
      }
    }
  }
};

Serializer.deserialize('article', jsonDocument);
Serializer.deserializeAsync('article', jsonDocument).then(() => {});

const error = new Error('An error occurred');
Object.assign(error, {
  id: 123,
  links: { about: 'https://example.com/errors/123' },
  status: 500,
  code: 'xyz',
  meta: { time: Date.now() }
});

Serializer.serializeError(error);

class MyCustomError extends Error {
  constructor(
    message = 'Something went wrong',
    public id = 123,
    public links = { about: 'https://example.com/errors/123' },
    public status = 500,
    public code = 'xyz',
    public meta = { time: Date.now() }) {
    super(message);
  }
}

Serializer.serializeError(new MyCustomError());

Serializer.serializeError({
  id: '123',
  links: {
    about: 'https://example.com/errors/123'
  },
  status: '500',
  code: 'xyz',
  title: 'UserNotFound',
  detail: 'Unable to find a user with the provided ID',
  meta: {
    time: Date.now()
  }
});

Serializer.serialize("article", data, "customSchema", { count: 2 });
Serializer.serializeAsync("article", data, "customSchema", { count: 2 });
Serializer.deserialize("article", jsonDocument, "customSchema");
Serializer.deserializeAsync("article", jsonDocument, "customSchema");

Serializer.register('translation', {
    beforeSerialize: (data: any) => {
      // Exclude pk1 and pk2 from data
      const { pk1, pk2, ...attributes } = data;

      // Compute external id
      const id = `${pk1}-${pk2}`;

      // Return data with id
      return {
        ...attributes,
        id
      };
    },
    afterDeserialize: (data: any) => {
      // Exclude id from data
      const { id, ...attributes } = data;

      // Recover PKs
      const [pk1, pk2] = id.split('-');

      // Return data with PKs
      return {
        ...attributes,
        pk1,
        pk2,
      };
    },
});
