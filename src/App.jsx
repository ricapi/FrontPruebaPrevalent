import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Index from './pages/Index';
import CreacionEmpresas from './pages/empresas/Index';
import Formulario from './pages/empresas/formulario';
import './styles/styles.css';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000/graphql',
// });

const client = new ApolloClient({
  //uri: 'https://prueba-prevalent-ware.vercel.app/graphql',
  //uri: 'https://servprev.herokuapp.com/graphql',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Index />} />
          <Route path='/empresas' element={<CreacionEmpresas />} />
          <Route path='/empresas/formulario' element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
