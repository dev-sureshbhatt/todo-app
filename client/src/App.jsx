import {Routes, Route, BrowserRouter} from 'react-router-dom'
import NewTaskForm from './pages/NewTaskForm'

function App() {
  

  return (
    <>
<BrowserRouter>
    <Routes>
      <Route index element={<NewTaskForm />} />

    </Routes>
</BrowserRouter>
    
    </>
  )
}

export default App
