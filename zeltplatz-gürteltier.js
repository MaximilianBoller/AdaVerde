
const imageViewer = document.getElementById("zeltplatz-gürteltier-view-port");

var zeltplatzGürteltierImgArray = new Array();

zeltplatzGürteltierImgArray[0] = new Image();
zeltplatzGürteltierImgArray[0].src = 'images/zeltplatzGürteltier/image0.jpg';

zeltplatzGürteltierImgArray[1] = new Image();
zeltplatzGürteltierImgArray[1].src = 'images/zeltplatzGürteltier/image1.jpg';

zeltplatzGürteltierImgArray[2] = new Image();
zeltplatzGürteltierImgArray[2].src = 'images/zeltplatzGürteltier/image2.jpg';

zeltplatzGürteltierImgArray[3] = new Image();
zeltplatzGürteltierImgArray[3].src = 'images/zeltplatzGürteltier/image3.jpg';


var currentImage = 0;

const imageUp = document.getElementById("arrow-left").addEventListener('click', ImageUp);
const imageDown = document.getElementById("arrow-right").addEventListener('click', ImageDown);
const counterView = document.getElementById("counter-view");

function ImageDown(){
    currentImage = currentImage - 1;
    if(currentImage < 0)
    {
        currentImage = zeltplatzGürteltierImgArray.length - 1;
    }

    console.log("down");
    updateImage();
}

function ImageUp(){
    currentImage = currentImage +1;
    if(currentImage >= zeltplatzGürteltierImgArray.length)
    {
        currentImage = 0;
    }

    console.log("up");
    updateImage();
}

function updateImage(){

    if(imageViewer.firstChild == null)
    {
        imageViewer.appendChild(zeltplatzGürteltierImgArray[currentImage]);
    }
    else{
        imageViewer.removeChild(imageViewer.firstChild);
        imageViewer.appendChild(zeltplatzGürteltierImgArray[currentImage]);
    }

    counterView.innerHTML = (currentImage+1) + "/" + zeltplatzGürteltierImgArray.length;
}

updateImage();







console.log("peter Pahn");