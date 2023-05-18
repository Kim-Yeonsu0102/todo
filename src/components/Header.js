/* eslint-disable */
import './../css/App.css';
import './../css/main.css';

import React, { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Toast, Col, Form } from 'react-bootstrap';

// //데이피커
// import { format } from 'date-fns';
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
// import Picker from './pages/Picker'

import Moment from 'react-moment';
import moment from 'moment';
import { addItem } from '../store';
import { useDispatch, useSelector } from 'react-redux';


function Header(props) {

  const [inputValue , setInputValue] = useState()
  const [todoList , setTodoList] = useState([])

  let state = useSelector((state) => state)
  let dispatch = useDispatch()


  const date = new Date();
  const start = moment().add(-4, 'm');



 

  return (
    <Container className="header" >

      <Row className='title'>
        <Col sm={8}>
          <h1>My Todo List</h1>
        </Col>

        <Col sm={4} className='timezone'>
          <Row>
            <Moment local="ko" format="YY/MM/DD" className='month' />
          </Row>
          {/* <Row className='timeArea'>
            <Col>
              <span style={{ fontSize: '12px', letterSpacing: ' .1rem' }}>NOW: </span>
              <Moment local="ko" decimal format="hh:mm:ss" className='now' />
            </Col>
          </Row> */}

          <Row>
            <div style={{ fontSize: '16px', letterSpacing: ' .35rem', color: '#bdbdbd' }}>I.CAN.DO.IT</div>
          </Row>
        </Col>
      </Row>

      <Row className='textInput'>
        <Col sm ={10} xs={10} >          
          <Form.Control size="m" id="tokenfield" type="text" placeholder="오늘의 할 일" onChange={(e)=>{
           setInputValue(e.target.value)
          }}/>
        </Col>
        <Col sm={2}  xs={2} style={{padding: 0}}>
        <Button size="m" variant="outline-info" style={{width:'100%' }} 
        onClick={()=>{
          dispatch( addItem(inputValue) ) 
        }}>+add</Button>
        </Col>
      </Row>


    </Container>
  );
}

export default Header;