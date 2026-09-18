import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Receipt() {
  useEffect(() => {
    document.body.classList.add("receipt-page");
    return () => document.body.classList.remove("receipt-page");
  }, []);

  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout>
        <main>
          <section className="section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 mx-auto">
                  <div className="py-3 d-flex align-items-center justify-content-between flex-md-row flex-column align-items-center p-hide">
                    <a href="#" className="r-link text-underline py-md-0 py-2">
                      View next steps
                    </a>
                    <a href="#" className="r-link text-underline py-md-0 py-2">
                      Visit list of your domains
                    </a>
                    <a href="#" className="r-link text-underline py-md-0 py-2">
                      Add your wallet address
                    </a>
                  </div>
                  <div className="receipt">
                    <div
                      className="receipt-head p-sm-4 p-3"
                      style={{
                        backgroundImage: "url(./assets/images/colored-bg.png)",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <img
                            src="/assets/images/logo-w.svg"
                            alt="Logo"
                            height={30}
                          />
                        </div>
                        <h2 className="times">Receipt</h2>
                      </div>
                      <div className="row my-4">
                        <div className="col-xl-4 col-6 h-links text-xl-left text-center">
                          <a href="mailto:support@notaryweb3.com">
                            <i className="fa fa-envelope mr-md-2 mr-0" />{" "}
                            support@notaryweb3.com
                          </a>
                        </div>
                        <div className="col-xl-4 col-6 h-links text-xl-left text-center">
                          <a href="tel:+1 800 535 4472 ">
                            <i className="fa fa-phone mr-md-2 mr-0" /> +1 800
                            535 4472{" "}
                          </a>
                        </div>
                        <div className="col-md-4 col-6 mt-xl-0 mt-3 mx-auto">
                          <div className="row justify-content-center">
                            <div className="col-6">
                              <p>Receipt #:</p>
                            </div>
                            <div className="col-6">
                              <p>225652</p>
                            </div>
                          </div>
                          <div className="row justify-content-between">
                            <div className="col-6">
                              <p>Date:</p>
                            </div>
                            <div className="col-6">
                              <p>02/12/23</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="receipt-body bg-white">
                      <div className="receipt-info pb-5 pt-4 px-md-4 px-3">
                        <div className="row">
                          <div className="col-6">
                            <h6 className="font-weight-bold mb-4">
                              Invoice to :
                            </h6>
                            <h3 className="invoice_to font-weight-bold">
                              Jorden Smith
                            </h3>
                            <p className="address">
                              Toronto, ontario <br />
                              Toronto, ontario <br />
                              Canada
                            </p>
                          </div>
                          <div className="col-6">
                            <h6 className="font-weight-bold mb-4 text-right">
                              Paid to :
                            </h6>
                            <h5 className="paid_to font-weight-bold text-md-left text-center">
                              Notary Ventures, LLC
                            </h5>
                            <p className="address text-right">
                              Notary Ventures, LLC <br />
                              Notary Ventures, LLC <br />
                              United States
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="receipt-prices">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="w-100">
                                <h6 className="mb-0 font-weight-bold py-2 px-md-4 px-2 mr-auto">
                                  {" "}
                                  Domain Name{" "}
                                </h6>
                              </th>
                              <th>
                                <h6 className="mb-0 font-weight-bold py-2 px-md-4 px-2">
                                  Total
                                </h6>
                              </th>
                              <th>
                                <h6 className="mb-0 font-weight-bold py-2 px-md-4 px-2">
                                  Price
                                </h6>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-light">
                            <tr>
                              <td className="py-3 mb-0">Tonymills.notary</td>
                              <td className="py-3 mb-0 text-center">$49.99</td>
                              <td className="py-3 mb-0 text-center">$49.99</td>
                            </tr>
                            <tr>
                              <td className="py-3 mb-0">Tonymills.notary</td>
                              <td className="py-3 mb-0 text-center">$49.99</td>
                              <td className="py-3 mb-0 text-center">$49.99</td>
                            </tr>
                            <tr>
                              <td className="py-3 mb-0">Tonymills.notary</td>
                              <td className="py-3 mb-0 text-center">$49.99</td>
                              <td className="py-3 mb-0 text-center">$49.99</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td>
                                <h6 className="mb-0 font-weight-bold py-2 mb-3">
                                  Additional Information :
                                </h6>
                                <p>
                                  Your purchase will appear on your credit card
                                  statement as: Notary Ventures or
                                  Notaryweb3.com
                                </p>
                              </td>
                              <td>
                                <p className="mb-4 text-light text-center">
                                  {" "}
                                  Subtotal{" "}
                                </p>
                                <p className="text-light text-center">
                                  {" "}
                                  Tax (18%){" "}
                                </p>
                              </td>
                              <td>
                                <p className="mb-4 text-light text-center">
                                  {" "}
                                  $99.98{" "}
                                </p>
                                <p className="text-light text-center">
                                  {" "}
                                  $99.98{" "}
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td />
                              <td className="border-top">
                                <h6 className="mb-0 font-weight-bold text-nowrap">
                                  Grand Total:
                                </h6>
                              </td>
                              <td className="border-top">
                                <p className="text-light mb-0 text-center">
                                  {" "}
                                  $967.98{" "}
                                </p>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div className="receipt-foot p-sm-4 p-3">
                      <div className="text-center py-3 p-hide">
                        <button
                          className="btn btn-primary times px-4"
                          onclick="print()"
                        >
                          <i className="fa fa-print" /> Print
                        </button>
                        <button className="btn btn-secondary times px-4">
                          <i className="fa fa-download" /> Downlaod
                        </button>
                      </div>
                      <div className="py-3 text-center">
                        <p className="m-0 text-light">
                          <b className="text-white">NOTE :</b> this is computer
                          generated receipt and does not require physical
                          signature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 info d-md-block d-none p-hide">
            <div className="container">
              <div className="row align-items-center flex-md-row flex-column-reverse">
                <div className="col-md-6">
                  <img
                    src="/assets/images/adobe_sign.png"
                    alt="Adobe Sign"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 px-md-3 px-5">
                  <h2 className="mb-4">100 +</h2>
                  <h4>
                    WEB3 Domains <br />
                    Registered
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
