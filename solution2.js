const speed = 180
const speedlimit = 70
const points = Math.floor((speed-speedlimit)/5)
// if speed is <=70 it should print "OK"
// if points are >=12 it should print "License suspended"
if(speed<=70){
    console.log("OK")
}else if(points>=12){
    console.log("License suspended")
}else if(speed>70){
    console.log("points: " + points)
}

