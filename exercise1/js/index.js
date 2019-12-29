
document.getElementById("get-button").addEventListener("click", function () {
    getDogPicture();
});

function getDogPicture() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response);
            console.log(data);
            document.getElementById("dog-image").src = data.message;
        }
    };
    xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhttp.send();
}