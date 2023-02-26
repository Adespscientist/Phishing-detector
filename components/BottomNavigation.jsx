import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { TouchableOpacity } from "react-native";
const BottomNavigation = () => {
  const BottomIconList = [
    {
      id: 1,
      icon1: "user-shield",
    },
    {
      id: 2,
      icon1: "exclamation-triangle",
    },
    {
      id: 3,
      icon1: "bell",
    },
    {
      id: 4,
      icon1: "ellipsis-h",
    },
  ];

  const Item = ({ item }) => {
    return (
      <View>
        <TouchableOpacity>
          <FontAwesome5 name={item.icon1} size={18} color="#ccc" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#252748",
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
        }}
      >
        <FlatList
          data={BottomIconList}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            alignItems: "center",
          }}
        />
      </View>
    </View>
  );
};

export default BottomNavigation;
