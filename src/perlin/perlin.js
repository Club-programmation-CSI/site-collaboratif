document.querySelectorAll("button").forEach(btn => {
    let display = false;
    const iframe = btn.nextElementSibling;
    const iframeURL = iframe.src;
    iframe.src = '';
    btn.onclick = (e) => {
        display = !display;
        if (display) {
            iframe.src = iframeURL;
            btn.innerText = "Cacher"
        } else {
            iframe.src = '';
            btn.innerText = "Monter"
        }
    }
})