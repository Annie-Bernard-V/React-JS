
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Note = ({ id, text, date, handleDeleteNote }) => {
  const handleDeleteClick = () => {
    handleDeleteNote(id); // Call handleDeleteNote with the id of the note
  };

  return (
    <div className='note'>
      <p>{text}</p>
      <div className="note-footer d-grid gap-2 d-md-block">
        <p>{date}</p>
        <button className="btn btn-primary p-2 m-2" type="button">Save</button>
        <button className="btn btn-primary p-2 m-2" type="button">Edit</button>
        <button className="btn btn-primary p-2 m-2" type="button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
