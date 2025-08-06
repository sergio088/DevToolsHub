export default function Nav() {
    const nav:string = 'flex flex-row flex-nowrap justify-content-between items-center text-[#EEEEEE] p-5 bg-[#404040] m-3 rounded-3xl duration-300 hover:shadow-xl hover:shadow-[#0a0a0a5e]'
    const lnk:string = 'text-white duration-400 hover:text-[#BFBFBF] hover:cursor-pointer'
    function lnkEvent() {
        console.log('GG')
    }

    return (
        <nav className={nav}>
            <a className={lnk} onClick={lnkEvent}>Login</a>
        </nav>
    )
}    