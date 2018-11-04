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
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const imagesUrl = 'https://raw.githubusercontent.com/ilkkamtk/BCW2/master/images.json'
const imageList = document.getElementById('listContainer');

const newListItem = (title, image, thumb) => {
	let li         = document.createElement("li");
	let figure     = document.createElement("figure");
	let a          = document.createElement("a");
	let img        = document.createElement("img");
	let figcaption = document.createElement("figcaption");
	let h3         = document.createElement("h3");

	h3.innerHTML = title;
	figcaption.appendChild(h3);

	img.setAttribute("src", `img/thumbs/${thumb}`);
	a.setAttribute("href", `img/original/${image}`);
	a.appendChild(img);

	figure.appendChild(a);
	figure.appendChild(figcaption);

	li.appendChild(figure);

	return li;
}

const showImages = () => {
	fetch(imagesUrl)
		.then(res => {
			return res.json();
		})
		.then(data => {
			data.forEach(element => {
				imageList.appendChild(
					newListItem(
						element.mediaTitle,
						element.mediaUrl,
						element.mediaThumb
					)
				);
			});
		})
		.catch(err => {
			console.log(err);
		})
}

showImages();