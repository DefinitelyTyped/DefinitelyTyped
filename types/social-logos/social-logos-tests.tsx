/* eslint-disable no-alert */
/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import SocialLogo from 'social-logos';

export default class SocialLogos extends React.PureComponent {
    makeHandleClick = (icon: string) => () => {
        alert(`click ${icon}`);
    }

    render() {
        return (
            <div>
                <SocialLogo icon="amazon" size={48} onClick={this.makeHandleClick('amazon')} />
                <SocialLogo icon="behance" size={48} onClick={this.makeHandleClick('behance')} />
                <SocialLogo icon="blogger-alt" size={48} onClick={this.makeHandleClick('blogger-alt')} />
                <SocialLogo icon="blogger" size={48} onClick={this.makeHandleClick('blogger')} />
                <SocialLogo icon="codepen" size={48} onClick={this.makeHandleClick('codepen')} />
                <SocialLogo icon="dribbble" size={48} onClick={this.makeHandleClick('dribbble')} />
                <SocialLogo icon="dropbox" size={48} onClick={this.makeHandleClick('dropbox')} />
                <SocialLogo icon="eventbrite" size={48} onClick={this.makeHandleClick('eventbrite')} />
                <SocialLogo icon="facebook" size={48} onClick={this.makeHandleClick('facebook')} />
                <SocialLogo icon="feed" size={48} onClick={this.makeHandleClick('feed')} />
                <SocialLogo icon="flickr" size={48} onClick={this.makeHandleClick('flickr')} />
                <SocialLogo icon="foursquare" size={48} onClick={this.makeHandleClick('foursquare')} />
                <SocialLogo icon="ghost" size={48} onClick={this.makeHandleClick('ghost')} />
                <SocialLogo icon="github" size={48} onClick={this.makeHandleClick('github')} />
                <SocialLogo icon="google-alt" size={48} onClick={this.makeHandleClick('google-alt')} />
                <SocialLogo icon="google-plus-alt" size={48} onClick={this.makeHandleClick('google-plus-alt')} />
                <SocialLogo icon="google-plus" size={48} onClick={this.makeHandleClick('google-plus')} />
                <SocialLogo icon="google" size={48} onClick={this.makeHandleClick('google')} />
                <SocialLogo icon="instagram" size={48} onClick={this.makeHandleClick('instagram')} />
                <SocialLogo icon="linkedin" size={48} onClick={this.makeHandleClick('linkedin')} />
                <SocialLogo icon="mail" size={48} onClick={this.makeHandleClick('mail')} />
                <SocialLogo icon="medium-alt" size={48} onClick={this.makeHandleClick('medium-alt')} />
                <SocialLogo icon="medium" size={48} onClick={this.makeHandleClick('medium')} />
                <SocialLogo icon="patreon" size={48} onClick={this.makeHandleClick('patreon')} />
                <SocialLogo icon="pinterest-alt" size={48} onClick={this.makeHandleClick('pinterest-alt')} />
                <SocialLogo icon="pinterest" size={48} onClick={this.makeHandleClick('pinterest')} />
                <SocialLogo icon="pocket" size={48} onClick={this.makeHandleClick('pocket')} />
                <SocialLogo icon="polldaddy" size={48} onClick={this.makeHandleClick('polldaddy')} />
                <SocialLogo icon="print" size={48} onClick={this.makeHandleClick('print')} />
                <SocialLogo icon="reddit" size={48} onClick={this.makeHandleClick('reddit')} />
                <SocialLogo icon="share" size={48} onClick={this.makeHandleClick('share')} />
                <SocialLogo icon="skype" size={48} onClick={this.makeHandleClick('skype')} />
                <SocialLogo icon="spotify" size={48} onClick={this.makeHandleClick('spotify')} />
                <SocialLogo icon="squarespace" size={48} onClick={this.makeHandleClick('squarespace')} />
                <SocialLogo icon="stumbleupon" size={48} onClick={this.makeHandleClick('stumbleupon')} />
                <SocialLogo icon="telegram" size={48} onClick={this.makeHandleClick('telegram')} />
                <SocialLogo icon="tiktok-alt" size={48} onClick={this.makeHandleClick('tiktok-alt')} />
                <SocialLogo icon="tiktok" size={48} onClick={this.makeHandleClick('tiktok')} />
                <SocialLogo icon="tumblr-alt" size={48} onClick={this.makeHandleClick('tumblr-alt')} />
                <SocialLogo icon="tumblr" size={48} onClick={this.makeHandleClick('tumblr')} />
                <SocialLogo icon="twitch" size={48} onClick={this.makeHandleClick('twitch')} />
                <SocialLogo icon="twitter-alt" size={48} onClick={this.makeHandleClick('twitter-alt')} />
                <SocialLogo icon="twitter" size={48} onClick={this.makeHandleClick('twitter')} />
                <SocialLogo icon="vimeo" size={48} onClick={this.makeHandleClick('vimeo')} />
                <SocialLogo icon="whatsapp" size={48} onClick={this.makeHandleClick('whatsapp')} />
                <SocialLogo icon="woocommerce" size={48} onClick={this.makeHandleClick('woocommerce')} />
                <SocialLogo icon="wordpress" size={48} onClick={this.makeHandleClick('wordpress')} />
                <SocialLogo icon="xanga" size={48} onClick={this.makeHandleClick('xanga')} />
                <SocialLogo icon="youtube" size={48} onClick={this.makeHandleClick('youtube')} />
            </div>
        );
    }
}
