import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  let [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function addGoalHandler(goalTitle) {
    setCourseGoals((courrentGoals) => [
      ...courrentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((courrentGoals) => {
      return courrentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  function cancelGoalAdditionalHandler() {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="ToDoList" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            value={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
