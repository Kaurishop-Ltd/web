let jumpButton = document.getElementById('jumpButton');

let moveToNewLocation = () => {

    let left = Math.min(
        Math.random() * document.body.clientWidth,
        document.body.clientWidth - jumpButton.clientWidth
    );

    let top = Math.min(
        Math.random() * document.body.clientHeight,
        document.body.clientHeight - jumpButton.clientHeight
    );

    jumpButton.style.left = left + "px";
    jumpButton.style.top = top + "px";
};

document
    .getElementById('jumpButton')
    .addEventListener('mouseover', moveToNewLocation);

