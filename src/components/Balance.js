import styled from "styled-components";

export default function Balance({ balance }) {
  return (
    <BlockTag>
      <Money>{balance}$</Money>
    </BlockTag>
  );
}

const BlockTag = styled.div`
  width: 100%;
  padding: 100px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Money = styled.div`
  font-size: 62px;
  color: #fff;
`;
