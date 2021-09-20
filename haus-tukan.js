
const imageViewer = document.getElementById("haus-tukan-view-port");

var hausTukanImgArray = new Array();

hausTukanImgArray[0] = new Image();
hausTukanImgArray[0].src = 'images/hausTukan/image0.jpg';

hausTukanImgArray[1] = new Image();
hausTukanImgArray[1].src = 'images/hausTukan/image1.jpg';

hausTukanImgArray[2] = new Image();
hausTukanImgArray[2].src = 'images/hausTukan/image2.jpg';

hausTukanImgArray[3] = new Image();
hausTukanImgArray[3].src = 'images/hausTukan/image3.jpg';


var currentImage = 0;

const imageUp = document.getElementById("arrow-left").addEventListener('click', ImageUp);
const imageDown = document.getElementById("arrow-right").addEventListener('click', ImageDown);
const counterView = document.getElementById("counter-view");

function ImageDown(){
    currentImage = currentImage - 1;
    if(currentImage < 0)
    {
        currentImage = hausTukanImgArray.length - 1;
    }

    console.log("down");
    updateImage();
}

function ImageUp(){
    currentImage = currentImage +1;
    if(currentImage >= hausTukanImgArray.length)
    {
        currentImage = 0;
    }

    console.log("up");
    updateImage();
}

function updateImage(){

    if(imageViewer.firstChild == null)
    {
        imageViewer.appendChild(hausTukanImgArray[currentImage]);
    }
    else{
        imageViewer.removeChild(imageViewer.firstChild);
        imageViewer.appendChild(hausTukanImgArray[currentImage]);
    }

    counterView.innerHTML = (currentImage+1) + "/" + hausTukanImgArray.length;
}

updateImage();







console.log("peter Pahn");