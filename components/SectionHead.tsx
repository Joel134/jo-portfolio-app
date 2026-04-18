type Props = {
  number: string;
  title: string;
  sub: string;
};

export default function SectionHead({ number, title, sub }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "12px",
        marginBottom: "32px",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "1.5px",
          color: "var(--dim)",
          textTransform: "uppercase",
          flexShrink: 0,
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "14px",
          fontStyle: "italic",
          color: "var(--accent)",
          letterSpacing: "0.3px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </span>
      <span
        style={{
          marginLeft: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "1.5px",
          color: "var(--dim)",
          textTransform: "uppercase",
        }}
      >
        {sub}
      </span>
    </div>
  );
}
