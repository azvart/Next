import React, { FC } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';


export const Header:FC = () => {


    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src='/header-logo.png' quality={100} alt='' width={253} height={69} />
                </div>
            </div>
        </div>
    )
}