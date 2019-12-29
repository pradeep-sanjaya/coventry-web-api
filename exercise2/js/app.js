document.getElementById("info").addEventListener("click", function () {
    console.log("clicked");

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var ip = document.getElementById("ip").value;

    if (ip != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.response);

                document.getElementById("content").style.color = "#000000";
                document.getElementById("content").innerHTML = '';

                var node = document.createElement("P");
                var textnode = document.createTextNode("Hello, " + firstname + " " + lastname);
                node.appendChild(textnode);
                document.getElementById("content").appendChild(node);

                var node = document.createElement("LI");
                var textnode = document.createTextNode("IP: " + res.ip);
                node.appendChild(textnode);
                document.getElementById("content").appendChild(node);

                var node = document.createElement("LI");
                var textnode = document.createTextNode("City: " + res.city);
                node.appendChild(textnode);
                document.getElementById("content").appendChild(node);
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Region: " + res.region);
                node.appendChild(textnode);
                document.getElementById("content").appendChild(node);

                var node = document.createElement("LI");
                var textnode = document.createTextNode("Country: " + res.country);
                node.appendChild(textnode);
                document.getElementById("content").appendChild(node);
            }
        };
        xhttp.open("GET", "https://ipapi.co/" + ip + "/json/", true);
        xhttp.send();
    } else {
        alert("Please add ip address");
    }

});

document.getElementById("color").addEventListener("click", function () {
    console.log("color");
    document.getElementById("content").style.color = "#ff0000";
});