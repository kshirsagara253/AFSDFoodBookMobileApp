import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ItemCard from './ItemCard';

function Dashboard({ user, onLogout }) {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const navigation = useNavigation();

    const APP_ID = "483078ff";
    const API_KEY = "c8591d5ed7f5047ed95c5cea7f64f857";

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        try {
            const response = await fetch(`https://api.edamam.com/search?q="ab"&app_id=${APP_ID}&app_key=${API_KEY}`);
            const data = await response.json();
            setItems(data.hits);
            setFilteredItems(data.hits);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const handleSearchInputChange = (text) => {
        setSearchQuery(text);
        const filtered = items.filter(item => item.recipe.label.toLowerCase().includes(text.toLowerCase()));
        setFilteredItems(filtered);
    };

    const handleLogout = () => {

        onLogout();
    };

    const handleContactUs = () => {

        navigation.navigate('ContactUsScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Search recipes"
                    value={searchQuery}
                    onChangeText={handleSearchInputChange}
                />
            </View>
            <View style={styles.dashboardContent}>
                <FlatList
                    data={filteredItems}
                    renderItem={({ item }) => (
                        <ItemCard item={item.recipe} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.itemCards}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    navButton: {
        padding: 10,
    },
    searchBox: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dashboardContent: {
        flex: 1,
        width: '100%',
    },
    itemCards: {
        paddingVertical: 20,
    },
});

export default Dashboard;
