import{StyleSheet} from 'react-native';

export default styles=StyleSheet.create({
    body: {
      backgroundColor: "#ffffff",
      flex: 1,
      flexDirection: "column", //default is column
      alignItems: "stretch",
      justifyContent: "center",
    },
    text: {
      color: "#000999",
      fontSize: 20,
      fontStyle: "italic",
      margin: 2,
    },
    textHeader: {
      color: "#000999",
      fontSize: 20,
      fontStyle: "italic",
      margin: 10,
      padding: 10,
    },
    buttonText: {
      color: "#fff979",
      fontSize: 20,
      fontStyle: "italic",
      margin: 10,
      padding: 10,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 30,
      elevation: 100,
      margin: 10,
      backgroundColor: "#224e79",
      color: "#d9e447",
    },
    container: {
      flex: 1,
      backgroundColor: "#fffff1",
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      flex: 1.5,
      backgroundColor: "#00ffff",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      flex: 5,
      backgroundColor: "#e8f8ff",
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      flex: 1,
      backgroundColor: "#ffb3d9",
      alignItems: "center",
      justifyContent: "center",
    },
    topMenu: {
      flex: 1,
      backgroundColor: "#00ffaa",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "90%",
    },
    buttomMenu: {
      flex: 1,
      backgroundColor: "#ffff00",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "50%",
    },
    menuItem: {
      height: 30,
      backgroundColor: "#ff0080",
      alignItems: "center",
      justifyContent: "center",
    },
  })