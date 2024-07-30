import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from '../Services/Action/notesActions';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare , faTrash } from '@fortawesome/free-solid-svg-icons'

const Note = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [label, setLabel] = useState(note.label);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateNote({
      ...note,
      title,
      content,
      label,
    }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const getBackgroundColor = (label) => {
    switch (label) {
      case 'Work':
        return 'yellow';
      case 'Personal':
        return 'aqua';
      case 'Study':
        return 'lightgrey';
      case 'Travel':
        return 'bisque';
      default:
        return 'white';
    }
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(label), padding: '10px', margin: '10px', borderRadius: '5px', color:'black'}}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border border-3 rounded mb-2'
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='border border-3 rounded mb-2'
          />
          <select value={label} onChange={(e) => setLabel(e.target.value)} className='border border rounded p-1'>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Travel">Travel</option>
          </select>
          <Button onClick={handleSave} className='bg-success mt-2'>Save</Button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
          {/* <p><strong>Label:</strong> {label}</p> */}
          <Button onClick={handleUpdate} className='bg-success'><i><FontAwesomeIcon icon={faPenToSquare} /></i></Button>
          <Button onClick={handleDelete} className='bg-danger ms-2'><i><FontAwesomeIcon icon={faTrash} /></i></Button>
        </div>
      )}
    </div>
  );
};

export default Note;
