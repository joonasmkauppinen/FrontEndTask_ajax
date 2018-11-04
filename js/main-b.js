// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>

<li>
    <figure>
        <a href="img/original/71_file000132701536.jpg"><img src="img/thumbs/71_file000132701536.jpg"></a>
        <figcaption>
            <h3>Picture 1</h3>
        </figcaption>
    </figure>
</li>

*/
// After the loop print the HTML into <ul> element using innerHTML.

const imagesUrl = 'https://raw.githubusercontent.com/ilkkamtk/BCW2/master/images.json';
const ajaxTarget = document.getElementById('ajax');

const showImages = (element) => {
    fetch(imagesUrl)
    .then( res => {
        return res.json();
    })
    .then( data => {
        let imageElements = "";
        data.forEach(element => {
            imageElements += 
            `<li>
                <figure>
                    <a href="img/original/${element.mediaUrl}"><img src="img/thumbs/${element.mediaUrl}"></a>
                    <figcaption>
                        <h3>${element.mediaTitle}</h3>
                    </figcaption>
                </figure>
            </li>`;
        });
        return imageElements;
    })
    .then( html => {
        element.innerHTML = html;
    })
    .catch( (err) => {
        console.log(err);
    });
}

showImages(ajaxTarget);

