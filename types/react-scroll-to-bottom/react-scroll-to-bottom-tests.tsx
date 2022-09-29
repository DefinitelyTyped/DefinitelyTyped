import * as React from "react";
import ScrollToBottom, {
    FunctionContext, StateContext, useAnimating, useAnimatingToEnd, useAtBottom, useAtEnd,
    useAtStart, useAtTop, useMode, useObserveScrollPosition, useScrollTo, useScrollToBottom,
    useScrollToEnd, useScrollToStart, useScrollToTop, useSticky
} from "react-scroll-to-bottom";

const testing = () => {
    const scrollTo: (scrollTop: number | '100%') => void = useScrollTo();
    const scrollToBottom: () => void = useScrollToBottom();
    const scrollToEnd: () => void = useScrollToEnd();
    const scrollToStart: () => void = useScrollToStart();
    const scrollToTop: () => void = useScrollToTop();
    const callback: ({}: { scrollTop: number }) => void = () => {};
    useObserveScrollPosition(callback);
    useObserveScrollPosition(false);
    const animating: [boolean] = useAnimating();
    const animatingToEnd: [boolean] = useAnimatingToEnd();
    const atBottom: [boolean] = useAtBottom();
    const atEnd: [boolean] = useAtEnd();
    const atStart: [boolean] = useAtStart();
    const atTop: [boolean] = useAtTop();
    const mode: ['bottom' | 'top'] = useMode();
    const sticky: [boolean] = useSticky();

    return (
        <ScrollToBottom
            checkInterval={0}
            className=""
            debounce={0}
            debug={true}
            followButtonClassName=""
            initialScrollBehavior="auto"
            mode="bottom"
            nonce=""
            scroller={({ maxValue, minValue, offsetHeight, scrollHeight, scrollTop }) => 0}
            scrollViewClassName=""
        >
            <></>
        </ScrollToBottom>
    );
};

const sampleCode1 = () => {
    const exportDefault = () => (
        <ScrollToBottom className={'ROOT_CSS'}>
            <p>
                Nostrud nisi duis veniam ex esse laboris consectetur officia et. Velit cillum est veniam culpa magna sit
                exercitation excepteur consectetur ea proident. Minim pariatur nisi dolore Lorem ipsum adipisicing do.
                Ea cupidatat Lorem sunt fugiat. Irure est sunt nostrud commodo sint.
            </p>
            <p>
                Duis consectetur ad in fugiat et aliquip esse adipisicing occaecat et sunt ea occaecat ad. Tempor anim
                consequat commodo veniam nostrud sunt deserunt adipisicing Lorem Lorem magna irure. Eu ut ipsum magna
                nulla sunt duis Lorem officia pariatur. Nostrud nisi anim nostrud ea est do nostrud cupidatat occaecat
                dolor labore do anim. Laborum quis veniam ipsum ullamco voluptate sit ea qui adipisicing aliqua sunt
                dolor nulla. Nulla consequat sunt qui amet. Pariatur esse pariatur veniam non fugiat laboris eu nulla
                incididunt.
            </p>
            <p>
                Laboris duis do consectetur aliquip non aliquip ad ad quis minim. Aute magna tempor occaecat magna
                fugiat culpa. Commodo id eiusmod ea pariatur consequat fugiat minim est anim. Ipsum amet ipsum eu nisi.
                Exercitation minim amet incididunt tempor do ut id in officia eu sit est. Dolor qui laboris laboris
                tempor sunt velit eiusmod non ipsum exercitation ut sint ipsum officia.
            </p>
        </ScrollToBottom>
    );
};

const sampleCode2 = () => {
    const Content = () => {
        const scrollToBottom = useScrollToBottom();
        const [sticky] = useSticky();

        return (
            <React.Fragment>
                <p>
                    Labore commodo consectetur commodo et Lorem mollit voluptate velit adipisicing proident sit. Dolor
                    consequat nostrud aliquip ea anim enim. Culpa quis tempor et quis esse proident cupidatat
                    reprehenderit laborum ullamco.
                </p>
                <p>
                    Incididunt labore nulla cupidatat occaecat elit esse occaecat culpa irure et nisi excepteur. Duis
                    Lorem labore consectetur nostrud et voluptate culpa consequat enim reprehenderit. Id voluptate
                    occaecat anim consequat id ea eiusmod laborum proident irure veniam esse. Aliquip nostrud culpa
                    nostrud laborum cillum adipisicing dolore. Est tempor labore Lorem ad cupidatat reprehenderit
                    exercitation pariatur officia ex adipisicing cupidatat exercitation.
                </p>
                <p>
                    Est labore cupidatat exercitation est laboris et tempor Lorem irure velit ea commodo sint officia.
                    Ullamco exercitation cillum est fugiat do. Enim qui eu veniam nostrud tempor elit. Duis elit mollit
                    ut reprehenderit sit adipisicing proident culpa veniam sint veniam consectetur fugiat Lorem. Sint
                    dolor proident commodo proident non cupidatat labore.
                </p>
                {!sticky && <button onClick={scrollToBottom}>Click me to scroll to bottom</button>}
            </React.Fragment>
        );
    };

    const exportDefault = () => (
        <ScrollToBottom>
            <Content />
        </ScrollToBottom>
    );
};

const sampleCode3 = () => {
    const Content = ({ scrollToBottom, sticky }: { scrollToBottom: () => void; sticky: boolean }) => {
        return (
            <React.Fragment>
                <p>
                    Labore commodo consectetur commodo et Lorem mollit voluptate velit adipisicing proident sit. Dolor
                    consequat nostrud aliquip ea anim enim. Culpa quis tempor et quis esse proident cupidatat
                    reprehenderit laborum ullamco.
                </p>
                <p>
                    Incididunt labore nulla cupidatat occaecat elit esse occaecat culpa irure et nisi excepteur. Duis
                    Lorem labore consectetur nostrud et voluptate culpa consequat enim reprehenderit. Id voluptate
                    occaecat anim consequat id ea eiusmod laborum proident irure veniam esse. Aliquip nostrud culpa
                    nostrud laborum cillum adipisicing dolore. Est tempor labore Lorem ad cupidatat reprehenderit
                    exercitation pariatur officia ex adipisicing cupidatat exercitation.
                </p>
                <p>
                    Est labore cupidatat exercitation est laboris et tempor Lorem irure velit ea commodo sint officia.
                    Ullamco exercitation cillum est fugiat do. Enim qui eu veniam nostrud tempor elit. Duis elit mollit
                    ut reprehenderit sit adipisicing proident culpa veniam sint veniam consectetur fugiat Lorem. Sint
                    dolor proident commodo proident non cupidatat labore.
                </p>
                {!sticky && <button onClick={scrollToBottom}>Click me to scroll to bottom</button>}
            </React.Fragment>
        );
    };

    const exportDefault = () => (
        <ScrollToBottom>
            <FunctionContext.Consumer>
                {({ scrollToBottom }) => (
                    <StateContext.Consumer>
                        {({ sticky }) => <Content scrollToBottom={scrollToBottom} sticky={sticky} />}
                    </StateContext.Consumer>
                )}
            </FunctionContext.Consumer>
        </ScrollToBottom>
    );
};

const sampleCode4 = () => {
    // This is the content rendered inside the scrollable container
    const ScrollContent = () => {
        const observer = React.useCallback<({ scrollTop }: { scrollTop: number }) => void>(({ scrollTop }) => {
            console.log(scrollTop);
        }, []);

        useObserveScrollPosition(observer);

        return <div>Hello, World!</div>;
    };
};
