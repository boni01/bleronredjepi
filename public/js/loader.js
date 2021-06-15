const loader = document.getElementById("loading");

window.addEventListener("load", () => {
    if(document.readyState === "complete"){
        loader.style.display = "none"
    }
})