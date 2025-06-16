export default function VisiMisiSection() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Visi & Misi</h2>
      <div className="mb-2">
        <strong>Visi:</strong>
        <p>Mewujudkan pelajar yang beriman, berilmu, dan berakhlakul karimah.</p>
      </div>
      <div>
        <strong>Misi:</strong>
        <ul className="list-disc list-inside">
          <li>Meningkatkan keimanan dan ketakwaan kepada Allah SWT.</li>
          <li>Mengembangkan potensi pelajar dalam bidang akademik dan non-akademik.</li>
          <li>Menanamkan nilai-nilai ke-NU-an dan kebangsaan.</li>
        </ul>
      </div>
    </section>
  );
} 