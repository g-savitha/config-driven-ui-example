import styled from 'styled-components';

const BannerContainer = styled.div`
  width: 100%;
`
const BannerImage = styled.img`
  width: 100%;
  height : 250px;
  object-fit: cover;
  border-radius: 8px;
`
export default function Banner({ data }) {
  return (
    <BannerContainer>
      <BannerImage src={data.imgSrc} alt={data.alt} />
    </BannerContainer>
  )
}