'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowDown, BrainCircuit, Check, ChevronDown, Clock3,
  GraduationCap, Menu, Network, RotateCcw, ShieldCheck, Sparkles, Target, X,
  Video, Users, BookOpen, Lightbulb, CircleHelp, Zap, Linkedin
} from 'lucide-react';

const domains = [
  ['01','Security & Risk Management','Governance, risk management, compliance, legal considerations, business continuity, and security awareness.','Risk • Governance • Compliance • BCP'],
  ['02','Asset Security','Data classification, ownership, lifecycle, retention, and protection.','Classification • Ownership • Retention • Protection'],
  ['03','Security Architecture & Engineering','Secure design, security models, cryptography, physical security, and architecture.','Architecture • Crypto • Models • Physical Security'],
  ['04','Communications & Network Security','Network architecture, segmentation, secure protocols, wireless security, and communication security.','Segmentation • Protocols • Wireless • Architecture'],
  ['05','Identity & Access Management','Authentication, authorization, access control, identity lifecycle, federation, and privileged access.','IAM • AuthN/AuthZ • Federation • PAM'],
  ['06','Security Assessment & Testing','Auditing, assessments, vulnerability management, penetration testing, and security metrics.','Audit • Assessment • Vulnerability • Metrics'],
  ['07','Security Operations','Incident management, disaster recovery, business continuity, logging, monitoring, investigations, and change management.','IR • DR/BC • Monitoring • Change'],
  ['08','Software Development Security','Secure SDLC, application security, secure coding, DevSecOps, and software supply chain security.','SDLC • AppSec • DevSecOps • Supply Chain'],
];

const faqs = [
  ['Is the training really only $99?','Yes. The advertised training price is $99. Any additional services or materials will be clearly identified before purchase.'],
  ['Is the CISSP exam fee included?','No. The official CISSP examination fee is separate from the $99 training fee unless otherwise specified.'],
  ['What happens if I don’t pass?','Eligible students who satisfy all published refund requirements can claim a 100% refund of the eligible training fee. Passing the exam is not guaranteed.'],
  ['Is the refund automatic?','No. Eligibility requirements and documentation requirements apply. Review the full Refund Policy before enrolling.'],
  ['Is this an official ISC2 course?','No affiliation, endorsement, sponsorship, or partnership with ISC2 is implied. This is an independently operated preparation program.'],
  ['Is CISSP suitable for beginners?','Candidates should review the current official ISC2 experience and eligibility requirements before deciding whether to pursue the certification.'],
  ['How long is the training?','The final training duration is an editable program detail and will be published before enrollment.'],
  ['Who is Prakash?','Prakash is a CISSP-certified cybersecurity professional with 6+ years of cybersecurity experience across IT and OT environments.'],
  ['Why is the course only $99?','The program is designed around focused preparation, practical cybersecurity thinking, live training, and guidance rather than an inflated course price.'],
];

const mindset = [
  ['Think Like a Security Leader','Start with risk, business objectives, safety, and the organization’s priorities.'],
  ['Choose the BEST Answer','Learn how to evaluate several technically valid answers and select the best one.'],
  ['Understand the Why','Build understanding instead of relying on blind memorization.'],
  ['Apply Real-World Thinking','Connect CISSP concepts with practical IT and OT cybersecurity situations.'],
  ['Master Scenario Questions','Use a repeatable process for analyzing complex exam scenarios.'],
];

function CTA({ small=false }: { small?: boolean }) {
  return <a href="#checkout" className={`btn-primary magnetic inline-flex items-center justify-center gap-2 rounded-xl font-bold ${small?'px-4 py-2 text-sm':'px-6 py-3.5'}`}>Start CISSP Training — $99 <ArrowRight size={18}/></a>;
}

function Logo(){
  return <a href="#home" className="flex items-center gap-3" aria-label="CISSP Prep by Prakash home">
    <span className="grid h-9 w-9 place-items-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700"><ShieldCheck size={19}/></span>
    <span className="font-semibold tracking-tight">CISSP Prep <span className="text-slate-500">by Prakash</span></span>
  </a>;
}

export default function Home(){
  const [openDomain,setOpenDomain]=useState<number|null>(null);
  const [openFaq,setOpenFaq]=useState<number|null>(0);
  const [menuOpen,setMenuOpen]=useState(false);
  const [scenario,setScenario]=useState<number|null>(null);
  const [activeNav,setActiveNav]=useState('home');
  const [scroll,setScroll]=useState(0);

  useEffect(()=>{
    const onScroll=()=>{
      const total=document.documentElement.scrollHeight-window.innerHeight;
      setScroll(total>0?(window.scrollY/total)*100:0);
      const ids=['home','training','mindset','curriculum','about','faq'];
      const current=ids.find((id)=>{const el=document.getElementById(id); if(!el)return false; const r=el.getBoundingClientRect(); return r.top<=130&&r.bottom>130;});
      if(current)setActiveNav(current);
    };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);

  useEffect(()=>{
    const move=(e:MouseEvent)=>document.documentElement.style.setProperty('--mx',`${e.clientX}px`),moveY=(e:MouseEvent)=>document.documentElement.style.setProperty('--my',`${e.clientY}px`);
    window.addEventListener('mousemove',move); window.addEventListener('mousemove',moveY);
    return()=>{window.removeEventListener('mousemove',move);window.removeEventListener('mousemove',moveY)};
  },[]);

  const nav=[['home','Home'],['training','Training'],['mindset','Mindset'],['curriculum','Curriculum'],['about','About'],['faq','FAQ']];
  return <main className="min-h-screen bg-white text-[#10251b]">
    <div className="progress-bar" style={{width:`${scroll}%`}}/>
    <div className="cursor-glow" aria-hidden="true"/>

    <nav className="nav-glass fixed inset-x-0 top-0 z-50">
      <div className="container flex h-[72px] items-center justify-between">
        <Logo/>
        <div className="hidden items-center gap-5 text-sm md:flex">
          {nav.map(([id,label])=><a key={id} href={`#${id}`} className={activeNav===id?'active-link font-semibold':'text-slate-600 hover:text-emerald-700'}>{label}</a>)}
          <a href="/refund-policy" className="text-slate-600 hover:text-emerald-700">Refund Policy</a>
          <CTA small/>
        </div>
        <button aria-label="Open navigation" className="rounded-lg border border-emerald-100 bg-white p-2 text-emerald-700 md:hidden" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={21}/>:<Menu size={21}/>}</button>
      </div>
      {menuOpen&&<div className="border-t border-emerald-100 bg-white px-5 py-5 shadow-lg md:hidden">
        {nav.map(([id,label])=><a key={id} href={`#${id}`} className="block py-3 text-slate-700" onClick={()=>setMenuOpen(false)}>{label}</a>)}
        <a href="/refund-policy" className="block py-3 text-slate-700">Refund Policy</a><div className="pt-3"><CTA/></div>
      </div>}
    </nav>

    <section id="home" className="hero-glow noise relative overflow-hidden pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0"/>
      <div className="container relative pb-24 pt-12 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <div className="eyebrow"><ShieldCheck size={13}/> CISSP-CERTIFIED CYBERSECURITY PROFESSIONAL</div>
          <h1 className="section-title mt-7 text-5xl font-semibold leading-[.98] md:text-7xl lg:text-[82px]">I Cleared CISSP.<br/><span className="text-gradient">Now I’ll Help You Prepare for Yours.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">6+ years of IT &amp; OT cybersecurity experience. Live sessions, focused training, and practical guidance to prepare you for the CISSP examination.</p>
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-emerald-100 bg-white p-7 shadow-xl shadow-emerald-900/10">
            <div className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">CISSP Training</div><div className="mt-1 text-6xl font-bold tracking-tight">$99</div>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-800"><RotateCcw size={15}/> Don’t pass? Eligible candidates can get their training fee back.*</div>
            <div className="mt-6"><CTA/></div>
            <a href="#training" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">See how the training works <ArrowDown size={16}/></a>
            <p className="mt-5 text-xs leading-5 text-slate-500">*100% refund subject to published eligibility requirements and refund terms. Official CISSP exam fee is separate.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-emerald-100 bg-emerald-50/60">
      <div className="container grid gap-px md:grid-cols-4">
        {[['CISSP Certified','Successfully cleared the CISSP examination.',ShieldCheck],['6+ Years','Cybersecurity experience.',Clock3],['IT + OT','Experience across IT and OT cybersecurity environments.',Network],['8 Domains','Structured preparation across the CISSP domains.',Target]].map(([title,sub,Icon])=><div key={title as string} className="px-6 py-8">
          <Icon size={21} className="text-emerald-700"/><div className="mt-4 font-semibold">{title as string}</div><div className="mt-1 text-sm leading-6 text-slate-600">{sub as string}</div>
        </div>)}
      </div>
    </section>

    <section id="training" className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center"><div className="eyebrow">LIVE TRAINING + GUIDANCE</div><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Not Just a Course. A Focused Preparation Experience.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Join live training sessions, understand the concepts, practice scenario thinking, and get guidance on how to prepare for the exam.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[['Live Sessions','Learn directly through structured live sessions focused on CISSP concepts and exam thinking.',Video],['Focused Training','Work through the eight domains without getting buried in unnecessary resources.',BookOpen],['Preparation Guidance','Get practical guidance on study strategy, question analysis, and exam preparation.',Lightbulb]].map(([title,desc,Icon],i)=><div className={`reveal card card-hover rounded-3xl p-7 stagger-${i+1}`} key={title as string}><div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon size={23}/></div><h3 className="mt-6 text-xl font-semibold">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{desc as string}</p></div>)}
        </div>
      </div>
    </section>

    <section id="mindset" className="section bg-[#f0f8f3]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center"><div className="eyebrow">INTERACTIVE DEMO</div><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Think Like a CISSP.</h2><p className="mt-5 text-slate-600">Explore the mindset behind difficult questions. Click a principle to reveal how it changes your approach.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-5">{mindset.map(([title,desc],i)=><button key={title} type="button" onClick={()=>setScenario(scenario===i?null:i)} className={`mindset-card card-hover rounded-2xl p-5 text-left ${scenario===i?'border-emerald-500 bg-white shadow-lg':''}`}><div className="text-sm font-bold text-emerald-700">0{i+1}</div><h3 className="mt-4 font-semibold leading-6">{title}</h3><div className={`mt-3 overflow-hidden text-sm leading-6 text-slate-600 transition-all ${scenario===i?'max-h-40 opacity-100':'max-h-0 opacity-0'}`}>{desc}</div><div className="mt-4 text-xs font-semibold text-emerald-700">{scenario===i?'Click to close':'Explore →'}</div></button>)}</div>
        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-emerald-200 bg-white p-6 shadow-xl shadow-emerald-900/10 md:p-9">
          <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700"><BrainCircuit size={21}/></span><div><div className="text-xs font-bold uppercase tracking-widest text-emerald-700">Try the mindset</div><div className="font-semibold">What should a security manager consider FIRST?</div></div></div>
          <p className="mt-6 text-lg font-medium leading-8">A new security risk has been identified. Several technical controls could reduce it. What should the manager do first?</p>
          <div className="mt-5 grid gap-3">{['Immediately implement the most advanced technical control','Understand the risk and business impact','Purchase a new security product','Increase monitoring across all systems'].map((x,i)=><button key={x} type="button" className={`scenario-option rounded-xl border p-4 text-left text-sm font-medium ${scenario===10+i?'correct':''}`} onClick={()=>setScenario(10+i)}>{String.fromCharCode(65+i)}. {x}</button>)}</div>
          {scenario!==null&&scenario>=10&&<div className="mt-5 rounded-2xl bg-emerald-50 p-5 text-sm leading-7 text-emerald-950"><strong className="text-emerald-800">CISSP mindset:</strong> The best approach begins with understanding risk, business impact, and organizational priorities before jumping to a technical solution. This is the type of reasoning the training is designed to develop.</div>}
        </div>
      </div>
    </section>

    <section id="curriculum" className="section">
      <div className="container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="eyebrow">CURRICULUM</div><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Master All 8 CISSP Domains</h2></div><p className="max-w-md text-sm leading-6 text-slate-600">Click any domain to explore the focus areas. Your preparation stays structured from Domain 1 through Domain 8.</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">{domains.map(([num,title,desc,topics],i)=><button type="button" key={num} onClick={()=>setOpenDomain(openDomain===i?null:i)} className={`domain-card card-hover rounded-2xl p-6 text-left ${openDomain===i?'border-emerald-500 shadow-lg shadow-emerald-900/10':''}`}><div className="flex items-start justify-between gap-5"><div><div className="domain-number text-3xl font-bold text-emerald-700">{num}</div><h3 className="mt-2 text-xl font-semibold">{title}</h3></div><ChevronDown className={`domain-arrow mt-2 text-emerald-700 transition-transform ${openDomain===i?'rotate-180':''}`}/></div><p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p><div className={`grid transition-all duration-300 ${openDomain===i?'mt-5 grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><div className="rounded-xl bg-emerald-50 p-4 text-xs font-semibold leading-6 text-emerald-900">Key focus: {topics}</div></div></div></button>)}</div>
      </div>
    </section>

    <section className="section bg-emerald-700 text-white"><div className="container"><div className="mx-auto max-w-3xl text-center"><div className="text-sm font-bold uppercase tracking-[.2em] text-emerald-100">YOUR PREPARATION JOURNEY</div><h2 className="section-title mt-4 text-4xl font-semibold md:text-6xl">Learn. Think. Practice. Prepare.</h2><p className="mt-5 leading-7 text-emerald-50">A simple path from understanding the concepts to building confidence for the examination.</p></div><div className="relative mt-14 grid gap-4 md:grid-cols-4">{[['01','LEARN','Understand the concepts.'],['02','THINK','Develop the CISSP mindset.'],['03','PRACTICE','Apply concepts to scenarios.'],['04','PREPARE','Build exam strategy and confidence.']].map(([n,t,d])=><div key={n} className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"><div className="text-sm font-bold text-emerald-100">{n}</div><div className="mt-4 text-xl font-semibold">{t}</div><div className="mt-2 text-sm leading-6 text-emerald-50">{d}</div></div>)}</div></div></section>

    <section id="about" className="section"><div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div className="green-panel rounded-3xl p-8 md:p-10"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15"><Users size={27}/></div><div className="mt-8 text-sm font-bold uppercase tracking-widest text-emerald-100">Trainer-led preparation</div><h2 className="mt-3 text-3xl font-semibold">Prakash</h2><p className="mt-4 leading-7 text-emerald-50">CISSP-certified cybersecurity professional with 6+ years of cybersecurity experience across IT and OT environments.</p><div className="mt-8 grid gap-3 text-sm"><div className="rounded-xl bg-white/10 p-3">CISSP-certified</div><div className="rounded-xl bg-white/10 p-3">6+ years cybersecurity experience</div><div className="rounded-xl bg-white/10 p-3">IT + OT cybersecurity experience</div></div><a href="https://www.linkedin.com/in/prakash05" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-emerald-800 transition hover:-translate-y-1 hover:shadow-lg"><Linkedin size={18}/> View Prakash on LinkedIn</a></div><div><div className="eyebrow">ABOUT THE PROGRAM</div><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Live Sessions. Training. Guidance.</h2><p className="mt-6 text-lg leading-8 text-slate-600">The goal is simple: help you understand the CISSP concepts, develop the mindset needed for scenario-based questions, and prepare with a clear plan.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{[['Live learning','Trainer-led sessions focused on CISSP preparation.',Video],['Practical thinking','Connect concepts to real cybersecurity situations.',Network],['Exam guidance','Learn how to approach questions and preparation strategically.',Target],['Focused preparation','Stay centered on what matters across the eight domains.',Zap]].map(([t,d,I])=><div key={t as string} className="card rounded-2xl p-5"><I className="text-emerald-700" size={21}/><h3 className="mt-4 font-semibold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{d as string}</p></div>)}</div></div></div></section>

    <section id="checkout" className="section bg-[#f0f8f3]"><div className="container"><div className="mx-auto max-w-3xl text-center"><div className="eyebrow">SIMPLE PRICING</div><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">CISSP Preparation. One Price. $99.</h2><p className="mt-5 text-slate-600">Live sessions, training, and guidance to prepare you for the examination.</p></div><div className="mx-auto mt-12 max-w-lg rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-2xl shadow-emerald-900/10"><div className="text-sm font-bold uppercase tracking-widest text-emerald-700">One-time training fee</div><div className="mt-2 text-7xl font-bold">$99</div><div className="mt-5 grid gap-3 text-left">{['Live CISSP training sessions','Coverage across the eight domains','CISSP mindset training','Scenario-based learning','Exam preparation guidance','Question-analysis techniques','Study guidance','Training resources'].map(x=><div key={x} className="flex gap-3 text-sm text-slate-700"><Check size={18} className="shrink-0 text-emerald-700"/>{x}</div>)}</div><div className="mt-7"><CTA/></div><div className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-800">100% Training-Fee Refund Guarantee*</div><p className="mt-4 text-xs leading-5 text-slate-500">*Subject to published eligibility requirements and refund terms. Official CISSP examination fee is separate.</p></div></div></section>

    <section id="faq" className="section"><div className="container max-w-4xl"><div className="text-center"><div className="eyebrow"><CircleHelp size={13}/> FAQ</div><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Questions, Answered.</h2></div><div className="mt-12 divide-y divide-emerald-100 rounded-3xl border border-emerald-100 bg-white">{faqs.map(([q,a],i)=><div key={q}><button type="button" className="flex w-full items-center justify-between gap-5 p-6 text-left font-semibold" onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown className={`shrink-0 text-emerald-700 transition-transform ${openFaq===i?'rotate-180':''}`}/></button><div className={`grid transition-all duration-300 ${openFaq===i?'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}><div className="overflow-hidden"><p className="px-6 pb-6 pr-14 text-sm leading-7 text-slate-600">{a}</p></div></div></div>)}</div></div></section>

    <section className="section pt-10"><div className="container"><div className="green-panel relative overflow-hidden rounded-[32px] p-8 text-center md:p-14"><Sparkles className="mx-auto text-emerald-100" size={26}/><h2 className="section-title mt-5 text-4xl font-semibold md:text-6xl">Your CISSP Journey Starts Here.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-emerald-50">Learn the concepts. Master the mindset. Get live training and guidance to prepare with confidence.</p><div className="mt-8"><a href="#checkout" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-800 shadow-lg transition hover:-translate-y-1">Start CISSP Training — $99 <ArrowRight size={18}/></a></div><div className="mt-5 text-sm text-emerald-100">Don’t pass? Eligible candidates can receive 100% of their eligible training fee back.*</div></div></div></section>

    <footer className="border-t border-emerald-100 bg-white py-10"><div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><div className="font-semibold">CISSP Prep by Prakash</div><p className="mt-1 text-sm text-slate-500">CISSP-certified cybersecurity professional | 6+ years IT &amp; OT cybersecurity experience</p><a href="https://www.linkedin.com/in/prakash05" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"><Linkedin size={16}/> LinkedIn</a></div><div className="flex flex-wrap gap-4 text-sm text-slate-600"><a href="#training">Training</a><a href="#curriculum">Curriculum</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="/refund-policy">Refund Policy</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div></div><div className="container mt-7 text-xs leading-5 text-slate-500">CISSP® is a registered certification mark of ISC2. This training program is independently operated and is not affiliated with or endorsed by ISC2 unless explicitly stated.</div></footer>

    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-emerald-100 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden"><div className="flex items-center justify-between gap-3"><div><div className="text-xs font-semibold text-emerald-700">CISSP Training</div><div className="text-lg font-bold">$99</div></div><a href="#checkout" className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold">Start Now <ArrowRight size={17}/></a></div></div>
  </main>;
}