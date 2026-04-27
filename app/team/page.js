import Link from 'next/link'

export default async function TeamPage() {
  const res = await fetch('/api/team', {
    cache: 'no-store'
  })

  const team = await res.json()

  return (
    <section className="page fade-in">
      <div className="page-header">
        <h1>Tim Kami</h1>
        <p>Kenali orang-orang di balik FlowNote.</p>
      </div>

      <div className="card-grid">
        {team.map((member) => (
          <div key={member.id} className="card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>

            <Link href={`/team/${member.id}`} className="cta">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}