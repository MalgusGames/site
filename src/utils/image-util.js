// social media images
function getSocialImageURL(name) {
  return new URL(`../assets/socials/${name}`, import.meta.url).href;
}

// magic item images
function getItemImageURL(name) {
  return new URL(`../assets/item_images/${name}`, import.meta.url).href;
}

export { getSocialImageURL, getItemImageURL };
