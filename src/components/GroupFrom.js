import './GroupFrom.css';

import React from 'react';

const GroupForm = ({ group, index, onChange, onDelete, groupName }) => {
  return (
    <div className='group-form'>
       <h3 className='group-label'>{groupName}</h3> 
      <input
        type="number"
        value={group.from}
        onChange={(e) => onChange(index, 'from', e.target.value)}
        placeholder="From"
        min="1"
        max="10"
        disabled={true} // Disable editing the "from" field to keep it automatically calculated
      />
      <input
        type="number"
        value={group.to}
        onChange={(e) => onChange(index, 'to', e.target.value)}
        placeholder="To"
        min={group.from} // Ensure "to" is always greater than "from"
        max="10"
      />
      <button 
      onClick={onDelete}
      >Delete</button>
    </div>
  );
};

export default GroupForm;

