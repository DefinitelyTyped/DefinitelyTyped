import * as React from "react";
import { findDOMNode } from "react-dom";
import ReactTooltip = require("react-tooltip");

export class ReactTooltipTest extends React.PureComponent {
    componentDidMount() {
        ReactTooltip.rebuild();
    }
    options: ReactTooltip.SanitizeHtmlOptions = {
        parser: {
            decodeEntities: false
        }
    };
    msgString = "<i>Tooltip With &lt;Entity&gt;</i>";
    render() {
        const getContent: ReactTooltip.GetContent = [dataTip => Math.floor(Math.random() * 100), 30];

        return <div>
            <a data-tip data-for="happyFace"> d(`･∀･)b </a>
            <ReactTooltip id="happyFace" type="error">
                <span>Show happy face</span>
            </ReactTooltip>

            <a data-tip data-for="sadFace"> இдஇ </a>
            <ReactTooltip
                id="sadFace" type="warning" effect="solid" afterHide={() => {
                console.log("afterHide");
            }}
            >
                <span>Show sad face</span>
            </ReactTooltip>

            <a data-tip data-for="global"> σ`∀´)σ </a>
            <a data-tip data-for="global"> (〃∀〃) </a>
            <ReactTooltip
                id="global" aria-haspopup="true" role="example" afterShow={() => {
                console.log("afterShow");
            }}
            >
                <p>This is a global react component tooltip</p>
                <p>You can put every thing here</p>
                <ul>
                    <li>Word</li>
                    <li>Chart</li>
                    <li>Else</li>
                </ul>
            </ReactTooltip>

            <a data-tip="custom show" data-event="click focus">( •̀д•́)</a>
            <ReactTooltip globalEventOff="click" place="top" />

            <a data-tip="custom show and hide" data-event="click" data-event-off="dblclick">( •̀д•́)</a>
            <ReactTooltip />

            <a data-tip="hover on me will keep the tootlip">(･ω´･ )́)</a>
            <ReactTooltip class="extraClass" delayHide={1000} effect="solid" />

            <a data-for="getContent" data-tip>=( •̀д•́)</a>
            <ReactTooltip id="getContent" getContent={getContent} />

            <a data-for="overTime" data-tip="3/14/1592">=( •̀д•́)</a>
            <ReactTooltip id="overTime" wrapper="span" getContent={[dateString => new Date(dateString).toISOString(), 1000]} />

            <a data-tip data-for="happyFace"> d(`･∀･)b </a>
            <ReactTooltip
                id="happyFace"
                type="error"
                event="click"
                eventOff="dblclick"
                globalEventOff="dblclick"
                isCapture={true}
                offset={{
                    left: 100,
                    bottom: 30
                }}
                multiline={true}
                className="custom-class-name"
                html={true}
                delayShow={100}
                delayHide={100}
                insecure={true}
                disable={false}
                scrollHide={true}
                resizeHide={true}
                watchWindow={true}
            >
                <span>
                    Show happy face
                </span>
                <br />
                <span>
                    Show happy face
                </span>
            </ReactTooltip>

            <p data-for="show-on-click" ref="fooShow" data-tip="tooltip" />
            <button
                onClick={() => {
                    ReactTooltip.show(findDOMNode(this.refs.fooShow) as Element);
                }}
            />
            <ReactTooltip id="show-on-click" />

            <p data-for="hide-on-click" ref="fooHide" data-tip="tooltip"/>
            <button
                onClick={() => {
                    ReactTooltip.hide(findDOMNode(this.refs.fooHide) as Element);
                }}
            />
            <ReactTooltip id="hide-on-click" />

            <CommonTooltipComponent data-tip="my tooltip" />

            <a data-tip={this.msgString} data-for="SanitizeHTMLOptions"> Sanitize HTML Options </a>
            <ReactTooltip sanitizeHtmlOptions = {this.options} id="SanitizeHTMLOptions" html={true} type="light" />
        </div>;
    }
}

const CommonTooltipComponent: React.SFC<ReactTooltip.DataProps> = (props) => (
    <div>
        <p {...props}/>
        <ReactTooltip />
    </div>
);
