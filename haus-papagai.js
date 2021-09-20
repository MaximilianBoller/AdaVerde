
const imageViewer = document.getElementById("haus-papagai-view-port");

var hausPapagaiImgArray = new Array();

hausPapagaiImgArray[0] = new Image();
hausPapagaiImgArray[0].src = 'images/hausPapagai/image0.jpg';

hausPapagaiImgArray[1] = new Image();
hausPapagaiImgArray[1].src = 'images/hausPapagai/image1.jpg';

hausPapagaiImgArray[2] = new Image();
hausPapagaiImgArray[2].src = 'images/hausPapagai/image2.jpg';

hausPapagaiImgArray[3] = new Image();
hausPapagaiImgArray[3].src = 'images/hausPapagai/image3.jpg';


var currentImage = 0;

const imageUp = document.getElementById("arrow-left").addEventListener('click', ImageUp);
const imageDown = document.getElementById("arrow-right").addEventListener('click', ImageDown);
const counterView = document.getElementById("counter-view");

function ImageDown(){
    currentImage = currentImage - 1;
    if(currentImage < 0)
    {
        currentImage = hausPapagaiImgArray.length - 1;
    }

    console.log("down");
    updateImage();
}

function ImageUp(){
    currentImage = currentImage +1;
    if(currentImage >= hausPapagaiImgArray.length)
    {
        currentImage = 0;
    }

    console.log("up");
    updateImage();
}

function updateImage(){

    if(imageViewer.firstChild == null)
    {
        imageViewer.appendChild(hausPapagaiImgArray[currentImage]);
    }
    else{
        imageViewer.removeChild(imageViewer.firstChild);
        imageViewer.appendChild(hausPapagaiImgArray[currentImage]);
    }

    counterView.innerHTML = (currentImage+1) + "/" + hausPapagaiImgArray.length;
}

updateImage();







console.log("peter Pahn");