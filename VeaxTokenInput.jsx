const accountId = context.accountId;

const REF_FI_CONTRACT = "v2.ref-finance.near";

const ArrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.231804 0.359841C0.585368 -0.0644363 1.21593 -0.12176 1.64021 0.231804L7.00003 4.69832L12.3598 0.231804C12.7841 -0.12176 13.4147 -0.0644363 13.7682 0.359841C14.1218 0.784118 14.0645 1.41468 13.6402 1.76825L7.00003 7.30173L0.359841 1.76825C-0.0644363 1.41468 -0.12176 0.784118 0.231804 0.359841Z"
      fill="white"
    />
  </svg>
);

const TokenAmount = styled.div`
  width: 430px;
  @media (max-width: 736px) {
    width: 100%;
  }
background:#3f3f3f;
height:100px;
padding:40px 20px;
  color: white;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  appearance: none;
  outline: none;
  width: 100%;
  background: none;
  border: none;
  font-size: 20px;
  ::placeholder {
    color: #7c7f96;
  }
  text-align:end;
  color: white;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;
`;

const TokenWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
  background-color:rgb(31, 31, 31);
  padding: 10px 20px;
  margin-left:-10px;
  clip-path: polygon(0 0,100% 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));
`;
const Icon = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 100%;
`;
const BalanceWrapper = styled.div`
  color: #7c7f96;
  font-size: 12px;
  margin-left: 8px;
  padding-top: 4px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 8px;

`;
const Symbol = styled.span`
  margin-right: 8px;
  margin-left: 8px;
  font-size: 18px;
`;

// 新增接口
const accountNum = JSON.parse(
  fetch("https://indexer.ref.finance/list-token-price").body
);
const getBalanceNum = (token_id) => {
  if (token_id && token_id.toLowerCase() === "near") {
    return accountNum["wrap.near"].price;
  }

  return accountNum[token_id].price;
};

const shrinkToken = (value, decimals) => {
  return new Big(value || 0).div(new Big(10).pow(decimals)).toFixed();
};

const formatToken = (v) => Math.floor(v * 10_000) / 10_000;

const formatTokenBig = (v, decimals) =>
  Math.floor(v * Math.pow(10, Math.min(decimals, 8))) /
  Math.pow(10, Math.min(decimals, 8));

const {
  amount,
  setAmount,
  handleSelect,
  disableInput,
  inputOnChange,
  balance,
} = props;

State.init({
  show: false,
  balance: balance,
  handleClose: () => {
    State.update({
      show: false,
    });
  },
  handleOpen: () => {
    State.update({
      show: true,
    });
  },
});

const SelectToken = (
  <Widget
    src={`huunhanz.near/widget/selectToken`}
    props={{
      show: state.show || false,
      handleClose: state.handleClose,
      handleSelect: (metadata) => {
        handleSelect(metadata);
        state.handleClose();
      },
    }}
  />
);

return (
  <Wrapper>
    <TokenAmount>
      <TokenWrapper
        onClick={() => {
          state.handleOpen();
        }}
      >
        <Icon src={props.token.icon} />
        <Symbol>{props.token.symbol}</Symbol>
        {ArrowDown}
      </TokenWrapper>
      <Input
        class="ref-token-inut"
        placeholder="0.0"
        onChange={inputOnChange}
        value={
          !!disableInput
            ? !!amount
              ? formatTokenBig(amount, props.token.decimals)
              : "0"
            : amount
        }
        disabled={!!disableInput}
      />
    </TokenAmount>
    <BalanceWrapper>
      <div>
        ~${" "}
        {formatTokenBig(
          getBalanceNum(props.token.id) * amount,
          props.token.decimals
        )}
      </div>
      <div>Balance: {accountId ? balance : "-"}</div>
    </BalanceWrapper>

    {SelectToken}
  </Wrapper>
);
