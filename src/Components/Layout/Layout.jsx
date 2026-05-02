import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";

export default function Layout() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("mode", mode);
  }, [mode]);

  function changeMode() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <>
      <div className="min-h-screen transition-colors duration-500 bg-[#FFF8F9] dark:bg-dark-gray text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 md:px-10">
          <Navbar changeMode={changeMode} mode={mode} />
          <div className="py-10">
            <Outlet/>
          </div>
          
        </div>
      </div>
        <Footer/> 
    </>
  );
}
