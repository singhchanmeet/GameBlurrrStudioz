// Loading Animation

var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    loadNow(1);
});



// // Theme Changer

// var themeicon = document.getElementById("themeicon");
// themeicon.onclick = function () {
//     document.body.classList.toggle("darktheme");
//     if (document.body.classList.contains("darktheme")) {
//         themeicon.src = "sun.png";
//     }
//     else {
//         themeicon.src = "moon.png";
//     }
// }


