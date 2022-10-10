import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ex1 from './class1/Ex1';
import Ex2 from './Class4/Ex2';
import Ex3 from './class5/Ex3';
import Ex4 from './class6/Ex4';
import Ex5 from './class6/Ex5';
import { Provider } from './Class7/Context';
import Ref from './Class7/Ref';
import ApiCall from './Class8.jsx/ApiCall';
import ReRender from './Class8.jsx/ReRender';
import Exercises from './Exercises';



function App() {
  return (
   <div className='App'>
     <Routes>
      <Route path='/'>
        <Route index element={<Exercises />}/>
        <Route path='exercise_1' element={<Ex1 />}/>
        <Route path='exercise_2' element={<Ex2 />}/>
        <Route path='exercise_3' element={<Ex3 />}/>
        <Route path='exercise_4' element={<Ex4 />}/>
        <Route path='exercise_5' element={<Ex5 />}/>
        <Route path='exercise_6' element={<Provider />}/>
        <Route path='exercise_7' element={<Ref />}/>
        <Route path='exercise_8' element={<ApiCall />}/>
        <Route path='exercise_9' element={<ReRender />}/>
      </Route>
     </Routes>
   </div>
  );
}

export default App;
