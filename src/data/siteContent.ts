export const siteContent = {
  name: 'Joel Gage',
  tagline: 'Guitar • Vocals • Private Lessons',
  emails: { booking: 'booking@joelgage.com', lessons: 'lessons@joelgage.com', general: 'joel@joelgage.com' },
  bio: {
    short: 'Joel Gage is a versatile guitarist, vocalist, and educator whose work spans live performance, international touring, session recording, and private instruction. Equally at home playing jazz, country, pop, rock, and beyond, he brings thoughtful musicianship, careful preparation, and a genuine presence to every setting.',
    long: 'Throughout his career, Joel has performed around the world, playing with or opening for artists including Charles Esten, Michael McDonald, Tigirlily, Gwen Sebastian, Jeff Coffin, Sam Hunt, Danika Portz, Denver and the Mile High Orchestra, Shannon LaBrie, Skylar Gregg, Willie Shaw, and many others. Whether performing for an intimate gathering, supporting an artist onstage or in the studio, or helping a student discover their own musical voice, Joel approaches every opportunity with versatility, professionalism, and a genuine desire to connect through music.',
  },
  eventServices: ['Private parties', 'Corporate events', 'Weddings & receptions', 'Venues', 'Special events'],
  lessons: ['Fretboard Mastery', 'Musicianship', 'Improvisation', 'Performance coaching', 'Music theory'],
  videos: [
    {
      title: 'Joel Gage — featured live performance',
      url: 'https://www.youtube.com/watch?v=z9Ty7Aj1KKc',
      embedUrl: 'https://www.youtube-nocookie.com/embed/z9Ty7Aj1KKc',
    },
    {
      title: 'Joel Gage — live performance',
      url: 'https://youtu.be/AVGINBeeA3o',
      embedUrl: 'https://www.youtube-nocookie.com/embed/AVGINBeeA3o',
    },
    {
      title: 'Joel Gage — live performance',
      url: 'https://youtu.be/rWmI8te07CQ',
      embedUrl: 'https://www.youtube-nocookie.com/embed/rWmI8te07CQ',
    },
  ],
  photos: ['Live performance', 'Acoustic set', 'Event performance', 'Portrait'],
  testimonials: [
    { quote: 'Joel created exactly the atmosphere we wanted and was a pleasure to work with.', by: 'Private event client' },
    { quote: 'Lessons are practical, encouraging, and always connected to the music I want to play.', by: 'Private student' },
  ],
  epk: {
    headline: 'Live music with warmth, versatility, and a professional touch.',
    performanceOptions: ['Solo guitar & vocals', 'Custom full band sets', 'Instrumental background music'],
    downloadUrl: '',
  },
} as const

export const mailto = {
  booking: `mailto:${siteContent.emails.booking}?subject=Private%20Event%20Inquiry`,
  lessons: `mailto:${siteContent.emails.lessons}?subject=Private%20Lesson%20Inquiry`,
  epk: `mailto:${siteContent.emails.booking}?subject=EPK%20Booking%20Inquiry`,
}
