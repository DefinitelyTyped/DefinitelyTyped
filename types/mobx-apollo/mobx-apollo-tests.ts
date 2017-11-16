import * as React from 'react';
import { computed } from 'mobx';
import { ApolloClient } from 'apollo-client';
import gql from 'graphql-tag';

import query from 'mobx-apollo';

const PostsQuery = gql`
    {
        posts {
            id
            title
        }
    }
`;

interface Post {
    id: string;
    title: string;
}

class PostStore {
    @computed
    private get postsQuery() {
        return query<{ posts: Post[] }>({
            client: new ApolloClient({
                link: {} as any,
                cache: {} as any
            }),
            query: PostsQuery
        });
    }

    @computed
    get posts() {
        return this.postsQuery.data.posts;
    }
}

new PostStore();
