// Type definitions for wechat-js-sdk v1.1.0
// Project: https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
// Definitions by: Codemonk <http://www.youxianxueche.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright [Codemonk] [Codemonk@live.cn]

This project is licensed under the MIT license.
Copyrights are respective of each contributor listed at the beginning of each definition file.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

declare namespace __wechat {
    interface ConfigParameter {
        debug?: boolean
        appId: string
        timestamp: string
        nonceStr: string
        signature: string
        jsApiList: string[]
    }
    interface checkJsApiParameter {
        jsApiList: string[],
        success: (res: any) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface ShareParameter {
        title: string
        link: string
        imgUrl: string
        success?: () => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface ShareWithDescParameter extends ShareParameter {
        desc: string
    }
    interface MenuShareTimelineParameter extends ShareParameter { }
    interface MenuShareAppMessageParameter extends ShareWithDescParameter {
        type?: 'music' | 'video' | 'link'
        dataUrl?: string
    }
    interface MenuShareQQParameter extends ShareWithDescParameter { }
    interface MenuShareWeiboParameter extends ShareWithDescParameter { }
    interface MenuShareQZoneParameter extends ShareWithDescParameter { }
    interface ChooseImageParameter {
        count?: number
        sizeType?: string[]
        sourceType?: string[]
        success: (res: any | { localIds: string[] }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface PreviewImageParameter {
        current?: string
        urls: string[]
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface UploadImageParameter {
        localId: string
        isShowProgressTips?: number
        success: (res: any | { serverId: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface DownloadImageParameter {
        serverId: string
        isShowProgressTips?: number
        success: (res: any | { localId: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface StopRecordParameter {
        success: (res: any | { localId: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface OnVoiceRecordEndParameter {
        success: (res: any | { localId: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface PauseVoiceParameter {
        localId: string
    }
    interface StopVoiceParameter {
        localId: string
    }
    interface OnVoicePlayEndParameter {
        success: (res: { networkType: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface UploadVoiceParameter {
        localId: string
        isShowProgressTips?: number
        success: (res: any | { serverId: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface DownloadVoiceParameter {
        serverId: string
        isShowProgressTips?: number
        success: (res: any | { localId: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface GetNetworkTypeParameter {
        success: (res: any | { networkType: string }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface OpenLocationParameter {
        latitude?: number
        longitude?: number
        name?: string
        address?: string
        scale?: number
        infoUrl?: string
    }
    interface GetLocationParameter {
        type?: string
        success: (res: {
            latitude: number
            longitude: number
            speed: number
            accuracy: number
        }) => void
        fail?: (res: any) => void
        complete?: () => void
        cancel?: (res: any) => void
    }
    interface StartSearchBeaconsParameter {
        ticket: string
        complete: (argv: any) => void
        fail?: (res: any) => void
        cancel?: (res: any) => void
    }
    interface StopSearchBeaconsParameter {
        complete: (res: any) => void
        fail?: (res: any) => void
        cancel?: (res: any) => void
    }
    interface OnSearchBeaconsParameter {
        complete: (res: any) => void
        fail?: (res: any) => void
        cancel?: (res: any) => void
    }
    interface HideMenuItemsParameter {
        menuList: string[]
    }
    interface ShowMenuItemsParameter {
        menuList: string[]
    }
    interface ScanQRCodeParameter {
        needResult?: number
        scanType?: string[]
        success: (res: any | { resultStr: any }) => void
        complete?: (res: any) => void
        fail?: (res: any) => void
        cancel?: (res: any) => void
    }
    interface OpenProductSpecificViewParameter {
        productId: string,
        viewType?: number
    }
    interface ChooseCardParameter {
        shopId?: string
        cardType?: string
        cardId?: string
        timestamp: string
        nonceStr: string
        signType: string
        cardSign: string
        success: (res: any | { cardList: { cardId: string, code: string }[] }) => void
        complete?: (res: any) => void
        fail?: (res: any) => void
        cancel?: (res: any) => void
    }
    interface OpenCardParameter {
        cardList: { cardId: string, code: string }[]
    }
    interface ChooseWXPayParameter {
        timestamp: string
        nonceStr: string
        package: string
        signType: string
        paySign: string
        success: (res: any) => void
        complete?: (res: any) => void
        fail?: (res: any) => void
        cancel?: (res: any) => void
    }
    interface Wechat {
        config(parameter: ConfigParameter): void
        ready(callback: () => void): void
        error(callback: (result: any) => void): void
        checkJsApi(parameter: checkJsApiParameter): void
        onMenuShareTimeline(parameter: ShareParameter): void
        onMenuShareAppMessage(parameter: MenuShareAppMessageParameter): void
        onMenuShareQQ(parameter: MenuShareQQParameter): void
        onMenuShareWeibo(parameter: MenuShareWeiboParameter): void
        onMenuShareQZone(parameter: MenuShareQZoneParameter): void
        chooseImage(parameter: ChooseImageParameter): void
        previewImage(parameter: PreviewImageParameter): void
        uploadImage(parameter: UploadImageParameter): void
        downloadImage(parameter: DownloadImageParameter): void
        startRecord(): void
        stopRecord(parameter: StopRecordParameter): void
        onVoiceRecordEnd(parameter: OnVoiceRecordEndParameter): void
        pauseVoice(parameter: PauseVoiceParameter): void
        stopVoice(parameter: StopVoiceParameter): void
        onVoicePlayEnd(parameter: OnVoicePlayEndParameter): void
        uploadVoice(parameter: UploadVoiceParameter): void
        downloadVoice(parameter: DownloadVoiceParameter): void
        getNetworkType(parameter: GetNetworkTypeParameter): void
        openLocation(parameter: OpenLocationParameter): void
        getLocation(parameter: GetLocationParameter): void
        startSearchBeacons(parameter: StartSearchBeaconsParameter): void
        stopSearchBeacons(parameter: StopSearchBeaconsParameter): void
        onSearchBeacons(parameter: OnSearchBeaconsParameter): void
        hideOptionMenu(): void
        showOptionMenu(): void
        closeWindow(): void
        hideMenuItems(parameter: HideMenuItemsParameter): void
        showMenuItems(parameter: ShowMenuItemsParameter): void
        hideAllNonBaseMenuItem(): void
        showAllNonBaseMenuItem(): void
        scanQRCode(parameter: ScanQRCodeParameter): void
        openProductSpecificView(parameter: OpenProductSpecificViewParameter): void
        chooseCard(parameter: ChooseCardParameter): void
        openCard(parameter: OpenCardParameter): void
        chooseWXPay(parameter: ChooseWXPayParameter): void
    }
}
declare const wx: __wechat.Wechat