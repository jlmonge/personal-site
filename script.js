// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navLinks = document.getElementsByClassName('nav-links')[0]

// toggleButton.addEventListener('click', () => {
//     navLinks.classList.toggle('active')
// })

const projectSiteLinks = document.getElementsByClassName("project-site-link");
const projectGithubLinks = document.getElementsByClassName(
  "project-github-link"
);
const socialLinks = document.getElementsByClassName("social-link");

const linkArrays = [projectSiteLinks, projectGithubLinks, socialLinks];

const bodyElem = document.getElementsByTagName("body")[0];

for (let arr of linkArrays) {
  // for each group, create a div of class railgroup
  const newGroup = document.createElement("div");
  newGroup.classList.add("railgroup");

  for (let i = 0; i < arr.length; i++) {
    const newRail = document.createElement("div");
    newRail.classList.add("rail");
    newGroup.appendChild(newRail);

    const newCart = document.createElement("div");
    newCart.classList.add("cart");
    newCart.style.animationDuration = getRandomNumber(10, 30) + "s";
    console.log(newCart.style.animationDuration);
    newRail.appendChild(newCart);
  }
  bodyElem.appendChild(newGroup);
}

// Inclusive max!
function getRandomNumber(min = 0, max) {
  return Math.random() * (max - min + 1) + min;
}
