import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout>
        <main>
          <section className="section-bg">
            <div className="container">
              <div className="pb-5 sec-head">
                <h2 className="sec-title pb-4"> Company Statement </h2>
                <p className="text-center">
                  {" "}
                  We are passionate about the power of Web3 technology to
                  revolutionize the internet as we know it. We believe in the
                  principles of decentralization, and our mission is to help
                  individuals and organizations take advantage of this exciting
                  new technology by providing them with the tools they need to
                  thrive in a decentralized digital world.
                </p>
              </div>
              <div className="pb-5 sec-head">
                <h2 className="sec-title pb-4"> About us </h2>
                <p className="text-center">
                  {" "}
                  We are a provider of domain names for Web3. Our team is made
                  up of experts in web3 technology who are committed to helping
                  our clients succeed in this rapidly evolving landscape.
                </p>
                <p className="text-center">
                  {" "}
                  Our domain names are specifically designed to support Web3
                  applications, branding and functionality, making it easy for
                  our clients to build and deploy their own Web3 projects.
                  Whether you&apos;re an individual or organization looking to launch
                  or build a web3 application, we have the expertise and
                  resources to help you succeed.{" "}
                </p>
              </div>
              <div className="pb-5 sec-head">
                <h2 className="sec-title pb-1"> Leadership Team </h2>
                <p className="text-center">
                  <small>Web3 Enthusiasts</small>
                </p>
              </div>
              <div className="row mt-4 justify-content-center flex-md-row flex-column-reverse align-items-center">
                <div className="col-lg-4 col-md-6 col-sm-8 text-center pb-md-0 pb-5">
                  <div className="leader-img">
                    <img src="/assets/images/leader1.png" alt="Leader Image" />
                    <h4 className="l-name pt-2 pb-0"> Heather Lemmon </h4>
                    <p className="mb-3" />
                    <div className="l-title d-inline-block">
                      {" "}
                      CO - FOUNDER <span className="b-yellow d-block" />
                    </div>
                    <p />
                    <div className="l-socials mt-4 d-flex align-items-center justify-content-center">
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-linkedin" />
                      </a>
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8 text-center pb-md-0 pb-4">
                  <div className="leader-img">
                    <img src="/assets/images/leader2.png" alt="Leader Image" />
                    <h4 className="l-name pt-2 pb-0"> DH Leffridge </h4>
                    <p className="mb-3" />
                    <div className="l-title d-inline-block">
                      {" "}
                      CO - FOUNDER <span className="b-yellow d-block" />
                    </div>
                    <p />
                    <div className="l-socials mt-4 d-flex align-items-center justify-content-center">
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-linkedin" />
                      </a>
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="#" className="mx-2">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="cta py-5 d-md-none d-block">
            <div className="container">
              <div className="row py-3 align-items-center">
                <div className="col-md-6 px-5 text-md-left text-center">
                  <h2 className="b-title my-4">So what are you waiting for?</h2>
                  <p>Search for your domain today.</p>
                  <form className="row inline-form">
                    <div className="col-9 p-0">
                      <input
                        type="text"
                        className="form-control rounded-0"
                        placeholder="example.Notary"
                      />
                    </div>
                    <div className="col-3 p-0">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block rounded-0"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 text-center pt-md-0 pt-5">
                  <img
                    src="/assets/images/mac.png"
                    alt="benefits"
                    className="cta-img"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
