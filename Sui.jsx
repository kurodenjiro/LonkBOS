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
      .main{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        @media screen and (max-width:768px){
          flex-direction:column;
          justify-content:center;
        }
      }
  `;
  
  return (
    <>
      <Widget src="louisdevzz.near/widget/headerSwap" />
      <Container>
        <div class="py-4 container">
          <div class="title">Bridge From Ethereum to NEAR</div>
          <div class="step">
            <img class="bage" src="https://lonk.meme/assets/images/v.svg" />
            Bruv have many options. 1-step way:
          </div>
          <ul class="py-2">
            <li>
              <a
                href="https://app.rubic.exchange/?fromChain=ARBITRUM&toChain=NEAR&to=NEAR&from=ETH&amount=10"
                target="_blank"
              >
                Rubic Exchange
              </a>
            </li>
          </ul>
          <div class="main">
            <div>
              <div class="step">Multiple steps way:</div>
              <div> Step 1, Bridge to Ethereum, or any EVM chains using: </div>
              <ul class="py-2">
                <li>
                  <a href="https://portalbridge.com/" target="_blank">
                    Wormhole
                  </a>
                </li>
                <li>
                  <a href="https://stargate.finance/" target="_blank">
                    Stargate
                  </a>
                </li>
              </ul>
              <div class="py-3">Step 2, visit other guides pls 😭 </div>
            </div>
            <div class="col-lg-6">
              <div class="step">Another multiple steps way:</div>
              <div class="py">
                Step 1, Bridge to Ethereum, or any EVM chains from Aptos using:
              </div>
              <ul class="py-2">
                <li>
                  <a href="https://theaptosbridge.com/bridge" target="_blank">
                    The Aptos bridge
                  </a>
                </li>
              </ul>
              <div class="py-2">Step 2, visit other guides pls 😭 </div>
            </div>
          </div>
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