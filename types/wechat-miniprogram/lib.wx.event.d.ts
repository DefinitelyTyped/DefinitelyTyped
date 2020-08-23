declare namespace WechatMiniprogram {
    interface Touch {
        clientX: number
        clientY: number
        force: number
        identifier: number
        pageX: number
        pageY: number
    }
    interface Event {
        currentTarget: {
            id: string
            dataset: {
                [key: string]: string
            }
            offsetTop: number
            offsetLeft: number
        }
        target: {
            id: string
            dataset: {
                [key: string]: string
            }
            offsetTop: number
            offsetLeft: number
        }
        timeStamp: number
        touches: Touch[]
        mut: boolean
        type: string
    }
    interface TapEvent extends Event {
        changedTouches: []
        detail: {
            x: number
            y: number
        }
        type: 'tap'
    }

    interface InputEvent extends Event {
        changedTouches: []
        detail: {
            cursor: number
            keyCode: number
            value: string
        }
        type: 'input'
    }
}
