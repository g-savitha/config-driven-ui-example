import styled from "styled-components"

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Text = styled.h1`
  font-weight: bold;
`
const SubTitle = styled.h3``
export default function Title({ data }) {
  return (
    <TitleContainer>
      <Text>{data.text}</Text>
      <SubTitle>{data.subtitle}</SubTitle>
    </TitleContainer>
  )
}