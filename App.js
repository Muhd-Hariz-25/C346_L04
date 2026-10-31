import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import HeritageSite from './HeritageSite';

const heritageSites = [
  {
    name: 'Malay Heritage Centre (Istana Kampong Gelam)',
    icon_name: 'landmark',
    description:
        'Built in the 1840s by Sultan Ali, this former royal seat combines traditional Malay timber palace forms with European Palladian architecture. It serves as Singapore’s key national cultural institution dedicated to celebrating and preserving Malay culture.',
    poster: require('./img/istanaKampongGelam.jpg'),
  },
  {
    name: 'Sultan Mosque (Masjid Sultan)',
    icon_name: 'mosque',
    description:
        'The focal landmark of historic Kampong Glam, reconstructed in the 1920s in the Saracenic revival style. It is recognized for its grand gilded domes and the base ring of each dome formed from glass bottle ends collected by the local community.',
    poster: require('./img/sultanMosque.jpg'),
  },
  {
    name: 'Gedung Kuning (The Yellow Mansion)',
    icon_name: 'house-chimney',
    description:
        'A stately 19th-century royal residence situated beside Istana Kampong Gelam, built for Tengku Mahmud. Painted royal yellow, it represents a distinctive blend of local timber detailing and colonial neoclassical design.',
    poster: require('./img/gedungKuning.jpg'),
  },
  {
    name: 'Geylang Serai Heritage Gallery',
    icon_name: 'archway',
    description:
        'Housed inside Wisma Geylang Serai, this gallery showcases the history and traditions of Singapore’s major Malay settlement, tracing its roots from early plantation days to a hub for trade, festivities, and community life.',
    poster: require('./img/geylangSerai.jpg'),
  },
  {
    name: 'Muslim Cemetery (Jalan Kubor Cemetery)',
    icon_name: 'monument',
    description:
        'Singapore’s oldest surviving Muslim burial ground dating from the early 19th century. It features designated sections for Malay royalty, Bugis merchants, and Indian Muslims, containing headstones in Jawi, Arabic, and Bugis scripts.',
    poster: require('./img/jalanKubor.jpg'),
  },
];

export default function App() {
  return (
      <View style={styles.container}>
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.pageHeader}>
            <Text style={styles.mainHeading}>Singapore Heritage Trails</Text>
            <Text style={styles.subHeading}>Kampong Glam & Geylang Serai Cultural Sites</Text>
          </View>

          {heritageSites.map((site, index) => (
              <HeritageSite
                  key={index}
                  name={site.name}
                  icon_name={site.icon_name}
                  description={site.description}
                  poster={site.poster}
              />
          ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingTop: 45,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  pageHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
    textAlign: 'center',
  },
});