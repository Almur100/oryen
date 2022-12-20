import styles from "../../styles/mainbar.module.css"
import Image from "next/image"
import { MdOutlineVerified } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { FaMedium } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Mainbar() {

    return (
        <>
            <div className={styles.mainbar}>
                <p>Dashboard</p>
                <div className={styles.numdiv1}>
                    <div className={styles.content}>
                        <p>Marketplace</p>
                        <p>$11.97M </p>
                    </div>
                    <div className={styles.content}>
                        <p>Circulating Supply</p>
                        <p>38.35B</p>
                    </div>
                    <div className={styles.content}>
                        <p>Holders</p>
                        <p>82K</p>
                    </div>
                    <div className={styles.content}>
                        <p>Oryen Price</p>
                        <p>$0.0003</p>
                    </div>


                </div>
                <div className={styles.numdiv2}>
                    <div className={styles.left}>
                        <div className={styles.left1}>
                            <p>Liquidity</p>
                            <p>$1.61M</p>

                        </div>
                        <div className={styles.left2}>
                            <p>0.33%</p>

                        </div>

                    </div>
                    <div className={styles.left}>
                        <div className={styles.left1}>
                            <p>Liquidity</p>
                            <p>$1.61M</p>

                        </div>
                        <div className={styles.left2}>
                            <p>0.33%</p>

                        </div>

                    </div>


                </div>
                <div className={styles.numdiv3}>
                    <div className={styles.apy}>
                        <span><MdOutlineVerified /></span>
                        <span>Fixed APY</span>
                    </div>
                    <div className={styles.earn}>
                        <p>102483.58%</p>
                        <p>A Simple Buy-Hold-Earn System</p>
                    </div>

                </div>
                <div className={styles.numdiv4}>
                    <div className={styles.div4left}>
                        <div className={styles.div4leftleft}>
                            <span><Image src="/logo5.png" alt="img" width={250} height={250} /></span>

                        </div>
                        <div className={styles.div4leftright}>
                            <p>Still got question?</p>
                            <p>More Details</p>

                        </div>

                    </div>
                    <div className={styles.div4right}>
                        <p>Connect with us</p>
                        <div className={styles.icon}>
                            <span><CiFacebook /></span>
                            <span><FaInstagram /></span>
                            <span><TfiTwitter /></span>
                            <span><FaMedium /></span>
                            <span><FaDiscord /></span>


                        </div>

                    </div>

                </div>
            </div>



        </>

    )
}