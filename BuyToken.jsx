const config = {
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
  image12:
    "https://bafybeibrllurzvgwyyqgy4wz52ye3nwfiy2ilnxlmel3zmo7lhokmakmlm.ipfs.nftstorage.link/",
  image13:
    "https://bafkreiexjgifxje7to3nhm2acpgqx6pssfnkyfupabkvz6xi4wngfsoyb4.ipfs.nftstorage.link/",
  image14:
    "https://bafkreih5stp52zlhjzbzns6c2yzmsimcx22olvwcdhxjdcwlke7ulwsnrq.ipfs.nftstorage.link/",
  image15:
    "https://bafkreiehul4maodboljbvzi4yjoz7cmp7nq5oawxecgk3gzyfx2obqnhse.ipfs.nftstorage.link/",
  image16:
    "https://bafkreie3zja43akg3e6g2ycjvmtxccauwhyh5u53wy3ybmkrkpejzxuazi.ipfs.nftstorage.link/",
  image17:
    "https://bafkreihig2ecbfwnm4jgahveewvg4yvhzpvvduxzrad6mkgercplvtutjm.ipfs.nftstorage.link/",
  image18:
    "https://bafkreiaox4wectrdmwuoymlwabd75icvy22slqp7sq3jbodrlklxxscfba.ipfs.nftstorage.link/",
  image19:
    "https://bafkreihrhaj3vchhhpyycnchh36uxvhr3e4x3fjczjciz7mh5ho73tjlxe.ipfs.nftstorage.link/",
  image20:
    "https://bafkreieyya7khotxum73zxozxktaejzgwbjb4larid4nsy3exzmd2z2d5q.ipfs.nftstorage.link/",
  image21:
    "https://bafkreic2easjnf44omosb7dyvby4c5d7xu3rnfvbxjr3lnfasomsb6vhsi.ipfs.nftstorage.link/",
  image22:
    "https://bafkreiheihm3itssrxi4tlermll7b6edmojztfnfvjd5wblgwqvgakaltq.ipfs.nftstorage.link/",
  image23:
    "https://bafkreial4qmjbm5al5m7qfznoz57fcmzxfw25soclrjm355suaixkrdhoa.ipfs.nftstorage.link/",
  image24:
    "https://bafkreiafkhpfp5dv2qzkrdhkm72pxuxr7hziil6yz4hpwx6u5sxztjhvve.ipfs.nftstorage.link/",
  image25:
    "https://bafkreibv4v5zo5z6dmjdbzxdcm35cbvxlcjewu4qmvvtsqdpolikvpkn24.ipfs.nftstorage.link/",
  image26:
    "https://bafkreiau36hvhq6zzkay5j7logwmp7nf2y5suumyknfmimclabrvokzdg4.ipfs.nftstorage.link/",
};
const fondKod = fetch(
  "https://fonts.googleapis.com/css2?family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
).body;
const Content = styled.div`
  ${fondKod}
font-family: Kodchasan,sans-serif;
.share-dog{
@media screen and (max-width:768px){
    width: 100px;
  margin-left: -40px;
}
}
`;
const accountId = context.accountId;
console.log(accountId);
return (
  <>
    <div class="how font-md-bigger py-4 py-lg-5" id="how">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="green">how to buy</h2>
          </div>
          <Content>
            <div class="col-12 col-lg-5 offset-lg-7">
              <p>
                <strong>
                  <span class="badge">1</span>
                  Get yourself a NEAR wallet
                </strong>
              </p>
              <p>
                Bruv you won’t be able to use, trade or $LONK without a wallet,
                so create a FREE wallet here with prepaid gas. (yes we know NEAR
                tech is awesome)
              </p>
              <p>
                <a
                  href="https://my.shard.dog/"
                  class="button d-inline-block text-decoration-none py-1 px-5 border rounded-5"
                >
                  <img class="share-dog" src={config.image12} width="205" />
                </a>
              </p>
              <p>Some gud NEAR wallets:</p>
              <p>
                <a
                  href="https://meteorwallet.app/"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1"
                >
                  <img src={config.image13} alt="NEAR Wallet" width="50" />
                </a>

                <a
                  href="https://herewallet.app/"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1"
                >
                  <img src={config.image14} alt="NEAR Wallet" width="50" />
                </a>

                <a
                  href="https://mynearwallet.com/"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1"
                >
                  <img src={config.image15} alt="NEAR Wallet" width="50" />
                </a>

                <a
                  href="https://sender.org/"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1"
                >
                  <img src={config.image16} alt="NEAR Wallet" width="50" />
                </a>

                <a
                  href="https://nightly.app/"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1"
                >
                  <img src={config.image17} alt="NEAR Wallet" width="50" />
                </a>

                <a
                  href="https://wallet.mintbase.xyz"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1"
                >
                  <img src={config.image18} alt="NEAR Wallet" width="50" />
                </a>
              </p>
            </div>
            <div class="col-12 py-4">
              <p>
                <strong>
                  <span class="badge">2</span>
                  Bring some assets to NEAR
                </strong>
              </p>
              <p>
                <strong>NEAR</strong>, <strong>USDT</strong> , and{" "}
                <strong>USDC</strong> can be bought and withdrawn from all major
                exchanges:
              </p>
              <p>
                <a
                  href="https://www.binance.com/en/trade/NEAR_USDT"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image19} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://www.okx.com/trade-spot/near-usdt"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image20} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://www.gate.io/trade/NEAR_USDT"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image21} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://www.coinbase.com/price/near-protocol"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image22} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://www.kucoin.com/trade/NEAR-USDT"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image23} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://www.kraken.com/prices/near-protocol"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image24} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://www.bybit.com/en/trade/spot/NEAR/USDT"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image25} alt="NEAR Wallet" width="50" />
                </a>
                <a
                  href="https://crypto.com/price/near-protocol"
                  target="_blank"
                  class="text-decoration-none d-inline-block me-1 mb-1"
                >
                  <img src={config.image26} alt="NEAR Wallet" width="50" />
                </a>
              </p>
              <p>
                or you can bridge assets from other chains! Take a look at our
                guide bruv :)
              </p>
            </div>
            <div class="col-12 col-lg-5 offset-lg-7">
              <p>
                <strong>
                  <span class="badge">3</span> $LONK the token!
                </strong>
                <br />
                Get some $LONK bruv
              </p>
              <p>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#buyModal"
                  style={{
                    padding: "10px 20px",
                    height: "60px",
                    width: "270px",
                    border: "2px solid #31cf34",
                  }}
                  class="button d-flex bg-light justify-content-center align-items-center text-decoration-none rounded-5"
                >
                  <img src={config.image6} width="186" />
                </button>{" "}
              </p>
            </div>
          </Content>
        </div>
      </div>
    </div>

    {accountId ? (
      <div
        class="modal fade"
        id="buyModal"
        tabindex="-1"
        aria-labelledby="buyModal"
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
