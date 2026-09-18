import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Faq() {
  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout>
        <main>
          <section className="section-bg faq">
            <div className="container">
              <div className="pb-3 sec-head">
                <h1 className="sec-title"> FAQ </h1>
                <p className="text-center">
                  {" "}
                  Frequently Asked Questions - we've got you covered! <br />
                  Everything you need to know, all in one place.{" "}
                </p>
              </div>
              <div className="row no-gutters">
                <div className="filtering col-sm-12 text-center mb-5">
                  <div className="filtering-inner d-inline-block py-2 px-md-5 px-2">
                    <span data-filter="*" className="my-md-2 my-1 active pl-0">
                      General
                    </span>
                    <span data-filter=".services" className="my-md-2 my-1 ">
                      Services
                    </span>
                    <span data-filter=".payments" className="my-md-2 my-1 ">
                      Payments
                    </span>
                    <span data-filter=".refund" className="my-md-2 my-1 ">
                      Refund
                    </span>
                    <span data-filter=".contact" className="my-md-2 my-1 pr-0">
                      Contact
                    </span>
                  </div>
                </div>
                <div className="col-12 text-center w-100">
                  <div className="grid form-row gallery text-center">
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item services">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading1">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse1"
                              aria-expanded="false"
                              aria-controls="collapse1"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse"
                          aria-labelledby="heading1"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item services">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading2">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse2"
                              aria-expanded="false"
                              aria-controls="collapse2"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse2"
                          className="collapse"
                          aria-labelledby="heading2"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item services">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading3">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse3"
                              aria-expanded="false"
                              aria-controls="collapse3"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="heading3"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item contact">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading4">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse4"
                          className="collapse"
                          aria-labelledby="heading4"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item payments">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading5">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse5"
                              aria-expanded="false"
                              aria-controls="collapse5"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse5"
                          className="collapse"
                          aria-labelledby="heading5"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item payments">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading6">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse6"
                              aria-expanded="false"
                              aria-controls="collapse6"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what payment plans do TanahAir
                                Offer what payment plans do TanahAir Offer ?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse6"
                          className="collapse"
                          aria-labelledby="heading6"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item refund">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading7">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse7"
                              aria-expanded="false"
                              aria-controls="collapse7"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse7"
                          className="collapse"
                          aria-labelledby="heading7"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-2 grid-item services">
                      <div className="card px-2">
                        <div className="px-0 card-header" id="heading8">
                          <h5 className="mb-0">
                            <div
                              className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                              data-toggle="collapse"
                              data-target="#collapse8"
                              aria-expanded="false"
                              aria-controls="collapse8"
                            >
                              <span className="mx-auto">
                                <span>1.</span> what services does TanahAir
                                Offer?
                              </span>
                              <i className="accordion-icon fa fa-chevron-down ml-2" />
                            </div>
                          </h5>
                        </div>
                        <div
                          id="collapse8"
                          className="collapse"
                          aria-labelledby="heading8"
                          data-parent="#myAccordion"
                        >
                          <div className="px-3 card-body">
                            <p className="m-0 text-left">
                              We will report each section that has been done,
                              such as Flow, wireframe for each category, then
                              full wireframe until it becomes a complete design
                              and we will report the development of the website
                              approximately every 1 week.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5 my-0 mx-auto col-lg-4 col-md-6 col-sm-8">
                  <p className="text-center">
                    {" "}
                    If you can't find the answer to your question, please don't
                    hesitate to{" "}
                    <Link
                      href="/contact"
                      className="link gold fw-semibold text-underline"
                    >
                      contact
                    </Link>{" "}
                    us directly.{" "}
                  </p>
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
