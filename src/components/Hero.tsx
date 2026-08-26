import { mailto, siteContent } from '../data/siteContent'

export function Hero() {
    return <section id="top" className="hero">
        <div className="hero-content">
            <div className="eyebrow">Musician · Performer · Educator</div>
            <h1>{siteContent.name}</h1>
            <p className="tagline">{siteContent.tagline}</p>
            <div className="actions">
                <a className="button" href={mailto.booking}>Book an Event</a>
                <a className="button secondary" href={mailto.lessons}>Ask About Lessons</a>
            </div>
        </div>
        <figure className="hero-photo">
            <img src="/images/joel-guitar-live.jpeg" alt="Joel Gage performing live on electric guitar" />
        </figure>
    </section>
}
