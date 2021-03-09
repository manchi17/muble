import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { COLORS } from "../styles/colors";
import { common } from "../styles/common";
import { getItem } from "../ducks/item";
import { Entypo } from "@expo/vector-icons";

class AddItemScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <SafeAreaView style={common.container}>
        <View style={styles.headerConatiner}>
          <Entypo
            name={"menu"}
            size={20}
            color={COLORS.black}
            style={styles.menuIcon}
          />
          <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>CONSTRUCTOR</Text>
          </View>
          <Entypo
            name={"shopping-cart"}
            size={20}
            color={COLORS.black}
            style={styles.cartIcon}
          />
        </View>
        <View style={styles.mainContainer}>
          {this.props.items && (
            <View>
              <Image
                style={styles.image}
                resizeMode={"cover"}
                source={{
                  uri: this.props.items.brands.image,
                }}
              ></Image>
              <Text>{this.props.items.brands.name}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerConatiner: {
    flexDirection: "row",
  },
  mainContainer: {
    paddingLeft: 20,
  },
  buttonContainer: {
    position: "absolute",
    backgroundColor: COLORS.blue,
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  image: {
    width: 80,
    height: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  subHeader: {
    flex: 1,
    height: 50,
    backgroundColor: COLORS.yellow,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.yellow,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  subHeaderText: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  cartIcon: {
    marginRight: 10,
    marginLeft: 20,
    alignSelf: "center",
  },
  menuIcon: {
    marginRight: 20,
    marginLeft: 10,
    alignSelf: "center",
  },
});

const mapStateToProps = (state) => ({
  items: state.item.information,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemScreen);
