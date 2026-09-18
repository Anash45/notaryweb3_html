import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>NotaryWeb3.com</title>
      </Head>
      <Layout
        headerExtra={
          <>
            <div className="container py-5">
              <h1 className="text-center fw-semibold pt-5 pb-3 h-title">
                Secure Your <span className="yellow">Notary</span> WEB3
                Domain{" "}
              </h1>
              <h3 className="font-weight-normal text-center py-4 subtitle">
                Own your identity in the digital world.
              </h3>
              <div className="col-lg-8 col-md-10 col-12 mx-auto">
                <form className="row inline-form">
                  <div className="col-9 p-0">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-0"
                      placeholder="example.Notary"
                    />
                  </div>
                  <div className="col-3 p-0">
                    <button
                      type="submit"
                      className="btn btn-secondary btn-lg btn-block rounded-0"
                    >
                      Search
                    </button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  {" "}
                  Secure your domaine :{" "}
                  <span className="text-underline px-3">.Notary</span>
                  <span className="text-underline px-3">.Notarypublic</span> and
                  more...{" "}
                </p>
                <div className="row mt-5 benefits">
                  <div className="col-4 text-center">
                    <div className="d-inline-block text-left">
                      <img
                        className="mb-2 h-icons"
                        src="/assets/images/hicon1.svg"
                        alt="Icon 1"
                      />
                      <p>
                        <span>No renewal</span>
                        <br />
                        <span className="text-lg">fees</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className="d-inline-block text-left">
                      <img
                        className="mb-2 h-icons"
                        src="/assets/images/hicon2.svg"
                        alt="Icon 1"
                      />
                      <p>
                        <span>No gas or</span>
                        <br />
                        <span className="text-lg">mint fees</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className="d-inline-block text-left">
                      <img
                        className="mb-2 h-icons"
                        src="/assets/images/hicon3.svg"
                        alt="Icon 1"
                      />
                      <p>
                        <span>Starting at</span>
                        <br />
                        <span className="text-lg">49+</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      >
        <div>
          <section className="py-5 info">
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
                  <h2 className="mb-4">
                    <div id="scrolling-content">
                      <span>100 +</span>
                      <span>1,000 +</span>
                      <span>10,000 +</span>
                      <span>100,000 +</span>
                      <span>130,000 +</span>
                      <span>1,000,000 +</span>
                      <span>2,000,000 +</span>
                      <span>3,000,000 +</span>
                      <span>3,300,000 +</span>
                      <span className="end-div">1111</span>
                    </div>
                  </h2>
                  <h4>
                    WEB3 Domains <br />
                    Registered
                  </h4>
                  <div className="my-3 d-md-block d-none">
                    <img
                      src="/assets/images/asian-man-taking-a-selfie-2021-08-28-20-30-40-utc.jpg"
                      alt="Images"
                      className="mx-2 circle-img"
                    />
                    <img
                      src="/assets/images/business-man-selfie-and-smile-for-socila-media-pr-2022-12-29-04-55-16-utc.jpg"
                      alt="Images"
                      className="mx-2 circle-img"
                    />
                    <img
                      src="/assets/images/concentrated-and-serious-boss-looking-at-camera-wi-2022-12-08-03-57-51-utc.jpg"
                      alt="Images"
                      className="mx-2 circle-img"
                    />
                    <img
                      src="/assets/images/face-selfie-and-business-woman-in-office-for-happ-2022-12-29-23-11-20-utc.jpg"
                      alt="Images"
                      className="mx-2 circle-img"
                    />
                    <img
                      src="/assets/images/woman-doctor-or-portrait-selfie-in-hospital-pov-2023-02-24-22-18-39-utc.jpg"
                      alt="Images"
                      className="mx-2 circle-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="usage py-5">
            <div className="container">
              <h2 className="text-center"> Use Your WEB3 Name for </h2>
              <div className="row pt-5">
                <div className="col-md-4 px-lg-5 px-md-4 px-sm-3 text-md-left text-center mb-md-0 mb-3">
                  <img
                    src="/assets/images/uicon1.svg"
                    alt="Icons"
                    height={50}
                  />
                  <h4 className="mt-3 mb-1">Digital Wallet Address</h4>
                  <p>
                    Your unique identifier for decentralized blockchain
                    transactions and digital assets.
                  </p>
                </div>
                <div className="col-md-4 px-lg-5 px-md-4 px-sm-3 text-md-left text-center mb-md-0 mb-3 border-left border-right">
                  <img
                    src="/assets/images/uicon2.svg"
                    alt="Icons"
                    height={50}
                  />
                  <h4 className="mt-3 mb-1">WEB 3 Username</h4>
                  <p>
                    User-chosen identifier for decentralized web3 applications
                    and networks.
                  </p>
                </div>
                <div className="col-md-4 px-lg-5 px-md-4 px-sm-3 text-md-left text-center mb-md-0 mb-3">
                  <img
                    src="/assets/images/uicon3.svg"
                    alt="Icons"
                    height={50}
                  />
                  <h4 className="mt-3 mb-1">Website URL</h4>
                  <p>
                    Domain names for decentralized web3 applications and
                    websites.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="learn py-5">
            <div className="container">
              <h2 className="text-center text-white pt-4">
                {" "}
                Learn More about WEB3 and WEB3 Domains{" "}
              </h2>
              <p className="text-center py-4 mb-0">
                {" "}
                Check out our explainer videos where we provide answers <br />{" "}
                to frequently asked questions.{" "}
              </p>
              <div className="row pt-4">
                <div className="col-lg-3 col-md-4 col-sm-6 px-md-3 px-5">
                  <div className="thumb-box">
                    <img
                      src="/assets/images/thumbnail.png"
                      alt="Video Thumbnails"
                      className="thumbnail img-fluid"
                    />
                    <img
                      src="/assets/images/play.svg"
                      alt="Play Icon"
                      height={30}
                      className="play-btn"
                    />
                  </div>
                  <div className="my-3 play-line" />
                  <p className="fw-semibold text-center">
                    The Evolution of the Internet: Web3
                  </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 px-md-3 px-5">
                  <div className="thumb-box">
                    <img
                      src="/assets/images/thumbnail.png"
                      alt="Video Thumbnails"
                      className="thumbnail img-fluid"
                    />
                    <img
                      src="/assets/images/play.svg"
                      alt="Play Icon"
                      height={30}
                      className="play-btn"
                    />
                  </div>
                  <div className="my-3 play-line" />
                  <p className="fw-semibold text-center">
                    Domain Names, Digital Wallets, Digital Identity
                  </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 px-md-3 px-5">
                  <div className="thumb-box">
                    <img
                      src="/assets/images/thumbnail.png"
                      alt="Video Thumbnails"
                      className="thumbnail img-fluid"
                    />
                    <img
                      src="/assets/images/play.svg"
                      alt="Play Icon"
                      height={30}
                      className="play-btn"
                    />
                  </div>
                  <div className="my-3 play-line" />
                  <p className="fw-semibold text-center">
                    Why should you secure a Web3 Domain
                  </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 px-md-3 px-5">
                  <div className="thumb-box">
                    <img
                      src="/assets/images/thumbnail.png"
                      alt="Video Thumbnails"
                      className="thumbnail img-fluid"
                    />
                    <img
                      src="/assets/images/play.svg"
                      alt="Play Icon"
                      height={30}
                      className="play-btn"
                    />
                  </div>
                  <div className="my-3 play-line" />
                  <p className="fw-semibold text-center">Most common FAQ&apos;s</p>
                </div>
              </div>
            </div>
          </section>
          <section className="benefits">
            <div className="container">
              <div className="row py-5 align-items-center flex-md-row flex-column-reverse">
                <div className="col-md-6 px-5">
                  <img
                    src="/assets/images/left-round.png"
                    alt="benefits"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 text-md-left text-center">
                  <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                    <h6 className="b-subtitle">WEB3 Username</h6>
                    <div className="line ml-4" />
                  </div>
                  <h2 className="b-title my-4">
                    A name for your <br /> WEB3{" "}
                    <span className="gold">profile</span>
                  </h2>
                  <p>
                    Build your digital identity with Domain Profiles. Verify
                    your social accounts, display your NFT avatar, and highlight
                    achievements.
                  </p>
                </div>
              </div>
              <div className="row py-5 align-items-center">
                <div className="col-md-6 text-md-left text-center">
                  <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                    <h6 className="b-subtitle">Digital wallet adress</h6>
                    <div className="line ml-1 ml-md-4" />
                  </div>
                  <h2 className="b-title my-4">
                    A short <span className="gold">digital wallet</span> name
                    for getting paid{" "}
                  </h2>
                  <p>
                    Make sending and receiving crypto simple. Replace long,
                    complicated wallet addresses with a single easy-to- read
                    name.
                  </p>
                  <p className="mt-4 support"> Supported in apps like </p>
                  <div className="d-flex align-items-center mb-md-0 mb-4">
                    <img
                      src="/assets/images/coinbase.svg"
                      alt="Icons"
                      height={16}
                      className="mr-3"
                    />
                    <img
                      src="/assets/images/blockchain.svg"
                      alt="Icons"
                      height={16}
                      className="mx-3"
                    />
                    <img
                      src="/assets/images/rainbow.svg"
                      alt="Icons"
                      height={40}
                      className="mx-3"
                    />
                  </div>
                </div>
                <div className="col-md-6 px-5">
                  <img
                    src="/assets/images/right-round.png"
                    alt="benefits"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="benefits browser py-5">
            <div className="container">
              <div className="row py-3 align-items-center flex-md-row flex-column-reverse">
                <div className="col-md-6">
                  <img
                    src="/assets/images/browsers.png"
                    alt="benefits"
                    className="img-fluid mb-md-0 mb-4"
                  />
                  <div className="d-flex align-items-center d-md-none">
                    <p className="support mr-4 mb-0">
                      {" "}
                      Supported in apps like{" "}
                    </p>
                    <img
                      src="/assets/images/brave.svg"
                      alt="Icons"
                      height={22}
                      className="mx-sm-3 mx-1"
                    />
                    <img
                      src="/assets/images/opera.svg"
                      alt="Icons"
                      height={22}
                      className="mx-sm-3 mx-1"
                    />
                  </div>
                </div>
                <div className="col-md-6 px-5 mb-md-0 mb-4">
                  <div className="d-flex align-items-center justify-content-sm-start justify-content-center">
                    <h6 className="b-subtitle">WEB3 Domain Name Address</h6>
                    <div className="line ml-sm-4 ml-1" />
                  </div>
                  <h2 className="b-title my-4 text-md-left text-center">
                    A <span className="gold">Domain Name</span> for your WEB3
                    website{" "}
                  </h2>
                  <p className="text-md-left text-center">
                    Build a Web3 website with a domain that you fully own and
                    control. Your domain is yours for life - no renewal fees,
                    gas fees or hosting fees.
                  </p>
                  <div className="d-none align-items-center d-md-flex">
                    <p className="support mr-4 mb-0">
                      {" "}
                      Supported in apps like{" "}
                    </p>
                    <img
                      src="/assets/images/brave.svg"
                      alt="Icons"
                      height={22}
                      className="mx-sm-3 mx-1"
                    />
                    <img
                      src="/assets/images/opera.svg"
                      alt="Icons"
                      height={22}
                      className="mx-sm-3 mx-1"
                    />
                  </div>
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
        </div>
      </Layout>
    </>
  );
}
