import * as React from 'react';
import { Prompt } from 'react-router';

const PromptTest: React.FC = ({ children }) => {
  return (
    <Prompt
      message={(location, action) => {
        if (action === 'POP') {
          console.log("Backing up...");
        }

        return location.pathname.startsWith("/app")
          ? true
          : `Are you sure you want to go to ${location.pathname}?`;
      }}
      when={true}
    />
  );
};

export default PromptTest;
