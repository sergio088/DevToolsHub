export default function Nav() {
    const menu:string = 'flex justify-between text-[#EEEEEE] p-5 bg-[#404040] m-3 rounded-3xl duration-300 hover:shadow-xl hover:shadow-[#0a0a0a5e]'
    const titleHUB:string = 'text-[1.18rem]'
    const navLOG:string = 'flex flex-row flex-nowrap justify-end items-center gap-4'
    const spHUB:string = 'text-[#7b45fa]'
    const lnk:string = 'bg-transparent text-white text-lg duration-400 hover:bg-neutral-500 p-2 rounded-lg hover:cursor-pointer'
    const navSB:string = 'text-lg'
    //const spNAV

    return (
        <menu className={menu}>
            <nav className={navLOG}>
                <h1 className={titleHUB}>DevTools<span className={spHUB}>Hub</span></h1>
            </nav>
            <nav className={navLOG}>
                <div className={navSB}>
                    <span>Sobre</span>
                </div>
            </nav>
            <nav className={navLOG}>
                <a className={lnk}>Login</a>
                <a className={lnk}>Cadastre-se</a>
            </nav>
        </menu>
    )
}