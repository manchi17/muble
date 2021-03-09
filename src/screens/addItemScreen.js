import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { COLORS } from "../styles/colors";
import { getItem } from "../ducks/item";

class AddItemScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.line3}>No Breweries Found.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    paddingTop: 38,
    backgroundColor: COLORS.white,
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
