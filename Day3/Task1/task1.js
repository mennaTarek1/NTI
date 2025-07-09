let ul = document.querySelector("#nav-section ul");

let li1 = document.createElement("li");
li1.textContent = "Memo";
ul.appendChild(li1); //عنصر يتحط جوا عنصر تاني

let links = ["Articles", "Photos", "About", "Clients", "Contact"];
links.forEach(text => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.textContent = text;
  a.href = "#";
  li.appendChild(a);
  ul.appendChild(li);
});

let imagesSection = document.getElementById("images-section");

let img1 = document.createElement("img");
img1.setAttribute("src", "dom.jpg");
img1.setAttribute("alt", "Bear");

let img2 = document.createElement("img");
img2.setAttribute("src", "dom.jpg");
img2.setAttribute("alt", "Bear with umbrella");

imagesSection.appendChild(img1);
imagesSection.appendChild(img2);

[img1, img2].forEach(img => {
  img.style.width = "200px";
  img.style.margin = "10px";
  img.style.position = "absolute"; //image don't move
});

img1.style.top = "10px";
img1.style.right = "10px";

img2.style.bottom = "10px";
img2.style.left = "10px";

//ul.style.textAlign = "center";
