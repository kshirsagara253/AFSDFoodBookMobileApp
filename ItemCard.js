import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ItemCard({ item }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const buttonText = isFavorite ? "Remove from Favorites" : "Add to Favorites";

    const navigateToItemDetails = () => {

        navigation.navigate('ItemDetails', { item: item });
    };

    return (
        <TouchableOpacity onPress={navigateToItemDetails} style={styles.card}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
            </View>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.label}</Text>
                <Text>Calories: {Math.round(item.calories)}</Text>
                <Text style={styles.recipeLink}>See Recipe</Text>
                <Button title={buttonText} onPress={handleToggleFavorite} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        overflow: 'hidden',
        marginBottom: 20,
    },
    imageContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardBody: {
        padding: 20,
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    recipeLink: {
        color: '#007bff',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
});

export default ItemCard;
