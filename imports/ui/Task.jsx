import React, { useEffect, useState} from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';


export const Task = ({ task, onEditClick, onDeleteClick }) => {
  const[editval,setEditval]= useState(task.notes)

  const handleEditSubmit = () => {
    TasksCollection.update({_id:task._id},{$set:{heading: task.heading,
      notes: editval,
      createdAt: task.createdAt,}})

  };
  return (
    <div>
    <li>
      
      <div>
      
     <h3>{task.heading}</h3>
      </div>
      <div>

      <textarea id = "notearea"
      name="notes"
      type="text"
      placeholder="Notes Content Here"
      value={editval}
      onChange={(e)=>setEditval(e.target.value)}
      
    />
    
    <button id="edit"onClick={handleEditSubmit}>Edit</button><button id = "delete"onClick={ () => onDeleteClick(task) }>&times;</button></div>
      
    </li>
    </div>
  );
};
