import * as React from "react";
import chaiEnzyme = require("chai-enzyme");
import { expect } from "chai";
import { shallow } from "enzyme";

const Test = () => <div/>;

class Test2 extends React.Component {
    render() {
        return <div/>;
    }
}

chai.use(chaiEnzyme());

const wrapper = shallow(<Test />);

expect(wrapper).to.be.checked();
expect(wrapper).to.have.className("test");
expect(wrapper).to.have.descendants({ a: "b" });
expect(wrapper).to.have.descendants(Test);
expect(wrapper).to.have.exactly(1).descendants(Test2);
expect(wrapper).to.have.descendants("div");
expect(wrapper).to.be.disabled();
expect(wrapper).to.be.blank();
expect(wrapper).to.be.present();
expect(wrapper).to.have.html("<div></div>");
expect(wrapper).to.have.id("test");
expect(wrapper).to.have.ref("test");
expect(wrapper).to.be.selected();
expect(wrapper).to.have.tagName("div");
expect(wrapper).to.have.text("");
expect(wrapper).to.contain.text("");
expect(wrapper).to.have.type(Test);
expect(wrapper).to.have.value("test");
expect(wrapper).to.have.attr("test", "test");
expect(wrapper).to.have.data("test", "Test");
expect(wrapper).to.have.style("background", "green");
expect(wrapper).to.have.state("test", "test");
expect(wrapper).to.have.prop("test", 5);
expect(wrapper).to.have.props(["test1", "test2"]);
expect(wrapper).to.have.props({ test: 5 });
expect(wrapper).to.contain(<Test/>);
expect(wrapper).to.containMatchingElement(<Test/>);
expect(wrapper).to.match(<Test/>);
