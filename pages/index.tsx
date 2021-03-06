import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideMenu from "./components/sidemenu";
import {Grid, GridItem} from "@chakra-ui/react";
import Header from "./components/header";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>HPC</title>
                <meta name="description" content="HPC platform"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <Grid
                h={'100vh'}
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem colSpan={1}>
                    <SideMenu/>
                </GridItem>
                <GridItem colSpan={4} bg='grey'> Content </GridItem>
            </Grid>

            <footer className={styles.footer}>
                Footer
            </footer>
        </div>
    )
}

export default Home
