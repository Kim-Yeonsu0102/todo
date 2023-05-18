/* eslint-disable */
import './css/App.css';
import './css/main.css';

import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row , Toast } from 'react-bootstrap';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from './store';
import Header from './components/Header';
import ItemBody from './components/ItemBody'


//오늘의 날짜, 시간 표시 
//1.인풋창, 버튼 -> 아이템 등록 
//2. 삭제버튼 -> 아이템 삭제 

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routes>
        <Route path="/" element={ <ItemBody/>}> </Route>    
      </Routes>
      
    </div>
  );
}

export default App;
