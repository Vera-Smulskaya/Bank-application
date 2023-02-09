import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  background: linear-gradient(62.93deg, #66659e 19.68%, #26bfbf 89.55%);
  width: 100%;
`;