import type { FooterSection } from "@/types/content";

type Props = { footer: FooterSection };

export default function Footer({ footer }: Props) {
  return (
    <footer
      style={{
        paddingTop: "32px",
        borderTop: "0.5px solid var(--line)",
        marginTop: "72px",
      }}
    >
      <div className="footer-inner">
        <div className="footer-sig">
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "16px",
              fontWeight: 400,
              color: "var(--text)",
              margin: "0 0 4px 0",
            }}
          >
            {footer.name}
          </p>
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
            {footer.tagline}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              color: "var(--muted)",
              margin: "0 0 4px 0",
            }}
          >
            {footer.role}
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              fontStyle: "italic",
              color: "var(--dim)",
              margin: 0,
            }}
          >
            {footer.status}
          </p>
        </div>

        <nav className="footer-links" aria-label="Contact links">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="footer-link"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "1.5px",
          color: "var(--dim)",
          marginTop: "32px",
          paddingTop: "16px",
          borderTop: "0.5px solid var(--line)",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Joel John
      </p>

      <style>{`
        .footer-link {
          display: block;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 1.5px;
          color: var(--muted);
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: var(--text);
        }
        .footer-inner {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }
        @media (max-width: 639px) {
          .footer-inner {
            flex-direction: column;
          }
          .footer-links {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
