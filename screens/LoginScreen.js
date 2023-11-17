import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Surface, TextInput, useTheme } from 'react-native-paper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'



const LoginScreen = () => {
    const theme = useTheme()
    const [showPassword, setShowPassword] = useState(false)
    return (

        <View style={{
            flex: 1,
            justifyContent: "space-between"
        }}  >
            <StatusBar style='light' />
            <View style={styles.container}>
                <View style={
                    {
                        width: wp(100),
                        backgroundColor: theme.colors.primary,
                        alignItems: "center"
                    }
                }>
                    <Image source={require("../assets/logo_delfin_net_2022.png")} style={
                        {
                            width: wp(80),
                            height: hp(40)
                        }
                    } contentFit='contain' />
                </View>
                <Card style={styles.formContainer}>
                    <TextInput autoCapitalize='none' left={<TextInput.Icon icon={"account"} />} mode='outlined' label={"Usuario"} style={styles.input} />
                    <TextInput autoCapitalize='none' left={<TextInput.Icon icon={"lock"} />} right={<TextInput.Icon onPress={() => setShowPassword(val => !val)} icon={showPassword ? "eye" : "eye-off"} />} mode='outlined' label={"Password"} style={styles.input} secureTextEntry={!showPassword} />
                    <Button style={
                        {
                            alignSelf: "center",
                            width: 100
                        }
                    } mode='contained'>
                        Aceptar
                    </Button>
                </Card>
            </View>
            <Image source={require("../assets/syc_icon.png")} style={
                {
                    height: 20,
                    width: 200,
                    alignSelf: "center"
                }
            } contentFit='contain' />


        </ View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        width: wp(70),
        height: 55
    },
    formContainer: {
        padding : 20,
        gap: 10
    }
})

export default LoginScreen