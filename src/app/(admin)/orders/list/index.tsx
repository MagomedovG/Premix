import { FlatList } from 'react-native';
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrderListItem';
import { Stack } from 'expo-router';
import { Text } from 'react-native'
export default function OrdersScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Активные' }} />
            <FlatList
                data={orders}
                contentContainerStyle={{ gap: 10, padding: 10 }}
                renderItem={({ item }) => <OrderListItem order={item}/>}
            />
        </>
    );
}
