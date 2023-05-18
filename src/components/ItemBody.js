import React,{ useState } from 'react';
import { Container, Table, ToggleButton, CloseButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, checkItem , delItem} from './../store';
import { BsCheckAll } from "react-icons/bs";

function ItemBody(props) {
  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  const [checked, setChecked] = useState(false);
  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>Check</th>
            <th>To-do List</th>
            <th>del</th>

          </tr>
        </thead>
        <tbody>

          {
          state.items.map((a, i) =>
            <tr key={i}> 
              <td>
                <ToggleButton
                  className="mb-1"
                  id= "toggle-check"
                  type="checkbox"
                  variant="outline-primary"
                  checked={checked}
                  value= {i}
                  onChange={(e) =>setChecked(e.currentTarget.checked)}
                >
check
                </ToggleButton>
              </td>
              <td>{state.items[i]}</td>
              <td><CloseButton onClick={()=>{ 
                dispatch( delItem(state.items[i]) )
                
                }}/></td>

            </tr>
          )
        }
        </tbody>
      </Table>



    </Container>
  );
}

export default ItemBody;