import Home from "./pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;
