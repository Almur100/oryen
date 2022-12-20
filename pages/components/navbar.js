
import Image from "next/image"
import styles from "../../styles/navbar.module.css"
import { BiMenu } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { BiCalculator } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { GiToken } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import { FaQuestion } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";



export default function Navbar() {
    const [open, setopen] = useState(false);
    const [arrow, setarrow] = useState(false);
    const[active,setActive] = useState(false);

    const menubar = () => {
        setopen(!open);
        setarrow(!arrow);
    };
    const Active = ()=>{
        setActive(true);
    }
    const Activeclose =()=>{
        setActive(false);
    }


    return (
        <>
       
         <div className={`${active?styles.leftbartopshow:styles.leftbartop}`}>
             <div className={styles.cross} onClick={Activeclose}>
                 <RxCross2/>

             </div>
                    <Link href="/"> <MdHome /> <span>Dashbord</span></Link>
                    <a href="#" onClick={menubar}> <FaExchangeAlt /> <span>Exchange</span>
                        {arrow ? <IoIosArrowDown /> :
                            <IoIosArrowUp />}</a>
                    {open && (
                        <div className={styles.submenu}>
                            <Link href="/components/swap"><p> -Swap</p></Link>
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
        
            <div className={styles.navbar}>
                <div className={styles.left}>
                    <Image src="/logo6.png" alt="img" width={60} height={60} className={styles.img}></Image>
                    <span>Oryen</span>
                    
                    <BiMenu />
                </div>
                <div className={styles.right}>
                    <Image src="/logo6.png" alt="img" width={30} height={30}></Image>
                    <p>$0.003 </p>
                    <p>CONNECT WALLET </p>

                </div>
                <div className={styles.mobmenu} onClick={Active}>
                <BiMenu />
                </div>




            </div>
            
            
        </>
    )
}