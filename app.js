const togglerWeb = document.querySelector("#toggler-web");
const linksWeb = document.querySelectorAll(".link.togglable.website");
const socials = document.querySelector(".socials");
const theme = document.querySelector(".sun-container");


theme.addEventListener("click", () =>{
  if(document.body.classList.contains("dark")){
  document.body.classList.remove("dark");
  document.documentElement.style.setProperty("--clr-primary-matte-black", "#3b3b3b");
  document.documentElement.style.setProperty("--clr-complementary-matte-black-highlight", "#404040");
  document.documentElement.style.setProperty("--clr-complementary-matte-black-shadow", "#363636");
  document.documentElement.style.setProperty("--main-text-color", "#FFFFFF");
  document.querySelector("#center").style.fill = "#FFFFFF";
  }
  else{
    document.body.classList.add("dark");
    document.documentElement.style.setProperty("--clr-primary-matte-black", "#D2DBEE");
    document.documentElement.style.setProperty("--clr-complementary-matte-black-highlight", "#E5EFFF");
    document.documentElement.style.setProperty("--clr-complementary-matte-black-shadow", "#BFC7D9");
    document.documentElement.style.setProperty("--main-text-color", "#EC80CE");
    document.querySelector("#center").style.fill = "#EC80CE";
  }
})



togglerWeb.addEventListener("click", () => {
  setTimeout(() => {
    console.log("clicked web toggler");
    showLinks(linksWeb);
  }, 200);
  //toggler animation
  socials.classList.remove("animate-up");
  socials.classList.toggle("animate-down");

});

function showLinks(links) {
  for (let i = 0; i < links.length; i++) {
    console.log("iteration: ", i);

    if (links[i].style.display !== "") {
      links[i].classList.remove("shown");
      setTimeout(() => {
        links[i].style.display = "";
        if(links == linksWeb) socials.classList.add("animate-up");
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
