window.onload = function() {
    // Extract the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

    // Define the data for different people
    var peopleData = {
        'toby-v': {
            name: 'Toby Valentine',
            description: 'Toby is a bassist who also "plays our own instruments better than us" - sic James Simpson-Millott. They also wrote the code for this website',
            information: 'Placeholder',
            links: [{
                    url: 'https://www.github.com/toby-420',
                    alt: 'Github',
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/channel/UC0R8dqUIzuBawjdi6zD2piQ',
                    alt: 'YouTube',
					imageSrc: 'youtube.png'
                },
                {
                    url: 'https://tobyvalentine.netlify.app',
                    alt: "Toby's website",
					imageSrc: 'toby.png' // its a key not a cock
                }
            ],
            images: [{
                    src: 'image1.jpg',
                    alt: ''
                },
                {
                    src: 'image2.jpg',
                    alt: ''
                },
                {
                    src: 'image3.jpg',
                    alt: ''
                }
            ]
        },
        'jack-w': {
            name: 'Jack Weatherall',
            description: 'Jack is a rhythm guitarist who also sings for us. He can do a very good Alex Turner impression',
            information: 'Placeholder',
            links: [{
                    url: 'https://www.instagram.com/jackweatherall01/',
                    alt: 'Instagram',
					imageSrc: 'instagram.png'
                }
            ],
            images: [{
                    src: 'jack_1.jpg',
                    alt: 'Jack Weatherall in a mirror'
                },
                {
                    src: 'image2.jpg',
                    alt: ''
                },
                {
                    src: 'image3.jpg',
                    alt: ''
                }
            ]
        },
        'james-sm': {
            name: 'James Simpson-Millott',
            description: 'James is an incredible lead guitarist who has a knack for writing catchy melodies with little effort',
            information: 'Placeholder',
            links: [{
                    url: 'https://www.github.com/toby-420',
                    alt: 'Github',
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/channel/UC0R8dqUIzuBawjdi6zD2piQ',
                    alt: 'YouTube',
					imageSrc: 'youtube.png'
                }
            ],
            images: [{
                    src: 'james_1.jpg',
                    alt: 'James Smiling widely'
                },
                {
                    src: 'image2.jpg',
                    alt: ''
                },
                {
                    src: 'image3.jpg',
                    alt: ''
                }
            ]
        },
        'matthew-w': {
            name: 'Matthew Wharram',
            description: 'Matthew is actually a caveman who has developed the skill to talk amongst humans. He still hits things though',
            information: 'His hair is as fluffy as it looks.<br>He has',
            links: [{
                    url: 'https://www.github.com/toby-420',
                    alt: 'Github',
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/channel/UC0R8dqUIzuBawjdi6zD2piQ',
                    alt: 'YouTube',
					imageSrc: 'youtube.png'
                }
            ],
            images: [{
                    src: 'matthew_1.jpg',
                    alt: 'Roadman matthew'
                },
                {
                    src: 'image2.jpg',
                    alt: ''
                },
                {
                    src: 'image3.jpg',
                    alt: ''
                }
            ]
        },
        'cory-s': {
            name: 'Cory Shepherd',
            description: 'Cory is a scrootboog', // This was not written by Cory haha
            information: '<a href="https://www.urbandictionary.com/define.php?term=scrootboog" target="_blank">Scrootboog is now defined in the dictionary</a>',
            links: [{
                    url: 'https://www.github.com/toby-420',
                    alt: 'Github',
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/channel/UC0R8dqUIzuBawjdi6zD2piQ',
                    alt: 'YouTube',
					imageSrc: 'youtube.png'
                }
            ],
            images: [{
                    src: 'cory_1.jpg',
                    alt: "Cory's portait in a dark style"
                },
                {
                    src: 'image2.jpg',
                    alt: ''
                },
                {
                    src: 'image3.jpg',
                    alt: ''
                }
            ]
        },
        'john-d': {
            name: 'John Dix',
            description: 'John is our sponsor and provider who connected us with NKD music, allowing us to get great discounts on brilliant equipment',
            information: '',
            links: [{
                    url: 'https://www.facebook.com/NKDMusicstore/',
                    alt: 'NKD Music',
					imageSrc: 'nkd.jpg'
                },
                {
                    url: 'https://www.instagram.com/john_dix08/',
                    alt: 'Instagram',
					imageSrc: 'instagram.png'
                }
            ],
            images: [{
                    src: 'image1.jpg',
                    alt: ''
                },
                {
                    src: 'image2.jpg',
                    alt: ''
                },
                {
                    src: 'image3.jpg',
                    alt: ''
                }
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

  var moreInfoElement = document.getElementById('more-info');
  moreInfoElement.innerHTML = personData ? personData.information : 'No information available.';

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

  var linksElement = document.getElementById('links');
  if (personData && personData.links.length > 0) {
    var linksHTML = '';
    for (var i = 0; i < personData.links.length; i++) {
      var link = personData.links[i];
      var linkHTML = '<a href="' + link.url + '" target="_blank">';
      linkHTML += '<img src="../images/icons/' + link.imageSrc + '" alt="' + link.alt + '" class="preview littleimg">';
      linkHTML += '</a>';
      linksHTML += linkHTML;
    }
    linksElement.innerHTML = linksHTML;
  } else {
    linksElement.innerHTML = 'No links available.';
  }
};