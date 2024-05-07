"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { CgLayoutGrid } from "react-icons/cg";
import NavbarCustomCss from "../style/NavbarCustomCss.module.css";
import { motion } from 'framer-motion'

import {
    FaFacebook,
    FaFacebookMessenger,
    FaInstagramSquare,
    FaPhone,
    FaTelegram,
    FaYoutube,
} from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/pricing", title: "Pricing" },
    { url: "/contact", title: "Contact" },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgrondColor: "rgb(255,255,255)"
        }
    }
    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgrondColor: "rgb(255,255,255)"
        }
    }
    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }
    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }

    }
    return (<div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        <div className="hidden md:flex items-center gap-4 w-1/3">
            {
                links.map((link, index) => {
                    return (
                        <div  key={index} className={`${link.url === pathname ? "bg-black text-white rounded-md px-4 py-1" : ""}`}>
                            <Link href={link.url}>
                                {link.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        {/* Logo */}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link href="/" className="text-sm bg-white rounded-md font-semibold flex items-center justify-between" >
                <span className="flex justify-center w-full text-black">Mail</span>
                <span className="w-12 h-8 rounded bg-black text-white flex items-center justify-center border border-white">Tym</span>
            </Link>
        </div>

        <div className="md:flex hidden gap-x-6 w-1/3">
            <a href="tel:+8801761043883"><div>
                <span className='flex items-center justify-center mt-1'><FaPhone size={25}></FaPhone></span>
            </div></a>

            {/* Whatsapp */}
            <a target='_blank' href="https://wa.me/message/6CPDT6OUH2SJL1"><div>
                <span className='flex items-center justify-center mt-1'><IoLogoWhatsapp size={25}></IoLogoWhatsapp></span>
            </div></a>

            {/* Facebook */}
            <a target='_blank' href="https://www.facebook.com/beeraw23"><div>
                <span className='flex items-center justify-center mt-1'><FaFacebook size={25}></FaFacebook></span>
            </div></a>

            {/* Messenger */}
            <a target='_blank' href="https://www.messenger.com/t/101277466406447"><div>
                <span className='flex items-center justify-center mt-1'><FaLinkedin size={25}></FaLinkedin></span>
            </div></a>

            <a target='_blank' href="https://www.messenger.com/t/101277466406447"><div>
                <span className='flex items-center justify-center mt-1'><FaGithub size={25}></FaGithub></span>
            </div></a>

        </div>

        <div className="md:hidden lg:hidden sm:hidden flex">
            {/* Menu button */}
            <button onClick={() => setOpen(!open)} className="w-10 h-8 flex flex-col justify-between z-50 relative">
                <motion.div animate={open ? "opened" : "closed"} variants={topVariants} className="w-10 h-1 bg-white rounde origin-left"></motion.div>
                <motion.div animate={open ? "opened" : "closed"} variants={centerVariants} className="w-10 h-1 bg-white rounded"></motion.div>
                <motion.div animate={open ? "opened" : "closed"} variants={bottomVariants} className="w-10 h-1 bg-white rounded origin-left"></motion.div>
            </button>
            {/* Menu list */}
            {
                open && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {
                            links.map((link, index) => {
                                return (
                                    <motion.div key={index} variants={listItemVariants}>
                                        <Link href={link.url} key={index}>
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                )
            }

        </div>

    </div>)
}

export default Navbar;





// <div className="flex justify-between items-center">
//             <div className="flex gap-x-3">
//                 <TheButton>Home</TheButton>
//                 <TheButton>About</TheButton>
//                 <TheButton>Projects</TheButton>
//                 <TheButton>Blogs</TheButton>
//             </div>

//             <div>
//                 <p>Paragraph</p>
//             </div>

//             <div>
//                 <p>The icons</p>
//             </div>
//         </div>