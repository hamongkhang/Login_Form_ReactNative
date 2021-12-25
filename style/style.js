import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight:20,
    paddingLeft:20,
  },
  image:{
      width: 100,
      height:100,
      marginTop:-350,
  },
  title:{
      fontSize:16,
      marginTop:20
  },
  button:{
      marginTop:20,
      backgroundColor:"red",
      borderRadius:4,
      width:325,
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText:{
      fontSize:18,
      color:"white",
  },
  hr:{
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop:20
  },
  gach:{
      borderBottomWidth:1,
      color:"black",
      width:150
  },
  title2:{
    fontSize:16,
    marginLeft:20,
      marginTop:20,
      alignSelf: 'flex-start'
  },
  email:{
      fontSize:16,
      marginLeft:20,
      marginTop:20,
      alignSelf: 'flex-start'
  },
  emailTitle:{
    fontSize:16,
    marginBottom:10,
  },
  input1:{
      borderColor:"grey",
      borderBottomWidth:1,
      borderTopWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
      width:325,
      height:40,
      paddingLeft:10,
      borderRadius:4,
      marginBottom:10,
  },
  redColor:{
      color:"red",
  },
  title3:{
      marginBottom:5,
  },
  forgot:{
    marginTop:10,
    alignSelf:"flex-end",
    marginRight:25,
  },
  loginButton:{
      backgroundColor:"blue",
      width:325,
      height:40,
      justifyContent:"center",
      alignItems:"center",
      color:"white",
      marginTop:20,
      borderRadius:4,
      marginBottom:20,
  },
  textLogin:{
      fontSize:16,
      color:"white",
  }
});

export default styles;