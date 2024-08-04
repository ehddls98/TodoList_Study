import './App.css';
import Header from './components/Header/Header';
import MainLayout from './components/MainLayout/MainLayout';
import SideBar from './components/SideBar/SideBar';
import MainContainer from './components/MainContainer/MainContainer';
import { Global } from '@emotion/react';
import { reset } from './style/Global';
import { SAMPLE_PRODUCTS } from './constants/sampleProducts';


function App() {
  return (
    <>
      <Global styles={reset} />
        <Header/>
      <MainLayout >
          <SideBar />
          <MainContainer />
      </MainLayout>
    </>
  );
}

export default App;
