import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello, World!</h1>
    <p>Everybody knows the FCC JAMstack Hackathon is gonna be the coolest thing since sliced bread.</p>
    <p>I'm Kyran. I'm less than a year into <strong>really</strong> learning to code, and I'm in my third month at Lambda School. I'm a career switcher, and I'm having a blast now that I've finally discovered something that challenges me, frustrates me, and brings me the greatest sense of satisfaction I've found in professional development in a long time. </p>
    <p>I probably always knew that my place was somewhere in the STEM world, but my deep love for the humanities won out on my first round of career decisions. I don't regret that for a second, because I developed so many valuable skills on that journey.</p>
    <p>But now I've found a home and a new passion in code, and I can't wait to see where we go together.</p>
    <div style={{ maxWidth: '300px', margin: '0 auto', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <p style={{ textAlign: 'center' }}>This is definitely one of my favorite graphics. Just look at how cool this guy is!</p>
    <Link to="/page-2/">Want to know more about this journey?</Link>
  </Layout>
)

export default IndexPage
