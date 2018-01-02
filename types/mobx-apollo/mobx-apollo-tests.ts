import { ApolloClient } from 'apollo-client';
import query from 'mobx-apollo';

const PostsQuery = `
    {
        posts {
            id
            title
        }
    }
` as any;

interface Post {
    id: string;
    title: string;
}

class PostStore {
    private get postsQuery() {
        return query<{ posts: Post[] }>({
            client: new ApolloClient({
                link: {} as any,
                cache: {} as any
            }),
            query: PostsQuery
        });
    }

    get posts() {
        return this.postsQuery.data && this.postsQuery.data.posts;
    }
}

new PostStore();
