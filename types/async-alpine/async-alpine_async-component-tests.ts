interface ComponentState {
    message: string;
    init(): void;
}

export default function myComponent(): ComponentState {
    return {
        message: "",
        init() {
            this.message = "my component has initialised!";
        },
    };
}
