// Type definitions for qiniu-js 2.4
// Project: https://github.com/qiniu/js-sdk#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace qiniu;

export interface Next {
	total: {
		loaded: number;	// 已上传大小，单位为字节。
		total: number;	// 本次上传的总量控制信息，单位为字节，注意这里的 total 跟文件大小并不一致。
		percent: number;	// 当前上传进度，范围：0～100。
	};
}

export interface Error {
	code: number;	// 请求错误状态码，只有在 err.isRequestError 为 true 的时候才有效。可查阅码值对应说明。
	message: string;	// 错误信息，包含错误码，当后端返回提示信息时也会有相应的错误信息。
	isRequestError: true | undefined;	// 用于区分是否 xhr 请求错误；当 xhr 请求出现错误并且后端通过 HTTP 状态码返回了错误信息时，该参数为 true；否则为 undefined 。
	reqId: string;	// xhr请求错误的 X-Reqid。
}

export interface AudioInfo {
	bit_rate: string;
	channels: number;
	codec_name: string;
	codec_type: string;
	duration: string;
	index: number;
	nb_frames: string;
	r_frame_rate: string;
	sample_fmt: string;
	sample_rate: string;
	start_time: string;
	tags: {
		creation_time: string;
		[key: string]: string;
	};
}

export interface AvFormat {
	bit_rate: string;
	duration: string;
	format_long_name: string;
	format_name: string;
	nb_streams: number;
	size: string;
	start_time: string;
	tags: {
		creation_time: string;
		[key: string]: string;
	};
}

export interface VideoInfo {
	bit_rate: string;
	codec_name: string;
	codec_type: string;
	display_aspect_ratio: string;
	duration: string;
	height: number;
	index: number;
	nb_frames: string;
	pix_fmt: string;
	r_frame_rate: string;
	sample_aspect_ratio: string;
	start_time: string;
	tags: {
		creation_time: string;
		[key: string]: string;
	};
	width: number;
}

export interface AvAudioInfo {
	audio: AudioInfo;
	format: AvFormat;
	video: VideoInfo;
}

export interface AvImageInfo {
	format: string;
	width: number;
	height: number;
	colorModel: string;
}

export interface CompletedResult {
	avinfo?: AvAudioInfo;
	imageInfo?: AvImageInfo;
	key: string;
	name: string;
	size: number;
	persistentid: string;
	sec: string;
	ext: string;
	bucket: string;
}

export interface Observer {
	next(res: Next): void;
	error(err: Error | string): void;
	complete(res: CompletedResult): void;
}

export interface Subscription {
	unsubscribe(): void;
}

export interface Observable {
	subscribe(options: Observer): Subscription;
	/**
	 * 订阅
	 *
	 * @param next 接收上传进度信息
	 * @param error 上传错误后触发；自动重试本身并不会触发该错误，而当重试次数到达上限后则可以触发。当不是 xhr 请求错误时，会把当前错误产生原因直接抛出，诸如 JSON 解析异常等；当产生 xhr 请求错误时，参数 err 为一个包含 code、message、isRequestError 三个属性的 object
	 * @param complete 接收上传完成后的后端返回信息，具体返回结构取决于后端sdk的配置，可参考[上传策略](https://developer.qiniu.com/kodo/manual/1206/put-policy)。
	 * @returns
	 */
	subscribe(next: (obj: Next) => void, error?: (err: Error | string) => void, complete?: (obj: CompletedResult) => void): Subscription;
}

export interface Extra {
	fname: string;	// 文件原文件名
	params: any;	// 用来放置自定义变量
	mimeType: string[] | null;	// 用来限制上传文件类型，为 null 时表示不对文件类型限制；限制类型放到数组里： ["image/png", "image/jpeg", "image/gif"]
}

export interface Config {
	useCdnDomain: boolean;
	region: Region | string;
}

/**
 * 上传文件
 * @param file Blob 对象，上传的文件
 * @param key 文件资源名
 * @param token 上传验证信息，前端通过接口请求后端获得
 * @param putExtra
 * @param config
 */
export function upload(file: Blob, key: string | null | undefined, token: string, putExtra: Partial<Extra>, config: Partial<Config>): Observable;

/**
 * 返回创建文件的 url；当分片上传时，我们需要把分片返回的 ctx 信息拼接后通过该 url 上传给七牛以创建文件。
 *
 * @param url 上传域名，可以通过qiniu.getUploadUrl()获得
 * @param size 文件大小
 * @param key 文件资源名
 * @param putExtra
 * @returns
 */
export function createMkFileUrl(url: string, size: number, key: string, putExtra: Partial<Extra>): string;

export enum Region {
	z0,	// 代表华东区域
	z1,		// 代表华北区域
	z2,		// 代表华南区域
	na0,		// 代表北美区域
	as0		// 代表新加坡区域
}

export namespace region {
	const z0: Region;
	const z1: Region;
	const z2: Region;
	const na0: Region;
	const as0: Region;
}

/**
 * 接收参数为 config 对象，返回根据 config 里所配置信息的上传域名
 *
 * @param config
 * @param token
 * @returns
 */
export function getUploadUrl(config: Partial<Config>, token: string): Promise<string>;

export interface Headers {
	[key: string]: string;
}

/**
 * 返回 object，包含用来获得分片上传设置的头信息，参数为 token 字符串；当分片上传时，请求需要带该函数返回的头信息
 *
 * @param token
 * @returns
 */
export function getHeadersForChunkUpload(token: string): Headers;

/**
 * 返回 object，包含用来获得文件创建的头信息，参数为 token 字符串；当分片上传完需要把 ctx 信息传给七牛用来创建文件时，请求需要带该函数返回的头信息
 *
 * @param token
 * @returns
 */
export function getHeadersForMkFile(token: string): Headers;

/**
 * 返回[[k, v],...]格式的数组，k 为自定义变量 key 名，v 为自定义变量值，用来提取 putExtra.params 包含的自定义变量
 *
 * @param params
 * @returns
 */
export function filterParams(params: any): Array<[string, any]>;

export interface CompressOptions {
	quality: number;	// 图片压缩质量，在图片格式为 image/jpeg 或 image/webp 的情况下生效，其他格式不会生效，可以从 0 到 1 的区间内选择图片的质量。默认值 0.92
	maxWidh: number;	// 压缩图片的最大宽度值
	maxHeight: number;	// 压缩图片的最大高度值 （注意：当 maxWidth 和 maxHeight 都不设置时，则采用原图尺寸大小）
	noCompressIfLarger: boolean;	// 为 true 时如果发现压缩后图片大小比原来还大，则返回源图片（即输出的 dist 直接返回了输入的 file）；默认 false，即保证图片尺寸符合要求，但不保证压缩后的图片体积一定变小
}

/**
 * 上传前图片压缩
 *
 * @param file 要压缩的源图片，为 blob 对象，支持 image/png、image/jpeg、image/bmp、image/webp 这几种图片类型
 * @param options
 * @returns
 */
export function compressImage(file: Blob, options: Partial<CompressOptions>): Promise<{
	dist: Blob;	// 压缩后输出的 blob 对象，或原始的 file，具体看下面的 options 配置
	width: number;	// 压缩后的图片宽度
	height: number;	// 压缩后的图片高度
}>;

export interface WaterMarkOptions1 {
	mode: 1; // 图片水印
	image: string; // 图片水印的Url，mode = 1 时 **必需**
	dissolve: number; // 透明度，取值范围1-100，非必需，下同
	gravity: 'NorthWest' | 'North' | 'NorthEast' | 'West' | 'Center' | 'East' | 'SouthWest' | 'South' | 'SouthEast'; // 水印位置
	dx: number;  // 横轴边距，单位:像素(px)
	dy: number; // 纵轴边距，单位:像素(px)
}

export interface WaterMarkOptions2 {
	mode: 2;  // 文字水印
	text: string; // 水印文字，mode = 2 时 **必需**
	dissolve: number;          // 透明度，取值范围1-100，非必需，下同
	gravity: 'NorthWest' | 'North' | 'NorthEast' | 'West' | 'Center' | 'East' | 'SouthWest' | 'South' | 'SouthEast'; // 水印位置
	fontsize: number;         // 字体大小，单位: 缇
	font: string;           // 水印文字字体
	dx: number;               // 横轴边距，单位:像素(px)
	dy: number;               // 纵轴边距，单位:像素(px)
	fill: string;        // 水印文字颜色，RGB格式，可以是颜色名称
}

/**
 * 水印
 *
 * @param options 包含的具体水印参数解释见水印（[watermark](https://developer.qiniu.com/dora/manual/1316/image-watermarking-processing-watermark)）
 * @param key 文件资源名
 * @param domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取，前端可以通过接口请求后端得到
 * @returns 返回添加水印后的图片地址,可以赋值给 html 的 img 元素的 src 属性, 若未指定key，可以通过以下方式获得完整的 imgLink
 * `imgLink  =  '<domain>/<key>?' +  imgLink`
 * <domain> 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
 */
export function watermark(options: WaterMarkOptions1 | WaterMarkOptions2, key?: string, domain?: string): string;

export interface ImageView2Options {
	mode: 0 | 1 | 2 | 3 | 4 | 5;	// 缩略模式，共6种[0-5]
	w: number;	// 具体含义由缩略模式决定
	h: number;	// 具体含义由缩略模式决定
	q: number;	// 新图的图像质量，取值范围：1-100
	format: 'jpg' | 'gif' | 'png' | 'webp' | string;	// 新图的输出格式，取值范围：jpg，gif，png，webp等
}

/**
 * 缩略
 *
 * @param options 具体缩略参数解释见[图片基本处理（imageView2）](https://developer.qiniu.com/dora/manual/1279/basic-processing-images-imageview2)
 * @param key
 * @param domain
 * @returns 返回处理后的图片url
 */
export function imageView2(options: Partial<ImageView2Options>, key: string, domain: string): string;

export interface ImageMogr2Options {
	'auto-orient': boolean;		// 布尔值，是否根据原图EXIF信息自动旋正，便于后续处理，建议放在首位。
	strip: boolean;				// 布尔值，是否去除图片中的元信息
	thumbnail: string;			// 缩放操作参数
	crop: string;				// 裁剪操作参数
	gravity: string;			// 裁剪锚点参数
	quality: number;			// 图片质量，取值范围1-100
	rotate: number;			// 旋转角度，取值范围1-360，缺省为不旋转。
	format: string;				// 新图的输出格式，取值范围：jpg，gif，png，webp等
	blur: string;				// 高斯模糊参数
}

/**
 * 返回处理后的图片url
 *
 * @param optoins 具体高级图像处理参数解释见[图像高级处理（imageMogr2）](https://developer.qiniu.com/dora/manual/1270/the-advanced-treatment-of-images-imagemogr2)
 * @param key
 * @param domain
 * @returns 返回处理后的图片url
 */
export function imageMogr2(optoins: Partial<ImageMogr2Options>, key: string, domain: string): string;

export interface ImageInfo {
	size: number;							// 文件大小，单位：Bytes
	format: 'png' | 'jpeg' | 'gif' | 'bmp';	// 图片类型，如png、jpeg、gif、bmp等。
	width: number;							// 图片宽度，单位：像素(px) 。
	height: number;							// 图片高度，单位：像素(px) 。
	colorModel: string;						// 彩色空间，如palette16、ycbcr等。
	frameNumber: number;					// 帧数，gif 图片会返回此项。
}

/**
 *
 * 图片基本信息
 * 具体 imageInfo 解释见[图片基本信息（imageInfo）](https://developer.qiniu.com/dora/manual/1269/pictures-basic-information-imageinfo)
 *
 * @param key
 * @param domain
 * @returns
 */
export function imageInfo(key: string, domain: string): Promise<ImageInfo>;

export interface ExtendedInfo {
	code: number;
	error: string;
	[key: string]: {
		type: number;
		val: string;
	} | number | string;
}

export interface ExtentInfoValue {
	type: number;
	val: string;
}

export interface ExtentInfo {
	[key: string]: ExtentInfoValue;
	DateTime: ExtentInfoValue;
	ExposureBiasValue: ExtentInfoValue;
	ExposureTime: ExtentInfoValue;
	Model: ExtentInfoValue;
	ISOSpeedRatings: ExtentInfoValue;
	ResolutionUnit: ExtentInfoValue;
}

/**
 * EXIF 信息
 * 具体 exif 解释见[图片 EXIF 信息（exif）](https://developer.qiniu.com/dora/manual/1260/photo-exif-information-exif)
 * @param key
 * @param domain
 * @returns
 */
export function exif(key: string, domain: string): Promise<ExtentInfo>;

export interface WaterMarkFopOptions1 extends WaterMarkOptions1 {
	fop: 'watermark';
}

export interface WaterMarkFopOptions2 extends WaterMarkOptions2 {
	fop: 'watermark';
}

export interface ImageView2FopOptions extends ImageView2Options {
	fop: 'imageView2';
}

export interface ImageMogr2FopOptions extends ImageMogr2Options {
	fop: 'imageMogr2';
}

export function pipeline(fos: Array<(WaterMarkFopOptions1 | WaterMarkFopOptions2 | ImageView2FopOptions | ImageMogr2FopOptions)>, key: string, domain: string): string;
