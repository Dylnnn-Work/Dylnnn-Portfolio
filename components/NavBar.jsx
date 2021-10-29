import Link from "next/dist/client/link";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link " href="/"><a className="nav-link"> Profile</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/#Projects"><a className="nav-link"> Projects</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/#Hire"><a className="nav-link">Hire</a></Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default NavBar;

