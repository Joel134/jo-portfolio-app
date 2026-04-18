import type { TimelineNode as TLNode } from "@/types/content";
import { emphasize } from "@/lib/emphasize";

type Props = { node: TLNode };

const markerStyles: Record<TLNode["marker"], React.CSSProperties> = {
  now: {
    background: "var(--glow)",
    boxShadow: "0 0 0 3px rgba(93,202,165,0.2)",
  },
  current: {
    background: "var(--warm)",
  },
  past: {
    background: "transparent",
    border: "1.5px solid var(--dim)",
  },
};

export default function TimelineNodeComponent({ node }: Props) {
  return (
    <article
      className="tl-node"
      aria-label={`${node.year}: ${node.title}`}
      style={{
        display: "grid",
        gridTemplateColumns: "48px 1fr",
        gap: "0 16px",
        position: "relative",
        paddingBottom: "32px",
      }}
    >
      {/* Left column: year + dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          paddingTop: "2px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "var(--dim)",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          {node.year}
        </span>
        <div
          className="tl-dot"
          aria-hidden="true"
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            flexShrink: 0,
            transition: "opacity 0.2s ease",
            ...markerStyles[node.marker],
          }}
        />
        {/* Vertical connector line */}
        <div
          aria-hidden="true"
          style={{
            flex: 1,
            width: "0.5px",
            background: "var(--line)",
            minHeight: "16px",
          }}
        />
      </div>

      {/* Right column: content */}
      <div className="tl-content" style={{ paddingBottom: "4px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: "4px",
            marginBottom: "8px",
          }}
        >
          <h3
            className="tl-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.2px",
              color: "var(--text)",
              margin: 0,
            }}
          >
            {node.title}
          </h3>
          <span
            className="tl-role"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "var(--dim)",
              textAlign: "right",
              lineHeight: 1,
            }}
          >
            {node.role}
          </span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "14px",
            lineHeight: 1.65,
            color: "var(--muted)",
            margin: "0 0 12px 0",
            maxWidth: "560px",
          }}
        >
          {emphasize(node.body, node.bodyEmphasis, "warm")}
        </p>

        {node.stack.length > 0 && (
          <div
            aria-label="Stack"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              lineHeight: 1.6,
              letterSpacing: "0.8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "0 8px",
            }}
          >
            {node.stack.map((token, i) => (
              <span
                key={token}
                style={{ color: i === 0 ? "var(--accent)" : "var(--dim)" }}
              >
                {token}
              </span>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 639px) {
          .tl-node {
            min-height: 44px;
          }
          .tl-title {
            font-size: 18px !important;
          }
          .tl-role {
            text-align: left !important;
            flex-basis: 100%;
            margin-top: 2px;
          }
        }
      `}</style>
    </article>
  );
}
