import type { WhatsNextSection } from "@/types/content";
import SectionHead from "./SectionHead";

type Props = { whatsNext: WhatsNextSection };

export default function Spotlight({ whatsNext }: Props) {
  const { spotlight } = whatsNext;

  const renderHighlighted = (text: string, highlight: string) => {
    if (!highlight || !text.includes(highlight)) return text;
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <em className="glow">{highlight}</em>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <section
      id="whats-next"
      aria-labelledby="whats-next-heading"
      style={{ marginBottom: "72px" }}
    >
      <div id="whats-next-heading" style={{ display: "contents" }}>
        <SectionHead
          number={whatsNext.sectionNumber}
          title={whatsNext.sectionTitle}
          sub={whatsNext.sectionSub}
        />
      </div>

      <div
        style={{
          padding: "24px 28px",
          background: "rgba(93,202,165,0.04)",
          borderRadius: "8px",
          borderLeft: "2px solid var(--glow)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--glow)",
            margin: "0 0 12px 0",
          }}
        >
          {spotlight.label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "16px",
            lineHeight: 1.75,
            color: "var(--text)",
            margin: 0,
          }}
        >
          {renderHighlighted(spotlight.text, spotlight.highlight)}
        </p>
      </div>
    </section>
  );
}
