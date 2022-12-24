import { CartWidget } from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div class="divi">
                <h1 class= "nombre">Le Péché</h1>
                <ul class="lista"> 
                    <li>Dulces</li>
                    <li>Salados</li>
                    <li>Veganos</li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
        )
    }
export default NavBar