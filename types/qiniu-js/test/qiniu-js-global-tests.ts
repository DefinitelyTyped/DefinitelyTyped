const file: Blob = null as any;

const config = {
    useCdnDomain: true,
    region: qiniu.region.z2
};

const key = 'key';
const token = 'token';

const putExtra = {
    fname: "",
    params: {},
    mimeType: [] || null
};

(() => {
    const observable = qiniu.upload(file, key, token, putExtra, config);

    const subscription = observable.subscribe({
        next(res) { },
        complete(res) { },
        error(err) { }
    }); // 上传开始
    subscription.unsubscribe(); // 上传取消
})();

(() => {
    const observable = qiniu.upload(file, key, token, putExtra, config);
    const subscription = observable.subscribe((res) => { }, (err) => { }, (res) => { }); // 这样传参形式也可以
})();

(async () => {
    // 图片上传前压缩：
    const options = {
        quality: 0.92,
        noCompressIfLarger: true
        // maxWidth: 1000,
        // maxHeight: 618
    };
    const data = await qiniu.compressImage(file, options);
    const observable = qiniu.upload(data.dist, key, token, putExtra, config);
    const subscription = observable.subscribe({
        next(res) { },
        complete(res) { },
        error(err) { }
    }); // 上传开始
})();
