import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello, World!</h1>
    <p>Everybody knows the FCC JAMstack Hackathon is gonna be the coolest thing since sliced bread.</p>
    <p>I'm Kyran. I'm less than a year into coding, but I'm in my third month at Lambda School. I'm a career switcher, and I feel like I've finally found my professional home in coding. </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
