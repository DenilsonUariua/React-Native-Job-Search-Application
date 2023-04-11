import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageURL } from "../../../utils";
import { icons } from "../../../constants";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://via.placeholder.com/150",
          }} 
          style={styles.logoImage}
          />
      </View>
      <View style={styles.textBox}>
        
      </View>
    </View>
  );
};

export default Company;
