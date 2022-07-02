import * as React from 'react';
import { Text } from 'react-native';
import PullToRefreshView from 'react-native-pull-to-refresh';

export const MyAwesomeRefreshableComponent: React.FC = () => {
    const [tags, setTags] = React.useState<string[]>([]);

    const fetchTags = () =>
        fetch('/my/endpoint/url')
            .then(res => res.json())
            .then(setTags);

    return (
        <PullToRefreshView onRefresh={fetchTags}>
            {tags.map(tag => (
                <Text>{tag}</Text>
            ))}
        </PullToRefreshView>
    );
};
