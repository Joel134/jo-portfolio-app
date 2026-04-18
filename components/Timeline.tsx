import type { TimelineSection } from "@/types/content";
import SectionHead from "./SectionHead";
import TimelineNodeComponent from "./TimelineNode";

type Props = { timeline: TimelineSection };

export default function Timeline({ timeline }: Props) {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      style={{ marginBottom: "72px" }}
    >
      <div id="timeline-heading" style={{ display: "contents" }}>
        <SectionHead
          number={timeline.sectionNumber}
          title={timeline.sectionTitle}
          sub={timeline.sectionSub}
        />
      </div>

      <div
        className="timeline-list"
        style={{ paddingLeft: "0" }}
      >
        {timeline.nodes.map((node, i) => (
          <TimelineNodeComponent key={`${node.year}-${i}`} node={node} />
        ))}
      </div>

      <style>{`
        @media (max-width: 639px) {
          .timeline-list {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
