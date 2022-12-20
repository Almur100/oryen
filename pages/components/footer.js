import styles from "../../styles/footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <>

            <div className={styles.navbar}>
                <div className={styles.left}>
                    <Image src="/logo6.png" alt="img" width={60} height={60} className={styles.img}></Image>
                    <span>Oryen</span>


                </div>
                <div className={styles.right}>
                    <Image src="/logo6.png" alt="img" width={30} height={30}></Image>
                    <p>$0.003 </p>
                    <p>BUY ORYEN </p>

                </div>




            </div>
        </>
    )
}
