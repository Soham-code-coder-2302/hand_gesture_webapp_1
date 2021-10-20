Webcam.set({
width:300,
height:300,
image_format:jpeg,
jpeg_quality:100,
});

camera=document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
})
}

console.log("ml5.version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ld202B6Ya/model.json',modelloaded);

function modelloaded(){
console.log("model is loaded")
}

function check() {
img=document.getElementById("captured_image")
classifier.classify(img,gotresult)
}

function gotresult(error,result){
if (error) {
console.log(error)
}
else{
console.log(result)
document.getElementById("prediction").innerHTML=result[0].label
if (result[0].label=="Perfect"){
document.getElementById("emoji").innerHTML= "&#128076";
}

if (result[0].label=="Well done"){
    document.getElementById("emoji").innerHTML= "&#128077";
    }

if (result[0].label=="Victory"){
document.getElementById("emoji").innerHTML= "&#9996";
}

}
}