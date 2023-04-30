import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './routers/router';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
