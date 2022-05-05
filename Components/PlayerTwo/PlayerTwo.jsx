import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

function PlayerTwo({playerTwo, setPlayerTwo}) {
    return (
        <>
        <View>
            <View
                style={styles.counterBox}>
                <Text
                    style={styles.counter}>
                    {playerTwo}
                </Text>
            </View>
            <View
                style={styles.container}>
                <View style={styles.btnGroupBox}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => setPlayerTwo((prev)=> prev - 1)}
                    >
                        <Text style={styles.btnText}>-1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => setPlayerTwo((prev)=> prev + 1)}
                    >
                        <Text title="1" name="1" style={styles.btnText}>+1</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroupBox}>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => setPlayerTwo((prev)=> prev - 5)}
                    >
                        <Text style={styles.btnText}>-5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => setPlayerTwo((prev)=> prev + 5)}
                        title="+5"
                    >
                        <Text style={styles.btnText}>+5</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    counterBox: {
        // marginTop: "5%",
    },
    counter: {
        fontSize: 90,
        textAlign: 'center',
        color: '#a0e7f2',
    },
    container: {
        // marginTop: 10,
        alignItems: "stretch",
    },
    btnGroupBox: {
        flexDirection: "row",
    },
    btn: {
        margin: '5%',
        width: "40%",
        padding: "5%",
        backgroundColor: '#3a919e',
        borderRadius: 10,
        borderColor: '#fff'
    },
    btnText: {
        fontWeight: "600",
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default PlayerTwo