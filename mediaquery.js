const hamburger = document.querySelector("button");
const dropdown = document.querySelector("ul");
    const listElement = document.querySelectorAll("li");

// dropdown.style.height = '0';


let open = false;
hamburger.addEventListener('click', function (){
console.log('clicked hamburger');

if(open){
    console.log('clicked to close hamburger');
    dropdown.style.display = "none";
        console.log('clicked hamburger');
        open = false;
}else{
    console.log('clicked to open hamburger');
    dropdown.style.display = "block";
    for (const listItem of listElement) {
        listItem.style.transition = "ease all .3s";
        listItem.style.height = "100px";
        listItem.style.display = "flex";
    }
    open = true;
}
});