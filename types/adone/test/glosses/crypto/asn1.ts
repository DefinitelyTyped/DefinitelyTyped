namespace adoneTests.crypto.asn1 {
    const {
        crypto: {
            asn1
        }
    } = adone;

    let arrBuf: ArrayBuffer;
    let num: number;
    let bool: boolean;
    let str: string;
    let date: Date;

    namespace BaseBlock {
        const {
            BaseBlock
        } = asn1;

        new BaseBlock({
            blockLength: 10
        });
        new BaseBlock({
            error: "a"
        });
        new BaseBlock({
            name: "a"
        });
        new BaseBlock({
            optional: true
        });
        new BaseBlock({
            primitiveSchema: {}
        });
        new BaseBlock({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new BaseBlock({
            warnings: ["a"]
        });

        const b = new BaseBlock();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace Primitive {
        const {
            Primitive
        } = asn1;

        new Primitive({
            blockLength: 10
        });
        new Primitive({
            error: "a"
        });
        new Primitive({
            name: "a"
        });
        new Primitive({
            optional: true
        });
        new Primitive({
            primitiveSchema: {}
        });
        new Primitive({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new Primitive({
            warnings: ["a"]
        });

        const b = new Primitive();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace Constructed {
        const {
            Constructed
        } = asn1;

        new Constructed({
            blockLength: 10
        });
        new Constructed({
            error: "a"
        });
        new Constructed({
            name: "a"
        });
        new Constructed({
            optional: true
        });
        new Constructed({
            primitiveSchema: {}
        });
        new Constructed({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new Constructed({
            warnings: ["a"]
        });

        const b = new Constructed();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isIndefiniteForm;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace EndOfContent {
        const {
            EndOfContent
        } = asn1;

        new EndOfContent({
            blockLength: 10
        });
        new EndOfContent({
            error: "a"
        });
        new EndOfContent({
            name: "a"
        });
        new EndOfContent({
            optional: true
        });
        new EndOfContent({
            primitiveSchema: {}
        });
        new EndOfContent({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new EndOfContent({
            warnings: ["a"]
        });

        const b = new EndOfContent();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace Boolean {
        const {
            Boolean: _Boolean
        } = asn1;

        new _Boolean({
            blockLength: 10
        });
        new _Boolean({
            error: "a"
        });
        new _Boolean({
            name: "a"
        });
        new _Boolean({
            optional: true
        });
        new _Boolean({
            primitiveSchema: {}
        });
        new _Boolean({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new _Boolean({
            warnings: ["a"]
        });

        const b = new _Boolean();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace Sequence {
        const {
            Sequence
        } = asn1;

        new Sequence({
            blockLength: 10
        });
        new Sequence({
            error: "a"
        });
        new Sequence({
            name: "a"
        });
        new Sequence({
            optional: true
        });
        new Sequence({
            primitiveSchema: {}
        });
        new Sequence({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new Sequence({
            warnings: ["a"]
        });

        const b = new Sequence();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isIndefiniteForm;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace Set {
        const {
            Set
        } = asn1;

        new Set({
            blockLength: 10
        });
        new Set({
            error: "a"
        });
        new Set({
            name: "a"
        });
        new Set({
            optional: true
        });
        new Set({
            primitiveSchema: {}
        });
        new Set({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new Set({
            warnings: ["a"]
        });

        const b = new Set();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isIndefiniteForm;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace Null {
        const {
            Null: Null
        } = asn1;

        new Null({
            blockLength: 10
        });
        new Null({
            error: "a"
        });
        new Null({
            name: "a"
        });
        new Null({
            optional: true
        });
        new Null({
            primitiveSchema: {}
        });
        new Null({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new Null({
            warnings: ["a"]
        });

        const b = new Null();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
        }

        str = b.warnings[0];
    }

    namespace OctetString {
        const {
            OctetString
        } = asn1;

        new OctetString({
            blockLength: 10
        });
        new OctetString({
            error: "a"
        });
        new OctetString({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new OctetString({
            warnings: ["a"]
        });

        const b = new OctetString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isConstructed;
            bool = b.valueBlock.isHexOnly;
            bool = b.valueBlock.isIndefiniteForm;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            const [v] = b.valueBlock.value;
            num = v.blockLength;
            str = v.error;
            v.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = v.toBER();
            {
                const j = v.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = v.valueBeforeDecode;
            str = v.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace BitString {
        const {
            BitString
        } = asn1;

        new BitString({
            blockLength: 10
        });
        new BitString({
            error: "a"
        });
        new BitString({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new BitString({
            warnings: ["a"]
        });

        const b = new BitString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isConstructed;
            bool = b.valueBlock.isHexOnly;
            bool = b.valueBlock.isIndefiniteForm;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            const [v] = b.valueBlock.value;
            num = v.blockLength;
            str = v.error;
            v.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = v.toBER();
            {
                const j = v.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = v.valueBeforeDecode;
            str = v.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace Integer {
        const {
            Integer
        } = asn1;

        new Integer({
            value: 10
        });

        const b = new Integer();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            num = b.valueBlock.valueDec;
        }

        str = b.warnings[0];
    }

    namespace Enumerated {
        const {
            Enumerated
        } = asn1;

        new Enumerated({
            value: 10
        });

        const b = new Enumerated();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            num = b.valueBlock.valueDec;
        }

        str = b.warnings[0];
    }

    namespace ObjectIdentifier {
        const {
            ObjectIdentifier
        } = asn1;

        new ObjectIdentifier({
            blockLength: 10
        });
        new ObjectIdentifier({
            error: "a"
        });
        new ObjectIdentifier({
            value: "ha"
        });
        new ObjectIdentifier({
            valueBeforeDecode: new ArrayBuffer(10)
        });
        new ObjectIdentifier({
            warnings: ["a"]
        });

        const b = new ObjectIdentifier();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace Utf8String {
        const {
            Utf8String
        } = asn1;

        new Utf8String({
            value: "ha"
        });

        const b = new Utf8String({
            value: "a"
        });

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
        }

        str = b.warnings[0];
    }

    namespace BmpString {
        const {
            BmpString
        } = asn1;

        new BmpString({
            value: "ha"
        });

        const b = new BmpString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.value;
        }

        str = b.warnings[0];
    }

    namespace UniversalString {
        const {
            UniversalString
        } = asn1;

        new UniversalString({
            value: "ha"
        });

        const b = new UniversalString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.value;
        }

        str = b.warnings[0];
    }

    namespace NumericString {
        const {
            NumericString
        } = asn1;

        new NumericString({
            value: "123"
        });

        const b = new NumericString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace PrintableString {
        const {
            PrintableString
        } = asn1;

        new PrintableString({
            value: "123"
        });

        const b = new PrintableString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace TeletexString {
        const {
            TeletexString
        } = asn1;

        new TeletexString({
            value: "123"
        });

        const b = new TeletexString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace VideotexString {
        const {
            VideotexString
        } = asn1;

        new VideotexString({
            value: "123"
        });

        const b = new VideotexString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace IA5String {
        const {
            IA5String
        } = asn1;

        new IA5String({
            value: "123"
        });

        const b = new IA5String();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace GraphicString {
        const {
            GraphicString
        } = asn1;

        new GraphicString({
            value: "123"
        });

        const b = new GraphicString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace VisibleString {
        const {
            VisibleString
        } = asn1;

        new VisibleString({
            value: "123"
        });

        const b = new VisibleString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace GeneralString {
        const {
            GeneralString
        } = asn1;

        new GeneralString({
            value: "123"
        });

        const b = new GeneralString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace CharacterString {
        const {
            CharacterString
        } = asn1;

        new CharacterString({
            value: "123"
        });

        const b = new CharacterString();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace UTCTime {
        const {
            UTCTime
        } = asn1;

        new UTCTime({
            value: "123"
        });

        new UTCTime({
            blockLength: 10
        });

        new UTCTime({
            error: "a"
        });

        new UTCTime({
            isHexOnly: true
        });

        new UTCTime({
            valueBeforeDecode: new ArrayBuffer(10)
        });

        new UTCTime({
            valueDate: new Date()
        });

        new UTCTime({
            valueHex: new ArrayBuffer(10)
        });

        new UTCTime({
            warnings: ["a"]
        });

        const b = new UTCTime();

        num = b.year;
        num = b.month;
        num = b.day;
        num = b.hour;
        num = b.minute;
        num = b.second;

        arrBuf = b.toBuffer();

        b.fromDate(new Date());

        date = b.toDate();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace GeneralizedTime {
        const {
            GeneralizedTime
        } = asn1;

        new GeneralizedTime({
            value: "123"
        });

        new GeneralizedTime({
            blockLength: 10
        });

        new GeneralizedTime({
            error: "a"
        });

        new GeneralizedTime({
            isHexOnly: true
        });

        new GeneralizedTime({
            valueBeforeDecode: new ArrayBuffer(10)
        });

        new GeneralizedTime({
            valueDate: new Date()
        });

        new GeneralizedTime({
            valueHex: new ArrayBuffer(10)
        });

        new GeneralizedTime({
            warnings: ["a"]
        });

        const b = new GeneralizedTime();

        num = b.year;
        num = b.month;
        num = b.day;
        num = b.hour;
        num = b.minute;
        num = b.second;
        num = b.millisecond;

        arrBuf = b.toBuffer();

        b.fromDate(new Date());

        date = b.toDate();

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            bool = b.valueBlock.isHexOnly;
            str = b.valueBlock.value;
            arrBuf = b.valueBlock.valueBeforeDecode;
            arrBuf = b.valueBlock.valueHex;
            str = b.valueBlock.warnings[0];
        }

        str = b.warnings[0];
    }

    namespace DATE {
        const {
            DATE
        } = asn1;

        new DATE({
            value: "ha"
        });

        const b = new DATE({
            value: "a"
        });

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
        }

        str = b.warnings[0];
    }

    namespace TimeOfDay {
        const {
            TimeOfDay
        } = asn1;

        new TimeOfDay({
            value: "ha"
        });

        const b = new TimeOfDay({
            value: "a"
        });

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
        }

        str = b.warnings[0];
    }

    namespace DateTime {
        const {
            DateTime
        } = asn1;

        new DateTime({
            value: "ha"
        });

        const b = new DateTime({
            value: "a"
        });

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
        }

        str = b.warnings[0];
    }

    namespace Duration {
        const {
            Duration
        } = asn1;

        new Duration({
            value: "ha"
        });

        const b = new Duration({
            value: "a"
        });

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
        }

        str = b.warnings[0];
    }

    namespace TIME {
        const {
            TIME
        } = asn1;

        new TIME({
            value: "ha"
        });

        const b = new TIME({
            value: "a"
        });

        namespace idblock {
            num = b.idBlock.blockLength;
            str = b.idBlock.error;
            bool = b.idBlock.isConstructed;
            bool = b.idBlock.isHexOnly;
            num = b.idBlock.tagClass;
            num = b.idBlock.tagNumber;
            arrBuf = b.idBlock.toBER();
            {
                const j = b.idBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.idBlock.valueBeforeDecode;
            arrBuf = b.idBlock.valueHex;
            str = b.idBlock.warnings[0];
        }

        namespace lenblock {
            num = b.lenBlock.blockLength;
            str = b.lenBlock.error;
            b.lenBlock.fromBER(new ArrayBuffer(10), 1, 1);
            bool = b.lenBlock.isIndefiniteForm;
            num = b.lenBlock.length;
            bool = b.lenBlock.longFormUsed;
            arrBuf = b.lenBlock.toBER();
            {
                const j = b.lenBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            arrBuf = b.lenBlock.valueBeforeDecode;
            str = b.lenBlock.warnings[0];
        }

        arrBuf = b.toBER();
        arrBuf = b.toBER(true);

        {
            const j = b.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = b.valueBeforeDecode;

        namespace valueBlock {
            num = b.valueBlock.blockLength;
            str = b.valueBlock.error;
            b.valueBlock.fromBER(new ArrayBuffer(10), 0, 0);
            arrBuf = b.valueBlock.toBER();
            {
                const j = b.valueBlock.toJSON();
                num = j.blockLength;
                str = j.blockName;
                str = j.error;
                arrBuf = j.valueBeforeDecode;
                str = j.warnings[0];
            }
            str = b.valueBlock.toString();
            arrBuf = b.valueBlock.valueBeforeDecode;
            str = b.valueBlock.warnings[0];
            bool = b.valueBlock.isHexOnly;
            arrBuf = b.valueBlock.valueHex;
        }

        str = b.warnings[0];
    }

    namespace Choice {
        const {
            Choice
        } = asn1;

        new Choice({
            optional: true
        });

        const c = new Choice({
            value: [new asn1.Integer({ value: 10 })]
        });

        c.value[0].toBER();
        bool = c.optional;
    }

    namespace Any {
        const {
            Any
        } = asn1;

        const a = new Any({
            name: "A",
            optional: true
        });

        str = a.name;
        bool = a.optional;
    }

    namespace Repeated {
        const {
            Repeated
        } = asn1;

        new Repeated();
        new Repeated({
            local: true
        });
        new Repeated({
            name: "a"
        });
        new Repeated({
            optional: true
        });
        const r = new Repeated({
            value: new asn1.Any()
        });

        str = r.name;
        bool = r.optional;
        str = r.value.name;
        bool = r.value.optional;
        bool = r.local;
    }

    namespace RawData {
        const {
            RawData
        } = asn1;

        const r = new RawData({
            data: new ArrayBuffer(10)
        });
        arrBuf = r.data;
        num = r.fromBER(new ArrayBuffer(10), 0, 0);
        arrBuf = r.toBER();
    }

    namespace fromBER {
        const r = asn1.fromBER(new ArrayBuffer(10));
        num = r.offset;
        const { result } = r;
        num = result.blockLength;
        str = result.error;
        {
            const j = result.toJSON();
            num = j.blockLength;
            str = j.blockName;
            str = j.error;
            arrBuf = j.valueBeforeDecode;
            str = j.warnings[0];
        }
        arrBuf = result.valueBeforeDecode;
        str = result.warnings[0];
    }

    namespace compareSchema {
        const res = asn1.compareSchema({}, {}, {});
        bool = res.verified;
        res.result;
    }

    namespace verifySchema {
        const res = asn1.verifySchema(new ArrayBuffer(10), {});
        bool = res.verified;
        res.result;
    }
}
