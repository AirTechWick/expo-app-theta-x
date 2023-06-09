import React, { useState } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { offCameraControlSource } from "./theta_control/off-camera-control-source";
import { onCameraControlSource } from "./theta_control/on-camera-control-source";
import { bitrateEconomy } from "./theta_control/bitrate-economy";
import { bitrateFine } from "./theta_control/bitrate-fine";
import { bitrateNormal } from "./theta_control/bitrate-normal";
import { fileFormat5_7k_10_fps } from "./theta_control/fileFormat.5_7k_10_fps";
import { fileFormat5_7k_2_fps } from "./theta_control/fileFormat.5_7k_2_fps";
import { styles } from "./styles";
import { fileFormat5_7k_5_fps } from "./theta_control/fileFormat.5_7k_5_fps";
import { fileFormat8k_2_fps } from "./theta_control/fileFormat.8k_2_fps";
import { fileFormat8k_5_fps } from "./theta_control/fileFormat.8k_5_fps";
import { maxRecordTime2hours } from "./theta_control/max-record-time-2-hours";
import { maxRecordTime5mins } from "./theta_control/max-record-time-5-mins";
import { maxRecordTime25mins } from "./theta_control/max-record-time-25-mins";
import { fileFormat8k_10_fps } from "./theta_control/fileFormat.8k_10_fps";
import { setImageButtonControl } from "./theta_control/set-image-button-control";
import { setVideoButtonControl } from "./theta_control/set-video-button-control";

export default function App() {
  // fake-theta
  // const urlEndpoint = "https://fake-theta.vercel.app/osc/";
  // real theta physical device in access point mode
  const urlEndpoint = "http://192.168.1.1/osc/";

  // end camera endpoint config
  const [responseWindow, onChangeResponseWindow] = useState(
    "press button to test API"
  );


  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>RICOH THETA X Demo</Text>
      </View>

      {/* start of 8k buttons row*/}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="8k 2fps"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              fileFormat8k_2_fps(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("8k 2fps Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="8k 5fps"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              fileFormat8k_5_fps(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("8k 5fps Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View> 
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="8k 10fps"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              fileFormat8k_10_fps(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("8k 10fps Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
      </View>

      {/* start of vid buttons row */}
      <View style={styles.buttonRow}>
       <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="vid 5 mins"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              maxRecordTime5mins(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Max Record Time 5 minutes Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View> 
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="vid 25 mins"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              maxRecordTime25mins(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Max Record Time 25 minutes Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="vid 2 hrs"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              maxRecordTime2hours(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Max Record Time 2 hours Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View> 
      </View>

      {/* Row of Modes and Off/On Camera */}

      <View style={styles.buttonRow}>
      <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Img Mode"
            onPress={() => {
              setImageButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Img Mode Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Vid Mode"
            onPress={() => {
              setVideoButtonControl(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Vid Mode Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Off Cam SRC"
            onPress={() => {
              offCameraControlSource(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Off Cam SRC Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="On Cam SRC"
            onPress={() => {
              onCameraControlSource(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("On Cam SRC Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>
      </View>

      {/* Row of Bit Rate Options */}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="bit rate econ"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              bitrateEconomy(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Bit Rate Econ Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>      
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="bit rate norm"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              bitrateNormal(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Bit Rate Normal Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>  
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="bit rate fine"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              bitrateFine(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("Bit Rate Fine Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>           
      </View>

      {/* start of 5k buttons row*/}
      <View style={styles.buttonRow}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="5.7k 2fps"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              fileFormat5_7k_2_fps(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("5.7k 2fps Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="5.7k 5fps"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              fileFormat5_7k_5_fps(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("5.7k 5fps Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>  

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="5.7k 10fps"
            onPress={async () => {
              await setVideoButtonControl(urlEndpoint);
              fileFormat5_7k_10_fps(urlEndpoint).then(function (data) {
                console.log(data);
                onChangeResponseWindow("5.7k 10fps Successful!\n\n" + data);
              });
            }}
          ></Button>
        </View>    

      </View>
      <View style={styles.responseWindowContainer}>
        <Text>{responseWindow}</Text>
      </View>
    </ScrollView>
  );
}
