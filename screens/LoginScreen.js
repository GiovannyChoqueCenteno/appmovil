import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Button, Surface, TextInput, useTheme } from 'react-native-paper'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'



const LoginScreen = () => {
    const theme = useTheme()
    return (
        <SafeAreaView style={styles.container} >
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
            <View style={styles.formContainer}>
                <TextInput autoCapitalize='none' left={<TextInput.Icon icon={"account"} />} mode='outlined' label={"Usuario"} style={styles.input} />
                <TextInput autoCapitalize='none' left={<TextInput.Icon icon={"lock"} />} right={<TextInput.Icon icon={"eye-off"} />} mode='outlined' label={"Password"} style={styles.input} secureTextEntry accessibilityViewIsModal />
                <Button mode='contained'>
                    Aceptar
                </Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center",
    },
    input: {
        width: wp(70),
        height: 55
    },
    formContainer: {
       gap : 10     
    }
})

export default LoginScreen