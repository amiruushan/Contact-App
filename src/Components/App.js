// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header';
import ContactLinst from './ContactList';
import ContactCard from './ContactCard';
import AddContent from './AddContact';

function App() {
  return (
    <div className="App">
      <Header />
      <AddContent />
    </div>
  );
}

export default App;
