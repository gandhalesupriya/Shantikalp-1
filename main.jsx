import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight, Menu, X, ShieldCheck, Lightbulb, Search, FileText, Scale,
  Building2, GraduationCap, BriefcaseBusiness, Handshake, Award, CheckCircle2,
  Mail, Phone, MapPin, ChevronDown, Linkedin, Globe2, Sparkles
} from 'lucide-react'
import './styles.css'

const services = [
  { icon: Search, number: '01', title: 'Patent Search & Analytics', desc: 'Prior-art searches, patentability assessment, landscape studies, technology trends and white-space analysis to support informed innovation decisions.' },
  { icon: FileText, number: '02', title: 'Patent Drafting & Prosecution', desc: 'Support across invention disclosures, patent specifications, filing coordination, examination responses and prosecution strategy.' },
  { icon: ShieldCheck, number: '03', title: 'Trademark Protection', desc: 'Trademark searches, classification support, filing, examination responses and brand protection strategy.' },
  { icon: Award, number: '04', title: 'Industrial Design', desc: 'Design registrability assessment, representation coordination, application preparation and prosecution support.' },
  { icon: Scale, number: '05', title: 'Copyright & Creative Works', desc: 'Copyright registration support for software, literary, artistic, educational and other eligible creative works.' },
  { icon: Building2, number: '06', title: 'IP Portfolio Management', desc: 'IP audits, docketing frameworks, portfolio reviews, inventor engagement and institutional IP process development.' },
  { icon: Handshake, number: '07', title: 'Technology Transfer', desc: 'Support for IP evaluation, technology marketing, licensing readiness and pathways towards commercialisation.' },
  { icon: GraduationCap, number: '08', title: 'IPR Training & Awareness', desc: 'Customised faculty development programmes, workshops, student sessions and industry-focused IP awareness.' },
]

const audiences = [
  { icon: GraduationCap, title: 'Universities & Institutions', text: 'Build a structured IP ecosystem—from idea disclosure and evaluation to protection, portfolio management and technology transfer.' },
  { icon: BriefcaseBusiness, title: 'Startups & Entrepreneurs', text: 'Make informed IP decisions, protect brands and innovations, and align IP strategy with business growth.' },
  { icon: Building2, title: 'Industry & R&D Teams', text: 'Use IP intelligence, protection strategies and portfolio reviews to support research, product development and competitive positioning.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const nav = [['Home','home'],['About','about'],['Services','services'],['Who We Serve','sectors'],['Our Approach','approach'],['Contact','contact']]
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const submit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Website enquiry: ${data.get('service') || 'IPR consultation'}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nOrganisation: ${data.get('organisation')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nMessage: ${data.get('message')}`)
    window.location.href = `mailto:YOUR-EMAIL@example.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return <div>
    <div className="topbar"><div className="container topbar-inner"><span>Intellectual Property • Innovation • Commercialisation</span><span className="top-right"><Globe2 size={14}/> Serving academia, industry & innovators</span></div></div>
    <header className="header">
      <div className="container nav-wrap">
        <button className="brand" onClick={() => go('home')} aria-label="Shantikalp home">
          <span className="brand-mark"><span>S</span><i /></span>
          <span className="brand-copy"><strong>SHANTIKALP</strong><small>IP & INNOVATION CONSULTING</small></span>
        </button>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label,id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          <button className="nav-cta" onClick={() => go('contact')}>Discuss your IP needs <ArrowRight size={15}/></button>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-pattern" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow light"><span/> STRATEGIC IP PARTNERSHIP</div>
            <h1>Ideas deserve<br/><em>the right protection.</em></h1>
            <p className="hero-lead">Turning research, creativity and innovation into protected intellectual assets—with thoughtful IP strategy and practical guidance.</p>
            <div className="hero-actions"><button className="btn gold" onClick={() => go('contact')}>Start a conversation <ArrowRight size={17}/></button><button className="text-link light-link" onClick={() => go('services')}>Explore our services <ArrowRight size={16}/></button></div>
            <div className="hero-note"><ShieldCheck size={17}/> IP support for institutions, businesses and innovators</div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration representing innovation and intellectual property">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
            <div className="art-core"><div className="core-icon"><Lightbulb size={52} strokeWidth={1.2}/></div><span>IDEA</span></div>
            <div className="float-card card-top"><ShieldCheck size={18}/><span>Protect</span></div>
            <div className="float-card card-right"><Sparkles size={18}/><span>Innovate</span></div>
            <div className="float-card card-bottom"><Handshake size={18}/><span>Commercialise</span></div>
            <div className="art-caption">FROM CONCEPT TO VALUE</div>
          </div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span>CLARITY IN IP. CONFIDENCE IN INNOVATION.</span><span className="gold-line"/></div></div>
      </section>

      <section className="intro section" id="about">
        <div className="container intro-grid">
          <div><div className="eyebrow"><span/> ABOUT SHANTIKALP</div><h2>Bringing structure<br/>to <em>innovation.</em></h2></div>
          <div className="intro-text"><p className="large-copy">At Shantikalp, we believe intellectual property is more than a legal formality—it is a strategic asset that can strengthen research, protect creativity and enable meaningful partnerships.</p><p>We work with academic institutions, startups and businesses to navigate the IP journey with clarity: identifying protectable ideas, evaluating protection options, coordinating filings and building pathways towards technology transfer and commercialisation.</p><button className="text-link" onClick={() => go('approach')}>Discover our approach <ArrowRight size={16}/></button></div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow"><span/> WHAT WE DO</div><h2>IP expertise for every<br/><em>stage of innovation.</em></h2></div><p>From the first spark of an idea to protection and commercial opportunity, our services are designed around your goals.</p></div>
          <div className="service-grid">{services.map(({icon:Icon,number,title,desc}) => <article className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon size={23}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{desc}</p><button onClick={() => go('contact')} className="card-link">Discuss this service <ArrowRight size={15}/></button></article>)}</div>
        </div>
      </section>

      <section className="sectors section" id="sectors">
        <div className="container">
          <div className="center-heading"><div className="eyebrow"><span/> WHO WE PARTNER WITH</div><h2>IP solutions shaped around<br/><em>your world.</em></h2><p>Different organisations face different IP questions. We tailor the engagement to your context, objectives and stage of growth.</p></div>
          <div className="sector-grid">{audiences.map(({icon:Icon,title,text},i) => <article className="sector-card" key={title}><div className="sector-index">0{i+1}</div><Icon size={30} strokeWidth={1.5}/><h3>{title}</h3><p>{text}</p><button className="text-link" onClick={() => go('contact')}>Explore a collaboration <ArrowRight size={15}/></button></article>)}</div>
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="container approach-grid">
          <div><div className="eyebrow light"><span/> OUR APPROACH</div><h2>Thoughtful advice.<br/><em>Practical action.</em></h2><p className="approach-lead">A clear, collaborative process helps you make confident decisions at every stage of your IP journey.</p><button className="btn gold" onClick={() => go('contact')}>Plan your IP journey <ArrowRight size={17}/></button></div>
          <div className="steps">
            {[['01','Understand','We learn about your technology, business goals, research context and protection needs.'],['02','Evaluate','We help assess protectability, search findings, ownership considerations and strategic options.'],['03','Protect','We coordinate suitable IP filings and provide support through relevant examination and prosecution stages.'],['04','Build value','We help explore portfolio development, licensing readiness and commercialisation opportunities.']].map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="people section">
        <div className="container people-grid">
          <div><div className="eyebrow"><span/> THE PEOPLE BEHIND THE WORK</div><h2>Experience guided<br/>by <em>purpose.</em></h2><p className="people-lead">Shantikalp brings together IP consulting and academic innovation perspectives to support organisations in making their ideas count.</p></div>
          <div className="people-cards">
            <article className="person"><div className="person-avatar">SG</div><div><h3>Supriya Gandhale</h3><span>IP Consultant</span><p>Intellectual property strategy, patent search and analytics, drafting and prosecution support, and institutional IP systems.</p></div></article>
            <article className="person"><div className="person-avatar">BA</div><div><h3>Dr. Bhavna Ambudkar</h3><span>Consultant</span><p>Academic innovation, training and incubation ecosystem engagement. Profile details can be expanded with confirmed credentials.</p></div></article>
          </div>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow light"><span/> LET'S TALK ABOUT YOUR IDEAS</div><h2>Your next innovation<br/><em>starts with a conversation.</em></h2></div><button className="btn gold" onClick={() => go('contact')}>Connect with Shantikalp <ArrowRight size={17}/></button></div></section>

      <section className="contact section" id="contact">
        <div className="container contact-grid">
          <div><div className="eyebrow"><span/> CONTACT US</div><h2>Let's make your<br/>IP work <em>for you.</em></h2><p className="contact-lead">Tell us a little about your requirement. We will be happy to explore how Shantikalp can support your organisation.</p><div className="contact-detail"><Mail size={18}/><span><b>Email</b><small>Replace with your official business email</small></span></div><div className="contact-detail"><Phone size={18}/><span><b>Phone</b><small>Add your business contact number</small></span></div><div className="contact-detail"><MapPin size={18}/><span><b>Location</b><small>Pune, Maharashtra, India</small></span></div></div>
          <form className="contact-form" onSubmit={submit}><div className="form-title">Send an enquiry <span>We usually respond within 1–2 business days.</span></div><div className="form-row"><label>Your name<input name="name" required placeholder="Full name"/></label><label>Organisation<input name="organisation" placeholder="University / Company"/></label></div><div className="form-row"><label>Email address<input name="email" type="email" required placeholder="you@example.com"/></label><label>Phone number<input name="phone" placeholder="+91"/></label></div><label>How can we help?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s => <option key={s.number}>{s.title}</option>)}<option>Other / Not sure</option></select></label><label>Tell us about your requirement<textarea name="message" rows="4" placeholder="Briefly describe your IP or innovation requirement..."/></label><button className="btn navy submit-btn" type="submit">Prepare email enquiry <ArrowRight size={17}/></button>{submitted && <p className="form-note">Your email application should open. Please configure the official email address in src/main.jsx before publishing.</p>}<p className="privacy-note">Please do not include confidential invention details in this initial enquiry.</p></form>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-main"><div className="footer-brand"><div className="brand-mark"><span>S</span><i/></div><div><strong>SHANTIKALP</strong><small>IP & INNOVATION CONSULTING</small></div><p>Protecting ideas. Enabling innovation. Creating value.</p></div><div className="footer-nav"><b>Explore</b>{nav.map(([label,id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</div><div className="footer-note"><b>Important note</b><p>Website information is general in nature and does not constitute legal advice. Services and professional engagements are subject to a separate scope and written confirmation.</p></div></div><div className="container copyright"><span>© {new Date().getFullYear()} Shantikalp. All rights reserved.</span><span>Designed for ideas with a future.</span></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
