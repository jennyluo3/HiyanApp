import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '../../constants/Colors'
import { Link } from 'expo-router'

export default function Home() {

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
        {/* Header  */}
          <Header/>
        {/* Slider  */}
          <Slider/>
        {/* PetList + Category  */}
          <PetListByCategory/>
       

        {/* Add New Pet Option  */}
        <Link href={'/add-new-pet'}
          style={styles.addNewPetContainer}>
          <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
            <Text style={{
              fontFamily:'outfit-medium',
              color:Colors.PRIMARY,
              fontSize:18
            }}>Add New Pet</Text>
        </Link>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 100, // Extra padding at bottom for better scrolling
  },
  addNewPetContainer:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    padding:20,
    marginTop:20,
    textAlign:'center',
    backgroundColor:Colors.LIGHT_PRIMARY,
    borderWidth:1,
    borderColor:Colors.PRIMARY,
    borderRadius:15,
    borderStyle:'dashed',
    justifyContent:'center'
  }
})