import { Link, Routes, Route } from 'react-router-dom';
import Index from '../index'

export default function Navbar() {
  return (
    <>
    <div>Navbar
        <Link to="/">Home</Link>
    </div>

    <Routes>
        <Route path="/" element={<Index />} />
    </Routes>
    </>
  )
}
