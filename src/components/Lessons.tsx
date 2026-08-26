import { mailto, siteContent } from '../data/siteContent'

export function Lessons() {
    return <section id="lessons" className="tinted lessons-section">
        <div className="section-heading">
            <span>02</span>
            <h2>Lessons built around you</h2>
        </div>
        <div className="lessons-layout">
            <figure className="lessons-photo">
                <img
                    src="/images/joel-guitar-lesson.jpeg"
                    alt="Joel Gage playing electric guitar"
                    loading="lazy"
                />
            </figure>
            <div className="lessons-content">
                <p className="lead">Build confidence, sharpen your ear, and make music more freely through practical, personalized instruction. Available in person or virtually.</p>
                <ul className="service-list">
                    {siteContent.lessons.map(item => <li key={item}>{item}</li>)}
                </ul>
                <a className="text-link" href={mailto.lessons}>Ask About Lessons →</a>
            </div>
        </div>
    </section>
}
