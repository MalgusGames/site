import Kofi from "/src/assets/icons/icon_kofi.png";

export default function CallToAction({ text, link, theme, icon }) {
  return (
    <a href={link}>
      <button
        className={`
          ${
            theme === "white"
              ? "call-to-action cta-white"
              : "call-to-action cta-red"
          } ${icon ? "cta-icon" : null}
        `}
      >
        <p className="cta-text">{text ? text : "test"}</p>
        {icon ? <img src={Kofi} alt="" /> : null}
      </button>
    </a>
  );
}
