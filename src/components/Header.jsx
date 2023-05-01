import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "@supabase/auth-helpers-react";


export default function Header(props) {
    const user= useUser();
    const [navActive, setNavActive] = useState(false);
    const [navbarClassName, setNavbarClassName] = useState("");

    useEffect(() => {
        let cls =
            "bg-brand-olive p-10 inset-0 md:bg-transparent md:relative md:block md:p-0";
        if (navActive) setNavbarClassName(`${cls} fixed`);
        else setNavbarClassName(`${cls} hidden`);
    }, [navActive]);

    return (
        <>
            <header
                id="headerMain"
                className={`${props.background ?? "bg-brand-olive"} py-3 inset-x-0 fixed z-10 md:py-5`}
            >
                <div className="container mx-auto px-6 2xl:px-0">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <h1 className="cursor-pointer">
                                <img
                                    src="/brand.svg"
                                    alt="Hueney Ruca"
                                    className="w-32 md:w-48"
                                />
                                <span className="sr-only">Hueney Ruca</span>
                            </h1>
                        </Link>

                        <button
                            className="text-white text-2xl leading-none select-none md:hidden"
                            onClick={() => setNavActive(true)}
                        >
                            <i className="ri-menu-3-line"></i>
                        </button>

                        <nav className={navbarClassName}>
                            <div className="pb-3 flex justify-end md:hidden">
                                <button
                                    className="text-white text-3xl leading-none select-none"
                                    onClick={() => setNavActive(false)}
                                >
                                    <i className="ri-close-line"></i>
                                </button>
                            </div>

                            <ul
                                className="text-white text-lg font-semibold
															grid gap-y-6 md:flex md:gap-x-7"
                            >
                                <li className="select-none">
                                    <Link href="/cabanas">Cabañas</Link>
                                </li>

                                <li className="select-none">
                                    <Link href="/servicios">Servicios</Link>
                                </li>

                                <li className="select-none relative">
                                    <div>Nosotros</div>
                                    <ul className="text-base absolute bg-brand-brown rounded shadow-md p-2 transition-opacity opacity-0">
                                        <li className="hover:bg-brand-olive transition-colors p-1 rounded">
                                            <Link href="/nosotros">
                                                About
                                            </Link>
                                        </li>
                                        <li className="hover:bg-brand-olive transition-colors p-1 rounded">
                                            <Link href="/comentarios">
                                                Reviews
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="select-none">
                                    <Link href="/contacto">Contacto</Link>
                                </li>

                                <li className="select-none relative">
                                    <div>Ayuda</div>
                                    <ul className="text-base absolute bg-brand-brown rounded shadow-md p-2 transition-opacity opacity-0">
                                        <li className="hover:bg-brand-olive transition-colors p-1 rounded">
                                            <Link href="/faqs">
                                                FAQs
                                            </Link>
                                        </li>
                                        <li className="hover:bg-brand-olive transition-colors p-1 rounded">
                                            <Link href="/actividades">
                                                Actividades
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="select-none relative">
                                    <Link href="/login">Log In</Link>
                                </li>
                                
                                <style jsx>{`
                                        .select-none:hover .absolute {
                                            opacity: 1;
                                        }
                                    `}</style>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <div role="header-spacer" className="h-[57px] md:h-[90px]"></div>
        </>
    );
}
