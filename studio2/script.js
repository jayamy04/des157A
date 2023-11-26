(function(){
    'use strict';
    console.log('reading.js');

    var cards = document.querySelectorAll(".card");
    const shuffle = document.querySelector("#shuffle1");
    const shufflee = document.querySelector("#shuffle2");
    const shuffleee = document.querySelector("#shuffle3");

    cards.forEach(function (card) {

        var frontImage = card.querySelector('.front img');
        var backImage = card.querySelector('.back img');

        shuffleee.addEventListener("click", function () {
            card.classList.toggle("rotate");
            if (card.classList.contains("rotate")) {
                console.log("Card is on the back side.");
                updateImages3(frontImage);
            } else {
                console.log("Card is on the front side.");
                updateImages3(backImage);
            }
        });

        shufflee.addEventListener("click", function () {
            card.classList.toggle("rotate");
            if (card.classList.contains("rotate")) {
                console.log("Card is on the back side.");
                updateImages2(frontImage);
            } else {
                console.log("Card is on the front side.");
                updateImages2(backImage);
            }
        });

        shuffle.addEventListener("click", function () {
            card.classList.toggle("rotate");
            if (card.classList.contains("rotate")) {
                console.log("Card is on the back side.");
                updateImages(frontImage);
            } else {
                console.log("Card is on the front side.");
                updateImages(backImage);
            }
        });
    });

    function updateImages2(image) {
        // Array of image sources
        var imageSources = [
            "images/Food1.png",
            "images/Food2.png",
            "images/Food3.png",
            "images/Food4.jpeg",
            "images/Food5.jpeg"
        ];

        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * imageSources.length);
        console.log("New Image Source:", imageSources[randomIndex]);

        // image.style.display="none";
        // Set the new image source
        image.src = imageSources[randomIndex];
    }

    function updateImages3(image) {
        // Array of image sources
        var imageSources = [
            "images/Place1.png",
            "images/Place2.jpeg",
            "images/Place3.jpeg",
            "images/Place4.jpeg",
            "images/Place5.jpeg",
            "images/Place6.jpeg"
        ];

        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * imageSources.length);
        console.log("New Image Source:", imageSources[randomIndex]);

        // image.style.display="none";
        // Set the new image source
        image.src = imageSources[randomIndex];
    }

    // Function to update images randomly
    function updateImages(image) {
        // Array of image sources
        var imageSources = [
            "images/Cat1.png",
            "images/Cat2.png",
            "images/Cat3.png",
            "images/Cat4.png",
            "images/Cat5.png",
            "images/Cat6.png",
            "images/Cat7.png",
            "images/Cat8.png",
            "images/Cat9.png",
            "images/Cat10.png"
        ];

        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * imageSources.length);
        console.log("New Image Source:", imageSources[randomIndex]);

        // image.style.display="none";
        // Set the new image source
        image.src = imageSources[randomIndex];
    }

    const h = document.querySelector("header");
    const overlay1 = document.getElementById("overlay1");
    const overlay2 = document.getElementById("overlay2");
    const overlay3 = document.getElementById("overlay3");

    // container 1
    document.querySelector('.image-container1').addEventListener('click', function(event) {
        event.preventDefault();
        h.style.display = "none";
        overlay3.style.display = "block";
    });

    document.querySelector("#cancel3").addEventListener('click', function(event) {
        event.preventDefault();
        overlay3.style.display = "none";
        h.style.display = "block";
    });

    // container 2
    document.querySelector('.image-container2').addEventListener('click', function(event) {
        event.preventDefault();
        h.style.display = "none";
        overlay2.style.display = "block";
    });

    document.querySelector("#cancel2").addEventListener('click', function(event) {
        event.preventDefault();
        overlay2.style.display = "none";
        h.style.display = "block";
    });

    // container3
    document.querySelector('.image-container3').addEventListener('click', function(event) {
        event.preventDefault();
        h.style.display = "none";
        overlay1.style.display = "block";
    });

    document.querySelector("#cancel1").addEventListener('click', function(event) {
        event.preventDefault();
        overlay1.style.display = "none";
        h.style.display = "block";
    });

    // document.querySelector('.open').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('overlay').className = 'showing';
    // });

    // document.querySelector('.close').addEventListener('click', function(event) {
    //     event.preventDefault();
    //     document.getElementById('overlay').className = 'hidden';
    // });

    // document.addEventListener('keydown', function (event) {
    //     if (event.key === 'Escape') {
    //         document.getElementById('overlay').className = 'hidden';
    //     }
    // });
})();