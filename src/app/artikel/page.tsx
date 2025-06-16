import NewsList from "@/components/NewsList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArtikelPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <NewsList />
      </main>
      <Footer />
    </>
  );
} 