import * as React from "react";
import * as Gravatar from "react-gravatar";

class GravatarEmailTest extends React.Component {
	render() {
		return (
			<Gravatar
				email="test@example.com"
				size={100}
				rating="x"
				default="retro"
				protocol="https://"
				className="image"
				style={{borderWidth: "1px"}}
			/>
		);
	}
}

class GravatarHashTest extends React.Component {
	render() {
		return (
			<Gravatar
				md5="55502f40dc8b7c769880b10874abc9d0"
				size={100}
				rating="x"
				default="retro"
				protocol="https://"
				className="image"
				style={{borderWidth: "1px"}}
			/>
		);
	}
}

class GravatarMinimalTest extends React.Component {
	render() {
		return <Gravatar email="test@example.com" />;
	}
}
