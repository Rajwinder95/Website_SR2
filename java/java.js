var btn = document.getElementById("messform");
var btnm = document.getElementById("mb")
var mbtn = document.getElementById("messsubmit")
btnm.onclick = function() {
    btn.style.display = "block";
}
mbtn.onclick = function() {
    btn.style.display = "none";
}
