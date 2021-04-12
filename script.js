"use strict";

getColorSchemes();
addScheme(1);
document.querySelector("#top > div:first-child").classList.add("selected");

function getColorSchemes(){
    for (let i = 1; i <= 4; i++){
        let div = document.createElement("div");
        
        document.querySelector("#top").append(div);

        colors(i);
        function colors(a) {
            for (let j = 1; j <= 5; j++){
                let innerDiv = document.createElement("div");
                innerDiv.style.backgroundColor = getColor(a, j);

                div.append(innerDiv);
            }  

            div.querySelector("div:nth-child(3)").innerHTML = `SCHEME ${a}`;

            div.addEventListener("click", function(){
                addScheme(a);
                removeClassFromElement(document.querySelector(".selected"), "selected");
                div.classList.add("selected");
            });
        }
    }
}

function addScheme(a){
    document.getElementById("playground").style.backgroundColor = getColor(a, 1);
    document.getElementById("one").style.backgroundColor = getColor(a, 2);
    document.getElementById("two").style.backgroundColor = getColor(a, 3);
    document.getElementById("three").style.backgroundColor = getColor(a, 4);
    document.getElementById("four").style.backgroundColor = getColor(a, 5);
    document.getElementById("five").style.backgroundColor = getColor(a, 1);
}

// Ändrar storleken 
document.querySelector("#bigger").addEventListener("click", function(){
    document.getElementById("one").style.setProperty("width", "30vw");
    document.getElementById("one").style.setProperty("height", "30vw");

    document.getElementById("four").style.setProperty("width", "30vw");
    document.getElementById("four").style.setProperty("height", "30vw");

    document.getElementById("five").style.setProperty("width", "30vw");
    document.getElementById("five").style.setProperty("height", "30vw");
});

document.querySelector("#smaller").addEventListener("click", function(){
    document.getElementById("one").style.setProperty("width", "3vw");
    document.getElementById("one").style.setProperty("height", "3vw");

    document.getElementById("four").style.setProperty("width", "3vw");
    document.getElementById("four").style.setProperty("height", "3vw");

    document.getElementById("five").style.setProperty("width", "3vw");
    document.getElementById("five").style.setProperty("height", "3vw");
});

document.querySelector("#stop").addEventListener("click", function(){
    let width = getComputedStyle(document.getElementById("one")).getPropertyValue("width");
    let height = getComputedStyle(document.getElementById("one")).getPropertyValue("height");

    document.getElementById("one").style.width = width;
    document.getElementById("one").style.height = height;
    document.getElementById("four").style.width = width;
    document.getElementById("four").style.height = height;
    document.getElementById("five").style.width = width;
    document.getElementById("five").style.height = height;
});



