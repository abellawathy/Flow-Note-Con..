export default function Home() {
  return (
      <section className="fade-in">
      <header>
        <section className="hero">
          <div className="hero-text">
            <h2>Semua Catatan, Tugas, dan Kolaborasi dalam Satu Tempat</h2>
            <p>
              FlowNote adalah platform SaaS untuk mahasiswa, freelancer, dan tim
              kecil yang ingin bekerja lebih rapi, cepat, dan terorganisir tanpa
              tools yang rumit.
            </p>
            <a href="#start" className="cta">
              Coba Gratis Sekarang
            </a>
          </div>

          <figure>
            <img src="/flow-logo.png" alt="Dashboard FlowNote" />
          </figure>
        </section>
      </header>

      <main>
        {/* FEATURES */}
        <section id="features">
          <h2>Kenapa Memilih FlowNote?</h2>

          <div className="features-grid">
            <article>
              <div className="icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 2H14L20 8V22H6V2Z"
                    stroke="#CA6180"
                    strokeWidth="2"
                  />
                  <path d="M14 2V8H20" stroke="#CA6180" strokeWidth="2" />
                </svg>
              </div>
              <h3>Catatan Terstruktur</h3>
              <p>
                Kelola semua ide dan catatan dengan sistem yang rapi dan mudah
                dicari kapan saja.
              </p>
            </article>

            <article>
              <div className="icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="9"
                    cy="8"
                    r="4"
                    stroke="#CA6180"
                    strokeWidth="2"
                  />
                  <path
                    d="M17 11C18.66 11 20 9.66 20 8C20 6.34 18.66 5 17 5"
                    stroke="#CA6180"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 20C2 16.69 4.69 14 8 14H10C13.31 14 16 16.69 16 20"
                    stroke="#CA6180"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Kolaborasi Real-time</h3>
              <p>
                Bekerja bersama tim secara langsung tanpa perlu kirim file
                bolak-balik.
              </p>
            </article>

            <article>
              <div className="icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M4 20V10" stroke="#CA6180" strokeWidth="2" />
                  <path d="M10 20V4" stroke="#CA6180" strokeWidth="2" />
                  <path d="M16 20V14" stroke="#CA6180" strokeWidth="2" />
                  <path d="M22 20H2" stroke="#CA6180" strokeWidth="2" />
                </svg>
              </div>
              <h3>Pantau Progress</h3>
              <p>
                Lihat perkembangan tugas dan target secara visual agar tetap on
                track.
              </p>
            </article>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section id="testimonial">
          <h2>Dipercaya oleh Pengguna</h2>

          <div className="testimonial-grid">
            <blockquote>
              "FlowNote bikin tugas kuliah saya jauh lebih terorganisir."
              <cite>— Andi, Mahasiswa</cite>
            </blockquote>

            <blockquote>
              "Saya bisa kerja bareng klien tanpa ribet kirim file."
              <cite>— Sari, Freelancer</cite>
            </blockquote>

            <blockquote>
              "Tim kami jadi lebih produktif sejak pakai FlowNote."
              <cite>— Budi, Startup Founder</cite>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section id="start" className="start">
          <h2>Mulai Sekarang Tanpa Biaya</h2>
          <p>
            Cukup daftar, buat workspace, dan mulai atur pekerjaanmu dalam
            hitungan menit.
          </p>
          <a href="#" className="cta">
            Daftar Gratis
          </a>
        </section>
      </main>
    </section>
  );
}
