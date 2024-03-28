const accountId = context.accountId;

const shrinkToken = (value, decimals) => {
  return new Big(value || 0).div(new Big(10).pow(decimals || 24));
};

const expandToken = (value, decimals) => {
  return new Big(value).mul(new Big(10).pow(decimals));
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

const LONK_TOKEN_META = {
  decimals: 8,
  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAACGVBMVEUAAAB533in7aas7ayd6Z177X6r76tk2mR/4H5633lt3Gyo76mn7aev7a+J44io66iC7YSS7pOa75ux77Cw7LCQ75KT6JOb65uW5ZWn76eG7og2zTVa2Fle52Fc6F9e319d52D///80zDMAlQBi7WUjySEVxBQAnQBR5lQBjAJrwzk40zk4dDQYAwJn/20ApQARHgYQWiEDfgJK00oYEAgAqwBa11oGAQC1VioQaycGYgG68LpD5Ebp++kIUQIFawEGWQEDdAFP31AAsgB03HNj+WgHQgGN44wSLQTz/PPF8sUHEgOF4YQzEwwHvgYNSgN4ykDSZDG/WiwIehPf+N9833xvzDoLRhk+Fw4SNwSs7KwwaTECOQDX9tc8fTiWRSKV5ZU/ZzERZCAlMhVPHxIELQHN9M2T8pY/hTpEdTjJXS4XLRJs/3Vw63M0SiYvnRgpJRBZulVJ5ExsJBhq2GlIjkAWSyYvQh8INxVVq09RmzYwNh94JRphJBWf86JNnkYOdid2NBsWNhkLbBWpTyg5pSCH/4t4bmtiujdErSSNKB4jDg1bz1k5WixbrTigSSWGPSCi6KGjjJhZSkk5xCYc2RyAzkNTtS0iQhsgfxkYsRe+rLeE7Yd9+36tPigklhT25fPb1taTfIdqYFxYxlVPOz1UDA5qSld63T9ARzVRyTNAIyucNSTkxt3RyMo7t0ApVR0XohW6jq/FRfhfAAAAIHRSTlMAxkciaP5R8LTV2W1dLqY7772oGgnQkH12EtyR15NvuXcXh9gAABKwSURBVGjetNM9b9NAGAfw5sVJIUnzRqCtoFyOu+PQIQvJkhmSLJZFVFNlahaLojBgqxIeiFgQUr4ALN37Ybk0tR9fE8d2m/63KLJ/ft727pGjUvPk5OSVTKF13Gt3nteapb1HzbPi4f7L10+riKNV+Cok0I7bL4pHe4+SUnm/amBKMSdICV/5KGh1ao1dq93yvikkusyaDNUTrV3r7pBtHlRDFeQEnLQ6xR2x9YKBQQU50Q7a9Z2wYbEQSod8PrzJfM5l1sru1R7IFiWroowxioV57fsLd7Hw/euAIH7jKzZpVx6yyAeGwlLGsDl1nfO+kpE38DU0H8Zt2fDOvY/70MQ0rlLjbKCYiu4sAj5UaO1+/W4oXWbMOHP6KblYBLLueL8b+d2yGWfpr8FpP0ucax6ntdz7/VxQYPHU62fOuS9pKLqTi+0WMIVqp5sHeyqTSEPRvW52t1mlsFKmdxf03JltGoaQMQzTnrne6d1ha7GiW82sbsWEcoWros7YXF4VpVjcBNPlL2GOHRUfEEmHg67kdSmzR8rbbLFULIsjEgVxyxJSF/ZA+UQ/r1w3QpdhNz65sVSFxVdaLGQZbi3/Hce3wYkmzYN6hnrBNWKv8WzKsIVUU9WRhRm1L+CZURAVHVSy95nZsWptWQ4HNcm2hEpDu9O63Qhdymbw/JgygUDdZiNJj+FJd8jDOTe23m81cq9gVmICbBZ6IhzYx3kot7bd85PIhQ2dMmYBm4W2GJvCZ0dyL9k9wGvuuTERwGalxQQW0wm7jTqph8TcqFMUys1XNB1E7whlUk8YcLhYsFdXjKI0VtfJBhrBlsCGaaWNcIHevaPZBKeVS/Sf7/9tkgmezOCqto25LOjKNcBNHa+uX374+FXfPGiQg1uZ1Nbdo9tGUzzK4Zp/Pr/79A3ghJpHPGx2N3Gjo4V2U13y4/ffL2/efr/UE5c73FJvNWbO1za7aVB1wM5/xsvttWkojuPeFUFU8K4PupM0PdQkp6dpwyLmYkyMVs3DFKlUoR0Vh7M4cdYhOFFkD24v7YtQH9zmGGN4wb/QX5pz2pz6MA+sdKeln35/v+/v0tzETlztqWkpGNUFsKg5d2sszc+PjrcOHuibLDiyvAM30BpViigVwVKgaRmyLPPESSzYY/46UJDFQJdyF3fgBu0qxlQAa1Ba3xcWslWVK4l9JC8dEAUzboW97fbdazvpfVtFODmolZoLoHPzK1+iyFzMaL529zb7yK8s2OeEXypMsPyIeSFX2InbrpcRhYP1xNWSFsw1OlErdCkiAB6RCzzN914KkkXBvLcXcizBoleCIJAkxiVWRIzkkGp7dvbifIe0AIowsqclSQh2YcxfJ/+1tHyPzd9/Ay1BJJfn5uYq8AT+aZuE1GzLcRy3RozGzHQdqBgOnao+5YJ5sG9kixmMfSRTw4Lgq0KgU4UVSF8tOV9WFrTZhhlSpawPTlmndVN1UcKd+lh88IK5MhPsq1yyWMvQtETB98cdrV1sPANJOPlwL2xdniHU19HwKGXFIYaNpprF4mQ1tZoQ7Ossy0zy/rPDLp0KfsVeHxesLRgtXNaVlOL7VVMpM+YI7RrG68lisWh8D0RwIvkRNzbr2OJY4va7PiZYWzQdXxlCyjFh30E4ZVRTP0xOkrYgWJT8hNnruDCH5RLvWaLgYFl1/BFA9wysj0FZKBzVmOS1JErm/et5no0KIdI3mKVzoqW1Tng3sZDCwMQqDzi6rsDRM+p9TNRpbXQkDs7zz37HYr1vAD7EFq0nrIYnBO7ssgE1E9sORQlDtyI9wSLPcuM4jG3XQ2XO1nVy5/vizOVGY+bx/OJcJdAYeYLV8qOX+VGsTxwUIn0FBAsLRofYcVyLDBK5WEF6aJUVjKhtWx6lnmfZYS2m3GuKXlNbdr1eD+stEtV+z6dugRXsihDrYycG3SON9G1urXwGrEHlJFFWfB3HJMQKtpFieQqGZ4AFO9/1sR3BJbd3RBT2nHp1dTng9hJi/XwPgM8IC8DNQiHLnSfYqkfT7Xa1Tn3FcnRKddsCVv3Z9NtezzSrsaPcVWwLDzUbBEH/mvrYbE6aDY3ba+Im27LTTff0KMVs47mVjbSkTbeq293+j28bm93tFvI9jBTPQnVjc62/+u3S5np/TVWNGPsID12PoKqKcKCXdDSJ901Wq1cvjpJ8WM4OxBtCpKXF371vcLu0BH+m6pUpUqhV/dwffP/1Hjx8NlV1OwnHsKAd9XVzwH0RBP/4ev9LPhv3VuRsiiuy2LQe/4DLVXP1Ut8AAkVUt0Lyc/DWn3CbfB3V3PizFeKhZr9mTAKXGFKmpOUK79d8w95TSsEP0xRPFCSh9NeT2665vWGaqrm5RSmmbje5S5gbSxvABfLPS39US+dpRkkLq36+yLhCkq9wd/H2Iac5eCIL3SP4tJQizARgLv2wMdWb31Jwz0yvkxcurduZ7umqzTcdbVbKDkfWJh7l86xdn2LeSifTw5wI/gWK03gSQzW3uy8wxvNssA/UpuBez/LR6OhEVVcWFirQvYZgCOnIXfn8KTaL5ZLoLX6klUReNwUT13Ggfp8ycC8BG5GRoKnPUsz95Yat6FlnZi7QJMFdbNuEmbw7BVdY+5DHth2ylmT+c8KwYfjpCMir6XvXBmCPwAMq21jJDoykoWPPrkedebYIydeF3nWcV9MrbmpxQKy0Wl3QvApyadqSda+1xcaYymINYzKyhEnp28bUxymKwYnVtwOyxKV9TevpJAPzllaaEMFtyw+/rK/1ey2H4jSMNgm3uj8G9WQMyLFOa9zSXDE2XheT03xvTqfgiRKrJ17IB1PwfQYuiKNpxYQB4LiWE9uUt+PYwmG8tbTW7W+aBoEJgV2qj68FEdQyFPMDsyNJaT2VhEI+tusC7x+8Uws/yogTxw4qe9CRlWGZ1tyyQmEsuh7FsAkpuDmVvpABWwZgi8R4qgWskAtpIb/j4PPZ2XSVgflvXxV2nkHPwNndTrEshB0PK7AeIPrxwQcXZoOCMQzsbKzfvzE7y2BqDr76n2DtL1/m1qM0FMTxqDFeHvTFaHzyQrUWaWlrEbqJBURIdUUDValZBZWuLltiWBFEAZdbiOIFfNCoiftkNj6Y6Ed0TtvD2VJwnoCS/jLnnJn5z5z3lWUmBI7ScJJpxCNxChAxdjMFBoL3pkjTTFRRQBeQJQ+qplrcRHG8CHxiwVJzL9l7yCFx6gPjPj9BqyKLDHwA/6NMMMQsqVFMDilsqYyx85Z60eHiNliUjGheom0PYuy0whM4mFP/Q/HUTeYGc5ehp5v8dQODyeEi4AXhRFFFxUqCcdFhRO/GCNHtOhw1hddH28u+RBTHVTCqLrGbZQL2hNMuLOZdVTH5k7dPKfaSAT05Fxr0xZXVdHUrs1UBOcZMd0aUNDFcIz57EognZWLtcY9IWi8QiOipuKTcq+jV3+uZcZuH9oYm//DxvU582iqTlLkXp0xcJK6SImF5rG+rihUxQMAGXyweiKpoDORlRTdao631TLYL/55ZEZrvCfJS+CWQvUUCGrcFZZErjjK/q0blbiqlKLEly2KxmKKgCFIrQKy2Rr+3splMJjIx0sbvLo50AjZlyFzse85bFoF8dIEQ4Fa24aXZyNZo1GpVHWuBjUbA24pk1wG5nh1M2oauG4XMCOLIC0YCCFK1DX5sA55RthBYIH0oakWvju33A8Ey+Ox8y2Yj40kXmOm00Z5EMuuGQrgE3HkkOxKXSJ9PMEyypM8isZfkiul0Wjfa1W53UnBsMul2q20DgPazbmGQhR0epXM07QGrMKTgeV4KcDsP9XU060dib5G85f4Y6wXklI4oxOC7AcRJYQDLkQWLjHQ+5yNcIn+aG5ubmy/fU66zdfEsrCkFYbxA0ANYz6I1zUYig/HY8Xg8BpxtEdvGLZ1vyAzhEvC9d+/LILqSrubpEiKdP2nNzI/hFsatb7mv24PIf21QaBlpviFoLn9J/y5JG5xH3Z61yOdQC7MbN23ueUDyZO9de1IYDwYzfPhhXJi02tv6O76RkzXGu78MAisSjiXStMEW21lj93/a1CR0bGy6AmeoDYHUBUOB1Ubbnn4n8QAVNKhYXiwtajTSZqy8+o7i3G3qBZu174jVmJ+Z35hT5RXoBhu5hsrzpoREncmDmQ1A9jUGIQgVPk+5gvXMJ/U6y02OcjXmDmr/nFEEkdbcZkoE8SJ0ZFk2QVOrUq4ja5qDJEx7HoGmmhavX9esRyFooeRwidt5ph+ctVDn7VHEngXDF662eiOo9VhTECTVBxlbkXihD3Ufm5XIQX2A/FJuCgKcbRrcrfdppzCyoLrYDQ4NX265VvrinrnjpufO8aKo5moipPVAsccSTBSaYEEyZdkio1GbiMYg9+6qfLH5tF63gMyjOuaiSOblzmoxSY4WDN8t8K75A7b7eMCWpGA0HOoIoEWi0RCt5GRB4iUemyRJlUrzxYeH+bW1FQGsD1hBI41ynM01cuFaeTpgu0JW2jtSJC4jnfkwHIf50o14NBHlVcnswDzpabP5FOzDh4eBPCDX8vlAIGCBAdtn6J3imv1bLL5MgsMke6CVPj47RL0+O0SlyjWWT8GgIRjj4wlG6pkfpK+1Wh7hEJCY1TbMxDTNwA5TSRiikiBGdmh2bAxp0zM2Lm/ABsMrYnC66Efhh6+fV9jAWmDWSkKu743pRKrCcTA2djt84fB/BuXkZq9cWk1YMcP0UXX98WT4lMXOEltZEQmVWGj5YfkMxDBxGMAHXHchp11XA9fIADd5kY2G0LIJZh1aodJwOHwqrc1iX/mDjM9rQZH98xlfDTiret51tXlw5jLkNllsrhRmgigfQWU3l7/++DH8If3Nu7D5j3e+vGVcyRq7/+07vgx57jh8EDOxy4uufyiuicg+rQ6RlDOB+6QELhNu4JX/jt/vp3eSl2wJxtCfL5/CNWCOw2SXpxtyi1x4JSloooIoO/SExovhj+HwBZsn7tbeIKzf5TIt3vVZSeYsiEh8bMgOE0PFEZ8v7xUfRzUlLQgZUhOWXw6HV4rhSh5z1978ugPmf/PmjW8HOZRSQ8Al19e3wWFcEN22a/ZS89O/2s3vpW0oiuO0k7VWdAzEdsynq7nSxGwNiSlbDSj7EZ2BBUYtKBV1sDkmZkKH1cGQQUeLUBjYlvalL3uQvvkf7tw2yWkwXW2r3xel1nx6zz2nJ+39HjzUPPwrKlIc1pH/+PvzsbiRUZzlHpSL5fIZqFw2C3HPvd7KEnD/YKCxL3n1oPcx7vybk5WXv6S5hfONvZ+nycR5Xtlpc3eA2KEWed4stsH4frlKOfcYl9gXV32sEVECwswG6Tb5cC/xagkCGZcSueNkHg4eINQszPymLZ7JvIagYCW9rVeA697idRTt5cXAbcaj+menSbgga3mZky9J6BQvEj8OgPu9DUSZkF6rc8+dgqLAxQ3GzLqpSV9zAqTWxUrnFAJ6syi1j3iODuA9w+Gi4MPsmlNHsL94FUKwD/toQvCzY8wfJeyvC88VRdqHXpBRtrcXy16sXVFL78U4S+drSlKuKcLhQjvsocc3DShZmdbjdq+RlEz7O6S1i8WDInJRRegLayIkQ4PKWfe1U45gV/LXtK/lpkKv43EGzigS0/7GSRnC7CPTgs+1otigHKQJcntvMNZUziVv4b/KtAHRW/gAtzJtcrJ+VeX9VC3GYbl1KuPL3nK5of8aU4O+tiqD0AaL9FcG3s9/K1g13jS9UPZAqTQ316hUDLTv7bpc9dGtjXOvkZxNA3pfzAMXiunkqmZZhVIRWI54vlawLKt2SQkaybCOCCf3tbBNIFnVuq1zAm3WpUwGtnjvyjQZp2kVCoVSqcB+bTatUqsF2C4zpaYiF3rSAGQoCVRWX4Y0q0uKeHbViWytBEiAsuXXWi2OCka229NIkDsxmE2Ro2mP4zGVXq40mvXaprOr1WrV5M3NzRZp2yPXu5+cphyud2BDaCdBUVpKn1/mmLn70pZjCE1pXkOoQInDVR8OYYGlNJe94aTe0rstsPrWO4B6lM1RNNGGggNYycf7m37X1zVNW/c1/RocLpeMD2Ysn/LYnLFE+isLVY82dGFqeiRjN8mlbodN5dhqcXsnhrGyE6+VXe/r7v6kyx4sCQw3ohJVuRvmfa0XVEsZQO1+PqdGhx5XCNsljWyiGjiugGluqBAT73Pl8CgTOcFx3wENWc2lDX13VzfSOVUWWGETjzghAMU7ksYiAgYcw0hd+f1ViODNxghoHMLpL4aVA2NYQyMpOIXDTv2oRA0H73K8KxZQ4ar9qYHYnY+3Tcbao2X+dPawHArEIJHvQ0+C0XAEstgmuT8EWY2EZ2CY7j41PRmMzYQDkdDsU9BsKBIIz8SCkwNn0z8g0lPD3h9FvAAAAABJRU5ErkJggg==",
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

const ExchangeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{
      cursor: "pointer",
    }}
    onClick={() => {
      State.update({
        tokenIn: state.tokenOut,
        tokenOut: state.tokenIn,
      });
    }}
  >
    <path
      opacity="0.5"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.25977 12.9751C8.25977 13.5274 8.70748 13.9751 9.25977 13.9751C9.81205 13.9751 10.2598 13.5274 10.2598 12.9751L10.2598 3.3924L12.2975 5.40399C12.6905 5.79199 13.3237 5.7879 13.7117 5.39487C14.0997 5.00183 14.0956 4.36868 13.7025 3.98068L9.9623 0.288376C9.6753 0.00505281 9.2462 -0.0781458 8.87411 0.077387C8.50202 0.232919 8.25977 0.596739 8.25977 1.00003L8.25977 12.9751ZM5.27273 1.02496C5.27273 0.472672 4.82501 0.0249573 4.27273 0.0249573C3.72044 0.0249573 3.27273 0.472672 3.27273 1.02496V10.6077L1.70253 9.0576C1.30949 8.6696 0.676343 8.67369 0.288346 9.06672C-0.0996505 9.45976 -0.0955657 10.0929 0.29747 10.4809L3.5702 13.7117C3.8572 13.995 4.2863 14.0782 4.65839 13.9227C5.03048 13.7671 5.27273 13.4033 5.27273 13V1.02496Z"
      fill="#91A2AE"
    />
  </svg>
);

const ExchangeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Exchange = <ExchangeWrapper>{ExchangeIcon}</ExchangeWrapper>;

State.init({
  tokenIn: NEAR_META,
  tokenOut: LONK_TOKEN_META,
  amountIn: "1",
  amountOut: "",
  showSetting: false,
  slippagetolerance: "0.5",
  estimate: {},
  timerIntervalSet: false,
  reloadPools: false,
  loadRes: (value) =>
    State.update({
      estimate: value,
      amountOut: value === null ? "" : value.estimate,
    }),
});

if (!Storage.get("count")) {
  Storage.set("count", 21);
}

let timerInterval;

if (!state.timerIntervalSet) {
  State.update({
    timerIntervalSet: true,
  });
  timerInterval = setTimeout(() => {
    const count = Storage.get("count");

    if (count === 1) {
      State.update({
        reloadPools: true,
      });
    }
    Storage.set("count", count === 1 ? 21 : count - 1);

    State.update({
      timerIntervalSet: false,
    });

    clearTimeout(timerInterval);
  }, 1000);
}

const Container = styled.div`
  width: 430px;

  color: white;

  .swap-title {
    font-size: 20px;
    font-weight: 700;
  }

  @media (max-width: 736px) {
    width: 100%;

    .swap-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
    }
  }
`;

const Refresh = styled.span`
  margin-left: 8px;
  font-size: 12px;
`;

const RefreshText = styled.span`
  margin-left: 4px;
  font-size: 12px;
  color: #7c7f96;
`;

const RateLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
`;

const RefreshWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #7c7f96;
`;

const notEnough = new Big(state.amountIn || 0).gt(
  new Big(getBalance(state.tokenIn.id, state.tokenIn)).minus(
    state.tokenIn.id === "NEAR" ? new Big(0.5) : new Big(0)
  )
);

const canSwap =
  Number(state.amountIn || 0) > 0 &&
  Number(state.amountOut || 0) > 0 &&
  !state.loading &&
  Number(state.slippagetolerance) > 0;

const register = Near.view(
  state.tokenOut.id === "NEAR" ? "wrap.near" : state.tokenOut.id,
  "storage_balance_of",
  {
    account_id: accountId,
  }
);

const callTx = () => {
  const tx = [];

  const nearDeposit = {
    contractName: "wrap.near",
    methodName: "near_deposit",
    deposit: expandToken(state.amountIn, 24).toFixed(),
    gas: expandToken(50, 12),
  };
  const nearWithdraw = {
    contractName: "wrap.near",
    methodName: "near_withdraw",
    deposit: new Big("1").toFixed(),
    args: {
      amount: expandToken(state.amountIn, 24).toFixed(),
    },
  };

  if (state.estimate.pool === "wrap") {
    if (state.tokenIn.id === "NEAR") {
      tx.push(nearDeposit);
    } else {
      tx.push(nearWithdraw);
    }

    return Near.call(tx);
  }

  if (register === null) {
    tx.push({
      contractName:
        state.tokenOut.id === "NEAR" ? "wrap.near" : state.tokenOut.id,
      methodName: "storage_deposit",
      deposit: expandToken(0.1, 24).toFixed(),
      gas: expandToken(50, 12),
      args: {
        registration_only: true,
        account_id: accountId,
      },
    });
  }

  if (state.tokenIn.id === "NEAR") {
    tx.push(nearDeposit);
  }

  const minAmountOut = expandToken(
    new Big(state.amountOut)
      .mul(1 - Number(state.slippagetolerance) / 100)
      .toFixed(state.tokenOut.decimals, 0),
    state.tokenOut.decimals
  ).toFixed();

  tx.push({
    methodName: "ft_transfer_call",
    contractName: state.tokenIn.id === "NEAR" ? "wrap.near" : state.tokenIn.id,
    gas: expandToken(180, 12),
    deposit: new Big("1").toFixed(),
    args: {
      receiver_id: "v2.ref-finance.near",
      amount: expandToken(state.amountIn, state.tokenIn.decimals).toFixed(0, 0),
      msg: JSON.stringify({
        actions: [
          {
            pool_id: Number(state.estimate.pool.id),
            token_in:
              state.tokenIn.id === "NEAR" ? "wrap.near" : state.tokenIn.id,
            token_out:
              state.tokenOut.id === "NEAR" ? "wrap.near" : state.tokenOut.id,
            amount_in: expandToken(
              state.amountIn,
              state.tokenIn.decimals
            ).toFixed(0, 0),
            min_amount_out: minAmountOut,
          },
        ],
      }),
    },
  });

  if (state.tokenOut.id === "NEAR") {
    tx.push({
      contractName: "wrap.near",
      methodName: "near_withdraw",
      deposit: new Big("1").toFixed(),
      args: {
        amount: minAmountOut,
      },
    });
  }

  Near.call(tx);
};

const inputOnChange = (e) => {
  const targetValue = e.target.value;
  if (targetValue !== "" && !targetValue.match(/^\d*(\.\d*)?$/)) {
    return;
  }

  let amountIn = targetValue.replace(/^0+/, "0"); // remove prefix 0

  State.update({
    amountIn,
  });
};

return (
  <Container>
    <div className="swap-title">Swap</div>
    {
      <Widget
        src="weige.near/widget/ref-swap-getEstimate"
        props={{
          loadRes: state.loadRes,
          tokenIn: state.tokenIn,
          tokenOut: state.tokenOut,
          amountIn: state.amountIn || 0,
          reloadPools: state.reloadPools,
          setReloadPools: (value) =>
            State.update({
              reloadPools: value,
            }),
        }}
      />
    }

    {
      <Widget
        src={`huunhanz.near/widget/ref-token-input`}
        props={{
          amount: state.amountIn,
          disableInput: false,
          inputOnChange: inputOnChange,
          setAmount: (value) => State.update({ amountIn: value }),
          token: state.tokenIn,
          handleSelect: (metadata) =>
            State.update({
              tokenIn: metadata,
            }),
        }}
      />
    }
    {Exchange}
    {
      <Widget
        src={`huunhanz.near/widget/ref-token-input`}
        props={{
          amount: state.amountOut,
          disableInput: true,
          setAmount: (value) => State.update({ amountOut: value }),
          token: state.tokenOut,
          handleSelect: (metadata) =>
            State.update({
              tokenOut: metadata,
            }),
        }}
      />
    }

    <RateLine>
      <RefreshWrapper
        onClick={() => {
          clearTimeout(timerInterval);
          State.update({
            reloadPools: true,
          });
          Storage.set("count", 21);
        }}
      >
        <Refresh>{Storage.get("count") - 1}</Refresh>
        <RefreshText>Refresh</RefreshText>
      </RefreshWrapper>

      <RateWrapper>{`1 ${state.tokenIn.symbol} ≈ ${
        Number(state.amountIn) === 0
          ? "-"
          : new Big(state.amountOut || 0).div(state.amountIn || 1).toFixed(4, 0)
      } ${state.tokenOut.symbol}`}</RateWrapper>
    </RateLine>
    <Widget
      src={`weige.near/widget/SlippageTolerance`}
      props={{
        showSetting: state.showSetting,
        updateSetting: () =>
          State.update({
            showSetting: !state.showSetting,
          }),
        slippagetolerance: state.slippagetolerance,
        setSlippagetolerance: (value) => {
          if (value !== "" && !value.match(/^\d*(\.\d*)?$/)) {
            return;
          }
          if (Number(value) > 99.9999) return;

          let slippagetolerance = value.replace(/^0+/, "0"); // remove prefix 0

          State.update({
            slippagetolerance,
          });
        },
      }}
    />

    <Widget
      src="weige.near/widget/ref-swap-button"
      props={{
        accountId,
        notEnough,
        canSwap,
        callTx,
        requestSignIn: props.requestSignIn,
        noPool: state.estimate?.sig === "no_pool",
      }}
    />
  </Container>
);
