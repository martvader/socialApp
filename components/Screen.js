import React from 'react'
import { View, Text,SafeAreaView } from 'react-native'

export default function Screen({children}) {
    return (
        <SafeAreaView>
            {children}
        </SafeAreaView>
    )
}
