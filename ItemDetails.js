import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function ItemDetails({ navigation, route }) {
    // item = route.params;
    const [item, setItem] = useState(route.params.item)
    console.log('>>>>>>>>>>>', item.image);

    const handleAddToFavorites = () => {

    };

    const handleRemoveFromFavorites = () => {

    };

    return (
        <View style={styles.itemDetailsContainer}>
            <View style={styles.itemDetails}>
                <Text style={styles.title}>{item.label}</Text>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text>Calories: {Math.round(item.calories)}</Text>
                <TouchableOpacity onPress={() => console.log("See Recipe")}>
                    <Text style={styles.recipeLink}>See Recipe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemButtons}>
                <TouchableOpacity onPress={handleAddToFavorites} style={styles.button}>
                    <Text>Add to Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRemoveFromFavorites} style={styles.button}>
                    <Text>Remove from Favorites</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemDetailsContainer: {
        flex: 1,
        padding: 20,
    },
    itemDetails: {
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    recipeLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    itemButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 5,
    },
});

export default ItemDetails;
