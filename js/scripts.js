let intIndex = 0;

function incrementIndex() {
    intIndex++;
}

function showImage() {
    console.log("Showing image with index:", intIndex);
}

window.onload = function() {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();

    setInterval(function() {
        showImage();
        incrementIndex();
    }, 5000);
}
