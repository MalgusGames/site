import { getHeroImageURL } from "../../utils/image-util";
import CallToAction from "./CallToAction";

export default function HeroSection({ page }) {
  return (
    <div className="section-container center-text">
      <div>
        <img
          className="hero-image"
          src={getHeroImageURL(page.heroImage)}
          alt={page.alt}
        />
      </div>
      <div className="layout">
        <div className="layout header-subtext">
          <h1>{page.title}</h1>
          <p className="subtext">{page.subtext}</p>
        </div>
        <p className="copy">{page.copy}</p>
        <div
          className={`ctas
          ${page.page === "allies" ? "hide" : null}
        `}
        >
          {/* <CallToAction text="Browse Content" link="#/#magic-items" theme="red" /> */}
          <CallToAction
            text="Buy Me A Coffee"
            link="https://ko-fi.com/malgusgames"
            theme="red"
            icon="yes"
          />
        </div>
      </div>
    </div>
  );
}
