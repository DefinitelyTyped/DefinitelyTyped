interface Document {
    addEventListener(type: "deviceready", listener: (ev: Event) => any, useCapture?: boolean): void;
}

declare namespace PhoneGapNfc {
    /**
     * Global object NFC.
     */
    interface Window {
        nfc: Nfc;
        ndef: Ndef;
        util: Util;
        fireNfcTagEvent(event: TagEvent, tagAsJson: string): void;
    }

    interface Tag {
        id: Array<number>;
        techTypes: Array<string>;
        type: string;
        date: string;
    }

    interface NdefRecord {
        /**
         * 3-bit TNF (Type Name Format) - use one of the TNF_* constants
         */
        tnf: number;
        /**
         * byte array, containing zero to 255 bytes, must not be null
         */
        type: Array<number>;
        /**
         * byte array, containing zero to 255 bytes, must not be null
         */
        id: Array<number>;
        /**
         * byte array, containing zero to (2 ** 32 - 1) bytes, must not be null
         */
        payload: Array<number>;
    }

    interface NdefTag extends Tag {
        canMakeReadOnly: boolean;
        isWritable: boolean;
        maxSize: number;
        ndefMessage: Array<NdefRecord>;
    }

    interface TagEvent extends Event {
        tag: Tag;
    }

    interface NdefTagEvent extends TagEvent {
        tag: NdefTag;
    }

    interface UriHelper {
        /**
         * URI identifier codes from URI Record Type Definition NFCForum-TS-RTD_URI_1.0 2006-07-24
         * index in array matches code in the spec
         */
        protocols: Array<string>;

        /**
         * Decode a URI payload bytes
         * @param data
         */
        decodePayload(data: any): string;

        /**
         * shorten a URI with standard prefix
         * @param uri
         */
        encodePayload(uri: string): Array<number>;
    }

    interface TextHelper {
        /**
         * Decode a URI payload bytes
         * @param data
         */
        decodePayload(data: any): string;

        /**
         * Encode text payload
         * @param text
         * @param lang
         * @param encoding
         */
        encodePayload(text: string, lang: string, encoding: string): Array<number>;
    }

    /**
     * The Ndef object.
     */
    interface Ndef {
        TNF_EMPTY: number;
        TNF_WELL_KNOWN: number;
        TNF_MIME_MEDIA: number;
        TNF_ABSOLUTE_URI: number;
        TNF_EXTERNAL_TYPE: number;
        TNF_UNKNOWN: number;
        TNF_UNCHANGED: number;
        TNF_RESERVED: number;

        RTD_TEXT: Array<number>; // "T"
        RTD_URI: Array<number>; // "U"
        RTD_SMART_POSTER: Array<number>; // "Sp"
        RTD_ALTERNATIVE_CARRIER: Array<number>; // "ac"
        RTD_HANDOVER_CARRIER: Array<number>; // "Hc"
        RTD_HANDOVER_REQUEST: Array<number>; // "Hr"
        RTD_HANDOVER_SELECT: Array<number>; // "Hs"

        uriHelper: UriHelper;
        textHelper: TextHelper;
        /**
         * Creates a JSON representation of a NdefRecord.
         *
         * @param tnf 3-bit TNF (Type Name Format) - use one of the TNF_* constants
         * @param type array, containing zero to 255 bytes, must not be null
         * @param id byte array, containing zero to 255 bytes, must not be null
         * @param payload byte array, containing zero to (2 ** 32 - 1) bytes, must not be null
         *
         * @return NdefRecord
         *
         * @see Ndef.textRecord, Ndef.uriRecord and Ndef.mimeMediaRecord for examples
         */
        record(tnf: number, type: Array<number>, id: Array<number>, payload: Array<number>): NdefRecord;

        /**
         * Helper that creates an NdefRecord containing plain text.
         *
         * @param text String of text to encode
         * @param languageCode ISO/IANA language code. Examples: “fi”, “en-US”, “fr- CA”, “jp”. (optional)
         * @param id byte[] (optional)
         *
         * @return NdefRecord
         */
        textRecord(text: string, languageCode: string, id: Array<number>): NdefRecord;

        /**
         * Helper that creates a NdefRecord containing a URI.
         *
         * @param uri String
         * @param id byte[] (optional)
         *
         * @return NdefRecord
         */
        uriRecord(uri: string, id: Array<number>): NdefRecord;

        /**
         * Helper that creates a NdefRecord containing an absolute URI.
         *
         * An Absolute URI record means the URI describes the payload of the record.
         *
         * For example a SOAP message could use "http://schemas.xmlsoap.org/soap/envelope/"
         * as the type and XML content for the payload.
         *
         * Absolute URI can also be used to write LaunchApp records for Windows.
         *
         * See 2.4.2 Payload Type of the NDEF Specification
         * http://www.nfc-forum.org/specs/spec_list#ndefts
         *
         * Note that by default, Android will open the URI defined in the type
         * field of an Absolute URI record (TNF=3) and ignore the payload.
         * BlackBerry and Windows do not open the browser for TNF=3.
         *
         * To write a URI as the payload use ndef.uriRecord(uri)
         *
         * @param uri String
         * @param payload byte[] or String
         * @param id byte[] (optional)
         *
         * @return NdefRecord
         */
        absoluteUriRecord(uri: string, payload: Array<number>, id: Array<number>): NdefRecord;

        /**
         * Helper that creates a NdefRecordcontaining an mimeMediaRecord.
         *
         * @param mimeType String
         * @param payload byte[]
         * @param id byte[] (optional)
         */
        mimeMediaRecord(mimeType: string, payload: Array<number>, id: Array<number>): NdefRecord;

        /**
         * Helper that creates an NDEF record containing an Smart Poster.
         *
         * @param ndefRecords array of NdefRecord
         * @param id byte[] (optional)
         *
         * @return NdefRecord
         */
        smartPoster(ndefRecords: Array<NdefRecord>, id: Array<number>): NdefRecord;

        /**
         * Helper that creates an empty NdefRecord.
         */
        emptyRecord(): NdefRecord;

        /**
         * Helper that creates an Android Application Record (AAR).
         * http://developer.android.com/guide/topics/connectivity/nfc/nfc.html#aar
         * @param packageName android package name
         */
        androidApplicationRecord(packageName: string): NdefRecord;

        /**
         * Encodes an NDEF Message into bytes that can be written to a NFC tag.
         *
         * @param ndefRecords an Array of NdefRecord
         *
         * @return Array<number>
         *
         * @see NFC Data Exchange Format (NDEF) http://www.nfc-forum.org/specs/spec_list/
         */
        encodeMessage(ndefRecords: Array<NdefRecord>): Array<number>;

        /**
         * Decodes an array bytes into an NDEF Message
         *
         * @param bytes Array<number> read from a NFC tag
         *
         * @return array of NdefRecord
         *
         * @see NFC Data Exchange Format (NDEF) http://www.nfc-forum.org/specs/spec_list/
         */
        decodeMessage(bytes: Array<number>): Array<NdefRecord>;

        /**
         * Decode the bit flags from a TNF Byte.
         *
         * @return object with decoded data
         *
         *  See NFC Data Exchange Format (NDEF) Specification Section 3.2 RecordLayout
         */
        decodeTnf(tnf_byte: number): any;

        /**
         * Encode NDEF bit flags into a TNF Byte.
         *
         * @return tnf byte
         *
         *  See NFC Data Exchange Format (NDEF) Specification Section 3.2 RecordLayout
         */
        encodeTnf(mb: number, me: number, cf: number, sr: number, il: number, tnf: number): number;

        /**
         * Convert TNF to String for user friendly display
         *
         * @param tnf tnf byte
         */
        tnfToString(tnf: number): string;
    }

    interface Util {
        /**
         * Convert bytes to string
         * @param bytes
         */
        bytesToString(bytes: Array<number>): string;

        /**
         * Convert string to bytes
         * @param string
         */
        stringToBytes(string: string): Array<number>;

        /**
         * Convert bytes to hexadecimal string
         * @param bytes
         */
        bytesToHexString(bytes: Array<number>): string;
    }

    /**
     * The Nfc object.
     */
    interface Nfc extends Util {
        /**
         * Function nfc.addTagDiscoveredListener registers the callback for tag events.
         * This event occurs when any tag is detected by the phone
         * @param callback The callback that is called when a tag is detected.
         * @param win The callback that is called when the listener is added.
         * @param fail The callback that is called if there was an error.
         */
        addTagDiscoveredListener(callback: (event: TagEvent) => void, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.addMimeTypeListener registers the callback for ndef-mime events.
         * A ndef-mime event occurs when a Ndef.TNF_MIME_MEDIA tag is read and matches the specified MIME type.
         * This function can be called multiple times to register different MIME types. You should use the same handler for all MIME messages.
         * @param mimeType The MIME type to filter for messages.
         * @param callback The callback that is called when an NDEF tag matching the MIME type is read.
         * @param win The callback that is called when the listener is added.
         * @param fail The callback that is called if there was an error.
         */
        addMimeTypeListener(mimeType: string, callback: () => void, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.addNdefListener registers the callback for ndef events.
         * A ndef event is fired when a NDEF tag is read.
         * For BlackBerry 10, you must configure the type of tags your application will read with an invoke-target in config.xml.
         * On Android registered mimeTypeListeners takes precedence over this more generic NDEF listener.
         * @param callback The callback that is called when an NDEF tag is read.
         * @param win The callback that is called when the listener is added.
         * @param fail The callback that is called if there was an error.
         */
        addNdefListener(callback: (event: NdefTagEvent) => void, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.addNdefFormatableListener registers the callback for ndef-formatable events.
         * A ndef-formatable event occurs when a tag is read that can be NDEF formatted.
         * This is not fired for tags that are already formatted as NDEF.
         * The ndef-formatable event will not contain an NdefMessage.
         * @param callback The callback that is called when NDEF formatable tag is read.
         * @param win The callback that is called when the listener is added.
         * @param fail The callback that is called if there was an error.
         */
        addNdefFormatableListener(callback: (event: NdefTagEvent) => void, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.write writes an NdefMessage to a NFC tag.
         * On Android this method must be called from within an NDEF TagEvent Handler.
         * On Windows this method may be called from within the NDEF TagEvent Handler.
         * On Windows Phone 8.1 this method should be called outside the NDEF TagEvent Handler,
         * otherwise Windows tries to read the tag contents as you are writing to the tag.
         * @param ndefMessage An array of NDEF Records.
         * @param win The callback that is called when the tag is written.
         * @param fail The callback that is called if there was an error.
         */
        write(ndefMessage: Array<NdefRecord>, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.makeReadOnly make a NFC tag read only.
         * Warning this is permanent and can not be undone.
         * On Android this method must be called from within an NDEF TagEvent Handler.
         * @param win The callback that is called when the tag is locked.
         * @param fail The callback that is called if there was an error.
         */
        makeReadOnly(win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.share writes an NdefMessage via peer-to-peer.
         * This should appear as an NFC tag to another device.
         * @param ndefMessage An array of NDEF Records.
         * @param win The callback that is called when the message is pushed.
         * @param fail The callback that is called if there was an error.
         */
        share(ndefMessage: Array<NdefRecord>, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.unshare stops sharing data via peer-to-peer.
         * @param win The callback that is called when sharing stops.
         * @param fail The callback that is called if there was an error.
         */
        unshare(win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.handover shares files to a NFC peer using handover. Files are sent by specifying a file:// or context:// URI or a list of URIs.
         * The file transfer is initiated with NFC but the transfer is completed with over Bluetooth or WiFi which is handled by a NFC handover request.
         * The Android code is responsible for building the handover NFC Message.
         * This is Android only, but it should be possible to add implementations for other platforms.
         * @param uris A URI as a String, or an array of URIs.
         * @param win The callback that is called when the message is pushed.
         * @param fail The callback that is called if there was an error.
         */
        handover(uris: string | Array<string>, win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.stopHandover stops sharing data via peer-to-peer.
         * @param win The callback that is called when sharing stops.
         * @param fail The callback that is called if there was an error.
         */
        stopHandover(win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.erase erases a tag by writing an empty message.
         * Will format unformatted tags before writing.
         * This method must be called from within an NDEF TagEvent Handler.
         * @param win The callback that is called when sharing stops.
         * @param fail The callback that is called if there was an error.
         */
        erase(win?: () => void, fail?: () => void): void;

        /**
         * Function nfc.enabled explicitly checks to see if the phone has NFC and if NFC is enabled.
         * If everything is OK, the success callback is called.
         * If there is a problem, the failure callback will be called with a reason code.
         * The reason will be NO_NFC if the device doesn't support NFC and NFC_DISABLED if the user has disabled NFC.
         * Note: that on Android the NFC status is checked before every API call NO_NFC or NFC_DISABLED can be returned in any failure function.
         * Windows will return NO_NFC_OR_NFC_DISABLED when NFC is not present or disabled.
         * If the user disabled NFC after the application started, Windows may return NFC_DISABLED.
         * Windows checks the NFC status before most API calls, but there are some cases when the NFC state can not be determined.
         * @param win The callback that is called when NFC is enabled.
         * @param fail The callback that is called when NFC is disabled or missing.
         */
        enabled(win?: (status: String) => void, fail?: (status: String) => void): void;

        /**
         * Removes the previously registered event listener added via nfc.addTagDiscoveredListener
         * @param callback The previously registered callback.
         * @param win The callback that is called when the listener is successfully removed.
         * @param fail The callback that is called if there was an error during removal.
         */
        removeTagDiscoveredListener(callback: (event: TagEvent) => void, win?: () => void, fail?: () => void): void;

        /**
         * Removes the previously registered event listener added via nfc.addMimeTypeListener
         * @param mimeType The MIME type to filter for messages.
         * @param callback The previously registered callback.
         * @param win The callback that is called when the listener is successfully removed.
         * @param fail The callback that is called if there was an error during removal.
         */
        removeMimeTypeListener(
            mimeType: string,
            callback: (event: TagEvent) => void,
            win?: () => void,
            fail?: () => void,
        ): void;

        /**
         * Removes the previously registered event listener for NDEF tags added via nfc.addNdefListener.
         * @param callback The previously registered callback.
         * @param win The callback that is called when the listener is successfully removed.
         * @param fail The callback that is called if there was an error during removal.
         */
        removeNdefListener(callback: (event: TagEvent) => void, win?: () => void, fail?: () => void): void;

        /**
         * Function showSettings opens the NFC settings for the operating system.
         * @param win Success callback function
         * @param fail Error callback function, invoked when error occurs.
         */
        showSettings(win?: () => void, fail?: () => void): void;
    }
}

declare var nfc: PhoneGapNfc.Nfc;
declare var ndef: PhoneGapNfc.Ndef;
declare var util: PhoneGapNfc.Util;

declare module "nfc" {
    export = nfc;
}

declare module "ndef" {
    export = ndef;
}

declare module "util" {
    export = util;
}
