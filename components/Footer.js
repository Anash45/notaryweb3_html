import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="footer-top pb-5">
          <div className="row">
            <div className="col-lg-3 mb-md-0 mb-3 col-md-4 text-md-left text-center">
              <img src="/assets/images/logo-black.svg" alt="Logo" height={40} />
            </div>
            <div className="col-lg-2 mb-md-0 mb-3 col-md-4 text-md-left text-center">
              <h5 className="f-title mb-2">Resources</h5>
              <ul className="p-0">
                <li className="py-2">
                  <a href="#">Merchandise</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 mb-md-0 mb-3 col-md-4 text-md-left text-center">
              <h5 className="f-title mb-2">Company</h5>
              <ul className="p-0">
                <li className="py-2">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="py-2">
                  <a href="#">Refer Friend</a>
                </li>
                <li className="py-2">
                  <a href="#">Affiliates</a>
                </li>
                <li className="py-2">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 mb-md-0 mb-3 col-md-4 text-md-left text-center">
              <h5 className="f-title mb-2">Learn &amp; Build</h5>
              <ul className="p-0">
                <li className="py-2">
                  <a href="#">Help Center</a>
                </li>
                <li className="py-2">
                  <a href="#">Learning Hub</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-md-0 mb-3 col-md-8 text-md-left text-center">
              <h5 className="f-title mb-2">Get the latest updates</h5>
              <form className="row inline-form mt-4 mx-0">
                <div className="col-9 p-0">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-0"
                    placeholder="Search for your name"
                  />
                </div>
                <div className="col-3 p-0">
                  <button
                    type="submit"
                    className="btn btn-secondary btn-block btn-sm rounded-0"
                  >
                    Search
                  </button>
                </div>
              </form>
              <p className="mt-3 p-0 note  text-md-left text-center">
                {" "}
                Once a week. No spam, ever.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="f-line" />
        <div className="sub-footer pt-4">
          <div className="d-flex justify-content-between align-items-center flex-lg-row flex-column-reverse">
            <div className="d-flex align-items-center mt-lg-0 mt-4 flex-sm-row flex-column align-items-center">
              <a className="pr-3 py-3">© Notary Ventures LLC</a>
              <a className="px-3 py-3"> All rights reserved</a>
              <div className="dropdown">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  id="dropdownMenua"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  English{" "}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenua">
                  <a className="dropdown-item" href="#">
                    Link 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Link 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Link 3
                  </a>
                </div>
              </div>
              <Link href="/terms" className="px-3 py-3">
                Terms
              </Link>
              <Link href="/privacy-policy" className="px-3 py-3">
                Privacy Policy
              </Link>
            </div>
            <div className="text-right social-links d-flex align-items-center">
              <a href="#">
                <img src="/assets/images/tiktok.svg" alt="Social Icon" />
              </a>
              <a href="#">
                <img src="/assets/images/youtube.svg" alt="Social Icon" />
              </a>
              <a href="#">
                <img src="/assets/images/fb.svg" alt="Social Icon" />
              </a>
              <a href="#">
                <img src="/assets/images/insta.svg" alt="Social Icon" />
              </a>
              <a href="#">
                <img src="/assets/images/twitter.svg" alt="Social Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
