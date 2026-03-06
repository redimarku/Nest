import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateFood from './CreateModal';

const FoodDashboard = () =>{

    const [openEdit, setOpenEdit] = useState(false);
    const [openCreate, setCreate] = useState(false);
    const handleCreate = () => {
      setCreate(!openCreate);
    }
    const handleCreateOpen = () => {}
    const handleEditOpen = () =>{}


    return (
        <>
        <h4>Create new element</h4>
        <Button onClick={handleCreate}>Create</Button>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Edit</th>
          <th>Delete</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@132</td>
          <td>Image</td>
          <td><Button variant='primary' onClick={handleEditOpen}>Edit</Button></td>
          <td><Button variant='danger' >Delete</Button></td>

        </tr>
     
      </tbody>
    </Table>

    <CreateFood open={openCreate}  close={handleCreate}/>
    </>
    )
}

export default FoodDashboard;