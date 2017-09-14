// Type definitions for gm 1.17
// Project: https://github.com/aheckmann/gm
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import stream = require('stream');

declare function m(image: string): m.State;
declare function m(stream: NodeJS.ReadableStream, image?: string): m.State;
declare function m(buffer: Buffer, image?: string): m.State;
declare function m(width: number, height: number, color?: string): m.State;

declare namespace m {
    interface ClassOptions {
        imageMagick?: boolean;
        nativeAutoOrient?: boolean;
    }

    interface ChannelInfo<T> {
        Red: T;
        Green: T;
        Blue: T;
    }

    interface CompareOptions {
        file?: string;
        highlightColor?: string;
        highlightStyle?: string;
        tolerance?: number;
    }

    interface ColorStatistics {
        Minimum: string;
        Maximum: string;
        Mean: string;
        'Standard Deviation': string;
    }

    interface Dimensions {
        width: number;
        height: number;
    }

    interface GetterOptions {
       bufferStream?: boolean;
    }

    interface ImageInfo {
        'Background Color': string;
        'Border Color': string;
        'Channel Depths': ChannelInfo<string>;
        'Channel Statistics': ChannelInfo<ColorStatistics>;
        Class: string;
        color: number;
        Compose: string;
        Compression: string;
        depth: number;
        Depth: string;
        Dispose: string;
        Filesize: string;
        format: string;
        Format: string;
        Geometry: string;
        Interlace: string;
        Iterations: string;
        'JPEG-Quality'?: string;
        'JPEG-Colorspace'?: string;
        'JPEG-Colorspace-Name'?: string;
        'JPEG-Sampling-factors'?: string;
        'Matte Color': string;
        Orientation: string;
        'Page geometry': string;
        path: string;

        'Profile-color'?: string;
        'Profile-iptc'?: {
            [key: string]: string;
        };
        'Profile-EXIF'?: {
            [key: string]: string;
        };
        'Profile-XMP'?: string;
        Resolution?: string;
        size: Dimensions;
        Signature: string;
        Software: string;
        Tainted: string;
        Type: string;
    }

    interface State {
        // Image Operations
        adjoin(): State;
        affine(matrix: string): State;
        antialias(enable: boolean): State;
        append(image: string, ltr?: boolean): State;
        authenticate(password: string): State;
        autoOrient(): State;
        backdrop(): State;
        background(color: string): State;
        bitdepth(bits: number): State;
        blackThreshold(intensity: number): State;
        blackThreshold(red: number, green: number, blue: number, opacity?: number): State;
        bluePrimary(x: number, y: number): State;
        blur(radius: number, sigma?: number): State;
        border(width: number, height: number): State;
        borderColor(color: string): State;
        box(color: string): State;
        channel(type: 'Red'): State;
        channel(type: 'Green'): State;
        channel(type: 'Blue'): State;
        channel(type: 'Opacity'): State;
        channel(type: 'Matte'): State;
        channel(type: 'Cyan'): State;
        channel(type: 'Magenta'): State;
        channel(type: 'Yellow'): State;
        channel(type: 'Black'): State;
        channel(type: 'Gray'): State;
        channel(type: string): State;
        charcoal(factor: number): State;
        chop(width: number, height: number, x?: number, y?: number): State;
        clip(): State;
        coalesce(): State;
        colorize(red: number, green: number, blue: number): State;
        colorMap(type: 'shared'): State;
        colorMap(type: 'private'): State;
        colorMap(type: string): State;
        colors(colors: number): State;
        colorspace(space: 'CineonLog'): State;
        colorspace(space: 'CMYK'): State;
        colorspace(space: 'GRAY'): State;
        colorspace(space: 'HSL'): State;
        colorspace(space: 'HSB'): State;
        colorspace(space: 'OHTA'): State;
        colorspace(space: 'RGB'): State;
        colorspace(space: 'Rec601Luma'): State;
        colorspace(space: 'Rec709Luma'): State;
        colorspace(space: 'Rec601YCbCr'): State;
        colorspace(space: 'Rec709YCbCr'): State;
        colorspace(space: 'Transparent'): State;
        colorspace(space: 'XYZ'): State;
        colorspace(space: 'YCbCr'): State;
        colorspace(space: 'YIQ'): State;
        colorspace(space: 'YPbPr'): State;
        colorspace(space: 'YUV'): State;
        colorspace(space: string): State;
        compose(operator: 'Over'): State;
        compose(operator: 'In'): State;
        compose(operator: 'Out'): State;
        compose(operator: 'Atop'): State;
        compose(operator: 'Xor'): State;
        compose(operator: 'Plus'): State;
        compose(operator: 'Minus'): State;
        compose(operator: 'Add'): State;
        compose(operator: 'Subtract'): State;
        compose(operator: 'Difference'): State;
        compose(operator: 'Divide'): State;
        compose(operator: 'Multiply'): State;
        compose(operator: 'Bumpmap'): State;
        compose(operator: 'Copy'): State;
        compose(operator: 'CopyRed'): State;
        compose(operator: 'CopyGreen'): State;
        compose(operator: 'CopyBlue'): State;
        compose(operator: 'CopyOpacity'): State;
        compose(operator: 'CopyCyan'): State;
        compose(operator: 'CopyMagenta'): State;
        compose(operator: 'CopyYellow'): State;
        compose(operator: 'CopyBlack'): State;
        compose(operator: string): State;
        compress(type: 'None'): State;
        compress(type: 'BZip'): State;
        compress(type: 'Fax'): State;
        compress(type: 'Group4'): State;
        compress(type: 'JPEG'): State;
        compress(type: 'Lossless'): State;
        compress(type: 'LZW'): State;
        compress(type: 'RLE'): State;
        compress(type: 'Zip'): State;
        compress(type: 'LZMA'): State;
        compress(type: string): State;
        contrast(multiplier: number): State;
        convolve(kernel: string): State;
        createDirectories(): State;
        crop(width: number, height: number, x?: number, y?: number, percent?: boolean): State;
        cycle(amount: number): State;
        deconstruct(): State;
        define(): State;
        delay(milliseconds: number): State;
        density(width: number, height: number): State;
        despeckle(): State;
        displace(horizontal: number, vertical: number): State;
        display(xServer: string): State;
        dispose(method: 'Undefined'): State;
        dispose(method: 'None'): State;
        dispose(method: 'Background'): State;
        dispose(method: 'Previous'): State;
        dispose(method: string): State;
        dissolve(percent: number): State;
        dither(enable?: boolean): State;
        edge(radius?: number): State;
        emboss(radius?: number): State;
        encoding(encoding: 'AdobeCustom'): State;
        encoding(encoding: 'AdobeExpert'): State;
        encoding(encoding: 'AdobeStandard'): State;
        encoding(encoding: 'AppleRoman'): State;
        encoding(encoding: 'BIG5'): State;
        encoding(encoding: 'GB2312'): State;
        encoding(encoding: 'Latin 2'): State;
        encoding(encoding: 'None'): State;
        encoding(encoding: 'SJIScode'): State;
        encoding(encoding: 'Symbol'): State;
        encoding(encoding: 'Unicode'): State;
        encoding(encoding: 'Wansung'): State;
        encoding(encoding: string): State;
        endian(type: 'MSB'): State;
        endian(type: 'LSB'): State;
        endian(type: 'Native'): State;
        endian(type: string): State;
        enhance(): State;
        equalize(): State;
        extent(width: number, height: number, options?: string): State;
        file(filename: string): State;
        filter(type: 'Point'): State;
        filter(type: 'Box'): State;
        filter(type: 'Triangle'): State;
        filter(type: 'Hermite'): State;
        filter(type: 'Hanning'): State;
        filter(type: 'Hamming'): State;
        filter(type: 'Blackman'): State;
        filter(type: 'Gaussian'): State;
        filter(type: 'Quadratic'): State;
        filter(type: 'Cubic'): State;
        filter(type: 'Catrom'): State;
        filter(type: 'Mitchell'): State;
        filter(type: 'Lanczos'): State;
        filter(type: 'Bessel'): State;
        filter(type: 'Sinc'): State;
        filter(type: string): State;
        flatten(): State;
        flip(): State;
        flop(): State;
        foreground(color: string): State;
        frame(width: number, height: number, outerBevelWidth: number, outBevelHeight: number): State;
        fuzz(distance: number, percent?: boolean): State;
        gamma(r: number, g: number, b: number): State;
        gaussian(radius: number, sigma?: number): State;
        geometry(width: number, height?: number, option?: ResizeOption): State;
        geometry(geometry: string): State;
        greenPrimary(x: number, y: number): State;
        gravity(direction: 'NorthWest'): State;
        gravity(direction: 'North'): State;
        gravity(direction: 'NorthEast'): State;
        gravity(direction: 'West'): State;
        gravity(direction: 'Center'): State;
        gravity(direction: 'East'): State;
        gravity(direction: 'SouthWest'): State;
        gravity(direction: 'South'): State;
        gravity(direction: 'SouthEast'): State;
        gravity(direction: string): State;
        highlightColor(color: string): State;
        highlightStyle(style: 'Assign'): State;
        highlightStyle(style: 'Threshold'): State;
        highlightStyle(style: 'Tint'): State;
        highlightStyle(style: 'XOR'): State;
        highlightStyle(style: string): State;
        iconGeometry(geometry: string): State;
        implode(factor?: number): State;
        intent(type: 'Absolute'): State;
        intent(type: 'Perceptual'): State;
        intent(type: 'Relative'): State;
        intent(type: 'Saturation'): State;
        intent(type: string): State;
        interlace(type: 'None'): State;
        interlace(type: 'Line'): State;
        interlace(type: 'Plane'): State;
        interlace(type: 'Partition'): State;
        interlace(type: string): State;
        label(name: string): State;
        lat(width: number, height: number, offset: number, percent?: boolean): State;
        level(blackPoint: number, gamma: number, whitePoint: number, percent?: boolean): State;
        limit(type: 'disk', val: string): State;
        limit(type: 'file', val: string): State;
        limit(type: 'map', val: string): State;
        limit(type: 'memory', val: string): State;
        limit(type: 'pixels', val: string): State;
        limit(type: 'threads', val: string): State;
        limit(type: string, val: string): State;
        list(type: string): State;
        list(type: 'Color'): State;
        list(type: 'Delegate'): State;
        list(type: 'Format'): State;
        list(type: 'Magic'): State;
        list(type: 'Module'): State;
        list(type: 'Resource'): State;
        list(type: 'Type'): State;
        log(format: string): State;
        loop(iterations: number): State;
        lower(width: number, height: number): State;
        magnify(factor: number): State;
        map(filename: string): State;
        mask(filename: string): State;
        matte(): State;
        matteColor(color: string): State;
        maximumError(limit: number): State;
        median(radius?: number): State;
        minify(factor: number): State;
        mode(mode: 'frame'): State;
        mode(mode: 'unframe'): State;
        mode(mode: 'concatenate'): State;
        mode(mode: string): State;
        modulate(b: number, s: number, h: number): State;
        monitor(): State;
        monochrome(): State;
        morph(otherImg: string, outName: string, callback?: WriteCallback): State;
        morph(otherImg: string[], outName: string, callback?: WriteCallback): State;
        mosaic(): State;
        motionBlur(radius: number, sigma?: number, angle?: number): State;
        name(): State;
        negative(): State;
        noise(type: 'uniform'): State;
        noise(type: 'gaussian'): State;
        noise(type: 'multiplicative'): State;
        noise(type: 'impulse'): State;
        noise(type: 'laplacian'): State;
        noise(type: 'poisson'): State;
        noise(type: string): State;
        noise(radius: number): State;
        noop(): State;
        normalize(): State;
        opaque(color: string): State;
        operator(channel: string, operator: 'Add', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'And', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Assign', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Depth', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Divide', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Gamma', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Negate', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'LShift', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Log', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Max', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Min', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Multiply', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Or', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Pow', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'RShift', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Subtract', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Threshold', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Threshold-White', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Threshold-White-Negate', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Threshold-Black', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Threshold-Black-Negate', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Xor', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Gaussian', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Impulse', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Laplacian', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Multiplicative', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Poisson', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Random', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: 'Noise-Uniform', rvalue: number, percent?: boolean): State;
        operator(channel: string, operator: string, rvalue: number, percent?: boolean): State;
        orderedDither(channelType: 'All', NxN: string): State;
        orderedDither(channelType: 'Intensity', NxN: string): State;
        orderedDither(channelType: 'Red', NxN: string): State;
        orderedDither(channelType: 'Green', NxN: string): State;
        orderedDither(channelType: 'Blue', NxN: string): State;
        orderedDither(channelType: 'Cyan', NxN: string): State;
        orderedDither(channelType: 'Magenta', NxN: string): State;
        orderedDither(channelType: 'Yellow', NxN: string): State;
        orderedDither(channelType: 'Black', NxN: string): State;
        orderedDither(channelType: 'Opacity', NxN: string): State;
        orderedDither(channelType: string, NxN: string): State;
        outputDirectory(directory: string): State;
        page(width: number, height: number, arg?: '%'): State;
        page(width: number, height: number, arg?: '!'): State;
        page(width: number, height: number, arg?: '<'): State;
        page(width: number, height: number, arg?: '>'): State;
        page(width: number, height: number, arg?: string): State;
        pause(seconds: number): State;
        pen(color: string): State;
        ping(): State;
        pointSize(size: number): State;
        noProfile(): State;
        preview(type: 'Rotate'): State;
        preview(type: 'Shear'): State;
        preview(type: 'Roll'): State;
        preview(type: 'Hue'): State;
        preview(type: 'Saturation'): State;
        preview(type: 'Brightness'): State;
        preview(type: 'Gamma'): State;
        preview(type: 'Spiff'): State;
        preview(type: 'Dull'): State;
        preview(type: 'Grayscale'): State;
        preview(type: 'Quantize'): State;
        preview(type: 'Despeckle'): State;
        preview(type: 'ReduceNoise'): State;
        preview(type: 'AddNoise'): State;
        preview(type: 'Sharpen'): State;
        preview(type: 'Blur'): State;
        preview(type: 'Threshold'): State;
        preview(type: 'EdgeDetect'): State;
        preview(type: 'Spread'): State;
        preview(type: 'Shade'): State;
        preview(type: 'Raise'): State;
        preview(type: 'Segment'): State;
        preview(type: 'Solarize'): State;
        preview(type: 'Swirl'): State;
        preview(type: 'Implode'): State;
        preview(type: 'Wave'): State;
        preview(type: 'OilPaint'): State;
        preview(type: 'CharcoalDrawing'): State;
        preview(type: 'JPEG'): State;
        preview(type: string): State;
        paint(radius: number): State;
        process(command: string): State;
        profile(filename: string): State;
        progress(): State;
        randomThreshold(channelType: ChannelType, LOWxHIGH: string): State;
        quality(level: number): State;
        raise(width: number, height: number): State;
        recolor(matrix: string): State;
        redPrimary(x: number, y: number): State;
        region(width: number, height: number, x?: number, y?: number): State;
        remote(): State;
        render(): State;
        repage(reset: '+'): State;
        repage(reset: string): State;
        repage(width: number, height: number, xoff: number, yoff: number, arg?: string): State;
        sample(geometry: string): State;
        samplingFactor(horizontalFactor: number, verticalFactor: number): State;
        rawSize(width: number, height: number, offset?: number): State;
        resample(horizontal: number, vertical: number): State;
        resize(width: number, height: number, option: ResizeOption): State;
        resize(width: number, height?: number, option?: ResizeOption): State;
        roll(horizontal: number, vertical: number): State;
        rotate(backgroundColor: string, degrees: number): State;
        scene(index: number): State;
        scenes(start: number, end: number): State;
        scale(width: number, height: number): State;
        screen(): State;
        segment(clustherThreshold: number, smoothingThreshold: number): State;
        sepia(): State;
        set(attribute: string, value: string): State;
        setFormat(format: string): State;
        shade(azimuth: number, elevation: number): State;
        shadow(radius: number, sigma?: number): State;
        sharedMemory(): State;
        shave(width: number, height: number, percent?: boolean): State;
        sharpen(radius: number, sigma?: number): State;
        shear(xDegrees: number, yDegress: number): State;
        silent(): State;
        snaps(count: number): State;
        solarize(threshold: number): State;
        spread(amount: number): State;
        stegano(offset: number): State;
        stereo(): State;
        strip(): State;
        swirl(degrees: number): State;
        textFont(font: string): State;
        threshold(value: number, percent?: boolean): State;
        thumb(width: number, height: number, outName: string, callback: WriteCallback): State;
        thumb(width: number, height: number, outName: string, quality: number, callback: WriteCallback): State;
        thumb(width: number, height: number, outName: string, quality: number, align: 'topleft', callback: WriteCallback): State;
        thumb(width: number, height: number, outName: string, quality: number, align: 'center', callback: WriteCallback): State;
        thumb(width: number, height: number, outName: string, quality: number, align: string, callback: WriteCallback): State;
        tile(filename: string): State;
        title(title: string): State;
        transform(color: string): State;
        transparent(color: string): State;
        treeDepth(depth: number): State;
        trim(): State;
        type(type: 'Bilevel'): State;
        type(type: 'Grayscale'): State;
        type(type: 'Palette'): State;
        type(type: 'PaletteMatte'): State;
        type(type: 'TrueColor'): State;
        type(type: 'TrueColorMatte'): State;
        type(type: 'ColorSeparation'): State;
        type(type: 'ColorSeparationMatte'): State;
        type(type: 'Optimize'): State;
        type(type: string): State;
        update(seconds: number): State;
        units(type: 'Undefined'): State;
        units(type: 'PixelsPerInch'): State;
        units(type: 'PixelsPerCentimeter'): State;
        units(type: string): State;
        unsharp(radius: number, sigma?: number, amount?: number, threshold?: number): State;
        usePixmap(): State;
        view(): State;
        virtualPixel(method: 'Constant'): State;
        virtualPixel(method: 'Edge'): State;
        virtualPixel(method: 'Mirror'): State;
        virtualPixel(method: 'Tile'): State;
        virtualPixel(method: string): State;
        visual(type: 'StaticGray'): State;
        visual(type: 'GrayScale'): State;
        visual(type: 'StaticColor'): State;
        visual(type: 'PseudoColor'): State;
        visual(type: 'TrueColor'): State;
        visual(type: 'DirectColor'): State;
        visual(type: 'default'): State;
        visual(type: string): State;
        watermark(brightness: number, saturation: number): State;
        wave(amplitude: number, wavelength: number): State;
        whitePoint(x: number, y: number): State;
        whiteThreshold(intensity: number): State;
        whiteThreshold(red: number, green: number, blue: number, opacity?: number): State;
        window(id: string): State;
        windowGroup(): State;

        // Getters
        color(callback: GetterCallback<number>): State;
        color(opts: GetterOptions, callback: GetterCallback<number>): State;
        depth(callback: GetterCallback<number>): State;
        depth(opts: GetterOptions, callback: GetterCallback<number>): State;
        filesize(callback: GetterCallback<string>): State;
        filesize(opts: GetterOptions, callback: GetterCallback<string>): State;
        format(callback: GetterCallback<string>): State;
        format(opts: GetterOptions, callback: GetterCallback<string>): State;
        identify(callback: GetterCallback<ImageInfo>): State;
        identify(opts: GetterOptions, callback: GetterCallback<ImageInfo>): State;
        res(callback: GetterCallback<string>): State;
        res(opts: GetterOptions, callback: GetterCallback<string>): State;
        size(callback: GetterCallback<Dimensions>): State;
        size(opts: GetterOptions, callback: GetterCallback<Dimensions>): State;
        orientation(callback: GetterCallback<string>): State;
        orientation(opts: GetterOptions, callback: GetterCallback<string>): State;

        // Drawing Operations
        draw(args: string): State;
        drawArc(x0: number, y0: number, x1: number, y1: number, r0: number, r1: number): State;
        drawBezier(x0: number, y0: number, x1: number, y1: number): State;
        drawBezier(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): State;
        drawBezier(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, ...coords: number[]): State;
        drawCircle(x0: number, y0: number, x1: number, y1: number): State;
        drawEllipse(x0: number, y0: number, rx: number, ry: number, a0: number, a1: number): State;
        drawLine(x0: number, y0: number, x1: number, y1: number): State;
        drawPoint(x: number, y: number): State;
        drawPolygon(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): State;
        drawPolygon(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, ...coords: number[]): State;
        drawPolyline(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): State;
        drawPolyline(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, ...coords: number[]): State;
        drawRectangle(x0: number, y0: number, x1: number, y1: number): State;
        drawRectangle(x0: number, y0: number, x1: number, y1: number, rc: number): State;
        drawRectangle(x0: number, y0: number, x1: number, y1: number, wc: number, hc: number): State;
        drawText(x: number, y: number, text: string, gravity: 'NorthWest'): State;
        drawText(x: number, y: number, text: string, gravity: 'North'): State;
        drawText(x: number, y: number, text: string, gravity: 'NorthEast'): State;
        drawText(x: number, y: number, text: string, gravity: 'West'): State;
        drawText(x: number, y: number, text: string, gravity: 'Center'): State;
        drawText(x: number, y: number, text: string, gravity: 'East'): State;
        drawText(x: number, y: number, text: string, gravity: 'SouthWest'): State;
        drawText(x: number, y: number, text: string, gravity: 'South'): State;
        drawText(x: number, y: number, text: string, gravity: 'SouthEast'): State;
        drawText(x: number, y: number, text: string, gravity?: string): State;
        fill(color: string): State;
        font(name: string, size?: number): State;
        fontSize(size: number): State;
        stroke(color: string, width?: number): State;
        strokeWidth(width: number): State;
        setDraw(property: 'color', x: number, y: number, method: 'point'): State;
        setDraw(property: 'color', x: number, y: number, method: 'replace'): State;
        setDraw(property: 'color', x: number, y: number, method: 'floodfill'): State;
        setDraw(property: 'color', x: number, y: number, method: 'filltoborder'): State;
        setDraw(property: 'color', x: number, y: number, method: 'reset'): State;
        setDraw(property: 'matte', x: number, y: number, method: 'point'): State;
        setDraw(property: 'matte', x: number, y: number, method: 'replace'): State;
        setDraw(property: 'matte', x: number, y: number, method: 'floodfill'): State;
        setDraw(property: 'matte', x: number, y: number, method: 'filltoborder'): State;
        setDraw(property: 'matte', x: number, y: number, method: 'reset'): State;
        setDraw(property: string, x: number, y: number, method: string): State;

        // Commands
        stream(callback?: WriteCallback): stream.PassThrough;
        stream(format: string, callback?: WriteCallback): stream.PassThrough;
        toBuffer(callback: (err: Error, buffer: Buffer) => any): stream.PassThrough;
        toBuffer(format: string, callback: (err: Error, buffer: Buffer) => any): stream.PassThrough;
        write(filename: string, callback: WriteCallback): void;
    }

    interface SubClass {
        (image: string): State;
        (stream: NodeJS.ReadableStream, image?: string): State;
        (buffer: Buffer, image?: string): State;
        (width: number, height: number, color?: string): State;
    }

    function compare(filename1: string, filename2: string, callback: CompareCallback): void;
    function compare(filename1: string, filename2: string, tolerance: number, callback: CompareCallback): void;
    function compare(filename1: string, filename2: string, options: CompareOptions, callback: CompareCallback): void;

    function subClass(options: ClassOptions): SubClass;

    type ChannelType = 'All'
        | 'Intensity'
        | 'Red'
        | 'Green'
        | 'Blue'
        | 'Cyan'
        | 'Magenta'
        | 'Yellow'
        | 'Black'
        | 'Opacity';

    type CompareCallback = (err: Error, isEqual: boolean, equality: number, raw: number) => any;

    type GetterCallback<T> = (err: Error, value: T) => any;

    type ResizeOption = '%' /** Width and height are specified in percents */
        | '@' /** Specify maximum area in pixels */
        | '!' /** Ignore aspect ratio */
        | '^' /** Width and height are minimum values */
        | '<' /** Change dimensions only if image is smaller than width or height */
        | '>'; /** Change dimensions only if image is larger than width or height */

    type WriteCallback = (err: Error, stdout: string, stderr: string, cmd: string) => any;
}

export = m;
