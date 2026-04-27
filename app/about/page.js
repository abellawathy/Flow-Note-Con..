export default function About() {
  return (
    <section className="page fade-in">
      <div className="page-header">
        <h1>Tentang FlowNote</h1>
        <p>
          Platform produktivitas modern untuk mahasiswa, freelancer, dan tim kecil.
        </p>
      </div>

      <p style={{ textAlign: "center", maxWidth: "700px", margin: "auto" }}>
        FlowNote dirancang untuk menyederhanakan cara kamu mencatat, mengelola tugas,
        dan berkolaborasi dalam satu platform. Kami percaya bahwa produktivitas
        tidak harus rumit—cukup dengan tools yang tepat, kamu bisa fokus pada hal yang penting.
      </p>

      <div className="card-grid" style={{ marginTop: "3rem" }}>
        <div className="card">
          <h3>Misi Kami</h3>
          <p>Membantu pengguna bekerja lebih efisien tanpa kompleksitas.</p>
        </div>

        <div className="card">
          <h3>Visi</h3>
          <p>Menjadi platform produktivitas sederhana yang digunakan secara global.</p>
        </div>

        <div className="card">
          <h3>Target Pengguna</h3>
          <p>Mahasiswa, freelancer, dan tim startup kecil.</p>
        </div>
      </div>
    </section>
  )
}