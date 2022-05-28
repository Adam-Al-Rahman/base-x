import type { NextPage } from 'next';
import Link from "next/link";


const Footer: NextPage = () => {

    // NOTE: three different function iconGitHub, iconOpenSource, iconTwitter because the occurrence of References error in onMouseOver
    const iconGitHub = () => {
        (document.getElementById("iconTextLabel") as HTMLElement).innerHTML = "Adam-Al-Rahman";
        (document.getElementById("iconTextLabel") as HTMLElement).style.visibility = "visible";
    };

    const iconOpenSource = () => {
        (document.getElementById("iconTextLabel") as HTMLElement).innerHTML = "Open Source";
        (document.getElementById("iconTextLabel") as HTMLElement).style.visibility = "visible";
    };

    const iconTwitter = () => {
        (document.getElementById("iconTextLabel") as HTMLElement).innerHTML = "@AdamAlRahman1";
        (document.getElementById("iconTextLabel") as HTMLElement).style.visibility = "visible";
    };

    const iconTextRemove = () => {
        (document.getElementById("iconTextLabel") as HTMLElement).style.visibility = "hidden";
    }

    return (
        <>
            <footer className="footer sticky top-[100vh] items-center p-4 bg-neutral text-neutral-content rounded-box">
                <div className="items-center grid-flow-col hover:color-secondary">
                    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current text-primary"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p className="font-bold"><span className="lg:hidden">Design & Built by <Link href="https://atiq-ur-rehaman.netlify.app/" ><span className="hover:text-secondary hover:cursor-pointer">Adam Al-Rahman</span></Link><br /></span>Copyright © {new Date().getFullYear()} </p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mr-8 ml-10">
                    <kbd id="iconTextLabel" className="kbd hidden sm:grid" style={{ visibility: "hidden" }} />
                    <a href="https://github.com/Adam-Al-Rahman" target="_blank"><svg id="openSource" onMouseOver={iconOpenSource} onMouseOut={iconTextRemove} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary "><path d="m15.494 24.661-2.81-7.5c-.095-.254-.083-.537.034-.782s.329-.432.586-.518c1.014-.338 1.696-1.287 1.696-2.361 0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5c0 1.074.682 2.023 1.696 2.361.257.086.469.273.586.518s.129.527.034.782l-2.81 7.5-1.873-.702 2.488-6.641c-1.299-.804-2.121-2.236-2.121-3.818 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 1.582-.822 3.014-2.122 3.818l2.488 6.641z" /><path d="m5.975 23.163c-3.742-2.294-5.975-6.28-5.975-10.663 0-6.893 5.607-12.5 12.5-12.5s12.5 5.607 12.5 12.5c0 4.367-2.221 8.346-5.942 10.643l-1.051-1.702c3.127-1.93 4.993-5.273 4.993-8.941 0-5.79-4.71-10.5-10.5-10.5s-10.5 4.71-10.5 10.5c0 3.682 1.877 7.031 5.021 8.958z" /></svg></a>
                    <a href="https://github.com/Adam-Al-Rahman" target="_blank"><svg id="gitHub" onMouseOver={iconGitHub} onMouseOut={iconTextRemove} className="hover:text-primary" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg></a>
                    <a href="https://twitter.com/AdamAlRahman1" target="_blank"><svg id="twitter" onMouseOver={iconTwitter} onMouseOut={iconTextRemove} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary "><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;