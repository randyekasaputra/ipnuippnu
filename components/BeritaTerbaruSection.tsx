export default function BeritaTerbaruSection() {
  // Dummy data berita
  const berita = [
    { id: 1, judul: "Kegiatan Bakti Sosial", tanggal: "2024-06-01" },
    { id: 2, judul: "Pelantikan Pengurus Baru", tanggal: "2024-05-20" },
    { id: 3, judul: "Lomba Cerdas Cermat", tanggal: "2024-05-10" },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Berita Terbaru</h2>
      <ul className="space-y-4">
        {berita.map((item) => (
          <li key={item.id} className="bg-white rounded shadow p-4 flex justify-between items-center">
            <span>{item.judul}</span>
            <span className="text-sm text-gray-500">{item.tanggal}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 