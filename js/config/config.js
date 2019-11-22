var config = {
  "create": {
    "header": () => {
      return new LeonSans({
        text: 'world.execute(me);',
        color: ['#FFFFFF'],
        size: 80,
        weight: 200
      });
    },
    "tips": () => {
      return new LeonSans({
        text: 'click to start',
        color: ['#000000'],
        size: 80,
        weight: 1
      });
    },

  },
  "animation": {
    "initialHeaderPosition": ["lemonsConfig", (x) => {
      TweenMax.to(x, 0, [0.5, 0.35])
    }],
    "initialTipsPosition": ["lemonsConfig", (x) => {
      TweenMax.to(x, 0, [0.5, 0.65])
    }],
    "easeInHeader": ["lemons", (leon) => {
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
    }],
    "toRedInTips": ["lemons", (leon) => {
      let total = leon.drawing.length;
      let color = Array('start'.length).fill('#D22530');
      let origin = Array(total - color.length).fill('#FFFFFF');
      
      leon.color = [...origin, ...color];
    }],
    "weightInTips": ["lemons", (leon) => {
      TweenMax.fromTo(leon, 1, {size:80,weight:1}, {size:80,weight:200});
    }],

    // "02": ["lemonsConfig", (x) => {
    //   TweenMax.to(x, 2, [0.75, 0.5])
    // }],
    // "03": ["lemonsConfig", (x) => {
    //   TweenMax.to(x, 2, [0.5, 0.75])
    // }],
    // "04": ["lemonsConfig", (x) => {
    //   TweenMax.to(x, 2, [0.25, 0.5])
    // }],
  },
  "timeline": [
    [0, "create", "header"],
    [0, "create", "tips"],
    [0, "animation", "initialHeaderPosition", "header"],
    [0, "animation", "initialTipsPosition", "tips"],
    [0, "animation", "easeInHeader", "header"],
    [2, "animation", "toRedInTips", "tips"],
    [2, "animation", "weightInTips", "tips"],
    [8, "repeat"]
  ]
}


var AnimationConfig = {

  // TweenMax.fromTo(leon, 2, {size:100}, {size:120})

  // TweenMax.fromTo(document.body, 2, {backgroundColor:"#000000"}, {backgroundColor:"#eeeeee"})
  // TweenMax.to(document.body, 2, {backgroundColor:"#eeeeee"})
  // TweenMax.from(document.body, 2, {backgroundColor:"#eeeeee"})


  // setTimeout(()=> {TweenMax.fromTo(canvas, 2, {rotation:0}, {rotation:90});}, 2000)

}

