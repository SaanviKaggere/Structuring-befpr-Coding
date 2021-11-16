class Player {
  constructor() {

  }

  getCount() {
    var pcRef = database.ref("playerCount")
    pcRef.on("value", data => {
      playerCount = data.val()
    })
  }

  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }
}
