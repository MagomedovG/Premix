import {Link, Stack} from "expo-router";
import {Pressable} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";
import React from "react";
import UIButton from "@/src/components/UIButton";
import {supabase} from "@/src/lib/supabase";

export default function MenuStack (){
    return (
        <Stack
            screenOptions={{
                headerLeft:() => (
                    <UIButton onPress={() => supabase.auth.signOut()} text="Sign out" />
                ),
                headerRight: () => (
                    <Link href="/cart" asChild>
                        <Pressable>
                            {({pressed}) => (
                                <FontAwesome
                                    name="shopping-cart"
                                    size={25}
                                    color={Colors.light.tint}
                                    style={{marginRight:15, opacity: pressed ? 0.5 : 1}}
                                />
                            )}
                        </Pressable>
                    </Link>
                )
            }}
        >
            <Stack.Screen name="index" options={{title:"Menu"}}/>
        </Stack>
    )
}
