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

    this.animate = this.animate.bind(this);
  }

  initial() {
    generateCanvas();

    // timer
    this.initialTime = new Date();
    this.nowTime = new Date();
    this.timelineIndex = 0;
  }

  position(x, y, rect) {
    x = x * sw;
    y = y * sh;

    x = x - rect.w / 2;
    y = y - rect.h / 2;

    return x, y;
  }

  excute(command, argv) {
    switch (command) {
      case "create":
        this.lemons[argv[0]] = this.config["create"][argv[0]]();
        break;
      case "animate":
        let animate = this.config["animation"][argv[0]]
        animate[1](animate[0] == "lemons" ? this.lemons[argv[1]] : this.lemonsPos[argv[1]])
        break;
      case "repeat":
        this.initial();
        break;
      case "default":
        break
    }
  }
  
  animate(t) {
    requestAnimationFrame(this.animate);

    this.nowTime = new Date();
    ctx.clearRect(0, 0, sw, sh);
    for (var [key, value] of this.lemons) {
      let position = this.lemonsPos["key"];
      let x, y = this.position(position[0], position[1], value.rect);
      value.position(x, y);
      value.draw(ctx);
    }

    for (let i = this.timelineIndex; i < this.config["timeline"].length; i++) {
      let eachTimeLine = this.config["timeline"][i];
      if (this.nowTime - this.initialTime < eachTimeLine[0] * 1000) break;
      this.excute(eachTimeLine[1], eachTimeLine.slice(2));
    }
  }


  play(config) {
    this.config = config;
    this.initial();
    requestAnimationFrame(this.animate);
  }
}