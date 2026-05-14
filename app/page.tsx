"use client";
import { useState, useEffect, useRef } from "react";

const LOGO = "data:image/png;base64,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";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [count, setCount] = useState(847);
  const [vis, setVis] = useState<Record<string, boolean>>({});
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  // Analytics: track page views (you'd wire this to your analytics service)
  useEffect(() => {
    console.log("[Analytics] Page view tracked");
    // In production: posthog.capture('waitlist_page_view') or similar
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { const el = e.target as HTMLElement; setVis((v) => ({ ...v, [el.dataset.i || ""]: true })); } }),
      { threshold: 0.12 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setCount((c) => c + 1);
    // Analytics: track conversion
    console.log("[Analytics] Waitlist signup:", { name, email, position: count + 1 });
    // In production: posthog.capture('waitlist_signup', { email, name, position })
    // And POST to your email service (LaunchList, Tally, etc.)
  };

  const rv = (i: number) => ({
    ref: (el: HTMLDivElement | null) => { refs.current[i] = el; if (el) el.dataset.i = String(i); },
    style: { opacity: vis[i] ? 1 : 0, transform: vis[i] ? "translateY(0)" : "translateY(36px)", transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)" },
  });

  const H = "'Outfit', sans-serif";
  const B = "'DM Sans', sans-serif";

  return (
    <div style={{ minHeight: "100vh", background: "#06090F", color: "#E2E8F0", fontFamily: B, overflowX: "hidden" }}>
      <style>{`
        
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::selection{background:rgba(37,99,235,0.3);color:#fff}
        @keyframes gridPulse{0%,100%{opacity:0.03}50%{opacity:0.06}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes orbGlow{0%,100%{box-shadow:0 0 60px rgba(37,99,235,0.15),0 0 120px rgba(37,99,235,0.05)}50%{box-shadow:0 0 80px rgba(37,99,235,0.25),0 0 160px rgba(37,99,235,0.1)}}
        @keyframes beamSweep{0%{transform:translateX(-100%) rotate(-45deg)}100%{transform:translateX(200%) rotate(-45deg)}}
        @keyframes nodeFloat1{0%,100%{transform:translate(0,0)}50%{transform:translate(8px,-12px)}}
        @keyframes nodeFloat2{0%,100%{transform:translate(0,0)}50%{transform:translate(-10px,8px)}}
        @keyframes nodeFloat3{0%,100%{transform:translate(0,0)}50%{transform:translate(6px,10px)}}
        @keyframes lineTrace{0%{stroke-dashoffset:200}100%{stroke-dashoffset:0}}
        @keyframes pulseRing{0%{transform:scale(0.8);opacity:0.5}100%{transform:scale(2.2);opacity:0}}
        @keyframes countIn{from{transform:scale(1.3);opacity:0}to{transform:scale(1);opacity:1}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .cta{
          background:linear-gradient(135deg,#2563EB,#1D4ED8);color:white;border:none;
          padding:16px 32px;border-radius:12px;font-family:'Outfit';font-size:15px;font-weight:700;
          cursor:pointer;transition:all 0.3s;position:relative;overflow:hidden;
          box-shadow:0 4px 24px rgba(37,99,235,0.4);letter-spacing:0.02em;
        }
        .cta:hover{transform:translateY(-2px);box-shadow:0 8px 36px rgba(37,99,235,0.5)}
        .cta::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);animation:shimmer 3s infinite}
        .card{transition:all 0.3s;border:1px solid rgba(255,255,255,0.06)}
        .card:hover{border-color:rgba(37,99,235,0.3);transform:translateY(-3px)}
        input:focus{outline:none;border-color:#2563EB!important;box-shadow:0 0 0 3px rgba(37,99,235,0.15)}
        @media(max-width:640px){.hero-grid{grid-template-columns:1fr!important}.steps-grid{grid-template-columns:1fr!important}.features-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* ── AI Neural Network Background ── */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px", animation: "gridPulse 8s ease infinite" }} />
        {/* Neural network nodes and connections */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.08 }}>
          <line x1="15%" y1="20%" x2="40%" y2="35%" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4,8" style={{ animation: "lineTrace 6s linear infinite" }} />
          <line x1="40%" y1="35%" x2="70%" y2="25%" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4,8" style={{ animation: "lineTrace 8s linear infinite" }} />
          <line x1="70%" y1="25%" x2="85%" y2="50%" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4,8" style={{ animation: "lineTrace 7s linear infinite" }} />
          <line x1="25%" y1="65%" x2="55%" y2="75%" stroke="#6366F1" strokeWidth="0.5" strokeDasharray="4,8" style={{ animation: "lineTrace 9s linear infinite" }} />
          <line x1="55%" y1="75%" x2="80%" y2="60%" stroke="#6366F1" strokeWidth="0.5" strokeDasharray="4,8" style={{ animation: "lineTrace 7s linear infinite" }} />
          <circle cx="15%" cy="20%" r="3" fill="#3B82F6" style={{ animation: "nodeFloat1 7s ease infinite" }} />
          <circle cx="40%" cy="35%" r="4" fill="#3B82F6" style={{ animation: "nodeFloat2 8s ease infinite" }} />
          <circle cx="70%" cy="25%" r="3" fill="#3B82F6" style={{ animation: "nodeFloat3 6s ease infinite" }} />
          <circle cx="85%" cy="50%" r="3" fill="#6366F1" style={{ animation: "nodeFloat1 9s ease infinite" }} />
          <circle cx="25%" cy="65%" r="3" fill="#6366F1" style={{ animation: "nodeFloat2 7s ease infinite" }} />
          <circle cx="55%" cy="75%" r="4" fill="#6366F1" style={{ animation: "nodeFloat3 8s ease infinite" }} />
        </svg>
        {/* Radial glows */}
        <div style={{ position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.06), transparent 65%)", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.04), transparent 65%)", filter: "blur(30px)" }} />
      </div>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(6,9,15,0.8)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "12px 0" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={LOGO} alt="Persuade" width={32} height={32} style={{ objectFit: "contain" }} />
            <span style={{ fontFamily: H, fontWeight: 800, fontSize: 18, color: "#F1F5F9", letterSpacing: "0.08em" }}>PERSUADE</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Social links */}
            <a href="https://x.com/toluhenok" target="_blank" rel="noopener noreferrer" style={{ color: "#64748B", transition: "color 0.2s" }} title="Follow on X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com/in/toluhenok" target="_blank" rel="noopener noreferrer" style={{ color: "#64748B", transition: "color 0.2s" }} title="Connect on LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#join" style={{ textDecoration: "none" }}>
              <button className="cta" style={{ padding: "9px 22px", fontSize: 13 }}>Join Waitlist</button>
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "130px 24px 80px" }}>
        <div style={{ maxWidth: 760, textAlign: "center", position: "relative", zIndex: 1 }}>
          {/* Logo orb */}
          <div style={{ display: "inline-block", marginBottom: 32, animation: "float 6s ease-in-out infinite" }}>
            <div style={{ width: 96, height: 96, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, rgba(37,99,235,0.15), rgba(37,99,235,0.03))", display: "flex", alignItems: "center", justifyContent: "center", animation: "orbGlow 4s ease infinite", position: "relative" }}>
              <img src={LOGO} alt="" width={64} height={64} style={{ objectFit: "contain" }} />
              {/* Pulse rings */}
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid rgba(37,99,235,0.2)", animation: "pulseRing 3s ease infinite" }} />
              <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "1px solid rgba(37,99,235,0.15)", animation: "pulseRing 3s ease 1.5s infinite" }} />
            </div>
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 100, background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.15)", marginBottom: 28 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
            <span style={{ fontFamily: B, fontSize: 12, fontWeight: 600, color: "#60A5FA", letterSpacing: "0.03em" }}>AI-Powered — Launching Soon</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: H, fontSize: "clamp(36px, 5.5vw, 60px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 22 }}>
            <span style={{ color: "#F1F5F9" }}>Your AI interview coach that</span><br />
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #818CF8, #3B82F6)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 4s linear infinite" }}>
              actually makes you better
            </span>
          </h1>

          {/* Sub-headline */}
          <p style={{ fontFamily: B, fontSize: "clamp(16px, 2vw, 19px)", color: "#94A3B8", lineHeight: 1.65, maxWidth: 560, margin: "0 auto 40px" }}>
            Practice interviews with an AI that scores every answer, explains what went wrong, and coaches you to nail it next time. Any role. Voice-first.
          </p>

          {/* Signup Form */}
          <div id="join" style={{ maxWidth: 500, margin: "0 auto" }}>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10, flexWrap: "wrap", justifyContent: "center" }}>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                    style={{ flex: "1 1 140px", padding: "15px 18px", borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", fontFamily: B, fontSize: 14, color: "#E2E8F0", transition: "all 0.2s" }} />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                    style={{ flex: "1 1 200px", padding: "15px 18px", borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", fontFamily: B, fontSize: 14, color: "#E2E8F0", transition: "all 0.2s" }} />
                </div>
                <button className="cta" type="submit" style={{ width: "100%", padding: "16px", fontSize: 15 }}>
                  Get Early Access — It's Free
                </button>
              </form>
            ) : (
              <div style={{ padding: 28, borderRadius: 16, background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", animation: "countIn 0.5s ease" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" opacity="0.2"/><polyline points="20 6 9 17 4 12"/></svg>
                <p style={{ fontFamily: H, fontSize: 20, fontWeight: 700, color: "#F1F5F9", margin: "12px 0 6px" }}>You're in{name ? `, ${name.split(" ")[0]}` : ""}!</p>
                <p style={{ fontFamily: B, fontSize: 14, color: "#94A3B8" }}>You're #{count} on the waitlist. We'll email you the moment we launch.</p>
                {/* Share prompt */}
                <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: "center" }}>
                  <a href={`https://x.com/intent/tweet?text=I just joined the waitlist for @toluhenok's AI Interview Coach — Persuade. Practice interviews with AI that actually coaches you.%0A%0AJoin the waitlist 👇`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8", textDecoration: "none", fontFamily: B, fontSize: 12, fontWeight: 600 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Share on X
                  </a>
                  <a href="https://linkedin.com/in/toluhenok" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#94A3B8", textDecoration: "none", fontFamily: B, fontSize: 12, fontWeight: 600 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Counter + social proof */}
          <div style={{ marginTop: 22, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ display: "flex" }}>
              {["T", "S", "A", "M"].map((l, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid #0D1117", background: ["#2563EB", "#6366F1", "#10B981", "#F59E0B"][i], marginLeft: i > 0 ? -9 : 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: B, fontSize: 10, fontWeight: 700, color: "white" }}>{l}</div>
              ))}
            </div>
            <span style={{ fontFamily: B, fontSize: 13, color: "#64748B" }}><strong style={{ color: "#CBD5E1" }}>{count}+</strong> on the waitlist</span>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET (5 bullets) ── */}
      <section style={{ padding: "80px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div {...rv(0)} style={{ textAlign: "center", marginBottom: 56, ...rv(0).style }}>
            <p style={{ fontFamily: B, fontSize: 12, fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>What you get</p>
            <h2 style={{ fontFamily: H, fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#F1F5F9", lineHeight: 1.15 }}>
              Not another quiz app.<br /><span style={{ color: "#64748B" }}>A real coaching experience.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gap: 14, maxWidth: 640, margin: "0 auto" }}>
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>, text: "Practice for any role in any industry — from software engineer to nurse to corporate lawyer" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, text: "Voice-first interviews that feel like the real thing — speak naturally, not type" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>, text: "Every answer scored on clarity, confidence, persuasion, and structure — not just pass/fail" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>, text: "Deep coaching on every weak answer — what went wrong, why, and how to fix it" },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, text: "Track your progress across sessions and watch your scores improve over time" },
            ].map((item, i) => (
              <div key={i} {...rv(1 + i)} className="card" style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "18px 22px", borderRadius: 14, background: "rgba(255,255,255,0.02)", ...rv(1 + i).style }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(37,99,235,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                <p style={{ fontFamily: B, fontSize: 15, color: "#CBD5E1", lineHeight: 1.55, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 24px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div {...rv(6)} style={{ textAlign: "center", marginBottom: 56, ...rv(6).style }}>
            <p style={{ fontFamily: B, fontSize: 12, fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>How it works</p>
            <h2 style={{ fontFamily: H, fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "#F1F5F9" }}>Three steps. Real results.</h2>
          </div>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { n: "01", title: "Pick your role", desc: "Type any role — AI generates questions tailored to that exact position and difficulty level.", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
              { n: "02", title: "Interview by voice", desc: "Speak your answers naturally. The AI interviewer listens, responds, and adapts in real time.", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"><rect x="9" y="1" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0014 0"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
              { n: "03", title: "Get coached", desc: "See scores, coaching analysis, and AI-rewritten improved answers for every single question.", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
            ].map((s, i) => (
              <div key={i} {...rv(7 + i)} className="card" style={{ padding: 28, borderRadius: 18, background: "rgba(255,255,255,0.02)", textAlign: "center", ...rv(7 + i).style }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>{s.icon}</div>
                <div style={{ fontFamily: H, fontSize: 13, fontWeight: 700, color: "#3B82F6", letterSpacing: "0.05em", marginBottom: 8 }}>{s.n}</div>
                <h3 style={{ fontFamily: H, fontSize: 19, fontWeight: 700, color: "#F1F5F9", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: B, fontSize: 14, color: "#94A3B8", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section style={{ padding: "80px 24px", position: "relative", zIndex: 1 }}>
        <div {...rv(10)} style={{ maxWidth: 640, margin: "0 auto", ...rv(10).style }}>
          <div style={{ padding: 36, borderRadius: 22, background: "rgba(37,99,235,0.04)", border: "1px solid rgba(37,99,235,0.08)", textAlign: "center" }}>
            <p style={{ fontFamily: H, fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 600, color: "#CBD5E1", lineHeight: 1.55, fontStyle: "italic", marginBottom: 24 }}>
              "In 2020, right after COVID hit, I was job hunting with no way to practice interviews. I wished something like this existed. Five years later, I'm building it."
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: H, fontWeight: 700, fontSize: 16 }}>T</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: B, fontSize: 14, fontWeight: 600, color: "#E2E8F0" }}>Tolu — Founder</div>
                <a href="https://x.com/toluhenok" target="_blank" rel="noopener noreferrer" style={{ fontFamily: B, fontSize: 12, color: "#3B82F6", textDecoration: "none" }}>@toluhenok</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "60px 24px 100px", position: "relative", zIndex: 1 }}>
        <div {...rv(11)} style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", padding: "56px 32px", borderRadius: 24, background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.04))", border: "1px solid rgba(37,99,235,0.12)", position: "relative", overflow: "hidden", ...rv(11).style }}>
          {/* Beam sweep effect */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.04), transparent)", animation: "beamSweep 6s ease infinite" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <img src={LOGO} alt="" width={48} height={48} style={{ objectFit: "contain", marginBottom: 20 }} />
            <h2 style={{ fontFamily: H, fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 800, color: "#F1F5F9", lineHeight: 1.2, marginBottom: 12 }}>
              Stop winging it. Start practicing.
            </h2>
            <p style={{ fontFamily: B, fontSize: 15, color: "#94A3B8", marginBottom: 28, maxWidth: 400, margin: "0 auto 28px" }}>
              Early access members get their first month of Pro free. Join {count}+ others already on the list.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ maxWidth: 420, margin: "0 auto" }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                    style={{ flex: "1 1 120px", padding: "14px 16px", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", fontFamily: B, fontSize: 14, color: "#E2E8F0" }} />
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                    style={{ flex: "1 1 180px", padding: "14px 16px", borderRadius: 10, border: "1.5px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", fontFamily: B, fontSize: 14, color: "#E2E8F0" }} />
                </div>
                <button className="cta" type="submit" style={{ width: "100%", padding: 15 }}>Get Early Access — Free</button>
              </form>
            ) : (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span style={{ fontFamily: B, fontSize: 15, color: "#10B981", fontWeight: 600 }}>You're on the list!</span>
              </div>
            )}
            <p style={{ fontFamily: B, fontSize: 11, color: "#475569", marginTop: 12 }}>No spam ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "28px 24px", borderTop: "1px solid rgba(255,255,255,0.04)", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={LOGO} alt="" width={22} height={22} style={{ objectFit: "contain" }} />
            <span style={{ fontFamily: H, fontWeight: 700, fontSize: 13, color: "#94A3B8", letterSpacing: "0.06em" }}>PERSUADE</span>
          </div>
          <span style={{ color: "#334155" }}>·</span>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://x.com/toluhenok" target="_blank" rel="noopener noreferrer" style={{ color: "#64748B" }} title="X">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://linkedin.com/in/toluhenok" target="_blank" rel="noopener noreferrer" style={{ color: "#64748B" }} title="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <p style={{ fontFamily: B, fontSize: 12, color: "#475569" }}>
          Built by <a href="https://x.com/toluhenok" target="_blank" rel="noopener noreferrer" style={{ color: "#3B82F6", textDecoration: "none", fontWeight: 600 }}>Enoch</a> · © 2026 Persuade
        </p>
      </footer>
    </div>
  );
}
