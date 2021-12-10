import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Index from './pages/Index';
import CreacionEmpresas from './pages/empresas/Index';
import './styles/styles.css';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000/graphql',
// });

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache
})

function App() {
  return (
    <ApolloProvider client={client}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Index />} />
          <Route path='/empresas' element={<CreacionEmpresas />} />

        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
