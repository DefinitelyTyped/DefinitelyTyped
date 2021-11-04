/**
 * 实现NFC的相关功能 [1100+]
 * 接口声明: { "name": "system.nfc" }
 */

declare module '@system.nfc' {
    /**
     * 获取客户端NFC适配器
     */
    function getNFCAdapter(): NFCAdapter;
}

/**
 * NFCAdapter 对象用于扫描和监听 NFC 标签，以及获取对应的标签实例的 API。
 */
interface NFCAdapter {
    /**
     * 开始扫描NFC标签
     */
    startDiscovery(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 关闭NFC标签扫描
     */
    stopDiscovery(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }): void;

    /**
     * 监听 NFC Tag
     */
    onDiscovered(obj: {
        /**
         * 监听 NFC Tag
         */
        callback?: (data: {
            /**
             * tech 数组，用于匹配NFC卡片具体可以使用什么标准（NfcA等实例）处理
             */
            techs: any[];
            /**
             * tag ID
             */
            id: ArrayBuffer;
            /**
             * NdefMessage 数组, 消息格式为 {id: ArrayBuffer, type: ArrayBuffer, payload: ArrayBuffer}
             */
            messages: any[];
        }) => void;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
    }): void;

    /**
     * 取消监听 NFC Tag
     */
    offDiscovered(): void;

    /**
     * 获取 Ndef 实例
     */
    getNdef(): Ndef;

    /**
     * 获取 NfcA 实例
     */
    getNfcA(): NfcA;

    /**
     * 获取 NfcB 实例
     */
    getNfcB(): NfcB;

    /**
     * 获取 NfcF 实例
     */
    getNfcF(): NfcF;

    /**
     * 获取 NfcV 实例
     */
    getNfcV(): NfcV;

    /**
     * 获取 IsoDep 实例
     */
    getIsoDep(): IsoDep;

    /**
     * 获取 MifareClassic 实例
     */
    getMifareClassic(): MifareClassic;

    /**
     * 获取 MifareUltralight 实例
     */
    getMifareUltralight(): MifareUltralight;
}

interface MifareUltralight {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface MifareClassic {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface IsoDep {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取复位信息
     */
    getHistoricalBytes(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 返回历史二进制数据
             */
            histBytes: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface Ndef {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface NfcA {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取ATQA信息
     */
    getAtqa(obj: {
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 返回 ATQA/SENS_RES 数据
             */
            atqa: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取SAK信息
     */
    getSak(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 返回 SAK/SEL_RES 数据
             */
            sak: number;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface NfcB {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface NfcF {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}

interface NfcV {
    /**
     * 断开连接
     */
    close(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 连接 NFC 标签
     */
    connect(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取最大传输长度
     */
    getMaxTransceiveLength(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: { length: number }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 获取当前标签的连接状态
     */
    isConnected(obj: {
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 是否已经建立了连接
             */
            isConnected: boolean;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 设置超时时间
     */
    setTimeout(obj: {
        /**
         * 超时时间（ms）
         */
        timeout: number;
        /**
         * 成功返回的回调函数
         */
        success?: () => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;

    /**
     * 发送数据
     */
    transceive(obj: {
        /**
         * 需要传递的二进制数据
         */
        data: ArrayBuffer;
        /**
         * 成功返回的回调函数
         */
        success?: (data: {
            /**
             * 标签返回结果
             */
            data: ArrayBuffer;
        }) => void;
        /**
         * 失败回调
         */
        fail?: (data: any, code: number) => void;
        /**
         * 调用结束
         */
        complete?: () => void;
    }): void;
}
