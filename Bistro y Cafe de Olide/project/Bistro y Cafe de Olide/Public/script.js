const images = document.querySelectorAll("img");

for (const image of images) {
  image.addEventListener("click", function() {
    const ingredients = image.getAttribute("data-ingredients");
    alert(ingredients);
  });
}
