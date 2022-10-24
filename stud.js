let x = "*";

function xmas_Tree() {
    let rows = 20;
    let stand = 10;

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= i; j++) {
            document.getElementById("tree_").innerHTML += "|";
            document.getElementById("tree_").innerHTML += x;
            document.getElementById("tree_").innerHTML += "|";
        }
        //document.write("<br>");
        document.getElementById("tree_").innerHTML += "<br>";

    }
    for (let a = 0; a <= stand; a++) {
        document.getElementById("tree_").innerHTML += "||";

    }
    document.getElementById("tree_").innerHTML += "<br>";

}

xmas_Tree();

const text = document.getElementById("tree_");
current.style.fontWeight = "bold";
body.style.fontFamily = "sans-serif";

function sparkling() {
    //kinuha yung text
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let zz = "rgb(" + red + "," + green + "," + blue + ")";
    //alert(zz);
    text.style.color = zz;
    text.style.backgroundColor = "black";
    text.style.width = "50%";
    document.getElementById("current").textContent = zz;

}

function start() {
    start_color = setInterval(sparkling, 100);
}

function stop() {
    clearInterval(start_color);
}
