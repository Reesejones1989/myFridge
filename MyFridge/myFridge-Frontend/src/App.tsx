import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SavedRecipes from "./pages/SavedRecipes";
import DiscoverRecipes from "./pages/DiscoverRecipes";
import AddRecipes from "./pages/AddRecipes";
import Settings from "./pages/Setting";

function App() {
  return (
    <>
      <Nav />

      <main className="app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<SavedRecipes />} />
          <Route path="/discover" element={<DiscoverRecipes />} />
          <Route path="/add" element={<AddRecipes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </>
  );
}

export default App;