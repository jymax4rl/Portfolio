const hamburger = document.querySelector("button");
const dropdown = document.querySelector("ul");
const listElement = document.querySelectorAll("li");
const topHam = document.querySelector('.hamburger-box::before');



let open = false;
hamburger.addEventListener('click', function (){

if(open){
    console.log('clicked to close hamburger');
    dropdown.style.transition = "ease all .2s";
    dropdown.style.transform = 'translateY(-100px)';
    // dropdown.style.display = "none";
    for (const listItem of listElement) {
        listItem.style.height = "0";
        listItem.style.visibility = "hidden"

    }
        open = false;
}else{

    console.log('clicked to open hamburger');
    dropdown.style.transition = "ease all .2s";
    dropdown.style.display = "block";
    dropdown.style.transform = 'translateY(0)';



    for (const listItem of listElement) {
        listItem.style.height = "100px";
        listItem.style.fontSize = "16px";
        listItem.style.display = "flex";
        listItem.style.visibility = "visible"

    }
    open = true;
}
});