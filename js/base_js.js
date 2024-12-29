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

function selectImages(){
    imagesList = ["3dprinting.jpg", "boardgame.jpg", "cooking.jpg", "gaming.png", "garden.jpg", "motorcycle.jpg", "reading.jpg", "seashells.jpg", "stamps.jpg"];

    currentImages = document.querySelectorAll(".flex-container img");
    console.log(currentImages)
    for (var i = 0; i < currentImages.length; i++) {
        console.log(currentImages[i].src)
        randomImage = "../images/hobbies/"+imagesList[Math.floor(Math.random() * imagesList.length)];
        console.log(randomImage)
        currentImages[i].src = randomImage;
        currentImages[i].alt = randomImage.split('/').pop().split('.')[0];
        currentImages[i].tabIndex = 0;
    }
}