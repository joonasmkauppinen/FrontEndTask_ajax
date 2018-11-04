// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const imagesUrl = 'https://raw.githubusercontent.com/ilkkamtk/BCW2/master/images.html';
const ajaxTarget = document.getElementById("ajax");

const showImages = (element) => {
    fetch(imagesUrl)
    .then( (res)  => {
        return res.text()
    })
    .then( (html) => {
        element.innerHTML = html
    })
    .catch( (err) => {
        console.log(err)
    });
}

showImages(ajaxTarget);
