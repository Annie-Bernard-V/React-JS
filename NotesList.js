
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id} // Add key prop for each Note component
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote} // Pass handleDeleteNote as a prop to Note component
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
