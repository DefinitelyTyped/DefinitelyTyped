import * as React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View, RefreshControl, ViewStyle } from 'react-native';
import { Interstitial, Banner, NativeAdsManager, AdLoadedEvent, AdFailedToLoadEvent } from 'react-native-ad-manager';
import NativeAdView from './NativeAdView';

const BannerExample: React.FunctionComponent<{
    style?: ViewStyle;
    title: string;
}> = ({ style, title, children, ...props }) => (
    <View {...props} style={[styles.example, style]}>
        <Text style={styles.title}>{title}</Text>
        <View>{children}</View>
    </View>
);

const bannerWidths = [200, 250, 320];

export default class Example extends React.Component<
    {},
    {
        fluidSizeIndex: number;
        adsList: Array<{ type: string }>;
        refreshingScrollView: boolean;
    }
> {
    constructor() {
        super({});
        this.state = {
            fluidSizeIndex: 0,
            adsList: [],
            refreshingScrollView: false,
        };
    }

    componentDidMount() {
        Interstitial.setTestDevices([Interstitial.simulatorId]);
        Interstitial.setAdUnitID('/83069739/jeff');

        Interstitial.addEventListener('adLoaded', () => console.log('Interstitial adLoaded'));
        Interstitial.addEventListener('adFailedToLoad', error => console.warn(error));
        Interstitial.addEventListener('adOpened', () => console.log('Interstitial => adOpened'));
        Interstitial.addEventListener('adClosed', () => {
            console.log('Interstitial => adClosed');
            Interstitial.requestAd().catch(error => console.warn(error));
        });
        Interstitial.addEventListener('adLeftApplication', () => console.log('Interstitial => adLeftApplication'));

        Interstitial.requestAd().catch(error => console.warn(error));

        // const adsList = [{type: 'banner'}];
        // this.setState({adsList: adsList});
    }

    componentWillUnmount() {
        Interstitial.removeAllListeners();
    }

    showInterstitial() {
        Interstitial.showAd().catch(error => console.warn(error));
    }

    onAdLoaded = (nativeAd: AdLoadedEvent) => {
        console.log(nativeAd);
    }

    showBanner = (_adsManager: NativeAdsManager, index: number) => {
        return (
            <BannerExample title={`${index}. DFP - Fluid Ad Size`}>
                <View
                    style={[
                        { backgroundColor: '#f3f', paddingVertical: 10 },
                        { alignItems: 'center', width: '100%' },
                    ]}
                >
                    {/*<NativeAdView
          targeting={{
            customTargeting: { group: 'nzme_user_test' },
            categoryExclusions: ['media'],
            contentURL: 'nzmetest://',
            publisherProvidedID: 'provider_id_nzme',
          }}
          // style={{ width: '100%'}}
          adsManager={adsManager}
          // adLayout={'horizontal'}
          validAdTypes={['banner']}
          adSize="mediumRectangle"
          validAdSizes={['mediumRectangle']}
          onAdLoaded={this.onAdLoaded}
          adUnitID={'/83069739/jeff'}
          onAdFailedToLoad={error => {
            console.log(error);
          }}
        />*/}
                    <Banner
                        onAdLoaded={this.onAdLoaded}
                        adSize="mediumRectangle"
                        validAdSizes={['mediumRectangle']}
                        adUnitID={'/83069739/jeff'}
                        targeting={{
                            customTargeting: { group: 'nzme_user_test' },
                            categoryExclusions: ['media'],
                            contentURL: 'nzmetest://',
                            publisherProvidedID: 'provider_id_nzme',
                        }}
                    />
                </View>
            </BannerExample>
        );
    }

    showNative = (adsManager: NativeAdsManager, index: number) => {
        return (
            <BannerExample style={{}} title={`${index}. DFP - Native ad`}>
                <View style={{ alignItems: 'center', width: '100%' }}>
                    <NativeAdView
                        targeting={{
                            customTargeting: { group: 'nzme_user_test' },
                            categoryExclusions: ['media'],
                            contentURL: 'nzmetest://',
                            publisherProvidedID: 'provider_id_nzme',
                        }}
                        style={{ width: '100%' }}
                        adsManager={adsManager}
                        // adLayout={'horizontal'}
                        validAdTypes={['native', 'template']}
                        customTemplateIds={['11891103']}
                        onAdLoaded={this.onAdLoaded}
                        adUnitID={'/83069739/jeff'}
                        onAdFailedToLoad={(event: AdFailedToLoadEvent) => {
                            console.log(event.error);
                        }}
                    />
                </View>
            </BannerExample>
        );
    }

    addAd = (type: string) => {
        const { adsList } = this.state;
        if (type === 'banner') {
            adsList.push({ type: 'banner' });
        } else {
            adsList.push({ type: 'native' });
        }
        this.setState({ adsList });
    }

    onRefreshScrollView = () => {
        const adsList = [{ type: 'banner' }];
        this.setState({ adsList });
    }

    render() {
        // const adsManager = new NativeAdsManager("/6499/example/native", [AdMobInterstitial.simulatorId]);
        const adsManager = new NativeAdsManager('/83069739/jeff', [Interstitial.simulatorId]);
        const { adsList, refreshingScrollView } = this.state;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <BannerExample title="Interstitial">
                        <Button title="Show Interstitial and preload next" onPress={this.showInterstitial} />
                    </BannerExample>
                    {adsList?.map((curItem, index) => {
                        if (curItem.type === 'banner') {
                            return <View key={index}>{this.showBanner(adsManager, index + 1)}</View>;
                        } else {
                            return <View key={index}>{this.showNative(adsManager, index + 1)}</View>;
                        }
                    })}
                    <BannerExample title="Add more adds" style={{ paddingBottom: 40 }}>
                        <Button
                            title="Add Banner"
                            onPress={() => this.addAd('banner')}
                            color={styles.button.backgroundColor}
                        />
                        <Button
                            title="Add Native"
                            onPress={() => this.addAd('native')}
                            color={styles.button.backgroundColor}
                        />
                    </BannerExample>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 30 : 10,
    },
    example: {
        paddingVertical: 10,
    },
    title: {
        margin: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#CC5500',
    },
});
