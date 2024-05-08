import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Contact from "./Contact";
import * as Contacts from "expo-contacts";
const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  //Rehber erisimi isteme
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        if (data.length > 0) {
          setContacts(data);
          console.log(data[0]);
        }
      }
    })();
  }, []);
  //Anahtar çıkarıcı
  const keyExtractor = (item, idx) => {
    return item?.id?.toString() || idx.toString();
  };
  //Ogeyi olustur
  const renderItem = ({ item, index }) => {
    return <Contact contact={item} />;
  };
  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default ContactsList;