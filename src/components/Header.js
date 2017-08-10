// Import a library to  help create a component
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // Vertical positioning (Move elements up & down
    alignItems: 'center', // Horizontal positioning (right & left)
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Size of the shadow
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

// Make a component
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {headerText} </Text>
    </View>
  );
};


// Export component
export default Header;
