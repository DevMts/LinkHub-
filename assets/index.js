function loading(){
    if (document.readyState === "complete") {
        setTimeout(function() {
            document.getElementById('code-loader').style.display = 'none'
            document.getElementById('max').style.display = 'block'
        }, 2000);
        }
}
