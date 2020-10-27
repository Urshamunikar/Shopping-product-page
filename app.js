function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}
function myFunction1(){

    var side=document.getElementById("sideimg");
    side.classList.toggle("bag");

    document.getElementById("add").style.cssText="display: none;";
    var x=document.getElementById("image");
    x.classList.toggle("p1");
    var b1=document.getElementById("box1");
    var b2=document.getElementById("box2");
    b1.classList.toggle("bag");
    b2.classList.toggle("bag");
    document.getElementsByClassName("aside")[0].style.border="0px";

    var desc=document.getElementById("description");
    desc.classList.toggle("left-text-up");

    setTimeout(function(){
        desc.classList.toggle("left-text");
    },1);
    var fulldesc=document.getElementsByClassName("fulldesc")[0];
    var addbtn=document.getElementById("addbtn");
    addbtn.style.cssText="display: block";
    fulldesc.classList.toggle("full-text-up");
    var btmimg=document.getElementsByClassName("row")[0];
    btmimg.classList.toggle("bottom-img");
    var bgimg=document.getElementById("bgimg");
    bgimg.classList.toggle("bgimg-right");
    var flower=document.getElementById("flower");
    flower.classList.toggle("flowerbg");
    setTimeout(function(){

        addbtn.classList.toggle("addbtn1");
        fulldesc.style.cssText="display: block";
        btmimg.style.cssText="display:block";

    },30);
    b2.delay(500).style.cssText="display:none";
    b1.delay(500).style.cssText="display:none";




}