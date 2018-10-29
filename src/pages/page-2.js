import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page!</h1>
    <p>Oh did you want to know more about me?</p>
    <p>Right after college, I went into politics. It was great - it was my way of doing everything I could to create the future that I wanted. It was also exhausting, though, and my type of engagement (fieldwork) meant I had to pick up and move every 7-12 months. It was fun at first, but eventually became exhausting. I decided to come back to California to be closer to family.</p>
    <p>Once I got back home, I started trying to build myself a place in this new situation I found myself in. It took a while, but I finally realized that code was where I needed to be. With endless opportunities for forward progress and the promise of perpetual learning, I have found myself at home in this challenge.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
