var prediction_1= "";
var prediction_2= "";

Webcam.set(
{
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90
    
});

camera =document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="'+data_uri+'" />';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JTlQdsIBn/model.json' , modelLoaded);

function modelLoaded()
{
    console.log('Model is Loaded!')
}

function speak()
{
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is"+ prediction_1;
    speak_data_2 = "And the second prediciton is"+ prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}