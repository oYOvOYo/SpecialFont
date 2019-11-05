window.onload = () => {

  var body = document.querySelector('body');
  var media = document.getElementById('bg-music');
  body.addEventListener('click', event=> {
    media.play();
    init();
  })

  // let a = config.create["01"];
  // console.log(a())

};

function init() {
  generateCanvas();
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
