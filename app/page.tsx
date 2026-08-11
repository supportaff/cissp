'use client';

import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  ExternalLink,
  GraduationCap,
  Linkedin,
  LockKeyhole,
  Menu,
  Network,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from 'lucide-react';

const domains = [
  ['01', 'Security & Risk Management', 'Governance, risk management, compliance, legal considerations, business continuity, and security awareness.', 'Risk • Governance • Compliance • BCP'],
  ['02', 'Asset Security', 'Data classification, ownership, lifecycle, retention, and protection.', 'Classification • Ownership • Retention • Protection'],
  ['03', 'Security Architecture & Engineering', 'Secure design, security models, cryptography, physical security, and architecture.', 'Architecture • Crypto • Models • Physical security'],
  ['04', 'Communications & Network Security', 'Network architecture, segmentation, secure protocols, wireless security, and communication security.', 'Segmentation • Protocols • Wireless • Architecture'],
  ['05', 'Identity & Access Management', 'Authentication, authorization, access control, identity lifecycle, federation, and privileged access.', 'IAM • AuthN/AuthZ • Federation • PAM'],
  ['06', 'Security Assessment & Testing', 'Auditing, assessments, vulnerability management, penetration testing, and security metrics.', 'Audit • Assessment • Vuln mgmt • Metrics'],
  ['07', 'Security Operations', 'Incident management, disaster recovery, business continuity, logging, monitoring, investigations, and change management.', 'IR • DR/BC • Monitoring • Change'],
  ['08', 'Software Development Security', 'Secure SDLC, application security, secure coding, DevSecOps, and software supply chain security.', 'SDLC • AppSec • DevSecOps • Supply chain'],
];

const faqs = [
  ['Is the training really only $99?', 'Yes. The advertised training price is $99. Any additional services or materials should be clearly identified before purchase.'],
  ['Is the CISSP exam fee included?', 'No. The official CISSP examination fee is separate from the $99 training fee unless otherwise specified.'],
  ['What happens if I don’t pass?', 'Eligible students who satisfy all published refund requirements can claim a 100% refund of the eligible training fee. Passing the exam is not guaranteed.'],
  ['Is the refund automatic?', 'No. Eligibility requirements and documentation requirements apply. Review the full Refund Policy before enrolling.'],
  ['Is this an official ISC2 course?', 'No affiliation, endorsement, sponsorship, or partnership with ISC2 is implied. This is an independently operated preparation program.'],
  ['Is CISSP suitable for beginners?', 'Candidates should review the current official ISC2 experience and eligibility requirements before deciding whether to pursue the certification.'],
  ['How long is the training?', 'Training duration is currently an editable program detail. Publish the actual duration here once finalized; no duration is being invented.'],
  ['Who is Prakash?', 'Prakash is a CISSP-certified cybersecurity professional with 6+ years of cybersecurity experience across IT and OT environments.'],
  ['Why is the course only $99?', 'The program is designed around focused preparation, practical cybersecurity thinking, and the CISSP mindset rather than an inflated course price.'],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="CISSP Prep by Prakash home">
      <span className="grid h-9 w-9 place-items-center rounded-xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
        <ShieldCheck size={19} />
      </span>
      <span className="font-semibold tracking-tight">CISSP Prep <span className="text-slate-400">by Prakash</span></span>
    </a>
  );
}

function CTA({ small = false }: { small?: boolean }) {
  return (
    <a
      href="#checkout"
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-xl font-bold ${small ? 'px-4 py-2 text-sm' : 'px-6 py-3.5'}`}
    >
      Start CISSP Training — $99 <ArrowRight size={18} />
    </a>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openDomain, setOpenDomain] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050a12] text-white">
      <nav className="nav-glass fixed inset-x-0 top-0 z-50">
        <div className="container flex h-[72px] items-center justify-between">
          <Logo />
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#training" className="hover:text-white">Training</a>
            <a href="#curriculum" className="hover:text-white">Curriculum</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="/refund-policy" className="hover:text-white">Refund Policy</a>
            <CTA small />
          </div>
          <button aria-label="Open navigation" className="rounded-lg border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#050a12]/95 px-5 py-5 md:hidden">
            {['Home', 'Training', 'Curriculum', 'About', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-3 text-slate-200" onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a href="/refund-policy" className="block py-3 text-slate-200">Refund Policy</a>
            <div className="pt-3"><CTA /></div>
          </div>
        )}
      </nav>

      <section id="home" className="hero-glow noise relative overflow-hidden pt-32">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="container relative pb-24 pt-12 md:pb-32 md:pt-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="eyebrow"><LockKeyhole size={13} /> CISSP-CERTIFIED CYBERSECURITY PROFESSIONAL</div>
            <h1 className="section-title mt-7 text-5xl font-semibold leading-[.98] md:text-7xl lg:text-[86px]">
              I Cleared CISSP.<br /><span className="text-gradient">Now I’ll Help You Prepare for Yours.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              6+ years of IT &amp; OT cybersecurity experience. Focused CISSP preparation built around concepts, scenario thinking, and the CISSP mindset.
            </p>

            <div className="mx-auto mt-10 max-w-md rounded-3xl border border-sky-300/20 bg-white/[.035] p-7 shadow-glow backdrop-blur-xl">
              <div className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">CISSP Training</div>
              <div className="mt-1 text-6xl font-bold tracking-tight">$99</div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm font-semibold text-sky-100">
                <RotateCcw size={15} /> Don’t Pass? Eligible candidates can get their training fee back.*
              </div>
              <div className="mt-6"><CTA /></div>
              <button onClick={() => scrollToId('training')} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white">
                See What’s Included <ArrowDown size={16} />
              </button>
              <p className="mt-5 text-xs leading-5 text-slate-500">*100% refund subject to published eligibility requirements and refund terms. Official CISSP exam fee is separate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#07101b]/80">
        <div className="container grid gap-px md:grid-cols-4">
          {[
            ['CISSP Certified', 'Successfully cleared the CISSP examination.', ShieldCheck],
            ['6+ Years', 'Cybersecurity experience.', Clock3],
            ['IT + OT', 'Experience across IT and OT cybersecurity environments.', Network],
            ['8 Domains', 'Structured preparation across the CISSP domains.', Target],
          ].map(([title, sub, Icon]) => (
            <div key={title as string} className="border-x border-white/5 px-6 py-8 first:border-l-0 last:border-r-0">
              <Icon size={20} className="text-sky-300" />
              <div className="mt-4 font-semibold">{title as string}</div>
              <div className="mt-1 text-sm leading-6 text-slate-500">{sub as string}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="training" className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <div className="eyebrow">THE REAL CHALLENGE</div>
            <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">CISSP Isn’t Just About Memorizing a Book.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Many candidates aren’t short on effort. They’re overloaded with resources and underprepared for the way CISSP questions force you to think.</p>
          </div>
          <div className="card rounded-3xl p-6 md:p-8">
            <div className="grid gap-3">
              {['Study too many resources', 'Memorize concepts without understanding them', 'Struggle with scenario-based questions', 'Choose technically correct answers instead of the BEST answer', 'Miss the CISSP mindset', 'Prepare without a structured strategy', 'Feel overwhelmed by eight domains'].map((x) => (
                <div key={x} className="flex gap-3 rounded-xl border border-white/5 bg-white/[.02] p-3 text-sm text-slate-300"><X size={16} className="mt-0.5 shrink-0 text-slate-500" /> {x}</div>
              ))}
            </div>
            <div className="mt-7 border-t border-white/10 pt-6 text-xl font-semibold">The goal isn’t to memorize more. <span className="text-sky-300">It’s to think differently.</span></div>
          </div>
        </div>
      </section>

      <section className="section bg-[#07101a]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">THE CISSP MINDSET</div>
            <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Learn the CISSP Mindset.</h2>
            <p className="mt-5 text-slate-400">Build the decision-making framework that sits behind difficult, scenario-driven questions.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ['Think Like a Security Leader', 'Understand risk-based decision making.', BrainCircuit],
              ['Choose the BEST Answer', 'Evaluate multiple technically correct options.', Target],
              ['Understand the Why', 'Focus on principles rather than blind memorization.', Sparkles],
              ['Apply Real-World Thinking', 'Connect concepts with practical cybersecurity situations.', Network],
              ['Master Scenario Questions', 'Use a structured approach to complex questions.', GraduationCap],
            ].map(([title, desc, Icon]) => (
              <div className="card card-hover rounded-2xl p-5" key={title as string}>
                <Icon className="text-sky-300" size={22} />
                <h3 className="mt-5 font-semibold leading-6">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid gap-10 lg:grid-cols-[.76fr_1.24fr] lg:items-center">
          <div className="card relative min-h-[380px] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(57,168,255,.22),transparent_28%),linear-gradient(140deg,rgba(15,32,52,.9),rgba(5,10,18,.96))]" />
            <div className="relative flex h-full min-h-[380px] items-center justify-center p-8 text-center">
              <div>
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-sky-300/20 bg-sky-300/10 text-sky-200"><ShieldCheck size={52} /></div>
                <div className="mt-6 text-xl font-semibold">Professional portrait placeholder</div>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">Replace with your professional photo when ready.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow">ABOUT PRAKASH</div>
            <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Meet Your Trainer</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">I’m Prakash, a CISSP-certified cybersecurity professional with 6+ years of experience across IT and OT cybersecurity.</p>
            <p className="mt-4 text-base leading-8 text-slate-400">My approach to CISSP preparation is focused on understanding the concepts, applying the CISSP mindset, and learning how to approach scenario-based questions.</p>
            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
              {['Risk', 'Business priorities', 'Architecture', 'Governance', 'People', 'Processes', 'Technology', 'Decision making'].map((x) => <div key={x} className="rounded-xl border border-white/8 bg-white/[.02] px-3 py-3 text-sm text-slate-300">{x}</div>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="btn-secondary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-slate-200"><Linkedin size={17} /> LinkedIn placeholder <ExternalLink size={14} /></a>
              <span className="inline-flex items-center rounded-xl border border-dashed border-white/10 px-4 py-3 text-sm text-slate-500">Biography / experience / certifications: editable placeholders</span>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="section bg-[#07101a]">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">CURRICULUM</div>
              <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Master All 8 CISSP Domains</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-500">Tap any domain to expand the key topics. Content is structured for focused preparation and practical application.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {domains.map(([num, title, desc, topics], i) => {
              const open = openDomain === i;
              return (
                <button key={num} onClick={() => setOpenDomain(open ? null : i)} className={`card card-hover rounded-2xl p-5 text-left ${open ? 'border-sky-300/30' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="font-mono text-sm text-sky-300/80">{num}</div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold leading-6">{title}</h3>
                        <ChevronDown className={`shrink-0 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} size={19} />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
                      {open && <div className="mt-4 rounded-xl border border-sky-300/10 bg-sky-300/5 px-3 py-2 text-xs font-semibold text-sky-100">Key topics: {topics}</div>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">TRAINING APPROACH</div>
            <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">A Simple Approach to CISSP Preparation</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ['01', 'LEARN', 'Understand the concepts.'],
              ['02', 'THINK', 'Develop the CISSP mindset.'],
              ['03', 'PRACTICE', 'Apply the concepts to scenarios.'],
              ['04', 'PREPARE', 'Build exam strategy and confidence.'],
            ].map(([n, t, d], i) => (
              <div key={n} className="relative">
                <div className="card rounded-2xl p-6">
                  <div className="font-mono text-sm text-sky-300">{n}</div>
                  <h3 className="mt-7 font-semibold tracking-[.18em]">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{d}</p>
                </div>
                {i < 3 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-700 lg:block" size={18} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="checkout" className="section bg-[#07101a]">
        <div className="container grid gap-10 lg:grid-cols-[1fr_440px] lg:items-center">
          <div>
            <div className="eyebrow">THE OFFER</div>
            <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">CISSP Preparation.<br /><span className="text-sky-300">One Price. $99.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">Premium CISSP preparation without the premium price. Focused training built around understanding, scenario thinking, and exam strategy.</p>
          </div>
          <div className="card rounded-3xl p-7 md:p-8">
            <div className="flex items-end justify-between">
              <div><div className="text-sm text-slate-500">One-time training fee</div><div className="mt-1 text-6xl font-bold">$99</div></div>
              <CircleDollarSign className="text-sky-300" size={34} />
            </div>
            <div className="mt-7 grid gap-3">
              {['CISSP domain coverage', 'Structured preparation', 'CISSP mindset training', 'Scenario-based learning', 'Exam strategy', 'Question-analysis techniques', 'Study guidance', 'Training resources'].map((x) => <div key={x} className="flex items-center gap-2 text-sm text-slate-300"><Check size={16} className="text-cyan-300" /> {x}</div>)}
            </div>
            <a href="#checkout-placeholder" className="btn-primary mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 font-bold">Start Training — $99 <ArrowRight size={18} /></a>
            <div id="checkout-placeholder" className="mt-4 rounded-xl border border-dashed border-sky-300/20 bg-sky-300/5 p-3 text-center text-xs leading-5 text-sky-100/70">Stripe checkout placeholder. Add your Stripe Checkout / Payment Link here. Never expose secret API keys client-side.</div>
            <p className="mt-4 text-center text-xs text-slate-500">100% Training-Fee Refund Guarantee*<br />Official CISSP exam fee is separate.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-[.92fr_1.08fr]">
              <div className="bg-gradient-to-br from-sky-500/15 via-transparent to-cyan-300/5 p-7 md:p-10">
                <div className="eyebrow">REFUND GUARANTEE</div>
                <h2 className="section-title mt-5 text-4xl font-semibold md:text-5xl">Don’t Pass?<br /><span className="text-sky-300">Get Your $99 Training Fee Back.*</span></h2>
                <p className="mt-5 text-sm leading-7 text-slate-400">Prepare with confidence. This is a training-fee refund promise for eligible candidates who meet the published requirements—not a guarantee that you will pass the CISSP examination.</p>
                <a href="/refund-policy" className="btn-secondary mt-7 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold">View Full Refund Terms <ArrowRight size={16} /></a>
              </div>
              <div className="p-7 md:p-10">
                {[
                  ['01', 'Enroll', 'Start the program for $99.'],
                  ['02', 'Complete the required training', 'Follow the published training requirements.'],
                  ['03', 'Take the CISSP exam', 'Sit for the official CISSP examination.'],
                  ['04', 'Didn’t pass?', 'If you satisfy the guarantee requirements, submit the required documentation.'],
                  ['05', 'Get your money back', 'Receive a 100% refund of the eligible training fee.'],
                ].map(([n, t, d]) => <div key={n} className="flex gap-4 border-b border-white/8 py-5 first:pt-0 last:border-0 last:pb-0"><div className="font-mono text-sm text-sky-300">{n}</div><div><div className="font-semibold">{t}</div><div className="mt-1 text-sm leading-6 text-slate-500">{d}</div></div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#07101a]">
        <div className="container text-center">
          <div className="eyebrow">WHY $99?</div>
          <h2 className="section-title mx-auto mt-5 max-w-4xl text-4xl font-semibold md:text-6xl">No Inflated Course Price.<br /><span className="text-sky-300">Just Focused CISSP Preparation.</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">CISSP preparation shouldn’t require spending hundreds or thousands before you’ve even taken the exam. The program is built around focused preparation, practical cybersecurity thinking, and the CISSP mindset.</p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Questions, answered.</h2>
            <p className="mt-6 text-slate-500">Clear terms. Clear expectations. No artificial claims.</p>
          </div>
          <div className="grid gap-3">
            {faqs.map(([q, a], i) => {
              const open = openFaq === i;
              return <div key={q} className="rounded-2xl border border-white/8 bg-white/[.02]">
                <button className="flex w-full items-center justify-between gap-5 p-5 text-left" onClick={() => setOpenFaq(open ? null : i)}>
                  <span className="font-semibold">{q}</span><ChevronDown size={19} className={`shrink-0 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && <div className="px-5 pb-5 text-sm leading-7 text-slate-500">{a}</div>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(57,168,255,.2),transparent_44%)]" />
        <div className="container relative text-center">
          <div className="eyebrow">START HERE</div>
          <h2 className="section-title mx-auto mt-5 max-w-4xl text-5xl font-semibold md:text-7xl">Your CISSP Journey Starts Here.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">Learn the concepts. Master the mindset. Prepare with confidence.</p>
          <div className="mt-8 text-6xl font-bold">$99</div>
          <div className="mt-2 text-sm uppercase tracking-[.18em] text-slate-500">CISSP Training</div>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm text-sky-100"><RotateCcw size={16} /> Don’t pass? Eligible candidates can receive 100% of their training fee back.*</div>
          <div className="mt-8"><CTA /></div>
          <button onClick={() => scrollToId('curriculum')} className="mt-4 text-sm font-semibold text-slate-400 hover:text-white">View Curriculum</button>
        </div>
      </section>

      <footer className="border-t border-white/5 pb-24 pt-12 md:pb-12">
        <div className="container">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="max-w-sm"><Logo /><p className="mt-4 text-sm leading-6 text-slate-500">CISSP-certified cybersecurity professional | 6+ years IT &amp; OT cybersecurity experience</p></div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm text-slate-500">
              <a href="#training" className="hover:text-white">Training</a><a href="#curriculum" className="hover:text-white">Curriculum</a>
              <a href="#about" className="hover:text-white">About</a><a href="#faq" className="hover:text-white">FAQ</a>
              <a href="/refund-policy" className="hover:text-white">Refund Policy</a><a href="/terms" className="hover:text-white">Terms</a>
              <a href="/privacy" className="hover:text-white">Privacy</a><a href="mailto:replace-with-contact@example.com" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="mt-10 border-t border-white/5 pt-7 text-xs leading-6 text-slate-600">CISSP® is a registered certification mark of ISC2. This training program is independently operated and is not affiliated with or endorsed by ISC2 unless explicitly stated.</div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#050a12]/92 px-3 py-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3"><div><div className="text-xs text-slate-500">CISSP Training</div><div className="font-bold">$99</div></div><a href="#checkout" className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold">Start Now <ArrowRight size={17} /></a></div>
      </div>
    </main>
  );
}
