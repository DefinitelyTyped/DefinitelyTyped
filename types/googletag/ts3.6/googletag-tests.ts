(window as any).googletag = (window as any).googletag || { cmd: [] };

googletag.cmd.push(() => {
    googletag
        .defineSlot('/1234567/sports', [728, 90], 'div-1')
        .addService(googletag.pubads())
        .defineSizeMapping(
            googletag
                .sizeMapping()
                .addSize([1024, 768], [970, 250])
                .addSize([980, 690], [728, 90])
                .addSize([640, 480], 'fluid')
                .addSize([0, 0], [88, 31]) // All viewports < 640x480
                .build(),
        );
    googletag.enableServices();
});
