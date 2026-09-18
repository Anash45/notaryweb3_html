import SiteHeader from "./SiteHeader";
import Footer from "./Footer";

export default function Layout({ children, headerExtra }) {
  return (
    <>
      <SiteHeader>{headerExtra}</SiteHeader>
      {children}
      <Footer />
    </>
  );
}
