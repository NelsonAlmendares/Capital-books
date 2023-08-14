import './App.css';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import AdminHomePage from './admin/AdminHomePage';
import PublicHomePage from './public/PublicHomePage';

function App() {
   return (
      <div className='app'>
         <>
            <BrowserRouter>
               <Routes>
                  {/*< Route for the admin site />*/}
                  <Route path="/admin">
                     <Route index element={ <AdminHomePage/> }/>
                  </Route>

                  {/*< Routes for the public site />*/}
                  <Route path="/public">
                     <Route index element={ <PublicHomePage/> }/>
                     {/*< Inside the path, I'll create the dependencies of every button and actions what the user can be use />*/}

                  </Route>
               </Routes>
            </BrowserRouter>
         </>
      </div>
  );
}

export default App;
