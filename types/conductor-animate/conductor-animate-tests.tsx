import * as React from 'react';
import { Conductor, Animated } from 'conductor-animate';

// Define the Animation mapping
const animations = {
  Fade: () => <div>Fake Animation</div>,
};

// Define the configuration
const config = {
  HeaderSection: {
    animation: 'Fade',
    duration: 500,
    delay: 200,
  },
};

const App = () => {
  // Render the Page w/ the Conductor and Animated
  return (
    <Conductor animations={animations} config={config}>
      <Animated id="HeaderSection">
        <h1>This Header will fade in </h1>
      </Animated>
    </Conductor>
  );
};

export default App;
