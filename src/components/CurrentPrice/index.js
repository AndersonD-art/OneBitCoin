import React from "react"
import { View, Text } from "react-native"
import styles from "./styles"

export default function CurrentPrice() {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentePrice}>$ 54423.355</Text>
            <Text style={styles.textPrice}>Ultima cotação</Text>
        </View>
    )
}