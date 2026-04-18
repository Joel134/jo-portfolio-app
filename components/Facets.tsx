import type { FacetsSection } from "@/types/content";
import { emphasize } from "@/lib/emphasize";

type Props = { facets: FacetsSection };

export default function Facets({ facets }: Props) {
  return (
    <div className="facets-grid" style={{ marginBottom: "72px" }}>
      {facets.items.map((item) => (
        <div
          key={item.heading}
          style={{
            padding: "20px",
            background: "var(--paper-2)",
            borderRadius: "8px",
            border: "0.5px solid var(--line)",
          }}
        >
          <h4
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.3,
              color: "var(--accent)",
              margin: "0 0 10px 0",
            }}
          >
            {item.heading}
          </h4>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              lineHeight: 1.65,
              color: "var(--muted)",
              margin: 0,
            }}
          >
            {emphasize(item.body, item.emphasis, "accent")}
          </p>
        </div>
      ))}

      <style>{`
        .facets-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 639px) {
          .facets-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
