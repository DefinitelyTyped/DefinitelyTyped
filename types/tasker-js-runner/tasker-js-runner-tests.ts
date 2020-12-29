import { tk as tasker } from "tasker-types"; 

const testProfile = {
    enter(locals, tasker: tasker) {
      
    },
  
    exit(locals, tasker) {}
  };

// Construct Tasker JS and pass in mapping information as an Object
new TaskerJs({
    // Profile name: module
    'Notification:All': notification,
  });