import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
    return (
        <div>
            <hi>Hello.</hi>
            <h2>I am Justin, a full-stack developer living in beautiful New York.</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </div>
    )
}
