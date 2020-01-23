import * as boxNodeSdk from 'box-node-sdk';

const results: boxNodeSdk.SearchResults = {
  total_count: 1,
  entries: [
    {
      type: 'file',
      id: '12345',
      file_version: {
          type: 'file_version',
          id: '123456',
          sha1: '1234567890'
      },
      sequence_id: '0',
      etag: '0',
      sha1: '12345678',
      name: 'test.dwg',
      description: '',
      size: 123,
      path_collection: {
          total_count: 2,
          entries: [
              {
                  type: 'folder',
                  id: '0',
                  sequence_id: null,
                  etag: null,
                  name: 'All Files'
              },
              {
                  type: 'folder',
                  id: '1',
                  sequence_id: '0',
                  etag: '0',
                  name: 'Folder 01'
              }
          ]
      },
      created_at: '2020-01-03T13:09:01-08:00',
      modified_at: '2020-01-03T13:09:01-08:00',
      trashed_at: null,
      purged_at: null,
      content_created_at: '2020-01-03T13:08:56-08:00',
      content_modified_at: '2019-12-11T13:36:25-08:00',
      created_by: {
          type: 'user',
          id: '1',
          name: 'User1',
          login: 'user1@test.com'
      },
      modified_by: {
          type: 'user',
          id: '1',
          name: 'User1',
          login: 'user1@test.com'
      },
      owned_by: {
          type: 'user',
          id: '1',
          name: 'User1',
          login: 'user1@test.com'
      },
      shared_link: null,
      parent: {
          type: 'folder',
          id: '1',
          sequence_id: '0',
          etag: '0',
          name: 'Folder 01'
      },
      item_status: 'active'
    }
  ]
};
