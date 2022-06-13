import React, { useState } from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';

export const TaskForm = () => {
  const [text, setText] = useState('');

  const [notes, setNotes] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      heading: text.trim(),
      notes: notes.trim(),
      createdAt: new Date(),
    });

    setText('');
    setNotes('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
    <div>  
    <input
        id = "noteshead"
        type="text"
        placeholder="Heading of Notes"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>

      <textarea
        id= "textnote"
        type="text"
        placeholder="Notes Content Here"
        value={notes}
        onChange={e => setNotes(e.target.value)}
      />

      <button id= "addnote"type="submit">Add Note</button>
    </form>
  );
};
