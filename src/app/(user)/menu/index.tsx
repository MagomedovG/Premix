
import {Link, Stack} from 'expo-router';
import {View, FlatList} from "react-native";
import {StyleSheet} from "react-native";
import {Colors} from '@/constants/Colors'
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import React from "react";


export default function MenuScreen() {
    return (
        <View>
            {/*<Stack.Screen*/}
            {/*    options={{title: 'Menu'}}*/}
            {/*/>*/}
            <FlatList
                data={products}
                renderItem={({item}) => <ProductListItem product={item}/>}
                numColumns={2}
                contentContainerStyle={{gap:10}}
                columnWrapperStyle={{gap:10}}
        />
            {/*<ProductListItem product={products[0]}/>*/}
            {/*<ProductListItem product={products[5]}/>*/}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding:10,
        borderRadius: 20
    },
    image:{
        width:"100%",
        aspectRatio:1
    },
    title:{
        fontSize:18,
        fontWeight:'600',
        marginVertical:10
    },
    price:{
        color: Colors.light.tint
    }
})
