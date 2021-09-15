import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"

export default function CurrentPrice(props) {
    props.priceCotation
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentePrice}>$ {props.lastCotation}</Text>
            <Text style={styles.textPrice}>Ultima cotação</Text>
        </View>
    )
}