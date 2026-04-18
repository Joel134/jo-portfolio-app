import type { Content } from "@/types/content";
import rawContent from "@/content.json";

export function getContent(): Content {
  return rawContent as Content;
}
