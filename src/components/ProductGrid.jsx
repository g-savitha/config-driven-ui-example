export default function ProductGrid({ data }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Grid</h2>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}