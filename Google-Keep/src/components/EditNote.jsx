import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../actions/notesActions';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap';

const EditNote = ({ note }) => {
  const [content, setContent] = useState(note.content);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.trim()) {
      await dispatch(updateNote({ id: note.id, content }));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Update Note</Button>
    </Form>
    
  );
};

export default EditNote;
