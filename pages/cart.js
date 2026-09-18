import Head from "next/head";
import Layout from "../components/Layout";

export default function Cart() {
  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout
        headerExtra={
          <>
            <div className="py-5 col-lg-7 col-md-10 mx-auto">
              <div className="container">
                <div className="card cart-card border-0 rounded-0">
                  <div className="cart-head">
                    <h4 className="text-center text-md-left text-white mb-0">
                      {" "}
                      Shopping Cart{" "}
                    </h4>
                  </div>
                  <div className="cart-body px-3">
                    <div className="row py-3 border-bottom font-weight-bold">
                      <div className="col-8">Domain Name</div>
                      <div className="col-3">Price</div>
                      <div className="col-1" />
                    </div>
                    <div className="car-itemsitems">
                      <div className="row py-3">
                        <div className="col-8">Tonymills.notary</div>
                        <div className="col-3">$49.90</div>
                        <div className="col-1">
                          <a href="#">
                            <i className="fa fa-trash-alt text-danger" />
                          </a>
                        </div>
                      </div>
                      <div className="row py-3">
                        <div className="col-8">Tonymills.notarypublic</div>
                        <div className="col-3">$49.90</div>
                        <div className="col-1">
                          <a href="#">
                            <i className="fa fa-trash-alt text-danger" />
                          </a>
                        </div>
                      </div>
                      <div className="row py-3 border-top">
                        <div className="col-8 text-right">Total</div>
                        <div className="col-4">
                          <span className="font-weight-bold">$99.80</span>
                        </div>
                      </div>
                      <div className="row py-3 align-items-center flex-md-row flex-column-reverse">
                        <div className="col-md-7 text-md-left text-center">
                          <img
                            src="/assets/images/stripe.svg"
                            alt="Powered by Stripe"
                            className="stripe img-fluid"
                            height={20}
                          />
                        </div>
                        <div className="col-md-5 text-md-left text-center mb-md-0 mb-4">
                          <button className="btn btn-brown">Close</button>
                          <button className="btn btn-brown ml-2">
                            Checkout <i className="fa fa-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      >
        <main>
          <section className="py-5 info d-md-block d-none">
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
