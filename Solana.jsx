const config = {
    image6:
      "https://bafkreiejkfmncbzuni5lsrlpplmkqisasvjzgl4oxu3nnz7nmmjwwd56ii.ipfs.nftstorage.link/",
    image3:
      "https://bafkreibeah7hmamkdzkrc7znm6u6jp4loiiy42shoyv2mb2hhlhiyynaia.ipfs.nftstorage.link/",
  };
  const fkGroteskFamily = fetch(
    "https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap"
  ).body;
  const fondKod = fetch(
    "https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
  ).body;
  const Container = styled.div`
    ${fkGroteskFamily}
    ${fondKod}
      font-family: Kodchasan,sans-serif;
      background: url(${config.image3}) no-repeat 100% 0 fixed;
      .title{
          font-family: Lakki Reddy,cursive;
          font-size: 1.3rem;
          color:#31cf34;
          padding-top:20px;
      }
      .sub-title{
          font-weight:bold;
      }
      .step{
          font-weight: bolder;
          padding: 20px 0;
      }
      .bage{
          background-color: #31cf34;
          font-size: 1.1em;
          padding: 3px 8px;
          border-radius:5px;
      }
      li{
          text-decoration: underline;
      }
      a{
        color:black;
      }
  `;
  
  return (
    <>
      <Widget src="louisdevzz.near/widget/headerSwap" />
      <Container>
        <div class="py-4 container">
          <div class="title">Bridge From Ethereum to NEAR</div>
          <div class="sub-title">Bonk 🤝 Lonk</div>
          <div class="step">
            <img class="bage" src="https://lonk.meme/assets/images/v.svg" />
            Bruv have 2 options, only 1 step:
          </div>
          <ul class="py-2">
            <li>
              <a
                href="https://app.allbridge.io/bridge?from=SOL&to=NEAR&asset=SOL"
                target="_blank"
              >
                All bridge
              </a>
            </li>
            <li>
              <a
                href="https://app.rubic.exchange/?fromChain=ARBITRUM&toChain=NEAR&to=NEAR&from=ETH&amount=10"
                target="_blank"
              >
                Rubic Exchange
              </a>
            </li>
          </ul>
  
          <div class="pt-5 font-weight-bolder" style={{ fontWeight: "600" }}>
            Done bridging?
          </div>
          <div class="py-2">Get some $LONK bruv </div>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#buyModal"
            style={{
              padding: "10px 20px",
              height: "60px",
              width: "270px",
              border: "2px solid #31cf34",
              marginTop: "20px;",
            }}
            class="button py-2 d-flex bg-light justify-content-center align-items-center text-decoration-none rounded-5"
          >
            <img src={config.image6} width="186" />
          </button>
        </div>
      </Container>
      <div
        class="modal fade"
        id="buyModal"
        tabindex="-1"
        aria-labelledby="buyModal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Swap Token Ref Finance
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-center align-items-center">
              <Widget src="huunhanz.near/widget/ref-swap" />
            </div>
          </div>
        </div>
      </div>
    </>
  );