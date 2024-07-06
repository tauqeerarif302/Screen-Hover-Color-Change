


window.addEventListener("mousemove", function (dets) {
    let redVal = Math.random() * 255;
    let greenVal = Math.random() * 255;
    let blueVal = Math.random() * 255;
    
    if (dets.clientX <= window.innerWidth / 2) {
        document.body.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
    
    }
    else if (dets.clientX >= window.innerWidth / 2) {
        document.body.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
        
    }
    else {
        document.body.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`;
        
    }
})
