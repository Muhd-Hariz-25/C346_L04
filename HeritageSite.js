import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const HeritageSite = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.card}>
            {/* Title & Cultural Icon Header */}
            <View style={styles.headerRow}>
                <FontAwesome6 name={icon_name} size={22} color="#1f2937" style={styles.icon} />
                <Text style={styles.title}>{name}</Text>
            </View>

            {/* Historical Description */}
            <Text style={styles.description}>{description}</Text>

            {/* Heritage Photo */}
            <Image source={poster} style={styles.poster} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff', //White color hex code
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    icon: {
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        flex: 1,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4b5563',
        marginBottom: 14,
    },
    poster: {
        width: '100%',
        height: 220,
        borderRadius: 8,
        resizeMode: 'cover',
    },
});

export default HeritageSite;