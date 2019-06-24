import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <div>
            <Layout />
            <hi>Hello.</hi>
            <h2>I am Justin, a full-stack developer living in beautiful New York.</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            <Layout />
        </div>
    )
}

export default IndexPage
