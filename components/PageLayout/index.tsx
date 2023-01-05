import { VStack } from "@chakra-ui/react"
import Head from "next/head"
import { ReactNode } from "react"
import styles from '../../styles/Home.module.css'

interface PageLayoutProps {
    titlePage: string,
    children: ReactNode
}

export default function PageLayout({ titlePage, children }: PageLayoutProps) {
    return (
        <>
            <Head>
                <title>{titlePage}</title>
                <meta name="description" content="Weather App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.center}>
                    <VStack maxWidth="600px" spacing={4}>
                        {children}
                    </VStack>
                </div>
            </main>
        </>
    )
}