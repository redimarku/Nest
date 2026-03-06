// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import FoodDashboard from './Admin/Food';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <FoodDashboard />
  // </StrictMode>,
)
