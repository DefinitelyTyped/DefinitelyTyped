import * as React from 'react';
import { TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TweeterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton } from 'react-twitter-embed';

const noOp = (): void => {};
const options = {
    foo: 'bar',
    baz: 0,
};
const placeholder = <span>Hello World!</span>;
const url = 'https://github.com/DefinitelyTyped/DefinitelyTyped';

export const ReactTwitterEmbedTest: React.FC = (): React.ReactElement => <div>
    <TwitterShareButton url={url} onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterFollowButton screenName="My name" onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterHashtagButton tag="some tag" onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterMentionButton screenName="My other name" onLoad={noOp} options={options} placeholder={placeholder} />
    <TweeterTweetEmbed tweetId="31415926" onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterMomentShare momentId="2718281828" onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterDMButton id={31415926} onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterVideoEmbed id="my-video-id" onLoad={noOp} placeholder={placeholder} />
    <TwitterOnAirButton username="My name" onLoad={noOp} options={options} placeholder={placeholder} />
    <TwitterTimelineEmbed
        autoHeight={true}
        borderColor="#ffffff"
        lang="en"
        linkColor="#000000"
        noBorders={false}
        noFooter={true}
        noHeader={true}
        noScrollbar={false}
        onLoad={noOp}
        options={options}
        placeholder={placeholder}
        sourceType="url"
        theme="dark"
        transparent={true}
        url={url}
    />
    <TwitterTimelineEmbed
        ownerScreenName="Chuck Norris"
        slug="all-that-remains-of-a-bullet"
        sourceType="list"
    />
    <TwitterTimelineEmbed
        screenName="Chuck Norris"
        sourceType="profile"
    />
    <TwitterTimelineEmbed
        screenName="Chuck Norris"
        sourceType="likes"
    />
    <TwitterTimelineEmbed
        sourceType="likes"
        userId={19719}
    />
    <TwitterTimelineEmbed
        sourceType="profile"
        userId={19719}
    />
    <TwitterTimelineEmbed
        sourceType="collection"
        id={19719}
    />
    <TwitterTimelineEmbed
        sourceType="list"
        id={19719}
    />
    <TwitterTimelineEmbed
        sourceType="collection"
        id="007"
    />
    <TwitterTimelineEmbed
        sourceType="list"
        id="007"
    />
    <TwitterTimelineEmbed
        sourceType="widget"
        widgetId="007"
    />
</div>;
