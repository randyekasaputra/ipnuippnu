import Navbar from "@/components/Navbar";
import StrukturOrganisasi from "@/components/StrukturOrganisasi";
import Footer from "@/components/Footer";

export default function StrukturPage() {
    const logoPath = '/logo.png';

    return (
        <main>
            <Navbar logoSrc={logoPath} />
            <StrukturOrganisasi />
            <Footer />
        </main>
    );
}
