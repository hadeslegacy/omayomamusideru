
function setup() {
    
    Webcam = createCapture(VIDEO)
    Webcam.size(510, 1000)
    vara = ml5.poseNet(Webcam, Moadeloadead)
    canvas =  createCanvas(482, 666)
    canvas.position(550, 150)
    vara.on('pose', HEHA)
}

function Moadeloadead(){
    console.log("ezezezzezezezzezzeezzezez c")
}

function HEHA(results){
   if(results.length > 0){
       console.log(results)
   }
}
 