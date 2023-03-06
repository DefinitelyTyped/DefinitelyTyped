import * as React from 'react';
import { withTracker, useTracker, useSubscribe, useFind } from 'meteor/react-meteor-data';

interface DemoComponentContainerProps {
    status: string;
}

interface DemoComponentData {
    data: string;
    result: string;
}

const DemoComponent: React.FC<DemoComponentContainerProps & DemoComponentData> = props => <div>{props.data}</div>;

const DemoComponentContainer: React.ComponentClass<DemoComponentContainerProps> = withTracker<
    DemoComponentData,
    DemoComponentContainerProps
>(() => ({
    data: 'some data',
    result: 'success',
}))(DemoComponent);

const HooksDemoComponentContainer = (props: DemoComponentContainerProps) => {
    const trackedProps = useTracker(() => ({
        data: 'some data',
        result: 'success',
    }));
    return <DemoComponent {...props} {...trackedProps} />;
};

const RootComponent = () => (
    <>
        <DemoComponentContainer status="ok" />
        <HooksDemoComponentContainer status="ok" />
    </>
);

interface Post {
    _id: string;
    title: string;
    groupId: string;
};
const Posts = new Mongo.Collection<Post>('posts');

const UseSubscribeComponent = ({ groupId, skip }: { groupId: string, skip: boolean }) => {
    // Note: isLoading is a function!
    const isLoading = useSubscribe('posts', groupId);
    const posts = useFind(() => Posts.find({ groupId }), [groupId]);

    // $ExpectType Post[]
    posts;

    const optionalPosts = useFind(() => {
        if (skip) {
            return null;
        }
        return Posts.find({ groupId });
    }, [skip]);

    // $ExpectType Post[] | null
    optionalPosts;

    if (isLoading()) {
        return <div>Loading...</div>
    } else {
        return <ul>
            {posts.map(post => <li key={post._id}>{post.title}</li>)}
        </ul>
    }
}
