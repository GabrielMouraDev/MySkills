import React from 'react'
import {Text, TouchableOpacity, StyleSheet, View, TouchableOpacityProps} from 'react-native'

interface SkillButton extends TouchableOpacityProps{
    skill:string
}

export function SkillCard({skill ,...rest}:SkillButton) {
    return (
        <TouchableOpacity style={styles.buttonSkill} {...rest}>
        <Text style={styles.buttonText}>
            {skill}
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonSkill: {
        marginVertical:10,
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
})