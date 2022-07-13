// section TWO cloning ------
const cardContainer = document.querySelector('.cards-box__card-container')
const article = cardContainer.children[0]

for (let i = 0; i <= 7; i++) {
  const clone = article.cloneNode(true)
  cardContainer.appendChild(clone)
}

// Section FOUR cloning ------
const accordionContainer = document.querySelector('.accordion__container')
const accordion = accordionContainer.children[0]

for (let i = 0; i <= 3; i++) {
  const clone = accordion.cloneNode(true)
  accordionContainer.appendChild(clone)
}

