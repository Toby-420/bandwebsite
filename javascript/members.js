window.onload = function() {
    // Extract the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

    // Define the data for different people
    var peopleData = {
        'toby-v': {
            name: 'Toby Valentine',
            description: 'Toby is our extraordinary bassist, the backbone of our band.', // can you tell this description was written by chatgpt
            information: "Armed with an Ibanez Soundgear bass and an SX 5-string bass, he effortlessly lays down the foundation of our music. With a keen sense of groove, he infuses our songs, be it original compositions or covers, with an infectious rhythm that moves the audience. His skill on the bass is unparalleled, earning him the admiration of the entire band. In fact, his mastery has led some to jokingly claim that he can play our instruments better than we can. With his impeccable timing and unwavering dedication, he brings the heartbeat to our music, making each performance an unforgettable experience.",
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
                    src: 'toby_1.jpg',
                    alt: 'Toby next to an electric drum kit and railway sign'
                }
            ]
        },
        'jack-w': {
            name: 'Jack Weatherall',
            description: 'Jack is a our dynamic lead vocalist and rhythm guitarist. He can do a very good Alex Turner impression.',
            information: "With a Les Paul built with their own hands and the powerful Epiphone Firebird at their disposal, they command the stage with charisma and passion. As the driving force behind our band, their vocals soar with emotion and captivate audiences with every note. With an innate ability to create captivating riffs, they infuse our music with an irresistible energy. Their dedication to their craft shines through, making them a true powerhouse on stage.",
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
                    src: 'jack_2.jpg',
                    alt: 'Jack performing at Brodstock 2023'
                }
            ]
        },
        'james-sm': {
            name: 'James Simpson-Millott',
            description: 'James is our lead guitarist is a remarkable musician, known for his exceptional skills and towering presence.',
            information: "He effortlessly captivates audiences with his virtuosic performances on the Fender Stratocaster and Les Paul guitars. His versatile playing style spans various genres, from searing solos to delicate arpeggios, resonating deeply with listeners. Not only a master of the instrument, he also contributes his powerful vocals, adding harmony and depth to the band's sound. His ability to craft mesmerizing melodies and riffs leaves an indelible impression on all who have the pleasure of hearing him play.",
            links: [
            ],
            images: [{
                    src: 'james_1.jpg',
                    alt: 'James Smiling widely'
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
                    src: 'matthew_1.jpg',
                    alt: 'Roadman matthew'
                },
                {
                    src: 'matthew_2.jpg',
                    alt: 'Matthew in a hat'
                },
                {
                    src: 'matthew_3.jpg',
                    alt: 'Matthew gone wild'
                }
            ]
        },
        'cory-s': {
            name: 'Cory Shepherd',
            description: 'Cory is our first roadie.',
            information: "In addition to his remarkable support and musical prowess, our devoted roadie is also a creative force in his own right. Not only has he invented the word 'scrootboog', adding a touch of whimsy to our band's vocabulary, but he also channels his passion into creating his own music. With a unique artistic vision, he fearlessly explores different genres and expresses his creativity through composition and production. His inventive spirit inspires us all and reminds us of the boundless possibilities that music holds. Our roadie's multifaceted talents and infectious enthusiasm make him an invaluable member of our crew, enriching our musical journey with his creativity and friendship.",
            links: [{
                    url: 'https://github.com/SicariusAtlas',
                    alt: 'Github',
					imageSrc: 'github.png'
                },
                {
                    url: 'https://www.youtube.com/@sicariusatlas/',
                    alt: 'Youtube',
					imageSrc: 'youtube.png'
                }
                // {
                    // url: 'https://smeghead.netlify.app',
                    // alt: 'Youtube',
					// imageSrc: 'youtube.png'
                // }
            ],
            images: [{
                    src: 'cory_1.jpg',
                    alt: "Cory's portait in a dark style"
                }
            ]
        },
        'john-d': {
            name: 'John Dix',
            description: 'John is our invaluable contact for NKD Music, our generous sponsor and our sound engineer until we get a proper one.',
            information: "Thanks to his efforts, we have forged a fruitful partnership with the music shop, allowing us to receive top-notch gear and equipment. As our liaison with NKD Music, he goes above and beyond to ensure our band's needs are met. His dedication and strong networking skills have helped secure this vital support, enabling us to enhance our performances and musical capabilities. We are incredibly grateful for his instrumental role in fostering this partnership, which has been pivotal in our journey as a band. His unwavering commitment to our success makes him an indispensable member of our crew, and we are fortunate to have him on our side.",
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
                    src: 'john_1.jpg',
                    alt: 'John in a forest'
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
      imagesHTML += '<img src="images/members/' + image.src + '" alt="' + image.alt + '" class="preview mediumimg">';
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
      linkHTML += '<img src="images/icons/' + link.imageSrc + '" alt="' + link.alt + '" class="preview littleimg">';
      linkHTML += '</a>';
      linksHTML += linkHTML;
    }
    linksElement.innerHTML = linksHTML;
  } else {
    linksElement.innerHTML = 'No links available.';
  }
};