window.onload = function() {
    // Extract the parameter value from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');

    // Define the data for different people
    var peopleData = {
		
		
		// Player information
		
		
        'toby-v': {
            name: 'Toby Valentine',
            description: 'Toby is our extraordinary bassist, the backbone of our band.', // can you tell this description was written by chatgpt
            information: "Our bassist is the unsung hero of our band, crafting intricate bass lines that form the core of our sound. These lines provide depth and resonance, adding a unique character to our music.<br>Beyond the stage, they also play a vital role in managing and improving our gear, ensuring our sound is always at its best. In a world where bass often takes a backseat, our bassist shines as an indispensable part of our band, completing our musical journey.<Br>Experience the enchantment of our bassist's talent at our upcoming shows, where their bass lines will take you on a unique musical journey. Thank you for being part of our musical adventure!",
            information_2: "Our bassist is the slap of our band, slapping intricate slap lines that slap the core of our slap. These slaps provide slap and slap, adding a slap slap to our slap.<br>Beyond the stage, they also play a slap role in slap and slap our slap, ensuring our slap is always at its slap. In a slap where slap often takes a slap, our bassist slaps as an indispensable slap of our slap, slap our slap slap.<br>Experience the slap of our bassist's slap at our upcoming slap, where their slap will take you on a slap slap. Thank you for being a slap of our slap slap!",
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
            description: 'Jack is a our dynamic lead guitarist.',
            information: "Jack, our lead guitarist, is the heart of our band. With his Les Paul guitar, he creates captivating melodies that range from soaring highs to soulful lows. Jack's guitar solos are pure magic, elevating our music to new heights.<br>But Jack doesn't stop at guitar. He's also a master of backing vocals, adding depth and soul to our sound. His harmonies intertwine seamlessly with our lead vocalist, creating a rich, layered experience.<brIn every performance, Jack injects passion and skill, making him the heartbeat of our sound. Catch him in action at our upcoming gigs and experience the magic for yourself. Stay tuned for more updates and let the music carry you away!",
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
            description: 'James is our rhythm guitarist is a remarkable musician, known for his exceptional skills and towering presence.',
            information: "Our lead singer and rhythm guitarist certainly have a distinctive approach to the band. Their ambition and constant quest for something 'new' are truly something to behold. Their powerful vocals and guitar work, while foundational, often take center stage.<br>Behind the scenes, their hunger for the spotlight is palpable. It's clear that the band isn't the only thing on their mind. They have a knack for utilizing the group to enhance their own performance, which is quite the skill.<br>While we appreciate their contributions to the band, it's interesting to see how their solo ventures will unfold. We can't help but wonder how that will work out for them. Stay tuned for updates as we navigate the delicate balance between collective creativity and individual aspirations.",
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
                }
            ]
        },
		
		
		
		// Crew info
		
		
		
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
            ],
            images: [{
                    src: 'cory_1.jpg',
                    alt: "Cory's portait in a dark style"
                }
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
      linkHTML += '<img src="images/icons/' + link.imageSrc + '" alt="' + link.alt + '" class="preview littleimg memberimg">';
      linkHTML += '</a>';
      linksHTML += linkHTML;
    }
    linksElement.innerHTML = linksHTML;
  } else {
    linksElement.innerHTML = 'No links available.';
  }
};