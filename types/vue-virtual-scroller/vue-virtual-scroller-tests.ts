import { defineComponent } from "vue";
import { DynamicScroller, DynamicScrollerItem, IdState, RecycleScroller } from "vue-virtual-scroller";

// Basic usage
RecycleScroller({
    items: [{ id: 12 }],
    itemSize: 32,
    keyField: "id",
});

// All args
RecycleScroller({
    items: [{ id: 12, size: 12, isRed: true }],
    itemSize: 32,
    keyField: "id",
    buffer: 20,
    class: "my-class",
    direction: "horizontal",
    emitUpdate: true,
    gridItems: 5,
    itemSecondarySize: 20,
    minItemSize: 20,
    sizeField: "size",
    typeField: "isRed",
    listClass: "wow what",
    listTag: "ul",
    itemClass: "myItem",
    itemTag: "li",
});

// Working slot
RecycleScroller({
    items: [{ id: 12, size: 12, isRed: true }],
    itemSize: 32,
}, {
    attrs: {},
    slots: {
        default(props) {
            props.active; // $ExpectType boolean
            props.index; // $ExpectType number
            console.log(
                props.item.id,
                props.item.isRed,
                props.item.size,
                // @ts-expect-error field does not exist
                props.item.nonexistant,
            );
        },
    },
    emit() {},
    expose() {},
});

// Missing items prop
RecycleScroller(
    // @ts-expect-error: required list of items
    {},
);

// Dynamic scroller, missing minItemSize prop
DynamicScroller(
    // @ts-expect-error: required minItemSize
    {
        items: [{ id: 12 }],
        itemSize: 32,
    },
);

// Dynamic scroller, with all required props
DynamicScroller({
    items: [{ id: 12 }],
    itemSize: 32,
    minItemSize: 12,
});

// Dynamic scroller item, with all required props
DynamicScrollerItem({
    item: { id: 12 },
    active: false,
    sizeDependencies: [223, "that"],
});

// IdState
defineComponent({
    props: {},
    mixins: [IdState({ idProp: vm => vm.data.storage })],
});
