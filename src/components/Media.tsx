import { siteContent } from '../data/siteContent'

export function Media() {
    const featuredVideo = siteContent.videos[0]

    return <section id="media">
        <div className="section-heading">
            <span>03</span>
            <h2>Watch & listen</h2>
        </div>
        <div className="featured-video">
            <iframe
                src={featuredVideo.embedUrl}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
        <div className="media-row">
            {siteContent.videos.slice(1).map(video =>
                <article className="media-video" key={video.url}>
                    <div className="media-video-frame">
                        <iframe
                            src={video.embedUrl}
                            title={video.title}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <h3>{video.title}</h3>
                </article>
            )}
        </div>
    </section>
}
