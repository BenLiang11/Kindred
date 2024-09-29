import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({ size = 36, color = '#9B8AB4', ...props }) => {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
      <Path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ProfileIcon;