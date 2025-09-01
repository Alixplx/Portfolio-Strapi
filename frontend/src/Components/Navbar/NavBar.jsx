
const NavBar = () => {
    
    const scrollHero = () => {

        const element = document.getElementById("heroSection")
        element?.scrollIntoView()
    }

    const scrollMain = () => {

        const element = document.getElementById("mainSection")
        element?.scrollIntoView()
    }

    const scrollContact = () => {

        const element = document.getElementById("mainContact")
        element?.scrollIntoView()
    }

    return (
        
        <nav>

            <ul>

                <li> <a onClick={scrollHero}>Home</a> </li>
                <li> <a onClick={scrollMain}>Projects</a> </li>
                <li> <a onClick={scrollContact}>Contact Us</a> </li>
            </ul>
        </nav>
    )
}

export default NavBar