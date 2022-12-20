import styles from "../../styles/leftbar.module.css"
import { MdHome } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { BiCalculator } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { GiToken } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import { FaQuestion } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { FaMedium } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Link from "next/link"


export default function Leftbar() {
    const [open, setopen] = useState(false);
    const [arrow, setarrow] = useState(false);

    const menubar = () => {
        setopen(!open);
        setarrow(!arrow);
    };

    return (
        <>
            <div className={styles.leftbar}>
                <div className={styles.leftbartop}>
                    <Link href="/"> <MdHome /> <span>Dashbord</span></Link>
                    <a href="#" onClick={menubar}> <FaExchangeAlt /> <span>Exchange</span>
                        {arrow ? <IoIosArrowDown /> :
                            <IoIosArrowUp />}</a>
                    {open && (
                        <div className={styles.submenu}>
                          <Link href="/components/swap"> <p>-Swap</p>  </Link>
                            <p>-Liquidity</p>
                        </div>
                    )}

                    <a href="#"> <BiCalculator /><span>Calculator</span> </a>
                    <Link href="/components/account"> <MdManageAccounts /><span>Account</span> </Link>
                    <p>About</p>
                    <a href="#"> <MdContacts /><span>Contact</span> </a>
                    <a href="#"> <MdGroup /><span>Community</span> </a>
                    <a href="#"> <GiToken /> <span>Oryen token</span></a>
                    <p>Help</p>
                    <a href="#"> <HiDocumentText /> <span>Documentation</span></a>
                    <a href="#"> <FaQuestion /><span>FAQ</span> </a>
                </div>
                <div className={styles.socialmedia}>
                    <div className={styles.title}>
                        <p>social connection</p>

                    </div>
                    <div className={styles.icon}>
                        <span><CiFacebook /></span>
                        <span><FaInstagram /></span>
                        <span><TfiTwitter /></span>
                        <span><FaMedium /></span>
                        <span><FaDiscord /></span>

                    </div>

                </div>
            </div>


        </>

    )
}