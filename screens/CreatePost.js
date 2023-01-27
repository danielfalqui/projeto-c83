import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Caption, TextInput } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

export default class CreatePost extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Novo Post</Text>
          </View>
        </View>
        <View style={styles.fieldsContainer}>
          <ScrollView>
            <Image
            source={preview_images[this.state.previewimages]}
            style={styles.previewimages}
            ></Image>

            <View style={{height:RFValue(this.state.dropdownHeight)}}>
              <DropDownPicker
                items={[
                  {label: "image 1",value: "image_1"}
                  {label: "image 2",value: "image_2"}
                  {label: "image 3",value: "image_3"}
                  {label: "image 4",value: "image_4"}
                  {label: "image 5",value: "image_5"}
                  {label: "image 6",value: "image_6"}
                  {label: "image 7",value: "image_7"}
                ]}
                defaultValue={this.state.previewimages}

                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  margimBottom: 10
                }}
                onOpen={()=>{
                  this.setState({dropdownHeight:170})
                }}
                onClose={()=>{
                  this.setState({dropdownHeight:40})
                }}
                style={{backgroundColor: "transparent"}}
                itemStyle={{
                  justifyContent: "flex-start"
                }}
                DropDownStyle={{backgroundColor:"#2a2a2a"}}
                labelStyle={{
                  color: "white"
                }}
                arrowStyle={{
                  color: "white"
                }}
               onChangeItem={item => 
                this.setState({
                  preview_images: item.value
                })
              }

              />
            </View>

              <TextInput
              style={styles.inputFont}
              onChangeText={Caption=> this.setState({Caption})}
              placeholder={"legenda"}
              placeholderTextColor="white"
              />

          </ScrollView>
        </View>
        <View style={{flex:0.08}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? statusbar.currentHeight: RFValue(30)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex:0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28)
  },
  cardContainer: {
    flex: 0.85
  }
});