import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner } from "@repo/ui";

import Home from "./pages/Home";
import SizeConverter from "./pages/SizeConverter";
import Structure from "./pages/Structure";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/size-converter" element={<SizeConverter />} />
        <Route path="/structure" element={<Structure />} />
      </Routes>
    </BrowserRouter>
  );
}
