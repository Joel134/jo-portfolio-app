import type { StackSection } from "@/types/content";

type Props = { stack: StackSection };

export default function StackBlock({ stack }: Props) {
  return (
    <div className="stack-block-grid" style={{ marginBottom: "72px" }}>
      <div>
        <h4
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--dim)",
            margin: "0 0 16px 0",
          }}
        >
          {stack.stack.heading}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "13px",
            fontStyle: "italic",
            lineHeight: 1.9,
            color: "var(--accent)",
            margin: 0,
          }}
        >
          {stack.stack.tokens.join(" · ")}
        </p>
      </div>

      <div>
        <h4
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--dim)",
            margin: "0 0 16px 0",
          }}
        >
          {stack.tongues.heading}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "13px",
            fontStyle: "italic",
            lineHeight: 1.9,
            color: "var(--accent)",
            margin: 0,
          }}
        >
          {stack.tongues.items.join(" · ")}
        </p>
      </div>

      <style>{`
        .stack-block-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 639px) {
          .stack-block-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
