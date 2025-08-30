import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingSection from "./components/BookingSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-emerald-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <BookingSection />
      </main>
      <footer className="mt-20 border-t border-white/60 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Paws & Play — Brooklyn, NY</p>
          <div className="text-sm text-slate-600">
            123 Atlantic Ave, Brooklyn • Open Mon–Sat 7:00a–7:00p
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
