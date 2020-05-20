/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                    *
 *     build info:                                                               *
 *       - fibjs    : 0.25.0                                                   *
 *       - date    : Jun 12 2018 07:22:40                                     *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */





/// <reference path="Buffer.d.ts" />

/// <reference path="BufferedStream.d.ts" />

/// <reference path="Chain.d.ts" />

/// <reference path="Cipher.d.ts" />

/// <reference path="Condition.d.ts" />

/// <reference path="DbConnection.d.ts" />

/// <reference path="DgramSocket.d.ts" />

/// <reference path="Digest.d.ts" />

/// <reference path="Event.d.ts" />

/// <reference path="EventEmitter.d.ts" />

/// <reference path="EventInfo.d.ts" />

/// <reference path="Fiber.d.ts" />

/// <reference path="File.d.ts" />

/// <reference path="Handler.d.ts" />

/// <reference path="HandlerEx.d.ts" />

/// <reference path="HeapGraphEdge.d.ts" />

/// <reference path="HeapGraphNode.d.ts" />

/// <reference path="HeapSnapshot.d.ts" />

/// <reference path="HttpClient.d.ts" />

/// <reference path="HttpCollection.d.ts" />

/// <reference path="HttpCookie.d.ts" />

/// <reference path="HttpHandler.d.ts" />

/// <reference path="HttpMessage.d.ts" />

/// <reference path="HttpRequest.d.ts" />

/// <reference path="HttpResponse.d.ts" />

/// <reference path="HttpServer.d.ts" />

/// <reference path="HttpUploadData.d.ts" />

/// <reference path="HttpsServer.d.ts" />

/// <reference path="Image.d.ts" />

/// <reference path="Int64.d.ts" />

/// <reference path="LevelDB.d.ts" />

/// <reference path="Lock.d.ts" />

/// <reference path="LruCache.d.ts" />

/// <reference path="MSSQL.d.ts" />

/// <reference path="MemoryStream.d.ts" />

/// <reference path="Message.d.ts" />

/// <reference path="MongoCollection.d.ts" />

/// <reference path="MongoCursor.d.ts" />

/// <reference path="MongoDB.d.ts" />

/// <reference path="MongoID.d.ts" />

/// <reference path="MySQL.d.ts" />

/// <reference path="PKey.d.ts" />

/// <reference path="Redis.d.ts" />

/// <reference path="RedisHash.d.ts" />

/// <reference path="RedisList.d.ts" />

/// <reference path="RedisSet.d.ts" />

/// <reference path="RedisSortedSet.d.ts" />

/// <reference path="Routing.d.ts" />

/// <reference path="SQLite.d.ts" />

/// <reference path="SandBox.d.ts" />

/// <reference path="SeekableStream.d.ts" />

/// <reference path="Semaphore.d.ts" />

/// <reference path="Service.d.ts" />

/// <reference path="Smtp.d.ts" />

/// <reference path="Socket.d.ts" />

/// <reference path="SslHandler.d.ts" />

/// <reference path="SslServer.d.ts" />

/// <reference path="SslSocket.d.ts" />

/// <reference path="Stat.d.ts" />

/// <reference path="Stats.d.ts" />

/// <reference path="Stream.d.ts" />

/// <reference path="StringDecoder.d.ts" />

/// <reference path="SubProcess.d.ts" />

/// <reference path="TcpServer.d.ts" />

/// <reference path="Timer.d.ts" />

/// <reference path="UrlObject.d.ts" />

/// <reference path="WebSocket.d.ts" />

/// <reference path="WebSocketMessage.d.ts" />

/// <reference path="WebView.d.ts" />

/// <reference path="Worker.d.ts" />

/// <reference path="X509Cert.d.ts" />

/// <reference path="X509Crl.d.ts" />

/// <reference path="X509Req.d.ts" />

/// <reference path="XmlAttr.d.ts" />

/// <reference path="XmlCDATASection.d.ts" />

/// <reference path="XmlCharacterData.d.ts" />

/// <reference path="XmlComment.d.ts" />

/// <reference path="XmlDocument.d.ts" />

/// <reference path="XmlDocumentType.d.ts" />

/// <reference path="XmlElement.d.ts" />

/// <reference path="XmlNamedNodeMap.d.ts" />

/// <reference path="XmlNode.d.ts" />

/// <reference path="XmlNodeList.d.ts" />

/// <reference path="XmlProcessingInstruction.d.ts" />

/// <reference path="XmlText.d.ts" />

/// <reference path="ZipFile.d.ts" />

/// <reference path="ZmqSocket.d.ts" />

/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
    * @brief 图像文件处理模块
    * @detail 基础模块。可用于创建和操作图像文件，引用方式：,```JavaScript,var gd = require('gd');,```
    */
declare module "gd" {
    

    module gd {
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为未知
         * 
         * 
         */
        export const NONE = 0;
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为 jpeg 格式数据
         * 
         * 
         */
        export const JPEG = 1;
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为 gif 格式数据
         * 
         * 
         */
        export const GIF = 2;
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为 png 格式数据
         * 
         * 
         */
        export const PNG = 3;
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为 tiff 格式数据
         * 
         * 
         */
        export const TIFF = 4;
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为 bmp 格式数据
         * 
         * 
         */
        export const BMP = 5;
        
        /**
         * 
         * @brief 图像格式常量，标示当前图像来源为 webp 格式数据
         * 
         * 
         */
        export const WEBP = 6;
        
        /**
         * 
         * @brief 图像类型常量，标示当前图像为真彩色图像
         * 
         * 
         */
        export const TRUECOLOR = 0;
        
        /**
         * 
         * @brief 图像类型常量，标示当前图像为调色板图像
         * 
         * 
         */
        export const PALETTE = 1;
        
        /**
         * 
         * @brief 扇形绘制样式，绘制一条连接开始和结束点的圆弧
         * 
         * 
         */
        export const ARC = 0;
        
        /**
         * 
         * @brief 扇形绘制样式，绘制一条连接原点，开始和结束点的直线
         * 
         * 
         */
        export const CHORD = 1;
        
        /**
         * 
         * @brief 扇形绘制样式，绘制不填充的扇形
         * 
         * 
         */
        export const NOFILL = 2;
        
        /**
         * 
         * @brief 扇形绘制样式，绘制一条连接起点和终点的弧和连接原点的直线
         * 
         * 
         */
        export const EDGED = 4;
        
        /**
         * 
         * @brief 镜像方向，横向做镜像处理
         * 
         * 
         */
        export const HORIZONTAL = 1;
        
        /**
         * 
         * @brief 镜像方向，纵向做镜像处理
         * 
         * 
         */
        export const VERTICAL = 2;
        
        /**
         * 
         * @brief 镜像方向，横向和纵向都做镜像处理
         * 
         * 
         */
        export const BOTH = 3;
        
        /**
         * 
         * @brief 旋转方向，向左旋转
         * 
         * 
         */
        export const LEFT = 1;
        
        /**
         * 
         * @brief 旋转方向，向右旋转
         * 
         * 
         */
        export const RIGHT = 2;
        
        /**
         * 
         * @brief 滤波器类型：用平均移除法来达到轮廓效果
         * 
         * 
         */
        export const MEAN_REMOVAL = 0;
        
        /**
         * 
         * @brief 滤波器类型：用边缘检测来突出图像的边缘
         * 
         * 
         */
        export const EDGEDETECT = 1;
        
        /**
         * 
         * @brief 滤波器类型：使图像浮雕化
         * 
         * 
         */
        export const EMBOSS = 2;
        
        /**
         * 
         * @brief 滤波器类型：模糊图像
         * 
         * 
         */
        export const SELECTIVE_BLUR = 3;
        
        /**
         * 
         * @brief 滤波器类型：用高斯算法模糊图像
         * 
         * 
         */
        export const GAUSSIAN_BLUR = 4;
        
        /**
         * 
         * @brief 滤波器类型：将图像中所有颜色反转
         * 
         * 
         */
        export const NEGATE = 5;
        
        /**
         * 
         * @brief 滤波器类型：将图像转换为灰度图
         * 
         * 
         */
        export const GRAYSCALE = 6;
        
        /**
         * 
         * @brief 滤波器类型：使图像更柔滑，用arg1设定柔滑级别
         * 
         * 
         */
        export const SMOOTH = 7;
        
        /**
         * 
         * @brief 滤波器类型：改变图像的亮度，用arg1设定亮度级别，取值范围是-255~255
         * 
         * 
         */
        export const BRIGHTNESS = 8;
        
        /**
         * 
         * @brief 滤波器类型：改变图像的对比度，用arg1设定对比度级别，取值范围是0~100
         * 
         * 
         */
        export const CONTRAST = 9;
        
        /**
         * 
         * @brief 滤波器类型：改变图像的色调，用arg1、arg2、arg3分别指定red、blue、green，每种颜色范围是0~255，arg4为透明度，取值返回是0~127
         * 
         * 
         */
        export const COLORIZE = 10;
        
        
        
        
        
        /**
         * 
         * @brief 创建一个新图像
         * @param width 指定图像宽度
         * @param height 指定图像高度
         * @param color 指定图像类型，允许值为 gd.TRUECOLOR 或 gd.PALETTE
         * @return 返回创建成功的图像对象
         * 
         * 
         * @async
         */
        export function create(width: number, height: number, color?: number/** = undefined*/): Class_Image;
    
        /**
         * 
         * @brief 从格式数据中解码图像
         * @param data 给定解码的图像数据
         * @return 返回解码成功的图像对象
         * 
         * 
         * @async
         */
        export function load(data: Class_Buffer): Class_Image;
    
        /**
         * 
         * @brief 从流对象中解码图像
         * @param stm 给定图像数据所在的流对象
         * @return 返回解码成功的图像对象
         * 
         * 
         * @async
         */
        export function load(stm: Class_SeekableStream): Class_Image;
    
        /**
         * 
         * @brief 从指定文件中解码图像
         * @param fname 指定文件名
         * @return 返回解码成功的图像对象
         * 
         * 
         * @async
         */
        export function load(fname: string): Class_Image;
    
        /**
         * 
         * @brief 通过 rgb 颜色分量生成组合颜色
         * @param red 红色分量，范围为 0-255
         * @param green 绿色分量，范围为 0-255
         * @param blue 蓝色分量，范围为 0-255
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function rgb(red: number, green: number, blue: number): number;
    
        /**
         * 
         * @brief 通过 rgba 颜色分量生成组合颜色
         * @param red 红色分量，范围为 0-255
         * @param green 绿色分量，范围为 0-255
         * @param blue 蓝色分量，范围为 0-255
         * @param alpha 透明分量，范围为 0.0-1.0
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function rgba(red: number, green: number, blue: number, alpha: number): number;
    
        /**
         * 
         * @brief 通过 hsl 颜色分量生成组合颜色
         * @param hue 色相分量，范围为 0-360
         * @param saturation 饱和度分量，范围为 0.0-1.0
         * @param lightness 亮度分量，范围为 0.0-1.0
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function hsl(hue: number, saturation: number, lightness: number): number;
    
        /**
         * 
         * @brief 通过 hsla 颜色分量生成组合颜色
         * @param hue 色相分量，范围为 0-360
         * @param saturation 饱和度分量，范围为 0.0-1.0
         * @param lightness 亮度分量，范围为 0.0-1.0
         * @param alpha 透明分量，范围为 0.0-1.0
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function hsla(hue: number, saturation: number, lightness: number, alpha: number): number;
    
        /**
         * 
         * @brief 通过 hsb 颜色分量生成组合颜色
         * @param hue 色相分量，范围为 0-360
         * @param saturation 饱和度分量，范围为 0.0-1.0
         * @param brightness 明亮程度分量，范围为 0.0-1.0
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function hsb(hue: number, saturation: number, brightness: number): number;
    
        /**
         * 
         * @brief 通过 hsba 颜色分量生成组合颜色
         * @param hue 色相分量，范围为 0-360
         * @param saturation 饱和度分量，范围为 0.0-1.0
         * @param brightness 明亮程度分量，范围为 0.0-1.0
         * @param alpha 透明分量，范围为 0.0-1.0
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function hsba(hue: number, saturation: number, brightness: number, alpha: number): number;
    
        /**
         * 
         * @brief 通过字符串生成组合颜色
         * @param color 指定颜色的字符串，如："#ff0000", "ff0000", "#f00", "f00"
         * @return 返回组合颜色
         * 
         * 
         * 
         */
        export function color(color: string): number;
    
    } /** end of `module gd` */
    export = gd
}

/** endof `module Or Internal Object` */


