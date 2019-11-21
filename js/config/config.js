var config = {
  "create": {
    "01": () => {
      return new LeonSans({
        text: 'world.execute(me);',
        color: ['#FFFFFF'],
        size: 80,
        weight: 200
      });
    }
  },
  "animation": {
    "01": ["lemonsPos", (x) => {
      TweenMax.fromTo(x, 2, [0.25, 0.5], [0.5, 0.25])
    }],/*  */
    "02": ["lemonsPos", (x) => {
      TweenMax.to(x, 2, [0.75, 0.5])
    }],
    "03": ["lemonsPos", (x) => {
      TweenMax.to(x, 2, [0.5, 0.75])
    }],
    "04": ["lemonsPos", (x) => {
      TweenMax.to(x, 2, [0.25, 0.5])
    }],


  },
  "timeline": [
    [0, "create", "01"],
    [0, "animation", "01", "01"],
    [2, "animation", "02", "01"],
    [4, "animation", "03", "01"],
    [6, "animation", "04", "01"],
    [8, "repeat"]
  ]
}


var AnimationConfig = {

  // TweenMax.fromTo(leon, 2, {size:100}, {size:120})

  // TweenMax.fromTo(document.body, 2, {backgroundColor:"#000000"}, {backgroundColor:"#eeeeee"})
  // TweenMax.to(document.body, 2, {backgroundColor:"#eeeeee"})
  // TweenMax.from(document.body, 2, {backgroundColor:"#eeeeee"})


  // setTimeout(()=> {TweenMax.fromTo(canvas, 2, {rotation:0}, {rotation:90});}, 2000)





  // let i, total = leon.drawing.length;
  // for (i = 0; i < total; i++) {
  // TweenMax.fromTo(leon.drawing[i], 1.6, {
  //     value: 0
  // }, {
  //     delay: i * 0.05,
  //     value: 1,
  //     ease: Power4.easeOut,
  // });
  // }

}

