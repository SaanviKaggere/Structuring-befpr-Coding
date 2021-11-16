class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
  }

  getState() {
    var gsRef = database.ref("gameState")
    gsRef.on("value", data =>{
      gameState = data.val()
    })
  }
}
