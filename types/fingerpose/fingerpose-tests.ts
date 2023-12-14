import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
    GestureEstimator,
    VictoryGesture,
    ThumbsUpGesture,
  } from 'fingerpose'; // Update with the correct import path
  
  // Simple testing function
  function assert(condition: boolean, message: string) {
    console.assert(condition, message);
  }
  
  // Run your tests
  // Example 1: Custom Gesture
  const customGesture = new GestureDescription('CustomGesture');
  customGesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
  customGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight);
  
  const customCurls = [FingerCurl.HalfCurl, FingerCurl.NoCurl];
  const customDirections = [FingerDirection.HorizontalRight, FingerDirection.VerticalUp];
  
  const customMatchScore = customGesture.matchAgainst(customCurls, customDirections);
  assert(customMatchScore > 0.5, 'Custom gesture matching failed');
  
  // Example 2: Gesture Estimation
  const estimator = new GestureEstimator();
  
  // Example points (replace with actual data)
  const points = [
    [0, 0],
    [1, 1],
    [2, 2],
    // Add more points as needed
  ];
  
  const { curls, directions } = estimator.estimate(points);
  
  // Add your assertions based on the expected curls and directions
  assert(curls.length === 5, 'Unexpected number of curls');
  assert(directions.length === 5, 'Unexpected number of directions');
  
  // Example 3: Predefined Gestures
  const victoryGesture = VictoryGesture;
  const thumbsUpGesture = ThumbsUpGesture;
  
  // Replace with actual curls and directions for the victory gesture
  const victoryCurls = [FingerCurl.NoCurl, FingerCurl.FullCurl];
  const victoryDirections = [FingerDirection.VerticalUp, FingerDirection.HorizontalRight];
  
  const victoryMatchScore = victoryGesture.matchAgainst(victoryCurls, victoryDirections);
  assert(victoryMatchScore > 0.8, 'Victory gesture matching failed');
  
  // Replace with actual curls and directions for the thumbs-up gesture
  const thumbsUpCurls = [FingerCurl.HalfCurl, FingerCurl.FullCurl];
  const thumbsUpDirections = [FingerDirection.VerticalUp, FingerDirection.HorizontalLeft];
  
  const thumbsUpMatchScore = thumbsUpGesture.matchAgainst(thumbsUpCurls, thumbsUpDirections);
  assert(thumbsUpMatchScore > 0.8, 'Thumbs-up gesture matching failed');
  