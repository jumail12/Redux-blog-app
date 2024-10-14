import logo from './logo.svg';

import FormB from './comp/FormB';
import BlogList from './comp/BlogList';
import {Routes,Route} from "react-router-dom"
import BlogContent from './comp/BlogContent';
import EditF from './comp/EditF';


function App() {
  return (
    <div className="App">
     
   <Routes>
    <Route path='/' element={<BlogList/>}/>
    <Route path='/newblog' element={<FormB></FormB>} />
    <Route path='c/:id' element={<BlogContent/>}/>
    <Route path='/edit/:eid' element={<EditF></EditF>}></Route>
   </Routes>
    </div>
  );
}

export default App;
