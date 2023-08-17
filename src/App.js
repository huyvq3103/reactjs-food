import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import {
  HomePage,
  ErrorPage,
  CategoryPage,
  MealDetailsPage,
} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meal/:id" element={<MealDetailsPage />} />
        <Route path="/meal/category/:name" element={<CategoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
