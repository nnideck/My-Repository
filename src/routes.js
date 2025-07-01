import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

export default function AllRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repositorio/:repository" element={<Repositorio />} />
    </Routes>
    </BrowserRouter>
  );
}
