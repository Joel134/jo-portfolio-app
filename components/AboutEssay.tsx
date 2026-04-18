import type { AboutSection } from "@/types/content";
import SectionHead from "./SectionHead";
import { emphasize } from "@/lib/emphasize";

type Props = { about: AboutSection };

export default function AboutEssay({ about }: Props) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ marginBottom: "72px" }}
    >
      <div id="about-heading" style={{ display: "contents" }}>
        <SectionHead
          number={about.sectionNumber}
          title={about.sectionTitle}
          sub={about.sectionSub}
        />
      </div>

      <div style={{ paddingLeft: 0 }}>
        {about.paragraphs.map((para, i) => (
          <p
            key={i}
            className={para.dropCap ? "drop-cap-para" : ""}
            style={{
              fontFamily: "var(--font-serif)",
              lineHeight: 1.75,
              color: para.tone === "quiet" ? "var(--muted)" : "var(--text)",
              margin: "0 0 20px 0",
              position: "relative",
            }}
          >
            {para.dropCap ? (
              <>
                <span className="drop-cap" aria-hidden="true">
                  {para.text.charAt(0)}
                </span>
                {emphasize(para.text.slice(1), para.emphasis, "accent")}
              </>
            ) : (
              emphasize(para.text, para.emphasis, "accent")
            )}
          </p>
        ))}

        <div
          style={{
            marginTop: "32px",
            paddingTop: "20px",
            borderTop: "0.5px solid var(--line)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--dim)",
              margin: "0 0 4px 0",
            }}
          >
            {about.signature.place}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              fontStyle: "italic",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            {about.signature.note}
          </p>
        </div>
      </div>

      <style>{`
        .drop-cap-para {
          font-size: 16px;
        }
        .drop-cap {
          float: left;
          font-family: var(--font-serif);
          font-size: 52px;
          font-weight: 400;
          line-height: 0.9;
          color: var(--accent);
          margin-right: 6px;
          margin-top: 6px;
        }
        @media (max-width: 639px) {
          .drop-cap-para {
            font-size: 15px;
          }
          .drop-cap {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
