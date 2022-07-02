import * as React from "react";
import ReactSlider, { ReactSliderProps } from "react-slider";

class Slider extends React.Component<ReactSliderProps> {
    render() {
        return (
            <ReactSlider
                snapDragDisabled
                trackClassName="classnameForBar"
                withTracks={false}
                marks={5}
                renderMark={props => <div {...props} />}
                {...this.props}
            />
        );
    }
}

function SingleThumbSliders() {
    return (
        <>
            <ReactSlider />

            <ReactSlider
                ariaLabel="Slider"
                ariaValuetext="Text"
                className="slider"
                defaultValue={10}
                disabled
                invert
                markClassName="mark"
                marks
                max={90}
                min={10}
                minDistance={10}
                onAfterChange={(value, index) => value > 1 && index === 0}
                onBeforeChange={(value, index) => value > 1 && index === 0}
                onChange={(value, index) => value > 1 && index === 0}
                onSliderClick={value => value > 1}
                orientation="horizontal"
                pageFn={step => step * 15}
                pearling
                renderMark={props => <div {...props} />}
                renderThumb={(props, { index, value, valueNow }) => {
                    return <div {...props}>{index + valueNow + value}</div>;
                }}
                renderTrack={(props, { index, value }) => {
                    return <div {...props}>{index + value}</div>;
                }}
                snapDragDisabled
                step={2}
                thumbActiveClassName={"thumb-active"}
                thumbClassName={"thumb"}
                trackClassName={"track"}
                withTracks
            />

            <ReactSlider
                ariaValuetext={({ index, value, valueNow }) => `${index + valueNow + value}`}
                marks={5}
                orientation="vertical"
                renderMark={() => null}
                renderThumb={() => null}
                renderTrack={() => null}
                value={1}
            />

            <ReactSlider marks={[0, 1, 2]} />
            <ReactSlider marks={[0, 1, 2] as const} />
        </>
    );
}

function MultipleThumbSliders() {
    const [value, setValue] = React.useState([0, 50, 100]);

    return (
        <>
            <ReactSlider
                defaultValue={[10, 50]}
                ariaLabel={["foo", "bar"]}
                ariaValuetext={({ value }) => `${value.join()}`}
                onAfterChange={value => value.join()}
                onBeforeChange={value => value.join()}
                onChange={value => value.join()}
                renderThumb={({ ref, ...props }, { value }) => (
                    <div ref={ref} {...props}>
                        {value.join()}
                    </div>
                )}
                renderTrack={(props, { value }) => {
                    return <div {...props}>{value.join()}</div>;
                }}
            />

            <ReactSlider defaultValue={[10, 50] as const} ariaLabel={["foo", "bar"] as const} />

            <ReactSlider value={value} onChange={setValue} />
        </>
    );
}

function SliderWithRef() {
    const ref = React.useRef<ReactSlider>(null);

    React.useEffect(() => {
        ref.current?.resize();
    });

    return <ReactSlider ref={ref} />;
}

interface CustomThumbProps extends React.HTMLProps<HTMLDivElement> {
    show: boolean;
}

const CustomThumb = React.forwardRef<HTMLDivElement, CustomThumbProps>((props, ref) => {
    const { show, ...otherProps } = props;
    return show ? <div ref={ref} {...otherProps} /> : null;
});

function SliderWithCustomThumb() {
    return (
        <ReactSlider
            renderThumb={(props, { index }) => {
                return <CustomThumb show={index > 0} {...props} />;
            }}
        />
    );
}

function InvalidUses() {
    return (
        <>
            {/* @ts-expect-error: single-thumb slider by default, so `ariaLabel` must be `string` */}
            <ReactSlider ariaLabel={["foo", "bar"]} />

            {/* @ts-expect-error: multiple-thumb slider, so `ariaLabel` must be `string[]` */}
            <ReactSlider ariaLabel={"foo"} value={[0, 10]} />

            {/* @ts-expect-error: only `horizontal` and `vertical` are allowed */}
            <ReactSlider orientation="foo" />

            {/* @ts-expect-error: `pageFn` must return `number` */}
            <ReactSlider pageFn={() => "foo"} />

            {/* @ts-expect-error: forbid providing both `value` and `defaultValue` */}
            <ReactSlider value={1} defaultValue={0} />

            <ReactSlider
                value={[0, 1] as readonly number[]}
                onChange={value => {
                    // @ts-expect-error
                    value.push(2);
                }}
            />

            {/* @ts-expect-error - no children allowed */}
            <ReactSlider>Test</ReactSlider>
        </>
    );
}
