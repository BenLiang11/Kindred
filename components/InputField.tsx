import { InputFieldProps } from '@/types/type';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const InputField = ({
  label,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  className,
  placeholder,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-xl font-crimson font-extrabold mb-3 ${labelStyle}`}>{label}</Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
            <TextInput
              className={`rounded-full p-4 font-crimson font-semibold text-[15px] flex-1 ${inputStyle} text-left text-gray-500`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              placeholderTextColor="#ADADAD"
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
