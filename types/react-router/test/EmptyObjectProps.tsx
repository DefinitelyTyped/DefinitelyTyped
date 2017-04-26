import * as React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { connect } from "react-redux"

const EmptyPropsSfc = (props: {}) => (
  <div>
    <h2>Empty Props SFC</h2>
  </div>
)

class EmptyPropsClassComponent extends React.Component<{}, void> {
  render() {
    return <div>
      <h2>Empty Props Class</h2>
    </div>
  }
}

const ConnectedComponent = connect(() => ({}), () => ({}))((props) => {
  return <div>
    <h2>Empty Props Connected Class</h2>
  </div>
})

const Routing = () => (
  // Cannot pass this component.
  <Router>
    <Route path="/sfc" component={EmptyPropsSfc} />
    <Route path="/class" component={EmptyPropsClassComponent} />
    <Route path="/connected" component={ConnectedComponent} />
  </Router>
)
