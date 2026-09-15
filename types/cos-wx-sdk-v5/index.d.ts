/**
 * 腾讯云 COS 微信小程序 SDK v1.8.0 类型声明
 */

/**
 * 定义 COS 命名空间，方便导出用到的变量类型给外部引用
 */
declare namespace COS {
  /** 存储桶的名称，命名规则为 BucketName-APPID，例如 examplebucket-1250000000 */
  type Bucket = string
  /** 存储桶所在地域 @see https://cloud.tencent.com/document/product/436/6224 */
  type Region = string
  /** 请求的对象键，最前面不带 /，例如 images/1.jpg */
  type Key = string
  /** 请求路径，最前面带 /，例如 /images/1.jpg */
  type Pathname = string
  /** 对象的版本 ID；当未启用版本控制时，该节点的值为空字符串；当启用版本控制时，启用版本控制之前的对象，其版本 ID 为 null；当暂停版本控制时，新上传的对象其版本 ID 为 null，且同一个对象最多只存在一个版本 ID 为 null 的对象版本 */
  type VersionId = string
  /** 前缀匹配，用来规定返回的文件前缀地址 */
  type Prefix = string
  /** 分块上传的任务 ID */
  type UploadId = string
  /** 标识本次分块上传的编号，范围在1 - 10000 */
  type PartNumber = number
  /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/images/1.jpg */
  type Location = string
  /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
  type ETag = string
  /** COS API 使用的时间字符串，为 ISO8601 格式，例如2019-05-24T10:56:40Z */
  type IsoDateTime = string
  /** 请求里的 Url Query 参数 */
  type Query = Record<string, unknown>
  /** 请求里的 Header 参数 */
  type Headers = Record<string, unknown>
  /** 请求里的 URL 中对象存储 API 接口名，如 acl、tagging 等 */
  type Action = string
  /** 一个字符的分隔符，常用 / 字符，用于对对象键进行分组。所有对象键中从 prefix 或从头（如未指定 prefix）到首个 delimiter 之间相同的部分将作为 CommonPrefixes 下的一个 Prefix 节点。被分组的对象键不再出现在后续对象列表中 */
  type Delimiter = '/' | string
  /** 规定返回值的编码方式，可选值：url，代表返回的对象键为 URL 编码（百分号编码）后的值，例如“腾讯云”将被编码为%E8%85%BE%E8%AE%AF%E4%BA%91 */
  type EncodingType = 'url' | string
  /** 上传的文件内容 */
  type UploadBody = string | ArrayBuffer
  /** 对象存储类型。枚举值 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING @see https://cloud.tencent.com/document/product/436/33417 */
  type StorageClass
    = | 'STANDARD'
    | 'STANDARD_IA'
    | 'ARCHIVE'
    | 'DEEP_ARCHIVE'
    | 'INTELLIGENT_TIERING'
    | 'MAZ_STANDARD'
    | 'MAZ_STANDARD_IA'
    | 'MAZ_INTELLIGENT_TIERING'
  /** 请求方法 */
  type Method
    = | 'GET'
    | 'DELETE'
    | 'POST'
    | 'PUT'
    | 'OPTIONS'
    | 'get'
    | 'delete'
    | 'post'
    | 'put'
    | 'options'
  /** 权限信息，枚举值：READ | WRITE | READ_ACP | WRITE_ACP | FULL_CONTROL 腾讯云对象存储 COS 在资源 ACL 上支持的操作实际上是一系列的操作集合，对于存储桶和对象 ACL 来说分别代表不同的含义。 */
  type Permission
    = | 'READ'
    | 'WRITE'
    | 'READ_ACP'
    | 'WRITE_ACP'
    | 'FULL_CONTROL'
  /** 存储桶的预设 ACL @see https://cloud.tencent.com/document/product/436/30752#.E9.A2.84.E8.AE.BE.E7.9A.84-acl */
  type BucketACL
    = | 'private'
    | 'public-read'
    | 'public-read-write'
    | 'authenticated-read'
  /** 对象的预设 ACL @see https://cloud.tencent.com/document/product/436/30752#.E9.A2.84.E8.AE.BE.E7.9A.84-acl */
  type ObjectACL
    = | 'default'
    | 'private'
    | 'public-read'
    | 'authenticated-read'
    | 'bucket-owner-read'
    | 'bucket-owner-full-control'
  /** 二进制值的字符串，'true' | 'false' */
  type BooleanString = 'true' | 'false'
  /** 所有者的信息 */
  interface Owner {
    /** 存储桶持有者的完整 ID，格式为 qcs::cam::uin/[OwnerUin]:uin/[OwnerUin]，如 qcs::cam::uin/100000000001:uin/100000000001 */
    ID: string
  }
  /** 所有者的信息 */
  interface GroupOwner {
    /** 预设用户组，格式为 http://cam.qcloud.com/groups/global/AllUsers (匿名用户组) 或 http://cam.qcloud.com/groups/global/AuthenticatedUsers (认证用户组) 。参见 {@link https://cloud.tencent.com/document/product/436/30752#.E8.BA.AB.E4.BB.BD-grantee| ACL 概述} */
    URI: string
  }
  /** 上传发起者的信息 */
  type Initiator = Owner
  /** 单个授权信息 */
  type Grant = string
  /** 被授权者信息与权限信息 */
  interface Grants {
    /** 所有者的信息 */
    Grantee: Owner | GroupOwner
    /** 权限信息，枚举值：READ | WRITE | READ_ACP | WRITE_ACP | FULL_CONTROL 腾讯云对象存储 COS 在资源 ACL 上支持的操作实际上是一系列的操作集合，对于存储桶和对象 ACL 来说分别代表不同的含义。 */
    Permission: Permission
  }
  /** 存储桶/对象标签信息 */
  interface Tag {
    /** 标签的 Key，长度不超过128字节, 支持英文字母、数字、空格、加号、减号、下划线、等号、点号、冒号、斜线 */
    Key: Key
    /** 标签的 Value，长度不超过256字节, 支持英文字母、数字、空格、加号、减号、下划线、等号、点号、冒号、斜线 */
    Value: string
  }
  /** 用来说明本次分块上传中每个块的信息 */
  interface Part {
    /** 标识本次分块上传的编号，范围在1 - 10000 */
    PartNumber: PartNumber
    /** 使用 Upload Part 请求上传分块成功后返回的 ETag 响应头部的值 */
    ETag: ETag
  }
  /** 当前需要用凭证的请求，需要的最小权限 */
  type Scope = {
    /** 需要的权限 */
    action: string
    /** 操作的存储桶的名称，命名规则为 BucketName-APPID，例如 examplebucket-1250000000 */
    bucket: Bucket
    /** 存储桶所在地域 @see https://cloud.tencent.com/document/product/436/6224 */
    region: Region
    /** 前缀匹配，用来规定返回的文件前缀地址，支持 * 结尾 */
    prefix: Prefix
  }[]
  /** onProgress 回调的进度信息 */
  interface ProgressInfo {
    /** 已上传/下载的字节数，单位 B（字节）  */
    loaded: number
    /** 要上传/下载的文件的大小，单位 B（字节）  */
    total: number
    /** 速度，单位 B/s  */
    speed: number
    /** 进度百分比，范围是 0-1，保留两位小数  */
    percent: number
  }
  /** 上传/下载的进度回调方法 */
  type onProgress = (params: ProgressInfo) => void

  type CopySourceParserFunction = (
    source: string,
  ) => null | { Bucket: string, Region: string, Key: string }

  // 实例参数
  interface COSOptions {
    /** 固定密钥的 SecretId，可从{@link https://console.cloud.tencent.com/cam/capi|API密钥管理}获取 */
    SecretId?: string
    /** 固定密钥的 SecretKey，可从{@link https://console.cloud.tencent.com/cam/capi|API密钥管理}获取 */
    SecretKey?: string
    /** 如果传入 SecretId、SecretKey 是临时密钥，需要再传入一个临时密钥的 sessionToken */
    SecurityToken?: string
    /** 同 SecurityToken，推荐用 SecurityToken */
    XCosSecurityToken?: string
    /** 临时密钥的起始时间戳，单位秒 */
    StartTime?: number
    /** 临时密钥的过期时间戳，单位秒 */
    ExpiredTime?: number
    /** 分块上传及分块复制时，出错重试次数，默认值3（加第一次，请求共4次） */
    ChunkRetryTimes?: number
    /** 同一个实例下上传的文件并发数，默认值3 */
    FileParallelLimit?: number
    /** 同一个上传文件的分块并发数，默认值3 */
    ChunkParallelLimit?: number
    /** 分块上传时，每片的字节数大小，默认值1048576（1MB） */
    ChunkSize?: number
    /** 使用 uploadFiles 批量上传时，文件大小大于该数值将使用按分块上传，否则将调用简单上传，单位 Byte，默认值1048576（1MB） */
    SliceSize?: number
    /** 进行分块复制操作中复制分块上传的并发数，默认值20 */
    CopyChunkParallelLimit?: number
    /** 使用 sliceCopyFile 分块复制文件时，每片的大小字节数，默认值10485760（10MB） */
    CopyChunkSize?: number
    /** 使用 sliceCopyFile 分块复制文件时，文件大小大于该数值将使用分块复制 ，否则将调用简单复制，默认值10485760（10MB） */
    CopySliceSize?: number
    /** 最大分片数，默认 1000，最大 10000，分片上传超大文件时，会根据文件大小和该最大分片数计算合适的的分片大小 */
    MaxPartNumber?: number
    /** 上传进度的回调方法 onProgress 的回调频率，单位 ms ，默认值1000 */
    ProgressInterval?: number
    /** 上传队列最长大小，超出的任务如果状态不是 waiting、checking、uploading 会被清理，默认10000 */
    UploadQueueSize?: number
    /** 调用操作存储桶和对象的 API 时自定义请求域名。可以使用模板，如"{Bucket}.cos.{Region}.myqcloud.com"，即在调用 API 时会使用参数中传入的 Bucket 和 Region 进行替换。 */
    Domain?: string
    /** getService方法可以使用的自定义域名 */
    ServiceDomain?: string
    /** 请求协议 */
    Protocol?: 'http:' | 'https:'
    /** 开启兼容模式，默认 false 不开启，兼容模式下不校验 Region 是否格式有误，在用于私有化 COS 时使用 */
    CompatibilityMode?: boolean
    /** 强制使用后缀式模式发请求。后缀式模式中 Bucket 会放在域名后的 pathname 里，并且 Bucket 会加入签名 pathname 计算，默认 false */
    ForcePathStyle?: boolean
    /** 请求超时时间，单位 ms(毫秒)，透传给 wx.request 或 wx.uploadFile */
    Timeout?: number
    /** 客户端时间是否不准确，默认 false，在第一次请求 COS API 返回时会判断是否偏差大于 30s，如果是会把该值设置为 true，开发者也可以预先判断并设置该参数 */
    CorrectClockSkew?: boolean
    /** 校正时间的偏移值，单位 ms(毫秒)，计算签名时会用设备当前时间戳加上该偏移值，在设备时间有误时可用于校正签名用的时间参数，在第一次请求 COS API 返回时会判断是否偏差大于 30s，如果是会把该值设置为 true，开发者也可以预先判断并设置该参数。 */
    SystemClockOffset?: number
    /** 上传文件时校验 Content-MD5，默认 false。如果开启，上传文件时会对文件内容计算 MD5，大文件耗时较长 */
    UploadCheckContentMd5?: boolean
    /** 上传文件时计算文件内容 md5 并设置为文件 x-cos-meta-md5 元数据 Header 字段 */
    UploadAddMetaMd5?: boolean
    /** 分片上传缓存的 UploadId 列表大小限制，nodejs-sdk 默认 500 个，js-sdk、小程序 SDK 默认 50 */
    UploadIdCacheLimit?: number
    /** 是否使用全球加速域名。开启该配置后仅以下接口支持操作：putObject、getObject、headObject、optionsObject、multipartInit、multipartListPart、multipartUpload、multipartAbort、multipartComplete、multipartList、sliceUploadFile、uploadFiles */
    UseAccelerate?: boolean
    /** 默认为true，将host加入签名计算，关闭后可能导致越权风险，建议保持为true */
    ForceSignHost?: boolean
    /** 微信小程序 HTTP DNS 服务商 ID，传入后启用 HTTP DNS */
    HttpDNSServiceId?: string
    /** 高级上传处理小文件时使用的简单上传方式，默认 postObject */
    SimpleUploadMethod?: 'postObject' | 'putObject'
    /** 请求失败时是否自动切换 COS 域名 */
    AutoSwitchHost?: boolean
    /** getObject 时是否检查并简化对象键 */
    ObjectKeySimplifyCheck?: boolean
    /** 链路上报 */
    DeepTracker?: boolean
    TrackerDelay?: number
    CustomId?: string
    BeaconReporter?: unknown
    ClsReporter?: unknown
    /** 链路上报 */
    CopySourceParser?: null | CopySourceParserFunction
    /** 获取签名的回调方法，如果没有 SecretId、SecretKey 时，必选 */
    getAuthorization?: (
      options: GetAuthorizationOptions,
      /** callback 获取完签名或临时密钥后，回传给 SDK 的方法 */
      callback: (
        /** params 回传给 SDK 的签名或获取临时密钥 */
        params: GetAuthorizationCallbackParams,
      ) => void,
    ) => void
  }

  interface Util {
    md5: (str: string, encoding?: string) => string
    xml2json: (bodyStr: string) => unknown
    json2xml: (json: unknown) => string
    encodeBase64: (str: string, safe?: boolean) => string
  }

  interface StaticGetAuthorizationOptions {
    /** 计算签名用的密钥 SecretId，必选 */
    SecretId: string
    /** 计算签名用的密钥 SecretKey，必选 */
    SecretKey: string
    /** 请求的存储桶，如果传入了 Bucket、Region，签名会默认加上 Host 字段，可选 */
    Bucket?: Bucket
    /** 请求的地域，如果传入了 Bucket、Region，签名会默认加上 Host 字段，可选 */
    Region?: Region
    /** 请求方法，可选 */
    Method?: Method
    /** 请求路径，最前面带 /，例如 /images/1.jpg，可选 */
    Pathname?: Pathname
    /** 请求的对象键，最前面不带 /，例如 images/1.jpg，可选 */
    Key?: Key
    /** 要参与签名计算的 Url Query 参数，可选 */
    Query?: Query
    /** 要参与签名计算的 Header 参数，可选 */
    Headers?: Headers
    /** 签名几秒后失效，默认为900秒，如果传入了 KeyTime，以 KeyTime 为准，可选 */
    Expires?: number
    /** 签名有效时间戳区间，如果传入了该参数，会赋值给在签名里的 q-key-time 和 q-sign-time 字段，格式如：1611915436;1611916336 */
    KeyTime?: string
    /** 校正时间的偏移值，单位 ms(毫秒)，计算签名时会用设备当前时间戳加上该偏移值，在设备时间有误时可用于校正签名用的时间参数。 */
    SystemClockOffset?: number
  }
  /** 计算签名或获取临时密钥可能需要的参数列表 */
  interface GetAuthorizationOptions {
    /** 存储桶的名称，格式为<bucketname-appid>，例如examplebucket-1250000000 */
    Bucket: Bucket
    /** 存储桶所在地域 @see https://cloud.tencent.com/document/product/436/6224 */
    Region: Region
    /** 请求方法 */
    Method: Method
    /** 请求路径，最前面带 /，例如 /images/1.jpg，Pathname 和 Key 二选一 */
    Pathname: Pathname
    /** 请求的对象键，最前面不带 /，例如 images/1.jpg，如果是存储桶接口，传入空字符串，Key 和 Pathname 二选一，推荐使用 Pathname 参数 */
    Key: Key
    /** 请求里的 Url Query 参数，可选 */
    Query: Query
    /** 请求里的 Header 参数，可选 */
    Headers: Headers
    /** 当前需要用凭证的请求，需要的最小权限 */
    Scope: Scope
    /** 校正时间的偏移值，单位 ms(毫秒)，计算签名时会用设备当前时间戳加上该偏移值，在设备时间有误时可用于校正签名用的时间参数。 */
    SystemClockOffset: number
  }
  /** 请求凭证，包含临时密钥信息 */
  interface Credentials {
    /** 临时密钥 tmpSecretId */
    TmpSecretId: string
    /** 临时密钥 tmpSecretKey */
    TmpSecretKey: string
    /** 临时密钥 sessonToken */
    SecurityToken?: string
    /** 同 SecurityToken，推荐用 SecurityToken */
    XCosSecurityToken?: string
    /** 获取临时密钥时，服务端的时间，该时间用于计算签名，可以避免设备时间有偏差导致请求错误 */
    StartTime: number
    /** 获取临时密钥的过期时间戳 */
    ExpiredTime: number
    /** 该临时密钥是否仅用于相同 Scope 权限范围的请求 */
    ScopeLimit?: boolean
    /** 签名 */
    Authorization?: string
  }

  /** 用于发请求的签名字符串，会放在请求 Header 里的 Authorization 字段 */
  type Authorization = string
  /** SDK 用于请求的凭证，可以是签名，也可以是临时密钥信息 */
  type GetAuthorizationCallbackParams = Authorization | Credentials
  /** 一般接口的返回结果 */
  interface GeneralResult {
    /** 请求返回的 HTTP 状态码 */
    statusCode?: number
    /** 请求返回的 header 字段 */
    headers?: Headers
    /** 请求的唯一标识 */
    RequestId?: string
  }
  /** SDK 的错误格式，其中服务端返回错误码可查看 @see https://cloud.tencent.com/document/product/436/7730 */
  interface CosSdkError extends GeneralResult {
    /** 错误码 */
    code?: string
    /** 错误信息 */
    message?: string
    /** 兼容老的错误信息字段，不建议使用，可能是参数错误、客户端出错、或服务端返回的错误 */
    error: unknown
    /** 当前请求的Url */
    url?: string
    /** 当前请求的method */
    method?: string
  }
  /** 回调的错误格式，其中服务端返回错误码可查看 @see https://cloud.tencent.com/document/product/436/7730 */
  type CosError = null | CosSdkError
  /** 存储桶操作接口的公共参数 */
  interface BucketParams {
    /** 存储桶的名称，格式为<bucketname-appid>，例如examplebucket-1250000000 */
    Bucket: Bucket
    /** 存储桶所在地域 @see https://cloud.tencent.com/document/product/436/6224 */
    Region: Region
    /** 请求时带上的 Header 字段 */
    Headers?: Headers
    tracker?: unknown
  }
  /** 对象操作接口的公共参数 */
  interface ObjectParams {
    /** 存储桶的名称，格式为<bucketname-appid>，例如examplebucket-1250000000 */
    Bucket: Bucket
    /** 存储桶所在地域，如果有传入只返回该地域的存储桶列表 */
    Region: Region
    /** 请求的对象键，最前面不带 / */
    Key: Key
    /** 发请求时带上的 Header 字段 */
    Headers?: Headers
    tracker?: unknown
  }

  // 所有接口的入参和出参
  // getService
  interface GetServiceParams {
    /** 存储桶所在地域，如果传入只返回该地域的存储桶 */
    Region?: Region
    /** 发请求时带上的 Header 字段 */
    Headers?: Headers
    tracker?: unknown
  }
  /** getService 接口返回值 */
  interface GetServiceResult extends GeneralResult {
    Buckets: {
      /** 存储桶的名称，格式为<bucketname-appid>，例如examplebucket-1250000000 */
      Name: Bucket
      /** 存储桶所在地域 */
      Location: Region
      /** 存储桶创建时间 */
      CreationDate: IsoDateTime
    }[]
    /** 所有者的信息 */
    Owner: Owner
  }

  // putBucket
  /** putBucket 接口参数 */
  interface PutBucketParams extends BucketParams {
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    ACL?: BucketACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantRead?: Grant
    /** 赋予被授权者写取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantWrite?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantReadAcp?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantWriteAcp?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantFullControl?: Grant
    /** 要创建存储桶的AZ类型，创建多AZ存储桶，传入 'MAZ' */
    BucketAZConfig?: 'MAZ' | string
  }
  /** putBucket 接口返回值 */
  interface PutBucketResult extends GeneralResult {
    /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/ */
    Location: Location
  }

  // headBucket
  /** headBucket 接口参数 */
  type HeadBucketParams = BucketParams
  /** headBucket 接口返回值 */
  type HeadBucketResult = GeneralResult

  // getBucket
  /** getBucket 接口参数 */
  interface GetBucketParams extends BucketParams {
    /** 前缀匹配，用来规定返回的文件前缀地址，可选 */
    Prefix?: Prefix
    /** 一个字符的分隔符，常用 / 字符，用于对对象键进行分组。所有对象键中从 prefix 或从头（如未指定 prefix）到首个 delimiter 之间相同的部分将作为 CommonPrefixes 下的一个 Prefix 节点。被分组的对象键不再出现在后续对象列表中，可选 */
    Delimiter?: Delimiter
    /** 默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，可选 */
    Marker?: Key
    /** 单次返回最大的条目数量，默认值为1000，最大为1000，注意：该参数会限制每一次 List 操作返回的最大条目数，COS 在每次 List 操作中将返回不超过 max-keys 所设定数值的条目（即 CommonPrefixes 和 Contents 的总和），如果单次响应中未列出所有对象，COS 会返回 NextMarker 节点，其值作为您下次 List 请求的 marker 参数，以便您列出后续对象，可选 */
    MaxKeys?: number
    /** 规定返回值的编码方式，可选值：url，代表返回的对象键为 URL 编码（百分号编码）后的值，例如“腾讯云”将被编码为%E8%85%BE%E8%AE%AF%E4%BA%91 */
    EncodingType?: EncodingType
  }
  /** 对象信息 */
  interface CosObject {
    /** 对象键 */
    Key: Key
    /** 当前版本的最后修改时间，为 ISO8601 格式，例如2019-05-24T10:56:40Z */
    LastModified: IsoDateTime
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如“8e0b617ca298a564c3331da28dcb50df”，此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 对象大小，单位为 Byte */
    Size: string
    /** 对象存储类型。枚举值 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING @see https://cloud.tencent.com/document/product/436/33417 */
    StorageClass: StorageClass
    /** 当对象存储类型为智能分层存储时，指示对象当前所处的存储层，枚举值：FREQUENT（标准层），INFREQUENT（低频层）。仅当 StorageClass 为 INTELLIGENT_TIERING（智能分层）时才会返回该节点 */
    StorageTier?: string
    /** 对象持有者信息 */
    Owner: Owner
  }
  /** getBucket 接口返回值 */
  interface GetBucketResult extends GeneralResult {
    /** 存储桶的名称，格式为<BucketName-APPID>，例如examplebucket-1250000000 */
    Name: string
    /** 对象键匹配前缀，对应请求中的 prefix 参数 */
    Prefix: string
    /** 起始对象键标记，从该标记之后（不含）按照 UTF-8 字典序返回对象键条目，对应请求中的 marker 参数 */
    Marker: string
    /** 单次响应返回结果的最大条目数量，对应请求中的 max-keys 参数 */
    MaxKeys: string
    /** 编码格式，对应请求中的 encoding-type 参数，且仅当请求中指定了 encoding-type 参数才会返回该节点 */
    EncodingType?: string
    /** 对象条目 */
    Contents: CosObject[]
    /** 从 prefix 或从头（如未指定 prefix）到首个 delimiter 之间相同的部分，定义为 Common Prefix。仅当请求中指定了 delimiter 参数才有可能返回该节点 */
    CommonPrefixes: {
      /** 前缀匹配，用来规定返回的文件前缀地址 */
      Prefix: Prefix
    }[]
    /** 响应条目是否被截断，布尔值，例如 true 或 false，可用于判断是否还需要继续列出文件 */
    IsTruncated: BooleanString
    /** 仅当响应条目有截断（IsTruncated 为 true）才会返回该节点，该节点的值为当前响应条目中的最后一个对象键，当需要继续请求后续条目时，将该节点的值作为下一次请求的 marker 参数传入 */
    NextMarker?: string
  }

  // listObjectVersions
  /** listObjectVersions 接口参数 */
  interface ListObjectVersionsParams extends BucketParams {
    /** 前缀匹配，用来规定返回的文件前缀地址，可选 */
    Prefix?: Prefix
    /** 一个字符的分隔符，常用 / 字符，用于对对象键进行分组。所有对象键中从 prefix 或从头（如未指定 prefix）到首个 delimiter 之间相同的部分将作为 CommonPrefixes 下的一个 Prefix 节点。被分组的对象键不再出现在后续对象列表中，可选 */
    Delimiter?: Delimiter
    /** 默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，可选 */
    Marker?: string
    /** 单次返回最大的条目数量，默认值为1000，最大为1000，注意：该参数会限制每一次 List 操作返回的最大条目数，COS 在每次 List 操作中将返回不超过 max-keys 所设定数值的条目（即 CommonPrefixes 和 Contents 的总和），如果单次响应中未列出所有对象，COS 会返回 NextMarker 节点，其值作为您下次 List 请求的 marker 参数，以便您列出后续对象，可选 */
    MaxKeys?: string
    /** 起始版本 ID 标记，从该标记之后（不含）返回对象版本条目，对应请求中的 url 参数 version-id-marker */
    VersionIdMarker?: string
    /** 规定返回值的编码方式，可选值：url，代表返回的对象键为 URL 编码（百分号编码）后的值，例如“腾讯云”将被编码为%E8%85%BE%E8%AE%AF%E4%BA%91 */
    EncodingType?: EncodingType
  }
  /** 对象删除标记条目 */
  interface DeleteMarker {
    /** 对象键 */
    Key: Key
    /** 对象的版本 ID；当未启用版本控制时，该节点的值为空字符串；当启用版本控制时，启用版本控制之前的对象，其版本 ID 为 null；当暂停版本控制时，新上传的对象其版本 ID 为 null，且同一个对象最多只存在一个版本 ID 为 null 的对象版本 */
    VersionId: VersionId
    /** 当前版本是否为该对象的最新版本 */
    IsLatest: string
    /** 当前版本的最后修改时间，为 ISO8601 格式，例如2019-05-24T10:56:40Z */
    LastModified: IsoDateTime
    Owner: Owner
  }
  interface ObjectVersion {
    /** 对象键 */
    Key: Key
    /** 对象的删除标记的版本 ID */
    VersionId: VersionId
    /** 当前版本是否为该对象的最新版本 */
    IsLatest: BooleanString
    /** 当前版本的最后修改时间，为 ISO8601 格式，例如2019-05-24T10:56:40Z */
    LastModified: IsoDateTime
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 对象大小，单位为 Byte */
    Size: string
    /** 对象大小，单位为 Byte */
    Owner: Owner
    /** 对象存储类型。枚举值 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING @see https://cloud.tencent.com/document/product/436/33417 */
    StorageClass: StorageClass
    /** 当对象存储类型为智能分层存储时，指示对象当前所处的存储层，枚举值：FREQUENT（标准层），INFREQUENT（低频层）。仅当 StorageClass 为 INTELLIGENT_TIERING（智能分层）时才会返回该节点 */
    StorageTier?: string
  }
  /** listObjectVersions 接口返回值 */
  interface ListObjectVersionsResult extends GeneralResult {
    /** 从 prefix 或从头（如未指定 prefix）到首个 delimiter 之间相同的部分，定义为 Common Prefix。仅当请求中指定了 delimiter 参数才有可能返回该节点 */
    CommonPrefixes: {
      /** 前缀匹配，用来规定返回的文件前缀地址 */
      Prefix: Prefix
    }[]
    /** 对象版本条目 */
    Versions: ObjectVersion[]
    /** 对象删除标记条目 */
    DeleteMarkers: DeleteMarker[]
    /** 响应条目是否被截断，布尔值，例如 true 或 false，可用于判断是否还需要继续列出文件 */
    IsTruncated: BooleanString
    /** 仅当响应条目有截断（IsTruncated 为 true）才会返回该节点，该节点的值为当前响应条目中的最后一个对象键，当需要继续请求后续条目时，将该节点的值作为下一次请求的 marker 参数传入 */
    NextMarker?: string
    /** 仅当响应条目有截断（IsTruncated 为 true）才会返回该节点，该节点的值为当前响应条目中的最后一个对象的版本 ID，当需要继续请求后续条目时，将该节点的值作为下一次请求的 version-id-marker 参数传入。该节点的值可能为空，此时下一次请求的 version-id-marker 参数也需要指定为空。 */
    NextVersionIdMarker?: string
  }

  // deleteBucket
  /** deleteBucket 接口参数 */
  type DeleteBucketParams = BucketParams
  /** deleteBucket 接口返回值 */
  type DeleteBucketResult = GeneralResult

  // putBucketAcl
  /** putBucketAcl 接口参数 */
  interface PutBucketAclParams extends BucketParams {
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    ACL?: BucketACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantRead?: Grant
    /** 赋予被授权者写取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantWrite?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantReadAcp?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantWriteAcp?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantFullControl?: Grant
    /** 放在 XML Body 的授权参数 */
    AccessControlPolicy?: {
      /** 所有者的信息 */
      Owner: Owner
      /** 被授权者信息与权限信息 */
      Grants: Grants[]
    }
  }
  /** putBucketAcl 接口返回值 */
  type PutBucketAclResult = GeneralResult

  // getBucketAcl
  /** getBucketAcl 接口参数 */
  type GetBucketAclParams = BucketParams
  /** getBucketAcl 接口返回值 */
  interface GetBucketAclResult extends GeneralResult {
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write */
    ACL: BucketACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantRead: Grant
    /** 赋予被授权者写取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantWrite: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantReadAcp: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantWriteAcp: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantFullControl: Grant
    /** 存储桶持有者信息 */
    Owner: Owner
    /** 被授权者信息与权限信息 */
    Grants: Grants[]
  }

  // putBucketCors
  interface CORSRule {
    /**
 允许的访问来源，单条 CORSRule 可以配置多个 AllowedOrigin。
配置支持 *，表示全部域名都允许，但不推荐。
支持单个具体域名，例如 http://www.example.com。
支持 * 通配符，通配符可出现在任何位置，包括协议、域名和端口，可匹配0个或多个字符，但是只能有一个 *。请谨慎使用通配符，因为可能意外匹配到非预期的来源
注意不要遗漏协议名 http 或 https，若端口不是默认的80(http)或443(https)，还需要带上端口，例如 https://example.com:8443。
     */
    AllowedOrigin: string[]
    /** 允许的 HTTP 操作方法（Method），对应 CORS 请求响应中的 Access-Control-Allow-Methods 头部，单条 CORSRule 可以配置多个 AllowedMethod。枚举值：PUT、GET、POST、DELETE、HEAD。 */
    AllowedMethod: string[]
    /**
 在发送预检（OPTIONS）请求时，浏览器会告知服务端接下来的正式请求将使用的自定义 HTTP 请求头部，此配置用于指定允许浏览器发送 CORS 请求时携带的自定义 HTTP 请求头部，不区分英文大小写，单条 CORSRule 可以配置多个 AllowedHeader。
可以配置*，代表允许所有头部，为了避免遗漏，推荐配置为*。
如果不配置为*，那么在预检（OPTIONS）请求中 Access-Control-Request-Headers 头部出现的每个 Header，都必须在 AllowedHeader 中有对应项。
     */
    AllowedHeader?: string[]
    /**
 允许浏览器获取的 CORS 请求响应中的头部，不区分大小写，单条 CORSRule 可以配置多个 ExposeHeader。
默认情况下浏览器只能访问简单响应头部：Cache-Control、Content-Type、Expires、Last-Modified，如果需要访问其他响应头部，需要添加 ExposeHeader 配置。
不支持配置为 *，必须明确配置具体的 Header。
根据浏览器的实际需求确定，默认推荐填写 ETag，可参考各 API 文档的响应头部分及 公共响应头部 文档。@see https://cloud.tencent.com/document/product/436/7729
     */
    ExposeHeader?: string[]
    /** 跨域资源共享配置的有效时间，单位为秒，在有效时间内，浏览器无须为同一请求再次发起预检（OPTIONS）请求，对应 CORS 请求响应中的 Access-Control-Max-Age 头部，单条 CORSRule 只能配置一个 MaxAgeSeconds。 */
    MaxAgeSeconds?: number
  }
  /** putBucketCors 接口参数 */
  interface PutBucketCorsParams extends BucketParams {
    /** 存储桶跨域资源共享（CORS）访问控制规则 */
    CORSRules: CORSRule[]
    /** 是否允许同一个 url 有多份缓存，如果设置为 true 浏览器在 img 标签加载和 ajax 加载同一个对象 url 将会使用不同缓存 */
    ResponseVary?: BooleanString
  }
  /** putBucketCors 接口返回值 */
  interface PutBucketCorsResult extends GeneralResult {
    /** 存储桶跨域资源共享（CORS）访问控制规则 */
    CORSRules: Record<string, unknown>
  }

  // getBucketCors
  /** getBucketCors 接口参数 */
  type GetBucketCorsParams = BucketParams
  /** getBucketCors 接口返回值 */
  interface GetBucketCorsResult extends GeneralResult {
    /** 存储桶跨域资源共享（CORS）访问控制规则 */
    CORSRules: Record<string, unknown>
    /** 是否允许同一个 url 有多份缓存，如果设置为 true 浏览器在 img 标签加载和 ajax 加载同一个对象 url 将会使用不同缓存 */
    ResponseVary?: BooleanString
  }

  // deleteBucketCors
  /** deleteBucketCors 接口参数 */
  type DeleteBucketCorsParams = BucketParams
  /** deleteBucketCors 接口返回值 */
  type DeleteBucketCorsResult = GeneralResult

  // getBucketLocation
  interface GetBucketLocationResult {
    /** 存储桶所在地域 */
    LocationConstraint: Region
  }
  /** getBucketLocation 接口参数 */
  type GetBucketLocationParams = BucketParams

  // putBucketPolicy
  /** putBucketPolicy 接口参数 */
  interface PutBucketPolicyParams extends BucketParams {
    /** 存储桶的权限策略 @see https://cloud.tencent.com/document/product/436/31923 */
    Policy: Record<string, unknown>
  }
  /** putBucketPolicy 接口返回值 */
  type PutBucketPolicyResult = GeneralResult

  // getBucketPolicy
  /** getBucketPolicy 接口参数 */
  type GetBucketPolicyParams = BucketParams
  /** getBucketPolicy 接口返回值 */
  interface GetBucketPolicyResult extends GeneralResult {
    /** 存储桶的权限策略 @see https://cloud.tencent.com/document/product/436/31923 */
    Policy: Record<string, unknown>
  }

  // deleteBucketPolicy
  /** deleteBucketPolicy 接口参数 */
  type DeleteBucketPolicyParams = BucketParams
  /** deleteBucketPolicy 接口返回值 */
  type DeleteBucketPolicyResult = GeneralResult

  // putBucketTagging
  /** putBucketTagging 接口参数 */
  interface PutBucketTaggingParams extends BucketParams {
    /** 标签集合，最多支持10个标签 */
    Tags: Tag[]
  }
  /** putBucketTagging 接口返回值 */
  type PutBucketTaggingResult = GeneralResult

  // getBucketTagging
  /** getBucketTagging 接口参数 */
  type GetBucketTaggingParams = BucketParams
  /** getBucketTagging 接口返回值 */
  interface GetBucketTaggingResult extends GeneralResult {
    /** 标签集合，最多支持10个标签 */
    Tags: Tag[]
  }

  // deleteBucketTagging
  /** deleteBucketTagging 接口参数 */
  type DeleteBucketTaggingParams = BucketParams
  /** deleteBucketTagging 接口返回值 */
  type DeleteBucketTaggingResult = GeneralResult

  // putBucketLifecycle
  /** 生命周期配置规则 */
  interface LifecycleRule {
    /** 用于唯一地标识规则，长度不能超过255个字符，可选 */
    ID: string
    /** 指明规则是否启用，枚举值：Enabled，Disabled，必选 */
    Status: 'Enabled' | 'Disabled'
    /** Filter 用于描述规则影响的 Object 集合，必选 */
    Filter?: Record<string, unknown>
    /** 规则转换属性，对象何时转换为 Standard_IA 或 Archive 等存储类型 */
    Transition?: Record<string, unknown>
    /** 规则过期属性 */
    Expiration?: Record<string, unknown>
    /** 设置允许分片上传保持运行的最长时间 */
    AbortIncompleteMultipartUpload?: Record<string, unknown>
    /** 指明非当前版本对象何时过期 */
    NoncurrentVersionExpiration?: Record<string, unknown>
    /** 指明非当前版本对象何时转换为 STANDARD_IA 或 ARCHIVE 等存储类型 */
    NoncurrentVersionTransition?: Record<string, unknown>
  }
  /** putBucketLifecycle 接口参数 */
  interface PutBucketLifecycleParams extends BucketParams {
    /** 生命周期配置规则列表 */
    Rules: LifecycleRule[]
  }
  /** putBucketLifecycle 接口返回值 */
  type PutBucketLifecycleResult = GeneralResult

  // getBucketLifecycle
  /** getBucketLifecycle 接口参数 */
  type GetBucketLifecycleParams = BucketParams
  /** getBucketLifecycle 接口返回值 */
  interface GetBucketLifecycleResult extends GeneralResult {
    /** 生命周期配置规则列表 */
    Rules: LifecycleRule[]
  }

  // deleteBucketLifecycle
  /** deleteBucketLifecycle 接口参数 */
  type DeleteBucketLifecycleParams = BucketParams
  /** deleteBucketLifecycle 接口返回值 */
  type DeleteBucketLifecycleResult = GeneralResult

  // putBucketVersioning
  /** 存储桶版本控制开关信息 */
  interface VersioningConfiguration {
    /** 说明版本是否开启，枚举值：Suspended、Enabled */
    Status: 'Enabled' | 'Suspended'
  }
  /** putBucketVersioning 接口参数 */
  interface PutBucketVersioningParams extends BucketParams {
    /** 存储桶版本控制开关信息 */
    VersioningConfiguration: VersioningConfiguration
  }
  /** putBucketVersioning 接口返回值 */
  type PutBucketVersioningResult = GeneralResult

  // getBucketVersioning
  /** getBucketVersioning 接口参数 */
  type GetBucketVersioningParams = BucketParams
  /** getBucketVersioning 接口返回值 */
  interface GetBucketVersioningResult extends GeneralResult {
    /** 存储桶版本控制开关信息 */
    VersioningConfiguration: VersioningConfiguration
  }

  // putBucketReplication
  interface ReplicationRule {
    /** 用来标注具体 Rule 的名称 */
    ID?: string
    /** 标识 Rule 是否生效，枚举值：Enabled, Disabled */
    Status: 'Enabled' | 'Disabled'
    /** 前缀匹配，用来规定返回的文件前缀地址 */
    Prefix: Prefix
    /** 目标存储桶信息 */
    Destination: {
      /** 资源标识符：qcs::cos:<region>::<bucketname-appid> */
      Bucket: string
      /** 存储类型，枚举值：STANDARD，INTELLIGENT_TIERING，STANDARD_IA 等。默认值：原存储类型 */
      StorageClass?: StorageClass
    }
  }
  /** 说明所有复制配置信息 */
  interface ReplicationConfiguration {
    /** 发起者身份标示：qcs::cam::uin/&lt;OwnerUin>:uin/&lt;SubUin> */
    Role: string
    /** 具体配置信息，最多支持1000个，所有策略只能指向一个目标存储桶 */
    Rules: ReplicationRule[]
  }
  /** putBucketReplication 接口参数 */
  interface PutBucketReplicationParams extends BucketParams {
    /** 说明所有复制配置信息 */
    ReplicationConfiguration: ReplicationConfiguration
  }
  /** putBucketReplication 接口返回值 */
  type PutBucketReplicationResult = GeneralResult

  // getBucketReplication
  /** getBucketReplication 接口参数 */
  type GetBucketReplicationParams = BucketParams
  /** getBucketReplication 接口返回值 */
  interface GetBucketReplicationResult extends GeneralResult {
    /** 说明所有复制配置信息 */
    ReplicationConfiguration: ReplicationConfiguration
  }

  // deleteBucketReplication
  /** deleteBucketReplication 接口参数 */
  type DeleteBucketReplicationParams = BucketParams
  /** deleteBucketReplication 接口返回值 */
  type DeleteBucketReplicationResult = GeneralResult

  // putBucketWebsite
  /** 存储桶配置静态网站配置信息 */
  interface WebsiteConfiguration {
    /** 索引文档配置 */
    IndexDocument: {
      /** 指定索引文档的对象键后缀。例如指定为index.html，那么当访问到存储桶的根目录时，会自动返回 index.html 的内容，或者当访问到article/目录时，会自动返回 article/index.html的内容 */
      Suffix: string
    }
    /** 重定向所有请求配置 */
    RedirectAllRequestsTo?: {
      /** 指定重定向所有请求的目标协议，只能设置为 https */
      Protocol: 'https' | string
    }
    /** 用于配置是否忽略扩展名 */
    AutoAddressing?: {
      /** 用于配置是否忽略 HTML 拓展名，可选值为 Enabled 或 Disabled，默认为 Disabled */
      Status: 'Disabled' | 'Enabled'
    }
    /** 错误文档配置 */
    ErrorDocument?: {
      /** 指定通用错误文档的对象键，当发生错误且未命中重定向规则中的错误码重定向时，将返回该对象键的内容 */
      Key: Key
      /** 用于配置命中错误文档的 HTTP 状态码，可选值为 Enabled 或 Disabled，默认为 Enabled */
      OriginalHttpStatus?: 'Enabled' | 'Disabled'
    }
    /** 重定向规则配置，最多设置100条 RoutingRule */
    RoutingRules?: {
      /** 重定向规则的条件配置 */
      Condition: {
        /** 指定重定向规则的错误码匹配条件，只支持配置4XX返回码，例如403或404，HttpErrorCodeReturnedEquals 与 KeyPrefixEquals 必选其一 */
        HttpErrorCodeReturnedEquals?: string | number
        /** 指定重定向规则的对象键前缀匹配条件，HttpErrorCodeReturnedEquals 与 KeyPrefixEquals 必选其一 */
        KeyPrefixEquals?: 'Enabled' | 'Disabled'
      }
      /** 重定向规则的具体重定向目标配置 */
      Redirect: {
        /** 指定重定向规则的目标协议，只能设置为 https */
        Protocol?: 'https' | string
        /** 指定重定向规则的具体重定向目标的对象键，替换方式为替换整个原始请求的对象键，ReplaceKeyWith 与 ReplaceKeyPrefixWith 必选其一 */
        ReplaceKeyWith?: string
        /** 指定重定向规则的具体重定向目标的对象键，替换方式为替换原始请求中所匹配到的前缀部分，仅可在 Condition 为 KeyPrefixEquals 时设置，ReplaceKeyWith 与 ReplaceKeyPrefixWith 必选其一 */
        ReplaceKeyPrefixWith?: string
      }
    }[]
  }
  /** putBucketWebsite 接口参数 */
  interface PutBucketWebsiteParams extends BucketParams {
    /** 存储桶配置静态网站配置信息 */
    WebsiteConfiguration: WebsiteConfiguration
  }
  /** putBucketWebsite 接口返回值 */
  type PutBucketWebsiteResult = GeneralResult

  // getBucketWebsite
  /** getBucketWebsite 接口参数 */
  type GetBucketWebsiteParams = BucketParams
  /** getBucketWebsite 接口返回值 */
  interface GetBucketWebsiteResult extends GeneralResult {
    /** 存储桶配置静态网站配置信息 */
    WebsiteConfiguration: WebsiteConfiguration
  }

  // deleteBucketWebsite
  /** deleteBucketWebsite 接口参数 */
  type DeleteBucketWebsiteParams = BucketParams
  /** deleteBucketWebsite 接口返回值 */
  type DeleteBucketWebsiteResult = GeneralResult

  // putBucketReferer
  /** 防盗链配置信息 */
  interface RefererConfiguration {
    /** 是否开启防盗链，枚举值：Enabled、Disabled */
    Status: 'Enabled' | 'Disabled'
    /** 防盗链类型，枚举值：Black-List、White-List */
    RefererType: 'Black-List' | 'White-List'
    /** 生效域名列表， 支持多个域名且为前缀匹配， 支持带端口的域名和 IP， 支持通配符*，做二级域名或多级域名的通配 */
    DomainList: {
      /** 生效域名，例如www.qq.com/example，192.168.1.2:8080， *.qq.com */
      Domains: string[]
    }
    /** 是否允许空 Referer 访问，枚举值：Allow、Deny，默认值为 Deny */
    EmptyReferConfiguration?: 'Allow' | 'Deny'
  }
  /** putBucketReferer 接口参数 */
  interface PutBucketRefererParams extends BucketParams {
    /** 防盗链配置信息 */
    RefererConfiguration: RefererConfiguration
  }
  /** putBucketReferer 接口返回值 */
  type PutBucketRefererResult = GeneralResult

  // getBucketReferer
  /** getBucketReferer 接口参数 */
  type GetBucketRefererParams = BucketParams
  /** getBucketReferer 接口返回值 */
  interface GetBucketRefererResult extends GeneralResult {
    /** 防盗链配置信息 */
    RefererConfiguration: RefererConfiguration
  }

  // putBucketDomain
  /** 绑定的域名条目 */
  interface DomainRule {
    /** 是否启用。枚举值：ENABLED：启用，DISABLED：禁用，必选 */
    Status: 'DISABLED' | 'ENABLED'
    /** 完整域名，必选 */
    Name: string
    /** 源站类型。枚举值：REST：默认源站，WEBSITE：静态源站源站，ACCELERATE：全球加速源站，必选 */
    Type: 'REST' | 'WEBSITE' | 'ACCELERATE'
    /** 如果指定域名已经作为其他存储桶的自定义域名，那么可以指定该元素强制将该域名作为当前存储桶的自定义域名。当前只支持 CNAME，代表您需要先将该域名的 CNAME 指向当前存储桶的源站域名（根据 Type 元素的不同对应为默认源站、静态网站源站或全球加速源站）后才能通过该接口设置自定义域名。可选 */
    ForcedReplacement?: string
  }
  /** putBucketDomain 接口参数 */
  interface PutBucketDomainParams extends BucketParams {
    /** 绑定的域名条目 */
    DomainRule: DomainRule[]
  }
  /** putBucketDomain 接口返回值 */
  type PutBucketDomainResult = GeneralResult

  // getBucketDomain
  /** getBucketDomain 接口参数 */
  type GetBucketDomainParams = BucketParams
  /** getBucketDomain 接口返回值 */
  interface GetBucketDomainResult extends GeneralResult {
    /** 绑定的域名条目 */
    DomainRule: DomainRule[]
  }

  // deleteBucketDomain
  /** deleteBucketDomain 接口参数 */
  type DeleteBucketDomainParams = BucketParams
  /** deleteBucketDomain 接口返回值 */
  type DeleteBucketDomainResult = GeneralResult

  // putBucketOrigin
  /** Origin 回源规则配置 */
  interface OriginRule {
    /** 通过优先级区分规则执行先后，必选 */
    RulePriority: 1
    /** 回源类型，支持同步回源（Mirror）和异步回源（Proxy）两种模式。 枚举值：Mirror、Proxy。必选 */
    OriginType: 'Mirror' | 'Proxy'
    /** 回源配置，配置用户使用的 HTTP 传输协议等信息。必选 */
    OriginCondition: {
      /** 触发回源的 HTTP 状态码，默认为404。必选 */
      HTTPStatusCode: number
      /** 触发回源的文件前缀，默认为空，任意文件均可触发。可选 */
      Prefix: Prefix
    }
    /** 回源地址相关信息，必选 */
    OriginParameter: {
      /** 回源使用的协议，枚举值为 HTTP（使用 HTTP 协议），HTTPS（使用 HTTPS 协议）、FOLLOW（跟随用户使用的协议），默认值为 FOLLOW。必选 */
      Protocol: 'HTTP' | 'HTTPS' | 'FOLLOW'
      /** Proxy 模式下是否需要透传 HTTP 请求串，枚举值：true、false，默认为 true。可选 */
      FollowQueryString?: BooleanString
      /** Proxy 模式下是否需要 Http 头部传输配置。可选 */
      HttpHeader?: {
        /** Proxy 模式下是否传输请求头部，枚举值：true、false，默认为 false。可选 */
        FollowHttpHeader?: BooleanString
        /** 设置 Proxy 模式传输的请求头部。可选 */
        NewHttpHeader?: {
          /** 回源到源站时添加新的自定义头部，默认为空。可选 */
          Header?: {
            /** 用户设置的头部名称，默认为空。形式如 x-cos、oss、amz-ContentType、CacheControl、ContentDisposition、ContentEncoding、HttpExpiresDate、UserMetaData。可选 */
            Key?: string
            /** 用户设置的头部值，默认为空。可选 */
            Value?: string
          }[]
        }
      }
      /** Proxy 模式下源站 3XX 响应策略，枚举值：true、false，选择 true 时跟随源站 3xx 重定向请求获取到资源，并将资源保存到 COS 上；选择 false 时透传 3XX 响应，不获取资源），默认为 true。可选 */
      FollowRedirection: BooleanString
      /** Proxy 模式下的返回码参数，枚举值：301、302，默认为 302。可选 */
      HttpRedirectCode: ('301' | '302')[]
    }
    /** 回源配置，配置用户使用的 HTTP 传输协议等信息。必选 */
    OriginInfo: {
      /** 源站信息。必选 */
      HostInfo: {
        /** 源站域名或者源站 IP。必选 */
        HostName: string
      }
      /** 回源文件信息。必选 */
      FileInfo: {
        /** 回源文件前缀配置信息。可选 */
        PrefixConfiguration: {
          /** 回源文件的文件前缀，默认为空。可选 */
          Prefix: Prefix
        }
        /** 回源文件后缀配置信息。可选 */
        SuffixConfiguration: {
          /** 回源文件的文件后缀，默认为空。可选 */
          Suffix: string
        }
      }
    }
  }
  /** putBucketOrigin 接口参数 */
  interface PutBucketOriginParams extends BucketParams {
    /** Origin 回源规则配置 */
    OriginRule: OriginRule[]
  }
  /** putBucketOrigin 接口返回值 */
  type PutBucketOriginResult = GeneralResult

  // getBucketOrigin
  /** getBucketOrigin 接口参数 */
  type GetBucketOriginParams = BucketParams
  /** getBucketOrigin 接口返回值 */
  interface GetBucketOriginResult extends GeneralResult {
    /** Origin 回源规则配置 */
    OriginRule: OriginRule[]
  }

  // deleteBucketOrigin
  /** deleteBucketOrigin 接口参数 */
  type DeleteBucketOriginParams = BucketParams
  /** deleteBucketOrigin 接口返回值 */
  type DeleteBucketOriginResult = GeneralResult

  // putBucketLogging
  interface BucketLoggingStatus {
    /** 存储桶 logging 设置的具体信息，主要是目标存储桶 */
    LoggingEnabled?: {
      /** 存放日志的目标存储桶，可以是同一个存储桶（但不推荐），或同一账户下、同一地域的存储桶 */
      TargetBucket: Bucket
      /** 日志存放在目标存储桶的指定路径 */
      TargetPrefix: Prefix
    }
  }
  /** putBucketLogging 接口参数 */
  interface PutBucketLoggingParams extends BucketParams {
    /** 说明日志记录配置的状态，如果无子节点信息则意为关闭日志记录 */
    BucketLoggingStatus: BucketLoggingStatus
  }
  /** putBucketLogging 接口返回值 */
  type PutBucketLoggingResult = GeneralResult

  // getBucketLogging
  /** getBucketLogging 接口参数 */
  type GetBucketLoggingParams = BucketParams
  /** getBucketLogging 接口返回值 */
  interface GetBucketLoggingResult extends GeneralResult {
    /** 说明日志记录配置的状态，如果无子节点信息则意为关闭日志记录 */
    BucketLoggingStatus: BucketLoggingStatus
  }

  interface BaseInventoryConfiguration {
    /** 清单的名称，与请求参数中的 id 对应，可选 */
    Id: string
    /** 是否在清单中包含对象版本：如果设置为 All，清单中将会包含所有对象版本，并在清单中增加 VersionId，IsLatest，DeleteMarker 这几个字段，如果设置为 Current，则清单中不包含对象版本信息，必选 */
    IncludedObjectVersions: 'All' | 'Current'
    /** 筛选待分析对象。清单功能将分析符合 Filter 中设置的前缀的对象，可选 */
    Filter?: {
      /** 筛选待分析对象。清单功能将分析符合 Filter 中设置的前缀的对象，可选 */
      Prefix?: Prefix
      /** 需要分析的对象的创建时间范围 */
      Period?: {
        StartTime?: number
        EndTime?: number
      }
      /** 筛选待分析对象时，可以用对象标签（支持多个）作为过滤条件 */
      Tag?: Tag[]
      /** 筛选待分析对象时，如果同时需要前缀与对象标签条件，需要用 And 包装 */
      And?: {
        Prefix: Prefix
        Tag: Tag[]
      }
    }
    /** 设置清单结果中应包含的分析项目，可选 */
    OptionalFields?: string[]
    /** 描述存放清单结果的信息，必选 */
    Destination: {
      /** 清单结果导出后存放的存储桶信息，必选 */
      COSBucketDestination: {
        /** 清单分析结果的存储桶名，如：qcs::cos:ap-guangzhou::bucket-logging-1250000000，必选 */
        Bucket: string
        /** 清单分析结果的文件形式，可选项为 CSV 格式，必选 */
        Format: 'CSV'
        /** 存储桶的所有者 ID，例如100000000001，可选 */
        AccountId?: string
        /** 清单分析结果的前缀，可选 */
        Prefix?: Prefix
        /** 为清单结果提供服务端加密的选项，可选 */
        Encryption?: {
          /** COS 托管密钥的加密方式，无需填充，可选 */
          SSECOS?: ''
        }
      }
    }
  }

  // putBucketInventory
  /** putBucketInventory 接口参数 */
  interface InventoryConfiguration extends BaseInventoryConfiguration {
    /** 清单是否启用的标识：如果设置为 true，清单功能将生效，如果设置为 false，将不生成任何清单，必选 */
    IsEnabled: BooleanString
    /** 配置清单任务周期，必选 */
    Schedule: {
      /** 清单任务周期，可选项为按日或者按周，枚举值：Daily、Weekly，必选 */
      Frequency: 'Daily' | 'Weekly'
    }
  }

  interface PutBucketInventoryParams extends BucketParams {
    /** 清单的名称，与请求参数中的 id 对应 */
    Id: string
    /** 包含清单任务的详细信息 */
    InventoryConfiguration: InventoryConfiguration
  }
  /** putBucketInventory 接口返回值 */
  type PutBucketInventoryResult = GeneralResult

  // getBucketInventory
  /** getBucketInventory 接口参数 */
  interface GetBucketInventoryParams extends BucketParams {
    /** 清单的名称，与请求参数中的 id 对应 */
    Id: string
  }
  /** getBucketInventory 接口返回值 */
  interface GetBucketInventoryResult extends GeneralResult {
    /** 包含清单任务的详细信息 */
    InventoryConfiguration: InventoryConfiguration
  }

  // listBucketInventory
  /** listBucketInventory 接口参数 */
  interface ListBucketInventoryParams extends BucketParams {
    ContinuationToken?: string
  }
  /** listBucketInventory 接口返回值 */
  interface ListBucketInventoryResult extends GeneralResult {
    /** 包含清单任务的详细信息 */
    InventoryConfigurations: Record<string, unknown>
    /** 当 COS 响应体中 IsTruncated 为 true，且 NextContinuationToken 节点中存在参数值时，您可以将这个参数作为 continuation-token 参数值，以获取下一页的清单任务信息。缺省值：None */
    ContinuationToken: string
    /** 是否已列出所有清单任务信息的标识。如果已经展示完则为 false，否则为 true */
    IsTruncated: BooleanString
    /** 下一页清单列表的标识。如果该参数中有值，则可将该值作为 continuation-token 参数并发起 GET 请求以获取下一页清单任务信息 */
    NextContinuationToken?: string
  }

  // deleteBucketInventory
  /** deleteBucketInventory 接口参数 */
  interface DeleteBucketInventoryParams extends BucketParams {
    Id: string
  }
  /** deleteBucketInventory 接口返回值 */
  type DeleteBucketInventoryResult = GeneralResult

  // putBucketAccelerate
  /** 全球加速的具体信息 */
  interface AccelerateConfiguration {
    /** 说明全球加速功能是否开启，枚举值：Suspended、Enabled */
    Status: 'Enabled' | 'Suspended'
  }
  /** putBucketAccelerate 接口参数 */
  interface PutBucketAccelerateParams extends BucketParams {
    /** 全球加速的具体信息 */
    AccelerateConfiguration: AccelerateConfiguration
  }
  /** putBucketAccelerate 接口返回值 */
  type PutBucketAccelerateResult = GeneralResult

  // getBucketAccelerate
  /** getBucketAccelerate 接口参数 */
  type GetBucketAccelerateParams = BucketParams
  /** getBucketAccelerate 接口返回值 */
  interface GetBucketAccelerateResult extends GeneralResult {
    /** 全球加速的具体信息 */
    AccelerateConfiguration: AccelerateConfiguration
  }

  // headObject
  /** headObject 接口参数 */
  type HeadObjectParams = ObjectParams
  /** headObject 接口返回值 */
  interface HeadObjectResult extends GeneralResult {
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 对象的版本 ID */
    VersionId?: string
  }

  // getObject
  /** getObject 接口参数 */
  interface GetObjectParams extends ObjectParams {
    DataType?: 'text' | 'arraybuffer'
    /** 请求里的 Url Query 参数，传入该值中的 key/value 将会被 URLEncode */
    Query?: Query
    /** 请求里的 Url Query 参数。传入该值将直接拼接在 Url 上，不会对其进行 URLEncode */
    QueryString?: string
    /** 当对象在指定时间后被修改，则返回对象，否则返回 HTTP 状态码为304（Not Modified） */
    IfModifiedSince?: string
    /** 当对象在指定时间后未被修改，则返回对象，否则返回 HTTP 状态码为412（Precondition Failed） */
    IfUnmodifiedSince?: string
    /** 当对象的 ETag 与指定的值一致，则返回对象，否则返回 HTTP 状态码为412（Precondition Failed） */
    IfMatch?: string
    /** 当对象的 ETag 与指定的值不一致，则返回对象，否则返回 HTTP 状态码为304（Not Modified） */
    IfNoneMatch?: string
    /** 针对本次下载进行流量控制的限速值，必须为数字，单位默认为 bit/s。限速值设置范围为819200 - 838860800，即100KB/s - 100MB/s，如果超出该范围将返回400错误 */
    TrafficLimit?: number
    /** 设置响应中的 Cache-Control 头部的值 */
    ResponseCacheControl?: string
    /** 设置响应中的 Content-Disposition 头部的值 */
    ResponseContentDisposition?: string
    /** 设置响应中的 Content-Encoding 头部的值 */
    ResponseContentEncoding?: string
    /** 设置响应中的 Content-Language 头部的值 */
    ResponseContentLanguage?: string
    /** 设置响应中的 Content-Type 头部的值 */
    ResponseExpires?: string
    /** 设置响应中的 Expires 头部的值 */
    ResponseContentType?: string
    /** RFC 2616 中定义的字节范围，范围值必须使用 bytes=first-last 格式，first 和 last 都是基于0开始的偏移量。例如 bytes=0-9 表示下载对象的开头10个字节的数据 ，如果不指定，则表示下载整个对象 */
    Range?: string
    /** 当启用版本控制时，指定要下载的版本 ID，如不指定则下载对象的最新版本 */
    VersionId?: string
    /** 下载的进度回调方法 */
    onProgress?: onProgress
  }
  /** getObject 接口返回值 */
  interface GetObjectResult extends GeneralResult {
    /** 对象内容 */
    Body: string | ArrayBuffer
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 对象的版本 ID */
    VersionId?: string
  }

  // putObject
  /** putObject 接口参数 */
  interface PutObjectParams extends ObjectParams {
    /** 要上传的对象内容；Body 和 FilePath 至少传入一个 */
    'Body'?: UploadBody
    /** 要上传的微信本地文件路径；Body 和 FilePath 至少传入一个 */
    'FilePath'?: string
    /** 上传的文件大小，通常由 SDK 自动计算 */
    'ContentLength'?: number
    /** 请求里的 Url Query 参数 */
    'Query'?: Query
    /** RFC 2616 中定义的缓存指令，将作为对象元数据保存 */
    'CacheControl'?: string
    /** RFC 2616 中定义的文件名称，将作为对象元数据保存 */
    'ContentDisposition'?: string
    /** RFC 2616 中定义的编码格式，将作为对象元数据保存 */
    'ContentEncoding'?: string
    /** RFC 2616 中定义的 HTTP 请求内容类型（MIME），此头部用于描述待上传对象的内容类型，将作为对象元数据保存。例如text/html或image/jpeg */
    'ContentType'?: string
    /** RFC 2616 中定义的缓存失效时间，将作为对象元数据保存 */
    'Expires'?: string
    /** RFC 2616 中定义的缓存失效时间，将作为对象元数据保存 */
    'Expect'?: string
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    'ACL'?: ObjectACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantRead'?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantReadAcp'?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantWriteAcp'?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantFullControl'?: Grant
    /** 对象存储类型。例如 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING。默认值：STANDARD */
    'StorageClass'?: StorageClass
    /** 单链接上传限速，单位 bit/s */
    'TrafficLimit'?: number
    /** 限制允许上传的文件类型 */
    'MimeLimit'?: string
    /** 是否禁止覆盖同名对象 */
    'ForbidOverwrite'?: boolean | BooleanString
    /** SSE-C 加密算法 */
    'SSECustomerAlgorithm'?: 'AES256'
    /** SSE-C 加密密钥 */
    'SSECustomerKey'?: string
    /** SSE-C 加密密钥的 MD5 */
    'SSECustomerKeyMD5'?: string
    /** 服务端加密算法 */
    'ServerSideEncryption'?: 'AES256' | 'cos/kms' | string
    /** KMS 主密钥 ID */
    'SSEKMSKeyId'?: string
    /** KMS 加密上下文 */
    'SSEContext'?: string
    /** 上传时的图片处理参数 */
    'PicOperations'?: string
    /** 上传文件时计算文件内容 md5 并设置为文件 x-cos-meta-md5 元数据 Header 字段 */
    'UploadAddMetaMd5'?: boolean
    /** 包括用户自定义元数据头部后缀和用户自定义元数据信息，将作为对象元数据保存，大小限制为2KB，注意：用户自定义元数据信息支持下划线（_），但用户自定义元数据头部后缀不支持下划线，仅支持减号（-） */
    'x-cos-meta-*'?: string
    /** 任务开始上传的回调方法 */
    'onTaskReady'?: (TaskId: COS.TaskId) => void
    'onTaskStart'?: (TaskInfo: COS.Task) => void
    /** 上传的进度回调方法 */
    'onProgress'?: onProgress
    /** 续传校验的进度回调方法 */
    'onHashProgress'?: onProgress
  }
  /** putObject 接口返回值 */
  interface PutObjectResult extends GeneralResult {
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/images/1.jpg */
    Location: string
    /** 对象的版本 ID */
    VersionId?: VersionId
  }

  // postObject
  /** 使用 wx.uploadFile 上传本地文件的参数 */
  type PostObjectParams = Omit<PutObjectParams, 'Body' | 'FilePath'> & {
    /** 要上传的微信本地文件路径 */
    FilePath: string
  }
  /** postObject 接口返回值 */
  type PostObjectResult = PutObjectResult

  /** appendObject 接口参数 */
  type AppendObjectParams = PutObjectParams & {
    /** 追加操作的起始点 */
    Position: number
  }

  // deleteObject
  /** deleteObject 接口参数 */
  type DeleteObjectParams = ObjectParams
  /** deleteObject 接口返回值 */
  type DeleteObjectResult = GeneralResult

  // deleteMultipleObject
  /** deleteMultipleObject 接口参数 */
  interface DeleteMultipleObjectParams extends BucketParams {
    /** 要删除的对象列表 */
    Objects: {
      /** 要删除的对象键 */
      Key: Key
      /** 要删除的对象版本 ID */
      VersionId?: string
    }[]
    /** 是否启动 Quiet 模式 */
    Quiet?: boolean
  }
  /** deleteMultipleObject 接口返回值 */
  interface DeleteMultipleObjectResult extends GeneralResult {
    Deleted: {
      /** 删除成功的对象的对象键 */
      Key: Key
      /** 删除成功的版本 ID，仅当请求中指定了要删除对象的版本 ID 时才返回该元素 */
      VersionId?: VersionId
      /** 仅当对该对象的删除创建了一个删除标记，或删除的是该对象的一个删除标记时才返回该元素，布尔值，固定为 true */
      DeleteMarker?: BooleanString
      /** 仅当对该对象的删除创建了一个删除标记，或删除的是该对象的一个删除标记时才返回该元素，值为创建或删除的删除标记的版本 ID */
      DeleteMarkerVersionId?: VersionId
    }[]
    Error: {
      /** 删除失败的对象的对象键 */
      Key: Key
      /** 删除失败的版本 ID，仅当请求中指定了要删除对象的版本 ID 时才返回该元素 */
      VersionId?: string
      /** 删除失败的错误码，用来定位唯一的错误条件和确定错误场景 */
      Code?: string
      /** 删除失败的具体错误信息 */
      Message?: string
    }[]
  }

  // getObjectAcl
  /** getObjectAcl 接口参数 */
  interface GetObjectAclParams extends ObjectParams {
    /** 历史版本id */
    VersionId?: VersionId
  }
  /** getObjectAcl 接口返回值 */
  interface GetObjectAclResult extends GeneralResult {
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write */
    ACL: ObjectACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantRead: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantReadAcp: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantWriteAcp: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者 */
    GrantFullControl: Grant
    /** 存储桶持有者信息 */
    Owner: Owner
    /** 被授权者信息与权限信息 */
    Grants: Grants[]
  }

  // putObjectAcl
  /** putObjectAcl 接口参数 */
  interface PutObjectAclParams extends ObjectParams {
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    ACL?: ObjectACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantRead?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantReadAcp?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantWriteAcp?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    GrantFullControl?: Grant
  }
  /** putObjectAcl 接口返回值 */
  type PutObjectAclResult = GeneralResult

  // optionsObject
  /** optionsObject 接口参数 */
  interface OptionsObjectParams extends ObjectParams {
    /** 发起 CORS 请求所在的页面域名（Origin） */
    Origin: string
    /** 发起 CORS 请求所用的方法（Method） */
    AccessControlRequestMethod: Method
    /** 发起 CORS 请求时使用的 HTTP 请求头部，不区分英文大小写，可使用英文逗号(,)分隔多个头部 */
    AccessControlRequestHeaders: string
  }
  /** optionsObject 接口返回值 */
  interface OptionsObjectResult extends GeneralResult {
    /**
     * 允许发起 CORS 的域名，可能的值有以下两种：
     *：代表允许所有域名
请求头 Origin 中指定的域名：代表允许指定域名
     */
    AccessControlAllowOrigin: string
    /** 允许发起 CORS 请求所使用的方法（Method），可使用英文逗号(,)分隔多个方法 */
    AccessControlAllowMethods: string
    /** 允许发起 CORS 请求带的 HTTP 头部，不区分英文大小写，可使用英文逗号(,)分隔多个头部 */
    AccessControlAllowHeaders: string
    /** 允许浏览器获取的 CORS 请求中的 HTTP 响应头部，不区分英文大小写，可使用英文逗号(,)分隔多个头部 */
    AccessControlExposeHeaders: string
    /** CORS 配置的有效时间，单位为秒，在有效时间内，浏览器无须为同一请求再次发起预检请求 */
    AccessControlMaxAge: string
  }

  // restoreObject
  interface RestoreRequest {
    /** 指定恢复出的临时副本的有效时长，单位为“天” */
    Days: number | string
    /** 恢复工作参数 */
    CASJobParameters: {
      /**
 恢复时，Tier 可以指定为支持的恢复模式。
对于恢复归档存储类型数据，有三种恢复模式，分别为：
Expedited：极速模式，恢复任务在1 - 5分钟内可完成。
Standard：标准模式，恢复任务在3 - 5小时内完成
Bulk：批量模式，恢复任务在5 - 12小时内完成。
对于恢复深度归档存储类型数据，有两种恢复模式，分别为：
Standard：标准模式，恢复时间为12 - 24小时。
Bulk：批量模式，恢复时间为24 - 48小时。
       */
      Tier: 'Expedited' | 'Standard' | 'Bulk'
    }
  }
  /** restoreObject 接口参数 */
  interface RestoreObjectParams extends ObjectParams {
    /** 包含 POST Object restore 操作的所有请求信息 */
    RestoreRequest: RestoreRequest
    /** 当启用版本控制时，指定要恢复的版本 ID，如不指定则恢复对象的最新版本 */
    VersionId?: VersionId
  }
  /** restoreObject 接口返回值 */
  type RestoreObjectResult = GeneralResult

  // putObjectCopy
  /** putObjectCopy 接口参数 */
  interface PutObjectCopyParams extends ObjectParams {
    /** 源对象的 URL，其中对象键需经过 URLEncode，可以通过 versionId 参数指定源对象的版本，例如： sourcebucket-1250000001.cos.ap-shanghai.myqcloud.com/example-%E8%85%BE%E8%AE%AF%E4%BA%91.jpg 或 sourcebucket-1250000001.cos.ap-shanghai.myqcloud.com/example-%E8%85%BE%E8%AE%AF%E4%BA%91.jpg?versionId=MTg0NDUxNzYzMDc0NDMzNDExOTc */
    'CopySource': string
    /** 是否复制源对象的元数据信息，枚举值：Copy，Replaced，默认为 Copy。如果标记为 Copy，则复制源对象的元数据信息；如果标记为 Replaced，则按本次请求的请求头中的元数据信息作为目标对象的元数据信息；当目标对象和源对象为同一对象时，即用户试图修改元数据时，则标记必须为 Replaced */
    'MetadataDirective'?: 'Copy' | 'Replaced'
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    'ACL'?: ObjectACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantRead'?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantReadAcp'?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantWriteAcp'?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantFullControl'?: Grant
    /** 当对象在指定时间后被修改，则执行复制操作，否则返回 HTTP 状态码为412（Precondition Failed） */
    'CopySourceIfModifiedSince'?: string
    /** 当对象在指定时间后未被修改，则执行复制操作，否则返回 HTTP 状态码为412（Precondition Failed） */
    'CopySourceIfUnmodifiedSince'?: string
    /** 当对象的 ETag 与指定的值一致，则执行复制操作，否则返回 HTTP 状态码为412（Precondition Failed） */
    'CopySourceIfMatch'?: string
    /** 当对象的 ETag 与指定的值不一致，则执行复制操作，否则返回 HTTP 状态码为412（Precondition Failed） */
    'CopySourceIfNoneMatch'?: string
    /** 对象存储类型。例如 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING。默认值：STANDARD */
    'StorageClass'?: StorageClass
    /** RFC 2616 中定义的缓存指令，将作为目标对象元数据保存 */
    'CacheControl'?: string
    /** RFC 2616 中定义的文件名称，将作为目标对象元数据保存 */
    'ContentDisposition'?: string
    /** RFC 2616 中定义的编码格式，将作为目标对象元数据保存 */
    'ContentEncoding'?: string
    /** RFC 2616 中定义的 HTTP 请求内容类型（MIME），此头部用于描述目标对象的内容类型，将作为目标对象元数据保存。例如 text/html 或 image/jpeg。 */
    'ContentType'?: string
    /** RFC 2616 中定义的缓存失效时间，将作为目标对象元数据保存 */
    'Expires'?: string
    /** 包括用户自定义元数据头部后缀和用户自定义元数据信息，将作为目标对象元数据保存，大小限制为2KB。注意：用户自定义元数据信息支持下划线（_），但用户自定义元数据头部后缀不支持下划线，仅支持减号（-） */
    'x-cos-meta-*'?: string
  }
  /** putObjectCopy 接口返回值 */
  interface PutObjectCopyResult extends GeneralResult {
    ETag: string
    CRC64: string
    LastModified: string
    VersionId: string
    Location: Location
  }

  // putObjectTagging
  /** putObjectTagging 接口参数 */
  interface PutObjectTaggingParams extends ObjectParams {
    /** 标签集合，最多支持10个标签 */
    Tags: Tag[]
    /** 对象的版本 ID；当未启用版本控制时，该节点的值为空字符串；当启用版本控制时，启用版本控制之前的对象，其版本 ID 为 null；当暂停版本控制时，新上传的对象其版本 ID 为 null，且同一个对象最多只存在一个版本 ID 为 null 的对象版本 */
    VersionId?: VersionId
  }
  /** putObjectTagging 接口返回值 */
  type PutObjectTaggingResult = GeneralResult

  // getObjectTagging
  /** getObjectTagging 接口参数 */
  type GetObjectTaggingParams = ObjectParams
  /** getObjectTagging 接口返回值 */
  interface GetObjectTaggingResult extends GeneralResult {
    /** 标签集合，最多支持10个标签 */
    Tags: Tag[]
  }

  // deleteObjectTagging
  /** deleteObjectTagging 接口参数 */
  type DeleteObjectTaggingParams = ObjectParams
  /** deleteObjectTagging 接口返回值 */
  type DeleteObjectTaggingResult = GeneralResult

  // multipartInit
  /** multipartInit 接口参数 */
  interface MultipartInitParams extends ObjectParams {
    /** RFC 2616 中定义的缓存指令，将作为对象元数据保存 */
    'CacheControl'?: string
    /** RFC 2616 中定义的文件名称，将作为对象元数据保存 */
    'ContentDisposition'?: string
    /** RFC 2616 中定义的编码格式，将作为对象元数据保存 */
    'ContentEncoding'?: string
    /** RFC 2616 中定义的 HTTP 请求内容类型（MIME），此头部用于描述待上传对象的内容类型，将作为对象元数据保存。例如text/html或 image/jpeg */
    'ContentType'?: string
    /** RFC 2616 中定义的缓存失效时间，将作为对象元数据保存 */
    'Expires'?: string
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    'ACL'?: ObjectACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantRead'?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantReadAcp'?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantWriteAcp'?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantFullControl'?: Grant
    /** 请求里的 Url Query 参数 */
    'Query'?: Query
    /** 对象存储类型。例如 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING。默认值：STANDARD */
    'StorageClass'?: StorageClass
    /** 包括用户自定义元数据头部后缀和用户自定义元数据信息，将作为对象元数据保存，大小限制为2KB。注意：用户自定义元数据信息支持下划线（_），但用户自定义元数据头部后缀不支持下划线，仅支持减号（-） */
    'x-cos-meta-*'?: string
  }
  /** multipartInit 接口返回值 */
  interface MultipartInitResult extends GeneralResult {
    UploadId: string
  }

  // multipartUpload
  /** multipartUpload 接口参数 */
  interface MultipartUploadParams extends ObjectParams {
    /** 分块上传的任务 ID */
    UploadId: UploadId
    /** 标识本次分块上传的编号，范围在1 - 10000 */
    PartNumber: PartNumber
    /** 要上传分片内容 */
    Body: UploadBody
    /** 要上传分片内容大小 */
    ContentLength?: number
    /** 服务端加密算法 */
    ServerSideEncryption?: string
  }
  /** multipartUpload 接口返回值 */
  interface MultipartUploadResult extends GeneralResult {
    /** 返回对象的 MD5 算法校验值，ETag 的值可以用于检查分块的内容是否发生变化 */
    ETag: ETag
  }

  // uploadPartCopy
  /** uploadPartCopy 接口参数 */
  interface UploadPartCopyParams extends ObjectParams {
    /** 源对象 URL 路径，可以通过 versionid 子资源指定历史版本 */
    CopySource: string
    /** 分块上传的任务 ID */
    UploadId: UploadId
    /** 标识本次分块上传的编号，范围在1 - 10000 */
    PartNumber: PartNumber
    /** 源对象的字节范围，范围值必须使用 bytes=first-last 格式，first 和 last 都是基于 0 开始的偏移量。例如 bytes=0-9 表示您希望拷贝源对象的开头10个字节的数据，如果不指定，则表示拷贝整个对象 */
    CopySourceRange?: string
    /** 当 Object 在指定时间后被修改，则执行操作，否则返回412，可与 x-cos-copy-source-If-None-Match 一起使用，与其他条件联合使用返回冲突 */
    CopySourceIfModifiedSince?: string
    /** 当 Object 在指定时间后未被修改，则执行操作，否则返回412，可与 x-cos-copy-source-If-Match 一起使用，与其他条件联合使用返回冲突 */
    CopySourceIfUnmodifiedSince?: string
    /** 当 Object 的 Etag 和给定一致时，则执行操作，否则返回412，可与 x-cos-copy-source-If-Unmodified-Since 一起使用，与其他条件联合使用返回冲突 */
    CopySourceIfMatch?: string
    /** 当 Object 的 Etag 和给定不一致时，则执行操作，否则返回412，可与 x-cos-copy-source-If-Modified-Since 一起使用，与其他条件联合使用返回冲突 */
    CopySourceIfNoneMatch?: string
  }
  /** uploadPartCopy 接口返回值 */
  interface UploadPartCopyResult extends GeneralResult {
    /** 返回对象的 MD5 算法校验值，ETag 的值可以用于检查分块的内容是否发生变化 */
    ETag: ETag
  }

  // multipartComplete
  /** multipartComplete 接口参数 */
  interface MultipartCompleteParams extends ObjectParams {
    /** 分块上传的任务 ID */
    UploadId: UploadId
    /** 用来说明本次分块上传中每个块的信息 */
    Parts: Part[]
  }
  /** multipartComplete 接口返回值 */
  interface MultipartCompleteResult extends GeneralResult {
    /** 使用 Upload Part 请求上传分块成功后返回的 ETag 响应头部的值 */
    ETag: ETag
    /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/images/1.jpg */
    Location: Location
    /** 对象的版本 ID；当未启用版本控制时，该节点的值为空字符串；当启用版本控制时，启用版本控制之前的对象，其版本 ID 为 null；当暂停版本控制时，新上传的对象其版本 ID 为 null，且同一个对象最多只存在一个版本 ID 为 null 的对象版本 */
    VersionId?: VersionId
  }

  // multipartList
  /** multipartList 接口参数 */
  interface MultipartListParams extends BucketParams {
    /** 限定返回的 Object key 必须以 Prefix 作为前缀。注意使用 prefix 查询时，返回的 key 中仍会包含 Prefix。 */
    Prefix: Prefix
    /** 一个字符的分隔符，常用 / 字符，用于对对象键进行分组。所有对象键中从 prefix 或从头（如未指定 prefix）到首个 delimiter 之间相同的部分将作为 CommonPrefixes 下的一个 Prefix 节点。被分组的对象键不再出现在后续对象列表中 */
    Delimiter: Delimiter
    /** 设置最大返回的 multipart 数量，合法取值从1到1000，默认1000 */
    MaxUploads?: number
    /** 与 upload-id-marker 一起使用：当 upload-id-marker 未被指定时，ObjectName 字母顺序大于 key-marker 的条目将被列出。当 upload-id-marker 被指定时，ObjectName 字母顺序大于 key-marker 的条目被列出，ObjectName 字母顺序等于 key-marker 同时 UploadId 大于 upload-id-marker 的条目将被列出。 */
    KeyMarker?: Key
    /** 与 key-marker 一起使用：当 key-marker 未被指定时，upload-id-marker 将被忽略。当 key-marker 被指定时，ObjectName字母顺序大于 key-marker 的条目被列出，ObjectName 字母顺序等于 key-marker 同时 UploadId 大于 upload-id-marker 的条目将被列出。 */
    UploadIdMarker?: UploadId
    /** 规定返回值的编码方式，可选值：url，代表返回的对象键为 URL 编码（百分号编码）后的值，例如“腾讯云”将被编码为%E8%85%BE%E8%AE%AF%E4%BA%91 */
    EncodingType?: EncodingType
  }
  /** multipartList 接口返回值 */
  interface MultipartListResult extends GeneralResult {
    /** 每个上传任务的信息 */
    Upload: {
      /** 对象键 */
      Key: Key
      /** 分块上传的任务 ID */
      UploadId: UploadId
      /** 上传任务发起者的信息 */
      Initiator: Initiator
      /** 上传任务所有者的信息 */
      Owner: Owner
      /** 对象存储类型。枚举值 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING @see https://cloud.tencent.com/document/product/436/33417 */
      StorageClass: StorageClass
      /** UploadId 的创建时间，为 ISO8601 格式，例如2019-05-24T10:56:40Z */
      Initiated: IsoDateTime
    }[]
    /** 仅当响应条目有截断（IsTruncated 为 true）才会返回该节点，该节点的值为当前响应条目中的最后一个对象键，当需要继续请求后续条目时，将该节点的值作为下一次请求的 marker 参数传入 */
    IsTruncated: BooleanString
    /** 假如返回条目被截断，则返回的 NextKeyMarker 就是下一个条目的起点。 */
    NextKeyMarker: Key
    /** 假如返回条目被截断，则返回的 UploadId 就是下一个条目的起点。 */
    NextUploadIdMarker: UploadId
  }

  // multipartListPart
  /** multipartListPart 接口参数 */
  interface MultipartListPartParams extends ObjectParams {
    /** 请求的对象键，最前面不带 /，例如 images/1.jpg */
    Key: Key
    /** 标识本次分块上传的 ID，使用 Initiate Multipart Upload 接口初始化分块上传时得到的 UploadId */
    UploadId: UploadId
    /** 单次返回最大的条目数量，默认1000 */
    MaxParts?: number
    /** 默认以 UTF-8 二进制顺序列出条目，所有列出条目从 marker 开始 */
    PartNumberMarker?: string
    /** 规定返回值的编码方式，可选值：url，代表返回的对象键为 URL 编码（百分号编码）后的值，例如“腾讯云”将被编码为%E8%85%BE%E8%AE%AF%E4%BA%91 */
    EncodingType?: EncodingType
  }
  /** multipartListPart 接口返回值 */
  interface MultipartListPartResult extends GeneralResult {
    /** 用来说明本次分块上传中每个块的信息 */
    Part: {
      /** 块的编号 */
      PartNumber: PartNumber
      /** 说明块最后被修改时间 */
      LastModified: IsoDateTime
      /** 块的 MD5 算法校验值 */
      ETag: ETag
      /** 说明块大小，单位是 Byte */
      Size: number
    }[]
    /** 上传任务所有者的信息 */
    Owner: Owner
    /** 上传任务发起者的信息 */
    Initiator: Initiator
    /** 假如返回条目被截断，则返回 NextMarker 就是下一个条目的起点 */
    NextPartNumberMarker: number
    /** 对象存储类型。枚举值 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING @see https://cloud.tencent.com/document/product/436/33417 */
    StorageClass: StorageClass
    /** 仅当响应条目有截断（IsTruncated 为 true）才会返回该节点，该节点的值为当前响应条目中的最后一个对象键，当需要继续请求后续条目时，将该节点的值作为下一次请求的 marker 参数传入 */
    IsTruncated: BooleanString
  }

  // multipartAbort
  /** multipartAbort 接口参数 */
  interface MultipartAbortParams extends ObjectParams {
    UploadId: string
  }
  /** multipartAbort 接口返回值 */
  type MultipartAbortResult = GeneralResult

  // sliceUploadFile
  /** sliceUploadFile 接口参数 */
  interface SliceUploadFileParams extends ObjectParams {
    /** 要上传的微信本地文件路径 */
    'FilePath': string
    /** 分块上传时，每片的字节数大小，默认值1048576（1MB） */
    'ChunkSize'?: number
    /** 分块上传时，并发数，默认值1 */
    'AsyncLimit'?: number
    /** 请求里的 Url Query 参数 */
    'Query'?: Query
    /** RFC 2616 中定义的缓存指令，将作为对象元数据保存 */
    'CacheControl'?: string
    /** RFC 2616 中定义的文件名称，将作为对象元数据保存 */
    'ContentDisposition'?: string
    /** RFC 2616 中定义的编码格式，将作为对象元数据保存 */
    'ContentEncoding'?: string
    /** RFC 2616 中定义的 HTTP 请求内容类型（MIME），此头部用于描述待上传对象的内容类型，将作为对象元数据保存。例如text/html或image/jpeg */
    'ContentType'?: string
    /** RFC 2616 中定义的缓存失效时间，将作为对象元数据保存 */
    'Expires'?: string
    /** RFC 2616 中定义的缓存失效时间，将作为对象元数据保存 */
    'Expect'?: string
    /** 允许用户自定义存储桶权限，有效值：private | public-read | public-read-write，可选 */
    'ACL'?: ObjectACL
    /** 赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantRead'?: Grant
    /** 赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantReadAcp'?: Grant
    /** 赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantWriteAcp'?: Grant
    /** 赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，可选 */
    'GrantFullControl'?: Grant
    /** 对象存储类型。枚举值 STANDARD | STANDARD_IA | ARCHIVE | DEEP_ARCHIVE | INTELLIGENT_TIERING | MAZ_STANDARD | MAZ_STANDARD_IA | MAZ_INTELLIGENT_TIERING @see https://cloud.tencent.com/document/product/436/33417 */
    'StorageClass'?: StorageClass
    /** 包括用户自定义元数据头部后缀和用户自定义元数据信息，将作为对象元数据保存，大小限制为2KB，注意：用户自定义元数据信息支持下划线（_），但用户自定义元数据头部后缀不支持下划线，仅支持减号（-） */
    'x-cos-meta-*'?: string
    /** 任务开始上传的回调方法 */
    'onTaskReady'?: (TaskId: COS.TaskId) => void
    'onTaskStart'?: (TaskInfo: COS.Task) => void
    /** 上传的进度回调方法 */
    'onProgress'?: onProgress
    /** 续传校验的进度回调方法 */
    'onHashProgress'?: onProgress
  }
  /** sliceUploadFile 接口返回值 */
  interface SliceUploadFileResult extends GeneralResult {
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/images/1.jpg */
    Location: string
    /** 对象的版本 ID */
    VersionId?: VersionId
  }

  // abortUploadTask
  /** abortUploadTask 接口参数 */
  type AbortUploadTaskParams
    = | (BucketParams & {
      /** 清理整个存储桶的未完成上传 */
      Level: 'bucket'
      AsyncLimit?: number
    })
    | (ObjectParams & {
      /** 清理指定对象的所有未完成上传 */
      Level: 'file'
      AsyncLimit?: number
    })
    | (ObjectParams & {
      /** 清理指定 UploadId；默认值为 task */
      Level?: 'task'
      UploadId: UploadId
      AsyncLimit?: number
    })
  /** abortUploadTask 接口返回值 */
  interface AbortUploadTaskResult extends GeneralResult {
    successList: Array<{ Key: Key, UploadId: UploadId }>
    errorList: Array<{ Key: Key, UploadId: UploadId }>
  }

  // uploadFiles
  type UploadFileItemParams = SliceUploadFileParams & {
    /** 上传完成回调方法 */
    onFileFinish?: onFileFinish
  }
  /** 要上传的单个文件参数 */
  interface UploadFileItemResult extends GeneralResult {
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/images/1.jpg */
    Location: string
    /** 对象的版本 ID */
    VersionId?: VersionId
  }
  interface UploadFilesParams {
    /** 要上传的文件参数列表 */
    files: UploadFileItemParams[]
    /** 使用 uploadFiles 批量上传时，文件大小大于该数值将使用按分块上传，否则将调用简单上传，单位 Byte，默认值1048576（1MB） */
    SliceSize?: number
    /** 所有文件整体上传进度回调方法 */
    onProgress?: onProgress
    /** 所有文件上传完成回调方法 */
    onFileFinish?: onFileFinish
  }
  /** uploadFiles 接口返回值 */
  interface UploadFilesResult extends GeneralResult {
    /** 文件列表上传结果 */
    files: {
      /** 单个文件上传参数 */
      options: UploadFileItemParams
      /** 单个文件上传错误信息 */
      error: CosError
      /** 单个文件上传成功信息 */
      data?: UploadFileItemResult
    }[]
  }

  // uploadFile 高级上传
  interface FileFinishInfo {
    err: CosError
    data?: UploadFileItemResult
    options: UploadFileItemParams
  }
  type onFileFinish = (
    err: CosError,
    data?: UploadFileItemResult,
    options?: UploadFileItemParams,
  ) => void

  type UploadFileParams = UploadFileItemParams & {
    /** 使用 uploadFile 高级上传时，文件大小大于该数值将使用按分块上传，否则将调用简单上传，单位 Byte，默认值1048576（1MB） */
    SliceSize?: number
  }

  /** uploadFiles 接口返回值 */
  interface UploadFileResult extends GeneralResult {
    /** 对象的实体标签（Entity Tag），是对象被创建时标识对象内容的信息标签，可用于检查对象的内容是否发生变化，例如"8e0b617ca298a564c3331da28dcb50df"。此头部并不一定返回对象的 MD5 值，而是根据对象上传和加密方式而有所不同 */
    ETag: ETag
    /** 创建的存储桶访问地址，不带 https:// 前缀，例如 examplebucket-1250000000.cos.ap-guangzhou.myqcloud.com/images/1.jpg */
    Location: string
    /** 对象的版本 ID */
    VersionId?: VersionId
  }

  // sliceCopyFile
  /** sliceCopyFile 接口参数 */
  interface SliceCopyFileParams extends ObjectParams {
    /** 源对象的 URL，其中对象键需经过 URLEncode，可以通过 versionId 参数指定源对象的版本，例如： sourcebucket-1250000001.cos.ap-shanghai.myqcloud.com/example-%E8%85%BE%E8%AE%AF%E4%BA%91.jpg 或 sourcebucket-1250000001.cos.ap-shanghai.myqcloud.com/example-%E8%85%BE%E8%AE%AF%E4%BA%91.jpg?versionId=MTg0NDUxNzYzMDc0NDMzNDExOTc */
    CopySource: string
    /** 使用 sliceCopyFile 分块复制文件时，文件大小大于该数值将使用分块复制 ，否则将调用简单复制，默认值10485760（10MB） */
    CopySliceSize?: number
    /** 使用 sliceCopyFile 分块复制文件时，每片的大小字节数，默认值10485760（10MB） */
    CopyChunkSize?: number
    SliceSize?: number
    /** 分片复制进度回调方法 */
    onProgress: onProgress
  }
  /** sliceCopyFile 接口返回值 */
  type SliceCopyFileResult = GeneralResult

  // getTaskList
  type TaskId = string
  interface Task {
    /** 上传任务 ID */
    id: TaskId
    /** 存储桶的名称，格式为<bucketname-appid>，例如examplebucket-1250000000 */
    Bucket: Bucket
    /** 存储桶所在地域 @see https://cloud.tencent.com/document/product/436/6224 */
    Region: Region
    /** 请求的对象键，最前面不带 /，例如 images/1.jpg */
    Key: Key
    /** 微信本地文件路径 */
    FilePath?: string
    /** 上传状态 */
    state:
    | 'waiting'
    | 'checking'
    | 'uploading'
    | 'error'
    | 'paused'
    | 'success'
    | 'canceled'
    /** 上传错误信息 */
    error: CosError
    /** 已上传内容大小，单位 B（字节） */
    loaded: number
    /** 上传文件大小，单位 B（字节） */
    size: number
    /** 上传速递，单位 B/s */
    speed: number
    /** 上传进度，范围 0-1，保留两位小数 */
    percent: number
    /** 续传校验进度，范围 0-1，保留两位小数 */
    hashPercent: number
  }
  /** 上传任务列表 */
  type TaskList = Task[]

  // request
  /** request 接口参数 */
  interface RequestParams {
    /** 操作方法，如 get，post，delete， head 等 HTTP 方法 */
    Method: string
    /** 请求的对象键，最前面不带 / */
    Key?: Key
    /** 请求里的 Url Query 参数 */
    Query?: Query
    /** 请求里的 Body 参数 */
    Body?: unknown
    /** 请求的 API 动作接口(可理解为不带 = 的 Query 参数)，如 acl、tagging、image_process 等 */
    Action?: Action
    /** 请求url */
    Url?: string
    /** 返回值body是否不需要解析 */
    RawBody?: boolean
    /** 返回文件内容格式，如string、blob、arraybuffer */
    DataType?: string
    ContentType?: string
    Bucket?: Bucket
    /** 存储桶所在地域 @see https://cloud.tencent.com/document/product/436/6224 */
    Region?: Region
    /** 请求时带上的 Header 字段 */
    Headers?: Headers
  }
  /** Request 接口返回值 */
  interface RequestResult extends GeneralResult {
    Body?: string | ArrayBuffer
    Response?: unknown // 万象接口可能返回 Response
  }

  // getObjectUrl
  /** getObjectUrl 接口参数 */
  interface GetObjectUrlParams extends ObjectParams {
    /** 获取的 Url 是否计算签名 */
    Sign?: boolean
    /** 请求方法 */
    Method?: Method
    /** 请求里的 Url Query 参数，传入该值中的 key/value 将会被 URLEncode */
    Query?: Query
    /** 请求里的 Url Query 参数。传入该值将直接拼接在 Url 上，不会对其进行 URLEncode */
    QueryString?: string
    /** 签名几秒后失效，默认为900秒 */
    Expires?: number
    /** 是否使用全球加速域名,默认false */
    UseAccelerate?: boolean
    /** 调用操作存储桶和对象的 API 时自定义请求域名。可以使用模板，如"{Bucket}.cos.{Region}.myqcloud.com"，即在调用 API 时会使用参数中传入的 Bucket 和 Region 进行替换。 */
    Domain?: string
    /** http协议，枚举值'http:','https:' */
    Protocol?: string
  }

  /** getObjectUrl 接口返回值 */
  interface GetObjectUrlResult {
    /** 返回对象 Url */
    Url: string
  }

  // getAuth
  interface GetAuthParams {
    /** 计算签名用的密钥 SecretId，如果不传会用实例本身的凭证，可选 */
    SecretId?: string
    /** 计算签名用的密钥 SecretKey，如果不传会用实例本身的凭证，可选 */
    SecretKey?: string
    /** 请求的存储桶，如果传入了 Bucket、Region，签名会默认加上 Host 字段，可选 */
    Bucket?: Bucket
    /** 请求的地域，如果传入了 Bucket、Region，签名会默认加上 Host 字段，可选 */
    Region?: Region
    /** 请求方法 */
    Method?: Method
    /** 请求的对象键，最前面不带 /，例如 images/1.jpg */
    Key?: Key
    /** 签名几秒后失效，默认为900秒 */
    Expires?: number
    /** 请求里的 Url Query 参数 */
    Query?: Query
    /** 请求里的 Header 参数 */
    Headers?: Headers
    /** 默认为true，将host加入签名计算，关闭后可能导致越权风险，建议保持为true */
    ForceSignHost?: boolean
  }
}

/**
 * COS 类，创建该类的实例可用于调用 COS API
 * @see https://cloud.tencent.com/document/product/436/7751
 */
declare class COS {
  // 构造方法
  constructor(options?: COS.COSOptions)

  /** 当前实例的配置 */
  options: COS.COSOptions

  // 静态属性
  /** 当前 SDK 版本号 */
  static version: string

  // 静态方法
  /** 计算签名 */
  static getAuthorization: (
    options: COS.StaticGetAuthorizationOptions,
  ) => string

  /** 工具 */
  static util: COS.Util

  // 实例方法
  /** 获取用户的 bucket 列表 @see https://cloud.tencent.com/document/product/436/8291 */
  getService(
    callback: (err: COS.CosError, data: COS.GetServiceResult) => void,
  ): void
  getService(
    params: COS.GetServiceParams,
    callback: (err: COS.CosError, data: COS.GetServiceResult) => void,
  ): void
  getService(params?: COS.GetServiceParams): Promise<COS.GetServiceResult>

  /** 创建 Bucket，并初始化访问权限 @see https://cloud.tencent.com/document/product/436/7738 */
  putBucket(
    params: COS.PutBucketParams,
    callback: (err: COS.CosError, data: COS.PutBucketResult) => void,
  ): void
  putBucket(params: COS.PutBucketParams): Promise<COS.PutBucketResult>

  /** 查看是否存在该 Bucket，是否有权限访问 @see https://cloud.tencent.com/document/product/436/7735 */
  headBucket(
    params: COS.HeadBucketParams,
    callback: (err: COS.CosError, data: COS.HeadBucketResult) => void,
  ): void
  headBucket(params: COS.HeadBucketParams): Promise<COS.HeadBucketResult>

  /** 获取 Bucket 下的 Object 列表 @see https://cloud.tencent.com/document/product/436/7734 */
  getBucket(
    params: COS.GetBucketParams,
    callback: (err: COS.CosError, data: COS.GetBucketResult) => void,
  ): void
  getBucket(params: COS.GetBucketParams): Promise<COS.GetBucketResult>

  /** 获取 Bucket 下的 Object 版本列表 @see https://cloud.tencent.com/document/product/436/35521 */
  listObjectVersions(
    params: COS.ListObjectVersionsParams,
    callback: (err: COS.CosError, data: COS.ListObjectVersionsResult) => void,
  ): void
  listObjectVersions(
    params: COS.ListObjectVersionsParams,
  ): Promise<COS.ListObjectVersionsResult>

  /** 删除 Bucket @see https://cloud.tencent.com/document/product/436/7732 */
  deleteBucket(
    params: COS.DeleteBucketParams,
    callback: (err: COS.CosError, data: COS.DeleteBucketResult) => void,
  ): void
  deleteBucket(
    params: COS.DeleteBucketParams,
  ): Promise<COS.DeleteBucketResult>

  /** 设置 Bucket 的 权限列表 @see https://cloud.tencent.com/document/product/436/7737 */
  putBucketAcl(
    params: COS.PutBucketAclParams,
    callback: (err: COS.CosError, data: COS.PutBucketAclResult) => void,
  ): void
  putBucketAcl(
    params: COS.PutBucketAclParams,
  ): Promise<COS.PutBucketAclResult>

  /** 获取 Bucket 的 权限列表 @see https://cloud.tencent.com/document/product/436/7733 */
  getBucketAcl(
    params: COS.GetBucketAclParams,
    callback: (err: COS.CosError, data: COS.GetBucketAclResult) => void,
  ): void
  getBucketAcl(
    params: COS.GetBucketAclParams,
  ): Promise<COS.GetBucketAclResult>

  /** 设置 Bucket 的 跨域设置 @see https://cloud.tencent.com/document/product/436/8279 */
  putBucketCors(
    params: COS.PutBucketCorsParams,
    callback: (err: COS.CosError, data: COS.PutBucketCorsResult) => void,
  ): void
  putBucketCors(
    params: COS.PutBucketCorsParams,
  ): Promise<COS.PutBucketCorsResult>

  /** 获取 Bucket 的 跨域设置 @see https://cloud.tencent.com/document/product/436/8274 */
  getBucketCors(
    params: COS.GetBucketCorsParams,
    callback: (err: COS.CosError, data: COS.GetBucketCorsResult) => void,
  ): void
  getBucketCors(
    params: COS.GetBucketCorsParams,
  ): Promise<COS.GetBucketCorsResult>

  /** 删除 Bucket 的 跨域设置 @see https://cloud.tencent.com/document/product/436/8283 */
  deleteBucketCors(
    params: COS.DeleteBucketCorsParams,
    callback: (err: COS.CosError, data: COS.DeleteBucketCorsResult) => void,
  ): void
  deleteBucketCors(
    params: COS.DeleteBucketCorsParams,
  ): Promise<COS.DeleteBucketCorsResult>

  /** 获取 Bucket 的 地域信息 */
  getBucketLocation(
    params: COS.GetBucketLocationParams,
    callback: (err: COS.CosError, data: COS.GetBucketLocationResult) => void,
  ): void
  getBucketLocation(
    params: COS.GetBucketLocationParams,
  ): Promise<COS.GetBucketLocationResult>

  /** 获取 Bucket 的读取权限策略 @see https://cloud.tencent.com/document/product/436/8282 */
  putBucketPolicy(
    params: COS.PutBucketPolicyParams,
    callback: (err: COS.CosError, data: COS.PutBucketPolicyResult) => void,
  ): void
  putBucketPolicy(
    params: COS.PutBucketPolicyParams,
  ): Promise<COS.PutBucketPolicyResult>

  /** 获取 Bucket 的读取权限策略 @see https://cloud.tencent.com/document/product/436/8276 */
  getBucketPolicy(
    params: COS.GetBucketPolicyParams,
    callback: (err: COS.CosError, data: COS.GetBucketPolicyResult) => void,
  ): void
  getBucketPolicy(
    params: COS.GetBucketPolicyParams,
  ): Promise<COS.GetBucketPolicyResult>

  /** 删除 Bucket 的 跨域设置 @see https://cloud.tencent.com/document/product/436/8285 */
  deleteBucketPolicy(
    params: COS.DeleteBucketPolicyParams,
    callback: (err: COS.CosError, data: COS.DeleteBucketPolicyResult) => void,
  ): void
  deleteBucketPolicy(
    params: COS.DeleteBucketPolicyParams,
  ): Promise<COS.DeleteBucketPolicyResult>

  /** 设置 Bucket 的标签 @see https://cloud.tencent.com/document/product/436/34838 */
  putBucketTagging(
    params: COS.PutBucketTaggingParams,
    callback: (err: COS.CosError, data: COS.PutBucketTaggingResult) => void,
  ): void
  putBucketTagging(
    params: COS.PutBucketTaggingParams,
  ): Promise<COS.PutBucketTaggingResult>

  /** 获取 Bucket 的标签设置 @see https://cloud.tencent.com/document/product/436/34837 */
  getBucketTagging(
    params: COS.GetBucketTaggingParams,
    callback: (err: COS.CosError, data: COS.GetBucketTaggingResult) => void,
  ): void
  getBucketTagging(
    params: COS.GetBucketTaggingParams,
  ): Promise<COS.GetBucketTaggingResult>

  /** 删除 Bucket 的 标签设置 @see https://cloud.tencent.com/document/product/436/34836 */
  deleteBucketTagging(
    params: COS.DeleteBucketTaggingParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteBucketTaggingResult,
    ) => void,
  ): void
  deleteBucketTagging(
    params: COS.DeleteBucketTaggingParams,
  ): Promise<COS.DeleteBucketTaggingResult>

  /** 设置 Bucket 生命周期 @see https://cloud.tencent.com/document/product/436/8280 */
  putBucketLifecycle(
    params: COS.PutBucketLifecycleParams,
    callback: (err: COS.CosError, data: COS.PutBucketLifecycleResult) => void,
  ): void
  putBucketLifecycle(
    params: COS.PutBucketLifecycleParams,
  ): Promise<COS.PutBucketLifecycleResult>

  /**  获取 Bucket 生命周期 @see https://cloud.tencent.com/document/product/436/8280 */
  getBucketLifecycle(
    params: COS.GetBucketLifecycleParams,
    callback: (err: COS.CosError, data: COS.GetBucketLifecycleResult) => void,
  ): void
  getBucketLifecycle(
    params: COS.GetBucketLifecycleParams,
  ): Promise<COS.GetBucketLifecycleResult>

  /** 删除 Bucket 生命周期 @see https://cloud.tencent.com/document/product/436/8278 */
  deleteBucketLifecycle(
    params: COS.DeleteBucketLifecycleParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteBucketLifecycleResult,
    ) => void,
  ): void
  deleteBucketLifecycle(
    params: COS.DeleteBucketLifecycleParams,
  ): Promise<COS.DeleteBucketLifecycleResult>

  /** 设置 Bucket 版本 @see https://cloud.tencent.com/document/product/436/19889 */
  putBucketVersioning(
    params: COS.PutBucketVersioningParams,
    callback: (
      err: COS.CosError,
      data: COS.PutBucketVersioningResult,
    ) => void,
  ): void
  putBucketVersioning(
    params: COS.PutBucketVersioningParams,
  ): Promise<COS.PutBucketVersioningResult>

  /** 获取 Bucket 版本 @see https://cloud.tencent.com/document/product/436/19888 */
  getBucketVersioning(
    params: COS.GetBucketVersioningParams,
    callback: (
      err: COS.CosError,
      data: COS.GetBucketVersioningResult,
    ) => void,
  ): void
  getBucketVersioning(
    params: COS.GetBucketVersioningParams,
  ): Promise<COS.GetBucketVersioningResult>

  /** 设置 Bucket 副本 @see https://cloud.tencent.com/document/product/436/19223 */
  putBucketReplication(
    params: COS.PutBucketReplicationParams,
    callback: (
      err: COS.CosError,
      data: COS.PutBucketReplicationResult,
    ) => void,
  ): void
  putBucketReplication(
    params: COS.PutBucketReplicationParams,
  ): Promise<COS.PutBucketReplicationResult>

  /** 获取 Bucket 副本 @see https://cloud.tencent.com/document/product/436/19222 */
  getBucketReplication(
    params: COS.GetBucketReplicationParams,
    callback: (
      err: COS.CosError,
      data: COS.GetBucketReplicationResult,
    ) => void,
  ): void
  getBucketReplication(
    params: COS.GetBucketReplicationParams,
  ): Promise<COS.GetBucketReplicationResult>

  /** 删除 Bucket 副本 @see https://cloud.tencent.com/document/product/436/19221 */
  deleteBucketReplication(
    params: COS.DeleteBucketReplicationParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteBucketReplicationResult,
    ) => void,
  ): void
  deleteBucketReplication(
    params: COS.DeleteBucketReplicationParams,
  ): Promise<COS.DeleteBucketReplicationResult>

  /** 设置 Bucket 静态网站配置信息 @see https://cloud.tencent.com/document/product/436/31930 */
  putBucketWebsite(
    params: COS.PutBucketWebsiteParams,
    callback: (err: COS.CosError, data: COS.PutBucketWebsiteResult) => void,
  ): void
  putBucketWebsite(
    params: COS.PutBucketWebsiteParams,
  ): Promise<COS.PutBucketWebsiteResult>

  /** 获取 Bucket 的静态网站配置信息 @see https://cloud.tencent.com/document/product/436/31929 */
  getBucketWebsite(
    params: COS.GetBucketWebsiteParams,
    callback: (err: COS.CosError, data: COS.GetBucketWebsiteResult) => void,
  ): void
  getBucketWebsite(
    params: COS.GetBucketWebsiteParams,
  ): Promise<COS.GetBucketWebsiteResult>

  /** 删除 Bucket 的静态网站配置 @see https://cloud.tencent.com/document/product/436/31928 */
  deleteBucketWebsite(
    params: COS.DeleteBucketWebsiteParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteBucketWebsiteResult,
    ) => void,
  ): void
  deleteBucketWebsite(
    params: COS.DeleteBucketWebsiteParams,
  ): Promise<COS.DeleteBucketWebsiteResult>

  /** 设置 Bucket 的防盗链白名单或者黑名单 @see https://cloud.tencent.com/document/product/436/32492 */
  putBucketReferer(
    params: COS.PutBucketRefererParams,
    callback: (err: COS.CosError, data: COS.PutBucketRefererResult) => void,
  ): void
  putBucketReferer(
    params: COS.PutBucketRefererParams,
  ): Promise<COS.PutBucketRefererResult>

  /** 获取 Bucket 的防盗链白名单或者黑名单 @see https://cloud.tencent.com/document/product/436/32493 */
  getBucketReferer(
    params: COS.GetBucketRefererParams,
    callback: (err: COS.CosError, data: COS.GetBucketRefererResult) => void,
  ): void
  getBucketReferer(
    params: COS.GetBucketRefererParams,
  ): Promise<COS.GetBucketRefererResult>

  /** 设置 Bucket 自定义域名 */
  putBucketDomain(
    params: COS.PutBucketDomainParams,
    callback: (err: COS.CosError, data: COS.PutBucketDomainResult) => void,
  ): void
  putBucketDomain(
    params: COS.PutBucketDomainParams,
  ): Promise<COS.PutBucketDomainResult>

  /** 获取 Bucket 的自定义域名 */
  getBucketDomain(
    params: COS.GetBucketDomainParams,
    callback: (err: COS.CosError, data: COS.GetBucketDomainResult) => void,
  ): void
  getBucketDomain(
    params: COS.GetBucketDomainParams,
  ): Promise<COS.GetBucketDomainResult>

  /** 删除 Bucket 自定义域名 */
  deleteBucketDomain(
    params: COS.DeleteBucketDomainParams,
    callback: (err: COS.CosError, data: COS.DeleteBucketDomainResult) => void,
  ): void
  deleteBucketDomain(
    params: COS.DeleteBucketDomainParams,
  ): Promise<COS.DeleteBucketDomainResult>

  /** 设置 Bucket 的回源 */
  putBucketOrigin(
    params: COS.PutBucketOriginParams,
    callback: (err: COS.CosError, data: COS.PutBucketOriginResult) => void,
  ): void
  putBucketOrigin(
    params: COS.PutBucketOriginParams,
  ): Promise<COS.PutBucketOriginResult>

  /** 获取 Bucket 的回源 */
  getBucketOrigin(
    params: COS.GetBucketOriginParams,
    callback: (err: COS.CosError, data: COS.GetBucketOriginResult) => void,
  ): void
  getBucketOrigin(
    params: COS.GetBucketOriginParams,
  ): Promise<COS.GetBucketOriginResult>

  /** 删除 Bucket 的回源 */
  deleteBucketOrigin(
    params: COS.DeleteBucketOriginParams,
    callback: (err: COS.CosError, data: COS.DeleteBucketOriginResult) => void,
  ): void
  deleteBucketOrigin(
    params: COS.DeleteBucketOriginParams,
  ): Promise<COS.DeleteBucketOriginResult>

  /** 设置 Bucket 的日志记录 @see https://cloud.tencent.com/document/product/436/17054 */
  putBucketLogging(
    params: COS.PutBucketLoggingParams,
    callback: (err: COS.CosError, data: COS.PutBucketLoggingResult) => void,
  ): void
  putBucketLogging(
    params: COS.PutBucketLoggingParams,
  ): Promise<COS.PutBucketLoggingResult>

  /** 获取 Bucket 的日志记录 @see https://cloud.tencent.com/document/product/436/17053 */
  getBucketLogging(
    params: COS.GetBucketLoggingParams,
    callback: (err: COS.CosError, data: COS.GetBucketLoggingResult) => void,
  ): void
  getBucketLogging(
    params: COS.GetBucketLoggingParams,
  ): Promise<COS.GetBucketLoggingResult>

  /** 创建/编辑 Bucket 的清单任务 @see https://cloud.tencent.com/document/product/436/33707 */
  putBucketInventory(
    params: COS.PutBucketInventoryParams,
    callback: (err: COS.CosError, data: COS.PutBucketInventoryResult) => void,
  ): void
  putBucketInventory(
    params: COS.PutBucketInventoryParams,
  ): Promise<COS.PutBucketInventoryResult>

  /** 获取 Bucket 的清单任务信息 @see https://cloud.tencent.com/document/product/436/33705 */
  getBucketInventory(
    params: COS.GetBucketInventoryParams,
    callback: (err: COS.CosError, data: COS.GetBucketInventoryResult) => void,
  ): void
  getBucketInventory(
    params: COS.GetBucketInventoryParams,
  ): Promise<COS.GetBucketInventoryResult>

  /** 获取 Bucket 的清单任务信息 @see https://cloud.tencent.com/document/product/436/33706 */
  listBucketInventory(
    params: COS.ListBucketInventoryParams,
    callback: (
      err: COS.CosError,
      data: COS.ListBucketInventoryResult,
    ) => void,
  ): void
  listBucketInventory(
    params: COS.ListBucketInventoryParams,
  ): Promise<COS.ListBucketInventoryResult>

  /** 删除 Bucket 的清单任务 @see https://cloud.tencent.com/document/product/436/33704 */
  deleteBucketInventory(
    params: COS.DeleteBucketInventoryParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteBucketInventoryResult,
    ) => void,
  ): void
  deleteBucketInventory(
    params: COS.DeleteBucketInventoryParams,
  ): Promise<COS.DeleteBucketInventoryResult>

  /** 启用或者暂停存储桶的全球加速功能 @see https://cloud.tencent.com/document/product/436/38869 */
  putBucketAccelerate(
    params: COS.PutBucketAccelerateParams,
    callback: (
      err: COS.CosError,
      data: COS.PutBucketAccelerateResult,
    ) => void,
  ): void
  putBucketAccelerate(
    params: COS.PutBucketAccelerateParams,
  ): Promise<COS.PutBucketAccelerateResult>

  /** 查询存储桶的全球加速功能配置 @see https://cloud.tencent.com/document/product/436/38868 */
  getBucketAccelerate(
    params: COS.GetBucketAccelerateParams,
    callback: (
      err: COS.CosError,
      data: COS.GetBucketAccelerateResult,
    ) => void,
  ): void
  getBucketAccelerate(
    params: COS.GetBucketAccelerateParams,
  ): Promise<COS.GetBucketAccelerateResult>

  /** 取回对应对象（Object）的元数据，Head的权限与Get的权限一致 @see https://cloud.tencent.com/document/product/436/7745 */
  headObject(
    params: COS.HeadObjectParams,
    callback: (err: COS.CosError, data: COS.HeadObjectResult) => void,
  ): void
  headObject(params: COS.HeadObjectParams): Promise<COS.HeadObjectResult>

  /** 下载对象（Object） @see https://cloud.tencent.com/document/product/436/7753 */
  getObject(
    params: COS.GetObjectParams,
    callback: (err: COS.CosError, data: COS.GetObjectResult) => void,
  ): void
  getObject(params: COS.GetObjectParams): Promise<COS.GetObjectResult>

  /** 简单上传对象（Object）至指定存储桶 @see https://cloud.tencent.com/document/product/436/7749 */
  putObject(
    params: COS.PutObjectParams,
    callback: (err: COS.CosError, data: COS.PutObjectResult) => void,
  ): void
  putObject(params: COS.PutObjectParams): Promise<COS.PutObjectResult>

  /** 使用 wx.uploadFile 简单上传本地文件 */
  postObject(
    params: COS.PostObjectParams,
    callback: (err: COS.CosError, data: COS.PostObjectResult) => void,
  ): void
  postObject(params: COS.PostObjectParams): Promise<COS.PostObjectResult>

  /** 删除一个指定的对象（Object） @see https://cloud.tencent.com/document/product/436/7743 */
  deleteObject(
    params: COS.DeleteObjectParams,
    callback: (err: COS.CosError, data: COS.DeleteObjectResult) => void,
  ): void
  deleteObject(
    params: COS.DeleteObjectParams,
  ): Promise<COS.DeleteObjectResult>

  /** 批量删除指定存储桶中的多个对象（Object） @see https://cloud.tencent.com/document/product/436/8289 */
  deleteMultipleObject(
    params: COS.DeleteMultipleObjectParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteMultipleObjectResult,
    ) => void,
  ): void
  deleteMultipleObject(
    params: COS.DeleteMultipleObjectParams,
  ): Promise<COS.DeleteMultipleObjectResult>

  /** 获取 Object 的权限列表 @see https://cloud.tencent.com/document/product/436/7744 */
  getObjectAcl(
    params: COS.GetObjectAclParams,
    callback: (err: COS.CosError, data: COS.GetObjectAclResult) => void,
  ): void
  getObjectAcl(
    params: COS.GetObjectAclParams,
  ): Promise<COS.GetObjectAclResult>

  /** 设置 Object 的权限列表 @see https://cloud.tencent.com/document/product/436/7748 */
  putObjectAcl(
    params: COS.PutObjectAclParams,
    callback: (err: COS.CosError, data: COS.PutObjectAclResult) => void,
  ): void
  putObjectAcl(
    params: COS.PutObjectAclParams,
  ): Promise<COS.PutObjectAclResult>

  /** 跨域资源共享（CORS）的预检（Preflight）请求 @see https://cloud.tencent.com/document/product/436/8288 */
  optionsObject(
    params: COS.OptionsObjectParams,
    callback: (err: COS.CosError, data: COS.OptionsObjectResult) => void,
  ): void
  optionsObject(
    params: COS.OptionsObjectParams,
  ): Promise<COS.OptionsObjectResult>

  /** 恢复归档对象 @see https://cloud.tencent.com/document/product/436/12633 */
  restoreObject(
    params: COS.RestoreObjectParams,
    callback: (err: COS.CosError, data: COS.RestoreObjectResult) => void,
  ): void
  restoreObject(
    params: COS.RestoreObjectParams,
  ): Promise<COS.RestoreObjectResult>

  /** 复制对象 @see https://cloud.tencent.com/document/product/436/10881 */
  putObjectCopy(
    params: COS.PutObjectCopyParams,
    callback: (err: COS.CosError, data: COS.PutObjectCopyResult) => void,
  ): void
  putObjectCopy(
    params: COS.PutObjectCopyParams,
  ): Promise<COS.PutObjectCopyResult>

  /** 设置对象标签 @see https://cloud.tencent.com/document/product/436/42997 */
  putObjectTagging(
    params: COS.PutObjectTaggingParams,
    callback: (err: COS.CosError, data: COS.PutObjectTaggingResult) => void,
  ): void
  putObjectTagging(
    params: COS.PutObjectTaggingParams,
  ): Promise<COS.PutObjectTaggingResult>

  /** 查询对象标签 @see https://cloud.tencent.com/document/product/436/42998 */
  getObjectTagging(
    params: COS.GetObjectTaggingParams,
    callback: (err: COS.CosError, data: COS.GetObjectTaggingResult) => void,
  ): void
  getObjectTagging(
    params: COS.GetObjectTaggingParams,
  ): Promise<COS.GetObjectTaggingResult>

  /** 删除对象标签 @see https://cloud.tencent.com/document/product/436/42999 */
  deleteObjectTagging(
    params: COS.DeleteObjectTaggingParams,
    callback: (
      err: COS.CosError,
      data: COS.DeleteObjectTaggingResult,
    ) => void,
  ): void
  deleteObjectTagging(
    params: COS.DeleteObjectTaggingParams,
  ): Promise<COS.DeleteObjectTaggingResult>

  /** 初始化分块上传 @see https://cloud.tencent.com/document/product/436/7746 */
  multipartInit(
    params: COS.MultipartInitParams,
    callback: (err: COS.CosError, data: COS.MultipartInitResult) => void,
  ): void
  multipartInit(
    params: COS.MultipartInitParams,
  ): Promise<COS.MultipartInitResult>

  /** 分块上传 @see https://cloud.tencent.com/document/product/436/7750 */
  multipartUpload(
    params: COS.MultipartUploadParams,
    callback: (err: COS.CosError, data: COS.MultipartUploadResult) => void,
  ): void
  multipartUpload(
    params: COS.MultipartUploadParams,
  ): Promise<COS.MultipartUploadResult>

  /** 分块上传 @see https://cloud.tencent.com/document/product/436/8287 */
  uploadPartCopy(
    params: COS.UploadPartCopyParams,
    callback: (err: COS.CosError, data: COS.UploadPartCopyResult) => void,
  ): void
  uploadPartCopy(
    params: COS.UploadPartCopyParams,
  ): Promise<COS.UploadPartCopyResult>

  /** 完成分块上传 @see https://cloud.tencent.com/document/product/436/7742 */
  multipartComplete(
    params: COS.MultipartCompleteParams,
    callback: (err: COS.CosError, data: COS.MultipartCompleteResult) => void,
  ): void
  multipartComplete(
    params: COS.MultipartCompleteParams,
  ): Promise<COS.MultipartCompleteResult>

  /** 分块上传任务列表查询 @see https://cloud.tencent.com/document/product/436/7736 */
  multipartList(
    params: COS.MultipartListParams,
    callback: (err: COS.CosError, data: COS.MultipartListResult) => void,
  ): void
  multipartList(
    params: COS.MultipartListParams,
  ): Promise<COS.MultipartListResult>

  /** 上传的分块列表查询 @see https://cloud.tencent.com/document/product/436/7747 */
  multipartListPart(
    params: COS.MultipartListPartParams,
    callback: (err: COS.CosError, data: COS.MultipartListPartResult) => void,
  ): void
  multipartListPart(
    params: COS.MultipartListPartParams,
  ): Promise<COS.MultipartListPartResult>

  /** 抛弃分块上传 @see https://cloud.tencent.com/document/product/436/7740 */
  multipartAbort(
    params: COS.MultipartAbortParams,
    callback: (err: COS.CosError, data: COS.MultipartAbortResult) => void,
  ): void
  multipartAbort(
    params: COS.MultipartAbortParams,
  ): Promise<COS.MultipartAbortResult>

  /** 分片上传文件，封装好分片上传的多个步骤的上传方法。 */
  sliceUploadFile(
    params: COS.SliceUploadFileParams,
    callback: (err: COS.CosError, data: COS.SliceUploadFileResult) => void,
  ): void
  sliceUploadFile(
    params: COS.SliceUploadFileParams,
  ): Promise<COS.SliceUploadFileResult>

  /** 清理分片上传 UploadId，封装好的清理单个文件或存储桶所有文件未完成的 UploadId。 */
  abortUploadTask(
    params: COS.AbortUploadTaskParams,
    callback: (err: COS.CosError, data: COS.AbortUploadTaskResult) => void,
  ): void
  abortUploadTask(
    params: COS.AbortUploadTaskParams,
  ): Promise<COS.AbortUploadTaskResult>

  /** 高级上传文件 */
  uploadFile(
    params: COS.UploadFileParams,
    callback: (err: COS.CosError, data: COS.UploadFileResult) => void,
  ): void
  uploadFile(params: COS.UploadFileParams): Promise<COS.UploadFileResult>

  /** 批量上传文件 */
  uploadFiles(
    params: COS.UploadFilesParams,
    callback: (err: COS.CosError, data: COS.UploadFilesResult) => void,
  ): void
  uploadFiles(params: COS.UploadFilesParams): Promise<COS.UploadFilesResult>

  /** 分片复制文件 */
  sliceCopyFile(
    params: COS.SliceCopyFileParams,
    callback: (err: COS.CosError, data: COS.SliceCopyFileResult) => void,
  ): void
  sliceCopyFile(
    params: COS.SliceCopyFileParams,
  ): Promise<COS.SliceCopyFileResult>

  /** 获取上传任务列表 */
  getTaskList(): COS.TaskList

  /** 暂停任务 */
  pauseTask(taskId: COS.TaskId): void

  /** 重启任务 */
  restartTask(taskId: COS.TaskId): void

  /** 取消任务 */
  cancelTask(taskId: COS.TaskId): void

  /** 判断上传队列是否有未完成的任务 */
  isUploadRunning(): boolean

  /** 获取文件下载链接 @see https://cloud.tencent.com/document/product/436/35651 */
  getObjectUrl(params: COS.GetObjectUrlParams): string
  getObjectUrl(
    params: COS.GetObjectUrlParams,
    callback: (err: COS.CosError, data: COS.GetObjectUrlResult) => void,
  ): string | undefined

  /** cos.request */
  request(
    params: COS.RequestParams,
    callback: (err: COS.CosError, data: COS.RequestResult) => void,
  ): void
  request(params: COS.RequestParams): Promise<COS.RequestResult>

  /** 追加上传 @see https://cloud.tencent.com/document/product/436/7741 */
  appendObject(
    params: COS.AppendObjectParams,
    callback: (err: COS.CosError, data: COS.GeneralResult) => void,
  ): void
  appendObject(params: COS.AppendObjectParams): Promise<COS.GeneralResult>

  /** 获取 COS XMl API (v5) 签名 @see https://cloud.tencent.com/document/product/436/7778 */
  getAuth(params: COS.GetAuthParams): COS.Authorization

  on(
    action: 'task-list-update' | 'list-update',
    callback: (params: { list: COS.TaskList }) => void,
  ): void
  on(action: string, callback: (params?: unknown) => void): void
  off(
    action: 'task-list-update' | 'list-update',
    callback: (params: { list: COS.TaskList }) => void,
  ): void
  off(action: string, callback: (params?: unknown) => void): void
  emit(action: string, data?: unknown): void
}

export = COS
