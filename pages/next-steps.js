import Head from "next/head";
import Layout from "../components/Layout";

export default function NextSteps() {
  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout>
        <main>
          <section className="section-bg">
            <div className="container">
              <div className="sec-head">
                <h1 className="lemon mb-4 font-weight-bold text-brown">
                  Next Steps
                </h1>
                <p>
                  Now that you have secured your Web3 domain, you must follow
                  the steps below so that we can transfer ownership of your
                  domain to you.
                </p>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <div className="d-flex mb-5">
                    <span className="font-weight-bold">Step 1.</span>
                    <div className="pl-3">
                      <b>Add your digital wallet address to your profile. </b>
                      <p>
                        Log into your account, select{" "}
                        <a href="#" className="text-primary text-underline">
                          Profile
                        </a>
                        , and add your digital wallet address. <br />
                        <br /> If you have not setup a digital wallet, you can
                        do so by going to{" "}
                        <a href="#" className="text-primary text-underline">
                          Metamask
                        </a>{" "}
                        and set one up{" "}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-5">
                    <span className="font-weight-bold">Step 2.</span>
                    <div className="pl-3">
                      <div>
                        <b>
                          Add the preferred Blockchain that you would like your
                          domain minted on to your profile.
                        </b>
                        <p>
                          Log into your account, select{" "}
                          <a href="#" className="text-primary text-underline">
                            Profile
                          </a>
                          , select digital wallet and add your Blockchain from
                          the dropbox. <br />
                          <br /> The following Blockchain options are available:
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6 py-3">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/Binance-Smart-Chain.svg"
                              alt="Logo"
                              className="forex-logo"
                            />
                            <p className="pl-3 mb-0">Binance Smart Chain</p>
                          </div>
                        </div>
                        <div className="col-md-6 py-3">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/polygon-matic-logo.svg"
                              alt="Logo"
                              className="forex-logo"
                            />
                            <p className="pl-3 mb-0">Polygon Blockchain</p>
                          </div>
                        </div>
                        <div className="col-md-6 py-3">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/aurora-aoa-logo.svg"
                              alt="Logo"
                              className="forex-logo"
                            />
                            <p className="pl-3 mb-0">Aurora Blockchain</p>
                          </div>
                        </div>
                        <div className="col-md-6 py-3">
                          <div className="d-flex align-items-center">
                            <img
                              src="/assets/images/cronos-cro-logo.svg"
                              alt="Logo"
                              className="forex-logo"
                            />
                            <p className="pl-3 mb-0">Cronos Blockchain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-5">
                    <span className="font-weight-bold">Step 3.</span>
                    <div className="pl-3">
                      <b>
                        Make sure your Profile contact information in complete
                        and accurate.{" "}
                      </b>
                      <p>
                        {" "}
                        Log into your account, select Profile, and complete the
                        requested information in all fields.{" "}
                      </p>
                    </div>
                  </div>
                  <p>
                    {" "}
                    Once these steps are complete, our system will mint your
                    domain on your desired Blockchain and transfer it to your
                    digital wallet. <br />
                    <br /> Once in your digital wallet, you will be able
                    to:{" "}
                  </p>
                  <ol className>
                    <li>Build or direct your Web3 domain to a website </li>
                    <li> Setup your Web3 Digital Profile</li>
                    <li> Link and use it as a short digital wallet name</li>
                  </ol>
                </div>
                <div className="col-md-3">
                  <h5 className="font-weight-bolder"> Explainer Videos </h5>
                  <ul className="p-0 list-unstyled mt-3">
                    <li className="py-1">
                      <a href="#" className="text-underline">
                        Why do I need a Digital Wallet
                      </a>
                    </li>
                    <li className="py-1">
                      <a href="#" className="text-underline">
                        How to setup a Metamask Wallet
                      </a>
                    </li>
                    <li className="py-1">
                      <a href="#" className="text-underline">
                        How to update my Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="cta py-5">
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
