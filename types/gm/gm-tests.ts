import gm = require('gm');
import stream = require('stream');

declare const src: string;
declare const matrix: string;
declare const enable: boolean;
declare const ltr: boolean;
declare const password: string;
declare const bits: number;
declare const intensity: number;
declare const r: number;
declare const g: number;
declare const b: number;
declare const opacity: number;
declare const x: number;
declare const y: number;
declare const radius: number;
declare const sigma: number;
declare const width: number;
declare const height: number;
declare const color: string;
declare const channel: gm.ChannelType;
declare const type: string;
declare const factor: number;
declare const numColors: number;
declare const operator: string;
declare const multiplier: number;
declare const kernel: string;
declare const usePercent: boolean;
declare const time: number;
declare const server: string;
declare const method: string;
declare const percent: number;
declare const encoding: string;
declare const options: gm.ResizeOption;
declare const file: string;
declare const distance: number;
declare const geometry: string;
declare const direction: string;
declare const name: string;
declare const offset: number;
declare const blackPoint: number;
declare const gamma: number;
declare const whitePoint: number;
declare const limit: string;
declare const format: string;
declare const iterations: number;
declare const count: number;
declare const s: number;
declare const h: number;
declare const dest: string;
declare const images: string[];
declare const angle: number;
declare const NxN: string;
declare const size: number;
declare const command: string;
declare const index: number;
declare const threshold: number;
declare const attribute: string;
declare const attrValue: string;
declare const font: string;
declare const quality: number;
declare const align: string;
declare const depth: number;
declare const defineValue: string;
declare const customCommand: string;
declare const customInArguments: string[];
declare const customOutArguments: string[];
declare const customFormat: string;
let readStream: stream.PassThrough;

gm(src)
	.adjoin()
	.affine(matrix)
	.antialias(enable)
	.append(src)
	.append(src, ltr)
	.authenticate(password)
	.autoOrient()
	.backdrop()
	.background(color)
	.bitdepth(bits)
	.blackThreshold(intensity)
	.blackThreshold(r, g, b)
	.blackThreshold(r, g, b, opacity)
	.bluePrimary(x, y)
	.blur(radius)
	.blur(radius, sigma)
	.border(width, height)
	.borderColor(color)
	.box(color)
	.channel(channel)
	.charcoal(factor)
	.chop(width, height)
	.chop(width, height, x, y)
	.clip()
	.coalesce()
	.colorize(r, g, b)
	.colorMap(type)
	.colors(numColors)
	.colorspace(type)
	.command(customCommand)
	.compose(operator)
	.compress(type)
	.contrast(multiplier)
	.convolve(kernel)
	.createDirectories()
	.crop(width, height)
	.crop(width, height, x, y)
	.crop(width, height, x, y, usePercent)
	.cycle(factor)
	.deconstruct()
	.define(defineValue)
	.delay(time)
	.density(width, height)
	.despeckle()
	.displace(x, y)
	.display(server)
	.dispose(method)
	.dissolve(percent)
	.dither()
	.dither(enable)
	.edge()
	.edge(radius)
	.emboss()
	.emboss(radius)
	.encoding(encoding)
	.endian(type)
	.enhance()
	.equalize()
	.extent(width, height)
	.extent(width, height, options)
	.file(file)
	.filter(type)
	.flatten()
	.flip()
	.flop()
	.foreground(color)
	.frame(width, height, width, height)
	.fuzz(distance)
	.fuzz(distance, usePercent)
	.gamma(r, b, g)
	.gaussian(radius)
	.gaussian(radius, sigma)
	.geometry(width, height)
	.geometry(width, height, options)
	.geometry(geometry)
	.greenPrimary(x, y)
	.gravity(direction)
	.highlightColor(color)
	.highlightStyle(type)
	.iconGeometry(geometry)
	.implode()
	.implode(factor)
	.in(...customInArguments)
	.intent(type)
	.interlace(type)
	.label(name)
	.lat(width, height, offset)
	.lat(width, height, offset, usePercent)
	.level(blackPoint, gamma, whitePoint)
	.level(blackPoint, gamma, whitePoint, usePercent)
	.limit(type, limit)
	.list(type)
	.log(format)
	.loop(iterations)
	.lower(width, height)
	.magnify(factor)
	.map(file)
	.mask(file)
	.matte()
	.matteColor(color)
	.maximumError(count)
	.median()
	.median(radius)
	.minify(factor)
	.mode(type)
	.modulate(b, s, h)
	.monitor()
	.monochrome()
	.montage(src)
	.morph(src, dest)
	.morph(src, dest, (err, stdout, stderr, cmd) => {
	})
	.morph(images, dest)
	.morph(images, dest, (err, stdout, stderr, cmd) => {
	})
	.mosaic()
	.motionBlur(radius)
	.motionBlur(radius, sigma)
	.motionBlur(radius, sigma, angle)
	.name()
	.negative()
	.noise(type)
	.noise(radius)
	.noop()
	.normalize()
	.opaque(color)
	.operator(channel, operator, factor)
	.operator(channel, operator, factor, usePercent)
	.orderedDither(channel, NxN)
	.out(...customOutArguments)
	.outputDirectory(dest)
	.page(width, height)
	.page(width, height, options)
	.pause(time)
	.pen(color)
	.ping()
	.pointSize(size)
	.noProfile()
	.preview(type)
	.paint(radius)
	.process(command)
	.profile(file)
	.progress()
	.randomThreshold(channel, NxN)
	.quality(factor)
	.raise(width, height)
	.recolor(matrix)
	.redPrimary(x, y)
	.region(width, height)
	.region(width, height, x, y)
	.remote()
	.render()
	.repage('+')
	.repage(width, height, x, y)
	.repage(width, height, x, y, options)
	.sample(geometry)
	.samplingFactor(factor, factor)
	.rawSize(width, height)
	.rawSize(width, height, offset)
	.resample(width, height)
	.resize(width, height)
	.resize(width, height, options)
	.roll(x, y)
	.rotate(color, angle)
	.scene(index)
	.scenes(index, index)
	.scale(width, height)
	.screen()
	.segment(threshold, threshold)
	.sepia()
	.set(attribute, attrValue)
	.setFormat(format)
	.shade(angle, distance)
	.shadow(radius)
	.shadow(radius, sigma)
	.sharedMemory()
	.shave(width, height)
	.shave(width, height, usePercent)
	.sharpen(radius)
	.sharpen(radius, sigma)
	.shear(angle, angle)
	.silent()
	.snaps(count)
	.solarize(threshold)
	.spread(distance)
	.stegano(offset)
	.stereo()
	.strip()
	.swirl(angle)
	.textFont(font)
	.threshold(threshold)
	.threshold(threshold, usePercent)
	.thumb(width, height, dest, (err, stdout, stderr, cmd) => {
	})
	.thumb(width, height, dest, quality, (err, stdout, stderr, cmd) => {
	})
	.thumb(width, height, dest, quality, align, (err, stdout, stderr, cmd) => {
	})
	.tile(file)
	.title(name)
	.transform(color)
	.transparent(color)
	.treeDepth(depth)
	.trim()
	.type(type)
	.update(time)
	.units(type)
	.unsharp(radius)
	.unsharp(radius, sigma)
	.unsharp(radius, sigma, factor)
	.unsharp(radius, sigma, factor, threshold)
	.usePixmap()
	.view()
	.virtualPixel(method)
	.visual(type)
	.watermark(b, s)
	.wave(factor, distance)
	.whitePoint(x, y)
	.whiteThreshold(intensity)
	.whiteThreshold(r, g, b)
	.whiteThreshold(r, g, b, opacity)
	.window(name)
	.windowGroup()
	.color((err, color) => {
	})
	.color({ bufferStream: true }, (err, color) => {
	})
	.depth((err, bitdepth) => {
	})
	.depth({ bufferStream: true }, (err, bitdepth) => {
	})
	.filesize((err, size) => {
	})
	.filesize({ bufferStream: true }, (err, size) => {
	})
	.format((err, format) => {
	})
	.format({ bufferStream: true }, (err, format) => {
	})
	.identify((err, info) => {
	})
	.identify(customFormat, (err, info) => {
	})
	.identify({ bufferStream: true }, (err, info) => {
	})
	.res((err, resolution) => {
	})
	.res({ bufferStream: true }, (err, resolution) => {
	})
	.size((err, size) => {
	})
	.size({ bufferStream: true }, (err, size) => {
	})
	.orientation((err, orient) => {
	})
	.orientation({ bufferStream: true }, (err, orient) => {
	})
	.draw(options)
	.drawArc(x, y, x, y, radius, radius)
	.drawBezier([x, y], [x, y])
	.drawBezier([x, y], [x, y], [x, y])
	.drawBezier([x, y], [x, y], [x, y], [x, y])
	.drawCircle(x, y, x, y)
	.drawEllipse(x, y, radius, radius, radius, radius)
	.drawLine(x, y, x, y)
	.drawPoint(x, y)
	.drawPolygon([x, y], [x, y], [x, y])
	.drawPolygon([x, y], [x, y], [x, y], [x, y])
	.drawPolyline([x, y], [x, y], [x, y])
	.drawPolyline([x, y], [x, y], [x, y], [x, y])
	.drawRectangle(x, y, x, y)
	.drawRectangle(x, y, x, y, radius)
	.drawRectangle(x, y, x, y, radius, radius)
	.drawText(x, y, name, direction)
	.fill(color)
	.font(font)
	.font(font, size)
	.fontSize(size)
	.stroke(color)
	.stroke(color, width)
	.setDraw(type, x, y, method)
	.write(dest, (err, stdout, stderr, cmd) => {
	});

gm.compare(file, file, (err, isEqual, equality, raw) => {
});

readStream = gm(src).stream();
readStream = gm(src).stream(format);
readStream = gm(src).stream(format, (err, stdout, stderr, cmd) => {
});

gm(src).toBuffer((err, buffer) => {
});
gm(src).toBuffer(format, (err, buffer) => {
});

const imageMagick = gm.subClass({ imageMagick: true });
readStream = imageMagick(src)
	.adjoin()
    .stream();

const customGm = gm.subClass({ appPath: '' });
readStream = customGm(src).stream();

const passStream = imageMagick(readStream).stream();

const buffers: Buffer[] = [];
let buffer: Buffer;
passStream.on('data', (chunk) => buffers.push(chunk as Buffer)).on('close', () => {
	buffer = Buffer.concat(buffers);
	const readstream = imageMagick(buffer).stream();
});
