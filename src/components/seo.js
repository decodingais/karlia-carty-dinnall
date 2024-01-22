import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl, image, instagramUsername } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        image: `${siteUrl}${image}`,
        instagramUsername
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="image" content={seo.image} />
            <meta name="description" content={seo.description} />
            <meta name="instagram:title" content={seo.title} />
            <meta name="instagram:creator" content={seo.instagramUsername} />
            <meta name="author" content={seo.author} />            
            {children}
        </>
    )
}

Seo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.node,
}
