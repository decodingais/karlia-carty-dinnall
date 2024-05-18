import React from 'react';
import Image, { StaticImageData } from 'next/image'
import Link from "next/link";

export default function MenuItem(
                                {
                                    url, photo, 
                                    overlay, hover, 
                                    photoAltText, overlayAltText,
                                    hoverAltText, linkText, subText
                                } : Readonly<{
                                        url: string, photo: StaticImageData, 
                                        overlay: StaticImageData, hover: StaticImageData,
                                        photoAltText: string, overlayAltText: string, 
                                        hoverAltText: string, linkText: string, subText: string
                                }>) {
    return (
        <div className='menu-item'>
            <Link href={url} className='menu-link'>
                <Image
                    src={photo}
                    alt={photoAltText} 
                    className='underlay'
                />
                <Image
                    src={overlay}
                    alt={overlayAltText}
                    className='overlay'
                />
                <Image
                    src={hover}
                    alt={hoverAltText}
                    className='overlay-hover' 
                />
                <div className='menu-text'>
                <div className='text-gold lg:text-lg xl:text-xl text-center pt-5'>{linkText}</div>
                    <div className='text-accent-grey lg:text-xs font-serif text-center pb-5'>{subText}</div> 
                    <hr className='solid'/>
                </div>
            </Link>
        </div>
    );
}