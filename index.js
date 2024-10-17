// This file is needed to make the package work with React Native
import { NativeModules } from 'react-native';

const { CustomOkHttpModule } = NativeModules;

export default CustomOkHttpModule;

// Nếu bạn không cần export bất kỳ API JavaScript nào, bạn có thể để file này trống
// hoặc export một hàm dummy
export const initOkhttps = () => {
    console.log('OkHttps initialized');
};
