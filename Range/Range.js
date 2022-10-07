
var load = (data) =>{
  ran1 = document.getElementById("range1").value
  ran2 = document.getElementById("range2").value  
  ran3 = document.getElementById("range3").value  
  bg = document.getElementById("zone_color")
  bg.style. background =  `rgb(${ran1},${ran2},${ran3}`
}

bgon = () => {
  document.getElementById("contro").hidden = false
  return "success"
}

bgoff = () => {
  document.getElementById("contro").hidden = true
  return "success"
}

start = () =>{
  load()
  bgoff()
}
start()