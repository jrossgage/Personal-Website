import { mailto, siteContent } from '../data/siteContent'
export function ContactCTA() { return <section id="contact" className="contact"><h2>Booking & Contact</h2><div className="actions"><a className="button light" href={mailto.booking}>Book an Event</a><a className="button outline" href={mailto.lessons}>Ask About Lessons</a></div></section> }
