window.onload = function() {
    // Extract the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    // Define the data for different people
    var peopleData = {
        'toby-v': {
            name: 'Toby Valentine',
            description: 'Toby is our extraordinary bassist, the backbone of our band.',
            information: "Armed with an Ibanez Soundgear bass and an SX 5-string bass, he effortlessly lays down the foundation of our music. With a keen sense of groove, he infuses our songs, be it original compositions or covers, with an infectious rhythm that moves the audience. His skill on the bass is unparalleled, earning him the admiration of the entire band. In fact, his mastery has led some to jokingly claim that he can play our instruments better than we can. With his impeccable timing and unwavering dedication, he brings the heartbeat to our music, making each performance an unforgettable experience.",
            links: [{
                    url: 'https://www.github.com/toby-420',
                    alt: "Toby's Github",
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/channel/UC0R8dqUIzuBawjdi6zD2piQ',
                    alt: "Toby's YouTube",
					imageSrc: 'youtube.png'
                },
                {
                    url: 'https://tobyvalentine.netlify.app',
                    alt: "Toby's website",
					imageSrc: 'toby.png' // its a key not a cock
                }
            ],
            images: [{
                    src: 'toby_1_thumb.webp',
                    alt: 'Toby next to an electric drum kit and railway sign'
                }
            ]
        },
        'jack-w': {
            name: 'Jack Weatherall',
            description: 'Jack is our lead vocalist and rhythm guitarist',
            information: "With a Les Paul built with their own hands and the powerful Epiphone Firebird at their disposal, they command the stage with charisma and passion. As the driving force behind our band, their vocals soar with emotion and captivate audiences with every note. With an innate ability to create captivating riffs, they infuse our music with an irresistible energy. Their dedication to their craft shines through, making them a true powerhouse on stage.",
            links: [{
                    url: 'https://www.instagram.com/jackweatherall01/',
                    alt: "Jack's Instagram",
					imageSrc: 'instagram.png'
                }
            ],
            images: [{
                    src: 'jack_1_thumb.webp',
                    alt: 'Jack performing at Brodstock 2023'
                }
            ]
        },
        'james-sm': {
            name: 'James Simpson-Millott',
            description: 'James is our Lead guitarist who also sings sometimes',
            information: "He effortlessly captivates audiences with his virtuosic performances on the Fender Stratocaster and Les Paul guitars. His versatile playing style spans various genres, from searing solos to delicate arpeggios, resonating deeply with listeners. Not only a master of the instrument, he also contributes his powerful vocals, adding harmony and depth to the band's sound. His ability to craft mesmerizing melodies and riffs leaves an indelible impression on all who have the pleasure of hearing him play.",
            links: [{
                    url: 'https://www.instagram.com/james.brooks23/',
                    alt: "James' Instagram",
					imageSrc: 'instagram.png'
                }
            ],
            images: [{
                    src: 'james_1_thumb.webp',
                    alt: 'James with a primal scream shirt'
                }
            ]
        },
        'matthew-w': {
            name: 'Matthew Wharram',
            description: 'Matthew is a caveman who has developed the skill to talk amongst humans.',
            information: "He is our exceptional drummer who keeps the rhythm tight and the energy high. With an innate sense of rhythm and a natural ability to improvise, he brings a dynamic presence to our performances. Whether it's following the structured beats of our songs or creating spontaneous fills on the spot, he never fails to impress. In addition to his drumming prowess, he contributes backing vocals, adding depth and harmony to our sound. As the host of most of our band practices, his house has become the creative hub where we refine our music and strengthen our bond as a band. With his infectious energy and unwavering commitment, he sets the beat that drives us forward, making each rehearsal and performance a memorable one.",
            links: [
            ],
            images: [{
                    src: 'matthew_1.webp',
                    alt: 'Caveman matthew'
                }
            ]
        },
        'cory-s': {
            name: 'Cory Shepherd',
            description: 'Cory is Cory.',
            information: "In addition to his remarkable support and musical prowess, our devoted roadie is also a creative force in his own right. Not only has he invented the word 'scrootboog', adding a touch of whimsy to our band's vocabulary, but he also channels his passion into creating his own music. With a unique artistic vision, he fearlessly explores different genres and expresses his creativity through composition and production. His inventive spirit inspires us all and reminds us of the boundless possibilities that music holds. Our roadie's multifaceted talents and infectious enthusiasm make him an invaluable member of our crew, enriching our musical journey with his creativity and friendship.",
            links: [{
                    url: 'https://github.com/SicariusAtlas',
                    alt: "Cory's Github",
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/@sicariusatlas/',
                    alt: "Cory's Youtube",
					imageSrc: 'youtube.png'
                }
            ],
            images: [{
                    src: 'cory_1_thumb.webp',
                    alt: "Cory's portait in a dark style"
                }
            ]
        },
        'jax-i': {
            name: 'Jax Ingham',
            description: 'Jax is our photographer.',
            information: "Jax is the beating heart behind the scenes, our band's roadie and visionary photographer. His relentless dedication ensures seamless performances while his lens captures the raw energy and emotion of our musical voyage. From stage setups to candid moments, Jax crafts visual tales that resonate, shaping our band's identity and leaving an enduring impact on our journey.",
            links: [{
                    url: 'https://www.instagram.com/pvnk._.frogs/',
                    alt: "Jax's Instagram",
					imageSrc: 'instagram.png'
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
      imageHTML += '<img src="images/members/' + image.src + '" alt="' + image.alt + '" class="preview mediumimg">';
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
      var linkHTML = '<a href="' + link.url + '" target="_blank">';
      linkHTML += '<img src="images/icons/' + link.imageSrc + '" alt="' + link.alt + '" class="preview littleimg memberimg">';
      linkHTML += '</a>';
      linksHTML += linkHTML;
    }
    linksElement.innerHTML = linksHTML;
  } else {
    linksElement.innerHTML = 'No links available.';
  }
};