import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { withNativeAd, TriggerableView } from 'react-native-ad-manager';

export class NativeAdView extends React.Component<{
    nativeAd?: any;
}> {
    _triggerView: View | null;

    render() {
        const { nativeAd } = this.props;
        if (!['native', 'template'].includes(nativeAd?.type)) {
            return null;
        }

        const data: any = {};
        if (nativeAd?.type === 'native') {
            data.headline = nativeAd?.headline;
            data.bodyText = nativeAd?.bodyText;
            data.advertiserName = nativeAd?.advertiserName;
            data.starRating = nativeAd?.starRating;
            data.storeName = nativeAd?.storeName;
            data.price = nativeAd?.price;
            data.icon = nativeAd?.icon;
            data.callToActionText = nativeAd?.callToActionText;
            data.images = nativeAd?.images;
        } else if (nativeAd?.type === 'template') {
            data.headline = nativeAd?.title;
            data.bodyText = nativeAd?.text;
            data.advertiserName = nativeAd?.label;
            data.starRating = nativeAd?.imptrk;
            data.storeName = nativeAd?.headline;
            data.price = null;
            data.icon = nativeAd?.image;
            data.callToActionText = null;
            data.images = [];
        }

        return (
            <View style={{ flexDirection: 'column', borderWidth: 1, position: 'relative' }}>
                <TriggerableView
                    style={{
                        backgroundColor: 'rgba(52, 52, 52, 0.5)',
                        position: 'absolute',
                        zIndex: 99,
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                />
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <View style={{ flexDirection: 'column', flex: 1 }}>
                        {data?.headline && <Text style={{ fontSize: 18 }}>{data.headline}</Text>}
                        {data?.bodyText && <Text style={{ fontSize: 10 }}>{data.bodyText}</Text>}
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{data?.advertiserName}</Text>
                            <Text>{data?.starRating}</Text>
                            <Text>{data?.storeName}</Text>
                            <Text>{data?.price}</Text>
                        </View>
                    </View>
                    {data?.icon?.uri && <Image style={{ width: 80, height: 80 }} source={{ uri: data.icon.uri }} />}
                </View>
                {data?.callToActionText && (
                    <View style={{ alignItems: 'center' }}>
                        <View ref={el => (this._triggerView = el)}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: '#a70f0a',
                                    paddingVertical: 10,
                                    paddingHorizontal: 30,
                                    elevation: 3,
                                    borderTopWidth: 0,
                                    margin: 10,
                                    borderRadius: 6,
                                }}
                            >
                                {data.callToActionText}
                            </Text>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

export default withNativeAd(NativeAdView);
