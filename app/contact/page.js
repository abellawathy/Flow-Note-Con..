import Button from '../../components/Button'

export default function Contact() {
  return (
    <section className="page fade-in">
      <div className="page-header">
        <h1>Hubungi Kami</h1>
        <p>Kami siap membantu kebutuhan produktivitas kamu.</p>
      </div>

      <div className="contact-box">
        <p><strong>Email:</strong> saya@flownote.com</p>
        <p><strong>Jam Operasional:</strong> Senin - Jumat, 09.00 - 17.00</p>

        <div style={{ marginTop: "1.5rem" }}>
          <Button />
        </div>
      </div>
    </section>
  )
}