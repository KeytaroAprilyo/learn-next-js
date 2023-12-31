import Link from "next/link";

export const Navbar = () =>{
    return(
        <div class="nav">
                <ul>
                    <li class="nav-item">
                        <Link href="/">home</Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/about">about</Link>
                    </li>
                    <li class="nav-item">
                        <Link href="/profile">profile</Link>
                    </li>
                </ul>

        </div>
    );
};
export default Navbar;