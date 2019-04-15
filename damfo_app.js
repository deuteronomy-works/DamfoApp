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
            //addDownloaderIcon(all_image[i]);

            var img_url = browser.extension.getURL('icons/download-36.png');

            // creat image ele
            var img_ele = document.createElement('img');
            img_ele.setAttribute('src', img_url);
            img_ele.setAttribute('style', 'position: absolute');
            img_ele.setAttribute('style', 'width: 36px');
            img_ele.setAttribute('style', 'height: 36px');
            img_ele.setAttribute('style', 'topMargin: 0px');

            // append child
            all_image[i].parentElement.parentElement.style.positon = "relative";
            all_image[i].parentElement.appendChild(img_ele);

            //alert(all_image[i].src);
        }
    }
    alert(content_images.length);
    //alert(all_image[4].parentElement.classList.contains('js-adaptive-photo'));

}

function addDownloaderIcon(i) {
    // get the url of the download icon
    var img_url = browser.extension.getURL('icons/download-36.png');

    // creat image ele
    var img_ele = document.createElement('img');
    img_ele.setAttribute('src', img_url);
    img_ele.setAttribute('style', 'position: absolute');
    img_ele.setAttribute('style', 'width: 36px');
    img_ele.setAttribute('style', 'height: 36px');
    img_ele.setAttribute('style', 'topMargin: 0px');

    // append child
    i.parentElement.parentElement.style.positon = "relative";
    i.parentElement.appendChild(img_ele);
}
