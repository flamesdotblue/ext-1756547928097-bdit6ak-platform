import React from "react";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">Brooklyn-loved • Cage-free daycare • Fear-free grooming</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">Happy days and fresh fades for Brooklyn pups.</h1>
            <p className="mt-4 text-slate-600 text-lg">At Paws & Play, your dog gets play-packed days, gentle groom sessions, and tons of love. Safe, clean, and staffed by certified dog pros.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-600 transition">
                <Calendar size={18} /> Book Online
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-3 font-semibold text-slate-800 shadow hover:bg-white">Explore Services</a>
            </div>
            <div className="mt-6 text-xs text-slate-500">AKC S.A.F.E. Groomer • Insured • Vaccinated playgroups</div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop" alt="Happy golden retriever smiling" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1600&auto=format&fit=crop" alt="Playful corgi with tongue out" className="aspect-square w-full rounded-2xl object-cover shadow-lg mt-6" />
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop" alt="Dog getting a gentle bath" className="col-span-2 aspect-[5/3] w-full rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div id="gallery" className="mx-auto max-w-7xl px-6 pb-10">
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <img src="https://images.unsplash.com/photo-1558944351-c0d0d3bf9d77?q=80&w=1600&auto=format&fit=crop" alt="Happy dog running" className="h-36 w-full rounded-xl object-cover" />
          <img src="https://images.unsplash.com/photo-1601758064136-0c4f5d2d5d1a?q=80&w=1600&auto=format&fit=crop" alt="Puppy with bubbles" className="h-36 w-full rounded-xl object-cover" />
          <img src="https://images.unsplash.com/photo-1558944351-7f26b3d73b1e?q=80&w=1600&auto=format&fit=crop" alt="Group playtime" className="h-36 w-full rounded-xl object-cover" />
          <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop" alt="Freshly groomed pup" className="h-36 w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
