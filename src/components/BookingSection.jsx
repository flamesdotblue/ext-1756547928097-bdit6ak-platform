import React, { useState } from "react";
import { Calendar, Phone, PawPrint } from "lucide-react";

const BookingSection = () => {
  const [petName, setPetName] = useState("");
  const [service, setService] = useState("Daycare");
  const [date, setDate] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Booking Request: ${service} for ${petName || "My Dog"}`);
    const body = encodeURIComponent(
      `Hello Paws & Play,%0D%0A%0D%0AI'd like to book ${service} for ${petName || "my dog"}.%0D%0APreferred date: ${date || "flexible"}.%0D%0AOwner: ${ownerName || ""}.%0D%0AEmail: ${email || ""}.%0D%0A%0D%0AThanks!`
    );
    return `mailto:pawsandplaybk@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-3xl border border-emerald-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-700">
            <Calendar size={20} />
            <h3 className="text-2xl font-extrabold text-slate-900">Book Online</h3>
          </div>
          <p className="mt-2 text-slate-600">Send a quick booking request. We’ll confirm by email within business hours.</p>
          <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Owner Name</label>
              <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} placeholder="Your name" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Pet Name</label>
              <input value={petName} onChange={(e) => setPetName(e.target.value)} placeholder="Doggo" className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Service</label>
              <select value={service} onChange={(e) => setService(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400">
                <option>Daycare</option>
                <option>Grooming</option>
                <option>Bath & Brush</option>
                <option>Nail Trim</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-slate-700">Preferred Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-emerald-400" />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a href={mailtoHref()} className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-600 transition">
                <Calendar size={18} /> Submit Request
              </a>
              <a href="tel:+17185551234" className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-3 text-sky-700 hover:bg-sky-200">
                <Phone size={18} /> Call us instead
              </a>
            </div>
            <p className="text-xs text-slate-500">By submitting, you agree to our vaccination and temperament policies. We will confirm availability and pricing by email.</p>
          </form>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-rose-200 bg-rose-50">
          <div className="absolute inset-0 opacity-30" style={{background:"radial-gradient(1200px 400px at 0% 0%, rgba(255,255,255,0.7), transparent), radial-gradient(800px 300px at 100% 100%, rgba(255,255,255,0.7), transparent)"}} />
          <div className="relative p-6 md:p-8">
            <div className="flex items-center gap-2 text-rose-700">
              <PawPrint size={20} />
              <h3 className="text-2xl font-extrabold text-slate-900">Why Paws & Play?</h3>
            </div>
            <ul className="mt-4 grid gap-3 text-slate-700">
              <li className="rounded-xl bg-white/70 p-3">Small playgroups matched by size and vibe</li>
              <li className="rounded-xl bg-white/70 p-3">Fear-free certified groomers and low-stress care</li>
              <li className="rounded-xl bg-white/70 p-3">Photo updates and report cards</li>
              <li className="rounded-xl bg-white/70 p-3">Spotless, sunlit space in Downtown BK</li>
            </ul>
            <div id="map" className="mt-6 overflow-hidden rounded-2xl border border-white">
              <img src="https://images.unsplash.com/photo-1520975940200-b8e3e6a46d38?q=80&w=1600&auto=format&fit=crop" alt="Cozy, clean dog space" className="h-56 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
