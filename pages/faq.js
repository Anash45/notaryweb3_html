import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const FILTERS = [
  { key: "*", label: "General" },
  { key: "services", label: "Services" },
  { key: "payments", label: "Payments" },
  { key: "refund", label: "Refund" },
  { key: "contact", label: "Contact" },
];

const FAQ_ITEMS = [
  {
    id: 1,
    category: "services",
    question: "What services does NotaryWeb3 offer?",
    answer:
      "NotaryWeb3 lets you register blockchain-based .notary and .notarypublic Web3 domains, link them to your crypto wallet, and attach a verified notary identity to your online presence — all from one dashboard.",
  },
  {
    id: 2,
    category: "services",
    question: "How is a Web3 domain different from a traditional domain?",
    answer:
      "A Web3 domain lives on the blockchain and is owned directly through your wallet instead of being rented from a registrar each year. That means no renewal fees, and your domain can resolve wallet addresses as well as websites.",
  },
  {
    id: 3,
    category: "services",
    question: "Can I use my Web3 domain for a website or email?",
    answer:
      "Yes. You can point your domain to an IPFS-hosted website and use it as a human-readable address for crypto-native email and payments, in addition to your existing domain and inbox.",
  },
  {
    id: 4,
    category: "contact",
    question: "How do I contact support?",
    answer:
      "Our team is reachable from the Contact page, by email at support@notaryweb3.com, or via the Email Support link at the top of every page. We typically respond within one business day.",
  },
  {
    id: 5,
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards through Stripe, as well as payment in ETH and other major cryptocurrencies directly from your connected wallet.",
  },
  {
    id: 6,
    category: "payments",
    question: "Are there any renewal or gas fees?",
    answer:
      "No. Domains are yours for good once minted, with no yearly renewal fees and no extra gas or minting fees on top of the listed price — the price you see at checkout is the price you pay.",
  },
  {
    id: 7,
    category: "refund",
    question: "What is your refund policy?",
    answer:
      "Because domains are minted on-chain, purchases are final once minting completes. If minting fails or a domain is not delivered to your wallet, contact support within 14 days for a full refund.",
  },
  {
    id: 8,
    category: "services",
    question: "Do I need technical knowledge to buy a domain?",
    answer:
      "Not at all. Search for your name, connect your wallet, and check out — the same way you would on any familiar domain marketplace. No prior blockchain experience required.",
  },
];

export default function Faq() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [openId, setOpenId] = useState(null);

  const visibleItems =
    activeFilter === "*"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeFilter);

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
                  Frequently Asked Questions - we&apos;ve got you covered!{" "}
                  <br />
                  Everything you need to know, all in one place.{" "}
                </p>
              </div>
              <div className="row no-gutters">
                <div className="filtering col-sm-12 text-center mb-5">
                  <div className="filtering-inner d-inline-block py-2 px-md-5 px-2">
                    {FILTERS.map((filter, idx) => (
                      <span
                        key={filter.key}
                        role="button"
                        tabIndex={0}
                        data-filter={filter.key}
                        className={`my-md-2 my-1 ${
                          activeFilter === filter.key ? "active" : ""
                        } ${idx === 0 ? "pl-0" : ""} ${
                          idx === FILTERS.length - 1 ? "pr-0" : ""
                        }`}
                        onClick={() => setActiveFilter(filter.key)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setActiveFilter(filter.key);
                          }
                        }}
                      >
                        {filter.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-12 text-center w-100">
                  <div className="grid form-row gallery text-center">
                    {visibleItems.map((item, idx) => (
                      <div
                        key={item.id}
                        className={`col-lg-4 col-sm-6 mb-2 grid-item ${item.category}`}
                      >
                        <div className="card px-2">
                          <div
                            className="px-0 card-header"
                            id={`heading${item.id}`}
                          >
                            <h5 className="mb-0">
                              <div
                                className="btn accordion-btn d-flex w-100 justify-content-center align-items-center"
                                role="button"
                                tabIndex={0}
                                aria-expanded={openId === item.id}
                                aria-controls={`collapse${item.id}`}
                                onClick={() =>
                                  setOpenId(openId === item.id ? null : item.id)
                                }
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    setOpenId(
                                      openId === item.id ? null : item.id,
                                    );
                                  }
                                }}
                              >
                                <span className="mx-auto">
                                  <span>{idx + 1}.</span> {item.question}
                                </span>
                                <i
                                  className={`accordion-icon fa ml-2 ${
                                    openId === item.id
                                      ? "fa-chevron-up"
                                      : "fa-chevron-down"
                                  }`}
                                />
                              </div>
                            </h5>
                          </div>
                          <div
                            id={`collapse${item.id}`}
                            className={`collapse ${openId === item.id ? "show" : ""}`}
                            aria-labelledby={`heading${item.id}`}
                          >
                            <div className="px-3 card-body">
                              <p className="m-0 text-left">{item.answer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-5 my-0 mx-auto col-lg-4 col-md-6 col-sm-8">
                  <p className="text-center">
                    {" "}
                    If you can&apos;t find the answer to your question, please
                    don&apos;t hesitate to{" "}
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
