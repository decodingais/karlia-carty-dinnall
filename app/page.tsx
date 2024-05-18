import React from 'react';
import Image from 'next/image'
import logo from './images/logo.png'
import phone from './images/phone-solid-circle.png'
import box_overlay from './images/menu/box_overlay.png'
import box_overlay_hover from './images/menu/box_overlay_hover.png'
import profile_photo from './images/karlia-carty-dinnall.png'
import legal_services from './images/probate.jpg'
import family from './images/family.jpg'
import contact_us from './images/contact_us.jpg'
import about_us from './images/about_us.jpg'
import MenuItem from './components/menu-item'

export default function Page() {
    return  <>
                <div className="container hidden lg:block mx-auto w-4/6">
                    <div className='grid grid-cols-2 py-5'>                        
                        <div>
                            <div className='flex flex-row'>
                                <div className='pr-5'>
                                    <Image
                                        src={logo}
                                        alt='Karlia Carty-Dinnall Attorney at law logo'
                                        width={80}
                                    />
                                </div>
                                <div className='basis-3/4 pt-2'>
                                    <h1 className='text-gold lg:text-sm xl:text-xl font-serif'>KARLIA CARTY-DINNALL</h1>
                                    <h2 className='text-accent-grey lg:text-sm xl:text-lg'>Attorney At-Law</h2>
                                </div>   
                                <div className='basis-1/6' > <div className='vl'/></div>
                                                                                    
                            </div>
                        </div>
                        <div>   
                            <div className='grid grid-cols-2'>
                                <div>
                                    <div className='text-gold lg:text-sm xl:text-lg'>Divorce guidance with </div>
                                    <div className='text-accent-grey font-serif lg:text-lg'>expertise and compassion.</div>
                                </div>
                                <div>
                                    <div className='flex flex-row justify-end'>
                                        <div className='px-2'>
                                            <Image
                                                src={phone}
                                                alt='Contact us at 876-546-7382'
                                                width={40}
                                            />
                                        </div>                                    
                                        <div className='lg:text-lg md:text-xs'>
                                            <div className='text-gold'>Phone</div>
                                            <div className='text-accent-grey'>876-546-7382</div>
                                        </div>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                    <hr className='solid'/>
                    <div className='grid grid-cols-5 gap-3 py-6'>
                        <MenuItem 
                            url=''
                            photo={profile_photo}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Karlia Carty-Dinnall profile photo'
                            overlayAltText='Home link'
                            hoverAltText='Hover image for home menu item'
                            linkText='Home'
                            subText='KCD - Legal Services'
                        />
                       
                       <MenuItem 
                            url=''
                            photo={family}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Photo of a happy family that links to the divorce menu item'
                            overlayAltText='Link to divorce information'
                            hoverAltText='Hover image for divorce menu item'
                            linkText='Specializes'
                            subText='In Divorces'
                        />

                        <MenuItem 
                            url=''
                            photo={legal_services}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Photo of a other legal services menu item' 
                            overlayAltText='Hover image for other legal services link'
                            hoverAltText='Hover image for home menu item'
                            linkText='Other'
                            subText='Legal Services'
                        />

                        <MenuItem 
                            url=''
                            photo={about_us}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Karlia Carty-Dinnall profile photo'
                            overlayAltText='Home link'
                            hoverAltText='Hover image for home menu item'
                            linkText='About'
                            subText='Karlia Carty-Dinnall'
                        />

                        <MenuItem 
                            url=''
                            photo={contact_us}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Karlia Carty-Dinnall profile photo'
                            overlayAltText='Home link'
                            hoverAltText='Hover image for home menu item'
                            linkText='Contact'
                            subText='Get in touch'
                        />
                    </div>
                </div>
                <div className='container mx-auto lg:hidden'>
                    <div className='grid'>
                        <div className='flex px-10 pt-8 pb-6'>
                            <div className='pr-5'>
                                <Image
                                    src={logo}
                                    alt='Karlia Carty-Dinnall Attorney at law logo'
                                    width={80}
                                />
                            </div>
                            <div className='basis-3/4 pt-2'>
                                <h1 className='text-gold lg:text-sm xl:text-xl font-serif'>KARLIA CARTY-DINNALL</h1>
                                <h2 className='text-accent-grey lg:text-sm xl:text-lg'>Attorney At-Law</h2>
                            </div>                               
                        </div>
                    </div>
                    <div className='container mx-auto w-5/6'><hr className='solid'/> </div>
                    <div className='columns-2 pt-5'>
                        <div className='text-sm pl-5'>
                            <div className='text-gold lg:text-sm xl:text-lg'>Divorce guidance with </div>
                            <div className='text-accent-grey font-serif lg:text-lg'>expertise and compassion.</div>
                        </div>
                        <div className='flex flex-row justify-end pr-5'>
                            <div className='text-sm '>
                                <div className='text-gold'>Phone</div>
                                <div className='text-accent-grey'>876-546-7382</div>
                            </div>
                        </div>                        
                    </div>
                    <div className='grid grid-flow-col grid-cols-2 gap-4 px-5'>
                        <MenuItem 
                            url=''
                            photo={profile_photo}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Karlia Carty-Dinnall profile photo'
                            overlayAltText='Home link'
                            hoverAltText='Hover image for home menu item'
                            linkText='Home'
                            subText='KCD - Legal Services'
                        />
                        <MenuItem 
                            url=''
                            photo={family}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Photo of a happy family that links to the divorce menu item'
                            overlayAltText='Link to divorce information'
                            hoverAltText='Hover image for divorce menu item'
                            linkText='Specializes'
                            subText='In Divorces'
                        />                        
                    </div>
                    <div className='grid grid-flow-col grid-cols-2 gap-4 px-5 py-5'>
                        <MenuItem 
                            url=''
                            photo={legal_services}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Photo of a other legal services menu item' 
                            overlayAltText='Hover image for other legal services link'
                            hoverAltText='Hover image for home menu item'
                            linkText='Other'
                            subText='Legal Services'
                        />

                        <MenuItem 
                            url=''
                            photo={about_us}
                            overlay={box_overlay}
                            hover={box_overlay_hover}
                            photoAltText='Karlia Carty-Dinnall profile photo'
                            overlayAltText='Home link'
                            hoverAltText='Hover image for home menu item'
                            linkText='About'
                            subText='Karlia Carty-Dinnall'
                        />                    
                    </div>
                </div>
            </>;
}