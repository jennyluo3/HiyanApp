import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import {db} from './../../config/FirebaseConfig'
export default function Slider() {

    const [sliderList,setSliderList]=useState([]);
    useEffect(()=>{
        GetSliders(); 
    },[])
 
    const GetSliders=async()=>{
        setSliderList([]);
        const snapshot=await getDocs(collection(db,'Sliders'));
        snapshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(sliderList=>[...sliderList,doc.data()])
        })
    }

  return (
    <View style={{
        marginTop:15
    }}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 15 }}
        >
            {sliderList.map((item, index) => (
                <View key={index}>
                    <Image source={{uri:item?.imageUrl}}
                       style={styles?.sliderImage} 
                    />
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:Dimensions.get('screen').width*0.9,
        height:170,
        borderRadius:15,
        marginRight:15
    }
})