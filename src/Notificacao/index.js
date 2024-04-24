import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Notificacao() {
  const [expoToken, setExpoToken] = useState("");

  const notificationReceivedRef = useRef('');

  const notificationResponseRef = useRef('');

  useEffect(() => {

    notificationReceivedRef.current = Notifications.
    addNotificationReceivedListener(notification => {
      console.log('notificação recebida', notification);
    });
    notificationResponseRef.current = Notifications.
    addNotificationReceivedListener(notification => {
      console.log('notificação clicada', notification);
    });

    registerForPushNotificationsAsync().then((token) => setExpoToken(token));
  }, []);

  async function handleNotificationLocal() {
    schedulePushNotification();
  }

  return (
    <View style={styles.container}>
      <Text>Trabalhando com notificações no Expo!</Text>
      <Button
        title="Enviar nofificação local"
        onPress={async () => {
          await handleNotificationLocal();
        }}
      />
      <Text>{expoToken}</Text>
      <StatusBar style="auto" />
    </View>
  );

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Notificação Local 📬",
        body: "Esse é um teste de notificação local acionado automaticamente após o clique do botão",

        // title: "Notificação Local 📬",
        // body: "Esse é um teste de notificação local com temporizador, exibida apos o tempo determinado",
      },
      trigger: null,
      // trigger: { seconds: 5 },
    });
  }
  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("FVocê não tem permissão para receber notificações");
      return;
    }

    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: "a208945d-4bed-4f52-a81b-286c4283fdaa"
      })
    ).data;
    console.log(token);
    return token;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
