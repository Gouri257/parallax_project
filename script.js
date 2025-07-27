let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    moon.style.top = value * .9 + "px";
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";

    desert_moon.style.top = value * .3 + "px";
    man.style.left = value * .6 + "px";
});

function toggleReadMore() {
    let moreText = document.getElementById("more-text");
    let btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Read Less!";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More!";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".view-map-btn").addEventListener("click", function () {
        window.location.href = "map.html"; // Redirects to the new map page
    });
});



let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    let scrollValue =  Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,67ccff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


document.addEventListener("DOMContentLoaded", function() {
    const itineraryList = document.getElementById("itinerary-list");

    document.querySelectorAll(".add-to-itinerary").forEach(button => {
        button.addEventListener("click", function() {
            const placeName = this.parentElement.querySelector("h3").textContent;
            const listItem = document.createElement("li");
            listItem.textContent = placeName;
            itineraryList.appendChild(listItem);
        });
    });

    document.getElementById("language-select").addEventListener("change", function() {
        alert("Language changed to: " + this.value);
    });
});
