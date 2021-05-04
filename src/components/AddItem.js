import React, {useContext, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';
import {v4 as uuid} from 'uuid'
import {
    Form, 
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

export const AddItem = () => {
    const [name, setName] = useState('');
    const {addUser,postUser} = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () => {
        const newUser = {
            _id: uuid(),
            name 
        }
        addUser(newUser);
        
        
        history.push('/')
    }

    const onChange = (e) => {
        setName(e.target.value)
    }
    
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value = {name} onChange={onChange} placeholder = " Enter Name"></Input>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Link to="/" className=" btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
