import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GoalItem({ value, onDelete, id }) {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listedItems}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listedItems: {
    padding: 10,
    margin: 10,
    backgroundColor: "grey",
    borderColor: "darkred",
    borderWidth: 1,
  },
});
