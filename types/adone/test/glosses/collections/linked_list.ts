namespace adoneTests.collection.LinkedList {
    const {
        collection: {
            LinkedList
        }
    } = adone;

    namespace creation {
        new LinkedList();
        new LinkedList(10);
    }

    namespace properties {
        { const a: boolean = new LinkedList().full; }
        { const a: boolean = new LinkedList().empty; }
        { const a: number = new LinkedList().maxLength; }
        { const a: number = new LinkedList().length; }
        { const a: boolean = new LinkedList().autoresize; }
    }

    namespace resize {
        { const a: boolean = new LinkedList().resize(100).full; }
    }

    namespace push {
        const a = new LinkedList<number>().push(10);
        a.next;
        a.prev;
        const b: number = a.value;
    }

    namespace pop {
        const a: number | undefined = new LinkedList<number>().pop();
    }

    namespace shift {
        const a: number | undefined = new LinkedList<number>().shift();
    }

    namespace unshift {
        const a = new LinkedList<string>().unshift("hello");
        a.next;
        a.prev;
        const b: string = a.value;
    }

    namespace pushNode {
        const a = new LinkedList<string>();
        const node = a.push("1230");
        a.pushNode(node);
    }

    namespace unshiftNode {
        const a = new LinkedList();
        const node = a.push(10);
        a.unshiftNode(node);
    }

    namespace removeNode {
        const a = new LinkedList<string>();
        const node = a.unshift("10");
        a.removeNode(node);
    }

    namespace clear {
        new LinkedList().clear();
        new LinkedList().clear(true);
    }

    namespace toArray {
        const a = new LinkedList<number>();
        const b: number[] = a.toArray();
    }

    namespace front {
        const a = new LinkedList<number>();
        const b: number = a.front;
    }

    namespace back {
        const a = new LinkedList<number>();
        const b: number = a.back;
    }

    namespace iterating {
        const a = new LinkedList<string>();
        for (const b of a) {
            const i: string = b;
        }
        const c = new LinkedList<number>();
        for (const b of c) {
            const i: number = b;
        }
    }

    namespace nextNode {
        const a = new LinkedList<string>();
        const n1 = a.push("h");
        const n2 = a.nextNode(n1);
        n1.next;
        n1.prev;
        const t: string = n1.value;
    }

    namespace map {
        const a = new LinkedList<number>();
        const f = (a: number, idx: number) => `${a}${idx}`;
        const b = a.map(f);
        const c: string = b.front;
    }

    namespace forEach {
        const a = new LinkedList<number>();

        a.forEach((a: number, b: number) => {
            const c = a + b;
        });
    }

    namespace static {
        const a: number = LinkedList.DEFAULT_LENGTH;
    }
}
