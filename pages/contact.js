import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout>
        <main>
          <section className="section-bg">
            <div className="container">
              <div className="pb-md-5 pb-3 sec-head">
                <h2 className="sec-title pb-4"> Get in Touch </h2>
                <p className="text-center col-lg-8 mx-auto col-md-10">
                  {" "}
                  If you need our help, have questions about how to use the
                  platform or are experiencing technical difficulties, please do
                  not hesitate to contact us.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-10 col-12 mx-auto">
                  <div className="row">
                    <div className="col-md-6 p-lg-5 p-md-4 my-md-0 my-4 py-4 c-form-box">
                      <p className="fw-medium">
                        We are help for you! How can we help you?
                      </p>
                      <form action method="post">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Your Message"
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                        <div className="text-center">
                          <button type="submit" className="w-100 btn btn-brown">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 p-md-0 my-md-0 c-info-box">
                      <div className="c-info-bg p-lg-5 h-100 p-md-4">
                        <p className="text-center text-white mb-4 d-md-block d-none">
                          {" "}
                          Contact our sales and support team{" "}
                        </p>
                        <div className="text-center d-md-none d-block">
                          <img
                            src="/assets/images/contact.png"
                            alt="Contact Us"
                            className="img-fluid"
                          />
                        </div>
                        <div className="mt-md-5 mt-3 d-flex flex-column align-items-center text-white c-links">
                          <a
                            href="#"
                            className="d-flex align-items-center py-3"
                          >
                            <i className="fa fa-map-marker mr-2" /> 6th Avenue,
                            Wall Street, New York
                          </a>
                          <a
                            href="mailto:haveagreatday@gmail.com"
                            className="d-flex align-items-center py-3"
                          >
                            <i className="fa fa-envelope mr-2" />{" "}
                            haveagreatday@gmail.com
                          </a>
                          <a
                            href="tel:+602-216-4143"
                            className="d-flex align-items-center py-3"
                          >
                            <i className="fa fa-phone mr-2" /> 602-216-4143
                          </a>
                        </div>
                      </div>
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
