import { Footer } from './Footer'
import { mailto, siteContent } from '../data/siteContent'

export function EPKPage() {
    const { epk } = siteContent

    return <>
        <main className="epk">
            <a className="brand" href="/">{siteContent.name}</a>
            <p className="eyebrow">Electronic Press Kit</p>
            <h1>{epk.headline}</h1>

            <section>
                <h2>Featured live video</h2>
                <div className="featured-video">
                    <iframe
                        src={siteContent.videos[0].embedUrl}
                        title={siteContent.videos[0].title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </section>

            <div className="epk-grid">
                <figure className="promo">
                    <img src="/images/joel-guitar-lesson.jpeg" alt="Joel Gage playing electric guitar" />
                </figure>
                <div>
                    <h2>About</h2>
                    <p className="lead">{siteContent.bio.short}</p>
                    <p>{siteContent.bio.long}</p>
                </div>
            </div>


            <figure className="epk-live-photo">
                <img src="/images/joel-guitar-live.jpeg" alt="Joel Gage performing live on electric guitar" />
            </figure>

            <section>
                <h2>Performance options</h2>
                <ul className="service-list">
                    {epk.performanceOptions.map(item => <li key={item}>{item}</li>)}
                </ul>
            </section>
            
            <section className="contact">
                <h2>Booking & contact</h2>
                <p>{siteContent.emails.booking}</p>
                <a className="button light" href={mailto.epk}>Email About Booking</a>
                {epk.downloadUrl && <a className="button outline" href={epk.downloadUrl}>Download EPK</a>}
            </section>
        </main>
        <Footer />
    </>
}
