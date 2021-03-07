import React ,{useState} from 'react'
import { View, Text ,StyleSheet , TextInput , Image , Button , ScrollView} from 'react-native'
import { color } from 'react-native-reanimated';

const  ScreenR = () => {
  
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
      style={{ width:'60%', textAlign:'right' ,marginTop: 10 ,height: 50, borderColor: 'black', borderWidth: 2 , borderRadius:10}}
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


<Button
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
    
    backgroundColor: '#ffffff',
    padding:'10%' ,
    direction: 'inherit',
    borderRadius:20 ,
    position:'relative',
    width:'auto%'
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



export default ScreenR ;