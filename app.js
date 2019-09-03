const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    {
      x: 30,
      y: 220
    }
  ]
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".animated-element-down", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut
  })
);
