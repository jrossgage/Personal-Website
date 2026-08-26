import { siteContent } from '../data/siteContent'
export function Testimonials() { return <section id="testimonials"><div className="section-heading"><span>05</span><h2>Kind words</h2></div><div className="quotes">{siteContent.testimonials.map(t=><blockquote key={t.by}>“{t.quote}”<cite>— {t.by}</cite></blockquote>)}</div></section> }
