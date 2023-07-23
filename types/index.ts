export interface Note {
  title: string;
  content: string;
}

export interface CreateAreaProps {
  onAdd: (note: Note) => void;
}

export type NoteProps = {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
};