import * as React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default class ReactVerticalTimelineComponentTests extends React.Component {
    render() {
        return (
            <VerticalTimeline animate={false} className="vertical-timeline--red" layout='2-columns'>
                <VerticalTimelineElement
                    iconOnClick={() => console.info('icon has been clicked')}
                    className="vertical-timeline-element--work"
                    date="2012 - present"
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work" date="2011 - present">
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    }
}
