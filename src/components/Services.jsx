import React from "react";
import { PawPrint, Scissors, Clock, MapPin, Star } from "lucide-react";

const Feature = ({ icon: Icon, title, children, accent }) => (
  <div className={`rounded-2xl border bg-white/80 p-6 shadow-sm ${accent}`}>
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
        <Icon size={20} />
      </span>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600">{children}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-rose-100 px-3 py-1 text-rose-700 text-xs font-semibold">Our Services</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Daycare that delights. Grooming that shines.</h2>
        <p className="mt-3 text-slate-600">Clean, supervised playrooms and fear-free grooming. Flexible drop-offs, transparent pricing, and the happiest pups in Brooklyn.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-sky-50/70 p-2 md:p-4 border border-sky-100">
          <div className="overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1601758124511-52d6c73c7a39?q=80&w=1600&auto=format&fit=crop" alt="Dogs playing together in daycare" className="h-60 w-full object-cover" />
          </div>
          <div className="p-4 md:p-6">
            <div className="flex items-center gap-2 text-sky-700">
              <PawPrint size={18} />
              <h3 className="text-2xl font-bold text-slate-900">Cage-free Daycare</h3>
            </div>
            <p className="mt-2 text-slate-600">Small, supervised playgroups matched by size and temperament. Tons of toys, water breaks, and nap nooks.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Clock size={16} className="text-sky-700" /> Half-day and full-day options</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-sky-700" /> Puppy socials and senior-friendly pace</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-sky-700" /> Convenient Downtown BK location</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-rose-50/70 p-2 md:p-4 border border-rose-100">
          <div className="overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1600&auto=format&fit=crop" alt="Dog being gently groomed" className="h-60 w-full object-cover" />
          </div>
          <div className="p-4 md:p-6">
            <div className="flex items-center gap-2 text-rose-700">
              <Scissors size={18} />
              <h3 className="text-2xl font-bold text-slate-900">Fear-free Grooming</h3>
            </div>
            <p className="mt-2 text-slate-600">From bath-and-brush to breed-standard cuts. Low-stress handling, warm towels, and plenty of praise.</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Clock size={16} className="text-rose-700" /> Express sessions available</li>
              <li className="flex items-center gap-2"><Star size={16} className="text-rose-700" /> Sensitive-skin shampoos</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-rose-700" /> Easy curbside drop-off</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Feature icon={Clock} title="Flexible Hours" accent="">
          Open Monday–Saturday, 7a–7p. Early drop-off by request.
        </Feature>
        <Feature icon={MapPin} title="Heart of Brooklyn" accent="">
          123 Atlantic Ave, near the 2/3/4/5 and A/C lines.
        </Feature>
        <Feature icon={Star} title="5-Star Care" accent="">
          Trained staff, spotless space, and glowing local reviews.
        </Feature>
      </div>
    </section>
  );
};

export default Services;
