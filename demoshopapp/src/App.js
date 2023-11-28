import React from 'react';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import Example from './components/Example';
import NewExample from './components/NewExample';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Ariel',
      amount: 150,
      date: new Date(2021, 5, 5),
    },
  ];

  function mainParent(data) {
    console.log('inside main parent')
    console.log(data)
  }

  return (
    <div>
      {/* <NewProduct onMain={mainParent} />
      <Products items={products} /> */}
      <Example />
      <NewExample />
    </div>
  );
}

export default App;