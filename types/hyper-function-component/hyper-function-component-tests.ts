const HFC: HyperFunctionComponent = (container, props) => {
    return {
        changed(props) {},
        disconnected() {},
    };
};

HFC.tag = "div";
HFC.hfc = "test-hfc";
HFC.ver = "1.0.0";
HFC.names = [[], [], []];
