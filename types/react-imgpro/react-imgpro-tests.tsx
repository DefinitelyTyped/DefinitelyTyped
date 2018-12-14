import * as React from 'react';
import ProcessImage from "react-imgpro";

class Test extends React.Component<any> {
    render() {
        return (
            <ProcessImage
                image="http://test-img.com"
                contain={{
                    width: 500,
                    height: 200,
                    mode: "horizontal_right",
                }}
                customCdn="http://test.cdn"
                storage={true}
                scale={false}
                onProcessFinish={() => console.log("onProcessFinish")}
            >
                <div className="one"/>
                <div className="two"/>
                <div className="three"/>
            </ProcessImage>
        );
    }
}
