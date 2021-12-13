import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { Button } from '../components/button';
import { SkillCard } from '../components/skillCard';

interface SkillData {
    id: string;
    name: string;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [myskills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data])
    }

    function handleRemoveSkill(id:string){
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ) )
    }


    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour > 5 && currentHour < 12) {
            setGretting("Good morning")
        } else if (currentHour >= 12 && currentHour < 18) {
            setGretting("Good afternoon")
        } else {
            setGretting('Good night')
        }
    })

    return (
        <View style={styles.container}>

            <Text style={styles.title}>React native</Text>
            <Text style={styles.gretting}>{gretting}</Text>
            <TextInput style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />

            <Button onPress={handleNewSkill} title = {'Add'}/>

            <Text style={[styles.title, { marginVertical: 30 }]}>My Skills</Text>

            <FlatList
                data={myskills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<SkillCard skill={item.name}  onPress={()=>handleRemoveSkill(item.id)} />)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121015",
        paddingHorizontal: 20,
        paddingVertical: 70,
    },
    title: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        marginTop: 30,
        borderRadius: 10
    },
    gretting: {
        color: "white"
    }
})