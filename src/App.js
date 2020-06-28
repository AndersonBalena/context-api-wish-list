import React from 'react';
import { WishListProvider } from './context/WishListProvider';
import { Header } from './components/Header';
import { ContainerList } from './components/List'

function App() {
  return (
    <WishListProvider>
      <Header />
      <ContainerList />
    </WishListProvider>
  );
}

export default App;
