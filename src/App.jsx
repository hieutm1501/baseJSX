import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { routes } from './routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.register} element={<Register />} />
          <Route index path={routes.login} element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
