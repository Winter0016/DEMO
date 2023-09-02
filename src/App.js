import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout.js";
import HOME from "./pages/homepage/homepage.js";
import PATRON from "./pages/patron/patron.js";
import SEE from "./pages/moreblogs/blogs.js";
import Submitted from"./pages/submit/submit.js";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/patrons" element={<PATRON />} />
          <Route path ="/moreblogs" element={<SEE />} />
          <Route path="/sucessfully-submitted" element={<Submitted />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
