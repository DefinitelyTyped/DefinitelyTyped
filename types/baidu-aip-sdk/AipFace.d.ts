export = AipFace;
/**
 * AipFace类
 *
 * @param {string} appid appid.
 * @param {string} ak  access key.
 * @param {string} sk  security key.
 */
declare class AipFace extends BaseClient {
    constructor(appId: any, ak: any, sk: any);
    commonImpl(param: any): any;
    /**
     * 人脸检测接口
     *
     * @param {string} image - 图片信息(**总数据大小应小于10M**)，图片上传方式根据image_type来判断
     * @param {string} imageType - 图片类型     <br> **BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M； <br>**URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)； <br>**FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   face_field 包括**age,beauty,expression,face_shape,gender,glasses,landmark,landmark72，landmark150，race,quality,eye_status,emotion,face_type信息**  <br> 逗号分隔. 默认只返回face_token、人脸框、概率和旋转角度
     *   max_face_num 最多处理人脸的数目，默认值为1，仅检测图片中面积最大的那个人脸；**最大值10**，检测图片中面积最大的几张人脸。
     *   face_type 人脸的类型 **LIVE**表示生活照：通常为手机、相机拍摄的人像图片、或从网络获取的人像图片等**IDCARD**表示身份证芯片照：二代身份证内置芯片中的人像照片 **WATERMARK**表示带水印证件照：一般为带水印的小图，如公安网小图 **CERT**表示证件照片：如拍摄的身份证、工卡、护照、学生证等证件图片 默认**LIVE**
     *   liveness_control 活体检测控制  **NONE**: 不进行控制 **LOW**:较低的活体要求(高通过率 低攻击拒绝率) **NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率) **HIGH**: 较高的活体要求(高攻击拒绝率 低通过率) **默认NONE**
     * @return {Promise} - 标准Promise对象
     */
    detect(image: string, imageType: string, options: any): Promise<any>;
    /**
     * 人脸搜索接口
     *
     * @param {string} image - 图片信息(**总数据大小应小于10M**)，图片上传方式根据image_type来判断
     * @param {string} imageType - 图片类型     <br> **BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M； <br>**URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)； <br>**FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。
     * @param {string} groupIdList - 从指定的group中进行查找 用逗号分隔，**上限20个**
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   max_face_num 最多处理人脸的数目<br>**默认值为1(仅检测图片中面积最大的那个人脸)** **最大值10**
     *   match_threshold 匹配阈值（设置阈值后，score低于此阈值的用户信息将不会返回） 最大100 最小0 默认80 <br>**此阈值设置得越高，检索速度将会越快，推荐使用默认阈值`80`**
     *   quality_control 图片质量控制  **NONE**: 不进行控制 **LOW**:较低的质量要求 **NORMAL**: 一般的质量要求 **HIGH**: 较高的质量要求 **默认 NONE**
     *   liveness_control 活体检测控制  **NONE**: 不进行控制 **LOW**:较低的活体要求(高通过率 低攻击拒绝率) **NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率) **HIGH**: 较高的活体要求(高攻击拒绝率 低通过率) **默认NONE**
     *   user_id 当需要对特定用户进行比对时，指定user_id进行比对。即人脸认证功能。
     *   max_user_num 查找后返回的用户数量。返回相似度最高的几个用户，默认为1，最多返回50个。
     * @return {Promise} - 标准Promise对象
     */
    search(image: string, imageType: string, groupIdList: string, options: any): Promise<any>;
    /**
     * 人脸搜索 M:N 识别接口
     *
     * @param {string} image - 图片信息(**总数据大小应小于10M**)，图片上传方式根据image_type来判断
     * @param {string} imageType - 图片类型     <br> **BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M； <br>**URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)； <br>**FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。
     * @param {string} groupIdList - 从指定的group中进行查找 用逗号分隔，**上限20个**
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   max_face_num 最多处理人脸的数目<br>**默认值为1(仅检测图片中面积最大的那个人脸)** **最大值10**
     *   match_threshold 匹配阈值（设置阈值后，score低于此阈值的用户信息将不会返回） 最大100 最小0 默认80 <br>**此阈值设置得越高，检索速度将会越快，推荐使用默认阈值`80`**
     *   quality_control 图片质量控制  **NONE**: 不进行控制 **LOW**:较低的质量要求 **NORMAL**: 一般的质量要求 **HIGH**: 较高的质量要求 **默认 NONE**
     *   liveness_control 活体检测控制  **NONE**: 不进行控制 **LOW**:较低的活体要求(高通过率 低攻击拒绝率) **NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率) **HIGH**: 较高的活体要求(高攻击拒绝率 低通过率) **默认NONE**
     *   max_user_num 查找后返回的用户数量。返回相似度最高的几个用户，默认为1，最多返回50个。
     * @return {Promise} - 标准Promise对象
     */
    multiSearch(image: string, imageType: string, groupIdList: string, options: any): Promise<any>;
    /**
     * 人脸注册接口
     *
     * @param {string} image - 图片信息(总数据大小应小于10M)，图片上传方式根据image_type来判断。注：组内每个uid下的人脸图片数目上限为20张
     * @param {string} imageType - 图片类型     <br> **BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M； <br>**URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)； <br>**FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   user_info 用户资料，长度限制256B
     *   quality_control 图片质量控制  **NONE**: 不进行控制 **LOW**:较低的质量要求 **NORMAL**: 一般的质量要求 **HIGH**: 较高的质量要求 **默认 NONE**
     *   liveness_control 活体检测控制  **NONE**: 不进行控制 **LOW**:较低的活体要求(高通过率 低攻击拒绝率) **NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率) **HIGH**: 较高的活体要求(高攻击拒绝率 低通过率) **默认NONE**
     *   action_type 操作方式  APPEND: 当user_id在库中已经存在时，对此user_id重复注册时，新注册的图片默认会追加到该user_id下,REPLACE : 当对此user_id重复注册时,则会用新图替换库中该user_id下所有图片,默认使用APPEND
     * @return {Promise} - 标准Promise对象
     */
    addUser(image: string, imageType: string, groupId: string, userId: string, options: any): Promise<any>;
    /**
     * 人脸更新接口
     *
     * @param {string} image - 图片信息(**总数据大小应小于10M**)，图片上传方式根据image_type来判断
     * @param {string} imageType - 图片类型     <br> **BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M； <br>**URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)； <br>**FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。
     * @param {string} groupId - 更新指定groupid下uid对应的信息
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   user_info 用户资料，长度限制256B
     *   quality_control 图片质量控制  **NONE**: 不进行控制 **LOW**:较低的质量要求 **NORMAL**: 一般的质量要求 **HIGH**: 较高的质量要求 **默认 NONE**
     *   liveness_control 活体检测控制  **NONE**: 不进行控制 **LOW**:较低的活体要求(高通过率 低攻击拒绝率) **NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率) **HIGH**: 较高的活体要求(高攻击拒绝率 低通过率) **默认NONE**
     *   action_type 操作方式  APPEND: 当user_id在库中已经存在时，对此user_id重复注册时，新注册的图片默认会追加到该user_id下,REPLACE : 当对此user_id重复注册时,则会用新图替换库中该user_id下所有图片,默认使用APPEND
     * @return {Promise} - 标准Promise对象
     */
    updateUser(image: string, imageType: string, groupId: string, userId: string, options: any): Promise<any>;
    /**
     * 人脸删除接口
     *
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {string} faceToken - 需要删除的人脸图片token，（由数字、字母、下划线组成）长度限制64B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    faceDelete(userId: string, groupId: string, faceToken: string, options: any): Promise<any>;
    /**
     * 用户信息查询接口
     *
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    getUser(userId: string, groupId: string, options: any): Promise<any>;
    /**
     * 获取用户人脸列表接口
     *
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    faceGetlist(userId: string, groupId: string, options: any): Promise<any>;
    /**
     * 获取用户列表接口
     *
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   start 默认值0，起始序号
     *   length 返回数量，默认值100，最大值1000
     * @return {Promise} - 标准Promise对象
     */
    getGroupUsers(groupId: string, options: any): Promise<any>;
    /**
     * 复制用户接口
     *
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   src_group_id 从指定组里复制信息
     *   dst_group_id 需要添加用户的组id
     * @return {Promise} - 标准Promise对象
     */
    userCopy(userId: string, options: any): Promise<any>;
    /**
     * 删除用户接口
     *
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {string} userId - 用户id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    deleteUser(groupId: string, userId: string, options: any): Promise<any>;
    /**
     * 创建用户组接口
     *
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    groupAdd(groupId: string, options: any): Promise<any>;
    /**
     * 删除用户组接口
     *
     * @param {string} groupId - 用户组id（由数字、字母、下划线组成），长度限制128B
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     * @return {Promise} - 标准Promise对象
     */
    groupDelete(groupId: string, options: any): Promise<any>;
    /**
     * 组列表查询接口
     *
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   start 默认值0，起始序号
     *   length 返回数量，默认值100，最大值1000
     * @return {Promise} - 标准Promise对象
     */
    getGrouplist(options: any): Promise<any>;
    /**
     * 身份验证接口
     *
     * @param {string} image - 图片信息(**总数据大小应小于10M**)，图片上传方式根据image_type来判断
     * @param {string} imageType - 图片类型     <br> **BASE64**:图片的base64值，base64编码后的图片数据，编码后的图片大小不超过2M； <br>**URL**:图片的 URL地址( 可能由于网络等原因导致下载图片时间过长)； <br>**FACE_TOKEN**: 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的FACE_TOKEN，同一张图片多次检测得到的FACE_TOKEN是同一个。
     * @param {string} idCardNumber - 身份证号（真实身份证号号码）
     * @param {string} name - utf8，姓名（真实姓名，和身份证号匹配）
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   quality_control 图片质量控制  **NONE**: 不进行控制 **LOW**:较低的质量要求 **NORMAL**: 一般的质量要求 **HIGH**: 较高的质量要求 **默认 NONE**
     *   liveness_control 活体检测控制  **NONE**: 不进行控制 **LOW**:较低的活体要求(高通过率 低攻击拒绝率) **NORMAL**: 一般的活体要求(平衡的攻击拒绝率, 通过率) **HIGH**: 较高的活体要求(高攻击拒绝率 低通过率) **默认NONE**
     * @return {Promise} - 标准Promise对象
     */
    personVerify(image: string, imageType: string, idCardNumber: string, name: string, options: any): Promise<any>;
    /**
     * 语音校验码接口接口
     *
     * @param {Object} options - 可选参数对象，key: value都为string类型
     * @description options - options列表:
     *   appid 百度云创建应用时的唯一标识ID
     * @return {Promise} - 标准Promise对象
     */
    videoSessioncode(options: any): Promise<any>;
    /**
     * 在线活体检测
     *
     * @param {Object} param - 参数对象数组
     * @return {Promise} - 标准Promise对象
     * > 说明：两张图片的对象举例：
     * >
     * > [
     * >     {
     * >         "image": "sfasq35sadvsvqwr5q...",
     * >         "image_type": "BASE64",
     * >         "face_field": "quality"
     * >     },
     * >     {
     * >         "image": "sfasq35sadvsvqwr5q...",
     * >         "image_type": "BASE64",
     * >         "face_field": "quality"
     * >     }
     * > ]
     */
    faceverify(object: any): Promise<any>;
    /**
     * 人脸比对接口
     *
     * @param {Object} param - 参数对象数组
     * @return {Promise} - 标准Promise对象
     * > 说明：两张图片的对象举例：
     * >
     * > [
     * >     {
     * >         "image": "sfasq35sadvsvqwr5q...",
     * >         "image_type": "BASE64",
     * >         "face_type": "LIVE",
     * >         "quality_control": "LOW",
     * >         "liveness_control": "HIGH"
     * >     },
     * >     {
     * >         "image": "sfasq35sadvsvqwr5q...",
     * >         "image_type": "BASE64",
     * >         "face_type": "IDCARD",
     * >         "quality_control": "LOW",
     * >         "liveness_control": "HIGH"
     * >     }
     * > ]
     */
    match(object: any): Promise<any>;
}
import BaseClient = require("./client/baseClient");
