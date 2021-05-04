import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Table, Button} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';
import {Loader} from './Loader';

export const List = () => {
  const {users,loading, removeUser, fetchData} = useContext
  (GlobalContext);
  //console.log('list1', users)
  useEffect( () => {
    fetchData()
  },[])
  return (
    <div>
      {loading 
        ? <Loader />
        : <Table dark className="mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>ID</th>
                <th>btn</th>
              </tr>
              </thead>
              <tbody>
              {users.map((user) => (
                <tr>
                  <th scope="row"></th>
                  <td>{user.name}</td>
                  <td>{user._id}</td>
                  <td><Link to={`/edit/${user._id}`} className="btn btn-warning mr-2">Edit</Link>
                  <Button onClick={() => removeUser(user._id)} color="danger">Del</Button></td>
                </tr>
              ))}
            </tbody>  
          </Table>
      }
    </div>
    )
  
}

