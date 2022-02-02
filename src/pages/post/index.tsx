import Head from 'next/head'

import styles  from './style.module.scss'

export default function Post() {
    return (
        <>
            <Head>
                <title>Post | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepa with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multple packages with a shared build, test and release process.</p>
                    </a> 
                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepa with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multple packages with a shared build, test and release process.</p>
                    </a> 
                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepa with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multple packages with a shared build, test and release process.</p>
                    </a> 
                    <a href='#'>
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepa with Lerna & Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multple packages with a shared build, test and release process.</p>
                    </a> 
                </div>
            </main>
        </>
    )
}