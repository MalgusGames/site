function getImageURL(name) {
  return new URL(`../assets/socials/${name}`, import.meta.url).href;
}

export { getImageURL };
