import image2 from "../../assets/images/icons/steps.png";
import image16 from "../../assets/images/icons/steps2.png";
import image18 from "../../assets/images/logo.png";
import image19 from "../../assets/images/underconstruction.png";
import "./temp.scss";
import PageLoaderCircle from "src/components/PageLoaderCircle";

function Comingsoon() {
  return (
    <div>
      <PageLoaderCircle delay={1500} />
      <div id="sc-banner" className="sc_banner_v3 banner-bg position-relative">
        <div className="container">
          <div className="banner-content v3_banner_content">
            <div className="row">
              <div className="col-md-6">
                <div className="sc_banner_v3_left">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.6s"
                  >
                    <span>CRYPTOCARNIVAL IS UNDER CONSTRUCTION</span>
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="0.7s"
                  >
                    We're hard at work on the CryptoCarnival! This website (and the forthcoming electronic book) are an
                    experiment in web3 publication. Essays will soon be published and to enhance your Web3 reading experience, free token-based
                    <a href="/dice">on-chain games</a> and <a href="/nftairdrop">NFTs</a> are available on this website (our{" "}
                    <a href="/faucet">free CCWTF tokens</a> are also available).
                  </p>
                  <p>
                    If you have an idea for a fun game and can program basic
                    chain scripts, please{" "}
                    <a href="/contest">JOIN THE CONTEST</a>. Winning entries
                    will receive a small prize and everlasting fame and glory.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="sc_banner_v3_right">
                  <div className="animetion_avater">
                    <img src={image19} alt="img" className="img-fluid" />
                  </div>
                  <ul>
                    <li>
                      <h3>Word count</h3>
                      <h4 className="counter-number">
                        <span className="counter">110,000</span>{" "}
                      </h4>
                    </li>
                    <li>
                      <h3>Tokens Minted</h3>
                      <h4 className="counter-number">
                        <span className="counter">350,000,000</span>{" "}
                      </h4>
                    </li>
                    <li className="m-0">
                      <h3>Funding Raised</h3>
                      <h4 className="counter-number">
                        <span className="counter">1.1</span> eth
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamfi-footer-section">
        <div className="footer-area">
          <div className="container">
            <div className="sec-heading text-center">
              <div className="sub-inner mb-52">
                <img
                  className="heading-right-image"
                  src={image16}
                  alt="Steps-Image"
                />
                <span id="shareSocial" className="sub-title white-color">
                  Share on Social
                </span>
                <img
                  className="heading-left-image"
                  src={image2}
                  alt="Steps-Image"
                />
              </div>
            </div>
            <div className="footer-listing text-center mb-100 md-mb-70">
              <ul className="footer-icon-list">
                <li>
                  <a href="https://twitter.com/intent/tweet?text=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/cryptocarnivalz">
                    <i className="icon-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/u/0/?view=cm&to&su=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf&body=https%3A%2F%2Fcryptocarnival.wtf%0A&bcc&cc&fs=1&tf=1">
                    <i className="icon-medium"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=cryptocarnival.wtf">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=cryptocarnival.wtf&quote=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-logo text-center mb-45">
              <a href="/index">
                <img src={image18} alt="Footer-logo" />
              </a>
            </div>
            <div className="footer-mainmenu text-center mb-20">
              <ul>
                <li>
                  <a href="/index#Whatiscryptocarnival">How it works</a>
                </li>
                <li>
                  <a href="/comingsoon">Read essays</a>
                </li>
                <li>
                  <a href="/contest">Play games</a>
                </li>
                <li>
                  <a href="/faucet">Token info</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/about">Contact</a>
                </li>
              </ul>
            </div>
            <div className="copyright-area text-center mb-0">
              <p className="dsc mb-37">
                Copyright © 2022. All Rights Reserved by
                <a target="_blank" className="gafi" href="#">
                  {" "}
                  the Authors
                </a>
              </p>
            </div>
            {/* <div className="scrollup text-center">
                            <a href="#">
                                <i className="icon-arrow_up"></i>
                            </a>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comingsoon;
