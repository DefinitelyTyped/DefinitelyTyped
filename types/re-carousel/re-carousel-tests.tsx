import Recarousel = require('re-carousel');
import { CSSProperties } from 'react';

// <Recarousel> props
{
    const carousel = <Recarousel />;
    const looping = <Recarousel loop />;
    const autoAdvance = <Recarousel auto />;
    const interval = <Recarousel interval={5} />;
    const duration = <Recarousel duration={5} />;
    const axisX = <Recarousel axis="x" />;
    const axisY = <Recarousel axis="y" />;
    // @ts-expect-error
    const axisZ = <Recarousel axis="z" />;
    const minMove = <Recarousel minMove={5} />;

    const style: CSSProperties = { background: 'red' };
    const styled = <Recarousel style={style} />;

    const emptyOnTransitionEnd = <Recarousel onTransitionEnd={() => {}} />;

    const onTransitionEnd = (
        frames: { next: HTMLDivElement; prev: HTMLDivElement; current: HTMLDivElement },
        duration: number,
    ) => {};
    const notEmptyOnTransitionEnd = <Recarousel onTransitionEnd={onTransitionEnd} />;
}

// <Recarousel> passes in the `axis` value from its props to the widget props. If
// `axis` isn't defined on <Recarousel>, it will pass as `undefined` into MyWidget.
// Therefore, MyWidget must define `axis` as possibly undefined.
// This also goes for `loop`, `auto`, and `interal

// Widget - axis prop
{
    interface MyWidgetProps {
        axis: 'y' | 'x';
    }
    const MyWidget = (props: MyWidgetProps) => <></>;
    const MyOptionalWidget = (props: Partial<MyWidgetProps>) => <></>;

    const optionalCarousel = <Recarousel widgets={[MyOptionalWidget]} />;
    // @ts-expect-error
    const carousel = <Recarousel widgets={[MyWidget]} />;
}

// Widget - loop prop
{
    interface MyWidgetProps {
        loop: boolean;
    }
    const MyWidget = (props: MyWidgetProps) => <></>;
    const MyOptionalWidget = (props: Partial<MyWidgetProps>) => <></>;

    const optionalCarousel = <Recarousel widgets={[MyOptionalWidget]} />;
    // @ts-expect-error
    const carousel = <Recarousel widgets={[MyWidget]} />;
}

// Widget - auto prop
{
    interface MyWidgetProps {
        auto: boolean;
    }
    const MyWidget = (props: MyWidgetProps) => <></>;
    const MyOptionalWidget = (props: Partial<MyWidgetProps>) => <></>;

    const optionalCarousel = <Recarousel widgets={[MyOptionalWidget]} />;
    // @ts-expect-error
    const carousel = <Recarousel widgets={[MyWidget]} />;
}

// Widget - interval prop
{
    interface MyWidgetProps {
        interval: number;
    }
    const MyWidget = (props: MyWidgetProps) => <></>;
    const MyOptionalWidget = (props: Partial<MyWidgetProps>) => <></>;

    const optionalCarousel = <Recarousel widgets={[MyOptionalWidget]} />;
    // @ts-expect-error
    const carousel = <Recarousel widgets={[MyWidget]} />;
}

// Widget - extra props should not be allowed
{
    interface MyWidgetProps {
        notDefined: number;
    }
    const MyWidget = (props: MyWidgetProps) => <></>;

    // @ts-expect-error
    const carousel = <Recarousel widgets={[MyWidget]} />;
}
