/**
 * 图片上传
 * @param file 通过input:file得到的文件，或者直接传入的图片路径
 * @param options 具体请查看uploadman参数配置:http://itest.dfzq.com.cn/document/fastman-v2/component/fileupload.html
 */
export function upload(
  file: File,
  options?: {
    width?: number,
    height?: number,
    quality?: number,
    fieldName?: string
  }
): Promise<any>;
