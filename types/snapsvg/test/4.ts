(() => {
  // Tests by Terry Mun
  // Checks that Snap.set() is properly typed

  const s = Snap(300, 500);
  s.attr({
    viewBox: '0 0 200 500'
  });

  // Create multiple elements to be added to set
  const rect1 = s.rect(0, 0, 50, 50);
  const rect2 = s.rect(0, 100, 50, 50);
  const rect3 = s.rect(0, 200, 50, 50);
  const rect4 = s.rect(0, 300, 50, 50);
  let rect5: Snap.Element;

  // Create new set
  const rectSet = Snap.set(rect1, rect2);

  // Add missing rectangles to set
  rectSet.push(rect3, rect4);

  // Set all attributes
  rectSet.attr({
    fill: 'steelblue'
  });

  // Animate all elements in set
  function animateTest() {
    return new Promise(resolve => {
      rectSet.animate({
        x: 50
      }, 500, mina.bounce, resolve);
    });
  }

  // Animate elements individually
  function animateMultipleTest() {
    return new Promise(resolve => {
      rectSet.animate(
        [{ x: 100 }, 500, mina.linear],
        [{ x: 100 }, 1000, mina.linear],
        [{ x: 100 }, 1500, mina.linear],
        [{ x: 100 }, 2000, mina.linear, resolve]
      );
    });
  }

  // Animate elements individually
  function forEachTest() {
    const colors = ['red', 'green', 'blue'];
    return new Promise(resolve => {
      rectSet.forEach((element, idx) => { 
        element.attr({
          fill: colors[idx] || '#aaa'
        });
      });
      resolve();
    });
  }

  // Exclude rect4 from set
  function excludeTest() {
    return new Promise(resolve => {
      rectSet.exclude(rect4);
      rectSet.animate({
        x: 150
      }, 500, mina.bounce, resolve);
    });
  }

  // Remove rect2 from set (it has index of 1)
  // Add new rect5 to set
  async function spliceTest() {
    rectSet.splice(1, 1);
    rectSet.attr({
      fill: '#000'
    });

    rect5 = s.rect(100, 400, 50, 50);
    rectSet.splice(1, 0, rect5);
    return;
  }

  // Clear set. Rectangles should not go back to x=0
  function clearTest() {
    return new Promise(resolve => {
      rectSet.clear();

      // SHOULD NOT WORK
      rectSet.animate({
        x: 0
      }, 500, mina.bounce, resolve);

      // Re-add rects to set
      rectSet.push(rect1, rect2, rect3, rect4, rect5);
      resolve();
    });
  }

  // Remove all elements from DOM that are present in set
  async function removeTest() {
    rectSet.remove();
    return;
  }

  // Start test
  async function startTest() {
    await animateTest();
    await animateMultipleTest();
    await forEachTest();
    await excludeTest();
    await spliceTest();
    await clearTest();
    await removeTest();

    return;
  }

  startTest();
})();
