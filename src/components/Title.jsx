export default function Title({ data }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Title</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}