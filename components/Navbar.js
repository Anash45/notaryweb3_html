import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo on the left */}
        <a className="navbar-brand" href="#">
          <img src="/assets/images/logo-white.svg" alt="Logo" height={40} />
        </a>
        {/* Navbar Toggler Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="/assets/images/menu.png" alt="Menu" height={30} />
        </button>
        {/* Centered menu */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
            <li className=" d-lg-none d-block pt-3">
              {/* Button on the right */}
              <div className="navbar-collapse justify-content-end">
                <a href="#" className="btn btn-nav text-white">
                  Sign Up/Log In
                </a>
                <a href="#" className="mx-3">
                  <img
                    src="/assets/images/heart.svg"
                    alt="H Icons"
                    height={22}
                  />
                </a>
                <Link href="/cart" className="mx-3">
                  <img
                    src="/assets/images/cart.svg"
                    alt="H Icons"
                    height={22}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </div>
        {/* Button on the right */}
        <div className="d-lg-block d-none">
          <a href="#" className="btn btn-nav text-white">
            Sign Up/Log In
          </a>
          <a href="#" className="mx-3">
            <img src="/assets/images/heart.svg" alt="H Icons" height={22} />
          </a>
          <Link href="/cart" className="mx-3">
            <img src="/assets/images/cart.svg" alt="H Icons" height={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
