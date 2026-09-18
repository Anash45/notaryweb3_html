import TopNav from "./TopNav";
import Navbar from "./Navbar";

export default function SiteHeader({ children }) {
  return (
    <>
      <TopNav />
      <header>
        <Navbar />
        {children}
      </header>
    </>
  );
}
