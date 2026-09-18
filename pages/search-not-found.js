import Head from "next/head";
import Layout from "../components/Layout";

export default function SearchNotFound() {
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
                <div className="col-lg-9">
                  <div className="pb-3 sec-head">
                    <h2 className="sec-title pb-4 text-left">
                      {" "}
                      Search Results{" "}
                    </h2>
                    <div className="pb-3">
                      <form className="row inline-form search-form mt-4 mx-0">
                        <div className="col-9 p-0">
                          <input
                            type="text"
                            className="form-control form-control-lg rounded-0"
                            placeholder="Search for your name"
                          />
                        </div>
                        <div className="col-3 p-0">
                          <button
                            type="submit"
                            className="btn btn-dark btn-lg btn-block rounded-0"
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="options d-md-block d-none mb-5">
                    <a href="#" className="mr-4 opt-active d-inline-block">
                      <i className="fa fa-search" /> Results
                    </a>
                    <a href="#" className="mx-4 d-inline-block">
                      <i className="fa-solid fa-bars-filter" /> Filter
                    </a>
                    <a href="#" className="mx-4 d-inline-block">
                      <i className="fa-regular fa-heart" /> Favorites
                    </a>
                    <a href="#" className="mx-4 d-inline-block">
                      <i className="fa fa-history" /> History
                    </a>
                  </div>
                  <div className="border search-box">
                    <div className="top px-md-5 py-5">
                      <div className="px-sm-5 px-0">
                        <p className="search-subtitle">
                          You domain is Not available
                        </p>
                        <h3 className="search-domain not-found">
                          anthonymills.<span className="tld">notary</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
