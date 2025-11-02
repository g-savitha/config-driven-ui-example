export default function Banner({ data }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Banner Component</h2>
      <p>Image: {data.imgSrc}</p>
    </div>
  )
}