import { siteContent } from '../data/siteContent'
export function Bio() { return <section id="bio" className="tinted"><div className="section-heading"><span>04</span><h2>About Joel</h2></div><div className="split"><p className="lead">{siteContent.bio.short}</p><p>{siteContent.bio.long}</p></div></section> }
