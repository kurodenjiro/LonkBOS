const config = {
    color: "#31cf34",
    image1:
      "https://bafkreidzrna3q6csqykuvzih6yywrijmdg4fn4tb53azjmmjuobfus4v2e.ipfs.nftstorage.link/",
    image2:
      "https://bafybeibuj22kfgmevy3os6akrswxosjyjv5q6tecyv5jsfpw7iccajp5qa.ipfs.nftstorage.link/",
    image3:
      "https://bafkreibeah7hmamkdzkrc7znm6u6jp4loiiy42shoyv2mb2hhlhiyynaia.ipfs.nftstorage.link/",
    image27:
      "https://bafybeicgrco3ybsfei42gyny5laphmf3edmqnsfq667pjxr6ap47q77gqq.ipfs.nftstorage.link/",
    image28:
      "https://bafkreigt2jhdt2qr6lshkdrf3fjeizcdofnqgvtqkjhxxhaamy3vqsyhvu.ipfs.nftstorage.link/",
  };
  
  const fkGroteskFamily = fetch(
    "https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap"
  ).body;
  
  const MenuMobile = styled.ul`
      height:250px;
      width:100%;
      padding:10px;   
      background:#fff;
      display:flex;
      flex-direction:column;
      gap:5px;
      justify-content:start;
      list-style: none;
      li{
          margin-left:40px;
      }
      li > a{
          text-decoration:none; 
      }
      span{
          font-size: 18px;
          font-family: Lakki Reddy,cursive;
  
          text-shadow: 0 4px 4px #efefef;
          text-transform: lowercase;
          margin-block-end: 0.33em;
      }
  `;
  
  const Main = styled.div`
    ${fkGroteskFamily}
    .main {
        display: block;
    }
  
    .intro {
        background: url(${config.image3}) no-repeat 100% 0 fixed;
    }
  
    .hero {
      display: flex; 
      flex-direction:row; 
      justify-content:space-around;
      @media screen and (max-width:768px){
        flex-direction:column;
      }
    }
    .green-bg {
        background-color: #31cf34;
    }
  
    h2 {
      color: #fff;
      font-size: 4em;
      font-family: Lakki Reddy,cursive;
  
      text-shadow: 0 4px 4px #00000040;
      text-transform: lowercase;
      margin-block-end: 0.33em;
    }
  
    .green {
        color: #31cf34;
    }
  
    .badge {
        background-color: #31cf34;
        font-size: 1.1em;
        padding: 3px 8px;
    }
  
    .green-bg {
        background-color: #31cf34;
        padding: 48px 0px;
    }
  
    .roadmap {
        background: url(${config.image27}) no-repeat 100% 100%;
        background-color: #52bfda;
        background-size: contain;
        min-height: 850px;
    }
  
    .lonk-near {
        bottom: 10px;
        left: 0;
        margin: auto;
        position: absolute;
        right: 0;
    }
    .roadmap {
      background-color: #52bfda;
      background-size: cover;
      min-height: 800px;
      @media screen and (max-width:768px){
          background-size: contain;
      }
    }
    .button-swap{
      display:flex;
      justify-content:space-between;
      gap:10px;
      @media screen and (max-width:768px){
          display:flex;
          flex-direction:column;
          justify-content:center;
          margin:60px;
          gap:20px;
          width:200px;
          height:60px;
      }
    }
    .about{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      @media screen and (max-width:768px){
          flex-direction:column-reverse;
          gap:10px;
      }
    }
    .image{
      @media screen and (max-width:768px){
          width:120px;
      }
    }
  `;
  
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  
  return (
    <>
      <Widget
        src="huunhanz.near/widget/headerSwap"
        props={{
          visible,
          setVisible: (value) => {
            setVisible(value);
          },
        }}
      />
      {visible && (
        <MenuMobile>
          <li class="nav-item p-1 p-lg-3">
            <a class="nav-link close-menu" aria-current="page" href="#">
              <span>home</span>
            </a>
          </li>
          <li class="nav-item p-1 p-lg-3">
            <a class="nav-link close-menu" href="#about">
              <span>about</span>
            </a>
          </li>
          <li class="nav-item p-1 p-lg-3">
            <a class="nav-link close-menu" href="#how">
              <span>how to buy</span>
            </a>
          </li>
          <li class="nav-item p-1 p-lg-3 position-relative">
            <a
              class={`nav-link dropdown-toggle ${dropdownVisible ? "show" : ""}`}
              href="#"
              id="toggle"
              onClick={toggleDropdown}
            >
              <span>bridge to near</span>
            </a>
            <ul
              class={`dropdown-menu ${dropdownVisible ? "show" : ""}`}
              id="dropdown"
            >
              <li>
                <a class="dropdown-item" href="/ethereum">
                  from <span class="text-capitalize">ethereum</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/solana">
                  from <span class="text-capitalize">solana</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/evm">
                  from <span class="text-capitalize">arbitrum</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/evm">
                  from <span class="text-capitalize">optimism</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/evm">
                  from <span class="text-capitalize">polygon</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/evm">
                  from <span class="text-capitalize">fantom</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/evm">
                  from <span class="text-capitalize">avalanche</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/evm">
                  from <span class="text-capitalize">BSC</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/suit-aptos">
                  from <span class="text-capitalize">sui</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/suit-aptos">
                  from <span class="text-capitalize">aptos</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item p-1 p-lg-3">
            <a class="nav-link close-menu" href="#token">
              <span>tokenomic</span>
            </a>
          </li>
          <li class="nav-item p-1 p-lg-3">
            <a class="nav-link close-menu" href="#roadmap">
              <span>roadmap</span>
            </a>
          </li>
        </MenuMobile>
      )}
      <Main>
        <div class="main">
          <Widget src="huunhanz.near/widget/Lonk.hero" />
  
          <Widget src="huunhanz.near/widget/Lonk.buy" />
          <div
            class="green-bg font-md-bigger py-4 py-lg-5 text-uppercase"
            id="token"
          >
            <div class="container">
              <div class="about">
                <div class="col-12 col-md-6 ">
                  <p class="mb-5 text-uppercase">
                    <strong>420.69 Billions LONK</strong>
                  </p>
                  <p class="text-uppercase mb-0">
                    83.058% LPs, <br />
                    16.9420% Reserved:
                  </p>
                  <ul class="text-uppercase">
                    <li>Airdrop</li>
                    <li>Exchange Listings</li>
                  </ul>
                  <p>
                    NO TAXES <br />
                    No Team Allocations
                    <br />
                    No VCS
                    <br />
                    No presale
                    <br />
                    NO BS
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 text-left text-md-end">
                  <h2>tokenomics</h2>
                </div>
              </div>
            </div>
          </div>
          <div
            class="roadmap font-md-bigger py-4 py-lg-5 position-relative"
            id="roadmap"
          >
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2>roadmap</h2>
                </div>
                <div class="col-12 col-md-4 col-lg-3 text-md-center">
                  <p class="text-uppercase mb-5">
                    Phase 1: lonk
                    <br />
                    Phase 2: $lonk
                    <br />
                    phase 3: lonkdrop
                    <br />
                    PHASE 4: EVERYONE LONK
                  </p>
                  <br />
                </div>
                <div class="mb-3 mb-md-5"></div>
                <div class="mb-3 mb-md-5"></div>
                <div class="mb-3 mb-md-5"></div>
                <div class="mb-3 mb-md-5"></div>
                <div class="mb-3 mb-md-5"></div>
                <div class="mb-3 mb-md-5"></div>
                <div class="mb-3 mb-md-5"></div>
                <div class="col-12"></div>
                <div class="col-12 col-md-7">
                  <p>
                    Disclaimer: <br />
                    $LONK is a meme coin purely for entertainment, with no
                    inherent value or promise of financial gain. It's managed
                    informally without a dedicated team or a set roadmap, serving
                    solely as a token of amusement.
                  </p>
                </div>
                <div class="col-12 text-center">
                  <a href="https://near.org" class="text-decoration-none">
                    <img src={config.image28} width="280" class="lonk-near" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
  