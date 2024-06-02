import Header from "./components/header";
import Footer from './components/footer';
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarefas" element={<ListarTarefa />} />
      </Routes>
    <Footer />
    </Router>
    </ThemeProvider>
    
    
  );
}

export default App;
