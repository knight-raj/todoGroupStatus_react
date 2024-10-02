import React, { useState } from 'react';
import GroupForm from './components/GroupFrom';
import TodoStatus from './components/TodoStatus';
import { fetchTodoStatus } from './service/todoApi';
import { validateGroups } from './utils/validateGroups';
import './App.css';




const App = () => {
 
  const [groups, setGroups] = useState([{ from: 1, to: 2 }]);
  const [statuses, setStatuses] = useState({});

  
  const addGroup = () => {
    const lastGroup = groups[groups.length - 1];
    const newFrom = lastGroup.to + 1;
    if (newFrom > 10) {
      alert("You can't add more groups beyond the range of 1-10");
      return;
    }

    const newTo = Math.min(newFrom + 1, 10); 
    setGroups([...groups, { from: newFrom, to: newTo }]);
  };

  const deleteGroup = (index) => {
    if (groups.length === 1) {
      return; 
    }
    const newGroups = [...groups];
    newGroups.splice(index, 1);
    setGroups(newGroups);
  };

  const handleGroupChange = (index, field, value) => {
    const newGroups = [...groups];
    newGroups[index][field] = parseInt(value, 10);
    setGroups(newGroups);
  };

  const showStatus = async () => {
    if (validateGroups(groups)) {
      const status = await fetchTodoStatus(groups);
      setStatuses(status);
    } else {
      alert('Invalid group configuration!');
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">Todo Status App</h1>
      {groups.map((group, index) => (
        <GroupForm
          key={index}
          group={group}
          index={index}
          onChange={handleGroupChange}
          onDelete={() => deleteGroup(index)}
        />
      ))}
      <button className="add-group-button" onClick={addGroup}>Add Group</button>
      <button className="show-status-button" onClick={showStatus}>Show Status</button>
      {Object.keys(statuses).map((group, index) => (
        <TodoStatus key={index} group={group} status={statuses[group]} />
      ))}
    </div>
  );
};

export default App;