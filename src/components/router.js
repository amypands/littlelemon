import { Routes, Route } from "react-router-dom";
import { Homepage, About, Book, Confirmation } from '../pages';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/about" element={<About />} />

            <Route path="/book" element={<Book />} />

            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
}