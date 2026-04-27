export default async function TeamDetail({ params }) {
  const { id } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/team`, {
    cache: 'no-store'
  })

  const team = await res.json()

  const member = team.find((m) => m.id == id)

  if (!member) return <p>Data tidak ditemukan</p>

  return (
    <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
      <h1>{member.name}</h1>
      <p>{member.role}</p>
    </section>
  )
}