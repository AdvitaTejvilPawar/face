Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera= document.getElementById("camera")

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("result").innerHTML= '<img id="snap" src="'+data_uri+'">'
        }
    )
}
console.log("ml5 version, ml5.version");
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gLRh-JvjX/model.json',modelLoaded)

function modelLoaded(){
    console.log('Modal Loaded')
}
function check(){
    img=document.getElementById("snap")
    classifier.classify(img , gotResults)
}
function gotResults(error, results){
if (error) {
    console.error(error)
} else {
   console.log(results) 
   document.getElementById("object_name").innerHTML= results[0].label
   document.getElementById("accuracy_value").innerHTML=results[0].confidence.toFixed(3)

}
}


