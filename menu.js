// This is for the menu

const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.fullMenu');
const fullMenuLink = document.querySelectorAll('.fullMenuLink');
const contactSection = document.querySelector('#contact');
const hamburgerBars = document.querySelectorAll('.bar');

function burgerToClose() {
  hamburger.classList.toggle('active');
  fullMenu.classList.toggle('active');
}

hamburger.addEventListener('click', burgerToClose);

fullMenuLink.forEach((n) => n.addEventListener('click', burgerToClose));

// menu button change color when scrolling over contact section
function chameleon() {
  const scrollPosition = window.scrollY || window.pageYOffset;
  const contactSectionPosition = contactSection.offsetTop;

  if (scrollPosition >= contactSectionPosition) {
    hamburgerBars.forEach((bar) => {
      bar.style.backgroundColor = 'black';
    });
  } else {
    hamburgerBars.forEach((bar) => {
      bar.style.removeProperty('background-color');
    });
  }
}

window.addEventListener('scroll', chameleon);

// This is for the Pop Up Windows

const cardsData = [
  {
    Name: 'Tonic',
    Description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Image: './images/card1desk.png',
    Features: './images/canopydesk1.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png','./images/javascripttag.png','./images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
  },
  {
    Name: 'Multi-Post-Stories',
    Description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    Image: './images/card2desk.png',
    Features: './images/canopydesk2&3.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png','./images/javascripttag.png','./images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
  },
  {
    Name: 'Facebook 360',
    Description: 'Exploring the future of media in Facebook\'s first Virtual Reality app\; a place to discover and enjoy 360 photos and videos on Gear VR.',
    Image: './images/card3desk.png',
    Features: './images/canopydesk2&3.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png','./images/javascripttag.png','./images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
  },
  {
    Name: 'Uber Navigation',
    Description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Image: './images/card4desk.png',
    Features: './images/canopydesk4.png',
    Technologies: ['./images/htmltag.png', './images/csstag.png','./images/javascripttag.png','./images/rubytag.png'],
    SeeProject: 'See project',
    Live: 'https://www.google.com',
    Source: 'https://github.com',
  }
];

// Cards Template

cardsData.forEach((card, index) => {
let cardsNormal = `<div class="cards" id="cardfirst">
<div class="orange">
    <img class="mobileImage" src="${card.Image}" alt="">
    <img class="deskImage" src="${card.Image}" alt="">
</div>
<div class="left-block">
    <h2>${card.Name}</h2>
    <div><img class="canopy" src="${card.Features}" alt=""></div>
    <p>${card.Description}</p>
    <ul class="tags">
        <li><img class="programs" src="${card.Technologies[0]}"></li>
        <li><img class="programs" src="${card.Technologies[1]}" alt=""></li>
        <li><img class="programs" src="${card.Technologies[2]}" alt=""></li>
    </ul>
    <div>
        <button class="butt">${card.SeeProject}</button>
    </div>
</div>
</div>`

  const works = document.querySelector('.works');
  tempContainer = document.createElement('div');
  tempContainer.innerHTML = cardsNormal;
  const cardsNormalPage = tempContainer.firstChild;
  works.appendChild(cardsNormalPage);

  const button = document.querySelector('.butt');
  button.addEventListener('click', () => {
    const popUpCard = generatePopUpCard(card);
    document.body.appendChild(popUpCard);
  })
})

function generatePopUpCard(card) {
  const popUpCard = document.createElement('div');
  popUpCard.classList.add('popUpCard');

  popUpCard.innerHTML = 
  `<div class="popUpContent">
    <h2>${card.Name}</h2>
    <button class="popUpClose">Close</button>
    <div><img class="canopy" src="${card.Features}" alt=""></div>
    <div class="orange">
      <img class="mobileImage" src="${card.Image}" alt="">
      <img class="deskImage" src="${card.Image}" alt="">
    </div>
    <p>${card.Description}</p>
    <ul class="popUpTags">
        ${generatePopUpTags(card.Technologies)}
    </ul>
    <div>
        <a class="popUpLink" href="${card.Live}" target="_blank">See Live</a>
        <a class="popUpLink" href="${card.Source}" target="_blank">View Source</a>
    </div>
  </div>`;

  const popUpCloseButton = popUpCard.querySelector('.popUpClose');
  popUpCloseButton.addEventListener('click', () => {
    popUpCard.remove();
  });

  return popUpCard;
}

  function generatePopUpTags(technologies) {
    return technologies
    .map((technology) => `<li><img class="programs" src="${technology}"></li>`)
    .join('');
  }
