import styles from "../../styles/account.module.css"

export default function Account(){
    return(
        <>
        <div className={styles.content}>
            <p>ACCOUNT</p>
            <div className={styles.account}>
                <div className={styles.accountdiv}>
                    <div>Total Earned</div>
                    <div>$0.00 USD</div>
                    <div>0.00 Oryen(2% Increase)</div>

                </div>
                <div className={styles.accountdiv}>
                    <div>Your Balance</div>
                    <div>$0.00 USD</div>
                    <div>0.00 Oryen</div>

                </div>

            </div>
            <div className={styles.account}>
                <div className={styles.accountdiv}>
                    <div>APY</div>
                    <div>102483.58%</div>
                    <div>Daily ROI 1.91%</div>

                </div>
                <div className={styles.accountdiv}>
                    <div>Your Daily Earnings </div>
                    <div>$0.00 USD</div>
                    <div>0.00 Oryen</div>

                </div>

            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomdiv}>
                    <div>Next Rewards Amount:</div>
                    <div>0.00 Oryen</div>

                </div>
                <div className={styles.bottomdiv}>
                    <div>Next Rebase In:</div>
                    <div>00:18:29 </div>

                </div>
                <div className={styles.bottomdiv}>
                    <div>Next Rewards:</div>
                    <div>$0.00 USD</div>

                </div>
                <div className={styles.bottomdiv}>
                    <div>Next Rewards Yield:</div>
                    <div>0.039582% </div>

                </div>
                <div className={styles.bottomdiv}>
                    <div>ROI % (30-Day Rate)</div>
                    <div>78.91%</div>

                </div>
                <div className={styles.bottomdiv}>
                    <div>ROI $ (30-Day Rate)</div>
                    <div>0.00 USD</div>

                </div>

            </div>

        </div>
        </>
    )
} 
