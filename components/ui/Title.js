import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
    padding: 12,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    maxWidth: "80%",
    width: 300,
  },
});
