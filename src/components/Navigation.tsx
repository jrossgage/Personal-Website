import { siteContent } from '../data/siteContent'
export function Navigation() { return <header className="nav"><a className="brand" href="#top">{siteContent.name}</a><nav aria-label="Main navigation"><a href="#events">Events</a><a href="#lessons">Lessons</a><a href="#media">Media</a><a href="#bio">Bio</a><a href="#contact">Contact</a></nav></header> }
