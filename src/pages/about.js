import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Gatsby</h1>
            <p>I am a full-stack developer.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </div>
    )
}

export default AboutPage