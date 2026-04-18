import React from "react";

export type EmphasisTone = "accent" | "warm" | "glow";

export function emphasize(
  text: string,
  phrases: string[],
  tone: EmphasisTone = "accent"
): React.ReactNode {
  if (!phrases.length) return text;

  const escaped = phrases
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        phrases.includes(part) ? (
          <em key={i} className={tone}>
            {part}
          </em>
        ) : (
          part
        )
      )}
    </>
  );
}
