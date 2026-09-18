import Head from "next/head";
import PageGalleryCard from "../components/PageGalleryCard";
import styles from "../styles/PageGallery.module.css";

const PAGES = [
  {
    href: "/",
    thumb: "/thumbnails/index.png",
    title: "Home",
    file: "index.html",
  },
  {
    href: "/about",
    thumb: "/thumbnails/about.png",
    title: "About",
    file: "about.html",
  },
  {
    href: "/cart",
    thumb: "/thumbnails/cart.png",
    title: "Cart",
    file: "cart.html",
  },
  {
    href: "/contact",
    thumb: "/thumbnails/contact.png",
    title: "Contact",
    file: "contact.html",
  },
  {
    href: "/faq",
    thumb: "/thumbnails/faq.png",
    title: "FAQ",
    file: "faq.html",
  },
  {
    href: "/next-steps",
    thumb: "/thumbnails/next-steps.png",
    title: "Next Steps",
    file: "next-steps.html",
  },
  {
    href: "/privacy-policy",
    thumb: "/thumbnails/privacy-policy.png",
    title: "Privacy Policy",
    file: "privacy-policy.html",
  },
  {
    href: "/receipt",
    thumb: "/thumbnails/receipt.png",
    title: "Receipt",
    file: "receipt.html",
  },
  {
    href: "/receipt-email",
    thumb: "/thumbnails/receipt-email.png",
    title: "Receipt Email",
    file: "receipt-email.html",
  },
  {
    href: "/search-found",
    thumb: "/thumbnails/search-found.png",
    title: "Search Found",
    file: "search-found.html",
  },
  {
    href: "/search-not-found",
    thumb: "/thumbnails/search-not-found.png",
    title: "Search Not Found",
    file: "search-not-found.html",
  },
  {
    href: "/terms",
    thumb: "/thumbnails/terms.png",
    title: "Terms",
    file: "terms.html",
  },
];

export default function PageGallery() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Page Gallery | NotaryWeb3.com</title>
      </Head>

      <header className={styles.hero}>
        <h1>
          Notary<span>Web3</span> &mdash; Page Gallery
        </h1>
        <p>Browse every page in this site</p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {PAGES.map((p) => (
            <PageGalleryCard key={p.href} {...p} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        Generated page gallery &mdash; NotaryWeb3.com
      </footer>
    </div>
  );
}
