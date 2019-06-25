import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated
} from "react-native";
import ClapBubble from "./ClapBubble";

export default class ClapButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      claps: []
    };
  }
  keepClapping() {
    this.keepclap = setInterval(() => this.clap(), 150);
  }
  stopClapping() {
    if (this.keepclap) {
      clearInterval(this.keepclap);
    }
  }
  animationComplete(countNum) {
    claps = this.state.claps;
    claps.splice(claps.indexOf(countNum), 1);
    this.setState({ claps });
  }
  clap() {
    let count = this.state.count;
    let claps = this.state.claps;
    count++;
    claps.push(count);
    this.setState({ count });
  }
  renderClaps() {
    return this.state.claps.map(countNum => (
      <ClapBubble
        key={countNum}
        count={countNum}
        animationComplete={this.animationComplete.bind(this)}
      />
    ));
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderClaps()}
        <TouchableOpacity
          onPress={() => this.clap()}
          onPressIn={() => this.keepClapping()}
          onPressOut={() => this.stopClapping()}
          activeOpacity={0.6}
          style={styles.clapbutton}
        >
          <Image style={styles.clap} source={require("../img/clap.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  clapText: {
    color: "white",
    fontSize: 20
  },
  clapbutton: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#ecf0f1",
    bottom: 40,
    left: 100,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  clapbubble: {
    elevation: 4,
    backgroundColor: "#55BE6F",
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    bottom: 40,
    left: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  clap: {
    height: 60,
    width: 50
  }
});
