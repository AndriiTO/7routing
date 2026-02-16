import { fetchNotes } from "@/lib/api";

type Props = {
  params: { tag?: string[] };
};

export default async function FilteredNotesPage({ params }: Props) {
  const tagParam = params.tag?.[0];
  const tag = tagParam === "all" ? undefined : tagParam;

  const data = await fetchNotes({ page: 1, perPage: 10, tag });
  const notes = data.notes;

  return (
    <div>
      <h2>{tag ?? "All notes"}</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}