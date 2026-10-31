import { getCollection, type CollectionEntry } from "astro:content";
import { DOC_SECTIONS } from "../content.config";

export type Doc = CollectionEntry<"docs">;

export async function getDocs(): Promise<Doc[]> {
  const docs = await getCollection("docs");
  return docs.sort(
    (a, b) =>
      DOC_SECTIONS.indexOf(a.data.section) - DOC_SECTIONS.indexOf(b.data.section) ||
      a.data.order - b.data.order,
  );
}

export function docHref(doc: Doc): string {
  return doc.id === "index" ? "/docs/" : `/docs/${doc.id}/`;
}

export function groupDocs(docs: Doc[]) {
  return DOC_SECTIONS.map((section) => ({
    section,
    docs: docs.filter((doc) => doc.data.section === section),
  })).filter((group) => group.docs.length > 0);
}
