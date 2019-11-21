import * as React from "react";
import { mount, render } from "enzyme";

describe('toBeChecked', () => {
	function Fixture() {
		return (
			<div>
				<input id="checked" defaultChecked />
				<input id="not" defaultChecked={false} />
				<input id="tertiary" defaultChecked checked={false} />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#checked')).toBeChecked();
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#not')).not.toBeChecked();
		});
	});
});

describe('toBeDisabled', () => {
	function Fixture() {
		return (
			<div>
				<input id="disabled" disabled />
				<input id="not"/>
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#disabled')).toBeDisabled();
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#not')).not.toBeDisabled();
		});
	});
});

describe('toBeEmptyRender', () => {
	function EmptyFixture(): null {
		return null;
	}
	function NonEmptyFixture() {
		return <div />;
	}

	describe('matches', () => {
		it('should pass', () => {
			expect(mount(<EmptyFixture />)).toBeEmptyRender();
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(mount(<NonEmptyFixture />)).not.toBeEmptyRender();
		});
	});
});

describe('toExist', () => {
	function Fixture() {
		return (
			<div>
				<span className="foo" />
				<span className="bar baz" />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('span')).toExist();
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('ul')).not.toExist();
		});
	});
});

describe('toContainMatchingElement', () => {
    function Fixture() {
        return (
            <div>
                <span className="foo" />
            </div>
        );
    }
    const wrapper = mount(<Fixture />);

    describe('matches', () => {
        it('should pass', () => {
            expect(wrapper).toContainMatchingElement('.foo');
        });
    });

    describe('.not matches', () => {
        it('should pass', () => {
            expect(wrapper).not.toContainMatchingElement('.bar');
        });
    });
});

describe('toContainMatchingElements', () => {
    function Fixture() {
        return (
            <div>
                <span className="foo" />
                <span className="foo" />
            </div>
        );
    }
    const wrapper = mount(<Fixture />);

    describe('matches', () => {
        it('should pass', () => {
            expect(wrapper).toContainMatchingElements(2, '.foo');
        });
    });

    describe('.not matches', () => {
        it('should pass', () => {
            expect(wrapper).not.toContainMatchingElements(1, '.foo');
        });
    });
});

describe('toContainExactlyOneMatchingElement', () => {
    function Fixture() {
        return (
            <div>
                <span className="foo" />
            </div>
        );
    }
    const wrapper = mount(<Fixture />);

    describe('matches', () => {
        it('should pass', () => {
            expect(wrapper).toContainExactlyOneMatchingElement('.foo');
        });
    });

    describe('.not matches', () => {
        it('should pass', () => {
            expect(wrapper).not.toContainExactlyOneMatchingElement('.bar');
        });
    });
});

describe('toContainReact', () => {
	class User extends React.Component<{ index: number }> {
		render() {
			return (
				<span>User {this.props.index}</span>
			);
		}
	}

	class Fixture extends React.Component {
		render() {
			return (
				<div>
					<ul>
						<li><User index={1} /></li>
						<li><User index={2} /></li>
					</ul>
				</div>
			);
		}
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper).toContainReact(<User index={1} />);
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper).not.toContainReact(<User index={9000} />);
		});
	});
});

describe('toHaveClassName', () => {
	function Fixture() {
		return (
			<div>
				<span className="foo" />
				<span className="bar baz" />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('.foo')).toHaveClassName('foo');
			expect(wrapper.find('.bar')).toHaveClassName('bar baz');
			expect(wrapper.find('.bar')).toHaveClassName('baz');
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('.foo')).not.toHaveClassName('baz');
		});
	});
});

describe('toHaveDisplayName', () => {
    function Fixture() {
        return (
            <div>
                <span id="span" />
            </div>
        );
    }
    const wrapper = mount(<Fixture />);

    describe('matches', () => {
        it('should pass', () => {
            expect(wrapper.find('#span')).toHaveDisplayName('span');
        });
    });

    describe('.not matches', () => {
        it('should pass', () => {
            expect(wrapper.find('#span')).not.toHaveDisplayName('div');
        });
    });
});

describe('toHaveHTML', () => {
	function Fixture() {
		return (
			<div id="root">
				<span id="child">Test</span>
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#child')).toHaveHTML(
				'<span id="child">Test</span>'
			);
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#child')).not.toHaveHTML('<div id="child">Test</span>');
		});
	});
});

describe('toHaveProp', () => {
	function User(props: { foo: string, bar: number[] }) {
		return (
			<div />
		);
	}

	function Fixture() {
		return (
			<div id="root">
				<User
					foo={'baz'}
					bar={[1, 2, 3]}
				/>
			</div>
		);
	}

	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should have prop "foo"', () => {
			expect(wrapper.find(User)).toHaveProp('foo');
			expect(wrapper.find(User)).toHaveProp('foo', 'baz');
		});

		it('should have prop "bar"', () => {
			expect(wrapper.find(User)).toHaveProp('bar');
			expect(wrapper.find(User)).toHaveProp('bar', [1, 2, 3]);
		});
	});

	describe('.not matches', () => {
		it('should not have prop "baz"', () => {
			expect(wrapper.find(User)).not.toHaveProp('baz');
		});
	});
});

describe('toHaveRef', () => {
	class Fixture extends React.Component {
		render() {
			return (
				<div>
					<span ref="child" />
				</div>
			);
		}
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper).toHaveRef('child');
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper).not.toHaveRef('foo');
		});
	});
});

describe('toHaveState', () => {
	class Fixture extends React.Component {
		state = {
			foo: false,
		};

		render() {
			return (
				<div />
			);
		}
	}

	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper).toHaveState('foo');
			expect(wrapper).toHaveState('foo', false);
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper).not.toHaveState('bar');
		});
	});
});

describe('toHaveStyle', () => {
	function Fixture() {
		const style1 = { height: '100%' };
		const style2 = { flex: 8 };

		return (
			<div>
				<span id="style1" style={style1} />
				<span id="style2" style={style2} />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#style1')).toHaveStyle('height', '100%');
			expect(wrapper.find('#style2')).toHaveStyle('flex', 8);
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper).not.toHaveStyle('width');
			expect(wrapper).not.toHaveStyle('height', '50%');
		});
	});
});

describe('toHaveTagName', () => {
	function Fixture() {
		return (
			<div>
				<span id="span" />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#span')).toHaveTagName('span');
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#span')).not.toHaveTagName('div');
		});
	});
});

describe('toHaveText', () => {
	function Fixture() {
		return (
			<div>
				<p id="full">Text</p>
				<p id="empty"></p>
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#full')).toHaveText('Text');
			expect(wrapper.find('#full')).toHaveText();
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#full')).not.toHaveText('Wrong');
			expect(wrapper.find('#empty')).not.toHaveText();
		});
	});
});

describe('toIncludeText', () => {
	function Fixture() {
		return (
			<div>
				<p id="full">Some important text</p>
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#full')).toIncludeText('important');
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('#full')).not.toIncludeText('Wrong');
		});
	});
});

describe('toHaveValue', () => {
	function Fixture() {
		return (
		<div>
			<input defaultValue="test" />
			<input defaultValue="foo" value="bar" onChange={() => {}} />
		</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('input').at(0)).toHaveValue('test');
			expect(wrapper.find('input').at(1)).toHaveValue('bar');
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('input').at(0)).not.toHaveValue('bar');
			expect(wrapper.find('input').at(1)).not.toHaveValue('test');
		});
	});
});

describe('toMatchElement', () => {
	function Fixture() {
		return (
			<div>
				<span id="foo" className="bar" />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper).toMatchElement(<Fixture />);
			expect(wrapper.find('span')).toMatchElement(
				<span id="foo" className="bar" />
			);
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper).not.toMatchElement(<div />);
		});
	});
});

describe('toMatchSelector', () => {
	function Fixture() {
		return (
			<div>
				<span id="foo" className="bar" />
			</div>
		);
	}
	const wrapper = mount(<Fixture />);

	describe('matches', () => {
		it('should pass', () => {
			expect(wrapper.find('span')).toMatchSelector('span');
			expect(wrapper.find('span')).toMatchSelector('#foo');
			expect(wrapper.find('span')).toMatchSelector('.bar');
		});
	});

	describe('.not matches', () => {
		it('should pass', () => {
			expect(wrapper.find('span')).not.toMatchSelector('div');
		});
	});
});
