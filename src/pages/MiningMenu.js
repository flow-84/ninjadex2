import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import styles from "./MiningMenu.module.css";
const MiningMenu = () => {
  const [iconWrapperAnchorEl, setIconWrapperAnchorEl] = useState(null);
  const iconWrapperOpen = Boolean(iconWrapperAnchorEl);
  const handleIconWrapperClick = (event) => {
    setIconWrapperAnchorEl(event.currentTarget);
  };
  const handleIconWrapperClose = () => {
    setIconWrapperAnchorEl(null);
  };

  return (
    <div className={styles.miningMenu}>
      <div className={styles.chartParent}>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <div className={styles.chartInner}>
              <img className={styles.frameChild} alt="" src="/vector-17.svg" />
            </div>
          </div>
          <div className={styles.time}>
            <div className={styles.am}>11:30 AM</div>
            <div className={styles.am}>7:30 PM</div>
            <div className={styles.am}>3:30 AM</div>
            <div className={styles.am}>10:35 AM</div>
          </div>
        </div>
        <div className={styles.bg} />
      </div>
      <div className={styles.mbListicon6}>
        <img className={styles.coinIcon} alt="" src="/coin1.svg" />
        <div className={styles.info}>
          <div className={styles.busdusdc}>
            <span className={styles.ninja}>NINJA/</span>
            <b className={styles.usdc}>USDC</b>
          </div>
          <button className={styles.iconiconarrowExchangeSwap}>
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </button>
        </div>
      </div>
      <b className={styles.usdc1}>1.0005 USDC</b>
      <div className={styles.info1}>
        <div className={styles.am}>+227.543364 USDC</div>
        <div className={styles.number1}>Past 24 Hours</div>
      </div>
      <div className={styles.tags}>
        <button className={styles.tag}>
          <div className={styles.text}>24H</div>
        </button>
        <button className={styles.tag1}>
          <div className={styles.text}>1W</div>
        </button>
        <button className={styles.tag1}>
          <div className={styles.text}>1M</div>
        </button>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu1}>
          <div className={styles.logoDexfull}>
            <img
              className={styles.logoDexfullChild}
              alt=""
              src="/group-23.svg"
            />
          </div>
          <form className={styles.menu2}>
            <button className={styles.menuItemHorizontalitem}>
              <button className={styles.title}>Stake</button>
            </button>
            <div className={styles.menuItemHorizontalitem1}>
              <button className={styles.title}>Liquidity</button>
            </div>
            <div className={styles.menuItemHorizontalitem2}>
              <div className={styles.flyout}>
                <div className={styles.verticalMenuItem2ndLevelG}>
                  <div className={styles.verticalMenuItem2ndLevel}>
                    <div className={styles.innerWrapper}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconliquidityMining}
                          alt=""
                          src="/iconliquiditymining.svg"
                        />
                      </div>
                      <div className={styles.content}>
                        <div className={styles.ndTitleLevel}>
                          Liquidity Minting
                        </div>
                        <div className={styles.ndTitleLevel1}>
                          Earn FTR rewards by staking assets for market making
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.verticalMenuItem2ndLevel1}>
                    <div className={styles.innerWrapper}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icontradingMining}
                          alt=""
                          src="/icontradingmining.svg"
                        />
                      </div>
                      <div className={styles.content}>
                        <div className={styles.ndTitleLevel2}>
                          Trading Minting
                        </div>
                        <div className={styles.ndTitleLevel3}>
                          Successfully complete a trade to get a FTR airdrop
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.verticalMenuItem2ndLevel}>
                    <div className={styles.innerWrapper}>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icontradingMining}
                          alt=""
                          src="/iconvftr.svg"
                        />
                      </div>
                      <div className={styles.content}>
                        <div className={styles.ndTitleLevel}>vFTR</div>
                        <div className={styles.ndTitleLevel1}>
                          Mint vFTR to earn more DoDo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.body}>
                <button className={styles.title2}>Investing</button>
                <div />
              </div>
            </div>
            <div className={styles.menuItemHorizontalitem3}>
              <button className={styles.title}>Exchange</button>
              <div className={styles.iconWrapper}>
                <img className={styles.iconbase} alt="" src="/iconbase21.svg" />
              </div>
            </div>
          </form>
        </div>
        <div className={styles.itemRight}>
          <button className={styles.iconuser}>
            <img className={styles.groupIcon1} alt="" src="/group2.svg" />
          </button>
          <div className={styles.address}>
            <div className={styles.eth}>
              <div className={styles.iconcolorDot}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <button className={styles.bsc}>BSC</button>
            </div>
            <button className={styles.tag3}>
              <div className={styles.text3}>Connect to a wallet</div>
            </button>
          </div>
          <button className={styles.btn}>
            <img className={styles.iconbase1} alt="" src="/iconbase1.svg" />
          </button>
        </div>
      </div>
      <div className={styles.photo2021110817251} />
      <div className={styles.logo}>
        <img
          className={styles.photo2021110817252}
          alt=""
          src="/photo-20211108-1725-21@2x.png"
        />
        <b className={styles.ninjaTrading}>NINJA TRADING</b>
      </div>
      <div className={styles.cardExchange}>
        <div className={styles.buttonGroup}>
          <button className={styles.btn1}>
            <b className={styles.text}>Vault</b>
          </button>
          <button className={styles.btn2}>
            <b className={styles.text5}>Pool</b>
          </button>
          <button className={styles.btn2}>
            <b className={styles.text5}>Staking</b>
          </button>
          <div className={styles.btn4}>
            <b className={styles.am}>Text</b>
          </div>
        </div>
        <div className={styles.pay}>
          <div className={styles.note}>
            <div className={styles.am}>Invest</div>
            <div className={styles.available0}>Available: 0</div>
          </div>
          <div className={styles.inputGroupwDropdown}>
            <div className={styles.dropdown}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconiconarrowdown1.svg"
              />
              <div className={styles.label}>USDC</div>
              <img className={styles.iconbase2} alt="" src="/iconbase1.svg" />
            </div>
            <div className={styles.input}>
              <b className={styles.busdusdc}>0</b>
            </div>
          </div>
        </div>
        <img
          className={styles.iconiconarrowDown2}
          alt=""
          src="/iconiconarrowdown211.svg"
        />
        <div className={styles.receive}>
          <div className={styles.note}>
            <div className={styles.am}>Receive (Estimated)</div>
            <div className={styles.available01}>Available: 0</div>
          </div>
          <div className={styles.inputGroupwDropdown}>
            <div className={styles.dropdown}>
              <img
                className={styles.iconiconarrowDown1}
                alt=""
                src="/iconiconarrowdown1.svg"
              />
              <div className={styles.label}>USDC</div>
              <img className={styles.iconbase2} alt="" src="/iconbase1.svg" />
            </div>
            <div className={styles.input}>
              <b className={styles.busdusdc}>0</b>
            </div>
          </div>
        </div>
        <div className={styles.rate}>
          <div className={styles.am}>1 BUSD = 1.0005 USDC</div>
          <img
            className={styles.iconbase1}
            alt=""
            src="/iconiconarrowexchangeswap2.svg"
          />
        </div>
        <div className={styles.btn5}>
          <button className={styles.btn6}>
            <b className={styles.text8}>Confirm Deposit</b>
          </button>
          <div className={styles.am}>
            Enter an amount to see more trading details
          </div>
        </div>
        <div className={styles.dividerhorizontal} />
        <div className={styles.note}>
          <div className={styles.info}>
            <div className={styles.am}>Slippage</div>
            <button className={styles.iconquestionHelp}>
              <img className={styles.groupIcon2} alt="" src="/group1.svg" />
            </button>
          </div>
          <div className={styles.reward}>
            <div className={styles.am}>{`Max `}</div>
            <div className={styles.div}>$</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningMenu;
