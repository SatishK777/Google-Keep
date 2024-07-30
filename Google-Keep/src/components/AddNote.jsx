import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../Services/Action/notesActions';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [label, setLabel] = useState('');
  const [color, setColor] = useState('#ffffff');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNote({
      title,
      content,
      label,
      createdAt: new Date()
    }));
    setTitle('');
    setContent('');
    setLabel('');
    navigate('/');
  };

  return (
    <>
<Container className='bg-dark p-5 mt-4'>
      <Form onSubmit={handleSubmit} className='form m-auto my-5 border border-3 p-5 rounded-4'>
        <Form.Group className="mb-3">
          <Form.Label className='text-white'>Title</Form.Label>
          <Form.Control 
            type="text" 
            value={title} 
            placeholder="Enter Your Title" 
            onChange={e => setTitle(e.target.value)} 
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label className='text-white'>Label</Form.Label>
          <Form.Control 
            as="select" 
            value={label} 
            onChange={e => setLabel(e.target.value)}
          >
            <option value="">Select Label</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
            <option value="Travel">Travel</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label className='text-white'>Content</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={content} 
            placeholder="Type Content Here" 
            onChange={e => setContent(e.target.value)} 
          />
        </Form.Group>
        
        <Button type="submit">Add Note</Button>
      </Form>

</Container>
    </>
  );
};

export default AddNote;
