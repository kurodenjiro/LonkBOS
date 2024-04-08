const config = {
  btse_logo:
    "https://gateway.pinata.cloud/ipfs/QmZK8WaTq5pBQWVBFm3dQBbHD6saqyRzwiNfNEfNm5ip9p",
  orderly_network:
    "https://bafkreibdjomcmeszaxw7u4mwmc7scmhbiekdj65ftyj53ochuehhi6rb44.ipfs.nftstorage.link/",
  lonk_bot:
    "https://bafkreidusllz2u36hgmbvidbrliwrmxxpts57tljecslc4qtb72rpj2dji.ipfs.nftstorage.link/",
  image4:
    "https://bafybeib6kjh37qmodapxwjq3ukckhabckasdoamjas7ehigzqbjazu4kyq.ipfs.nftstorage.link/",
  image5:
    "https://bafkreieghanoutojyhkfxfrfqqjgtn76bnbi25kxwi5byankqz3on2elnq.ipfs.nftstorage.link/",
  image6:
    "https://bafkreiejkfmncbzuni5lsrlpplmkqisasvjzgl4oxu3nnz7nmmjwwd56ii.ipfs.nftstorage.link/",
  image7:
    "https://bafkreiag6wx5sg3o2e7nuvbdnpoonymm6dge4woi77o3oroxsdztggr7n4.ipfs.nftstorage.link/",
  image8:
    "https://bafkreielhfr3ybofrjwtbxg7b7qx6suw7noot3wfkpe3s54gbgg4cao5mq.ipfs.nftstorage.link/",
  image9:
    "https://bafkreienvdqrium4lwlfcoz3tctc6ez27hmsiiwv5bsiwjwo2xfolkv4q4.ipfs.nftstorage.link/",
  image10:
    "https://bafkreifjthkkuez3glfevsmjw7orgj4fuxofrtoh3zb6k2bqinloixqml4.ipfs.nftstorage.link/",
  image11:
    "https://bafkreigkwuy4k4txpn4jhivrwdagvvooiivbi3yywamv6krxv77bqitrmm.ipfs.nftstorage.link/",
};
const fondKod = fetch(
  "https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
).body;
const Content = styled.div`
      ${fondKod}
      color:#fff;
      font-family: Kodchasan,sans-serif;
      font-size:1.2rem;
  `;
const accountId = context.accountId;
State.init({
  select: "",
  isShow: false,
});
return (
  <>
    <div class="intro font-md-bigger py-4 py-lg-5 dragon-background text-uppercase text-center">
      <div class="py-3">
        <div class="hero">
          <div class="d-flex justify-content-center align-items-center">
            <img src={config.image4} alt="Green Dragon" width="350px" />
          </div>
          <div class="">
            <img src={config.image5} width="200" />
            <p class="hero-text">WE LONKING, NOT SHORTING</p>
            <p class="hero-text">LONKING $NEAR BACK TO $20.24 IN 2024</p>
            <p class="hero-text">Get some $LONK</p>
            <div class="button-swap">
              <div class="item">
                <button
                  onClick={() => {
                    State.update({ select: "ref", isShow: true });
                  }}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{
                    padding: "10px 20px",
                    height: "60px",
                    width: "270px",
                    border: "2px solid #31cf34",
                  }}
                  class="button d-flex bg-light justify-content-center align-items-center text-decoration-none rounded-5"
                >
                  <img src={config.image6} class="image" width="186" />
                </button>
                <button
                  onClick={() => {
                    State.update({ select: "veax", isShow: true });
                  }}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{
                    padding: "10px 20px",
                    height: "60px",
                    width: "270px",
                    border: "2px solid #31cf34",
                  }}
                  class="button d-flex bg-light justify-content-center align-items-center text-decoration-none rounded-5"
                >
                  <img src={config.image7} class="image" width="90" />
                </button>
              </div>
              <div class="item">
                <a
                  href="https://dex.btse.com/trade/SPOT_LONK_USDC.e"
                  target="_blank"
                  style={{
                    padding: "10px 20px",
                    height: "60px",
                    width: "270px",
                    border: "2px solid #31cf34",
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                  class="button d-flex bg-light justify-content-center align-items-center text-decoration-none rounded-5"
                >
                  <img
                    src={config.btse_logo}
                    style={{ filter: "brightness(0%)" }}
                  />
                </a>
                <a
                  href="https://t.me/lonk_bot"
                  target="_blank"
                  style={{
                    padding: "10px 20px",
                    height: "60px",
                    width: "270px",
                    border: "2px solid #31cf34",
                  }}
                  class="button d-flex bg-light justify-content-center align-items-center text-decoration-none rounded-5"
                >
                  <img src={config.lonk_bot} class="image" width="120" />
                </a>
              </div>
            </div>
            <div class="mt-5">
              <a
                href="http://t.me/LonkonNEAR"
                target="_blank"
                class="d-inline-block px-2"
              >
                <img
                  src={config.image8}
                  width="75"
                  class="d-inline-block px-2"
                />
              </a>
              <a
                href="https://twitter.com/Lonkonnear"
                target="_blank"
                class="d-inline-block px-2"
              >
                <img
                  src={config.image9}
                  width="68"
                  class="d-inline-block px-2"
                />
              </a>
              <a
                href="https://dexscreener.com/near/refv1-4314"
                target="_blank"
                class="d-inline-block px-2"
              >
                <img
                  src={config.image10}
                  width="65"
                  class="d-inline-block px-2"
                />
              </a>
              <a
                href="https://www.coingecko.com/en/coins/lonk-on-near"
                target="_blank"
                class="d-inline-block px-2"
              >
                <img
                  src={config.image11}
                  width="75"
                  class="d-inline-block px-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Widget src="louisdevzz.near/widget/Lonk.stake" props={{ accountId }} />
    <div class="green-bg mt-2 font-md-bigger py-4 py-lg-5" id="about">
      <div class="container">
        <div class="about">
          <div class="col-12 col-md-8 col-lg-7">
            <p>
              LONK READ AS “LONG”
              <br />
              LONK IS LONG
              <br />
              LONK IS 龍 <br />
              LONK IS DRAGON (insert Illia)
              <br />
              LONK IS FREN WITH BONK
              <br />
              LONK IS LOVE
              <br />
              LONK IS NOT YOUR AVERAGE MEME COIN
            </p>
            <p class="text-uppercase">
              Born from collective frenship, firmly grounded in the realms of
              memetics and humor
            </p>
            <p class="text-uppercase mb-0">
              YOUR NEAR journey is incomplete without LONK.
            </p>
          </div>
          <div class="col-12 col-md-4 col-lg-5 text-left text-md-end">
            <h2>about</h2>
          </div>
        </div>
      </div>
    </div>
    {accountId && state.isShow ? (
      state.select == "ref" ? (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-header"
                style={{ background: "#182733", color: "#fff" }}
              >
                <h5 class="modal-title" id="exampleModalLabel">
                  Swap Token Ref Finance
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ filter: "brightness(0) invert(1)" }}
                ></button>
              </div>
              <div
                style={{ background: "#182733" }}
                class="modal-body d-flex justify-content-center align-items-center"
              >
                <Widget src="louisdevzz.near/widget/ref-swap" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div
                class="modal-header"
                style={{ background: "#282828", color: "#fff" }}
              >
                <h5 class="modal-title" id="exampleModalLabel">
                  Swap Token Veax
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style={{ filter: "brightness(0) invert(1)" }}
                ></button>
              </div>
              <div
                style={{ background: "#282828" }}
                class="d-flex justify-content-center align-items-center"
              >
                <Widget src="louisdevzz.near/widget/Lonk.veax-swap" />
              </div>
            </div>
          </div>
        </div>
      )
    ) : (
      <div
        class={`modal fade`}
        id="exampleModal"
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
