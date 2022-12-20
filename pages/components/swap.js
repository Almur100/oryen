import styles from "../../styles/swap.module.css"
import { AiFillSetting } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Token from "../../noncomp/token";

import Image from "next/image"
import { useState } from "react";
export default function Swap() {
    const[open,setopen]= useState(false);
    const[change,setChange]= useState("");
    const [option, setoption] = useState("/busd.png");
    const [option1, setoption1] = useState("/logo6.png");

    const [op1, setop1] = useState('BNB');
    const [op2, setop2] = useState('Oryen');
    const openbar=()=>{
        setopen(true);
    }
    const closebar=()=>{
        setopen(false);
    }

    return (
        <>
            <div className={styles.content}>
                <div className={styles.swap}>
                    <p>SWAP</p>
                    <div className={styles.swapdiv}>
                        <div className={styles.div1}>
                            <div className={styles.div1left}>
                                <p>Swap</p>
                                <p>Fast,Secure,KYC-Free.</p>

                            </div>
                            <div className={styles.div1right}>

                                <span ><BsArrowCounterclockwise /></span>
                                <span ><AiFillSetting /></span>

                            </div>

                        </div>
                        <div className={styles.div2}>
                            <div className={styles.div2left}>
                                <div className={styles.line}>

                                </div>
                                <div className={styles.leftcontent}>
                                    <p>From:</p>
                                    <p>0.00</p>

                                </div>

                            </div>
                            <div className={styles.div2right} onClick={openbar}>
                                <span><Image src={option} alt="img" width={10} height={10}></Image></span>
                                <span>{op1}</span>
                                <span><MdKeyboardArrowDown /></span>

                            </div>

                        </div>
                        <div className={styles.div2}>
                            <div className={styles.div2left}>
                                <div className={styles.line}>

                                </div>
                                <div className={styles.leftcontent}>
                                    <p>To:</p>
                                    <p>0.00</p>

                                </div>

                            </div>
                            <div className={styles.div2right} onClick={openbar}>
                                <span><Image src={option1} alt="img" width={10} height={10}></Image></span>
                                <span>{op2}</span>
                                <span><MdKeyboardArrowDown /></span>

                            </div>

                        </div>
                        <div className={styles.div3}>
                            <p>Slippage Tolerance</p>
                            <p>22%</p>

                        </div>
                        <div className={styles.btn}>
                            <p>CONNECT WALLET</p>

                        </div>

                    </div>
                    {open&&(
                    <div className={styles.tokenmanage}>
                        <div className={styles.tokendiv}>
                            <div className={styles.tokendiv1}>
                                <p>Select a Token</p>
                                <p onClick={closebar}><RxCross2 /></p>

                            </div>
                            <div className={styles.tokendiv2}>
                                <input onChange={(e)=>{
                                    setChange(e.target.value);

                                }} type="text" placeholder="Search Name or Paste address" />

                            </div>
                            {Token.filter((data)=>{
                                return change.toLowerCase() === ""
                                ?data
                                :data.name1.toLowerCase().includes(change);
                            }
                           
                            )
                            .map((item) =>
                            
                            <div onClick={()=>{
                                setop1(item.name1);
                                setoption(item.Image);
                                setopen(false);
                            }}
                             key={item.id}  className={styles.tokendiv3}>                                )



                                
                                
                                <div className={styles.tokendiv3left}>
                                    <span> <Image src={item.Image} alt="img" width={16} height={16} /></span>
                                </div>
                                <div className={styles.tokendiv3right}>
                                    <div className={styles.tokendiv3right1}>
                                        <p>{item.name1}</p>
                                    </div>
                                    <div className={styles.tokendiv3right2} >
                                        <p>{item.name2}</p>
                                    </div>
                                </div>
                                

                            </div>
                           
                            )}
                            <div className={styles.tokendiv4}>
                                <p>Manage Tokens</p>

                            </div>

                        </div>

                    </div>
                    )}


                </div>
            </div>
        </>
    )
}