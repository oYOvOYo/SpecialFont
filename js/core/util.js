// main part of core logic

// let timer0 = new Date();
// let timer1, timer2 = timer0;

window.onload = () => {

  core = new Core();
  core.play(config);

  // lemonsPos["01"] = [0, 0];
  // config.animation["01"](lemonsPos["01"]);
  // requestAnimationFrame(animate);


  // var body = document.querySelector('body');
  // var media = document.getElementById('bg-music');
  // body.addEventListener('click', event => {
  //   media.play();
  //   requestAnimationFrame(animate);
  // })
};

class Core {

  constructor() {
    this.lemons = new Map();
    this.lemonsPos = new Map();
  }

  initial() {
    generateCanvas();

    // timer
    this.initialTime = new Date();
    this.nowTime = new Date();
  }


  play(config) {
    this.config = config;
    this.initial();
    console.log(this.config);
  }

  position(x, y, rect) {
    x = x * sw;
    y = y * sh;

    x = x - rect.w / 2;
    y = y - rect.h / 2;

    return x, y;
  }

  animate(t) {
    requestAnimationFrame(this.animate);

    ctx.clearRect(0, 0, sw, sh);
    for (var [key, value] of this.lemons) {
      let position = this.lemonsPos["key"];
      let x, y = this.position(position[0], position[1], value.rect);
      value.position(x, y);
      value.draw(ctx);
    }


  }
}