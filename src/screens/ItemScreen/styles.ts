import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  descricao: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    marginBottom: 20,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: "#E1E1E6",
    color: "#7C7C8A",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 40,
    textTransform: "uppercase",
  },
  cancelButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#DC1637",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
