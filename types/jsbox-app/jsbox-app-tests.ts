async function test() {
    $photo.pick({
        format: "data",
        multi: true,
        handler: (resp) => {
            const data: NSData = resp.results[0].data;
            data.jsValue();
        },
    });

    $photo.pick({
        multi: true,
        handler: (resp) => {
            const image: UIImage = resp.results[0].image;
            image.png;
        },
    });

    $photo.pick({
        format: "data",
        handler: (resp) => {
            const data: NSData = resp.data;
            data.jsValue();
        },
    });

    $photo.pick({
        handler: (resp) => {
            const image: UIImage = resp.image;
            image.jpg(0.8);
        },
    });

    const pickedImage: PhotoTypes.PickResponse<"image", false> = await $photo.pick();
    pickedImage.image;

    const pickedData: PhotoTypes.PickResponse<"data", false> = await $photo.pick({ format: "data" });
    pickedData.data;

    const fetchedImages: UIImage[] = await $photo.fetch();
    fetchedImages[0].size;

    const fetchedData: NSData[] = await $photo.fetch({ format: "data" });
    fetchedData[0].string;

    const scanned: PhotoTypes.ScanResponse = await $photo.scan();
    scanned.results[0].size;

    const currentOffset: number = $audio.offset;
    currentOffset.toFixed();
    $audio.play({ path: "assets/test.mp3" });
    $audio.seek(3);
    $audio.pause();

    const cacheValue: any = $cache.get("token");
    cacheValue;
    $cache.set("token", "value");
    $cache.getAsync({
        key: "token",
        handler: (result) => {
            result;
        },
    });

    const digest: string = $text.SHA256("hello");
    digest.toUpperCase();
    const markdown: string = await $text.htmlToMarkdown({ html: "<b>hello</b>" });
    markdown.toLowerCase();
    $text.htmlToMarkdown({
        html: "<b>hello</b>",
        handler: (result: string) => {
            result.toLowerCase();
        },
    });

    const absolutePath: string = $file.absolutePath("shared/test.txt");
    absolutePath.toLowerCase();
    const fileData: Promise<NSData> = $file.download("shared/test.txt");
    (await fileData).string;

    const available: boolean = $location.available;
    available.valueOf();
    const location = await $location.get();
    location.lat.toFixed();
    const snapshot: UIImage = await $location.snapshot({
        region: { lat: 0, lng: 0 },
        style: 1,
    });
    snapshot.size;
}
