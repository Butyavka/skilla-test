import React from 'react';
import './styles/root.scss'
import Layout from "./components/Layout";
import CallsPage from "./pages/CallsPage";

function App() {
  return (
    <Layout>
        <CallsPage/>
    </Layout>
  );
}

export default App;
