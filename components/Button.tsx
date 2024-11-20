import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  theme?: "primary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  const themeStyles = getThemeStyles(theme);

  return (
    <View style={[styles.buttonContainer, themeStyles.container]}>
      <Pressable style={[styles.button, themeStyles.button]} onPress={onPress}>
        {theme === "primary" && (
          <FontAwesome
            name="picture-o"
            size={18}
            color={themeStyles.iconColor}
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, themeStyles.label]}>{label}</Text>
      </Pressable>
    </View>
  );
}

function getThemeStyles(theme?: "primary") {
  switch (theme) {
    case "primary":
      return {
        container: { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        button: { backgroundColor: "#fff" },
        label: { color: "#25292e" },
        iconColor: "#25292e",
      };
    default:     
      return {
        container: {},
        button: {},
        label: { color: "#fff" },
        iconColor: "#fff", 
      };
  }
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
