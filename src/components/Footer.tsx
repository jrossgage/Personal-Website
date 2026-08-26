import { siteContent } from '../data/siteContent'
export function Footer() { return <footer><span>© {new Date().getFullYear()} {siteContent.name}</span><span>Guitar · Vocals · Education</span></footer> }
