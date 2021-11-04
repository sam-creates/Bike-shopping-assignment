import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Container from '../components/Container'
import Tab from '../components/BottomTab'
import CartItem from '../components/CartItem'


export default function Cart({navigation}){
    return (
        <Container>
            <View style={{marginTop: 30, marginBottom: 20, flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={{marginHorizontal: 'auto'}}>
                    <Text style={{fontWeight: 700, fontSize: 20, color: 'rgba(0,0,0, .8)'}}>Cart list</Text>
                    <Text style={{fontWeight: 600, fontSize: 15, color: 'rgba(0,0,0, .4)', textAlign: 'center'}}>(3 items)</Text>
                </View>
            </View>

            <View>
                <CartItem name={"Pinerallo"} type={"Mountain"} price={"1700.00"}/>
                <CartItem name={"Brompton"} type={"Road"} price={"4200.69"}/>
                <CartItem name={"Norco"} type={"Urban"} price={"666.00"}/>
            </View>

            <View style={{display:'flex', alignItems:"left", backgroundColor:'#e3e3e3', borderRadius:8, marginTop:30, padding:20}} >
                <Text  style={{paddingLeft:1,  fontSize:18,color: 'rgba(0,0,0, .4)'}} >Sub-Total:   <Text   style={{color: 'black', fontWeight: 500}} >$3,400.00</Text>   </Text>
                <Text  style={{fontSize: 18, color: 'rgba(0,0,0, .4)'}} >Shipping Fee:  <Text   style={{color: 'black', fontWeight: 500}} >$1,000.00</Text>   </Text>
                <Text  style={{fontSize: 18, color: 'rgba(0,0,0, .4)'}} >  <Text   style={{color: 'black', fontWeight: 500}} ></Text>   </Text>
               
                <Text  style={{fontSize:18, fontWeight:900, color: 'black'}} >Total:  <Text   style={{color: 'black', fontWeight: 500}} >$3,500.00</Text>   </Text>

            </View>

            <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 100, backgroundColor: '#fa6401', borderRadius: 5, width: 'min-content', marginHorizontal: 'auto' , marginTop: 90}}>
                <Text style={{fontSize: 18,fontWeight: 700, textAlign: 'center', color: 'white', whiteSpace: 'nowrap'}}>Proceed to Checkout</Text>
            </TouchableOpacity>
            <Tab homeActive={false} />
        </Container>
    )
}
