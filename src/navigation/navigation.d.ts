import {StackParamList} from './StackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
