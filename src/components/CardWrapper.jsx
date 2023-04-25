import { Card } from "@nextui-org/react";
import styles from '../styles/BioCard.module.css'

export function CardWrapper(props) {


    return (

        <Card className={styles.container}>
            {props.children}
        </Card >

    );
}