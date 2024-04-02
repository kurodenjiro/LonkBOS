const accountId = props.accountId;
const shrinkToken = (value, decimals) => {
  return new Big(value || 0).div(new Big(10).pow(decimals || 24));
};

const expandToken = (value, decimals) => {
  return new Big(value).mul(new Big(10).pow(decimals));
};
const [amount, setAmount] = useState("");
const onStakeClick = () => {
  if (accountId) {
    const gas = 300 * 1000000000000;
    // TODO: doesn't support floats right now due to limitation of JS integers
    const deposit = Big(amount).mul(Big(10).pow(24)).toFixed(0);
    console.log(gas, deposit);
    Near.call(
      "lonk_validator.poolv1.near",
      "deposit_and_stake",
      {},
      gas,
      deposit
    );
  }
};

const account = fetch("https://rpc.mainnet.near.org", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: "dontcare",
    method: "query",
    params: {
      request_type: "view_account",
      finality: "final",
      account_id: accountId,
    },
  }),
});

const accountNum = JSON.parse(
  fetch("https://indexer.ref.finance/list-token-price").body
);
const getBalanceNum = (token_id) => {
  if (token_id && token_id.toLowerCase() === "near") {
    return accountNum["wrap.near"].price;
  }

  return accountNum[token_id].price;
};

const LONK_TOKEN_META = {
  decimals: 8,
  icon: "data:image/png;base64,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",
  id: "token.lonkingnearbackto2024.near",
  name: "LONK fungible token",
  symbol: "LONK",
};
const NEAR_META = {
  decimals: 24,
  icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMTcuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siLz4KPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMTcuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC42MDc4IDEyLjUwMjlWMjMuNjE5M0wxNi4yOTIgMTkuMzcyMUwxNi44NjA0IDE5Ljg3MDZMMTIuMDkzOCAyNi41ODQ0QzEwLjMyMjggMjguMjA5MiA3LjE5NzI3IDI3LjEwOTkgNy4xOTcyNyAyNC44NjIyVjExLjEzNzFDNy4xOTcyNyA4LjgxMjI4IDEwLjUwNTggNy43NTMzNCAxMi4yMTMzIDkuNTMxNkwyNS4zODY3IDIzLjI1MDRWMTIuNTkwMkwyMC4yNzEgMTYuMzgxMkwxOS43MDI1IDE1Ljg4MjdMMjMuNzU2NyA5LjYxNTZDMjUuNDQ4OSA3LjgwNDQyIDI4Ljc5NzMgOC44NTM3NiAyOC43OTczIDExLjE5NTNWMjQuNjE2M0MyOC43OTczIDI2Ljk0MTEgMjUuNDg4OCAyOCAyMy43ODEyIDI2LjIyMThMMTAuNjA3OCAxMi41MDI5WiIgZmlsbD0iIzBGMUQyNyIvPgo8L3N2Zz4K",
  id: "NEAR",
  name: "NEAR",
  symbol: "NEAR",
};

const getBalance = (token_id, tokenMeta) => {
  let amount;

  if (!accountId) {
    return "0";
  }

  if (token_id === "NEAR") amount = account.body.result.amount;
  else {
    amount = Near.view(token_id, "ft_balance_of", {
      account_id: accountId,
    });
  }

  return !amount ? "0" : shrinkToken(amount, tokenMeta.decimals).toFixed();
};

const Container = styled.div`
    display:flex;
    justify-content:space-around;
    max-height:600px;
    padding:10px 0;
    align-items:center;
    border-top:2px solid #31cf34;
    @media screen and (max-width:768px){
        flex-direction:column;
        justify-content:center;
        gap:30px;
        max-height:900px;
        height:100%;
        padding:30px 0;
        width:100%;
    }
`;

const Content = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;
const Title = styled.div`
    display:flex;
    flex-direction:column;
    text-align:start;
    gap:2rem;
    @media screen and (max-width:768px){
        flex-direction:column;
        text-align:start;
        gap:0px;
    }
    .title{
        font-family: Lakki Reddy,cursive;
        font-size: 5em;
        text-shadow: 0 4px 4px #00000040;
        text-transform: lowercase;
        color:#31cf34;
    }
    .sub-title{
        font-family: Lakki Reddy,cursive;
        font-size: 6em;
        text-shadow: 0 4px 4px #00000040;
        text-transform: Upcase;
        color:#31cf34;
    }
`;
const Stake = styled.div`
    height:320px;
    width:450px;
    border:2px solid #31cf34;
    border-radius:10px;
    padding:25px 20px;
    display:flex;
    flex-direction:column;
    gap:4px;
    text-align:center;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:768px){
        width:400px;
    }

    .title{
        width:70%;
        word-wrap: break-word;
        font-size:19px;
        color:#000000;
        font-weight:600;
    }
    .amount{
        font-size:3rem;
        text-decoration: underline;
        font-weight:600;
        color:#000000;
    }
    .sub-amount{
        font-size:14px;
        color:gray;
    }
    .available{
        font-size:15px;
        color:gray;
    }
    .footer{
        margin-top:10px;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        gap:10px;
        background:#31cf34;
        padding:10px 20px;
        width:100%;
        border-radius:20px;   
    }
    .avatar{
        margin-top:2px;
    }
    .title-footer{
        display:flex;
        flex-direction:column;
        gap:3px;
        text-align:start;
    }
    .button-stake{
        background:#ffffff;
        color:#31cf34;
        padding:10px 20px;
        outline:none;
        border:none;
        border-radius:10px;
        font-weight:600;
        cursor:pointer;
        &:hover{
          background:#8ce98e;
          color:#ffffff;
        }
    }
    .text{
        color:#ffffff;
        font-weight:600;
    }
    .swap{
      border:none;
      text-align:center;
      width:200px;
      outline:none;
      &::placeholder{
        text-align:center;
      }
      &:focus{
        border:none;
      }
    }
`;

const LONK_ICON =
  "data:image/png;base64,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";
return (
  <>
    <Container>
      <Title>
        <div class="title">Stake</div>
        <div class="sub-title">$NEAR</div>
      </Title>
      <Stake>
        <div class="title">Stake $NEAR with LONK, secure the network</div>
        <div class="amount">
          <input
            onChange={(e) => setAmount(e.target.value)}
            class="swap"
            type="text"
            placeholder="0"
          />
        </div>
        <div class="sub-amount">
          ~{Number(getBalanceNum("NEAR")).toFixed(3)} USD
        </div>
        <div class="available">
          Available: {Number(getBalance("NEAR", NEAR_META)).toFixed(2)}
        </div>
        <div class="footer">
          <div class="avatar">
            <img src={LONK_ICON} alt="logo" width="40" height="40" />
          </div>
          <div class="title-footer">
            <div class="text">lonk_validator.poolv1.near</div>
            <small>Uptime: 100% APY: 10,89%</small>
          </div>
          <div>
            <button
              onClick={onStakeClick}
              data-bs-toggle="modal"
              data-bs-target="#stake"
              class="button-stake"
            >
              Stake
            </button>
          </div>
        </div>
      </Stake>
    </Container>
    {!accountId && (
      <div
        class="modal fade"
        id="stake"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div
              class="modal-body d-flex justify-content-center align-items-center"
              style={{
                fontWeight: "600",
                backgroundColor: "#31cf34",
                color: "#fff",
                fontFamily: `${fondKod}`,
              }}
            >
              <Content>Please connect wallet!</Content>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
