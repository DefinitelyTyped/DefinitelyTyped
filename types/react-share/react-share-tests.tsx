import * as React from 'react';
import {
    FacebookShareButton,
    FacebookShareCount, // $ExpectType FunctionComponent<ShareCountComponentProps> || StatelessComponent<ShareCountComponentProps>
    PinterestShareCount, // $ExpectType FunctionComponent<ShareCountComponentProps> || StatelessComponent<ShareCountComponentProps>
    VKShareCount, // $ExpectType FunctionComponent<ShareCountComponentProps> || StatelessComponent<ShareCountComponentProps>
    OKShareCount, // $ExpectType FunctionComponent<ShareCountComponentProps> || StatelessComponent<ShareCountComponentProps>
    RedditShareCount, // $ExpectType FunctionComponent<ShareCountComponentProps> || StatelessComponent<ShareCountComponentProps>
    TumblrShareCount, // $ExpectType FunctionComponent<ShareCountComponentProps> || StatelessComponent<ShareCountComponentProps>
    FacebookIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    TwitterIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    TelegramIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    WhatsappIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    LinkedinIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    PinterestIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    VKIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    OKIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    RedditIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    TumblrIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    LivejournalIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    MailruIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    ViberIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    WorkplaceIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    LineIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    PocketIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    InstapaperIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
    EmailIcon, // $ExpectType FunctionComponent<IconComponentProps> || StatelessComponent<IconComponentProps>
} from 'react-share';

export function MyComponent(): React.ReactNode {
    const [isSharing, setIsSharing] = React.useState(false);
    return <FacebookShareButton
        url="https://www.facebook.com"
        beforeOnClick={() => {
            setIsSharing(true);
        }}
        style={{margin: 42}} />;
}
