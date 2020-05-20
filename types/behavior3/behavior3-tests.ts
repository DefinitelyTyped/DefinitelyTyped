import 'behavior3';

// Test decode
const blackboard = new b3.Blackboard();
const behaviorTree = new b3.BehaviorTree();
behaviorTree.load({
    version: "0.3.0",
    scope: "tree",
    id: "6bc03cd0-38ef-4a3e-8e08-54c412491525",
    title: "A behavior tree",
    description: "",
    root: "607d29f5-9dbc-4cc4-8ebb-e57c4908d87b",
    properties: {},
    nodes: {
      "607d29f5-9dbc-4cc4-8ebb-e57c4908d87b": {
        id: "607d29f5-9dbc-4cc4-8ebb-e57c4908d87b",
        name: "Sequence",
        title: "Sequence",
        description: "",
        properties: {},
        display: {
          x: -216,
          y: -36
        },
        children: [
          "09f04185-205b-40c0-8494-ffd53ffd0820",
          "df7366f8-999a-4971-872c-cef57607f99f"
        ]
      },
      "df7366f8-999a-4971-872c-cef57607f99f": {
        id: "df7366f8-999a-4971-872c-cef57607f99f",
        name: "Runner",
        title: "Runner",
        description: "",
        properties: {},
        display: {
          x: -12,
          y: -36
        }
      },
      "e498e1a5-5295-43c3-8716-20dd6d3407f2": {
        id: "e498e1a5-5295-43c3-8716-20dd6d3407f2",
        name: "Succeeder",
        title: "Succeeder",
        description: "",
        properties: {},
        display: {
          x: 192,
          y: -96
        }
      },
      "09f04185-205b-40c0-8494-ffd53ffd0820": {
        id: "09f04185-205b-40c0-8494-ffd53ffd0820",
        name: "Inverter",
        title: "Inverter",
        description: "",
        properties: {},
        display: {
          x: -36,
          y: -108
        },
        child: "e498e1a5-5295-43c3-8716-20dd6d3407f2"
      }
    },
    display: {
      camera_x: 640,
      camera_y: 324,
      camera_z: 1,
      x: -324,
      y: -36
    }
  });
behaviorTree.tick(null, blackboard);
