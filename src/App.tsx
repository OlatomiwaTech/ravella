import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Globe2, Heart, Leaf, Menu, MessageCircle, Minus, Package, Plus, ShieldCheck, ShoppingBag, Sparkles, X } from 'lucide-react'

const waOrderNumber = '2349127189648'
const waPrimary = `https://wa.me/${waOrderNumber}`
const bottle = '/products.png'
const nav = [{ to: '/', label: 'Home' }, { to: '/products', label: 'Our product' }, { to: '/about', label: 'Our story' }, { to: '/become-a-distributor', label: 'Opportunity' }, { to: '/contact', label: 'Contact' }]

function whatsappUrl(message: string) {
  return `${waPrimary}?text=${encodeURIComponent(message)}`
}

function Button({ children, to, href, variant = 'dark', onClick, className = '' }: { children: ReactNode; to?: string; href?: string; variant?: 'dark' | 'light' | 'outline' | 'gold'; onClick?: () => void; className?: string }) {
  const classes = `button button-${variant} ${className}`
  if (to) return <Link className={classes} to={to} onClick={onClick}>{children}<ArrowRight size={15} /></Link>
  if (href) return <a className={classes} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15} /></a>
  return <button type="button" className={classes} onClick={onClick}>{children}</button>
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  return <header className="site-header"><div className="nav-shell">
    <Link to="/" className="brand" aria-label="Ravella Ultra Solution home"><span className="brand-mark"><Leaf size={19} strokeWidth={1.7} /></span><span className="brand-words">RAVELLA<span>ULTRA SOLUTION</span></span></Link>
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{nav.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}<Button to="/products" className="nav-order">Shop Ravella</Button></nav>
  </div></header>
}

function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main wrap"><div className="footer-brand"><Link to="/" className="brand"><span className="brand-mark"><Leaf size={19} /></span><span className="brand-words">RAVELLA<span>ULTRA SOLUTION</span></span></Link><p>A more considered way to care for yourself — and an invitation to grow something meaningful together.</p><div className="footer-tags"><span>HEALTH</span><i /> <span>WEALTH</span><i /> <span>COMMUNITY</span></div></div><div className="footer-col"><h3>Explore</h3>{nav.slice(1).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div className="footer-col"><h3>Order & enquiries</h3><a href={waPrimary} target="_blank" rel="noreferrer">WhatsApp +234 912 718 9648</a><span>Ask us about product availability, pricing and delivery.</span></div></div><div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Ravella Ultra Solution. Made with purpose.</span><span>Thoughtfully made. Shared with care.</span></div></footer>
}

function Shell({ children }: { children: ReactNode }) {
  return <><SiteHeader />{children}<SiteFooter /></>
}

function PageHead({ eyebrow, title, text, image }: { eyebrow: string; title: ReactNode; text: string; image?: string }) {
  return <section className="page-head"><div className="wrap page-head-inner"><div><span className="eyebrow"><span />{eyebrow}</span><h1>{title}</h1><p>{text}</p></div>{image && <img src={image} alt="Two bottles of Ravella Ultra Solution Organic Wine" />}</div></section>
}

function SectionLabel({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) { return <span className={`eyebrow ${inverse ? 'eyebrow-inverse' : ''}`}><span />{children}</span> }

function SiteImage({ src, alt, className = '', loading = 'lazy' }: { src: string; alt: string; className?: string; loading?: 'eager' | 'lazy' }) { return <img className={className} src={src} alt={alt} loading={loading} /> }

function DeliveryInformation() {
  return <section className="delivery-information section-pad"><div className="wrap delivery-information-grid"><div><SectionLabel>ORDERING & DELIVERY</SectionLabel><h2>Check the details <em>before you order.</em></h2><p>Ravella advertises delivery across all Nigerian states and international shipping enquiries for Cameroon, Ghana, Benin Republic, the USA, UK, Canada and other destinations.</p></div><div className="delivery-checklist"><p>Message the team to confirm your product or package, current price and availability, delivery destination, fee and estimated timeline, accepted payment methods, and return terms before paying.</p><Button href={waPrimary} variant="gold">Ask about delivery</Button></div></div></section>
}

function Values() {
  const cards = [
    { icon: <Leaf />, number: '01', title: 'Rooted in nature', desc: 'The product information lists Noni roots, Neem, Senna alata, Papaya and alkaline water.' },
    { icon: <Heart />, number: '02', title: 'Made to be shared', desc: 'The product packaging describes Ravella as sugar-free and non-alcoholic.' },
    { icon: <Sparkles />, number: '03', title: 'Room to grow', desc: 'An invitation to build connections and explore direct selling at your pace.' },
    { icon: <Globe2 />, number: '04', title: 'Closer than you think', desc: 'Based in Nigeria, with a community-minded outlook and international reach.' },
  ]
  return <div className="values-grid">{cards.map(c => <article key={c.number} className="value-card"><div className="value-card-top"><span className="value-icon">{c.icon}</span><span>{c.number}</span></div><h3>{c.title}</h3><p>{c.desc}</p></article>)}</div>
}

function ProductVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`product-visual ${compact ? 'product-visual-compact' : ''}`}><span className="visual-orbit orbit-one" /><span className="visual-orbit orbit-two" /><SiteImage className="bottle-image" src={bottle} alt="Two 750 ml bottles of Ravella Ultra Solution Organic Wine" /><div className="visual-caption"><span>THE DAILY RITUAL</span><span>750 ML · NON-ALCOHOLIC</span></div></div>
}

function ProductSection({ onAdd }: { onAdd: () => void }) {
  return <section className="product-section section-pad"><div className="wrap product-split"><div className="product-copy"><SectionLabel>A LITTLE MORE RAVELLA</SectionLabel><h2>Make room for a <em>better ritual.</em></h2><p className="lead">Meet Ravella Ultra Solution Organic Wine, a 750 ml herbal drink. See the listed ingredients and package options, then message the team to confirm details before ordering.</p><div className="product-notes"><div><span><Check size={15} /></span><p>Ingredients listed: Noni roots, Neem, Senna alata, Papaya and alkaline water</p></div><div><span><Check size={15} /></span><p>Listed as sugar-free and non-alcoholic</p></div><div><span><Check size={15} /></span><p>NAFDAC Reg. No. A7 103154L (as listed by Ravella)</p></div></div><div className="price-row"><div><small>RUBY PACKAGE · 2 BOTTLES</small><strong>₦30,000</strong></div><Button to="/products">See package details</Button></div><button className="text-action" onClick={onAdd}><Plus size={15} /> Add Ruby package to order</button></div></div></section>
}

function OpportunityBand() {
  return <section className="opportunity-band"><div className="wrap opportunity-inner"><div><SectionLabel inverse>MORE THAN A PRODUCT</SectionLabel><h2>Curious about <em>the opportunity?</em></h2><p>Ravella offers a direct-selling opportunity. Ask the team for the current written plan, eligibility rules, costs and commission terms before deciding whether to join.</p></div><div className="opportunity-action"><Button variant="light" to="/become-a-distributor">Explore the opportunity</Button><span className="fine-print">Income is not guaranteed. Review the written terms before joining.</span></div></div></section>
}

function ClosingBand() {
  return <section className="closing-band"><div className="wrap closing-inner"><span className="closing-stamp"><Leaf size={25} /><span>GROW<br />TOGETHER</span></span><div><SectionLabel>YOUR NEXT CHAPTER CAN START SMALL</SectionLabel><h2>Start your wellness <em>& wealth journey.</em></h2></div><Button to="/contact" variant="gold">Let’s talk</Button></div></section>
}

function Home({ onAdd }: { onAdd: () => void }) {
  useMeta('Ravella Ultra Solution | Organic Wine', 'Explore Ravella Ultra Solution Organic Wine, see product and package information, and contact the team on WhatsApp to confirm an order.')
  return <Shell><main>
    <section className="hero"><div className="hero-grain" /><div className="wrap hero-inner"><div className="hero-copy"><span className="eyebrow"><span />RAVELLA ULTRA SOLUTION</span><h1>Organic Wine, <em>made to share.</em></h1><p>Discover the Ravella Ultra Solution herbal drink. Review the product details and message the team to confirm current availability, pricing and delivery.</p><div className="hero-buttons"><Button to="/products">View product & packages</Button><Button href={whatsappUrl('Hello, I would like to ask about ordering Ravella Ultra Solution Organic Wine.')} variant="outline">Order on WhatsApp</Button></div></div></div><a className="scroll-cue" href="#our-values"><span>SCROLL TO DISCOVER</span><ArrowDown size={13} /></a><div className="hero-bottomline"><span>RAVELLA ULTRA SOLUTION</span><span>NIGERIA-WIDE DELIVERY · INTERNATIONAL ENQUIRIES</span></div></section>
    <section id="our-values" className="values-section section-pad"><div className="wrap"><div className="section-intro split-intro"><div><SectionLabel>THE RAVELLA POINT OF VIEW</SectionLabel><h2>A thoughtful product.<br /><em>A conversation away.</em></h2></div><p>Explore product information, check listed package options and contact the team for current availability, delivery and payment details.</p></div><Values /></div></section>
    <ProductSection onAdd={onAdd} />
    <DeliveryInformation />
    <section className="press-note"><div className="wrap press-inner"><span className="press-star">✳</span><div><span className="eyebrow">A NEW CHAPTER, ROOTED IN IMO STATE</span><h2>A shared vision for wellness <em>& entrepreneurship.</em></h2></div><p>Learn about the Ravella story and the direct-selling opportunity, including the current written terms.</p><Link to="/about" className="round-link" aria-label="Read our story"><ArrowUpRight /></Link></div></section><OpportunityBand /><ClosingBand />
  </main></Shell>
}

const registrationPackages = [
  { name: 'Ruby', bottles: '2 big bottles', price: '₦30,000' },
  { name: 'Heritage', bottles: '4 bottles', price: '₦59,000' },
  { name: 'Prestige', bottles: '9 bottles', price: '₦130,500' },
  { name: 'Royal', bottles: '19 bottles', price: '₦270,000' },
  { name: 'Imperial', bottles: '35 bottles', price: '₦480,000' },
  { name: 'Crown Jewel', bottles: '51 big bottles', price: '₦690,000' },
  { name: 'Supreme', bottles: '115 bottles', price: '₦1,500,000' },
]

function Products({ onAdd }: { onAdd: () => void }) {
  useMeta('Our Product | Ravella Ultra Solution', 'Product details, listed ingredients and package prices for Ravella Ultra Solution Organic Wine. Contact Ravella to confirm current stock and delivery.')
  return <Shell><main>
    <PageHead eyebrow="THE RAVELLA RITUAL" title={<>Meet Ravella <em>Organic Wine.</em></>} text="Explore the 750 ml herbal drink, listed ingredients and available package options. Confirm current stock and order details with the Ravella team." image={bottle} />
    <section className="product-detail section-pad"><div className="wrap detail-grid">
      <div className="detail-image"><ProductVisual /></div>
      <div className="detail-info">
        <SectionLabel>750 ML BOTTLE</SectionLabel><h2>Ravella Ultra Solution <em>Organic Wine</em></h2>
        <p className="lead">A herbal drink made with the ingredients listed below. Product descriptions and label details are provided for general information; refer to the packaging or ask Ravella for current product information.</p>
        <div className="detail-chips"><span><Check /> Listed as sugar-free</span><span><Check /> Listed as non-alcoholic</span><span><Check /> Plant-based ingredients</span></div>
        <div className="ingredient-box"><h3>Listed ingredients</h3><p>Noni roots · Neem · Senna alata · Papaya · Alkaline water</p></div>
        <p className="registration"><ShieldCheck size={16} /> NAFDAC Reg. No. A7 103154L (as listed on the product)</p>
        <div className="official-packages"><div className="package-heading"><h3>Listed packages</h3><span>Confirm current prices with Ravella</span></div><div className="official-package-grid">{registrationPackages.map(pkg => <article key={pkg.name} className={pkg.name === 'Ruby' ? 'official-package featured-package' : 'official-package'}><span>{pkg.name.toUpperCase()} PACKAGE</span><strong>{pkg.price}</strong><small>{pkg.bottles}</small></article>)}</div><p className="small-note">Prices and package contents shown as listed in the available product information. Confirm current price, stock and delivery charges before paying.</p></div>
        <div className="detail-actions"><Button href={whatsappUrl('Hello, I would like to order the Ruby package (2 bottles). Please confirm current availability, price, delivery fee and payment options.')} variant="gold">Order Ruby on WhatsApp</Button><Button variant="outline" onClick={onAdd}><ShoppingBag size={15} /> Add Ruby package to order</Button></div>
        <span className="delivery-note"><Package size={14} /> Delivery across Nigeria · International destinations by enquiry</span>
      </div>
    </div></section>
    <DeliveryInformation />
    <section className="ingredients-section section-pad"><div className="wrap ingredient-layout"><div><SectionLabel>PRODUCT INFORMATION</SectionLabel><h2>Read the label <em>for the details.</em></h2><p>The product label lists Noni roots, Neem, Senna alata, Papaya and alkaline water. Check the packaging for full ingredient, usage, storage, allergen and labelling information.</p><p className="small-note">This website does not make medical treatment or cure claims. Ask a qualified health professional if you have questions about whether a food or drink is suitable for you.</p></div><div className="ingredient-list">{['Noni roots', 'Neem', 'Senna alata', 'Papaya', 'Alkaline water'].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong><Leaf size={17} /></div>)}</div></div></section>
    <section className="extra-products section-pad"><div className="wrap"><div className="section-intro centered"><SectionLabel>NEED MORE INFORMATION?</SectionLabel><h2>Ask us before <em>you decide.</em></h2></div><div className="extra-grid"><article><span><MessageCircle /></span><h3>Product and delivery questions</h3><p>Ask the team to confirm current price, availability, delivery options and payment details.</p><Button href={whatsappUrl('Hello, I have a question about Ravella product availability, pricing or delivery.')} variant="outline">Ask on WhatsApp</Button></article><article><span><Sparkles /></span><h3>Distributor opportunity</h3><p>Request the current written plan, costs, eligibility and commission terms before joining.</p><Button to="/become-a-distributor">Explore the opportunity</Button></article></div></div></section>
    <ClosingBand />
  </main></Shell>
}

const faqs = [
  ['Is income guaranteed?', 'No. Income is not guaranteed. Ask Ravella for the current written compensation plan and review its costs, eligibility requirements and terms before joining.'],
  ['What costs and qualifications apply?', 'These depend on the current distributor plan. Contact Ravella for the complete written terms before you make a decision.'],
  ['Can I join from outside Nigeria?', 'International availability and eligibility may vary. Ask the team to confirm the rules for your country.'],
  ['How can I learn more?', 'Message Ravella on WhatsApp and request the current written distributor plan, including any fees and qualification requirements.'],
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return <div className="faq-list">{faqs.map(([question, answer], i) => <article className={`faq-item ${open === i ? 'faq-open' : ''}`} key={question}><button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span className="faq-number">0{i + 1}</span><strong>{question}</strong><span className="faq-toggle">{open === i ? <Minus size={16} /> : <Plus size={16} />}</span></button>{open === i && <p>{answer}</p>}</article>)}</div>
}

function ContactForm() {
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const values = new FormData(e.currentTarget)
    const message = [
      'Hello Ravella, I have an enquiry.',
      `Name: ${values.get('name')}`,
      `Reply to: ${values.get('contact')}`,
      `Topic: ${values.get('topic')}`,
      `Message: ${values.get('message')}`,
    ].join('\n')
    window.location.assign(whatsappUrl(message))
  }

  return <form className="contact-form" onSubmit={submit}><div className="form-heading"><span className="eyebrow">WE’RE A MESSAGE AWAY</span><h2>Let’s start a <em>conversation.</em></h2><p>Complete the form and we’ll open a WhatsApp message addressed to the Ravella team. You’ll review and send it in WhatsApp.</p></div><label>Your name<input name="name" placeholder="e.g. Amara Okeke" autoComplete="name" required /></label><div className="form-row"><label>Email or phone<input name="contact" placeholder="Where can we reach you?" autoComplete="email" required /></label><label>I’m reaching out about<select name="topic" defaultValue="" required><option value="" disabled>Choose a topic</option><option>The product</option><option>Becoming a distributor</option><option>Shipping & delivery</option><option>Something else</option></select></label></div><label>Your message<textarea name="message" placeholder="A little detail helps us help you…" rows={4} required /></label><button type="submit" className="button button-dark">Continue to WhatsApp <ArrowUpRight size={15} /></button></form>
}

function Distributor() {
  useMeta('Distributor Opportunity | Ravella Ultra Solution', 'Learn about sharing Ravella, joining a community and exploring a flexible direct-selling opportunity. Get the current plan from our team.')
  return <Shell><main>
    <PageHead eyebrow="A COMMUNITY WITH ROOM TO GROW" title={<>Explore the <em>opportunity.</em></>} text="Ravella has a direct-selling opportunity. Ask the team for current information and written terms before deciding whether it is right for you." />
    <section className="opportunity-intro section-pad"><div className="wrap opp-intro-grid"><div><SectionLabel>GET THE DETAILS FIRST</SectionLabel><h2>Start with <em>clear information.</em></h2></div><div><p className="lead">Request the current written distributor plan before registering or paying any fees.</p><p>Review how commissions are calculated, what costs and qualifications apply, and any refund or cancellation terms. Income is not guaranteed and results vary.</p><Button href={whatsappUrl('Hello, I am interested in the Ravella distributor opportunity. Please send me the current written plan, including costs, eligibility, commission and cancellation or refund terms.')}>Request the written plan</Button></div></div></section>
    <section className="faq-section section-pad"><div className="wrap faq-layout"><div><SectionLabel>INFORMATION BEFORE COMMITMENT</SectionLabel><h2>Questions to ask <em>before you join.</em></h2><p>Ask for the current written terms and take time to review them.</p><a className="inline-link" href={waPrimary} target="_blank" rel="noreferrer">Contact Ravella on WhatsApp <ArrowUpRight size={15} /></a></div><FAQ /></div></section>
    <ClosingBand />
  </main></Shell>
}

function About() {
  useMeta('Our Story | Ravella Ultra Solution', 'Meet Ravella Ultra Solution, a Nigerian community connecting everyday herbal wellness with opportunity, empowerment and care.')
  return <Shell><main>
    <PageHead eyebrow="A STORY STILL GROWING" title={<>Ravella Ultra <em>Solution.</em></>} text="A Nigerian brand offering Ravella Ultra Solution Organic Wine and a direct-selling opportunity. Learn about the product, then speak with the team for current details." />
    <section className="story-section section-pad"><div className="wrap story-grid"><div className="story-image"><SiteImage src={bottle} alt="Two bottles of Ravella Ultra Solution Organic Wine" loading="eager" /><span>RAVELLA ULTRA SOLUTION · 750 ML</span></div><div className="story-copy"><SectionLabel>THE PRODUCT</SectionLabel><h2>A product and an <em>opportunity to enquire.</em></h2><p className="lead">Ravella Ultra Solution Organic Wine is a 750 ml herbal drink. The available product information lists Noni roots, Neem, Senna alata, Papaya and alkaline water.</p><p>For full ingredient, usage, storage and labelling information, refer to the packaging. For availability, delivery and current terms, contact Ravella directly.</p><Button to="/products">View product details</Button></div></div></section>
    <section className="quality-section"><div className="wrap quality-inner"><span className="quality-icon"><ShieldCheck /></span><div><SectionLabel>BEFORE YOU DECIDE</SectionLabel><h2>Clear details <em>matter.</em></h2><p>Ask the team to confirm product information, package pricing, delivery fees and timelines, payment methods, and any distributor plan terms before you order or register.</p></div><Button href={whatsappUrl('Hello, I would like more information about Ravella Ultra Solution.') } variant="outline">Message Ravella</Button></div></section>
    <ClosingBand />
  </main></Shell>
}

function Contact() {
  useMeta('Contact Ravella | Ravella Ultra Solution', 'Contact Ravella Ultra Solution with questions about our product, distributor opportunity or delivery within Nigeria and internationally.')
  return <Shell><main>
    <PageHead eyebrow="CONTACT & ORDERS" title={<>Talk to the <em>Ravella team.</em></>} text="Use the form to prepare a WhatsApp enquiry, or message Ravella directly to ask about the product, ordering or delivery." />
    <section className="contact-section section-pad"><div className="wrap contact-layout"><div className="contact-info"><SectionLabel>OFFICIAL ORDER ENQUIRIES</SectionLabel><h2>Message us <em>on WhatsApp.</em></h2><p>Send product, package, distributor or delivery questions directly to the WhatsApp number linked from Ravella’s published order page.</p><a className="contact-method" href={whatsappUrl('Hello, I have a question about Ravella Ultra Solution.')} target="_blank" rel="noreferrer"><span><MessageCircle /></span><div><small>ORDER & CUSTOMER ENQUIRIES</small><strong>+234 912 718 9648</strong></div><ArrowUpRight /></a><p className="small-note">Your order is not confirmed until the team confirms availability, final price, delivery charges and payment instructions.</p></div><ContactForm /></div></section>
    <DeliveryInformation />
    <ClosingBand />
  </main></Shell>
}

function useMeta(title: string, description: string) {
  useEffect(() => { document.title = title; let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]'); if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }; tag.content = description; const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]'); if (ogTitle) ogTitle.content = title; const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]'); if (ogDesc) ogDesc.content = description }, [title, description])
}

function NotFound() { return <Shell><main className="not-found"><SectionLabel>NOT QUITE OUR PAGE</SectionLabel><h1>Let’s get you <em>back on track.</em></h1><Button to="/">Return home</Button></main></Shell> }

function App() {
  const [bagOpen, setBagOpen] = useState(false)
  const [added, setAdded] = useState(0)
  const [toast, setToast] = useState(false)
  const drawerRef = useRef<HTMLElement | null>(null)
  function addToBag() { setAdded(count => count + 1); setToast(true); window.setTimeout(() => setToast(false), 2800) }
  const orderMessage = `Hello, I would like to enquire about ${added} Ruby package${added === 1 ? '' : 's'} (${added * 2} bottles). The listed price is ₦30,000 per package. Please confirm current availability, price, delivery fee and estimated delivery time, and accepted payment methods.`

  useEffect(() => {
    if (!bagOpen) return
    const previousFocus = document.activeElement
    const drawer = drawerRef.current
    const closeButton = drawer?.querySelector<HTMLButtonElement>('button[aria-label="Close order enquiry"]')
    closeButton?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setBagOpen(false)
        return
      }
      if (event.key !== 'Tab' || !drawer) return
      const focusable = drawer.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [bagOpen])

  return <>
    <Routes>
      <Route path="/" element={<Home onAdd={addToBag} />} />
      <Route path="/products" element={<Products onAdd={addToBag} />} />
      <Route path="/become-a-distributor" element={<Distributor />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <button type="button" className="bag-fab" onClick={() => setBagOpen(true)} aria-label={`Open order enquiry, ${added} Ruby packages`}>
      <ShoppingBag size={17} />{added > 0 && <span>{added}</span>}
    </button>
    {toast && <div className="toast" role="status"><Check size={16} /> Added to your order enquiry <button type="button" onClick={() => setBagOpen(true)}>Review</button></div>}
    {bagOpen && <div className="drawer-backdrop" onClick={() => setBagOpen(false)}>
      <aside ref={drawerRef} className="bag-drawer" role="dialog" aria-modal="true" aria-labelledby="order-drawer-title" onClick={e => e.stopPropagation()}>
        <div className="drawer-head"><div><span className="eyebrow">WHATSAPP ORDER ENQUIRY</span><h2 id="order-drawer-title">Your order <span>({added})</span></h2></div><button type="button" onClick={() => setBagOpen(false)} aria-label="Close order enquiry"><X /></button></div>
        {added === 0
          ? <div className="empty-bag"><span><ShoppingBag /></span><h3>Your order list is empty.</h3><p>Add a Ruby package to prepare an order enquiry for WhatsApp.</p><Button to="/products" variant="outline" onClick={() => setBagOpen(false)}>View packages</Button></div>
          : <><div className="bag-item"><SiteImage src={bottle} alt="Two bottles of Ravella Ultra Solution Organic Wine" /><div><span>RUBY PACKAGE · 2 BOTTLES</span><strong>Ravella Organic Wine</strong><small>Listed price: ₦30,000 per package</small><div className="quantity-row"><button type="button" aria-label="Remove one Ruby package" onClick={() => setAdded(v => Math.max(0, v - 1))}><Minus size={13} /></button><span aria-live="polite">{added}</span><button type="button" aria-label="Add one Ruby package" onClick={() => setAdded(v => v + 1)}><Plus size={13} /></button></div></div></div><div className="bag-total"><span>Estimated total at listed price</span><strong>₦{(added * 30000).toLocaleString('en-NG')}</strong></div><p className="bag-notice">This is an enquiry, not a confirmed order. Ravella will confirm current availability, final price, delivery and payment details.</p><Button href={whatsappUrl(orderMessage)} variant="gold" className="bag-checkout">Send order enquiry on WhatsApp</Button></>}
        <span className="drawer-footnote"><ShieldCheck size={13} /> No payment is taken on this website.</span>
      </aside>
    </div>}
  </>
}

export default App
