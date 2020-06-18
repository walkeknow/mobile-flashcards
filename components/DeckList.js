import React from 'react'
import { View, Text, StyleSheet,  FlatList } from 'react-native'
import DeckListItem from './DeckListItem'
import { background } from '../utils/colors'
import { DATA } from '../utils/helpers'

export default function DeckList() {
  const items = Object.values(DATA)
  console.log(items)
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Select a Deck</Text>
      </View>
      <FlatList
        data={Object.values(DATA)}
        style={styles.deckList}
        numColumns={2}
        renderItem={({ item }) => (
          <DeckListItem title={item.title} color={item.color} />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    padding: 20,
    fontSize: 20,
  },
})