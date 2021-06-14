var num = 1;
PrevImageGallery = function()
{
    num -=1;
    if(num <= 0) num =7;
    document.getElementById("gallery").src = "../images/img"+(num)+".jpg";
}
NextImageGallery = function()
{
    num +=1;
    if(num >= 8) num =1;
    document.getElementById("gallery").src = "../images/img"+(num)+".jpg";
}