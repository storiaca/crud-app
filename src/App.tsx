import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Details from "./page/Details";
import Create from "./page/Create";
import PostsProvider from "./post-context";
const App = () => {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
};

export default App;
