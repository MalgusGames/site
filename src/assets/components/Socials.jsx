export default function Socials() {
  const socialMedia = [
    {
      social: "tik-tok",
      link: "https://www.tiktok.com/@malgus_games_dev",
      imagePath: "/src/assets/socials/tik_tok.png",
    },
    {
      social: "instagram",
      link: "https://www.instagram.com/kramermalgusgames/",
      imagePath: "/src/assets/socials/instagram.png",
    },
    {
      social: "youtube",
      link: "https://www.youtube.com/@malgusgames",
      imagePath: "/src/assets/socials/youtube.png",
    },
  ];
  return (
    <div className="socials">
      {socialMedia.map((i) => (
        <a className="social-link" href={i.link}>
          <div className="social-image">
            <img src={i.imagePath} alt={i.social} />
          </div>
        </a>
      ))}
    </div>
  );
}
