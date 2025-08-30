import React from "react";
import { PawPrint, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-200 text-rose-700">
            <PawPrint size={20} />
          </span>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-slate-800 text-lg">Paws & Play</div>
            <div className="text-xs text-slate-500">Daycare • Grooming • Brooklyn</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
          <a href="#gallery" className="text-slate-700 hover:text-slate-900">Gallery</a>
          <a href="#booking" className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-600 transition">Book Online</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+17185551234" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-2 text-sky-700 hover:bg-sky-200 transition">
            <Phone size={16} /> <span className="text-sm font-medium">(718) 555-1234</span>
          </a>
          <a href="#map" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-rose-700 hover:bg-rose-200">
            <MapPin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
