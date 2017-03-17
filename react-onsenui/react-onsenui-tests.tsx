import {Component} from "react";
import * as ReactDOM from "react-dom";
import * as Ons from "react-onsenui";

class AppState{
	isOpen:boolean=false;
}

interface AppProps{
}

export class App extends Component<AppProps,AppState>{

	constructor(props?:AppProps){
		super(props);
		this.state = new AppState();
	}

	hide(){
		this.setState({isOpen:false});
	}
	
	render() {
 
		return (
			<Ons.Splitter>
				<Ons.SplitterSide
					side='left'
					collapse={true}
					isOpen={this.state.isOpen}
					onClose={()=>this.hide()}
					isSwipeable={true}>
					<Ons.Page>
						Menu content
					</Ons.Page>
				</Ons.SplitterSide>
				<Ons.SplitterContent>
					<Ons.Page>
						Test page
					</Ons.Page>
				</Ons.SplitterContent>
			</Ons.Splitter>
		);
	}

}


ReactDOM.render(<App />, document.getElementById('react-body'));