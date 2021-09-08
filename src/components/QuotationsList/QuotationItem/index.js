import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

export default function QuotationItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logBitcoin} source={require("../../../img/bitcoinred.png")} />
                    <Text style={styles.dayCotation}>07/09/2021</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53552.058</Text>
            </View>
        </View>
    )
}