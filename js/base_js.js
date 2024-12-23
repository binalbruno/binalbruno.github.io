// alert("Hello, welcome")
        
// let userName=prompt("What is your name?")
// document.write("Hello "+userName+", welcome to my website")

function myFunction(userName) {
    alert("Hello! "+userName+", welcome to my website");
    document.getElementById("name-heading").innerHTML = userName
}

function hideContent() {
    currentStatus=document.getElementById("contentID").style.display;
    console.log(currentStatus)
    if (currentStatus=="none") {
        document.getElementById("contentID").style.display = "block";
        document.getElementById("hideButton").innerHTML = "Hide Content";
    } else {
        document.getElementById("contentID").style.display = "none";
        document.getElementById("hideButton").innerHTML = "Show Content";
    }
}

function upDate(previewPic){
    document.getElementById('imageDisplay').style.backgroundImage = "url('"+previewPic.src+"')";
    document.getElementById('imageDisplay').innerHTML = previewPic.alt;
}

function unDo(){
    document.getElementById('imageDisplay').style.backgroundImage = "url('')";
    document.getElementById('imageDisplay').innerHTML = "Hover over an image below to display here.";
}