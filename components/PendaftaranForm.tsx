import { useState } from "react";

export default function PendaftaranForm() {
  const [form, setForm] = useState({ nama: "", alamat: "", sekolah: "", foto: null });
  const [preview, setPreview] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (name === "foto" && files && files[0]) {
      setForm({ ...form, foto: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Kirim data ke backend
    alert("Pendaftaran berhasil! (simulasi)");
  }

  return (
    <section className="py-12 px-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Formulir Pendaftaran Anggota Baru</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1">Nama Lengkap</label>
          <input type="text" name="nama" className="w-full border rounded px-3 py-2" required value={form.nama} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Alamat</label>
          <input type="text" name="alamat" className="w-full border rounded px-3 py-2" required value={form.alamat} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Asal Sekolah</label>
          <input type="text" name="sekolah" className="w-full border rounded px-3 py-2" required value={form.sekolah} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-1">Upload Foto</label>
          <input type="file" name="foto" accept="image/*" className="w-full" onChange={handleChange} />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded" />}
        </div>
        <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded font-semibold">Daftar</button>
      </form>
    </section>
  );
} 