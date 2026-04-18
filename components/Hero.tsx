import type { HeroSection } from "@/types/content";
import { emphasize } from "@/lib/emphasize";

type Props = { hero: HeroSection };

export default function Hero({ hero }: Props) {
  return (
    <section aria-label="Introduction" style={{ marginBottom: "48px" }}>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "1.5px",
          color: "var(--dim)",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        {hero.label}
      </p>

      <h1
        className="hero-headline"
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: "-0.5px",
          color: "var(--text)",
          margin: "0 0 24px 0",
        }}
      >
        {hero.headline.map((line, i) =>
          line === "" ? (
            <br key={i} />
          ) : (
            <span key={i} style={{ display: "block" }}>
              {emphasize(line, hero.headlineEmphasis, "accent")}
            </span>
          )
        )}
      </h1>

      <p
        className="lede"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.75,
          color: "var(--text)",
          maxWidth: "620px",
          margin: "0 0 32px 0",
        }}
      >
        <strong style={{ fontWeight: 400, color: "var(--text)" }}>
          {hero.ledeOpener}
        </strong>{" "}
        {emphasize(hero.lede, hero.ledeEmphasis, "warm")}
      </p>

      <div className="kv-row" role="list" aria-label="Key details">
        {hero.kv.map((item) => (
          <div
            key={item.label}
            role="listitem"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--dim)",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "14px",
                lineHeight: 1.65,
                color: "var(--muted)",
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .hero-headline {
          font-size: 38px;
        }
        .kv-row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 24px 36px;
          border-top: 0.5px solid var(--line);
          padding-top: 20px;
        }
        @media (max-width: 639px) {
          .hero-headline {
            font-size: 28px;
          }
          .lede {
            font-size: 15px;
          }
          .kv-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px 24px;
          }
        }
        @media (min-width: 640px) and (max-width: 959px) {
          .hero-headline {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
