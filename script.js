// select all links and create span.highlight
// append to body
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

// get width, height, top and left offset
// getBoundingClientRect method returns the size of an element
// and its position relative to the viewport
function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    // create custom object that adds scrollY and scrollX
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };
    // console.log(linkCoords);
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

// add a listener to each link on mouseenter event
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));