import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";
import { COLORS } from "../styles/colors";
import { getItem } from "../ducks/item";

class PurchaseSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 17,
      dia: 8,
      length: 1,
      qty: 1,
      price: 0,
      amount: 0,
    };
  }
  componentDidMount() {
    this.props.getItems();
  }
  calculation() {
    console.warn("hiii");
    if (this.state.color == 17 && this.state.length == 10) {
      this.setState({
        amount: 660,
        price: 600,
      });
    } else if (this.state.color == 19 && this.state.length == 8) {
      this.setState({
        amount: 250,
        price: 290,
      });
    } else if (this.state.color == 19 && this.state.length == 10) {
      this.setState({
        amount: 220,
        price: 260,
      });
    } else if (this.state.color == 20 && this.state.length == 8) {
      this.setState({
        amount: 740,
        price: 760,
      });
    } else if (this.state.color == 20 && this.state.length == 10) {
      this.setState({
        amount: 800,
        price: 815,
      });
    }
  }

  render() {
    console.warn(this.state.amount);
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.pickerViewContainer}>
            <View>
              <View>
                <Text>DIA</Text>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={this.state.dia}
                  style={styles.picker}
                  onValueChange={(itemValue) => {
                    this.setState({ dia: itemValue });
                  }}
                >
                  <Picker.Item label="1mm" value={1} />
                </Picker>
              </View>
            </View>
            <View>
              <View>
                <Text>LENGTH</Text>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={this.state.length}
                  style={styles.picker}
                  onValueChange={(itemValue) => {
                    this.setState({ length: itemValue });
                    this.calculation();
                  }}
                >
                  <Picker.Item label="International Socket" value={8} />
                  <Picker.Item label="TV Socket" value={10} />
                </Picker>
              </View>
            </View>
            <View>
              <View>
                <Text>COLOR</Text>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={this.state.color}
                  style={styles.picker}
                  onValueChange={(itemValue) => {
                    this.setState({ color: itemValue });
                    this.calculation();
                  }}
                >
                  <Picker.Item label="white" value={17} />
                  <Picker.Item label="blue" value={19} />
                  <Picker.Item label="black" value={20} />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.pickerViewContainer}>
            <View style={styles.subContainer}>
              <View>
                <Text>Qty</Text>
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={this.state.qty}
                  style={styles.picker}
                  onValueChange={(itemValue) =>
                    this.setState({ qty: itemValue })
                  }
                >
                  <Picker.Item label="1" value={1} />
                  <Picker.Item label="2" value={2} />
                  <Picker.Item label="3" value={3} />
                </Picker>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text>Price</Text>
              </View>
              <View style={styles.greyColour}>
                <TextInput
                  value={this.state.price}
                  defaultValue="500"
                  editable={false}
                />
              </View>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text>MRP</Text>
              </View>
              <View style={styles.greyColour}>
                <TextInput
                  value={this.state.price}
                  defaultValue="500"
                  editable={false}
                />
              </View>
            </View>
          </View>
          <View style={styles.pickerViewContainer}>
            <View style={styles.subContainer}>
              <View>
                <Text>Amount</Text>
              </View>
              <View style={styles.greyColour}>
                <TextInput
                  value={this.state.amount}
                  defaultValue="520"
                  editable={false}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 100,
  },
  container: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 10,

    backgroundColor: COLORS.white,
  },
  pickerViewContainer: {
    flexDirection: "row",
  },
  pickerContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    marginRight: 10,
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  greyColour: {
    backgroundColor: COLORS.light_grey,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    marginRight: 10,
    height: 50,
    width: 100,
    borderRadius: 10,
  },
  textInputContainer: {
    paddingTop: 5,
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

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSheet);
