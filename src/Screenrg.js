import React ,{useState} from 'react'
import { View, Text ,StyleSheet , TextInput , Image , Button , ScrollView} from 'react-native'
import { color } from 'react-native-reanimated';

export default function loginScreen({navigation}) {
  
  const[counts, changes] = useState('رقم الهويه/هوية مقيم');
  

  return (
    <ScrollView>
    <View style={styles.container}>

<Image source={require('../src/image-15.png')} style={styles.logo} />

      <View style={styles.third} >
      <Text>تسجيل الدخول </Text>
         </View> 
         
<View style={styles.second}>

      {/* <Text>تسجيل الدخول !..</Text> */}
      <TextInput
      style={{ textAlign:'right',  marginTop: 10 ,height: 40, borderColor: 'black', borderWidth: 2 , borderRadius:10}}
      placeholder="اسم المستخدم"
    />

  
{/* id number  */}
<TextInput
      style={{  textAlign:'right' ,marginTop: 10 ,height: 50, borderColor: 'black', borderWidth: 2 , borderRadius:10}}
      // value={counts} // تعرض القيمة اللي في usestate
      // onChange={changes}
      placeholder="رقم الهوية/ هوية مقيم"
      keyboardType="number-pad"
    />

{/* email */}
<TextInput
      style={{  height: 50 ,borderColor: 'black', color:'red' , textAlign:'right' ,  borderWidth: 2 , borderRadius:10 ,marginTop:10 }}
      placeholder="الإيميل" 
      // placeholderTextColor="black"
      editable={true}
      keyboardType="email-address"
/>

{/* pasword */}
<TextInput
      style={{ height: 50 ,borderColor: 'black', color:'red' , textAlign:'right' ,  borderWidth: 2 , borderRadius:10 ,marginTop:10 }}
      placeholder="كلمة المرور" 
      // placeholderTextColor="black"
      editable={true}
      secureTextEntry={true}
      keyboardType="default"
/>

    {/* phone number  */}
    <TextInput
      style={{ height: 50 ,borderColor: 'black', color:'red' , textAlign:'left' ,  borderWidth: 2 ,  borderRadius:10 ,marginTop:10 , marginBottom: 20}}
      defaultValue="966  "
      placeholder="أدخل رقم الهاتف "
      // placeholderTextColor="black"
      maxLength={12}
      editable={true}
      keyboardType="number-pad"
/>

<Button
        title="دخول"   color='black'   onPress={()  => navigation.navigate("login")}  
        style={{marginTop:10  }}
      />
      <Text style ={{color:"grey"}}> لديك حساب ؟</Text>


      </View>

    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3C7E66',
    justifyContent: 'center',
    paddingTop: 10 ,
  },
  second:{
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding:50 ,
    direction: 'inherit',
    borderRadius:20 ,
    position:'relative',
    width:'auto'
    // marginBottom:10
  
  },
  third:{
    flexDirection: 'column',
    backgroundColor: '#C4C4C4',
    padding:20 ,
    direction: 'inherit',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    position:'relative',
  },
  logo:{
    height: 150,
    width: 150,
    resizeMode:'center',
  }
});



