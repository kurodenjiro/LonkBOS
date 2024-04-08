State.init({
  color: "#31cf34",
  image1:
    "https://bafkreidzrna3q6csqykuvzih6yywrijmdg4fn4tb53azjmmjuobfus4v2e.ipfs.nftstorage.link/",
  image2:
    "https://bafybeibuj22kfgmevy3os6akrswxosjyjv5q6tecyv5jsfpw7iccajp5qa.ipfs.nftstorage.link/",
});

const [dropdownVisible, setDropdownVisible] = useState(false);
const { setVisible, visible } = props;
const toggleDropdown = () => {
  setDropdownVisible(!dropdownVisible);
};

const handlClick = () => {
  setVisible(!visible);
};
const fkGroteskFamily = fetch(
  "https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap"
).body;

const Header = styled.div`
${fkGroteskFamily}
.header{
    background-color:${state.color};
}
a{
    text-decoration:none;
}
.span{
color: #fff;
font-size: 20px;
font-family: Lakki Reddy,cursive;

text-shadow: 0 4px 4px #00000040;
text-transform: lowercase;
margin-block-end: 0.33em;
}
.burger {
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 10px;
    z-index: 3;
}

.burger-line {
    background-color: #fff;
    border-radius: 4px;
    display: block;
    height: 4px;
    margin-bottom: 3px;
    transition: all .3s ease-in-out;
    width: 30px;
}

.overlay {
    background-color: #000;
    height: 100%;
    left: 0;
    opacity: .6;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
}

.navbar {
    background-color: transparent;
    height: auto;
    position: relative;
    right: auto;
    top: auto;
    width: 100%;
}

.dropdown-menu {
border-radius: 10px; 
position: absolute;
top: 75px;
left: 24px;
z-index: 1000;
min-width: 10rem;
padding: 0.5rem 0;
margin: 0.125rem 0 0;
font-size: 1rem;
color: #212529;
text-align: left;
list-style: none;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, 0.15);
border: 1px solid #31cf34;
}

.dropdown-menu.show {
display: block;
}

.dropdown li {
    margin-bottom: 0.7em;
}

.dropdown-item {
    font-size: 1.4rem;
    color: ${state.color};
    text-shadow: 0 3px 6px #00000040;
    font-family: Lakki Reddy,cursive;
}
@media (max-width: 768px) { 
    .logo{
        display:flex;
        flex-direction:row;
        align-items:start;
        justify-content:start;
    }
}
.header-swap{
display:flex;
@media screen and (max-width:768px){
    display:none;
}
}
.nav-swap{
display:flex;
align-items:center;
justify-content:space-between;
margin-left:20px;
}


`;
console.log(visible);
return (
  <Header>
    <div class="header py-3 position-relative" id="header">
      <div class="container">
        <span
          onClick={handlClick}
          class="d-xl-none burger position-absolute top-50"
          id="burger"
        >
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span>Menu</span>
        </span>
        <div class="nav-swap">
          <div class="col-lg-3 justify-content-start align-items-start">
            <a class="text-decoration-none logo">
              <img src={state.image2} alt="Icon" width="70" height="70" />
              <img src={state.image1} alt="Logo" width="141" height="60" />
            </a>
          </div>
          <div class="header-swap">
            <div class="navbar justify-content-center" id="navbar">
              <ul class="navbar-nav d-xl-flex flex-xl-row justify-content-md-between">
                <li class="nav-item p-1 p-lg-3">
                  <a
                    class="nav-link close-menu"
                    aria-current="page"
                    href="huunhanz.near/widget/Lonk.Index"
                  >
                    <span class="span">home</span>
                  </a>
                </li>
                <li class="nav-item p-1 p-lg-3">
                  <a class="nav-link close-menu" href="#about">
                    <span class="span">about</span>
                  </a>
                </li>
                <li class="nav-item p-1 p-lg-3">
                  <a class="nav-link close-menu" href="#how">
                    <span class="span">how to buy</span>
                  </a>
                </li>
                <li class="nav-item p-1 p-lg-3 position-relative">
                  <a
                    class={`nav-link dropdown-toggle ${
                      dropdownVisible ? "show" : ""
                    }`}
                    href="#"
                    id="toggle"
                    onClick={toggleDropdown}
                  >
                    <span class="span">bridge to near</span>
                  </a>
                  <ul
                    class={`dropdown-menu ${dropdownVisible ? "show" : ""}`}
                    id="dropdown"
                  >
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.etherum"
                      >
                        from <span class="text-capitalize">ethereum</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.solana"
                      >
                        from <span class="text-capitalize">solana</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.evm"
                      >
                        from <span class="text-capitalize">arbitrum</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.evm"
                      >
                        from <span class="text-capitalize">optimism</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.evm"
                      >
                        from <span class="text-capitalize">polygon</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.evm"
                      >
                        from <span class="text-capitalize">fantom</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.evm"
                      >
                        from <span class="text-capitalize">avalanche</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.evm"
                      >
                        from <span class="text-capitalize">BSC</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.sui"
                      >
                        from <span class="text-capitalize">sui</span>
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="https://near.org/louisdevzz.near/widget/Lonk.sui"
                      >
                        from <span class="text-capitalize">aptos</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item p-1 p-lg-3">
                  <a class="nav-link close-menu" href="#token">
                    <span class="span">tokenomic</span>
                  </a>
                </li>
                <li class="nav-item p-1 p-lg-3">
                  <a class="nav-link close-menu" href="#roadmap">
                    <span class="span">roadmap</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay d-none" id="overlay"></div>
  </Header>
);
