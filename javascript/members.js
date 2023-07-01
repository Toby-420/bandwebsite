window.onload = function() {
    // Extract the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

    // Define the data for different people
    var peopleData = {
        'toby-v': {
            name: 'Toby Valentine',
            description: 'Toby is a bassist who also "plays our own instruments better than us" - sic James Simpson Millot. They also wrote the code for this website',
			information: 'Placeholder',
			link1: '',
			link2: '',
            images: [
                { src: 'image1.jpg', alt: '' },
                { src: 'image2.jpg', alt: '' },
                { src: 'image3.jpg', alt: '' }
            ]
        },
		'jack-w': {
            name: 'Jack Weatherall',
            description: 'Jack is a rhythm guitarist who also sings for us. He can do a very good Alex Turner impression',
			information: 'Placeholder',
			link1: '',
			link2: '',
            images: [
                { src: 'jack_1.jpg', alt: 'Jack Weatherall in a mirror' },
                { src: 'image2.jpg', alt: '' },
                { src: 'image3.jpg', alt: '' }
            ]
        },
		'james-sm': {
            name: 'James Simpson-Millott',
            description: 'James is an incredible lead guitarist who has a knack for writing catchy melodies with little effort',
			information: 'Placeholder',
			link1: '',
			link2: '',
            images: [
                { src: 'james_1.jpg', alt: 'James Smiling widely' },
                { src: 'image2.jpg', alt: '' },
                { src: 'image3.jpg', alt: '' }
            ]
        },
		'matthew-w': {
            name: 'Matthew Wharram',
            description: 'Matthew is actually a caveman who has developed the skill to talk amongst humans. He still hits things though',
			information: 'Placeholder',
			link1: '',
			link2: '',
            images: [
                { src: 'matthew_1.jpg', alt: 'Roadman matthew' },
                { src: 'image2.jpg', alt: '' },
                { src: 'image3.jpg', alt: '' }
            ]
        },
		'cory-s': {
            name: 'Cory Shepherd',
            description: 'Cory is a great friend, roadie, and overall helpful dude when it comes to anything whether inside the band or out', // This was not written by Cory haha
			information: 'Placeholder',
			link1: '',
			link2: '',
            images: [
                { src: 'cory_1.jpg', alt: "Cory's portait in a dark style" },
                { src: 'image2.jpg', alt: '' },
                { src: 'image3.jpg', alt: '' }
            ]
        },
		'john-d': {
            name: 'John Dix',
            description: 'John is our sponsor and provider who connected us with NKD music, allowing us to get great discounts on brilliant equipment',
			information: 'Placeholder',
			link1: '',
			link2: '',
            images: [
                { src: 'image1.jpg', alt: '' },
                { src: 'image2.jpg', alt: '' },
                { src: 'image3.jpg', alt: '' }
            ]
        },
        // Add more people here with their respective data
    };

    // Find the person's data based on the parameter value
    var personData = peopleData[name];

    // Update the page content with the person's data
    var nameElement = document.getElementById('name');
    nameElement.innerHTML = personData ? personData.name : 'Unknown';

    var infoElement = document.getElementById('info');
    infoElement.innerHTML = personData ? personData.description : 'No description available.';
	
	var infoElement = document.getElementById('more-info');
    infoElement.innerHTML = personData ? personData.information : 'No information available.';

    var imagesElement = document.getElementById('images');
    if (personData && personData.images.length > 0) {
        var imagesHTML = '';
        for (var i = 0; i < personData.images.length; i++) {
            var image = personData.images[i];
            imagesHTML += '<img src="../images/members/' + image.src + '" alt="' + image.alt + '">';
        }
        imagesElement.innerHTML = imagesHTML;
    } else {
        imagesElement.innerHTML = 'No images available.';
    }
};
