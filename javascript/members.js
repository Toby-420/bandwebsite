window.onload = function() {
    // Extract the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    // Define the data for different people
    var peopleData = {
        'toby': {
            name: 'Toby Valentine',
            description: 'Toby is our extraordinary bassist, the backbone of our band.',
            information: "I'm Toby and I play the bass in Deep Sea Lemons. Ever since meeting Jim years ago, I've found significant fun jamming and being around the other guys. My love for music extends way before that as there are stories of me dancing to 'Killing in the Name' when it reached Number 1 at christmas. I take inspiration from legends such as Bernard Edwards (Chic), Billy Gould (Faith No More), and Nick Seymour (Crowded House). I hope we'll see you all at our future gigs. See you there!",
            links: [
                {
                    url: 'https://www.instagram.com/toby__valentine/',
                    alt: "Toby's Instagram",
					imageSrc: 'instagram.webp'
                }
            ],
            images: [{
                    src: 'toby_1_thumb.webp',
                    alt: 'Toby next to an electric drum kit and railway sign'
                }
            ]
        },
        'jack': {
            name: 'Jack Weatherall',
            description: 'Jack plays guitar and sings alongside Jim',
            information: "With a Les Paul built with their own hands and the powerful Epiphone Firebird at their disposal, they command the stage with charisma and passion. As the driving force behind our band, their vocals soar with emotion and captivate audiences with every note. With an innate ability to create captivating riffs, they infuse our music with an irresistible energy. Their dedication to their craft shines through, making them a true powerhouse on stage.",
            links: [{
                    url: 'https://www.instagram.com/jackweatherall01/',
                    alt: "Jack's Instagram",
					imageSrc: 'instagram.webp'
                }
            ],
            images: [{
                    src: 'jack_1_thumb.webp',
                    alt: 'Jack performing at Brodstock 2023'
                }
            ]
        },
        'jim': {
            name: 'Jim Simpson-Millott',
            description: 'Jim plays guitar and sings alongside Jack',
            information: "I’m Jim and I sing and play guitar. I absolutely love being in Deep Sea Lemons and I have done since I formed the band with Toby in around about 2019. Since I was about nine I’ve had an insatiable passion for playing guitar and making music. When I was little I distinctly remember my mum’s radio playing at all times and how I would take her CDs and listen to them on repeat. Music has and always will be a huge part of my life. Don’t forget that our journey as a band has only just begun; we have many original songs on the way which I know you will love. I hope to see you all in the crowd at our gigs in the near future. Let’s have it!",
            links: [{
                    url: 'https://www.instagram.com/james.brooks23/',
                    alt: "Jim's Instagram",
					imageSrc: 'instagram.webp'
                }
            ],
            images: [{
                    src: 'jim_1_thumb.webp',
                    alt: 'Jim with a primal scream shirt'
                },
                {
                    src: 'jim_2_thumb.webp',
                    alt: "The correct political stance"
                }
            ]
        },
        'matthew': {
            name: 'Matthew Wharram',
            description: 'Matthew is a caveman who has developed the skill to talk amongst humans.',
            information: "Hi, Matt here! I'm incredibly passionate about playing the drums and with my dedication to the music and confidence, I'm sure that the groove will resonate with you. Slipknot and Rush are amongst some of the great bands who have inspired me with my drumming along with those infectious grooves from Red Hot Chili Peppers. Being a part of this band is an incredibly important part of who I am, so I hope you enjoy our gigs as much as I do!",
            links: [{
                    url: 'https://www.instagram.com/mattwharr1/',
                    alt: "Matt's Instagram",
					imageSrc: 'instagram.webp'
                }
            ],
            images: [{
                    src: 'matthew_1_thumb.webp',
                    alt: 'Caveman matthew'
                }
            ]
        },
        'jax': {
            name: 'Jax Ingham',
            description: 'Jax is our photographer.',
            information: "Jax is the beating heart behind the scenes, our band's roadie and visionary photographer. His relentless dedication ensures seamless performances while his lens captures the raw energy and emotion of our musical voyage. From stage setups to candid moments, Jax crafts visual tales that resonate, shaping our band's identity and leaving an enduring impact on our journey.",
            links: [{
                    url: 'https://www.instagram.com/pvnk._.frogs/',
                    alt: "Jax's Instagram",
					imageSrc: 'instagram.webp'
                },
            ],
            images: [{
                    src: 'jax_1_thumb.webp',
                    alt: "Jax standing under a shelter"
                },
            ]
        },
    };
  var personData = peopleData[name];
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
      var imageHTML = '<div class="thumb">';
      imageHTML += '<img src="images/members/' + image.src + '" alt="' + image.alt + '" class="galleryImg">';
      imageHTML += '</div>';
      imagesHTML += imageHTML;
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
      var linkHTML = '<a href="' + link.url + '" target="_self">';
      linkHTML += '<img src="images/icons/' + link.imageSrc + '" alt="' + link.alt + '" class="logos">';
      linkHTML += '</a>';
      linksHTML += linkHTML;
    }
    linksElement.innerHTML = linksHTML;
  } else {
    linksElement.innerHTML = 'No links.';
  }
};