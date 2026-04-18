import type { MetaSection } from "@/types/content";

type Props = { meta: MetaSection };

export default function MetaStrip({ meta }: Props) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "8px",
        marginBottom: "32px",
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
        {meta.siteName}
      </span>

      <span
        className="live-status"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--glow)",
        }}
        aria-label={`Status: ${meta.liveStatus}`}
      >
        <span
          className="breath"
          aria-hidden="true"
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--glow)",
            flexShrink: 0,
          }}
        />
        {meta.liveStatus}
      </span>
    </header>
  );
}
