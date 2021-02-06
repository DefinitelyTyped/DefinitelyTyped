import * as React from 'react';
import {
    Link,
    Button,
    animateScroll,
    Helpers,
    Events,
    Element,
    ScrollElement,
    ScrollLink,
    scrollSpy,
    scroller,
} from 'react-scroll';

Events.scrollEvent.register('begin', (to, element) => {
    console.log('begin');
});

Events.scrollEvent.register('end', (to, element) => {
    console.log('end');
});

scrollSpy.update();

Events.scrollEvent.remove('begin');
Events.scrollEvent.remove('end');

const smothOptions = {
    a: '',
    smooth: false,
};
animateScroll.getAnimationType(smothOptions);
animateScroll.scrollToTop();
animateScroll.scrollTo(100);
animateScroll.scrollMore(100);

const linkTest1 = (
    <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onSetActive={to => {
            console.log(to);
        }}
    >
        Test 1
    </Link>
);

const linkTest2 = (
    <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
        Test 2 (delay)
    </Link>
);

const linkTest3 = (
    <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
        Test 6 (anchor)
    </Link>
);

const buttonTest = (
    <Button
        activeClass="active"
        className="btn"
        type="submit"
        value="Test 2"
        to="test2"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
    >
        Test 2
    </Button>
);

const elementTest = (
    <Element name="test1" className="element">
        test 1
    </Element>
);

const linkTest4 = (
    <Link to="firstInsideContainer" containerId="containerElement">
        Go to first element inside container
    </Link>
);

const linkTest5 = (
    <Link
        activeClass="active"
        to="target"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={1000}
        isDynamic={true}
        onSetActive={to => {
            console.log(to);
        }}
        onSetInactive={() => {}}
        ignoreCancelEvents={false}
    >
        Your name
    </Link>
);

const linkTest6 = (
    <Link
        to="target"
        saveHashHistory={true}
        spy={true}
        hashSpy={true}
    >
        Test 7 (hash history)
    </Link>
);

const options = {} as any;
animateScroll.scrollToTop(options);
animateScroll.scrollToBottom(options);
animateScroll.scrollTo(100, options);

scroller.scrollTo('myScrollToElement', {
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: 'ContainerElementID',
});

animateScroll.scrollMore(10, options);

Events.scrollEvent.register('begin', (to, element) => {
    console.log('begin', to, element);
});

Events.scrollEvent.register('end', (to, element) => {
    console.log('end', to, element);
});

Events.scrollEvent.remove('begin');
Events.scrollEvent.remove('end');

class CustomComponent extends React.Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

const CustomElement = Helpers.Element(CustomComponent);
const CustomLink = Helpers.Scroll(CustomComponent);

scroller.scrollTo('myScrollToElement', {
    duration: 1500,
    delay: 100,
    smooth: 'easeInOutQuint',
    containerId: 'ContainerElementID',
});

const CustomScrollLink = ScrollLink(CustomComponent);
<CustomScrollLink to="testTo" />;
const CustomScrollLinkWithScroller = ScrollLink(CustomComponent, {
    unmount: () => {},
    register: (name: string, element: any) => {},
    unregister: (name: string) => {},
    get: (name: string) => {},
    setActiveLink: (link: string) => {},
    getActiveLink: () => '',
    scrollTo: (to: string, props: any) => {},
});
<CustomScrollLinkWithScroller to="testTo" />;

const CustomScrollElement = ScrollElement(CustomComponent);
<CustomScrollElement name="test" id="test" />;
