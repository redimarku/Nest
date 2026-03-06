import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function CreateFood({open, close}) {

    const [values, setValues] = useState({name:"", description: "", price: "", is_active: false});

    const handleSubmit = (event) =>{
        event.preventDefault();

    }

    const handleChange = (event) =>{
        const {name, value, checked} = event.target;
        setValues((prevState) =>{
            return {...prevState,[name]: value}
        })
    }

  return (
    <>
     

     <Modal show={open} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name='name'
                value={values.name}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name='description'
                value={values.description}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name='price'
                value={values.price}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <FormGroup className='mb-3' controlId=''>
                <Form.Label>Is Active</Form.Label>
                     <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Check this switch"
        name='is_active'
        value={values.is_active}
        onChange={handleChange}
        autoFocus
      />
            </FormGroup>
        
        <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateFood;