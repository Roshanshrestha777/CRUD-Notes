import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { TaskForm } from './TaskForm';

const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked,
    },
  });
};

const deleteTask = ({ _id }) => TasksCollection.remove(_id);
const editTask = ({task,notes})=>TasksCollection.update({_id:task._id},{$set:{heading: task.notes,
  notes: notes,
  createdAt: task.createdAt,}})


export const App = () => {
  const tasks = useTracker(() =>
    TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  return (
    <div>
      <h1>Welcome to Notes App</h1>
      
      <TaskForm />
     
      <ul> 
        {tasks.map(task => (
          <Task
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}
            onEditClick={editTask}
          />
          
        ))}
      </ul>
      
    </div>
  );
};
