import { getContent } from "@/lib/content";
import MetaStrip from "@/components/MetaStrip";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import AboutEssay from "@/components/AboutEssay";
import Facets from "@/components/Facets";
import Spotlight from "@/components/Spotlight";
import StackBlock from "@/components/StackBlock";
import Footer from "@/components/Footer";

export default function Home() {
  const content = getContent();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="canvas">
        <main id="main-content" className="content-col">
          <MetaStrip meta={content.meta} />
          <Hero hero={content.hero} />
          <Timeline timeline={content.timeline} />
          <AboutEssay about={content.about} />
          <Facets facets={content.facets} />
          <Spotlight whatsNext={content.whatsNext} />
          <StackBlock stack={content.stack} />
          <Footer footer={content.footer} />
        </main>
      </div>
    </>
  );
}
