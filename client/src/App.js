import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Companents/Navbar/Navbar';
import { ROUTES } from './routers/routes'


const routes = createBrowserRouter(ROUTES);


function App() {
  return (
    <>
      <RouterProvider router={routes} />

    </>
  )
}
export default App;
