// main part of core logic

window.onload = () => {

  core = new Core();
  core.play(config);

  let body = document.querySelector('body');
  let media = document.getElementById('bg-music');
  let clickEvent = event => {
    media.play();
    core.play(config);
    body.removeEventListener('click', clickEvent);
  };
  // hook
  body.addEventListener('click', clickEvent);
};

class Core {

  constructor() {
    this.initial = this.initial.bind(this);
    this.animate = this.animate.bind(this);
    this.excute = this.excute.bind(this);
  }

  initial() {
    // call global function
    generateCanvas();
    // initial
    this.lemons = new Map();
    this.lemonsConfig = new Map();
    // timer
    this.initialTime = new Date();
    this.nowTime = new Date();
    this.timelineIndex = 0;
  }

  // user persetage
  position(x, y, rect) {
    x = x * sw;
    y = y * sh;

    x = x - rect.w / 2;
    y = y - rect.h / 2;
    return [x, y];
  }

  excute(command, argv) {

    switch (command) {
      case "create":
        let id = argv[0];
        this.lemons.set(id, this.config["create"][id]());
        this.lemonsConfig.set(id, [0, 0]);
        break;
      case "animation":
        let animate = this.config["animation"][argv[0]]
        animate[1](animate[0] == "lemons" ? 
          this.lemons.get(argv[1]) : this.lemonsConfig.get(argv[1]));
        break;
      case "repeat":
        this.initial();
        break;
      case "default":
        console.log("error", command, argv);
        break
    }
  }
  
  animate(t) {
    requestAnimationFrame(this.animate);

    this.nowTime = new Date();
    ctx.clearRect(0, 0, sw, sh);

    for (let [key, value] of this.lemons) {
      let position = this.lemonsConfig.get(key);
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