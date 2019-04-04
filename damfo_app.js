document.body.style.border = "1px solid chocolate";
twitterParser();

function twitterParser() {
    // Parent function for all twitter cases
    // Parses all twitter pages

    // if homepage parse
    parseOldTwitHomePage();

}

function parseOldTwitHomePage() {
    // parse the old twitter's hompage

    // get all images
    getOldTwitImages();
    //getOldTwitContent();

}

function getOldTwitContent() {
    // gets all content
    let contents = document.getElementsByClassName('content');
    for (var i= 0; i<contents[1].childNodes.length; i++) {
        alert(contents[1].childNodes[i].classList);
    }
}

function getOldTwitImages() {
    // gets all images on old twiiter page

    //for commercial post
    // might merge
    let all_image = document.getElementsByTagName('img');
    for (let i=0; i<all_image.length; i++) {
        if (all_image[i].parentElement.classList.contains('js-adaptive-photo')) {
            all_image[i].parentElement.style.border = "1px solid chocolate";
            alert(all_image[i].src);
        }
    }
    alert(content_images.length);
    //alert(all_image[4].parentElement.classList.contains('js-adaptive-photo'));

}
