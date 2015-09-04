/// <reference path="gm.d.ts" />
/// <reference path="../node/node.d.ts" />

import gm = require('gm');
import stream = require('stream');

var src: string;
var matrix: string;
var enable: boolean;
var ltr: boolean;
var password: string;
var bits: number;
var intensity: number;
var r: number;
var g: number;
var b: number;
var opacity: number;
var x: number;
var y: number;
var radius: number;
var sigma: number;
var width: number;
var height: number;
var color: string;
var channel: string;
var type: string;
var factor: number;
var numColors: number;
var operator: string;
var multiplier: number;
var kernel: string;
var usePercent: boolean;
var time: number;
var server: string;
var method: string;
var percent: number;
var encoding: string;
var options: string;
var file: string;
var distance: number;
var geometry: string;
var direction: string;
var name: string;
var offset: number;
var blackPoint: number;
var gamma: number;
var whitePoint: number;
var limit: string;
var format: string;
var iterations: number;
var count: number;
var b: number;
var s: number;
var h: number;
var dest: string;
var images: string[];
var angle: number;
var NxN: string;
var size: number;
var command: string;
var index: number;
var threshold: number;
var attribute: string;
var attrValue: string;
var format: string;
var font: string;
var quality: number;
var align: string;
var depth: number;
var readStream: stream.PassThrough;

gm(src)
	.adjoin()
	.affine(matrix)
	.antialias(enable)
	.append(src)
	.append(src, ltr)
	.authenticate(password)
	.autoOrient()
	.backdrop()
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
	.define()
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
	.depth((err, bitdepth) => {
	})
	.filesize((err, size) => {
	})
	.format((err, format) => {
	})
	.identify((err, info) => {
	})
	.res((err, resolution) => {
	})
	.size((err, size) => {
	})
	.orientation((err, orient) => {
	})
	.draw(options)
	.drawArc(x, y, x, y, radius, radius)
	.drawBezier(x, y, x, y)
	.drawBezier(x, y, x, y, x, y)
	.drawBezier(x, y, x, y, x, y, x, y)
	.drawCircle(x, y, x, y)
	.drawEllipse(x, y, radius, radius, radius, radius)
	.drawLine(x, y, x, y)
	.drawPoint(x, y)
	.drawPolygon(x, y, x, y, x, y)
	.drawPolygon(x, y, x, y, x, y, x, y)
	.drawPolyline(x, y, x, y, x, y)
	.drawPolyline(x, y, x, y, x, y, x, y)
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

var imageMagick = gm.subClass({ imageMagick: true });
var readStream = imageMagick(src)
	.adjoin()
	.stream();
