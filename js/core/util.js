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
    
    this.initial = this.initial.bind(this);
    this.animate = this.animate.bind(this);
    this.excute = this.excute.bind(this);

  }

  initial() {
    generateCanvas();
    this.lemons = new Map();
    this.lemonsPos = new Map();
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
    return [x, y];
  }

  excute(command, argv) {
    console.log(command, argv);

    switch (command) {
      case "create":
        this.lemons.set(argv[0], this.config["create"][argv[0]]());
        this.lemonsPos.set(argv[0], [0, 0]);
        break;
      case "animation":
        let animate = this.config["animation"][argv[0]]
        animate[1](animate[0] == "lemons" ? 
          this.lemons.get(argv[1]) : this.lemonsPos.get(argv[1]));
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
      let position = this.lemonsPos.get(key);
      position = this.position(position[0], position[1], value.rect);
      value.position(position[0], position[1]);
      value.draw(ctx);
    }

    for (let i = this.timelineIndex; i < this.config["timeline"].length; i++) {
      let eachTimeLine = this.config["timeline"][i];
      if (this.nowTime - this.initialTime < eachTimeLine[0] * 1000) break;
      this.timelineIndex++;
      this.excute(eachTimeLine[1], eachTimeLine.slice(2));
    }
  }


  play(config) {
    this.config = config;
    this.initial();
    requestAnimationFrame(this.animate);
  }
}