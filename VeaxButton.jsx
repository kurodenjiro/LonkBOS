const { accountId, notEnough, canSwap, callTx, requestSignIn, noPool } = props;
const chakraFont = fetch(
  "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
).body;
const Layout = styled.div`
${chakraFont}
font-family:Chakra Petch, sans-serif;
    --color-yellow: #F6FF8E;
    --color-pink: #FFB1E9;
    --color-blue: #1F36FE;
    background:linear-gradient(89.97deg, var(--color-yellow) .03%, var(--color-pink) 49.71%, var(--color-blue) 97.07%);
    clip-path: polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));

`;

const ButtonWrapper = styled.button`
  border-radius: 12px;
 background:none;
  font-weight: 700;
  font-size: 18px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 8px 0px;
  margin-top: 26px;
  height: 60px;

  @media (max-width: 736px) {
    height: 40px;
    font-weight: 500;
    font-size: 16px;
  }
`;

return (
  <Layout>
    <ButtonWrapper
      notEnough={notEnough && accountId && !noPool}
      disabled={!accountId ? false : !canSwap || (notEnough && accountId)}
      onClick={() => {
        if (!canSwap || notEnough) return;

        callTx();
      }}
    >
      {noPool
        ? "No pool"
        : !accountId
        ? "Connect wallet"
        : notEnough
        ? "Insufficient Balance"
        : "Swap"}
    </ButtonWrapper>
  </Layout>
);