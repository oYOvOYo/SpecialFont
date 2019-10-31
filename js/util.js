let leon;


window.onload = () => {
  init();
};

function init() {
  generateCanvas();
  // canvas = document.createElement('canvas');
  // document.body.appendChild(canvas);
  // ctx = canvas.getContext("2d");

  // canvas.width = sw * pixelRatio;
  // canvas.height = sh * pixelRatio;
  // canvas.style.width = sw + 'px';
  // canvas.style.height = sh + 'px';
  // ctx.scale(pixelRatio, pixelRatio);

  leon = new LeonSans({
    text: 'world.execute(me);',
    color: ['#FFFFFF'],
    size: 80,
    weight: 200
  });

  let i, total = leon.drawing.length;
  for (i = 0; i < total; i++) {
  TweenMax.fromTo(leon.drawing[i], 1.6, {
      value: 0
  }, {
      delay: i * 0.05,
      value: 1,
      ease: Power4.easeOut,
  });
  }

  TweenMax.fromTo(leon, 2, {size:100}, {size:120})

  // TweenMax.fromTo(document.body, 2, {backgroundColor:"#000000"}, {backgroundColor:"#eeeeee"})
  // TweenMax.to(document.body, 2, {backgroundColor:"#eeeeee"})
  // TweenMax.from(document.body, 2, {backgroundColor:"#eeeeee"})


  setTimeout(()=> {TweenMax.fromTo(canvas, 2, {rotation:0}, {rotation:90});}, 2000)


  requestAnimationFrame(animate);
}

function animate(t) {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, sw, sh);

  const x = (sw - leon.rect.w) / 2;
  const y = (sh - leon.rect.h) / 2;
  leon.position(x, y);

  leon.draw(ctx);
}
