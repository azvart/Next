import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';





export const Footer:FC = () => {



    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <Image src='/footer-logo.png' alt='' width={165} height={45} quality={100} />
                    </div>
                    <div className={styles.text}>
                        <p>OpTimeRx All rights reserved</p>
                    </div>
                </div>
                <div className={styles.contents}>
                    <div className={styles.text}>
                        Contact Us
                    </div>
                    <div className={styles.text}>
                    +111 2221 33314
                    </div>
                </div>
            </div>
        </div>
    )
}