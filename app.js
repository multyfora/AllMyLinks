const togglerWeb = document.querySelector("#toggler-web");
const togglerSocial = document.querySelector("#toggler-social");
const linksWeb = document.querySelectorAll(".link.togglable.website");
const linksSocial = document.querySelectorAll(".link.togglable.social");

togglerWeb.addEventListener("click", () => {
  setTimeout(() => {
    console.log("clicked web toggler");
    showLinks(linksWeb);
  }, 200);
  //toggler animation
  togglerSocial.classList.remove("animate-up");
  togglerSocial.classList.toggle("animate-down");

});

togglerSocial.addEventListener("click", () => {
  console.log("clicked social toggler");
  showLinks(linksSocial);
});

function showLinks(links) {
  for (let i = 0; i < links.length; i++) {
    console.log("iteration: ", i);

    if (links[i].style.display !== "") {
      links[i].classList.remove("shown");
      setTimeout(() => {
        links[i].style.display = "";
        if(links == linksWeb) togglerSocial.classList.add("animate-up");
      }, 500);
    } else {
      console.log("else condition");
      links[i].style.display = "block";
      setTimeout(() => {
        links[i].classList.add("shown");
      }, 100);
    }
  }
}

function takeTo(link) {
  window.location.href = link;
}
