import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NewTaskForm from './pages/NewTaskForm'
import TaskList from './pages/TasksList'

function App() {
  

  return (
    <>
<BrowserRouter>
    <Routes>
      <Route index element={<TaskList />} />
      <Route path='/new' element={<NewTaskForm />} />
      <Route path="/edit/:id" element={<NewTaskForm />} />

    </Routes>
</BrowserRouter>
    
    </>
  )
}

export default App
