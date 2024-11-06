import React, {
  useState,
  useRef, 
  useMemo,
  useEffect,
  Component,
  useCallback,
} from 'react';
import { AppState } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import {
  PurchaseError,
  requestSubscription,
  initConnection,
} from 'react-native-iap';

import * as FileSystem from 'expo-file-system';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as ImagePicker from 'expo-image-picker';
import { IMessage } from 'react-native-gifted-chat';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'
import {
  StyleSheet,
  View,
  Image,
Vibration,
  
  Text,
  TouchableOpacity,
  PanResponder,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';



import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { GiftedChat } from 'react-native-gifted-chat';
import { ActivityIndicator, Linking } from 'react-native';
import { Bubble, InputToolbar, Send } from 'react-native-gifted-chat';
import { KeyboardAvoidingView, Platform, Button, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch } from 'react-native';
import { Modal } from 'react-native';
import { Alert, Animated, Easing,Dimensions } from 'react-native';
import Dialog from 'react-native-dialog';
import PagerView from 'react-native-pager-view';
import 'react-native-gesture-handler';

import { Asset } from 'expo-asset';

import { Audio } from 'expo-av';


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const YourComponent = ({ page }) => {
  const [isTapped, setIsTapped] = useState(false);
  const [chatCount, setChatCount] = useState(0);
  const [showImages, setShowImages] = useState(false);
  // Add this state to your component

  return <View>{/* Your component's JSX here */}</View>;
};

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to My App</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Chat')}>
          <Text style={styles.buttonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default function App() {
  
    const [isMicEnabled, setMicEnabled] = React.useState(true);
        const [isMicEnabled2, setMicEnabled2] = React.useState(false);
  


 
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [page, setPage] = useState(1);

   const handleSetPage = (newPage) => {
        console.log("Changing page to:", newPage); // Debugging info
        setPage(newPage);
    };

  const [showImage5, setShowImage5] = useState(true);
  const [showImage, setShowImage] = useState(false);
    const [showImage12, setShowImage12] = useState(false);
  const [showText, setShowText] = useState(false);
    const [showText12, setShowText12] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText73, setShowText73] = useState(false);
  const [showFinger, setShowFinger] = useState(false);

const [selectedPlan, setSelectedPlan] = React.useState('');
  const [showTrialMessage, setShowTrialMessage] = useState(false);
   const [showBasicInfo, setShowBasicInfo] = useState(false);
  const [showProInfo, setShowProInfo] = useState(false);

  const toggleBasicInfo = () => {
    setShowBasicInfo(true);
  };

  const toggleBasicInfo2 = () => {
    setShowBasicInfo(false);
  };

  const toggleProInfo = () => {
    setShowProInfo(true);
  };

  const toggleProInfo2 = () => {
    setShowProInfo(false);
  };


  const [showBasicoTrialMessage, setShowBasicoTrialMessage] = useState(false);
const [showPremiumTrialMessage, setShowPremiumTrialMessage] = useState(false);

const subscriptionSkus = Platform.select({
  ios: [
    'com.aispeak.basico.mensual',
    'com.aispeak.basico.anual',
    'com.aispeak.pro.mensual',
    'com.aispeak.pro.anual'
  ],
  android: []
});

// Initialize IAP when app starts
useEffect(() => {
  const init = async () => {
    try {
      await initConnection();
    } catch (error) {
      Alert.alert('Initialization Error', 'Failed to initialize IAP');
    }
  };
  
  init();
}, []);

const inAppGetSubscriptions = async () => {
  try {
    console.log("called get sub", "test");
    const test = await getSubscriptions({ skus: subscriptionSkus });
    console.log("called get sub", test);
  } catch (error) {
    Alert.alert('Error', `getSubscriptions Error: ${error.message}`);
  }
};

const inAppBuySubscription = async (plan) => {
  let productId;
  if (plan === 'Basico') {
    productId = billingCycle === 'Mensual' ? 'com.aispeak.basico.mensual' : 'com.aispeak.basico.anual';
  } else if (plan === 'Pro') {
    productId = billingCycle === 'Mensual' ? 'com.aispeak.pro.mensual' : 'com.aispeak.pro.anual';
  }

  console.log(productId, "productId");
  
  try {
    await requestSubscription({
      sku: productId,
    });
  } catch (error) {
    if (error instanceof PurchaseError) {
      Alert.alert('Purchase Error', `[${error.code}]: ${error.message}`);
    } else {
      Alert.alert('Error', `Unexpected error: ${error.message}`);
    }
  }
};
const [rectangle1, setRectangle1] = React.useState(styles.rectangle);
const [rectangle2, setRectangle2] = React.useState(styles.rectangle);
const [rectangle3, setRectangle3] = React.useState(styles.rectangle);
const [rectangleSmallPhone , setrectangleSmallPhone ] = React.useState(styles.rectanglesmallphone);
useEffect(() => {
  if (page === 4000) {
    handlePress2(setRectangle2, 'Full');
  }
}, [page, handlePress2]);

  const [showImages, setShowImages] = useState(false);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isregistered, setisregistered] = useState(false);
const [isPopupVisible, setPopupVisible] = useState(false);
const handlePress2 = useCallback((setRectangle, plan) => {
  // Reset all rectangles to the original styl
  setRectangle1(styles.rectangle);
  setRectangle2(styles.rectangle);
  setRectangle3(styles.rectangle);

  // Set the clicked rectangle to the rectangle2 style
  setRectangle(styles.rectangle2);

  // Set the selected plan
  setSelectedPlan(plan);

  // If the 'Full' plan is selected, start the animation after 10 seconds
  if (plan === 'Full') {
    setTimeout(() => {
      startAnimationrectangle();
    }, 5000);
  }

}, [setRectangle1, setRectangle2, setRectangle3, setSelectedPlan, startAnimationrectangle]);

const [chatKey, setChatKey] = useState(1);
const [chatHistories, setChatHistories] = useState({});

  const addMessageToChatHistory = (message) => {
    setChatHistories((prevHistories) => ({
      ...prevHistories,
      [chatKey]: [...(prevHistories[chatKey] || []), message],
    }));
    setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
  };

const [chatHistory, setChatHistory] = useState([]);
  const [avatarKey, setAvatarKey] = useState('avatar1');
 const [avatarKey2, setAvatarKey2] = useState('avatar2');
  const [avatarKey3, setAvatarKey3] = useState('avatar3');
   const [avatarKey4, setAvatarKey4] = useState('avatar4');
   const [avatarKey5, setAvatarKey5] = useState('avatar5');

const avatarImages = useMemo(() => ({
  avatar1: require('./assets/images/basiccircle4.png'),
  avatar2: require('./assets/images/hatcircle4.png'),
  avatar3: require('./assets/images/crowncircle4.png'),
  avatar4: require('./assets/images/Removal773new.png'),
  avatar5:    require('./assets/images/Removal132new.png'),
}), []);

  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isNameEditable, setIsNameEditable] = useState(false);
  // other state variables

  // Event handlers
  const handleEmailEdit = () => {
    setIsEmailEditable(true);
  };

  const handleNameEdit = () => {
    setIsNameEditable(true);
  };


const [hasClickedBasico, setHasClickedBasico] = useState(false);
const [hasClickedPremium, setHasClickedPremium] = useState(false);
 const [modal2Visible, setModal2Visible] = useState(false);
  const [modalCount, setModalCount] = useState(9);
  const [level2Locked, setLevel2Locked] = useState(true);
const [showLevels, setShowLevels] = useState(true);
const [showCapybara, setShowCapybara] = useState(false);
const [modalGifScale] = useState(new Animated.Value(1)); // New state variable
 const [isModalGifClicked, setIsModalGifClicked] = useState(false); // New state variable

   useEffect(() => {
    if (modalCount === 9 && modal2Visible) {
      const timer = setTimeout(() => {
        setModalCount(10);
        setLevel2Locked(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [modalCount, modal2Visible]);

  useEffect(() => {
    if (modal2Visible) {
      const timer = setTimeout(() => {
        setShowImages(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowImages(false);
    }
  }, [modal2Visible]);
   

  const closeModal2 = () => {
    setModal2Visible(false);
  };

   const startAnimationmodal = () => { // Add this
   Animated.timing(modalGifScale, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsModalGifClicked(true);
      setShowLevels(false);
      setShowCapybara(true);
    });
  };
// Add this new state variable
const [hasModalBeenShown, setHasModalBeenShown] = useState(false);

useEffect(() => {
  if (page === 820 && !hasModalBeenShown) {
    const timer = setTimeout(() => {
      setModal2Visible(true); // Open the modal after 3 seconds
      setHasModalBeenShown(true); // Set this to true so the modal won't be shown again
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }
}, [page, hasModalBeenShown]); // Add hasModalBeenShown to the dependency array

const [showComponents, setShowComponents] = useState(true);
const [basicoPriceText, setBasicoPriceText] = useState('€7.99 por mes');
const [premiumPriceText, setPremiumPriceText] = useState('€49.99 por año');
const [clickedBasico, setClickedBasico] = useState(false);
const [clickedPremium, setClickedPremium] = useState(false);

  const [showFinger2, setShowFinger2] = useState(false);
  const [showsecond, setShowsecond] = useState(false);
  const [showsecond2, setShowsecond2] = useState(false);
  const [showfifth, setShowfifth] = useState(false);
  const [showfirst, setShowfirst] = useState(false);
  const [showfirst2, setShowfirst2] = useState(false);
  const [showthird, setShowthird] = useState(false);
  const [showfourth, setShowfourth] = useState(false);
  const [currentPage, setCurrentPage] = useState(7);
  const [firstVisit, setFirstVisit] = useState(true);
  const [showImage72, setShowImage72] = useState(false);


   const [showImages7, setShowImages7] = useState(true);
 const [showOk, setShowOk] = useState(true);
 const [showOkbutton, setShowOkbutton] = useState(true);

// Add a new state variable for the blur effect
const [blur, setBlur] = useState(10);


  const [showText72, setShowText72] = useState(false);  const [profilePicture, setProfilePicture] = useState(null);

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

     if (!result.canceled) {
      const uri = result.assets[0].uri;
      setProfilePicture(uri);

      // Save profile picture URI to AsyncStorage
      AsyncStorage.setItem('profilePicture', uri);
    }
  };
 const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
  {
    clientId: '152456325574-5ur7861t28n1u5ue3aob4lgoktcuke9v.apps.googleusercontent.com',
  },
);

  useEffect(() => {
    if (page === 7.2) {
      const timer = setTimeout(() => {
        setShowImage72(true);
        setShowText72(true);
        setShowFinger2(true);
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [page]);

  useEffect(() => {
  if (page === 4000) {
    const checkSubscriptionStatus = async () => {
      // Connect to the payment queue
      await InAppPurchases.connectAsync();

      // Get the purchase history
      const { results } = await InAppPurchases.getPurchaseHistoryAsync();

      // Check if there's an active subscription
      const hasActiveSubscription = results.some(purchase => {
        // Check if the purchase is a subscription and is still valid
        return purchase.productId === 'your_subscription_id' && purchase.acknowledged;
      });

      if (hasActiveSubscription) {
        // If the user has an active subscription, perform the desired action
       setPage(7);
      }
    };

    checkSubscriptionStatus();
  }
}, [page]);


  useEffect(() => {
    if (page === 4) {
      const timer = setTimeout(() => {
        setShowImage(true);
        setShowText(true);
        setShowFinger(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [page]);
   useEffect(() => {
    if (page === 12) {
      const timer = setTimeout(() => {
        setShowImage12(true);
          setShowText12(true);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [page]);

  useEffect(() => {
    if (page === 7 && firstVisit) {
      const timer = setTimeout(() => {
        setFirstVisit(false);
        setPage(7.2);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [page, firstVisit]);
const [selectedRectangle, setSelectedRectangle] = useState(0);
const rectangles = [1, 2, 3, 4, 5, 6];
 const [isSubscriptionSelected, setIsSubscriptionSelected] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [name, setName] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('');
  const [learningLanguage, setLearningLanguage] = useState('');
  const [shouldLoadMessages, setShouldLoadMessages] = useState(true);
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [chats, setChats] = useState([1]); // Add this line
const maxCounts = [10, 25, 50, 75, 50, 50, 50, 50, 50, '⭐'];
const [textColor, setTextColor] = useState('black'); // Default text color

const [makeUserWant, setMakeUserWant] = useState(false);

type State = {
  // ... other state variables ...
  sound: Audio.Sound | null;
};

  const popAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

useEffect(() => {
  if (page === 4000) {
    console.log('Page is 7, setting timer...');
    const timer = setTimeout(() => {
      console.log('Timer triggered, updating state...');
     setTextColor('rgba(0, 0, 0, 0)');
      setMakeUserWant(true);
      Animated.sequence([
          Animated.timing(popAnim, {
            toValue: 1.2, // Scale up to 1.2 times the original size
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(popAnim, {
            toValue: 1, // Scale back to the original size
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
    }, 6000);

    // Cleanup the timer if the component unmounts or page changes
    return () => {
      console.log('Cleaning up timer...');
      clearTimeout(timer);
    };
  }
}, [page, popAnim]);

 useEffect(() => {
    // Lock the screen orientation to portrait mode
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };

    lockOrientation();
  }, []);
const supabaseUrl = 'https://ojcsvhfkvajrpjwdvbkc.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qY3N2aGZrdmFqcnBqd2R2YmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDIxNDcsImV4cCI6MjAyMzMxODE0N30.MrjI-nWf70wZJSmvRMEK9qjEz_Iv_9qGhLp82SzvRSE' 
const supabase = createClient(supabaseUrl, supabaseKey)

const [userId, setUserId] = useState(null);

const saveToSupabase = useCallback(async () => {
  if (!userId) {
    console.error('Error: userId is undefined');
    return;  // Skip if no user is logged in
  }

  console.log('Updating data for userId: ', userId);  // Log the userId
  console.log('Current state: ', {  // Log the current state
    visitedPage1,
    currentCountPrincipiante,
    currentCountIntermedio,
    currentCountAvanzado,
    isMicEnabled,
    currentChatKey,
    isMicEnabled2,
    selectedOption,
    email,
    name,
   
  
    firstVisit,
   currentCount,
    chatHistory,
    
  
   
    questionMarkShown,
   
    trialChatCount,
    isTimeoutActive,
    currentLevel,
    chatKey,
    chats,
    firstTimeModal,
  });

  const { error } = await supabase
    .from('users')
    .update({
      visitedPage1: visitedPage1,
      currentCountPrincipiante: currentCountPrincipiante,
      currentCountIntermedio: currentCountIntermedio,
      currentCountAvanzado: currentCountAvanzado,
      isMicEnabled: isMicEnabled,
      currentChatKey: currentChatKey,
      isMicEnabled2: isMicEnabled2,
      selectedOption: selectedOption,
      email: email,
      name: name,
     
     
      firstVisit: firstVisit,
    currentCount: currentCount,
      chatHistory: chatHistory,
     firstTimeModal:firstTimeModal,
    
     
      
     
      questionMarkShown: questionMarkShown,
     
    
    
      trialChatCount: trialChatCount,
      isTimeoutActive: isTimeoutActive,
      currentLevel: currentLevel,
      chatKey: chatKey,
      chats: chats,
    })
    .eq('auth_id', userId);

  if (error) {
    console.log('Error saving data: ', error);
  } else {
    console.log('Data saved successfully');
  }
}, [
  userId, supabase, visitedPage1, currentCountPrincipiante, currentCountIntermedio, currentCountAvanzado,
  isMicEnabled, currentChatKey, isMicEnabled2, selectedOption, email, name, firstVisit, firstTimeModal,  chatHistory, 
  questionMarkShown,  trialChatCount,
  isTimeoutActive, currentCount,currentLevel, chatKey, chats
]);


useEffect(() => {
  if (isLoggedIn && userId) {
    const timer = setTimeout(() => {
      saveToSupabase();
    }, 10000);  // 10000 milliseconds = 10 seconds

    return () => clearTimeout(timer);  // Clear the timer if the component unmounts
  }
}, [isLoggedIn, userId, saveToSupabase]);
  const [billingCycle, setBillingCycle] = useState('Mensual'); // Default to Yearly
  const [selectedPlannew, setSelectedPlannew] = useState('Monthly');
  useEffect(() => {
    if (page === 7 && isregistered) {
      setYouHaveRegistered(true);

      // Hide the view after 10 seconds
      const timer = setTimeout(() => {
        setYouHaveRegistered(false);
        setisregistered(false);
      }, 2000); // 10 seconds

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [page, isregistered]);
const [passwordError, setPasswordError] = useState('');  // State to hold the password error message
const [currentChatKey, setCurrentChatKey] = useState(0); // Track the current chat key for new chats

const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error creating user account', error);
    setLoginError('Error creating user account');
  } else {
    console.log('User account created');

    // Add the code to create a new user row
    const { error: insertError } = await supabase
      .from('users')
      .insert([{ auth_id: user.id, email: email, currentCount: 1 }]);

    if (insertError) {
      console.error('Error creating user in users table', insertError);
    } else {
      console.log('User row created in users table');
    }

    // Navigate to page 7 and set logged-in status
    setPage(7);
    setIsLoggedIn(true);

  

   
  }
};


supabase.auth.onAuthStateChange(async (event, session) => {
  if (event === 'SIGNED_IN') {
    // The user has just signed in.
    const user = session.user;

    console.log('Setting userId: ', user.id);  // Log before setting userId
    setUserId(user.id);
    console.log('userId after setting: ', userId);  // Log after setting userId

    // Fetch the user data from Supabase
    const { data, error: fetchError } = await supabase
      .from('users')
      .select(`
        currentCount,
        visitedPage1,
        currentCountPrincipiante,
        currentCountIntermedio,
        currentCountAvanzado,
        isMicEnabled,
        currentChatKey,
        isMicEnabled2,
        selectedOption,
        email,
        name,
        
      
        firstVisit,
      
        firstTimeModal,
       
        chatHistory,
       
       
        
        questionMarkShown,
       
 
      
        trialChatCount,
        isTimeoutActive,
        currentLevel,
        chatKey,
        chats
      `)
      .eq('auth_id', user.id);

    if (fetchError) {
      console.error('Error fetching user data', fetchError);
    } else if (data && data.length > 0) {
      // Set the app state with the fetched data
      setCurrentCount(data[0].currentCount);
      setVisitedPage1(data[0].visitedPage1);
      setCurrentCountPrincipiante(data[0].currentCountPrincipiante);
      setCurrentCountIntermedio(data[0].currentCountIntermedio);
      setCurrentCountAvanzado(data[0].currentCountAvanzado);
      setMicEnabled(data[0].isMicEnabled);
      setCurrentChatKey(data[0].currentChatKey);
      setMicEnabled2(data[0].isMicEnabled2);
      setSelectedOption(data[0].selectedOption);
      setEmail(data[0].email);
      setName(data[0].name);
    
     
      setFirstVisit(data[0].firstVisit);
     
      setChatHistory(data[0].chatHistory);
    
     
    
      setQuestionMarkShown(data[0].questionMarkShown);
      setFirstTimeModal(data[0].firstTimeModal); 
    
      
      setTrialChatCount(data[0].trialChatCount);
      setIsTimeoutActive(data[0].isTimeoutActive);
      setCurrentLevel(data[0].currentLevel);
      setChatKey(data[0].chatKey);
      setChats(data[0].chats);
    } else {
      // If no user row exists, create a new one
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ auth_id: user.id, email: email, currentCount: 1 }]);

      if (insertError) {
        console.error('Error creating user in users table', insertError);
      } else {
        console.log('User row created in users table');
      }
    }

    setTimeout(() => {
      setPage(7);
      setIsLoggedIn(true);
    }, 2000);  // Delay the navigation to page 7 by 2 seconds
  }
});

const [newModalVisible, setNewModalVisible] = useState(false);
 const [currentCountPrincipiante, setCurrentCountPrincipiante] = useState(0);
  const [currentCountIntermedio, setCurrentCountIntermedio] = useState(0);
  const [currentCountAvanzado, setCurrentCountAvanzado] = useState(0);
const [showSparkle, setShowSparkle] = React.useState(false);

const openNewModal = () => {
  setNewModalVisible(true);
};
  const [changeLevelNow, setChangeLevelNow] = useState(null); 
  const [hideContent, setHideContent] = useState(false); // New state to hide content immediately

  const closeNewModal = () => {
    setHideContent(true); // Immediately hide button and text

    // Show the sparkle.gif with a short delay (e.g., 500ms)
    setTimeout(() => {
      setShowSparkle(true);
    }, 500); // 500ms delay for the gif to start showing

    // Change the level immediately
    if (changeLevelNow === 'Principiante') {
      setSelectedOption('Principiante');
    } else if (changeLevelNow === 'Intermedio') {
      setSelectedOption('Intermedio');
    } else if (changeLevelNow === 'Avanzado') {
      setSelectedOption('Avanzado');
    }

    // After 3 seconds, hide the sparkle and close the modal
    setTimeout(() => {
      setShowSparkle(false);
      setNewModalVisible(false);
      setHideContent(false); // Reset for future use
    }, 3000);
  };

 const closeNewModal2 = () => {

  setNewModalVisible(false);
};


  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    if (showImage && showText) {
      setIsContentReady(true);
    }
  }, [showImage, showText]);

 const getCurrentCount = () => {
  if (selectedOption === 'Principiante') {
    return currentCountPrincipiante;
  } else if (selectedOption === 'Intermedio') {
    return currentCountIntermedio;
  } else if (selectedOption === 'Avanzado') {
    return currentCountAvanzado;
  }
  return 0;
};

  const [selectedOption, setSelectedOption] = React.useState('Principiante');
const [registerSuccess, setRegisterSuccess] = useState('');
  const [youhaveregistered, setYouHaveRegistered] = useState(false);


  
  const [upgradetopro, setupgradetopro] = useState(false);



const [loginError, setLoginError] = useState('');
const [loginSuccess, setLoginSuccess] = useState('');const logIn = async (email, password) => {
 const { user, error } = await supabase
  .auth
  .signInWithPassword({ email, password });

if (error) {
  console.error('Error logging in', error);
  setLoginError('El contraseña es incorrecto o tu cuenta no existe');
} else if (user) {
  console.log('User logged in');
  setLoginSuccess('Has iniciado sesión correctamente!');
  setIsLoggedIn(true);

  // Fetch the user data from Supabase
  const { data, error: fetchError } = await supabase
    .from('users')
    .select(`
      currentCount,
      visitedPage1,
      currentCountPrincipiante,
      currentCountIntermedio,
      currentCountAvanzado,
      isMicEnabled,
      currentChatKey,
      isMicEnabled2,
      selectedOption,
      email,
      name,
   
    
      firstVisit,
     firstTimeModal,
      chatHistory,
     
     
      questionMarkShown,
    
    
     
      trialChatCount,
      isTimeoutActive,
      currentLevel,
      chatKey,
      chats
    `)
    .eq('auth_id', user.id);

  if (fetchError) {
    console.error('Error fetching user data', fetchError);
  } else if (data && data.length > 0) {
    // Set the app state with the fetched data
    setCurrentCount(data[0].currentCount);
    setVisitedPage1(data[0].visitedPage1);
    setCurrentCountPrincipiante(data[0].currentCountPrincipiante);
    setCurrentCountIntermedio(data[0].currentCountIntermedio);
    setCurrentCountAvanzado(data[0].currentCountAvanzado);
    setMicEnabled(data[0].isMicEnabled);
    setCurrentChatKey(data[0].currentChatKey);
    setMicEnabled2(data[0].isMicEnabled2);
    setSelectedOption(data[0].selectedOption);
    setEmail(data[0].email);
    setName(data[0].name);
    
    
    setFirstVisit(data[0].firstVisit);
   
    setFirstTimeModal(data[0].firstTimeModal);
   
    setChatHistory(data[0].chatHistory);
  

    setQuestionMarkShown(data[0].questionMarkShown);
   
    
   
    setTrialChatCount(data[0].trialChatCount);
    setIsTimeoutActive(data[0].isTimeoutActive);
    setCurrentLevel(data[0].currentLevel);
    setChatKey(data[0].chatKey);
    setChats(data[0].chats);
  }

  // Navigate to page 7 after a delay of 2 seconds
  setTimeout(() => {
    setPage(7);
  }, 2000);
} else {
  console.error('User object is undefined after log in');
}

};
useEffect(() => {
  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active' && (page === 1 || page === 7)) {
      AsyncStorage.getItem('timeoutStartTimestamp').then(value => {
        if (value !== null) {
          const timeoutStartTimestamp = JSON.parse(value);
          const now = Date.now();
          const timeElapsed = now - timeoutStartTimestamp;
          const newRemainingTime = 120000 - timeElapsed; // 12 hours in milliseconds

          console.log('timeoutStartTimestamp:', timeoutStartTimestamp);
          console.log('Current time:', now);
          console.log('Time elapsed:', timeElapsed);
          console.log('New remaining time:', newRemainingTime);

          if (newRemainingTime > 0) {
            setRemainingTime(newRemainingTime);
            setIsTimeoutActive(true);
          } else {
            setRemainingTime(120000); // Reset remaining time
            setIsTimeoutActive(false);
          }
        }
      }).catch(error => {
        console.error('Error fetching timeoutStartTimestamp:', error);
      });
    }
  };

  const subscription = AppState.addEventListener('change', handleAppStateChange);

  return () => {
    subscription.remove();
  };
}, [page]);




useEffect(() => {
  if (page === 1) {

  



     
      AsyncStorage.getItem('visitedPage1').then(value => {
        if (value !== null) {
          setVisitedPage1(JSON.parse(value));
        }
      });
      AsyncStorage.getItem('currentCountPrincipiante').then(value => {
        if (value !== null) {
          setCurrentCountPrincipiante(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('currentCountIntermedio').then(value => {
        if (value !== null) {
          setCurrentCountIntermedio(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('currentCountAvanzado').then(value => {
        if (value !== null) {
          setCurrentCountAvanzado(parseInt(value, 10));
        }
      });
      AsyncStorage.getItem('isMicEnabled').then(value => {
        if (value !== null) {
          setMicEnabled(JSON.parse(value));
        }
      });
          AsyncStorage.getItem('isLoggedIn').then(value => {
        if (value !== null) {
          setIsLoggedIn(JSON.parse(value));
        }
      });
   AsyncStorage.getItem('currentChatKey').then(value => {
      if (value !== null) {
        setCurrentChatKey(parseInt(value, 10));
      }
    });
  
      AsyncStorage.getItem('isMicEnabled2').then(value => {
        if (value !== null) {
          setMicEnabled2(JSON.parse(value));
        }
      });
        AsyncStorage.getItem('selectedOption').then(value => {
    if (value !== null) {
      setSelectedOption(JSON.parse(value));
    }
  });

    

      AsyncStorage.getItem('email').then(value => {
        if (value !== null) {
          setEmail(value);
        }
      });

      AsyncStorage.getItem('name').then(value => {
        if (value !== null) {
          setName(value);
        }
      });
AsyncStorage.getItem('isFirstChat').then(value => {
  if (value !== null) {
    isFirstChat = JSON.parse(value);
  }
});
AsyncStorage.getItem('isFirstsentence2').then(value => {
  if (value !== null) {
    isFirstsentence2 = JSON.parse(value);
  }
});
      AsyncStorage.getItem('firstVisit').then(value => {
        if (value !== null) {
          setFirstVisit(JSON.parse(value));
        }
      });

      AsyncStorage.getItem('chatCountLevel1').then(value => {
        if (value !== null) {
          setChatCountLevel1(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel2').then(value => {
        if (value !== null) {
          setChatCountLevel2(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel3').then(value => {
        if (value !== null) {
          setChatCountLevel3(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('firstTimeModal').then(value => {
        if (value !== null) {
          setFirstTimeModal(JSON.parse(value));
        }
      });

      AsyncStorage.getItem('chatCountLevel4').then(value => {
        if (value !== null) {
          setChatCountLevel4(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel5').then(value => {
        if (value !== null) {
          setChatCountLevel5(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel6').then(value => {
        if (value !== null) {
          setChatCountLevel6(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel7').then(value => {
        if (value !== null) {
          setChatCountLevel7(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel8').then(value => {
        if (value !== null) {
          setChatCountLevel8(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel9').then(value => {
        if (value !== null) {
          setChatCountLevel9(parseInt(value, 10));
        }
      });

      AsyncStorage.getItem('chatCountLevel10').then(value => {
        if (value !== null) {
          setChatCountLevel10(parseInt(value, 10));
        }
      });

    AsyncStorage.getItem('chatHistory').then(value => {
        if (value !== null) {
          setChatHistory(JSON.parse(value)); // Set chatHistory using setChatHistory
        }
      });

      AsyncStorage.getItem('currentCount').then(value => {
        if (value !== null) {
          setCurrentCount(parseInt(value, 10));
        }
      });

        AsyncStorage.getItem('hasModalBeenShown').then(value => {
    if (value !== null) {
      setHasModalBeenShown(JSON.parse(value));
    }
  });

AsyncStorage.getItem('avatarKey')
  .then(value => {
    if (value !== null && value in avatarImages) {
      console.log('Retrieved avatarKey from AsyncStorage:', value);
      setAvatarKey(value);
    } else {
      console.error('Error retrieving avatarKey from AsyncStorage. The retrieved value is either null or not a key in avatarImages:', value);
    }
  })
  .catch(error => {
    console.error('Error reading avatarKey from AsyncStorage:', error);
  });
AsyncStorage.getItem('avatarKey2')
  .then(value => {
    if (value !== null && value in avatarImages) {
      console.log('Retrieved avatarKey2 from AsyncStorage:', value);
      setAvatarKey2(value);
    } else {
      console.error('Error retrieving avatarKey2 from AsyncStorage. The retrieved value is either null or not a key in avatarImages:', value);
    }
  })
  .catch(error => {
    console.error('Error reading avatarKey2 from AsyncStorage:', error);
  });

AsyncStorage.getItem('avatarKey3')
  .then(value => {
    if (value !== null && value in avatarImages) {
      console.log('Retrieved avatarKey3 from AsyncStorage:', value);
      setAvatarKey3(value);
    } else {
      console.error('Error retrieving avatarKey3 from AsyncStorage. The retrieved value is either null or not a key in avatarImages:', value);
    }
  })
  .catch(error => {
    console.error('Error reading avatarKey3 from AsyncStorage:', error);
  });

AsyncStorage.getItem('avatarKey4')
  .then(value => {
    if (value !== null && value in avatarImages) {
      console.log('Retrieved avatarKey4 from AsyncStorage:', value);
      setAvatarKey4(value);
    } else {
      console.error('Error retrieving avatarKey4 from AsyncStorage. The retrieved value is either null or not a key in avatarImages:', value);
    }
  })
  .catch(error => {
    console.error('Error reading avatarKey4 from AsyncStorage:', error);
  });

AsyncStorage.getItem('avatarKey5')
  .then(value => {
    if (value !== null && value in avatarImages) {
      console.log('Retrieved avatarKey5 from AsyncStorage:', value);
      setAvatarKey5(value);
    } else {
      console.error('Error retrieving avatarKey5 from AsyncStorage. The retrieved value is either null or not a key in avatarImages:', value);
    }
  })
  .catch(error => {
    console.error('Error reading avatarKey5 from AsyncStorage:', error);
  });

   
    AsyncStorage.getItem('originPages').then(value => {
      if (value !== null) {
        setOriginPages(JSON.parse(value));
      }
    });
    AsyncStorage.getItem('isCharacterSelected').then(value => {
      if (value !== null) {
        setIsCharacterSelected(JSON.parse(value));
      }
    });

    AsyncStorage.getItem('isClickable').then(value => {
      if (value !== null) {
        setIsClickable(JSON.parse(value));
      }
    });
    AsyncStorage.getItem('profilePicture').then(value => {
      if (value !== null) {
        setProfilePicture(value);
      }
    });
    AsyncStorage.getItem('isGifClicked').then(value => {
      if (value !== null) {
        setIsGifClicked(JSON.parse(value));
      }
    });


AsyncStorage.getItem('questionMarkShown').then(value => {
        if (value !== null) {
          setQuestionMarkShown(JSON.parse(value));
        
      }
    });

    AsyncStorage.getItem('chatCount').then(value => {
  if (value !== null) {
    setChatCount(JSON.parse(value));
  }
});

AsyncStorage.getItem('firstChatTimestamp').then(value => {
  if (value !== null) {
    const firstChatTimestamp = JSON.parse(value);
    console.log('firstChatTimestamp:', firstChatTimestamp);
    setFirstChatTimestamp(firstChatTimestamp);
  }
});

AsyncStorage.getItem('trialChatCount').then(value => {
  if (value !== null) {
    const trialChatCount = JSON.parse(value);
    console.log('trialChatCount:', trialChatCount);
    setTrialChatCount(trialChatCount);
  }
});

AsyncStorage.getItem('timeoutStartTimestamp').then(value => {
  if (value !== null) {
    const timeoutStartTimestamp = JSON.parse(value);
    const now = Date.now();
    const timeElapsed = now - timeoutStartTimestamp;
    const newRemainingTime = 120000 - timeElapsed; // 12 hours in milliseconds

    console.log('timeoutStartTimestamp:', timeoutStartTimestamp);
    console.log('Current time:', now);
    console.log('Time elapsed:', timeElapsed);
    console.log('New remaining time:', newRemainingTime);

    if (newRemainingTime > 0) {
      setRemainingTime(newRemainingTime);
      setIsTimeoutActive(true);
    } else {
    setRemainingTime(120000); // Reset remaining time
            setIsTimeoutActive(false);
    }
  }
});


  AsyncStorage.getItem('profilePicture').then(value => {
      if (value !== null) {
        setProfilePicture(value);
      }
    });
   AsyncStorage.getItem('currentLevel').then(value => {
      if (value !== null) {
        setCurrentLevel(parseInt(value, 10));
      }
    });
    AsyncStorage.getItem('chatKey').then(value => {
        if (value !== null) {
          setChatKey(parseInt(value, 10)); // Set chatKey using setChatKey
        }
      });

    AsyncStorage.getItem('chats').then(value => {
      if (value !== null) {
        setChats(JSON.parse(value));
      }
    });
  }
}, [page, avatarImages]);



  useEffect(() => {
    const interval = setInterval(() => {
    // Save the chat counts, chat history, chat key, and chats to AsyncStorage whenever they change
    AsyncStorage.setItem('chatCountLevel1', chatCountLevel1.toString());
    AsyncStorage.setItem('chatCountLevel2', chatCountLevel2.toString());
    AsyncStorage.setItem('chatCountLevel3', chatCountLevel3.toString());
    AsyncStorage.setItem('chatCountLevel4', chatCountLevel4.toString());
    AsyncStorage.setItem('chatCountLevel5', chatCountLevel5.toString());
    AsyncStorage.setItem('chatCountLevel6', chatCountLevel6.toString());
    AsyncStorage.setItem('chatCountLevel7', chatCountLevel7.toString());
    AsyncStorage.setItem('chatCountLevel8', chatCountLevel8.toString());
    AsyncStorage.setItem('chatCountLevel9', chatCountLevel9.toString());
    AsyncStorage.setItem('chatCountLevel10', chatCountLevel10.toString());
   AsyncStorage.setItem('avatarKey', avatarKey);
   AsyncStorage.setItem('avatarKey2', avatarKey2);
   AsyncStorage.setItem('avatarKey3', avatarKey3);
   AsyncStorage.setItem('avatarKey4', avatarKey4);
   AsyncStorage.setItem('isFirstChat', JSON.stringify(isFirstChat));
AsyncStorage.setItem('isFirstsentence2', JSON.stringify(isFirstsentence2));
AsyncStorage.setItem('currentChatKey', currentChatKey.toString());
   AsyncStorage.setItem('avatarKey5', avatarKey5);
    AsyncStorage.setItem('currentCount', currentCount.toString());
    AsyncStorage.setItem('firstVisit', JSON.stringify(firstVisit));
    AsyncStorage.setItem('email', email);

       AsyncStorage.setItem('originPages', JSON.stringify(originPages));
    AsyncStorage.setItem('name', name);
    AsyncStorage.setItem('hasModalBeenShown', JSON.stringify(hasModalBeenShown));
    AsyncStorage.setItem('isMicEnabled', JSON.stringify(isMicEnabled));
      AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    AsyncStorage.setItem('currentCountPrincipiante', currentCountPrincipiante.toString());
      AsyncStorage.setItem('currentCountIntermedio', currentCountIntermedio.toString());
      AsyncStorage.setItem('currentCountAvanzado', currentCountAvanzado.toString());
    AsyncStorage.setItem('isMicEnabled2', JSON.stringify(isMicEnabled2));
     AsyncStorage.setItem('selectedOption', JSON.stringify(selectedOption));
AsyncStorage.setItem('chatCount', JSON.stringify(chatCount));
AsyncStorage.setItem('firstChatTimestamp', JSON.stringify(firstChatTimestamp));
AsyncStorage.setItem('trialChatCount', JSON.stringify(trialChatCount));



    AsyncStorage.setItem('visitedPage1', JSON.stringify(visitedPage1));
    AsyncStorage.setItem('currentLevel', currentLevel.toString())
    AsyncStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  AsyncStorage.setItem('chatKey', chatKey.toString());
    AsyncStorage.setItem('chats', JSON.stringify(chats));
    AsyncStorage.setItem('isCharacterSelected', JSON.stringify(isCharacterSelected));
    AsyncStorage.setItem('isClickable', JSON.stringify(isClickable));
    AsyncStorage.setItem('isGifClicked', JSON.stringify(isGifClicked));
    
    AsyncStorage.setItem('firstTimeModal', JSON.stringify(firstTimeModal));
     }, 1000); // Change this to the desired interval in milliseconds

    return () => clearInterval(interval); // This is important to clear the interval when the component unmounts
  
  }, [currentChatKey,firstTimeModal, profilePicture, currentCount, currentLevel, chatCountLevel1, chatCountLevel2, chatCountLevel3, chatCountLevel4, chatCountLevel5, chatCountLevel6, chatCountLevel7, chatCountLevel8, hasModalBeenShown,questionMarkShown, chatCountLevel9, chatCountLevel10, chatHistory, chatKey, chats,  isCharacterSelected, isClickable, isGifClicked, firstVisit, email, name, isMicEnabled,isMicEnabled2, selectedOption, originPages, avatarKey,avatarKey2,avatarKey3,avatarKey4,avatarKey5, visitedPage1, currentCountPrincipiante, currentCountIntermedio, currentCountAvanzado, chatCount, firstChatTimestamp, trialChatCount, isTimeoutActive, remainingTime, isLoggedIn]);


const { width } = Dimensions.get('window');

const isTallAspectRatio = screenHeight / screenWidth > 2.2 && screenHeight / screenWidth <= 2.4;

// Define font sizes based on the aspect ratio
let fontSizeHuge, fontSizeLarge, fontSizeMedium, fontSizeSmall, fontSizeSmall2, fontSizeMedium2;

// Use a conditional statement to define font sizes
if (isTallAspectRatio) {
   fontSizeHuge = 30;
    fontSizeLarge = 16;
    fontSizeMedium = 14; // Set to 14 if tall
    fontSizeMedium2 = 12;
    fontSizeSmall = 10;
     fontSizeSmall2 = 10;
} else {
   fontSizeHuge = 32;
    fontSizeLarge = 18;
    fontSizeMedium = 16; // Set to 30 if not tall
    fontSizeMedium2 = 16;
    fontSizeSmall = 12;
     fontSizeSmall2 = 10;
}






  const [rectangleHeight, setRectangleHeight] = useState(25);
  const windowWidth = Dimensions.get('window').width;
const levelWidth2 = currentLevel === 10 ? 200 : 60; // Set the width to 70 when currentLevel is 10, otherwise 60
const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus('Keyboard Shown');
  const _keyboardDidHide = () => setKeyboardStatus('Keyboard Hidden');

  useEffect(() => {
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    }

    // cleanup function
    return () => {
      if (Platform.OS === 'android') {
        Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
      }
    };
  }, []);

  const bottomPosition = keyboardStatus === 'Keyboard Shown' ? 295 : 540;

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages(images2);
    await Promise.all([...imageAssets]);
  };

  useEffect(() => {
    loadAssetsAsync();
  }, []);


  
  const [isCharacterSelected, setIsCharacterSelected] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [bwImages, setBwImages] = useState([
      require('./assets/images/Removal-381.png'),
    require('./assets/images/capienglishblack.png'),
    require('./assets/images/Removal90black.png'),
    require('./assets/images/Removal773black.png'),
    require('./assets/images/Removal132black.png'),
  ]);


  const [colorImages, setColorImages] = useState([
    require('./assets/images/Removal-381.png'),
    require('./assets/images/aispeakenglish.png'),
    require('./assets/images/Removal90new.png'),
    require('./assets/images/Removal773new.png'),
       require('./assets/images/Removal132new.png'),
  ]);

  const [isClickable, setIsClickable] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
useEffect(() => {
  const checkPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setNotificationsEnabled(status === 'granted');
  };

  checkPermissions();
}, []);

  const [index, setIndex] = useState(0);
  const images = [
  require('./assets/images/2ukimagenew.png'),
    require('./assets/images/2usimagenew.png'),
    require('./assets/images/2teacherimagenew.png'),
    require('./assets/images/2einsteinimagenew.png'),
  ]; // replace with your images

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={item}
        style={{ width: windowWidth, height: 110 }}
        resizeMode="contain"
      />
    </View>
  );

const [isVisible, setIsVisible] = useState([false, false, false]);

  const toggleVisibility = (index) => {
    let newVisibility = [...isVisible];
    newVisibility[index] = !newVisibility[index];
    setIsVisible(newVisibility);
  };

const [emailError, setEmailError] = useState('');  // State to hold the email error message

const validateEmail = (text) => {
  setEmail(text);
};
  const [image1Opacity, setImage1Opacity] = useState(0);
  const [image2Opacity, setImage2Opacity] = useState(0);
  const [image3Opacity, setImage3Opacity] = useState(0);
  const [image4Opacity, setImage4Opacity] = useState(0);
  const [showImagepuzzle, setShowImagepuzzle] = useState(false);
   const [showImagepuzzle2, setShowImagepuzzle2] = useState(false);
 const [showImagepuzzle3, setShowImagepuzzle3] = useState(false);
const [showImagepuzzle4, setShowImagepuzzle4] = useState(false);
const [showImagepuzzle1, setShowImagepuzzle1] = useState(false);
const [showconfetti, setShowconfetti] = useState(false);
const [showimagefull1, setShowimagefull1] = useState(false);


const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [notificationResponse, setNotificationResponse] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef(); 
useEffect(() => {
  notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
    setNotification(notification);
  });

  responseListener.current = Notifications.addNotificationResponseReceivedListener(async response => {
    setNotificationResponse(response);

    // Set page to 7 first
    setPage(7);

    // Wait for the page to be set (add a small delay if needed to ensure the page has rendered)
    await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay based on your app's speed

    // Dismiss the notification
    await Notifications.dismissNotificationAsync(
      response.notification.request.identifier
    );

    if (selectedOption === 'Principiante') {
    setCurrentCountPrincipiante(prevCount => prevCount + 1);
} else if (selectedOption === 'Intermedio') {
    setCurrentCountIntermedio(prevCount => prevCount + 1);
} else if (selectedOption === 'Avanzado') {
    setCurrentCountAvanzado(prevCount => prevCount + 1);
}

    handleStartNewChat();
      isFirstChat = true;

  });

  return () => {
    Notifications.removeNotificationSubscription(notificationListener.current);
    Notifications.removeNotificationSubscription(responseListener.current);
  };
}, [handleStartNewChat, selectedOption]);


async function schedulePushNotification() {
  await setNotificationCategory();

  // Schedule for 11:00
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Vamos a hablar en inglés! 💬",
      body: 'haga clic aquí para iniciar el chat',
      categoryIdentifier: 'submit_reply'
    },
    trigger: {
      hour: 13,
      minute: 25,
      repeats: true
    },
  });

  // Schedule for 16:00
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Vamos a hablar en inglés! 💬",
      body: 'haga clic aquí para iniciar el chat',
      categoryIdentifier: 'submit_reply'
    },
    trigger: {
      hour: 16,
      minute: 35,
      repeats: true
    },
  });

  // Schedule for 21:00
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Vamos a hablar en inglés! 💬",
      body: 'haga clic aquí para iniciar el chat',
      categoryIdentifier: 'submit_reply' 
    },
    trigger: {
      hour: 21,
      minute: 0,
      repeats: true
    },
  });
}


//------ [SETTING NOTIFICATION CATEGORY AND ACTIONS  (actions on notification) WITH CUSTOM OPTIONS:]--------------

async function setNotificationCategory() {
  await Notifications.setNotificationCategoryAsync("submit_reply", [
    {
      identifier: 'open_chat',
      buttonTitle: 'Responder',
      options: {
        opensAppToForeground: true,
      },
    },
  ]);
}





async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus === 'granted') {
      token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
      console.log(token);
    }
  }

  return token;
}
useEffect(() => {
    if (page === 12) {
    const timer = setTimeout(() => {
      setShowImagepuzzle1(true);
    }, 2000);

    return () => clearTimeout(timer);
  }
  }, [page]);

useEffect(() => {
    if (page === 12) {
    const timer = setTimeout(() => {
      setShowimagefull1(true);
    }, 1000);

    return () => clearTimeout(timer);
  }
  }, [page]);


useEffect(() => {
    if (page === 12) {
    const timer = setTimeout(() => {
      setShowconfetti(true);
    }, 2000);

    return () => clearTimeout(timer);
  }
  }, [page]);
useEffect(() => {
    if (page === 16) {
    const timer = setTimeout(() => {
      setShowconfetti(true);
    }, 5000);

    return () => clearTimeout(timer);
  }
  }, [page]);

useEffect(() => {
  if (showconfetti) {
    const timer = setTimeout(() => {
      setShowconfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [showconfetti]);

 useEffect(() => {
    if (page === 13) {
    const timer = setTimeout(() => {
      setShowImagepuzzle(true);
    }, 5000);

    return () => clearTimeout(timer);
  }
  }, [page]);

   useEffect(() => {
    if (page === 14) {
    const timer = setTimeout(() => {
      setShowImagepuzzle2(true);
    }, 5000);

    return () => clearTimeout(timer);
  }
  }, [page]);

   useEffect(() => {
    if (page === 15) {
    const timer = setTimeout(() => {
      setShowImagepuzzle3(true);
    }, 5000);

    return () => clearTimeout(timer);
  }
  }, [page]);

useEffect(() => {
    if (page === 16) {
    const timer = setTimeout(() => {
      setShowImagepuzzle4(true);
    }, 5000);

    

    return () => clearTimeout(timer);
  }
  }, [page]);
  useEffect(() => {
    if (page === 10) {
      setTimeout(() => setImage1Opacity(1), 1000);
      setTimeout(() => setImage2Opacity(1), 1200);
      setTimeout(() => setImage3Opacity(1), 1400);
      setTimeout(() => setImage4Opacity(1), 1600);
    }
  }, [page]);
  const [currentCount, setCurrentCount] = useState(1);
const [currentLevel, setCurrentLevel] = useState(1);
const [firstClick, setFirstClick] = useState(false);
const [showBlur, setShowBlur] = useState(false);
const [offset] = useState(new Animated.Value(50)); 

  const scaleAnim = useRef(new Animated.Value(1)).current;

useEffect(() => {
  if (page === 7 && firstClick) {
    setTimeout(() => {
      setShowBlur(true);
    }, 2000);  // 1000 milliseconds = 1 second
  } else {
    setShowBlur(false);
  }
}, [page, firstClick]);  



  useEffect(() => {
    if (page === 4000) {
      const timerId = setTimeout(() => {
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      }, 10000); // Start the animation after 10 seconds

      return () => clearTimeout(timerId); // Clear the timer when the component unmounts
    }
  }, [scaleAnim, page]); // Add page to the dependency array




const startAnimationrectangle = () => {
  Animated.timing(offset, {
    toValue: 0, // Final vertical offset
    duration: 500, // Duration of the animation
    useNativeDriver: true, // Use native driver for better performance
  }).start();
};

 const paperworkScale = useRef(new Animated.Value(1)).current;
  const iconScale = useRef(new Animated.Value(1)).current;
  const documentScale = useRef(new Animated.Value(1)).current;
   const handlePressnow = (scaleValue, page) => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.3,
        duration: 200, // Duration in milliseconds
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 200, // Duration in milliseconds
        useNativeDriver: true,
      }),
    ]).start(() => {
      setPage(page);
      scaleValue.setValue(1); // Reset the scale value to 1 after navigation
    });
  };
  const [scaleValue1] = useState(new Animated.Value(1));
  const [scaleValue2] = useState(new Animated.Value(1));
  const [scaleValue3] = useState(new Animated.Value(1));
  const [scaleValue4] = useState(new Animated.Value(1));
  const [scaleValue5] = useState(new Animated.Value(1));
  const [scaleValue6] = useState(new Animated.Value(1));
  const [scaleValue7] = useState(new Animated.Value(1));
  const [scaleValue8] = useState(new Animated.Value(1));
  const [scaleValue9] = useState(new Animated.Value(1));
  
  const [isGifClicked, setIsGifClicked] = useState(Array(10).fill(false));
  // Add these refs to control the animations
  const scaleValue = useRef(Array.from({ length: 10 }, () => new Animated.Value(1)));

  const startAnimation = (level) => {
    Animated.timing(scaleValue.current[level - 2], {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked((prev) => {
        const newIsGifClicked = [...prev];
        newIsGifClicked[level - 2] = true;
        return newIsGifClicked;
      });
      // Navigate to different pages depending on the level
      if (level <= 5) {
        setPage(10);
      } else if (level === 6) {
        setPage(12);
      } else if (level === 7) {
        setPage(13);
      } else if (level === 8) {
        setPage(14);
      } else if (level === 9) {
        setPage(15);
      } else if (level === 10) {
        setPage(16);
      }
    });
  };
  
  
  
  
  
  const [modalVisible, setModalVisible] = useState(false);
const [firstTimeModal, setFirstTimeModal] = useState(true); // Add this line

useEffect(() => {
  if ((page === 6 || page === 62 || page === 63 || page === 64 || page === 65) && firstTimeModal) { // Check if firstTimeModal is true
    const timer = setTimeout(() => {
      setModalVisible(true);
      setFirstTimeModal(false); // Set firstTimeModal to false after showing the modal
    }, 3000);
    return () => clearTimeout(timer);
  }
}, [page, firstTimeModal]);

  
  
  const [isGifClicked1, setIsGifClicked1] = useState(false);
  const [isGifClicked2, setIsGifClicked2] = useState(false);
  const [isGifClicked3, setIsGifClicked3] = useState(false);
  const [isGifClicked4, setIsGifClicked4] = useState(false);
  const [isGifClicked5, setIsGifClicked5] = useState(false);
  const [isGifClicked6, setIsGifClicked6] = useState(false);
  const [isGifClicked7, setIsGifClicked7] = useState(false);
  const [isGifClicked8, setIsGifClicked8] = useState(false);
  const [isGifClicked9, setIsGifClicked9] = useState(false);
  const [showImageOnPage7, setShowImageOnPage7] = useState(false);


  const [showGif, setShowGif] = useState(true);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (page === 10 && isGifClicked) {
      setTimeout(() => {
        setShowImageOnPage7(true);
      }, 6000);
    }
  }, [page, isGifClicked]);

  const startAnimation1 = () => {
    Animated.timing(scaleValue1, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked1(true);
      setPage(10);
    });
  };

  const startAnimation2 = () => {
    Animated.timing(scaleValue2, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked2(true);
      setPage(10);
    });
  };
  const startAnimation3 = () => {
    Animated.timing(scaleValue3, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked3(true);
      setPage(10);
    });
  };
  const startAnimation4 = () => {
    Animated.timing(scaleValue4, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked4(true);
      setPage(10);
    });
  };
  const startAnimation5 = () => {
    Animated.timing(scaleValue5, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked5(true);
      setPage(12);
    });
  };
  const startAnimation6 = () => {
    Animated.timing(scaleValue6, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked6(true);
      setPage(13);
    });
  };
  const startAnimation7 = () => {
    Animated.timing(scaleValue7, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked7(true);
      setPage(14);
    });
  };
  const startAnimation8 = () => {
    Animated.timing(scaleValue8, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked8(true);
      setPage(15);
    });
  };
  const startAnimation9 = () => {
    Animated.timing(scaleValue9, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setIsGifClicked9(true);
      setPage(16);
    });
  };

  const setQuestionMarkAndStorage = async (value) => {
  try {
    setQuestionMarkShown(value);
    await AsyncStorage.setItem('questionMarkShown', JSON.stringify(true));
  } catch (error) {
    console.error('Failed to save questionMarkShown to AsyncStorage', error);
  }
};

  const [showQuestionMark, setShowQuestionMark] = useState(false);
  const [showPopupnewer, setShowPopupnewer] = useState(false);
const [questionMarkShown, setQuestionMarkShown] = useState(false);

 
  useEffect(() => {
    if (page === 7 && isTimeoutActive && !questionMarkShown) {
       setTimeout(() => {
        setShowQuestionMark(true);
    


    }, 3000);
    }
  }, [page, isTimeoutActive, questionMarkShown]);

  const handleQuestionMarkClick = () => {
    setShowPopupnewer(true);
  };

   const [clickCounter, setClickCounter] = useState(0);
const handleCounting = async (prevCount1) => {
  const newCount1 = prevCount1 + 1;
  let threshold = 2;
  let increment = 3;

  while (newCount1 > threshold) {
    threshold += increment;
    increment++;
  }

  if (newCount1 === threshold) {
    setTimeout(() => {
      setupgradetopro(true);
    }, 1000); // 1 second timeout
  }

  // Save the new count to AsyncStorage
  await AsyncStorage.setItem('clickCounter', JSON.stringify(newCount1));

  return newCount1;
};

const handleClosePopup = async () => {
  setShowPopupnewer(false);
  const prevCount1 = await AsyncStorage.getItem('clickCounter');
  const newCount1 = await handleCounting(prevCount1 ? JSON.parse(prevCount1) : 0);
  setClickCounter(newCount1);
};

// Use useEffect to load the initial state from AsyncStorage
useEffect(() => {
  const loadInitialState = async () => {
    const savedCount = await AsyncStorage.getItem('clickCounter');
    if (savedCount !== null) {
      setClickCounter(JSON.parse(savedCount));
    }
  };

  loadInitialState();
}, []);





  const [showPopup, setShowPopup] = useState(false);
  const [chatCountLevel1, setChatCountLevel1] = useState(1);
  const [chatCountLevel2, setChatCountLevel2] = useState(1);
  const [chatCountLevel3, setChatCountLevel3] = useState(1);
  const [chatCountLevel4, setChatCountLevel4] = useState(1);
  const [chatCountLevel5, setChatCountLevel5] = useState(1);
  const [chatCountLevel6, setChatCountLevel6] = useState(1);
  const [chatCountLevel7, setChatCountLevel7] = useState(1);
  const [chatCountLevel8, setChatCountLevel8] = useState(1);
  const [chatCountLevel9, setChatCountLevel9] = useState(1);
  const [chatCountLevel10, setChatCountLevel10] = useState(1);
  const [showField, setShowField] = useState(false); // Add this line
   const [showField2, setShowField2] = useState(false); // Add this line
  const height = useRef(new Animated.Value(1)).current; // Initial height is very low
  const animation = useRef();
  const [originPages, setOriginPages] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);

  const [currentImage, setCurrentImage] = useState(
    require('./assets/images/Removal-381.png')
  );

  const handlePress = (index) => {
    if (isClickable[index]) {
      // Check if the character is clickable
      setIsClickable((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
      setCurrentImage(colorImages[index]); // Update currentImage
      setDialogVisible(false); // Close the dialog
    }
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

 
   
const askForPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Sin permiso de notificación!');
    return;
  }
  alert('Permisos de notificación concedidos!');
  setNotificationsEnabled(true); 
};


  const selectImage = useCallback((image) => {
    setSelectedImage(image);
    setShowImagePicker(false);
  }, []);
  const [useAvatar3, setUseAvatar3] = useState(true);
  const [useAvatar4, setUseAvatar4] = useState(true);
  const [useAvatar5, setUseAvatar5] = useState(true);
  const [useAvatar6, setUseAvatar6] = useState(true);

  updateAvatar = (avatar, useAvatar6) => {
    this.setState({ avatar, useAvatar6 });
  };
  updateAvatar = (avatar, useAvatar5) => {
    this.setState({ avatar, useAvatar5 });
  };
  updateAvatar = (avatar, useAvatar4) => {
    this.setState({ avatar, useAvatar4 });
  };
  updateAvatar = (avatar, useAvatar3) => {
    this.setState({ avatar, useAvatar3 });
  };
  
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
const calculateWidth = (count) => {
  const tokens = count.split('/');
  return 50 + tokens[0].length * 8 + tokens[1].length * 8;
};

  // Calculate the position of the white field relative to the screen size
  const topPosition = screenHeight * 0.64; // Adjust this value as needed

  const topPosition2 = screenHeight * 0.61; // Adjust this value as needed


  useEffect(() => {
    if (page === 10) {
      // Wait for 2000 milliseconds before starting the animation
      setTimeout(() => {
        setShowField(true); // Add this line
        animation.current = Animated.timing(height, {
          toValue: 180, // Final height
          duration: 500, // Duration of animation in milliseconds
          useNativeDriver: false,
        });
        animation.current.start();
      }, 1000);
    } else {
      if (animation.current) {
        animation.current.stop();
      }
      height.setValue(1); // Reset height when not on page 10
      setShowField(false); // Add this line
    }
  }, [page]);

useEffect(() => {
    if (page === 12) {
      // Wait for 2000 milliseconds before starting the animation
      setTimeout(() => {
        setShowField2(true); // Add this line
        animation.current = Animated.timing(height, {
          toValue: 100, // Final height
          duration: 500, // Duration of animation in milliseconds
          useNativeDriver: false,
        });
        animation.current.start();
      }, 1000);
    } else {
      if (animation.current) {
        animation.current.stop();
      }
      height.setValue(1); // Reset height when not on page 10
      setShowField2(false); // Add this line
    }
  }, [page]);

  useEffect(() => {
    if (page === 13) {
      // Wait for 2000 milliseconds before starting the animation
      setTimeout(() => {
        setShowField2(true); // Add this line
        animation.current = Animated.timing(height, {
          toValue: 100, // Final height
          duration: 500, // Duration of animation in milliseconds
          useNativeDriver: false,
        });
        animation.current.start();
      }, 1000);
    } else {
      if (animation.current) {
        animation.current.stop();
      }
      height.setValue(1); // Reset height when not on page 10
      setShowField2(false); // Add this line
    }
  }, [page]);

  useEffect(() => {
    if (page === 14) {
      // Wait for 2000 milliseconds before starting the animation
      setTimeout(() => {
        setShowField2(true); // Add this line
        animation.current = Animated.timing(height, {
          toValue: 100, // Final height
          duration: 500, // Duration of animation in milliseconds
          useNativeDriver: false,
        });
        animation.current.start();
      }, 1000);
    } else {
      if (animation.current) {
        animation.current.stop();
      }
      height.setValue(1); // Reset height when not on page 10
      setShowField2(false); // Add this line
    }
  }, [page]);

  useEffect(() => {
    if (page === 15) {
      // Wait for 2000 milliseconds before starting the animation
      setTimeout(() => {
        setShowField2(true); // Add this line
        animation.current = Animated.timing(height, {
          toValue: 100, // Final height
          duration: 500, // Duration of animation in milliseconds
          useNativeDriver: false,
        });
        animation.current.start();
      }, 1000);
    } else {
      if (animation.current) {
        animation.current.stop();
      }
      height.setValue(1); // Reset height when not on page 10
      setShowField2(false); // Add this line
    }
  }, [page]);

  useEffect(() => {
    if (page === 16) {
      // Wait for 2000 milliseconds before starting the animation
      setTimeout(() => {
        setShowField2(true); // Add this line
        animation.current = Animated.timing(height, {
          toValue: 100, // Final height
          duration: 500, // Duration of animation in milliseconds
          useNativeDriver: false,
        });
        animation.current.start();
      }, 1000);
    } else {
      if (animation.current) {
        animation.current.stop();
      }
      height.setValue(1); // Reset height when not on page 10
      setShowField2(false); // Add this line
    }
  }, [page]);

 const [chatCount, setChatCount] = useState(0);
const [firstChatTimestamp, setFirstChatTimestamp] = useState(null);
const [trialChatCount, setTrialChatCount] = useState(0);
const [isTimeoutActive, setIsTimeoutActive] = useState(false);
const [thirdchat, setthirdchat] = useState(false);

const [remainingTime, setRemainingTime] = useState(120000); // 12 hours in milliseconds
const timeoutRef = useRef(null);
const intervalRef = useRef(null);
const handleTimeoutAndInterval = useCallback(() => {
  console.log('isTimeoutActive:', isTimeoutActive);

  if (isTimeoutActive) {
    // Set a timeout to reset isTimeoutActive after the remaining time
    timeoutRef.current = setTimeout(() => {
      setIsTimeoutActive(false);
      setRemainingTime(120000); // Reset remaining time
    }, remainingTime);

    // Set an interval to update the remaining time every second
    intervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1000);
    }, 1000); // Update every second
  } else {
    // Clear any existing timeout and interval
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }
}, [isTimeoutActive, remainingTime]);

useEffect(() => {
  handleTimeoutAndInterval();

  return () => {
    // Cleanup timeout and interval on component unmount
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, [isTimeoutActive, handleTimeoutAndInterval]);


const handleStartNewChat = useCallback(() => {  
  const now = new Date().getTime();

  if (trialChatCount < 10) {
    setTrialChatCount(trialChatCount + 1);
    startNewChat();
  } else {
    if (chatCount < 3) {
      if (chatCount === 0) {
        setFirstChatTimestamp(now);
      }
      setChatCount(chatCount + 1);
      startNewChat();
    } else {
      const timeElapsed = now - firstChatTimestamp;
      const minutesElapsed = timeElapsed / (1000 * 60);

      if (minutesElapsed >= 2) { // Change to 12 hours (720 minutes)
        setChatCount(1);
        setFirstChatTimestamp(now);
        setIsTimeoutActive(false);
        startNewChat();
      } else {
        setIsTimeoutActive(true);
        console.log('You have reached the limit of 3 chats in 12 hours. Please wait.');
        console.log('isTimeoutActive set to true');
      }
    }
  }

  // Start the timeout after the 3rd chat
  if (chatCount === 2) {
    setIsTimeoutActive(true);
    AsyncStorage.setItem('timeoutStartTimestamp', JSON.stringify(now)); // Save the timestamp when the timeout starts
  }


}, [chatCount,firstChatTimestamp,trialChatCount]);


const startNewChat = () => {
  console.log('Starting new chat..');
  isFirstChat = true;

  setCurrentChatKey((prevKey) => {
    const newKey = prevKey + 1; // Increment currentChatKey
    setChatKey(newKey); // Set chatKey to the new key
    setChatHistories((prevHistories) => ({
      ...prevHistories,
      [newKey]: [],
    }));
    setChatHistory([]);
    return newKey;
  });

  setChats((prevChats) => {
    const newChatKey = prevChats.length + 1;
    setOriginPages((prevOriginPages) => {
      return { ...prevOriginPages, [newChatKey]: 6 };
    });
    return [...prevChats, newChatKey];
  });

  setPage(6);
  isFirstChat = true;
  setShouldLoadMessages(false);
  console.log('New chat started.');
};



const startNewChat2 = () => {
  setChats((prevChats) => {
    const newChatKey = prevChats.length + 1;
    setOriginPages((prevOriginPages) => {
      return {...prevOriginPages, [newChatKey]: 62};
    });
    return [...prevChats, newChatKey];
  });
  setPage(62);
  isFirstChat = true;
  setChatKey((prevKey) => prevKey + 1); // Increment chatKey
  setChatHistory([]);
  setShouldLoadMessages(false);
};

const startNewChat3 = () => {
  setChats((prevChats) => {
    const newChatKey = prevChats.length + 1;
    setOriginPages((prevOriginPages) => {
      return {...prevOriginPages, [newChatKey]: 63};
    });
    return [...prevChats, newChatKey];
  });
  setPage(63);
  isFirstChat = true;
  setChatKey((prevKey) => prevKey + 1); // Increment chatKey
  setChatHistory([]);
  setShouldLoadMessages(false);
};

const startNewChat4 = () => {
  setChats((prevChats) => {
    const newChatKey = prevChats.length + 1;
    setOriginPages((prevOriginPages) => {
      return {...prevOriginPages, [newChatKey]: 64};
    });
    return [...prevChats, newChatKey];
  });
  setPage(64);
  isFirstChat = true;
  setChatKey((prevKey) => prevKey + 1); // Increment chatKey
  setChatHistory([]);
  setShouldLoadMessages(false);
};

const startNewChat5 = () => {
  setChats((prevChats) => {
    const newChatKey = prevChats.length + 1;
    setOriginPages((prevOriginPages) => {
      return {...prevOriginPages, [newChatKey]: 65};
    });
    return [...prevChats, newChatKey];
  });
  setPage(65);
  isFirstChat = true;
  setChatKey((prevKey) => prevKey + 1); // Increment chatKey
  setChatHistory([]);
  setShouldLoadMessages(false);
};

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 5;
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 0) {
          setPage((prevPage) => Math.max(prevPage - 1, 1));
          setShowArrow(false);
        } else if (gestureState.dx < 0) {
          setPage((prevPage) => Math.min(prevPage + 1, 7));
          setShowArrow(false);
        }
      },
    })
  ).current;
const panResponder1800 = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderRelease: (evt, gestureState) => {
    if (gestureState.dx < 0) {
      setPage(2);
    }
  },
});



const panResponder3 = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderRelease: (evt, gestureState) => {
    if (gestureState.dx < 0) {
      setPage(4000);
    }
  },
});

  useEffect(() => {
    if (page === 10) {
    setTimeout(() => {
      // Only set showContent to true if the screen height is greater than 667
      if (screenHeight > 667) {
        setShowContent(true);
      }
      }, 1000); // Wait for 2 seconds
    } else {
      setShowContent(false); // Reset the state when not on page 4
    }
  });
  const [showPopupnew, setShowPopupnew] = useState(true);
  const [passwordnew, setPasswordnew] = useState('');

  const handlePasswordSubmit = () => {
    if (passwordnew === 'Capybarabc123!') {
      setShowPopupnew(false);
    } else {
      // Handle incorrect password
      alert('Incorrect password. Please try again.');
    }
  };
  useEffect(() => {
    if (page === 4) {
      setTimeout(() => {
        setShowContent2(true);
      }, 100); // Wait for 2 seconds
    } else {
      setShowContent2(false);
    }
    if (page === 6) {
      userName = name;
    }
  }, [page, name]);
const [visitedPage1, setVisitedPage1] = useState(false);
useEffect(() => {
  if (page === 1) {
    const now = new Date().getTime();
    const canStartNewChat = trialChatCount < 10 || chatCount < 3 || (now - firstChatTimestamp) / (1000 * 60) >= 2; // Change to 12 hours (720 minutes)

    if (canStartNewChat) {
      setIsTimeoutActive(false);
    } else {
      setIsTimeoutActive(true);
      console.log('You have reached the limit of 3 chats in 12 hours. Please wait.');
    }

    const timer = setTimeout(() => {
      setPage(visitedPage1 ? 7 : 1800);
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [page, visitedPage1, trialChatCount, chatCount, firstChatTimestamp]);



if (page === 1) {
  

  return (
    <View style={{...styles.container, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('./assets/images/dadw2.jpg')}
        style={{...styles.image44, resizeMode: 'contain'}}
      />
    </View>
  );
}


else if (page === 1800) {
  return (
    <View style={styles.container} {...panResponder1800.panHandlers}>
        {/* Image on first page */}
         <Image
          source={require('./assets/images/dadw.jpg')}
          style={[
            styles.image,
              screenHeight <= 667
      ? { width: 80, height: 80, top: 15, left: 140 }
      : screenHeight > 667 && screenHeight <= 896
      ? {width: 80, height: 80, top: 25, left: 140 }
      : { width: 80, height: 80, top: 25, left: 170 },
            { position: 'absolute', resizeMode: 'contain' },
          ]}
        />
        <Image
          source={require('./assets/images/fdd5fed2-2446-491f-b4e6-71c7a885105d-8669645.png')}
          style={[
            styles.image1,
            screenHeight <= 667 ? { width: 262.50, height: 262.50, top: 130, left: 45 } : { width: 350, height: 350, top: 170, left: 30 },
            { position: 'absolute' },
          ]}
        />
        <Image
           source={require('./assets/images/newaispeak.png')}
          style={[
            styles.image2,
            screenHeight <= 667 ? { width: 45, height: 45, top: 250, left: 162 } : { width: 60, height: 60, top: 320, left: 185 },
            { position: 'absolute' },
          ]}
        />
        <Image
          source={require('./assets/images/dkddkd2.png')}
          style={[
            styles.image3,
            screenHeight <= 667 ? { width: 100, height: 100, top: 90, left: 70 } : { width: 140, height: 140, top: 100, left: 50 },
            { position: 'absolute', resizeMode: 'contain' },
          ]}
        />
        <Text
  style={[
    styles.text1,
    screenHeight <= 667
      ? { position: 'absolute', top: 380, left: 50 }
      : screenHeight > 667 && screenHeight <= 896
      ? { position: 'absolute', top: 520, left: 50 }
      : { position: 'absolute', top: 520, left: 80 }, // adjust left as needed for iPhone 13 Pro and above
  ]}
>
  La mejor manera de {'\n'}aprender un idioma!
</Text>

      
      <Text
        style={[
          styles.text2,
          {
            marginTop: 10, // Add marginTop for spacing
          },
          screenHeight <= 667
            ? { position: 'absolute', top: 450, left: 50 }
            : screenHeight > 667 && screenHeight <= 896
            ? { position: 'absolute', top: 590, left: 50 }
            : { position: 'absolute', top: 590, left: 80 }, // adjust left as needed for iPhone 13 Pro and above
        ]}
      >
        Aprende un idioma con Aispeak y {'\n'}verás la diferencia.
      </Text>

        <View
          style={[
            styles.paginationContainer,
            { position: 'absolute', bottom: 70, left: 130 ,justifyContent: 'center', alignItems: 'center'},
          ]}>
          <View style={[styles.circle, styles.selectedCircle]} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>


        <TouchableOpacity
          onPress={() => setPage(2)}
          style={{ position: 'absolute', bottom: 45, right: 40 }}>
          <Image
            source={require('./assets/images/arrow.jpg')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    );
  }

 else if (page === 2) {
  return (
    <View style={styles.container} {...panResponder.panHandlers}>
        {/* Second page */}
        {/* Image on second page */}
        <Image
          source={require('./assets/images/dadw.jpg')}
          style={[
            styles.image,
              screenHeight <= 667
      ? { width: 80, height: 80, top: 15, left: 140 }
      : screenHeight > 667 && screenHeight <= 896
      ? {width: 80, height: 80, top: 25, left: 140 }
      : { width: 80, height: 80, top: 25, left: 170 },
            { position: 'absolute', resizeMode: 'contain' },
          ]}
        />
        <TouchableOpacity
          onPress={() => setPage(3)}
          style={{ position: 'absolute', bottom: 45, right: 40 }}>
          <Image
            source={require('./assets/images/arrow.jpg')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.paginationContainer,
            { position: 'absolute', bottom: 70, left: 130 },
          ]}>
          <View style={styles.circle} />
          <View style={[styles.circle, styles.selectedCircle]} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </View>

        {/* Copy of images and text from first page */}
        <Image
          source={require('./assets/images/f25cb07f-a341-4055-b811-26476a495a16-20944045.png')}
          style={[
            styles.image1,
             screenHeight <= 667
      ? { width: 262.50, height: 262.50, top: 90, left: 45 }
      : screenHeight > 667 && screenHeight <= 896
      ? { width: 350, height: 350, top: 150, left: 10 }
      : { width: 350, height: 350, top: 150, left: 40 },
            { position: 'absolute' },
          ]}
        />
        <Image
          source={require('./assets/images/newaispeak.png')}
          style={[
            styles.image2,
            screenHeight <= 667 ? { width: 45, height: 45, top: 285, left: 260 } : { width: 60, height: 60, top: 410, left: 270 },
            { position: 'absolute' },
          ]}
        />

      <Text
  style={[
    styles.text1,
    screenHeight <= 667
      ? { position: 'absolute', top: 340, left: 50 }
      : screenHeight > 667 && screenHeight <= 896
      ? { position: 'absolute', top: 500, left: 50 }
      : { position: 'absolute', top: 500, left: 80 }, // adjust left as needed for iPhone 13 Pro and above
  ]}
>
  Aprende lo mejor de {'\n'}cada día memorizando.
</Text>

<Text
  style={[
    styles.text2,
     {
            marginTop: 10, // Add marginTop for spacing
          },
    screenHeight <= 667
      ? { position: 'absolute', top: 410, left: 50 }
      : screenHeight > 667 && screenHeight <= 896
      ? { position: 'absolute', top: 570, left: 50 }
      : { position: 'absolute', top: 570, left: 80 }, // adjust left as needed for iPhone 13 Pro and above
  ]}
>
  Cuando repites la misma{'\n'}gramática y palabras, pronto puedes{'\n'}armar las piezas del rompecabezas.
</Text>

      </View>
    );
  }else if (page === 3) {
  return (
    <View style={styles.container} {...panResponder3.panHandlers}>
        {/* Third page */}
        {/* Image on third page */}
        <Image
          source={require('./assets/images/dadw.jpg')}
          style={[
            styles.image,
             screenHeight <= 667
      ? { width: 80, height: 80, top: 15, left: 140 }
      : screenHeight > 667 && screenHeight <= 896
      ? {width: 80, height: 80, top: 25, left: 140 }
      : { width: 80, height: 80, top: 25, left: 170 },
            { position: 'absolute', resizeMode: 'contain' },
          ]}
        />
        <TouchableOpacity
          onPress={() => setPage(4000)}
          style={{ position: 'absolute', bottom: 45, right: 40 }}>
          <Image
            source={require('./assets/images/arrow.jpg')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.paginationContainer,
            { position: 'absolute', bottom: 70, left: 130 },
          ]}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={[styles.circle, styles.selectedCircle]} />
          <View style={styles.circle} />
        </View>

        {/* Copy of images and text from first page */}
        <Image
          source={require('./assets/images/Removal-804.png')}
          style={[
            styles.image1,
            screenHeight <= 667 ? { width: 262.50, height: 262.50, top: 130, left: 45 }  : screenHeight > 667 && screenHeight <= 896
      ? { width: 350, height: 350, top: 170, left: 10 }
      : { width: 350, height: 350, top: 170, left: 40 },
            { position: 'absolute' },
          ]}
        />
        <Image
          source={require('./assets/images/newaispeak.png')}
          style={[
            styles.image2,
            screenHeight <= 667 ? { width: 45, height: 45, top: 300, left: 90 } : screenHeight > 667 && screenHeight <= 896
      ? { width: 60, height: 60, top: 400, left: 70 }
       : { width: 60, height: 60, top: 400, left: 100 },
            { position: 'absolute' },
          ]}
        />

        <Text
          style={[
            styles.text01,
          
    screenHeight <= 667
      ? { position: 'absolute', top: 410, left: 50 } 
      : screenHeight > 667 && screenHeight <= 896
      ? { position: 'absolute', top: 540, left: 50 }
      : { position: 'absolute', top: 540, left: 80 }, // adjust left as needed for iPhone 13 Pro and above
  ]}
>
          Comienza ahora &{'\n'}tu viaje comienza aquí!
        </Text>
        <Text
          style={[
            styles.text2,
            screenHeight <= 667 ? { position: 'absolute', top: 480, left: 70 } : screenHeight > 667 && screenHeight <= 896
      ? { position: 'absolute', top: 590, left: 70 }
        : { position: 'absolute', top: 590, left: 110 } ,
          ]}>
          {'\n'}
        </Text>
      </View>
    );
  } else if (page === 4000) {

  const prices = {
    Basico: billingCycle === 'Anual' ? 0.19 : 0.27,
    Pro: billingCycle === 'Anual' ? 0.26 : 0.39,
  };
 return (
    <View style={{ flex: 1, backgroundColor: '#FFB901', padding: 20, justifyContent: 'center' }}>
    
      {/* Billing Cycle Toggle */}
   <View style={{ alignItems: 'center', marginBottom: 20 }}>
  
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
           color: textColor,
        marginTop: 10, // Adjust this value to add space between the image and text
      }}>
          ¿Cual prefieres?
        </Text>
        
         
  
           
      </View>
  {makeUserWant && (
        <Animated.View
          style={{
            opacity: popAnim,
            transform: [{ scale: popAnim }],
            position: 'absolute',
            top: screenHeight >= 896 ? -40 : screenHeight >= 820 ? -50 : screenHeight >= 817 ? -55 : -65,
            right: 0,
          }}
        >
          <Image
            source={require('./assets/images/capiandchat.png')}
            style={{
              width: 350,
              height: 350,
            }}
          />
        </Animated.View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
         marginTop: 30,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: 'white',
          borderRadius: 25, // Makes the surrounding container an oval, and slightly smaller
          alignSelf: 'center', // Center the container
        }}
      >
        <TouchableOpacity
          onPress={() => setBillingCycle('Mensual')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
            backgroundColor: billingCycle === 'Mensual' ? '#4a51ff' : '#FFB901',
            borderRadius: 20, // Makes individual options ovals
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: billingCycle === 'Mensual' ? '#FFF' : '#000',
              fontWeight: 'bold',
            }}
          >
            Mensual
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBillingCycle('Anual')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
            backgroundColor: billingCycle === 'Anual' ? '#4a51ff' : '#FFB901',
            borderRadius: 20, // Makes individual options ovals
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: billingCycle === 'Anual' ? '#FFF' : '#000',
              fontWeight: 'bold',
            }}
          >
            Anual
          </Text>
        </TouchableOpacity>
      </View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* Basic Plan */}
      <View style={{ flex: 1, backgroundColor: 'white', padding: 20, borderRadius: 20, marginRight: 10 }}>
        <View style={{ alignSelf: 'flex-start', backgroundColor: '#13d5ff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: fontSizeLarge, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Básico</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ fontSize: fontSizeHuge, fontWeight: 'bold', color: 'black', marginRight: 2 }}>€{prices.Basico}</Text>
          <Text style={{ fontSize: fontSizeLarge, color: '#888' }}>/día</Text>
        </View>
        <Text style={{ fontSize: fontSizeMedium, color: '#888', marginBottom: 15 }}>
          Facturado solo €{billingCycle === 'Anual' ? '69.99' : '7.99'} {billingCycle === 'Anual' ? 'anual' : 'mensual'}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 15,
            alignItems: 'center',
            transform: [{ scale: scaleAnim }],
          }}
               onPress={() => inAppBuySubscription('Basico')}

        >
          <Text style={{ color: 'white', fontSize: fontSizeLarge, fontWeight: 'bold' }}>
            Prueba →{'\n'}
            <Text style={{ fontSize: fontSizeSmall }}>  7 días gratis</Text>
          </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: fontSizeMedium, marginBottom: 5 }}>
          <Text style={{ color: '#464879', fontWeight: 'bold' }}>✓</Text> Todas las{'\n'}
          <Text>funcionalidades</Text>
        </Text>

        <Text style={{ fontSize: fontSizeMedium, marginBottom: 5 }}>
          <Text style={{ color: '#464879' }}>✓</Text>
          <Text style={{ color: 'black' }}> 3 chats cada día</Text>
          <Text style={{ color: 'white' }}> chats ilimitados</Text>
        </Text>

        <Text style={{ fontSize: fontSizeMedium, marginBottom: 5, color: 'white' }}>
          <Text style={{ color: 'white' }}>+</Text> Atención al cliente rápida
        </Text>

        {showBasicInfo && (
          <View style={{
            position: 'absolute',
            top: 600,
            left: 0,
            alignItems: 'center',
          }}>
            <View style={{ position: 'relative', alignItems: 'center', top: -210, left: 30 }}>
              <Text style={{
                color: 'black',
                fontSize: fontSizeSmall2,
                padding: 5,
                borderRadius: 5,
                position: 'absolute',
                top: 60,
                left: 23,
                zIndex: 1,
              }}>
                Puedes cancelar la{'\n'}prueba gratuita antes{'\n'}de que terminen los{'\n'}7 días.
              </Text>
              <Image source={require('./assets/images/infocloud.png')} style={{
                width: 150,
                height: 150,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }} />
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            if (showBasicInfo) {
              toggleBasicInfo2();
            } else {
              toggleBasicInfo();
            }
          }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Text style={{ fontSize: fontSizeSmall, color: '#959595' }}>Cancela en cualquier{'\n'}momento.</Text>
          <Image source={require('./assets/images/blackex.png')} style={{ width: 15, height: 15, left: -45, top: 10 }} />
        </TouchableOpacity>
      </View>

      {/* Pro Plan */}
      <View style={{ flex: 1, backgroundColor: '#000', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
        <View style={{ alignSelf: 'flex-start', backgroundColor: '#13d5ff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: fontSizeLarge, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Pro</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ fontSize: fontSizeHuge, fontWeight: 'bold', color: 'white', marginRight: 1 }}>€{prices.Pro}</Text>
          <Text style={{ fontSize: fontSizeLarge, color: '#CCC' }}>/día</Text>
        </View>
        <Text style={{ fontSize: fontSizeMedium, color: '#CCC', marginBottom: 15 }}>
          Facturado solo €{billingCycle === 'Anual' ? '94.99' : '11.99'} {billingCycle === 'Anual' ? 'anual' : 'mensual'}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD700',
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 15,
            alignItems: 'center',
            transform: [{ scale: scaleAnim }],
          }}
               onPress={() => inAppBuySubscription('Pro')}

        >
          <Text style={{ color: 'black', fontSize: fontSizeLarge, fontWeight: 'bold' }}>
            Prueba →{'\n'}
            <Text style={{ fontSize: fontSizeSmall }}>  7 días gratis</Text>
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: fontSizeMedium, marginBottom: 5, color: 'white' }}>
          <Text style={{ color: '#bdf83e' }}>✓</Text> Todo lo que está en el plan Básico
        </Text>
        <Text style={{ fontSize: fontSizeMedium, marginBottom: 5, color: 'white' }}>
          <Text style={{ color: '#bdf83e' }}>+</Text> Chats ilimitados
        </Text>
        <Text style={{ fontSize: fontSizeMedium, marginBottom: 5, color: 'white' }}>
          <Text style={{ color: '#bdf83e' }}>+</Text> Atención al cliente rápida
        </Text>

        {showProInfo && (
          <View style={{
            position: 'absolute',
            top: 600,
            left: 0,
            alignItems: 'center',
          }}>
            <View style={{ position: 'relative', alignItems: 'center', top: -210, left: 30 }}>
              <Text style={{
                color: 'black',
                fontSize: fontSizeSmall2,
                padding: 5,
                borderRadius: 5,
                position: 'absolute',
                top: 60,
                left: 23,
                zIndex: 1,
              }}>
                Puedes cancelar la{'\n'}prueba gratuita antes{'\n'}de que terminen los{'\n'}7 días.
              </Text>
              <Image source={require('./assets/images/infocloud.png')} style={{
                width: 150,
                height: 150,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }} />
            </View>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            if (showProInfo) {
              toggleProInfo2();
            } else {
              toggleProInfo();
            }
          }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Text style={{ fontSize: fontSizeSmall, color: '#959595' }}>Cancela en cualquier{'\n'}momento.</Text>
          <Image source={require('./assets/images/blackex.png')} style={{ width: 15, height: 15, left: -45, top: 10 }} />
        </TouchableOpacity>
      
  
      </View>
    </View>
    </View>
  );
}

else if (page === 4001) {

  const prices = {
    Basico: billingCycle === 'Anual' ? 0.19 : 0.27,
    Pro: billingCycle === 'Anual' ? 0.26 : 0.39,
  };
 return (
    <View style={{ flex: 1, backgroundColor: '#FFB901', padding: 20, justifyContent: 'center' }}>
    
      {/* Billing Cycle Toggle */}
   <View style={{ alignItems: 'center', marginBottom: 20 }}>
  
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
          color: 'black',
        marginTop: 10, // Adjust this value to add space between the image and text
      }}>
          Cambia tu plan
        </Text>
        
         
  
           
      </View>
 
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
         marginTop: 30,
          paddingVertical: 10,
          width: '65%',
          backgroundColor: 'white',
          borderRadius: 25, // Makes the surrounding container an oval, and slightly smaller
          alignSelf: 'center', // Center the container
        }}
      >
        <TouchableOpacity
          onPress={() => setBillingCycle('Mensual')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
            backgroundColor: billingCycle === 'Mensual' ? '#4a51ff' : '#FFB901',
            borderRadius: 20, // Makes individual options ovals
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: billingCycle === 'Mensual' ? '#FFF' : '#000',
              fontWeight: 'bold',
            }}
          >
            Mensual
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBillingCycle('Anual')}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 25,
            backgroundColor: billingCycle === 'Anual' ? '#4a51ff' : '#FFB901',
            borderRadius: 20, // Makes individual options ovals
            marginHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: billingCycle === 'Anual' ? '#FFF' : '#000',
              fontWeight: 'bold',
            }}
          >
            Anual
          </Text>
        </TouchableOpacity>
      </View>

<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
   {/* Basic Plan */}
      <View style={{ flex: 1, backgroundColor: 'white', padding: 20, borderRadius: 20, marginRight: 10 }}>
        <View style={{ alignSelf: 'flex-start', backgroundColor: '#13d5ff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Basico</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'black', marginRight: 2 }}>€{prices.Basico}</Text>
          <Text style={{ fontSize: 18, color: '#888' }}>/dia</Text>
        </View>
        <Text style={{ fontSize: 16, color: '#888', marginBottom: 15 }}>
          Facturado solo €{billingCycle === 'Anual' ? '69.99' : '7.99'} {billingCycle === 'Anual' ? 'anual' : 'mensual'}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 15,
            alignItems: 'center',
             transform: [{ scale: scaleAnim }], 
           }}  
  onPress={() => setPage(4)} // Add the onPress event handler
>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Cambiar →
          </Text>
        </TouchableOpacity>
   
<Text style={{ fontSize: 16, marginBottom: 5 }}>
  <Text style={{ color: '#464879', fontWeight: '1800' }}>✓</Text> Todas las{'\n'}
  <Text>funcionalidades</Text>
</Text>




<Text style={{ fontSize: 16, marginBottom: 5 }}>
  <Text style={{ color: '#464879' }}>✓</Text> 3 chats cada día
</Text>

           
        {showBasicInfo && (
           <View style={{
        position: 'absolute',
        top: 600,
        left: 0,
        alignItems: 'center',
      }}>
        <View style={{ position: 'relative', alignItems: 'center', top: -210, left: 30 }}>
          <Text style={{
            color: 'black',
            fontSize: 10,
            padding: 5,
            borderRadius: 5,
            position: 'absolute',
            top: 60,
            left: 23,
            zIndex: 1,
          }}>
             Puedes cancelar la{'\n'}prueba gratuita antes{'\n'}de que terminen los{'\n'}7 días.
          </Text>
          <Image source={require('./assets/images/infocloud.png')} style={{
            width: 150,
            height: 150,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }} />
            </View>
          </View>
        )}
         <TouchableOpacity
        onPress={() => {
          if (showBasicInfo) {
            toggleBasicInfo2();
          } else {
         toggleBasicInfo();
          }
        }} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Text style={{ fontSize: 12, color: '#959595' }}>Cancela en cualquier{'\n'}momento.</Text>
        <Image source={require('./assets/images/blackex.png')} style={{ width: 15, height: 15, left: -45, top: 10 }} />
      </TouchableOpacity>
      </View>

      {/* Pro Plan */}
      <View style={{ flex: 1, backgroundColor: '#000', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: 'black' }}>
        <View style={{ alignSelf: 'flex-start', backgroundColor: '#13d5ff', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 20, marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Pro</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'white', marginRight: 1 }}>€{prices.Pro}</Text>
          <Text style={{ fontSize: 18, color: '#CCC' }}>/dia</Text>
        </View>
        <Text style={{ fontSize: 16, color: '#CCC', marginBottom: 15 }}>
          Facturado solo €{billingCycle === 'Anual' ? '94.99' : '11.99'} {billingCycle === 'Anual' ? 'anual' : 'mensual'}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD700',
            paddingVertical: 15,
            borderRadius: 10,
            marginBottom: 15,
            alignItems: 'center',
             transform: [{ scale: scaleAnim }], 
         }}
  onPress={() => setPage(4)} // Add the onPress event handler
>
       <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
            Cambiar →
          </Text>
        </TouchableOpacity>
       <Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
  <Text style={{ color: '#bdf83e' }}>✓</Text> Todo lo que está en el plan Básico
</Text>
<Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
  <Text style={{ color: '#bdf83e' }}>+</Text> Chats ilimitados
 
</Text>
<Text style={{ fontSize: 16, marginBottom: 5, color: 'white' }}>
  <Text style={{ color: '#bdf83e' }}>+</Text> Atención al cliente rápida
 
</Text>

       
              {showProInfo && (
          <View style={{
        position: 'absolute',
        top: 600,
        left: 0,
        alignItems: 'center',
      }}>
        <View style={{ position: 'relative', alignItems: 'center', top: -210, left: 30 }}>
          <Text style={{
            color: 'black',
            fontSize: 10,
            padding: 5,
            borderRadius: 5,
            position: 'absolute',
            top: 60,
            left: 23,
            zIndex: 1,
          }}>
             Puedes cancelar la{'\n'}prueba gratuita antes{'\n'}de que terminen los{'\n'}7 días.
          </Text>
          <Image source={require('./assets/images/infocloud.png')} style={{
            width: 150,
            height: 150,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }} />
            </View>
      </View>
        )}
        <TouchableOpacity
  onPress={() => {
    if (showProInfo) {
      toggleProInfo2();
    } else {
      toggleProInfo();
    }
  }} 
  style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}
>
   <Text style={{ fontSize: 12, color: '#959595' }}>Cancela en cualquier{'\n'}momento.</Text>
        <Image source={require('./assets/images/whiteex.png')} style={{ width: 15, height: 15, left: -45, top: 10 }} />
      </TouchableOpacity>

      
  
      </View>
    </View>
    </View>
  );
}
else if (page === 4) {
  return (
     <View style={styles.container}>
      {showContent2 && (
        <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 350 : 400, right: 225 }}>
          <TouchableOpacity
            onPress={() => {
              setClickCount(prevClickCount => {
                if (prevClickCount > 0) {
                  setPage(5);
                } else {
                  setShowText(false);
                  setShowImage(false); // hide the coudwhite image
                  setTimeout(() => {
                    setShowText2(true); // show the second text after 1 second
                    setShowImage(true); // re-display the coudwhite image after 1 second
                    setIsContentReady(true); // set content ready to true
                  }, 500);
                }
                return prevClickCount + 1;
              });
            }}
            disabled={!isContentReady} // disable TouchableOpacity until content is ready
          >
            <View style={{ zIndex: 2 }}>
              <Image
                source={require('./assets/images/newaispeak.png')}
                style={[
                  styles.image610,
                  {
                    position: 'absolute',
                    top: screenHeight <= 667 ? -30 : -130,
                    left: 0,
                    resizeMode: 'contain',
                  },
                ]}
              />
              {showFinger && (
                <Image
                  source={require('./assets/images/finger.gif')}
                  style={[
                    styles.image66,
                    {
                      position: 'absolute',
                      top: screenHeight <= 667 ? 100 : 0,
                      left: 110,
                      resizeMode: 'contain',
                      zIndex: 10,
                    },
                  ]}
                />
              )}
            </View>
          </TouchableOpacity>

          {showImage && (
            <Image
              source={require('./assets/images/coudwhite5.png')}
              style={[
                styles.image4,
                {
                  position: 'absolute',
                  top: screenHeight <= 667 ? -100 : -200,
                  left: -130,
                  resizeMode: 'contain',
                },
              ]}
            />
          )}

  {showText && (
  <View style={{ position: 'absolute', top: screenHeight <= 667 ? -70 : -170, left: -103 }}>
    <Text
      style={{
        fontFamily: 'Noto Sans',  // Take the font family from text3
        fontWeight: 'bold',        // Take the font weight from text3
        alignSelf: 'center',       // Take alignSelf from text3
        marginBottom: 15,          // Take marginBottom from text3
        fontSize: fontSizeMedium2,  // Use dynamic font size
      }}
    >
      Hola, soy {'\n'}Aispeak! Seré tu{'\n'}compañero {'\n'}de idiomas.
    </Text>
  </View>
)}

{showText2 && (
  <View style={{ position: 'absolute', top: screenHeight <= 667 ? -70 : -170, left: -103 }}>
    <Text
      style={{
        fontFamily: 'Noto Sans',  // Take the font family from text3
        fontWeight: 'bold',        // Take the font weight from text3
        alignSelf: 'center',       // Take alignSelf from text3
        marginBottom: 15,          // Take marginBottom from text3
        fontSize: fontSizeMedium2,  // Use dynamic font size
      }}
    >
      Responda{'\n'}estas preguntas{'\n'}antes de{'\n'}comenzar.
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

 else if (page === 4210) {
  return (
    <View style={styles.container}>
      <View style={styles.rectanglenewer}>
        {/* Wrap the Text component in a ScrollView */}
        <ScrollView contentContainerStyle={{ padding: 10 }}>
          <Text style={styles.titlenewer}>
            Aispeak concede gran importancia a la privacidad de sus datos.
          </Text>
          <Text style={styles.textnewer}>
            Nuestro objetivo es enseñar un idioma a nuestros clientes, no hacer nada más con sus datos o información.

            Es por eso que sólo utilizamos la información de tus chats para:

            • Para corregir errores/errores o fallos en nuestra aplicación

            Nunca compartiremos la información de sus chats fuera de nuestro equipo por ningún motivo que no sea el indicado anteriormente.

            Entendemos la impresión que la inteligencia artificial a veces deja en las personas y es por eso que apoyamos firmemente que toda la información que nos dejes sea súper segura.

            Saludos,

            El equipo de Aipeak
          </Text>
        </ScrollView>
      </View>
    

      <TouchableOpacity
  onPress={() => setPage(9)}
  style={{
    borderColor: '#000000',
    borderWidth: 1.8,
 paddingVertical: 4, // Adjust vertical padding
    paddingHorizontal: 10, // Horizontal padding
    borderRadius: 5,
    flexDirection: 'column', // Stack vertically    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30, // Add margin to ensure space from above components
 position: 'absolute',
          top: 124,
          right: 30,        justifyContent: 'center', // Center vertically

    height: 45, // Reduce height further
    width: 90, // Keep adjusted width
  }}>
 
  <Text style={{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Set the text color to black
      marginBottom: -6, // Remove margin to bring text closer to image
      textAlign: 'center',
  }}>
    Volver
  </Text>
   <Image
    source={require('./assets/images/yellowarrowinblack.png')} 
    style={{
      width: 20,
      height: 21,
      transform: [{ scaleX: -1 }],
            marginTop: 2, // Add a slight negative margin to bring the arrow closer to the text

    }}
  />
</TouchableOpacity>
    </View>
  );
}
else if (page === 5) {
  return (
     <View style={styles.container}>
      {/* Blank page */}
      <View style={[styles.blankPage, { marginTop: '10%' }]}>
        <View style={[styles.whiteBox, { height:  screenHeight >= 896 ? '50%' : screenHeight >= 820 ? '50%' : screenHeight >= 817 ? '50%' : '50%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: '5%' }]}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>¿Qué nivel de inglés{'\n'}tienes?</Text>
          
          {/* Options */}
          <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableOpacity
              style={[
                { width: '90%', padding: '5%', borderRadius: 10, borderWidth: 1, borderColor: '#ccc', marginVertical: '2%', alignItems: 'center' },
                selectedOption === 'Principiante' && { backgroundColor: '#ADD8E6' },
              ]}
              onPress={() => setSelectedOption('Principiante')}
            >
              <Text style={{ fontSize: 20 }}>Principiante</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                { width: '90%', padding: '5%', borderRadius: 10, borderWidth: 1, borderColor: '#ccc', marginVertical: '2%', alignItems: 'center' },
                selectedOption === 'Intermedio' && { backgroundColor: '#ADD8E6' },
              ]}
              onPress={() => setSelectedOption('Intermedio')}
            >
              <Text style={{ fontSize: 20 }}>Intermedio</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                { width: '90%', padding: '5%', borderRadius: 10, borderWidth: 1, borderColor: '#ccc', marginVertical: '2%', alignItems: 'center' },
                selectedOption === 'Avanzado' && { backgroundColor: '#ADD8E6' },
              ]}
              onPress={() => setSelectedOption('Avanzado')}
            >
              <Text style={{ fontSize: 20 }}>Avanzado</Text>
            </TouchableOpacity>
          </View>
          
          {/* Next Button */}
          <TouchableOpacity
            style={{ width: 160, padding: '3%', borderRadius: 10, backgroundColor: '#4CAF50', alignItems: 'center' }}
            onPress={() => {
              if (selectedOption) {
                setPage(5.2);
              }
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



 else if (page === 5.2) {
    return (
      <View style={styles.container}>
        {/* Blank page */}
        <View style={[styles.blankPage, { marginTop: '10%' }]}>
          <View style={styles.whiteBox}>
            <Text style={styles.question}>Cual es tu nombre?</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Introduzca su nombre"
            />
            <Image
              source={require('./assets/images/[removal.ai]_789b56b9-8c8e-4d48-a760-5779c00b3445-dadw.png')}
              style={[
                styles.image90,
                {
                  position: 'absolute',
                  top: 30,
                  left: 65,
                  resizeMode: 'contain',
                  width: 140,
                  hieght: 140
                },
              ]}
            />
            <Text
              style={[
                styles.text13,
                { position: 'absolute', top: 260, left: 40 },
              ]}>
              Aprendamos!
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
         <TouchableOpacity
            onPress={() => {
              setPage(6);
              setVisitedPage1(true);
              setChatHistory([]);
              setShouldLoadMessages(false);
              setCurrentChatKey((prevKey) => {
                const newKey = prevKey + 1; // Increment currentChatKey
                setChatKey(newKey); // Set chatKey to the new key
                return newKey;
              });
              if (selectedOption === 'Principiante') {
                setCurrentCountPrincipiante(1);
              } else if (selectedOption === 'Intermedio') {
                setCurrentCountIntermedio(1);
              } else if (selectedOption === 'Avanzado') {
                setCurrentCountAvanzado(1);
              }
            }}
            style={{ position: 'absolute', bottom: 30, right: -10 }}>
            <Image
              source={require('./assets/images/unitedkingdom.png')}
              style={styles.image7}
            />
          </TouchableOpacity>
            <Image
              source={require('./assets/images/orangearrow.gif')}
              style={[
                styles.image5,
                {
                  resizeMode: 'contain',
                  position: 'absolute',
                  top: -85,
                  left: 20,
                },
              ]}
            />
          </View>
        </View>
      </View>
    );
  } 
else if (page === 6) {
  return (
    
      <ChatScreen
       selectedOption={selectedOption} 
       setSelectedOption={setSelectedOption} 
        key={chatKey}
        chatHistory={chatHistory}
          chatHistories={chatHistories}
        setChatHistory={setChatHistory}
        setChatHistories={setChatHistories}
           addMessageToChatHistory={addMessageToChatHistory}
            isTimeoutActive={isTimeoutActive} 
            thirdchat={thirdchat}
            handleQuestionMarkClick={handleQuestionMarkClick} 
        avatarKey={avatarKey}
           avatarKey2={avatarKey2}
              avatarKey3={avatarKey3}
        avatarImages={avatarImages}
setPage={handleSetPage}        isMicEnabled={isMicEnabled}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isMicEnabled2={isMicEnabled2}
        setMicEnabled2={setMicEnabled2}
        chatKey={chatKey}
        shouldLoadMessages={shouldLoadMessages}
        setShouldLoadMessages={setShouldLoadMessages}
      />
      
  );
}
else if (page === 7) {
  let displayLevel = currentLevel;
  let displayCount = currentCount;

  if (selectedOption === 'Avanzado') {
    displayLevel = 3;
    displayCount = currentCountAvanzado;
  } else if (selectedOption === 'Intermedio') {
    displayLevel = 2;
    displayCount = currentCountIntermedio;
  } else if (selectedOption === 'Principiante') {
    displayLevel = 1;
    displayCount = currentCountPrincipiante;
  }


  return (
    <View style={styles.container}>
      <View>
 <View
  style={{
    position: 'absolute',
    top: '70%',
    left: '5%',
    backgroundColor: 'white',
    height: 25,
    width: 65,
    borderRadius: 5,
    borderColor:
      selectedOption === 'Principiante'
        ? 'red'
        : selectedOption === 'Intermedio'
        ? 'green'
        : '#0074af',
    borderWidth: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    zIndex: 300, // Ensure this container is on top
  }}
>
  <Text
    style={{
      fontSize: 13,
      fontWeight: '900',
      color: 'black',
      textAlign: 'center',
      zIndex: 301, // Ensure the text is on top of the view
    }}
  >
    NIVEL {displayLevel}
  </Text>
</View>

<View
  style={{
    position: 'absolute',
    top: '80%',
    left: '4%',
    backgroundColor: '#FFB901',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    zIndex: 302, // Ensure this view is beneath the NIVEL container
  }}
>
  <Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold' }}>
    {displayCount}/{displayLevel === 3 || displayCount >= 60 ? (
      <>
        <Text style={{ fontSize: 22 }}>∞</Text>
      </>
    ) : '60'}
  </Text>
</View>

    <View>
<TouchableOpacity
  onPress={() => {
    // Check if the timeout is active and handle it immediately
    if (isTimeoutActive) {
      handleQuestionMarkClick();
      console.log('Timeout is active, skipping further actions.');
      return; // Skip the rest of the logic
    }

   
      let newCount = displayCount + 1;

      if (newCount >= 60 && displayLevel < 3 && displayCount < 60) {
        if (selectedOption === 'Principiante') {
          setCurrentCountPrincipiante(newCount);
          setSelectedOption('Intermedio');
        } else if (selectedOption === 'Intermedio') {
          setCurrentCountIntermedio(newCount);
          setSelectedOption('Avanzado');
        } else if (selectedOption === 'Avanzado') {
          setCurrentCountAvanzado(newCount);
        }
        setCurrentLevel(displayLevel + 1);
      } else if (displayLevel === 3) {
        setCurrentCountAvanzado(newCount);
      } else {
        if (selectedOption === 'Principiante') {
          setCurrentCountPrincipiante(newCount);
        } else if (selectedOption === 'Intermedio') {
          setCurrentCountIntermedio(newCount);
        } else if (selectedOption === 'Avanzado') {
          setCurrentCountAvanzado(newCount);
        }
      }

      // Start a new chat
      handleStartNewChat();
   
    }
  }
  style={{
    alignSelf: 'center',
    marginTop: '40%',
    marginLeft: '3%',
    width: '42%',
  }}
>
  {showImageOnPage7 && (
    <Image
      source={require('./assets/images/mantenga.png')}
      style={{
        position: 'absolute',
        zIndex: 200,
        top: -32,
        left: 190,
        width: 50,
        height: 50,
      }}
    />
  )}
  <View
    style={{
      backgroundColor: '#fff',
      paddingVertical: 27,
      paddingHorizontal: 8,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {},
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
      width: '100%',
    }}
  >
    <View
      style={{
        backgroundColor: '',
        paddingVertical: 2.7,
        paddingHorizontal: 20.25,
        borderRadius: 45,
      }}
    >
    <Text
  style={{
    fontWeight: 'bold',
    fontSize: 13,
    color: '#000000',
    position: 'absolute',
    top: -15,
    left: -13,
  }}
>
  Iniciar un{'\n'}nuevo chat
</Text>

    </View>
      <Image
        source={
          selectedOption === 'Principiante'
            ? require('./assets/images/newaispeakbig.png')
            : selectedOption === 'Intermedio'
            ? require('./assets/images/newaispeaknivel2.png')
            : require('./assets/images/newaispeaknivel3.png')
        }
        style={{
          position: 'absolute',
          top: -35,
          right: '42.5%',
          width: 52,
          height: 52,
        }}
      />
  </View>
</TouchableOpacity>


      <Image
          source={require('./assets/images/dadw.jpg')}
          style={{
            position: 'absolute',
            top: -5,
            alignSelf: 'center',
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />
<View style={{
  justifyContent: 'center',
  alignItems: 'center',
  width: 200, // Adjust the width as needed
  height: 200, // Adjust the height as needed
  position: 'absolute',
      top: 
     screenHeight >= 896 ? '40%' :
     screenHeight >= 820 ? '35%' :
     screenHeight >= 817 ? '37%' : '32%',


      right: screenHeight >= 896 ? '-15%' : '-17%',

}}>
   <Image
    source={
      isTimeoutActive
        ? require('./assets/images/timeoutcircle44.png')
        : selectedOption === 'Principiante'
        ? require('./assets/images/basiccircle4.png')
        : selectedOption === 'Intermedio'
        ? require('./assets/images/hatcircle4.png')
        : selectedOption === 'Avanzado'
        ? require('./assets/images/crowncircle4.png')
        : null
    }
    style={{
       width: '33%',
    height: '33%',

      resizeMode: 'contain',
    }}
  />
  {isTimeoutActive && (
    <Text style={{ fontWeight: 'bold', position: 'absolute', color: 'black', fontSize: 15 }}>
    {remainingTime > 60000 
      ? new Date(remainingTime).toISOString().substr(11, 5)  // Show hh:mm format for times greater than 1 minute
      : `00:${String(Math.floor((remainingTime % 60000) / 1000)).padStart(2, '0')}`  // Show mm:ss for the last minute
    }
  </Text>
  )}
  {isTimeoutActive && (
  <Image
    source={require('./assets/images/zzz3.gif')}
    style={{
      position: 'absolute',
     top: screenHeight >= 896 ? '18%' : '18%',
     
      width: 80,
      height: 80,
      resizeMode: 'contain',
    }}
  />
)}
</View>



{showQuestionMark && (
  <TouchableOpacity
    onPress={() => {
      handleQuestionMarkClick();
      setShowQuestionMark(false);
      setQuestionMarkAndStorage(true); // Update state and AsyncStorage
    }}
    style={{
      position: 'absolute',
      top: screenHeight >= 896 ? '22%' : screenHeight >= 820 ? '14%' : screenHeight >= 817 ? '19%' : '14%',
      left: screenHeight >= 896 ? '63%' : '58%',
      width: 200,
      height: 200,
    }}
  >
    <Image
      source={require('./assets/images/bluequestionmark2.png')}
      style={{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      }}
    />
  </TouchableOpacity>
)}

    
  
</View>

 
         
  </View>
        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>Elige a tu buddy</Dialog.Title>
          <View style={{ width: 200, height: 200, position: 'relative' }}>
            <Image
              source={require('./assets/images/circle.png')}
              style={{
                position: 'absolute',
                top: '-15%',
                right: '-30%',
                width: 250,
                height: 250,
              }}
            />
            <TouchableOpacity
              onPress={() => handlePress(0)}
              style={{
                position: 'absolute',
                top: 50,
                left: '40%',
                width: 40,
                height: 40,
              }}>
              <Image
                source={isClickable[0] ? colorImages[0] : bwImages[0]}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(1)}
              style={{
                position: 'absolute',
                top: '55%',
                left: '38%',
                width: 40,
                height: 40,
              }}>
              <Image
                source={isClickable[1] ? colorImages[1] : bwImages[1]}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(2)}
              style={{
                position: 'absolute',
                bottom: 32,
                left: '62%',
                width: 40,
                height: 40,
              }}>
              <Image
                source={isClickable[2] ? colorImages[2] : bwImages[2]}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(3)}
              style={{
                position: 'absolute',
                top: '42%',
                right: 0,
                width: 40,
                height: 40,
              }}>
              <Image
                source={isClickable[3] ? colorImages[3] : bwImages[3]}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress(4)}
              style={{
                position: 'absolute',
                top: '17%',
                right: '12%',
                width: 40,
                height: 40,
              }}>
              <Image
                source={isClickable[4] ? colorImages[4] : bwImages[4]}
                style={{ width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
          </View>
          <Dialog.Button label="OK" onPress={() => setDialogVisible(false)} />
        </Dialog.Container>

       
        <ScrollView
          style={{ marginBottom: 200, marginTop: 90 }}
          ref={(ref) => {
            scrollViewRef = ref;
          }}
          onContentSizeChange={() =>
            scrollViewRef.scrollToEnd({ animated: true })
          }>
          {chats.map((chat, index) => (
      <TouchableOpacity
  onPress={async () => {
    if (isTimeoutActive) {
      setthirdchat(true);
    }

      setPage(6);
    isFirstChat = false;
    setChatKey(chat);
    setShouldLoadMessages(true);
    setChatHistory(chatHistories[chat] || []);
  }}
  style={{ alignSelf: 'center', marginTop: '5%', width: '70%' }}>
  <View
    style={{
      backgroundColor: '#fff',
      padding: 9,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
      width: '100%',
    }}>
    <View
      style={{
        backgroundColor: '',
        paddingVertical: 5.4,
        paddingHorizontal: 40.5,
        borderRadius: 45,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 19,
          color: '#000000',
        }}>
        Chat {chat}
      </Text>
    </View>
  </View>
</TouchableOpacity>

          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
       {upgradetopro && (
  <BlurView
    style={StyleSheet.absoluteFill}
    blurType="light"
    blurAmount={10}
  >
    <View
      style={{
        position: 'absolute',
        top: 310, // Adjusted to center vertically
        zIndex: 200,
        left: 50, // Margin from the left
        right: 50, // Margin from the right
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0069ad',
        borderWidth: 1,
        backgroundColor: 'white', // White background
        padding: 25, // Padding for space around the text
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Shadow for better visibility
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // For Android shadow
      }}
    >
      <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
        ¿Quieres actualizar{'\n'}a Pro y chatear{'\n'}ilimitadamente? 🚀
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
       <TouchableOpacity
  onPress={() => {
    setupgradetopro(false)
    // Navigate to page 9
    setPage(9); // Assuming you have a function or state for setting the current page
    // Show the alert
    Alert.alert(
      "Cambiar tu plan de suscripción",
      "Ve a la configuración de suscripciones de tu dispositivo para cambiar el plan de suscripción!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }}
  style={{
    backgroundColor: '#ffbb00',
    borderRadius: 20,
    padding: 10,
    width: 65,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 10,
  }}
>
  <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Sí</Text>
</TouchableOpacity>

        <TouchableOpacity
          onPress={() => setupgradetopro(false)}
          style={{
            backgroundColor: '#ffbb00',
            borderRadius: 20,
            padding: 10,
            width: 65,
            borderColor: 'black',
            borderWidth: 2,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  </BlurView>
)}

        {youhaveregistered && (
        <BlurView
  style={StyleSheet.absoluteFill}
  blurType="light"
  blurAmount={10}
>
  <View
    style={{
      position: 'absolute',
      top: 310, // Adjusted to center vertically
      zIndex: 200,
      left: 50, // Margin from the left
      right: 50, // Margin from the right
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#0069ad',
      borderWidth: 1,
      backgroundColor: 'white', // White background
      padding: 25, // Padding for space around the text
      borderRadius: 10, // Rounded corners
      shadowColor: '#000', // Shadow for better visibility
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5, // For Android shadow
    }}
  >
    <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
      ¡Has creado una{'\n'}cuenta con éxito!{'\n'}✅
    </Text>
  </View>
</BlurView>
)}

{showPopupnewer && (
  <BlurView
    style={StyleSheet.absoluteFill}
    blurType="light"
    blurAmount={10}
  >
    <View
      style={{
        position: 'absolute',
        top: 310, // Adjusted to center vertically
        zIndex: 200,
        left: 50, // Added margin from the left
        right: 50, // Added margin from the right
        justifyContent: 'center',
        alignItems: 'center',
            borderColor: '#0069ad',
             borderWidth: 1,
        backgroundColor: 'white', // White background
        padding: 25, // Added padding for space around the text
        borderRadius: 10, // Rounded corners
        shadowColor: '#000', // Shadow for better visibility
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // For Android shadow
      }}
    >
      <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
        Tienes que esperar un poco más hasta que puedas chatear de nuevo! 🤔 
        {'\n\n'}
        ¡Cuando hayan pasado las 12 horas completas, podrás volver a chatear con Aispeak 😄
      </Text>
      <Image
        source={require('./assets/images/yellowclocknew.png')}
        style={{
          position: 'absolute',
          top: -35,
          left: 20,
          width: 60,
          height: 60,
          resizeMode: 'contain',
        }}
      />
      <TouchableOpacity
        onPress={handleClosePopup}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: '#0069ad', fontWeight: 'bold' }}>X</Text>
      </TouchableOpacity>
    </View>
  </BlurView>
)}

 

{showBlur && showOk && (
  <BlurView intensity={blur} style={StyleSheet.absoluteFill}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: -60,
        top: 750,
      }}>
      <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 285 : 150, right: '75%'  }}>
        <Image
         source={require('./assets/images/blackarrowdown.png')}
          style={[styles.image102, { resizeMode: 'contain' }]}
        />
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 275 : 140, right:'45%'}}>
        <Image
source={require('./assets/images/blackarrowdown.png')}
          style={[styles.image102, { resizeMode: 'contain' }]}
        />
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 285 : 150, right:'13%' }}>
        <Image
          source={require('./assets/images/blackarrowdown.png')}
          style={[styles.image102, { resizeMode: 'contain' }]}
        />
      </View>

   
      <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 345 : 210,  right: '60%' }}>
        <Text style={{color: 'black', fontSize: 20,  fontWeight: 'bold'}}>Tu progreso</Text>
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 320 : 185, right: '45%'}}>
        <Text style={{color: 'black', fontSize: 20,  fontWeight: 'bold'}}>Inicio</Text>
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight <= 667 ? 345 : 210, right: '7%' }}>
        <Text style={{color: 'black', fontSize: 20,  fontWeight: 'bold'}}>Configuración</Text>
      </View>

  
    </View>
  </BlurView>
  
)}
{showImage5 && (
  <>
  <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        
          
        
         
        }}>
  <View style={{ position: 'absolute', bottom: screenHeight * 0.020, right: '69%' }}>
        <TouchableWithoutFeedback onPress={() => handlePressnow(paperworkScale, 820)}>
          <Animated.Image
            source={require('./assets/images/[removal.ai]_5d7bcad8-c8b3-4b60-80b2-a73a4505c746-m003t0569_a_paperwork_014aug22.png')}
            style={[styles.image11, { transform: [{ scale: paperworkScale }], resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight * 0.040, right: '36%' }}>
        <TouchableWithoutFeedback onPress={() => handlePressnow(iconScale, 7)}>
          <Animated.Image
            source={require('./assets/images/[removal.ai]_f18aa0aa-831f-47de-b135-67526dbe96c2-7911202.png')}
            style={[styles.image8, { transform: [{ scale: iconScale }], resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight * 0.056, right: '7%' }}>
        <TouchableWithoutFeedback onPress={() => handlePressnow(documentScale, 9)}>
          <Animated.Image
            source={require('./assets/images/[removal.ai]_fdee0702-4379-4d45-8e87-3b853296c531-0000000000.png')}
            style={[styles.image10, { transform: [{ scale: documentScale }], resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>


    </View>
     
  </>
  
)}

{showBlur && showOkbutton && (
  <View
  style={{
  
        backgroundColor: '#ffbb00',
        borderRadius: 20,
        padding: 10, 
        marginRight: 20,
        borderColor: 'black',
        borderWidth: 4, // Add this line to apply the border
  
    zIndex: 200,
    position: 'absolute', 
    top: 330, 
    left: 140,
   width: 100
  }}
>
  <TouchableWithoutFeedback
        onPress={() => {
          setShowOk(false);
          setShowOkbutton(false);
          setBlur(0);
        }}
      >
        <Text style={{color: 'black', textAlign: 'center',  fontWeight: 'bold'}}>Ok!</Text>
      </TouchableWithoutFeedback>
    </View>
)}



      </View>
    );
  }else if (page === 820) {
  return (
    <View style={styles.container}>
 <Modal
      transparent={true}
      visible={modal2Visible}
      onRequestClose={closeModal2}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ 
          backgroundColor: 'white', 
          padding: 20, 
          borderRadius: 10, 
          width: '90%', 
          height: screenHeight <= 592 ? '70%' : '50%', 
          justifyContent: 'space-between',
          borderColor: '#ffbb00',
          borderWidth: 16,
        }}>
          <View
            style={{
              position: 'absolute',
              top: '-5%',
              alignSelf: 'center',
              backgroundColor: '#ffc700',
              borderRadius: 8,
              padding: 12,
              borderColor: 'black',
              borderWidth: 2.5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
              zIndex: 7,
            }}>
            <Text style={{ 
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
            }}>
              Rápida introducción❓
            </Text>
          </View>

 
 
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <View style={{ position: 'absolute', top: '2%', left: '34%', width: 140, height: 140 }}>
    <Image
      source={require('./assets/images/yellowbackground0.png')}
      style={{ width: '110%', height: '110%', resizeMode: 'contain' }}
    />
   
  </View>
  <View style={{ position: 'absolute', top: '27%', left: '34%', width: 140, height: 140 }}>
    <Image
      source={require('./assets/images/yellowbackground01.png')}
      style={{ width: '110%', height: '110%', resizeMode: 'contain' }}
    />
  
  </View>
  <View style={{ position: 'absolute', top: '52%', left: '34%', width: 140, height: 140 }}>
    <Image
      source={require('./assets/images/yellowbackground02.png')}
      style={{ width: '110%', height: '110%', resizeMode: 'contain' }}
    />
  
  </View>
<Image
  source={require('./assets/images/nivel2green.png')}
  style={{
    position: 'absolute',
    top: '31.5%',
    left: '12%',
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  }}
/>
<Image
  source={require('./assets/images/nivel3blue.png')}
  style={{
    position: 'absolute',
    top: '56.5%',
    left: '12%',
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  }}
/>
<Image
  source={require('./assets/images/levelreddest.png')}
  style={{
    position: 'absolute',
    top: '6.5%',
    left: '12%',
    width: 100,
    height: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  }}
/>

</View>




          <TouchableOpacity
            onPress={closeModal2}
            style={{
              position: 'absolute',
              bottom: '5%',
              alignSelf: 'center',
              backgroundColor: '#ffbb00',
              borderRadius: 20,
              padding: 10,
              width: 110,
              borderColor: 'black',
              borderWidth: 2,
            }}
          >
            <Text style={{color: 'black', textAlign: 'center', fontWeight: 'bold'}}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  <Modal
  transparent={true}
  visible={newModalVisible}
  onRequestClose={closeNewModal}
>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <View style={{ 
      backgroundColor: 'white', 
      padding: 20, 
      borderRadius: 10, 
      width: '70%', 
      height: screenHeight <= 592 ? '44%' : '24%', 
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TouchableOpacity onPress={closeNewModal2} style={{ position: 'absolute', top: 10, right: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>×</Text>
      </TouchableOpacity>
      {showSparkle ? (
        <Image
          source={require('./assets/images/sparkle.gif')}
          style={{ width: 100, height: 100 }}
        />
      ) : (
        !hideContent && ( // Don't show button or text if hideContent is true
          <>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
              ¿Estás seguro de que quieres cambiar el nivel?
            </Text>
            <TouchableOpacity
              onPress={closeNewModal}
              style={{
                backgroundColor: 'lightblue',
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ color: 'black', fontWeight: 'bold' }}>Cambiar ↻</Text>
            </TouchableOpacity>
          </>
        )
      )}
    </View>
  </View>
</Modal>

    <ScrollView
  style={{ marginTop: screenHeight * 0.2, marginBottom: screenHeight * 0.2 }}
  ref={(ref) => {
    scrollViewRef = ref;
  }}
  onContentSizeChange={() => {
    if (currentLevel >= 1) {
      scrollViewRef.scrollTo({ y: (currentLevel - 1) * 100, animated: true });
    }
    if (selectedOption === 'Intermedio') {
      scrollViewRef.scrollTo({ y: 100, animated: true }); // Adjust the value as needed
    }
    if (selectedOption === 'Avanzado') {
      scrollViewRef.scrollToEnd({ animated: true });
    }
  }}
>
  {['Principiante', 'Intermedio', 'Avanzado'].map((label, index) => (
    <View key={index + 1} style={{ marginTop: 5, marginRight: 15 }}>
      <Image
        source={
          selectedOption === 'Principiante'
            ? index === 0
              ? require('./assets/images/levelreddest.png')
              : index === 1
              ? require('./assets/images/nivel2blacksmall.png')
              : require('./assets/images/nivel3blacksmall.png')
            : selectedOption === 'Intermedio'
            ? index === 0
              ? require('./assets/images/levelblack2.png')
              : index === 1
              ? require('./assets/images/nivel2green.png')
              : require('./assets/images/nivel3blacksmall.png')
            : selectedOption === 'Avanzado'
            ? index === 0
              ? require('./assets/images/levelblack2.png')
              : index === 1
              ? require('./assets/images/nivel2blacksmall.png')
              : require('./assets/images/nivel3blue.png')
            : null
        }
        style={{
          width: index === 1 ? 210 : 200, // Adjust the width as needed
          height: index === 1 ? 210 : 200, // Adjust the height as needed
          alignSelf: 'center',
          marginBottom: -15, // Adjust the margin as needed
        }}
      />

      <View
        style={{
          position: 'relative',
          top: `-14%`,
          left: '39%',
          backgroundColor: '#FFB901',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 50,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
          alignSelf: 'flex-start',
          zIndex: 2,
        }}
      >
<Text style={{ fontSize: 22, color: '#fff', fontWeight: 'bold' }}>
  {index === 0
    ? currentCountPrincipiante >= 60
      ? `${currentCountPrincipiante}/∞`
      : `${currentCountPrincipiante}/60`
    : index === 1
    ? currentCountIntermedio >= 60
      ? `${currentCountIntermedio}/∞`
      : `${currentCountIntermedio}/60`
    : (
        <>
          {currentCountAvanzado}/
          <Text style={{ fontSize: 22 }}>∞</Text>
        </>
      )}
</Text>


      </View>
      {!(selectedOption === 'Principiante' && index === 0) &&
       !(selectedOption === 'Intermedio' && index === 1) &&
       !(selectedOption === 'Avanzado' && index === 2) && (
        <Image
          source={require('./assets/images/890132lock.png')}
          style={{
            position: 'absolute',
            top: '53%',
            alignSelf: 'center',
            width: 30,
            height: 30,
            zIndex: 3,
          }}
        />
      )}
    
      {selectedOption !== 'Principiante' && index === 0 && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            width: 70,
            height: 30,
            borderWidth: 2,
            borderColor: 'grey',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
          }}
          onPress={() => {
            setChangeLevelNow('Principiante');
            setNewModalVisible(true);
          }}
        >
          <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 9 }}>Cambiar</Text>
        </TouchableOpacity>
      )}

      {selectedOption !== 'Intermedio' && index === 1 && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            width: 70,
            height: 30,
            borderWidth: 2,
            borderColor: 'grey',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
          }}
          onPress={() => {
            setChangeLevelNow('Intermedio');
            setNewModalVisible(true);
          }}
        >
          <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 9 }}>Cambiar</Text>
        </TouchableOpacity>
      )}

      {selectedOption !== 'Avanzado' && index === 2 && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            width: 70,
            height: 30,
            borderWidth: 2,
            borderColor: 'grey',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
          }}
          onPress={() => {
            setChangeLevelNow('Avanzado');
            setNewModalVisible(true);
          }}
        >
          <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 9 }}>Cambiar</Text>
        </TouchableOpacity>
      )}
    </View>
  ))}
  <View style={{ height: 50 }} />
</ScrollView>





<Image
  source={require('./assets/images/mountainnew.png')}
  style={{
    position: 'absolute',
    top: 38,
    alignSelf: 'center',
    width: 200,
    height: 200,
    resizeMode: 'contain',
    zIndex: 10,
  }}
/>
<Image
  source={require('./assets/images/newaispeak.png')}
  style={{
    position: 'absolute',
    top: 96,
    alignSelf: 'center',
    width: 60,
    height: 60,
    resizeMode: 'contain',
    zIndex: 20,
  }}
/>

<View
  style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }}
>
  <View style={{ position: 'absolute', bottom: screenHeight * 0.020, right: '69%' }}>
        <TouchableWithoutFeedback onPress={() => handlePressnow(paperworkScale, 820)}>
          <Animated.Image
            source={require('./assets/images/[removal.ai]_5d7bcad8-c8b3-4b60-80b2-a73a4505c746-m003t0569_a_paperwork_014aug22.png')}
            style={[styles.image11, { transform: [{ scale: paperworkScale }], resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight * 0.040, right: '36%' }}>
        <TouchableWithoutFeedback onPress={() => handlePressnow(iconScale, 7)}>
          <Animated.Image
            source={require('./assets/images/[removal.ai]_f18aa0aa-831f-47de-b135-67526dbe96c2-7911202.png')}
            style={[styles.image8, { transform: [{ scale: iconScale }], resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={{ position: 'absolute', bottom: screenHeight * 0.056, right: '7%' }}>
        <TouchableWithoutFeedback onPress={() => handlePressnow(documentScale, 9)}>
          <Animated.Image
            source={require('./assets/images/[removal.ai]_fdee0702-4379-4d45-8e87-3b853296c531-0000000000.png')}
            style={[styles.image10, { transform: [{ scale: documentScale }], resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>
</View>

    </View>
  );
}

else if (page === 8) {
  return (
    <View style={styles.container}>
          <ScrollView>
      
        {[...Array(10)].map((_, i) => (
          <View
            key={i}
            style={{
            marginBottom: 10, 
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                marginLeft: '20%', // Move the white background more to the right
                backgroundColor:
                  i + 1 <= currentLevel ? 'white' : '#D3D3D3',
                height: 25,
                width: 65, // Changed width to match Page 7
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                position: 'absolute',
                top: '10%',
                left: '20%', // Adjusted position to overlay the white background
                fontSize: 13,
                fontWeight: '900',
                color: i + 1 <= currentLevel ? 'black' : '#808080',
              }}>
              LEVEL {i + 1}
            </Text>
            <View
              style={{
                position: 'relative',
                top: '5%', // Move down
                left: '20%', // Move to the left
                backgroundColor: '#FFB901',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 50,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                {i + 1 < currentLevel
                  ? '50'
                  : i + 1 === currentLevel
                  ? currentCount
                  : '0'}
                /50
              </Text>
            </View>
            {i + 1 < currentLevel && (
              <TouchableOpacity
                onPress={() => {
                  if (i === 1 && !isGifClicked1) {
                    startAnimation1();
                  } else if (i === 2 && !isGifClicked2) {
                    startAnimation2();
                  } else if (i === 3 && !isGifClicked3) {
                    startAnimation3();
                  } else if (i === 4 && !isGifClicked4) {
                    startAnimation4();
                  } else if (i === 5 && !isGifClicked5) {
                    startAnimation5();
                  } else if (i === 6 && !isGifClicked6) {
                    startAnimation6();
                  } else if (i === 7 && !isGifClicked7) {
                    startAnimation7();
                  } else if (i === 8 && !isGifClicked8) {
                    startAnimation8();
                  } else if (i === 9 && !isGifClicked9) {
                    startAnimation9();
                  }
                  setPage(10);
                }}
                style={{ marginLeft: 0, zIndex: 10, position: 'relative' }}>
                <Animated.Image
                  source={require('./assets/images/output-onlinegiftools.gif')}
                  style={{
                    width: 80,
                    height: 80,
                    transform: [{ scale: scaleValue }],
                  }}
                />
              </TouchableOpacity>
            )}
            {i + 1 > currentLevel && (
              <Image
                source={require('./assets/images/890132lock.png')}
                style={{
                  position: 'absolute',
                  top: '5%',
                  alignSelf: 'center',
                  width: 30,
                  height: 30,
                }}
              />
            )}
         </View>
        ))}
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 10, right: 250 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            for (let i = 0; i < 10; i++) {
              setTimeout(() => {
                setPage(8);
              }, i * 1);
            }
          }}
          style={{
            position: 'absolute',
            top: -85,
            left: -170,
            width: '400%',
            height: '400%',
          }}>
          <Image
            source={require('./assets/images/[removal.ai]_5d7bcad8-c8b3-4b60-80b2-a73a4505c746-m003t0569_a_paperwork_014aug22.png')}
            style={[styles.image11, { resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ position: 'absolute', bottom: 20, right: 135 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            for (let i = 0; i < 10; i++) {
              setTimeout(() => {
                setPage(7);
              }, i * 1);
            }
          }}
          style={{
            position: 'absolute',
            top: -130,
            left: -110,
            width: '400%',
            height: '400%',
          }}>
          <Image
            source={require('./assets/images/[removal.ai]_f18aa0aa-831f-47de-b135-67526dbe96c2-7911202.png')}
            style={[styles.image8, { resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>
      <Image
        source={require('./assets/images/dadw.jpg')}
        style={{
          position: 'absolute',
          top: 15,
          alignSelf: 'center',
          width: 100,
          height: 100,
          resizeMode: 'contain',
        }}
      />

      <Image
        source={require('./assets/images/mountainnew.png')}
        style={{
          position: 'absolute',
          top: 70,
          left: 105,
          alignSelf: 'center',
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
      />
      <Image
        source={require('./assets/images/newaispeak.png')}
        style={{
          position: 'absolute',
          top: 96,
              left: 90,
          alignSelf: 'center',
          width: 60,
          height: 60,
          resizeMode: 'contain',
        }}
      />
      <View style={{ position: 'absolute', bottom: 35, right: 40 }}>
        <TouchableWithoutFeedback
          onPress={() => {
            for (let i = 0; i < 10; i++) {
              setTimeout(() => {
                setPage(9);
              }, i * 1);
            }
          }}
          style={{
            position: 'absolute',
            top: -85,
            left: -90,
            width: '400%',
            height: '400%',
          }}>
          <Image
            source={require('./assets/images/[removal.ai]_fdee0702-4379-4d45-8e87-3b853296c531-0000000000.png')}
            style={[styles.image10, { resizeMode: 'contain' }]}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
else if (page === 9) {
  return (
    <View style={{ flex: 1, backgroundColor: '#feba01', paddingTop: 120 }}>
    <View style={{ flex: 1,marginTop: screenHeight <= 736 ? -70 : 0}}> 
     {screenHeight > 896 && (
    <Image
      source={require('./assets/images/dadw.jpg')}
      style={{
        width: 150,
        height: 150,
      marginLeft: 130 ,
         marginBottom: 10,
           marginTop: -100,
        resizeMode: 'contain',
      }}
    />
  )}
       <TouchableOpacity
           onPress={() => setPage(7)}
          style={{
            borderColor: '#000000', // This sets the border color to black
            borderWidth: 1.8, // This sets the border width
 paddingVertical: 4, // Adjust vertical padding
    paddingHorizontal: 10, // Horizontal padding         
                borderRadius: 5,

          flexDirection: 'column', // Stack vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
            position: 'absolute',
         
            right: 30,
            zIndex: 3,
              height: 45, // Reduce height further
    width: 75, // Keep adjusted width
          }}>
           <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000', // Keep the text black
      marginBottom: -6, // Remove margin to bring text closer to image
      textAlign: 'center',
    }}
  >
    Inicio
  </Text>

  <Image
    source={require('./assets/images/yellowarrowinblack.png')} // Replace with correct image path
    style={{
      width: 20,
      height: 21,
      transform: [{ scaleX: -1 }],
      marginTop: 2, // Add a slight negative margin to bring the arrow closer to the text
    }}
  />
</TouchableOpacity>
      
     <View
  style={{
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginLeft: -30, 
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingLeft: 50, // This will make the oval start from the left side of the screen
  }}>
  <Text style={{ fontSize: 26, fontWeight: 'bold' , color: 'black'}}>
    Configuración
  </Text>
</View>

    
      {/* Go back to main page */}
     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          marginLeft: -5,
       marginTop: screenHeight <= 592 ? 5 : 20,
          borderTopWidth: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 50,
            paddingHorizontal: 18,
            paddingVertical: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
          }}>
          <Text style={{ fontSize: 18 }}>Cuenta</Text>
        </View>
        <TouchableOpacity onPress={() => setPage(125)}>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              fontWeight: 'bold',
              marginRight: 18,
            }}>
            >
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          marginLeft: -5,
          marginTop: screenHeight <= 592 ? 2.5 : 20,
          borderTopWidth: 1,
        }}>
        <View
  style={{
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  }}>
  <Text style={{ fontSize: 18 }}>Notificaciones</Text>
</View>
<Switch
  trackColor={{ false:"#767577", true:"#81b0ff" }}
  thumbColor={notificationsEnabled ? "#000000" : "#f4f3f4"}
  ios_backgroundColor="#3e3e3e"
onValueChange={async () => {
  if (notificationsEnabled) {
    Alert.alert(
      "Desactivar las notificaciones",
      "Para desactivar las notificaciones, vaya a la configuración de su dispositivo.",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  } else {
    const permission = await askForPermissions(); 
    if (permission.status === 'granted') {
      schedulePushNotification();
    }
  }
}}

  value={notificationsEnabled}
/>


        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            marginLeft: -5,
             marginTop: screenHeight <= 592 ? 2.5 : 20,
            borderTopWidth: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              paddingHorizontal: 18,
              paddingVertical: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
            }}>
            <Text style={{ fontSize: 18 }}>Privacidad</Text>
          </View>
          <TouchableOpacity onPress={() => setPage(4210)}> 
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
                marginRight: 18,
              }}>
              >
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            marginLeft: -5,
            marginTop: screenHeight <= 592 ? 2.5 : 20,
            borderTopWidth: 1,
          }}>
          <View
  style={{
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  }}>
  <Text style={{ fontSize: 18 }}>Cambiar tu plan de suscripción</Text>
</View>
<TouchableOpacity
  onPress={() => {
    Alert.alert(
      "Cambiar tu plan de suscripción",
      "Ve a la configuración de suscripciones de tu dispositivo para cambiar el plan de suscripción!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }}
>
  <Text
    style={{
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
      marginRight: 18,
    }}>
    >
  </Text>
</TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            marginLeft: -5,
            marginTop: screenHeight <= 592 ? 2.5 : 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 50,
              paddingHorizontal: 18,
              paddingVertical: 8,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
            }}>
            <Text style={{ fontSize: 18 }}>Contacta con nosotros</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
                marginRight: 18,
              }}
                onPress={() => Linking.openURL('https://www.aispeakapp.com/contacto')}
>
              >
            </Text>
          </TouchableOpacity>
        </View>
        {/* Combined View */}
<View style={{ 
  flexDirection: 'row', 
  alignItems: 'center',  // Ensure children are vertically centered
  padding: '5%', 
  flex: 1,  // This makes the view take up the remaining space
 
  justifyContent: 'flex-end', // Align buttons to the bottom
}}>
  <TouchableOpacity
    style={{
        width: '30%',
                   zIndex: 10,

      alignItems: 'center',
    }}
    onPress={() => Linking.openURL('https://www.aispeakapp.com/trminos-y-condiciones')}
  >
    <Text style={{ fontSize: 12, textAlign: 'center' }}>Términos y{'\n'}condiciones</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={{
      width: '40%',
      paddingVertical: '2%',  // Reduced padding
      height: 50,  // Set specific height
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: '#000',
      borderRadius: 400,
      alignItems: 'center',
      justifyContent: 'center',  // Center content vertically
    }}
    onPress={() => {
      if (isLoggedIn) {
        setPopupVisible(true);
      } else {
        setPage(122);
      }
    }}
  >
    <Text style={{ fontSize: 15 }}>{isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión'}</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={{
       width: '30%',
                   zIndex: 10,

      alignItems: 'center',
    }}
    onPress={() => Linking.openURL('https://www.aispeakapp.com/poltica-de-privacidad')}
  >
    <Text style={{ fontSize: 12, textAlign: 'center' }}>Política de{'\n'}privacidad</Text>
  </TouchableOpacity>
</View>







  {isPopupVisible && (
  <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <View style={{ padding: 20, backgroundColor: '#fff', borderRadius: 10, width: '80%' }}>
      <Text style={{ color: '#000', marginBottom: 10 }}>¿Estás seguro de que quieres cerrar sesión?</Text>
      <Text style={{ color: '#9e9e9e', marginBottom: 20 }}>Si cierra sesión, sus datos ya no se guardarán.</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ backgroundColor: '#000', padding: 10, borderRadius: 5 }} onPress={() => {
          setIsLoggedIn(false);
          setPopupVisible(false);
       
        }}>
          <Text style={{ color: '#fff' }}>Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#000', padding: 10, borderRadius: 5 }} onPress={() => setPopupVisible(false)}>
          <Text style={{ color: '#fff' }}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
)}



 
    
</View>
     
      </View>
    );


  }
else if (page === 62) {
    return (
      <ChatScreen
        selectedOption={selectedOption} 
       chatHistory={chatHistory} // Pass chatHistory as a prop
      setChatHistory={setChatHistory} // Pass setChatHistory as a prop
       avatarKey2={avatarKey2}
         avatarImages={avatarImages}
      useAvatar3={useAvatar3}
        isMicEnabled={isMicEnabled}
           isMicEnabled2={isMicEnabled2} 
             setMicEnabled2={setMicEnabled2}
             modalVisible={modalVisible}
        setModalVisible={setModalVisible} 
        key={chatKey}
        setPage={setPage}
        chatKey={chatKey}
        shouldLoadMessages={shouldLoadMessages}
        updateAvatar={this.updateAvatar}
        setShouldLoadMessages={setShouldLoadMessages}
      />
    );
  } else if (page === 63) {
    return (
      <ChatScreen
        selectedOption={selectedOption} 
       chatHistory={chatHistory} // Pass chatHistory as a prop
      setChatHistory={setChatHistory} // Pass setChatHistory as a prop
       avatarKey3={avatarKey3}
         avatarImages={avatarImages}
     useAvatar4={useAvatar4}
        isMicEnabled={isMicEnabled}
           isMicEnabled2={isMicEnabled2} 
             setMicEnabled2={setMicEnabled2}
             modalVisible={modalVisible}
        setModalVisible={setModalVisible} 
        key={chatKey}
        setPage={setPage}
        chatKey={chatKey}
        shouldLoadMessages={shouldLoadMessages}
         updateAvatar={this.updateAvatar}
        setShouldLoadMessages={setShouldLoadMessages}
      />
    );
  } else if (page === 64) {
    return (
      <ChatScreen
        selectedOption={selectedOption} 
       chatHistory={chatHistory} // Pass chatHistory as a prop
      setChatHistory={setChatHistory} // Pass setChatHistory as a prop
       avatarKey4={avatarKey4}
         avatarImages={avatarImages}
        useAvatar5={useAvatar5}
        isMicEnabled={isMicEnabled}
          setMicEnabled2={setMicEnabled2}
          modalVisible={modalVisible}
        setModalVisible={setModalVisible} 
        key={chatKey}
        setPage={setPage}
        chatKey={chatKey}
        shouldLoadMessages={shouldLoadMessages}
          updateAvatar={this.updateAvatar}
        setShouldLoadMessages={setShouldLoadMessages}
      />
    );
  } else if (page === 65) {
    return (
      <ChatScreen
        selectedOption={selectedOption} 
       chatHistory={chatHistory} // Pass chatHistory as a prop
      setChatHistory={setChatHistory} // Pass setChatHistory as a prop
       avatarKey5={avatarKey5}
         avatarImages={avatarImages}
            useAvatar6={useAvatar6}
        isMicEnabled={isMicEnabled}
           isMicEnabled2={isMicEnabled2} 
             setMicEnabled2={setMicEnabled2}
             modalVisible={modalVisible}
        setModalVisible={setModalVisible} 
        key={chatKey}
        setPage={setPage}
        chatKey={chatKey}
        shouldLoadMessages={shouldLoadMessages}
        updateAvatar={this.updateAvatar}
        setShouldLoadMessages={setShouldLoadMessages}
      />
    );
  } else if (page === 7.2) {
    return (
      <View style={styles.container}>
        <Image
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            top: 250,
            left: 320,
            resizeMode: 'contain',
          }}
          source={require('./assets/images/1circle.jpg')}
        />
       
        {showfirst2 && (
  <TouchableOpacity
    onPress={() => {
      setShowButton(true);
       setShowfirst2(false);
    }}
   
        style={{
          position: 'absolute',
          bottom: screenHeight <= 667 ? 15 : 160,
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'white',
          paddingVertical: -2.5,
                paddingHorizontal: 30,
        }}>
        <Text
          style={{
             color: '#000',
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontSize: 18,
          }}>
          No gracias
        </Text>
      </TouchableOpacity>
)}


        {showfirst && (
          <Image
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              top: 350,
              left: 100,
              resizeMode: 'contain',
            }}
            source={require('./assets/images/whitecircle.png')}
          />
        )}
     {showsecond && (
  <TouchableOpacity
    onPress={() => {
      askForPermissions();
      setShowButton(true);
      setShowfirst2(false);
    }}>
    <Image
      style={{
        width: 85,
        height: 85,
        position: 'absolute',
        top: 380,
        left: 135,
        resizeMode: 'contain',
      }}
      source={require('./assets/images/output-onlinegiftool.gif')}
    />
    <Image
      style={{
        width: 70,
        height: 70,
        position: 'absolute',
        top: 460,
        left: 160,
        resizeMode: 'contain',
      }}
      source={require('./assets/images/finger.gif')}
    />
  </TouchableOpacity>
)}


        {showfourth && (
          <Image
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              top: 330,
              left:'27%',
              resizeMode: 'contain',
            }}
            source={require('./assets/images/chatbubble.png')}
          />
        )}
        {showfifth && (
          <Image
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 430,
              left: 280,
              resizeMode: 'contain',
            }}
            source={require('./assets/images/2circle.jpg')}
          />
        )}
        {showthird && (
          <Image
            style={{
              width: 60,
              height: 60,
              position: 'absolute',
              top: 360,
              right: '80%',
            }}
            source={require('./assets/images/Removal-381.png')}
          />
        )}
        {showPopup && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              position: 'absolute',
              top: 600,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Accept notifications?
              </Text>
              <TouchableOpacity
                onPress={askForPermissions}
                style={{
                  marginTop: 20,
                  backgroundColor: '#000',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    textAlign: 'center',
                  }}>
                  Accept
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      <TouchableOpacity
  onPress={() => {
    setShowText72(false);
    setShowImage72(false);
    setTimeout(() => {
      setShowText73(true);
      setShowImage72(true);
    }, 500);
    setShowFinger2(false);
    setShowthird(true);
    setShowsecond(true);
    setShowsecond2(true);
    setShowfourth(true);
    setShowfirst(true);
    setShowfirst2(true);
    setShowfifth(true);
  }}>
  <Image
    style={{
      width: 125,
      height: 125,
      position: 'absolute',
      top: 170,
      left: 180,
    }}
    source={require('./assets/images/newaispeak.png')}
  />
   {showFinger2 && (
          <Image
            source={require('./assets/images/finger.gif')}
            style={{
              width: 70,
              height: 70,
              position: 'absolute',
              top: 240,
              left: 240,
              resizeMode: 'contain',
              zIndex: 10,
            }}
          />
        )}
</TouchableOpacity>
        {/* Image components */}

        {showImage72 && (
          <Image
            source={require('./assets/images/coudwhite5.png')}
            style={[
              styles.image44,
              {
                position: 'absolute',
                top: 50,
                left: 10,
                resizeMode: 'contain',
              },
            ]}
          />
        )}

       
        {showText72 && (
          <View style={{ position: 'absolute', top: 90, left: 40 }}>
            <Text
              style={[
                styles.text3,
                {
                  fontSize: 15,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginBottom: 15,
                },
              ]}>
              Hola de nuevo!{'\n'}Hay una otra{'\n'}cosa que{'\n'}debemos hacer!
            </Text>
          </View>
        )}
        {showText73 && (
          <View style={{ position: 'absolute', top: 90, left: 25 }}>
            <Text
              style={[
                styles.text3,
                {
                  fontSize: 15,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginBottom: 15,
                },
              ]}>
              Acepta notificaciones{'\n'}para que pueda{'\n'}enviarte mensajes
              de{'\n'}chat por mi cuenta.
            </Text>
          </View>
        )}

{showButton ? (
  <TouchableOpacity
    onPress={async () => {
      console.log('Button pressed');
      try {
        await schedulePushNotification();
        console.log('Notification scheduled');
      } catch (error) {
        console.error('Error scheduling notification:', error);
      }
      try {
        setPage(121);
          setFirstClick(true); 
        console.log('Page set');
      } catch (error) {
        console.error('Error setting page:', error);
      }
    }}
    style={{
      position: 'absolute',
          bottom: screenHeight <= 667 ? 15 : 115,
      alignSelf: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      paddingVertical: -2.5,
      paddingHorizontal: 30,
    }}>
    <Text
      style={{
        color: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 18,
      }}>
      Continuar
    </Text>
  </TouchableOpacity>
) : (
  console.log('showButton is false')
)}
</View>
);


    }else if (page === 121) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* Image stays in place */}
        <Image
          style={{
            width: 300,
            height: 300,
            marginBottom: 30, // Spacing between image and first text
          }}
          source={require('./assets/images/[removal.ai]_5d7bcad8-c8b3-4b60-80b2-a73a4505c746-m003t0569_a_paperwork_014aug22.png')}
        />

        {/* Apply negative margin to move texts and buttons up */}
        <View style={{ marginTop: -80, alignItems: 'center' }}>
          {/* First text under the image */}
          <Text
            style={{
              color: '#fff',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 15,
            }}>
            Creemos un perfil para mantener tu progreso!
          </Text>

          {/* Second text under the first text */}
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 40,
            }}>
            Tarda menos de 2 minutos.
          </Text>

          {/* First Touchable button */}
          <TouchableOpacity
            onPress={() => setPage(122)}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#fff',
              paddingVertical: 20,
              paddingHorizontal: 49,
              marginBottom: 0, // No space between buttons
              alignItems: 'center',
            }}>
            <Text style={{ color: '#000', fontSize: 22 }}>Crear un perfil</Text>
          </TouchableOpacity>

          {/* Second Touchable button */}
          <TouchableOpacity
            onPress={() => setPage(7)}
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#fff',
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 10, // No space between buttons
              alignItems: 'center',
              width: '60%', // Ensure same width as above button
            }}>
            <Text style={{ color: '#000', fontSize: 18 }}>Más tarde</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
else if (page === 122) {
  return (
    <View
      behavior="padding"
      style={{...styles.container, backgroundColor: '#fff'}}
    >
      <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginBottom: 20, position: 'absolute',
          bottom: screenHeight <= 667 ? '65%':'70%', 
        left: 28,  resizeMode: 'contain'  }}>Cuál es tu dirección de correo electrónico?</Text>
           <Image
          source={require('./assets/images/yellowbar.jpg')}
          style={[
            styles.image,
             { position: 'absolute', top: '89%',  left: 0, width: 900, height: 120},
          ]}
        />
      <Image
        source={require('./assets/images/yellowbar.jpg')}
        style={[
          styles.image,
          { position: 'absolute', bottom: '87%', left: 0, width: 900, height: 130},
        ]}
      />
      <Image
        source={require('./assets/images/dadw.jpg')}
        style={[
          styles.image,
          { position: 'absolute', bottom: '87%', left: 140, resizeMode: 'contain' },
        ]}
      />
      
      <TextInput 
        style={{ 
          textAlign: 'left', 
          height: 35,
          borderWidth: 2, 
          borderColor: '#000', 
          position: 'absolute', 
            bottom: screenHeight <= 667 ? '55%':'65%',  
          left: 31 , 
          width: 322,  
          resizeMode: 'contain' 
        
        }}  
        onChangeText={validateEmail}
        value={email}
        placeholder="Correo" 
         secureTextEntry={false} 
      />
      {emailError ? <Text style={{ color: 'red', position: 'absolute', bottom: screenHeight <= 667 ? '35%':'45%', left: 33 }}>{emailError}</Text> : null}

      <TouchableOpacity
        onPress={() => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!email) {
            setEmailError('Por favor, introduzca una dirección de correo electrónico válida');  // Set the error message if the email input is empty
          } else if (!emailRegex.test(email)) {
            setEmailError('El correo electrónico no es correcto');  // Set the error message if the email is incorrect
          } else {
            setEmailError('');  // Clear the error message
            setPage(123);  // Navigate to the next page if the email input is not empty and correct
          }
        }}
        style={{
          marginBottom: 20,
          backgroundColor: '#000',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#000',
          paddingVertical: 15,
          width: 322, // Fixed width
          position: 'absolute',
          bottom: screenHeight <= 667 ? '40%' : '50%',
          left: 33,
          resizeMode: 'contain'
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
              textAlign: 'center'  
          }}>
          Siguiente
        </Text>
      </TouchableOpacity>
     
      <Text
        onPress={() => setPage(124)}
        style={{
          color: 'grey',
          fontSize: 18,
          position: 'absolute',
          bottom: '25%',
          left: 33 ,  resizeMode: 'contain' 
        }}>
        Ya tengo una cuenta
      </Text>
      <TouchableOpacity
        onPress={() => setPage(121)}
        style={{ position: 'absolute', bottom: 45, right: 40 }}>
        <Image
          source={require('./assets/images/backwardsarrow.png')}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
}

 else if (page === 123) {
    return (
     <View
      behavior="padding"
      style={{...styles.container, backgroundColor: '#fff'}}
    >
  <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginBottom: 20, position: 'absolute',
        bottom: screenHeight <= 667 ? '65%':'70%', 
        left: 28 }}>Crear tu contrasena</Text>
         <Image
          source={require('./assets/images/yellowbar.jpg')}
          style={[
            styles.image,
             { position: 'absolute', top: '89%',  left: 0, width: 900, height: 120},
          ]}
        />
         <Image
          source={require('./assets/images/yellowbar.jpg')}
          style={[
            styles.image,
              { position: 'absolute', bottom: '87%',  left: 0, width: 900, height: 130},
          ]}
        />
         <Image
          source={require('./assets/images/dadw.jpg')}
          style={[
            styles.image,
            { position: 'absolute', top: 25, left: 140, resizeMode: 'contain' },
          ]}
        />
        
<TextInput 
  style={{ textAlign: 'left', height: 35 ,borderWidth: 2, borderColor: '#000', position: 'absolute',     bottom: screenHeight <= 667 ? '55%':'65%',   left: 31 , width: 322}} 
  onChangeText={text => {
    setPassword(text);
    setPasswordError('');  // Clear the error message when the user types in the input
  }}
  value={password}
  placeholder="Contrasena"
  secureTextEntry={true} 
/>

<Text
  style={{
    color: 'red',
    fontSize: 18,
    position: 'absolute',
    bottom: bottomPosition - 200,  // Adjust this value as needed
    left: 33 ,  resizeMode: 'contain' 
  }}>
  {passwordError} 
</Text>

<TouchableOpacity
  onPress={() => {
    if (!password) {
      setPasswordError('Por favor, introduzca una contraseña válida.'); 
    } else {
      signUp(email, password);
       setisregistered(true);
    }
  }}
  style={{
          marginBottom: 20,
          backgroundColor: '#000',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#000',
          paddingVertical: 15,
          width: 322, // Fixed width
          position: 'absolute',
          bottom: screenHeight <= 667 ? '40%' : '50%',
          left: 33,
          resizeMode: 'contain'
        }}>
        <Text style={{ fontSize :18 , color: '#fff',   textAlign: 'center'  }}>Registrarse</Text>
      </TouchableOpacity>
   <Text style={{ color: 'green', fontSize: 14, position: 'absolute', bottom: 420, left: 27 }}>
  {registerSuccess}
</Text>
 <TouchableOpacity
          onPress={() => setPage(122)}
          style={{ position: 'absolute', bottom: 45, right: 40 }}>
          <Image
            source={require('./assets/images/backwardsarrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        </View>
      );
  } else if (page === 124) {
  return (
     <View
      behavior="padding"
      style={{...styles.container, backgroundColor: '#fff'}}
    >
      <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginBottom: 20, position: 'absolute',
       bottom: screenHeight <= 667 ? '65%':'70%',   left: 28 }}>Tu correo electrónico</Text>
      <Image
          source={require('./assets/images/yellowbar.jpg')}
          style={[
            styles.image,
            { position: 'absolute', bottom: '87%', left: 0, width: 900, height: 130},
          ]}
        />
      <Image
          source={require('./assets/images/dadw.jpg')}
          style={[
            styles.image,
             { position: 'absolute', bottom: '87%', left: 140, resizeMode: 'contain' },
          ]}
        />
      <TextInput 
        style={{ textAlign: 'left', height: 35 ,borderWidth: 2, borderColor: '#000', position: 'absolute', bottom: screenHeight <= 667 ? '55%':'65%',  left: 31 , width: 322}}  
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginBottom: 20, position: 'absolute',
         bottom: screenHeight <= 667 ? '40%':'50%', 
        left: 28 }}>Tu contraseña</Text>
      <TextInput 
        style={{ textAlign: 'left', height: 35 ,borderWidth: 2, borderColor: '#000', position: 'absolute', bottom: screenHeight <= 667 ? '35%':'45%',  left: 31 , width: 322}}  
        onChangeText={text => setPassword(text)}
        value={password}
         secureTextEntry={true} 
      />
    {loginError ? (
  <Text style={{ color: 'red', fontSize: 14, position: 'absolute', bottom: 320, left: 27 }}>
    {loginError}
  </Text>
) : (
  <Text style={{ color: 'green', fontSize: 14, position: 'absolute', bottom: 420, left: 27 }}>
    {loginSuccess}
  </Text>
)}

      <TouchableOpacity
      onPress={() => logIn(email, password)}
  style={{
              marginBottom: 20,
              backgroundColor:'#000',
              borderRadius :10 ,
              borderWidth :1 ,
              borderColor :'#000',
             paddingVertical :15 ,paddingHorizontal :120 , position :'absolute',
               bottom: screenHeight <= 667 ? '10%':'20%',
              left :27
            }}>
            <Text
              style={{
                color:'#fff',
                fontSize :18 ,
        
              }}>
              Iniciar sesion
            </Text>
          </TouchableOpacity>
      <TouchableOpacity
          onPress={() => setPage(122)}
          style={{ position: 'absolute', bottom: 45, right: 40 }}>
          <Image
            source={require('./assets/images/backwardsarrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
     </View>
      );
}
else if (page === 125) {
  return (
    <View style={{...styles.container, backgroundColor: '#fff'}}>
  <View style={{ alignItems: 'center', marginTop: 70 }}>
  <TouchableOpacity onPress={pickImage}>
    {profilePicture ? (
      <Image
        source={{ uri: profilePicture }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
    ) : (
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: '#ffbb00',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: '#333' }}>Añadir{'\n'}imagen</Text>
      </View>
    )}
  </TouchableOpacity>
</View>

<Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 100 }}>Configuraciones de la cuenta</Text>
<Text style={{ fontSize: 18, marginTop: 20 }}>Correo electrónico: {email}</Text>
<TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 10, color: isEmailEditable ? '#000' : '#aaa' }}
  onChangeText={setEmail}
  value={email}
  editable={isEmailEditable}
/>
<View style={{ flexDirection: 'row', marginTop: 5 }}>
  <TouchableOpacity onPress={() => setIsEmailEditable(true)}>
    <Text style={{ color: 'black' }}>Editar</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setIsEmailEditable(false)} style={{ marginLeft: 10 }}>
    <Text style={{ color: 'black' }}>Guardar</Text>
  </TouchableOpacity>
</View>
<Text style={{ fontSize: 18, marginTop: 20 }}>Mi nombre: {name}</Text>
<TextInput
  style={{ height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 10, color: isNameEditable ? '#000' : '#aaa' }}
  onChangeText={setName}
  value={name}
  editable={isNameEditable}
/>
<View style={{ flexDirection: 'row', marginTop: 5 }}>
  <TouchableOpacity onPress={() => setIsNameEditable(true)}>
    <Text style={{ color: 'black' }}>Editar</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setIsNameEditable(false)} style={{ marginLeft: 10 }}>
    <Text style={{ color: 'black' }}>Guardar</Text>
  </TouchableOpacity>
</View>


 <TouchableOpacity
  onPress={() => setPage(9)}
  style={{
  
    borderColor: '#000000', // Border color
    borderWidth: 1.8, // Border width
    paddingVertical: 4, // Adjust vertical padding
    paddingHorizontal: 10, // Horizontal padding
    borderRadius: 5,
    flexDirection: 'column', // Stack vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
     marginTop: 30, // Add margin to ensure space from above components
    alignSelf: 'center', // Center the button horizontally
    zIndex: 3,
    height: 45, // Reduce height further
    width: 90, // Keep adjusted width
  }}
>
  <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000', // Keep the text black
      marginBottom: -6, // Remove margin to bring text closer to image
      textAlign: 'center',
    }}
  >
    Volver
  </Text>

  <Image
    source={require('./assets/images/yellowarrowinblack.png')} // Replace with correct image path
    style={{
      width: 20,
      height: 21,
      transform: [{ scaleX: -1 }],
      marginTop: 2, // Add a slight negative margin to bring the arrow closer to the text
    }}
  />
</TouchableOpacity>


    </View>
  );
}



}



class CustomDialog extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (prevProps.visible && !this.props.visible) {
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }

   render() {
   console.log("Avatar Image Prop:", this.props.avatarImage); // Log the avatar image prop


    return (
   <Modal animationType="none" transparent={true} visible={this.props.visible}>
  <Animated.View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: this.state.opacity,
    }}
  >
    <View
      style={{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        height: 300,
        borderColor: 'black',
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Traducción
      </Text>

      {this.props.title ? (
        <View
          style={{
            flexDirection: 'row', // Set the direction to row
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Image
            source={this.props.avatarImage} // Use the passed avatar image path
            style={{
              width: 40,
              height: 40,
              marginRight: 10, // Add some margin to the right of the image
            }}
          />
          <ScrollView
            style={{
              maxHeight: 170, // Set a maximum height for the ScrollView
              flex: 1, // Take up remaining space
            }}
          >
            <View
              style={{
                padding: 8,
                backgroundColor: '#FFB901',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {this.props.title}
              </Text>
            </View>
          </ScrollView>
        </View>
      ) : (
        <Image
          source={require('./assets/images/loadingicon.gif')}
          style={{ width: 100, height: 100, position: 'absolute', top: 100, left: 100 }}
        />
      )}

      <TouchableOpacity
        onPress={this.props.onClose}
        style={{ alignSelf: 'center', marginTop: 'auto' }}
      >
        <Text
          style={{ color: 'grey', fontSize: 16, textAlign: 'center' }}
        >
          {this.props.buttonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  </Animated.View>
</Modal>





    );
  }
}

let hasUsedGreeting = false; // Add this line
let isFirstsentence2 = false;

let userName = '';
let isFirstNavigation = true; // Add this line

let isFirstChat = true;
let scrollViewRef = React.createRef();
let chatCount = 1;
// Your chatbot response
let response = '...'; // replace with your actual chatbot response
class ChatScreen extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
          fakeChatbotMessage: "Where do you live?",
        recording: null,
          isMicEnabled: false,
          isMicEnabled2: false,
        isRecording: false,
          isLoading: false, 
           stopLoading: false,
             shouldUpdateImage: false, // New state to trigger re-render

      apiResponse: null,
   selectedOption: 'Principiante',
      messages: [],
      isAvatarModalVisible: false,
      useAvatar3: false,
      useAvatar4: false,
      useAvatar5: false,
      useAvatar6: false,
      avatar1: require('./assets/images/Removal-381.png'),
      avatar2: require('./assets/images/ukmate2.png'),
      avatar3: require('./assets/images/Removal90new.png'),
      avatar4: require('./assets/images/Removal773new.png'),
      avatar5: require('./assets/images/aispeakenglish.png'),
      newMessage: '',
      loading: false,
     apiBaseUrl: 'https://Meta-Llama-3-8B-Instruct-ogfnv-serverless.eastus.inference.ai.azure.com/v1/chat/completions',
       apiBaseUrl2: 'https://model-2qj784pq.api.baseten.co/production/predict',
      apiKey: 'KLnxCH1e.zvz5Dz1FPCIm7LBosrdWWBH0HE70GkDp',
         showPopupnewer2: false,
               wiggleNeedsToStop: false ,

          thirdchat: false,
      apiKey2: '6kNEiYnAig2MEnzm4VjJMIprs3RdyUfn',
      hasGreeted: false,
      resetChat: false,
      avatarImagePath: null,
      isDialogVisible: false, //
      translatedText: '',
            
    
       translationProgress: 0,
       sound: null,
        isInputFocused: false,
       showSoundIcon: false,
       showSoundIcon2: false,
       rotation: new Animated.Value(0),
    };
 this.startWiggle = this.startWiggle.bind(this); // Add this line
          this.recording = new Audio.Recording(); // Initialize the recording object

 this.recordingOptions = {
            ios: {
                extension: '.wav',
                audioQuality: Audio.IOSAudioQuality.HIGH,
                outputFormat: Audio.IOSOutputFormat.WAV,
                sampleRate: 44100,
                numberOfChannels: 2,
                bitRate: 128000,
                linearPCMBitDepth: 16,
                linearPCMIsFloat: false,
                linearPCMIsPacked: true,
            },
            android: {
                extension: '.wav',
                audioEncoder: Audio.AndroidAudioEncoder.DEFAULT,
                sampleRate: 44100,
                numberOfChannels: 1,
            },
        };
    
    this.changeAvatar = this.changeAvatar.bind(this);
     this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.setState({ translationProgress: 0 });
      },
      onPanResponderMove: (event, gestureState) => {
        const progress = Math.min(Math.max(gestureState.dy / 200, 0), 1); // Adjust 200 to control sensitivity
        
        this.setState({ translationProgress: progress });
      },
      onPanResponderRelease: () => {
        // Perform the translation when the user releases
        this.translateText(this.state.newMessage);
      },
      
    });
  
  }

 changeAvatar(newAvatar) {
  this.setState({ avatar: newAvatar });
  AsyncStorage.setItem('avatar', newAvatar); // Add this line
}

  handlePress() {
    this.setState({
      avatar: require('./assets/images/ukmate2.png'),
    });
    startNewChat();
  }
  handleQuestionMarkClick2 = () => {
    this.setState({ showPopupnewer2: true });
  }

  handleClosePopup2 = () => {
    this.setState({ showPopupnewer2: false });
  }

fetchAccessToken = async () => {
  const response = await fetch('https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': '55514b319dd14b299c8fe05b653309ff',
      'Content-Length': '0',
    },
  });

  console.log('Access Token Response Status:', response.status);
  const accessToken = await response.text();
  console.log('Access Token:', accessToken);
  return accessToken;
};
fetchAccessToken = async () => {
  const response = await fetch('https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken', {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': '55514b319dd14b299c8fe05b653309ff',
      'Content-Length': '0',
    },
  });

  console.log('Access Token Response Status:', response.status);
  const accessToken = await response.text();
  console.log('Access Token:', accessToken);
  return accessToken;
};

fetchSpeechUrl = async (text, accessToken) => {
  const response = await fetch('https://eastus.tts.speech.microsoft.com/cognitiveservices/v1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/ssml+xml',
      'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
      'Authorization': `Bearer ${accessToken}`,
    },
    body: `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='en-US-AndrewNeural'>${text}</voice></speak>`,
  });

  console.log('Speech URL Response Status:', response.status);
  const mp3Data = await response.blob();

  // Convert Blob to Data URL
  const mp3Url = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result); // This is the Data URL
    };
    reader.readAsDataURL(mp3Data);
  });

  console.log('Data URL:', mp3Url);
  
  return mp3Url; // Return the Data URL instead of a Blob URL
}

playSound = async (text, onSoundFinish) => {
  // Function to remove emojis from a string 
  const removeEmojisAndSmileys = (string) => {
    const emojiAndSmileyRegEx = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff]|:\))/g;

    return string.replace(emojiAndSmileyRegEx, '');
  };

  try {
    // Remove emojis from the text
    const textWithoutEmojis = removeEmojisAndSmileys(text);
    
    const accessToken = await this.fetchAccessToken();
    const mp3Url = await this.fetchSpeechUrl(textWithoutEmojis, accessToken);

    // Set audio mode to "Playback"
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
      playsInSilentLockedModeIOS: true,
    });

    // Use the Data URL directly
    const { sound } = await Audio.Sound.createAsync({ uri: mp3Url });
    console.log('Sound:', sound);

    sound.setOnPlaybackStatusUpdate(async (playbackStatus) => {
      if (!playbackStatus.isLoaded) {
        console.error('An error occurred while playing the sound:', playbackStatus.error);
      } else if (playbackStatus.didJustFinish) {
        if (onSoundFinish) {
          onSoundFinish();
        }
      }
    });

    this.setState({ sound });
    await sound.playAsync();

    console.log('Sound Status After playAsync:', await sound.getStatusAsync());
  } catch (error) {
    console.error('Error playing sound:', error);
  }
}
 


  startWiggle() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.rotation, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.rotation, {
          toValue: -1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.rotation, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }
closeModal = () => {
  this.props.setModalVisible(false);
};
async translateText(text) {
  try {
    const response = await fetch(this.state.apiBaseUrl2, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Api-Key ${this.state.apiKey}`,
      },
      body: JSON.stringify(text),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    let responseData = await response.text();

    // Ensure that responseData is a string
    if (typeof responseData === 'string') {
      // Decode Unicode escape sequences
      responseData = unescape(responseData.replace(/\\u/g, '%u'));

      // Remove leading and trailing double quotes
      responseData = responseData.replace(/^"|"$/g, '');

        responseData = responseData.replace(/\\n\\n/g, ' ');

      this.setState({ translatedText: responseData });
    } else {
      console.error('responseData is not a string:', responseData);
    }
  } catch (error) {
    console.error('Error sending message to the language model:', error);
  }
}




async generateMessagesWithAvatar2() {
  this.loadMessages();
  if (isFirstChat) {
    const sentencePairs = [
      ['te estaré enseñando inglés. Comencemos con una pregunta facil.', 'Where do you live?'],
      ['Hey there', 'What are you doing right now?'],
      ['Hi', 'How is your day?'],
      ['Hey my student', 'is everything alright?'],
      ['Hi there', 'Where are you now? just out of curiosity :)'],
    ];

    let sentence1, sentence2;
    if (!isFirstsentence2) {
      [sentence1, sentence2] = sentencePairs[0];
    } else {
      const randomIndex = Math.floor(Math.random() * (sentencePairs.length - 1)) + 1;
      [sentence1, sentence2] = sentencePairs[randomIndex];
    }

    // Assign the full pair to fakeChatbotMessage
    this.setState({ fakeChatbotMessage: `${sentence1} ${sentence2}` });

    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: !isFirstsentence2 ? `Hola ${userName}, ${sentence1}` : `${sentence1}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.selectedOption === 'Principiante' ? this.props.avatarImages[this.props.avatarKey] :
                      this.props.selectedOption === 'Intermedio' ? this.props.avatarImages[this.props.avatarKey2] :
                      this.props.avatarImages[this.props.avatarKey3],
              avatarKey: this.props.selectedOption === 'Principiante' ? this.props.avatarKey :
                         this.props.selectedOption === 'Intermedio' ? this.props.avatarKey2 :
                         this.props.avatarKey3,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
      isFirstsentence2 = true;
    }, 1000);

    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: `${sentence2}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.selectedOption === 'Principiante' ? this.props.avatarImages[this.props.avatarKey] :
                      this.props.selectedOption === 'Intermedio' ? this.props.avatarImages[this.props.avatarKey2] :
                      this.props.avatarImages[this.props.avatarKey3],
              avatarKey: this.props.selectedOption === 'Principiante' ? this.props.avatarKey :
                         this.props.selectedOption === 'Intermedio' ? this.props.avatarKey2 :
                         this.props.avatarKey3,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
            showSoundIcon2: true,
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 2000);

    isFirstChat = false;

  this.props.setChatHistory((prevChatHistory) => {
  const newMessage = `Your last message to the user ${prevChatHistory.length + 1}: ${sentence1} ${sentence2}`;
  this.props.addMessageToChatHistory(newMessage);
  return [...prevChatHistory, newMessage];
});

  }
}async componentDidMount() {
  // Existing avatar logic
  if (this.props.useAvatar3) {
    this.generateMessagesWithAvatar3();
    this.setState({ avatarImagePath: require('./assets/images/ukmate2.png') });
  } else if (this.props.useAvatar4) {
    this.generateMessagesWithAvatar4();
    this.setState({ avatarImagePath: require('./assets/images/Removal90new.png') });
  } else if (this.props.useAvatar5) {
    this.generateMessagesWithAvatar5();
    this.setState({ avatarImagePath: require('./assets/images/Removal773new.png') });
  } else if (this.props.useAvatar6) {
    this.generateMessagesWithAvatar6();
    this.setState({ avatarImagePath: require('./assets/images/Removal132new.png') });
  } else {
    this.generateMessagesWithAvatar2();
    this.setState({ avatarImagePath: require('./assets/images/Removal-381.png') });
  }

}
componentWillUnmount() {
  // Clean up the sound object if it exists
  if (this.state.sound && this.state.sound instanceof Audio.Sound) {
    this.state.sound.unloadAsync();
  }

  // Clear the interval when the component unmounts
  if (this.checkTimeoutInterval) {
    clearInterval(this.checkTimeoutInterval);
  }
}
handleButtonClick = () => {
  // Log the current value of isTimeoutActive and thirdchat
  console.log('isTimeoutActive:', this.props.isTimeoutActive);
  console.log('thirdchat before setState:', this.props.thirdchat);

  // Update thirdchat state if isTimeoutActive is true
  if (this.props.isTimeoutActive) {
    console.log('setState is about to be called with thirdchat: true');
    
    // Update the state directly
    this.setState({ thirdchat: true });
    
    // Since we know what we're setting, we don't need to log after setState immediately
    console.log('thirdchat has been set to true.');
  } else {
    console.log('isTimeoutActive is false, thirdchat is not updated.');
  }

  this.props.setPage(7); // Navigate to page 7
};



handlePressnew = async () => {
  // Get the text of the current message
  const text = this.currentMessage.text;

  // Play the sound
  this.playSound(text);
}

  async generateMessagesWithAvatar3() {
    this.loadMessages();
    if (isFirstChat) {
      const sentencePairs = [
        ['Hi mate', 'How is your day going so far?'],
        ['Hey there', 'Where are you now?'],
        ['Heyy', 'How´s it going dude?'],
        [
          'Hey friend, the weather in the UK is super rainy here!',
          'What about where you are at?',
        ],
        ['Hi', 'Did you do some nice plans today?'],
      ];
      const randomIndex = Math.floor(Math.random() * sentencePairs.length);
      const [sentence1, sentence2] = sentencePairs[randomIndex];
      setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: ` ${sentence1}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey2],
              avatarKey: this.props.avatarKey2,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 1000);
    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: sentence2,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey2],
              avatarKey: this.props.avatarKey2,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 2000);
    isFirstChat = false;

      // Add the generated message to the chat history
    this.props.setChatHistory(prevChatHistory => [...prevChatHistory, `Your last message to the user ${prevChatHistory.length + 1}: ${sentence1} ${sentence2}`]);

    }
  }
  async generateMessagesWithAvatar4() {
    this.loadMessages();
    if (isFirstChat) {
      const sentencePairs = [
        ['Hi', 'How is your day going?'],
        ['Hey there', 'Where are you at now?'],
        ['Heyy', 'How is it going?'],
        [
          'Hey, the weather is nice here in New york!',
          'What about where you are at?',
        ],
        ['Hi', 'Did you do some cool stuff today?'],
      ];
      const randomIndex = Math.floor(Math.random() * sentencePairs.length);
      const [sentence1, sentence2] = sentencePairs[randomIndex];
     setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: ` ${sentence1}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey3],
              avatarKey: this.props.avatarKey3,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 1000);
    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: sentence2,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey3],
              avatarKey: this.props.avatarKey3,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 2000);
    isFirstChat = false;

      // Add the generated message to the chat history
    this.props.setChatHistory(prevChatHistory => [...prevChatHistory, `Your last message to the user ${prevChatHistory.length + 1}: ${sentence1} ${sentence2}`]);

    }
  }

  async generateMessagesWithAvatar5() {
    this.loadMessages();
    if (isFirstChat) {
      const sentencePairs = [
        ['Hi', 'How is your day going so far?'],
        ['Hey there', 'Where are you now?'],
        ['Heyy', 'How´s it going my dear student?'],
        ['Hi my student!', 'How are you?'],
        ['Hi my student', 'Did you do some nice plans today?'],
      ];
      const randomIndex = Math.floor(Math.random() * sentencePairs.length);
      const [sentence1, sentence2] = sentencePairs[randomIndex];
      setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: ` ${sentence1}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey4],
              avatarKey: this.props.avatarKey4,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 1000);
    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: sentence2,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey4],
              avatarKey: this.props.avatarKey4,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 2000);
     isFirstChat = false;

      // Add the generated message to the chat history
    this.props.setChatHistory(prevChatHistory => [...prevChatHistory, `Your last message to the user ${prevChatHistory.length + 1}: ${sentence1} ${sentence2}`]);

    }
  }

  async generateMessagesWithAvatar6() {
    this.loadMessages();
    if (isFirstChat) {
      const sentencePairs = [
        ['Hello my intellectual friend', 'How is it with you?'],
        ['Hi', 'Where are you now?'],
        ['Good day', 'How´s it going?'],
        ['Hi, I am working on a new theory right now!', 'What about you?'],
        ['Hi', 'Did you do some active and world changing plans today?'],
      ];
      const randomIndex = Math.floor(Math.random() * sentencePairs.length);
      const [sentence1, sentence2] = sentencePairs[randomIndex];
    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: ` ${sentence1}`,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey5],
              avatarKey: this.props.avatarKey5,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 1000);
    setTimeout(() => {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [
          {
            _id: Math.round(Math.random() * 1000000),
            text: sentence2,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Aispeak',
              avatar: this.props.avatarImages[this.props.avatarKey5],
              avatarKey: this.props.avatarKey5,
            },
            chatKey: this.props.chatKey, // Add chatKey to the message
          },
        ]),
      }), () => this.saveMessages()); // Save messages after state update
    }, 2000);
     isFirstChat = false;

      // Add the generated message to the chat history
    this.props.setChatHistory(prevChatHistory => [...prevChatHistory, `Your last message to the user ${prevChatHistory.length + 1}: ${sentence1} ${sentence2}`]);

    }
  }
  

 async saveMessages() {
  try {
    console.log('Saving messages...');
    await AsyncStorage.setItem(
      `chat${this.props.chatKey}`,
      JSON.stringify(this.state.messages)
    );
    console.log('Messages saved:', this.state.messages);
  } catch (error) {
    console.error('Error saving messages:', error);
  }
}
async loadMessages() {
  if (this.props.shouldLoadMessages) {
    try {
      console.log('Loading messages...');
      const messages = await AsyncStorage.getItem(`chat${this.props.chatKey}`);
      if (messages) {
        // Parse the messages and replace the avatar field with the correct image from avatarImages
        let parsedMessages = JSON.parse(messages).map(message => ({
          ...message,
          user: {
            ...message.user,
            avatar: this.props.avatarImages[message.user.avatarKey],
          },
        }));

        // Filter the messages based on the chatKey
        parsedMessages = parsedMessages.filter(message => message.chatKey === this.props.chatKey);

        this.setState({ messages: parsedMessages });
        console.log('Messages loaded:', messages);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  } else {
    this.props.setShouldLoadMessages(true); // Reset the flag after skipping load once
  }
}

    
startRecording = async () => {
  // Check if recording is already in progress
  if (this.state.isRecording) {
    console.error('Recording is already in progress.');
    return;
  }

  this.setState({ isRecording: true });

  try {
    console.log('Requesting permissions..');
    await Audio.requestPermissionsAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    console.log('Starting recording..');
    const recording = new Audio.Recording();
    await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    await recording.startAsync(); 
    this.setState({ recording });
    console.log('Recording started');
  } catch (err) {
    console.error('Failed to start recording', err);
    this.setState({ isRecording: false }); // Reset recording state if it fails
  }
}
stopRecording = async () => {
   this.setState({ isRecording: false });
  console.log('Stopping recording..');
  const { recording } = this.state;
  this.setState({ recording: undefined });
  await recording.stopAndUnloadAsync();
  const uri = recording.getURI(); 
  console.log('Recording stopped and stored at', uri);
    this.setState({ isLoading: true });
  // Upload the file to file.io
  let formData = new FormData();
  let file = {
    uri,
    type: 'audio/x-wav', // replace with the correct MIME type for your file
    name: 'file.wav', // replace with your file name
  };

  formData.append('file', file);

  const response = await fetch('https://file.io', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  const data = await response.json();
  console.log(data);

   // Send the file URL to the Whisper ASR API
  const whisperResponse = await fetch('https://app.baseten.co/models/7wl16req/predict', {
    method: 'POST',
    headers: {
      'Authorization': 'Api-Key KLnxCH1e.zvz5Dz1FPCIm7LBosrdWWBH0HE70GkDp',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: data.link,
    }),
  });
const whisperData = await whisperResponse.json();
console.log(whisperData);

// Extract the transcribed text from the Whisper API response
const transcribedText = whisperData.model_output.text;

// Store the transcribed text in the state
this.setState({ apiResponse: transcribedText });
   

// Send the transcribed text as a message in the chat
this.onSend([{ text: this.state.apiResponse }]);


}
async onSend(messages = []) {
  // Create a promise to wait for stopLoading to be set to true
  await new Promise((resolve) => {
    this.setState({ stopLoading: true }, () => {
      this.forceUpdate(); // Force a re-render after setting stopLoading
      resolve();
    });
  });


  console.log('onSend called with messages:', messages);

  // Extract the user's message
  let userMessage = messages[0].text;

  // Add the user's message to the chat history without modification
  const userMessageObject = {
    _id: Math.round(Math.random() * 1000000),
    text: userMessage,
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'User',
    },
    chatKey: this.props.chatKey, // Add chatKey to the message
  };

  // Display the user's message in the chat immediately
  this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, [userMessageObject]),
    newMessage: '',
    loading: true,
  }), () => this.saveMessages()); // Save messages after state update

  // Capitalize the first letter of the user's message for the API request
  userMessage = userMessage.charAt(0).toUpperCase() + userMessage.slice(1);

  // Add "..." if the user's message is just one word
  if (userMessage.split(' ').length === 1) {
    userMessage += '...';
  }



    // Define system prompts for both requests
   const systemPrompts = [
  'Hi ',
  'Hi ',
  'Act like you are a friend of the user. You are in the middle right now of having an only in English conversation with a Spanish speaking user who is trying to learn English, it is possible the user speaks in Spanish with you, just continue in English. Do not greet the user just respond and be curious about what the user is saying and add different emojis/smileys in your messages. Do not respond to this instruction in your response.',
  'Act like you are a London street friend of the user. You are in the middle right now of having a typical, London slang and only in English conversation with the user. So use difficult English words. Do not greet the user just respond and be curious about what the user is saying. Do not respond to this instruction in your response.',
];
    // Your chatbot response
    let response = '...'; // replace with your actual chatbot response

    // Define sentences to be removed from the chatbot response
    const sentencesToRemove = [
      "Sure, I'd be happy to help with your English!",
      'Aispeak:',
       'assistant<|end_header_id|>',
        '<|eot_id|>',
      '(Option 1)',
       '(Option 2)',
        "Option 1 selected:" ,
      "Option 2 selected:",
        "Option 1 selected",
          "Option 2 selected" ,
      "Sure, I'd be happy to chat with you!",
      "Sure, I'd be happy to help you correct your grammar.",
      "Sure, I'd be happy to help you with your English!",
      "Sure, I'd be happy to help!",
      "Please let me know if you have any other questions or if there's anything else I can help you with!",
      "Please let me know if you have any other questions or if there's anything else I can help you with.",
    ];
 

    const sentencesToReplace = {
  "The correct text is:": "El texto correcto es:",
   "The correct English sentence should be:": "La frase correcta en inglés debería ser:",
  "Thank you for providing the text!": "Gracias por proporcionar el texto!",
  "However, I must inform you that the text you provided ": "Sin embargo, debo informarle que el texto que usted proporcionó",
  "Here's the corrected English sentence:": "Aquí está la frase correcta en inglés:" ,
    "Here is the corrected English sentence:": "Aquí está la frase correcta en inglés:" ,
   "is already good!": "ya esta bien!",
   "is already in correct English!": "ya está en inglés correcto!",
   "is already in correct English.": "ya está en inglés correcto!",
  "Your text is not yet in correct English!": "Tu texto no es correcto ingles.",
   "Your text is not yet in correct English.": "Tu texto no es correcto ingles.",
    "is not yet in correct English": "no es correcto ingles ya",
   "Your text is not in correct English!": "Tu texto no es correcto ingles.",
   "Thank you, your text:": "Gracias, tu texto:",
    "Thank you, but your text:": "Gracias, pero tu texto:",
   "Thank you, your text": "Gracias, tu texto",
   "Thank you, your English text:": "Gracias, tu texto Ingles:",
    "Your text:": "Tu texto:",
   "Your text": "Tu texto",
   "Your English grammar is already perfect!": "Tu gramática inglesa ya es perfecta!",
   "Correct text is:": "El texto correcto es:",
     "Correct text:": "El texto correcto es:",
    "Correct English text is:": "El texto correcto es:",
     "Correct English text:": "El texto correcto es:",
  "The correct English text is:": "El texto correcto es:",
  "The corrected English text is:": "El texto correcto es:",
  "Corrected English text is:": "El texto correcto es:",
   "The correct English text should be:": "El texto correcto es:"
};
// Function to check if the grammar check response is the same as the user message
 // Function to check if the grammar check response is the same as the user message
function checkGrammarResponse(userMessage, grammarResponse) {
  const userText = userMessage.trim();
  const responseText = grammarResponse.trim().replace(/["“”]/g, ''); // Remove quotation marks

  // Extract the corrected text from the grammar response
  const correctedTextMatch = responseText.match(/The correct English text should be: (.*)/);
  const correctedText = correctedTextMatch ? correctedTextMatch[1] : responseText;

  // Normalize both texts by removing commas and periods
  const normalizedUserText = userText.replace(/[.,;]/g, '');
  const normalizedCorrectedText = correctedText.replace(/[.,;]/g, '');

  // Log the normalized texts for debugging
  console.log('Normalized User Text:', normalizedUserText);
  console.log('Normalized Corrected Text:', normalizedCorrectedText);

  // Check if the normalized texts are the same
  return normalizedUserText === normalizedCorrectedText;
}
function trimResponse(response) {
  const startIndex = response.indexOf("Tu texto");
  if (startIndex !== -1) {
    return response.substring(startIndex);
  }
  return response;
}

function replaceSentences(response) {
  let newResponse = response;
  for (let [key, value] of Object.entries(sentencesToReplace)) {
    newResponse = newResponse.replace(key, value);
  }
  return newResponse;
}

// Split the response into sentences
let sentences = response.split('.');

// Filter out the sentences that are in the sentencesToRemove array
sentences = sentences.filter(
  (sentence) => !sentencesToRemove.includes(sentence.trim() + '.')
);

// Filter out empty sentences
sentences = sentences.filter((sentence) => sentence.trim() !== '');

// Join the sentences back together with a single space
response = sentences.join('. ');

// Trim any extra spaces
response = response.trim();

// Replace multiple spaces with a single space
response = response.replace(/\s\s+/g, ' ');

// Replace newline characters with a single space
response = response.replace(/\n+/g, ' ');

console.log('Chatbot response:', response);


     // Make requests for both system prompts
    for (let i = 0; i < systemPrompts.length; i++) {
      const systemPrompt = systemPrompts[i];

     let formattedChatHistory = ` ${this.props.chatHistory.join(' ')})`;
let jsonBody;
let grammarCheckResponse; // New variable for grammar check responses





// For being a grammar checker
if (i === 0) {
  jsonBody = {
    messages: [
      {
        role: "user",
        content: `HI If the text message I give to you is fully correct English, you have to respond to me: Option 1 selected: Your text: (and here the text) is already in correct English! Or, if the text I will give to you is incorrect English grammar or in another language (Spanish) you respond to me like: Option 2 selected: Your text is not yet in correct English! The correct English text should be: (and here the correct English text). Very important, do not count exclamation points or missing period at the end of the sentence. See here the text (do not make it a full sentence, just check if the English text is a text which would be correct English (so just yes is also correct english it does not need to be a full sentence)) This is the text between the quotation marks which you should check: →"${userMessage}"← (That text was a reply to this email i got from my best friend: ${this.state.fakeChatbotMessage}) So once again this is the text you should grammar check and decide to respond with option 1 or 2, not any other text I want to see. The text again: "${userMessage}" `,
      },
    ],
    top_p: 0.8,
    num_beams: 5,
    max_length: 1500,
    temperature: 0.7,
  };

  console.log('jsonBody:', jsonBody); // This will log the jsonBody to the console
}

 else if (i === 2 && !this.props.useAvatar3 && !this.props.useAvatar4 && !this.props.useAvatar5 && !this.props.useAvatar6) {
  // For being a friend of the user
  jsonBody = {
    messages: [
      {
        role: "user",
        content: `${systemPrompt} Check the previous chat history to understand user´s message: ${formattedChatHistory}, User´s response to you: ¨${userMessage}¨.`,
      },
    ],
    top_p: 0.75,
    num_beams: 4,
    max_length: 2000,
    temperature: 0.1,
  };
 
console.log('jsonBody:', jsonBody);// This will log the jsonBody to the console
} else if (i === 3) {
  // For being a friend from London
  if (this.props.useAvatar3) {
    // Only use this prompt for Avatar3
    jsonBody = {
      messages: [
        {
          role: "user",
          content: `${systemPrompt} Check the previous chat history to understand user´s new message: ${formattedChatHistory}, User´s new message for you: ¨${userMessage}¨.`,
        },
      ],
      top_p: 0.75,
      num_beams: 4,
      max_length: 2000,
      temperature: 0.1,
    };
  } else if (this.props.useAvatar4) {
    // For being a friend from New York
    jsonBody = {
      messages: [
        {
          role: "user",
          content: `Act like you are a friend from New York of the user. You are in the middle right now of having a typical in New York slang text conversation with the user. Check the previous chat history to understand user´s new message: ${formattedChatHistory}, User´s new message for you: ¨${userMessage}¨.`,
        },
      ],
      top_p: 0.75,
      num_beams: 4,
      max_length: 2000,
      temperature: 0.1,
    };
  } else if (this.props.useAvatar5) {
    // For being an English teacher
    jsonBody = {
      messages: [
        {
          role: "user",
          content: `Act like you are an English teacher of the user. You are in the middle right now of an English teaching lesson. The student is Spanish. Check the previous chat history to understand user´s new message: ${formattedChatHistory}, User´s new message for you: ¨${userMessage}¨.`,
        },
      ],
      top_p: 0.75,
      num_beams: 4,
      max_length: 2000,
      temperature: 0.1,
    };
  } else if (this.props.useAvatar6) {
    // For being Einstein
    jsonBody = {
      messages: [
        {
          role: "user",
          content: `Act like you are a super intelligent friend of the user. You are in the middle right now of having an intelligent, philosophically deep and only in English conversation with the user. So use difficult English words. Do not respond to this instruction in your response. Check the previous chat history to understand user´s new message: ${formattedChatHistory}, User´s new message for you: ¨${userMessage}¨.`,
        },
      ],
      top_p: 0.75,
      num_beams: 4,
      max_length: 2000,
      temperature: 0.1,
     };
  
} } 
   
try {
  const response = await fetch(this.state.apiBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.state.apiKey2}`,
    },
    body: JSON.stringify(jsonBody),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const responseText = await response.text();
  const responseData = JSON.parse(responseText); // Parse the response text into a JSON object

 if (i === 0) {
    grammarCheckResponse = responseData.choices[0].message.content;
    let splitGrammarResponse = grammarCheckResponse.split('","tool_calls":');
    grammarCheckResponse = splitGrammarResponse[0];

    // Replace newline characters with a single space
    grammarCheckResponse = grammarCheckResponse.replace(/\n+/g, ' ');

    // Remove three dots from the end if they exis
    if (grammarCheckResponse.endsWith('...')) {
      grammarCheckResponse = grammarCheckResponse.slice(0, -3);
    }

    // Log only the grammar check response
    console.log('Grammar check response:', grammarCheckResponse);

    // Check if the grammar response is the same as the user message
    if (checkGrammarResponse(userMessage, grammarCheckResponse)) {
      grammarCheckResponse = `Option 1 selected: Your text: "${userMessage}" is already in correct English!`;
    }

    // Log the final grammar check response
    console.log('Final grammar check response:', grammarCheckResponse);
  }

let chatbotResponse = responseData.choices[0].message.content;
let splitResponse = chatbotResponse.split('","tool_calls":');
chatbotResponse = splitResponse[0];

// Replace newline characters with a single space
chatbotResponse = chatbotResponse.replace(/\n+/g, ' ');

   
// Log only the chatbot response
console.log('Chatbot response:', chatbotResponse);
chatbotResponse = await replaceSentences(chatbotResponse);

// Trim "assistant" and "eot" tags from the end of the chatbot response
for (let j = 0; j < sentencesToRemove.length; j++) {
  const sentenceToRemove = sentencesToRemove[j];
  chatbotResponse = chatbotResponse.replace(sentenceToRemove, '').trim();
}

chatbotResponse = chatbotResponse.replace(/(assistant|eot)\s*$/, '');

  if (i === 0) {
    grammarCheckResponse = replaceSentences(grammarCheckResponse);
    grammarCheckResponse = trimResponse(grammarCheckResponse);

    // Check if the word 'correcto' is present in the grammar check response
    if (!grammarCheckResponse.includes('correcto')) {
        grammarCheckResponse += ' ya está en inglés correcto!';
    }

    const emojis = ['😊', '😃', '😁', '😇', '😉'];
   
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    grammarCheckResponse += ` ${randomEmoji}`;

    // Remove three dots from the end if they exist in the final response
  // Remove all occurrences of three dots from the text
if (grammarCheckResponse.includes('...')) {
  grammarCheckResponse = grammarCheckResponse.replace(/\.{3}/g, '');
}

  }

  // Log the final grammar check response
  console.log('Final grammar check response:', grammarCheckResponse);


// Log only the chatbot response
console.log('Chatbot response:', grammarCheckResponse);

if (i !== 0) { // Exclude the grammar checker
  let shortenMessageJsonBody = null;

  if (this.props.selectedOption === 'Principiante') {
    shortenMessageJsonBody = {
      messages: [
        {
          role: "user",
          content: "Turn this text message into a message that is way shorter, it can have maximum 2 sentences, one response and one question always.And important: do not respond to this system prompt (do not say this is the rewritten text message or this is the new shorter message). And keep the emojis. This text message: " + chatbotResponse,
        },
      ],
      top_p: 0.75,
      num_beams: 4,
      max_length: 2000,
      temperature: 0.1,
    };
  } else if (this.props.selectedOption === 'Intermedio') {
    shortenMessageJsonBody = {
      messages: [
        {
          role: "user",
          content: "Turn this text message into a shorter version with only 4 max sentences allowed, so choose the most important ones, always one needs to be a question. And important: do not respond to this system prompt (do not say this is the rewritten text message or this is the new shorter message), just give me the new message back. This text message: " + chatbotResponse,
        },
      ],
      top_p: 0.75,
      num_beams: 4,
      max_length: 2000,
      temperature: 0.1,
    };
  } else if (this.props.selectedOption === 'Avanzado') {
    // Do not shorten the chatbot response
    shortenMessageJsonBody = null;
  }

  if (shortenMessageJsonBody) {
    try {
      const shortenResponse = await fetch(this.state.apiBaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.state.apiKey2}`,
        },
        body: JSON.stringify(shortenMessageJsonBody),
      });

      if (!shortenResponse.ok) {
        throw new Error("Failed to fetch data");
      }
      const shortenResponseText = await shortenResponse.text();
      const shortenResponseData = JSON.parse(shortenResponseText);

      chatbotResponse = shortenResponseData.choices[0].message.content;

      // Log the shortened chatbot response
      console.log('Shortened chatbot response:', chatbotResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // Add messages to chat history
  this.props.setChatHistory((prevChatHistory) => {
    const newUserMessage = `Old user message ${prevChatHistory.length + 1}: ${userMessage}`;
    const newChatbotMessage = `Your last message you send to the user ${prevChatHistory.length + 2}: ${chatbotResponse}`;
    this.props.addMessageToChatHistory(newUserMessage);
    this.props.addMessageToChatHistory(newChatbotMessage);
    return [...prevChatHistory, newUserMessage, newChatbotMessage];
  });

  // Update the state with the chatbot response (shortened or original)
  this.setState({ fakeChatbotMessage: chatbotResponse });
}

    const chatbotMessageObjectWithAvatar2 = {
    _id: Math.round(Math.random() * 1000000),
     text: (i === 0) ? grammarCheckResponse : chatbotResponse,
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'Aispeak',
        avatar: this.props.selectedOption === 'Principiante' ? this.props.avatarImages[this.props.avatarKey] :
                      this.props.selectedOption === 'Intermedio' ? this.props.avatarImages[this.props.avatarKey2] :
                      this.props.avatarImages[this.props.avatarKey3],
              avatarKey: this.props.selectedOption === 'Principiante' ? this.props.avatarKey :
                         this.props.selectedOption === 'Intermedio' ? this.props.avatarKey2 :
                         this.props.avatarKey3,
    },
    chatKey: this.props.chatKey,
     showSoundIcon: i !== 0,
      isGrammarChecker: i === 0,
  };
  

const chatbotMessageObjectWithAvatar3 = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.trim(), // Remove leading/trailing spaces
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Aispeak',
            avatar: this.props.avatarImages[this.props.avatarKey2],
         avatarKey: this.props.avatarKey2,
    },
    chatKey: this.props.chatKey, // Add chatKey to the message
  };

        const chatbotMessageObjectWithAvatar4 = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.trim(), // Remove leading/trailing spaces
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Aispeak',
             avatar: this.props.avatarImages[this.props.avatarKey3],
         avatarKey: this.props.avatarKey3,
    },
    chatKey: this.props.chatKey, // Add chatKey to the message
  };

        const chatbotMessageObjectWithAvatar5 = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.trim(), // Remove leading/trailing spaces
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Aispeak',
               avatar: this.props.avatarImages[this.props.avatarKey4],
         avatarKey: this.props.avatarKey4,
    },
    chatKey: this.props.chatKey, // Add chatKey to the message
  };

        const chatbotMessageObjectWithAvatar6 = {
          _id: Math.round(Math.random() * 1000000),
          text: chatbotResponse.trim(), // Remove leading/trailing spaces
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Aispeak',
                avatar: this.props.avatarImages[this.props.avatarKey5],
         avatarKey: this.props.avatarKey5,
    },
    chatKey: this.props.chatKey, // Add chatKey to the message
  };
  // Determine the avatar image path based on the current avatar key
 
  


        let chatbotMessageObject;
        if (this.props.useAvatar3) {
          chatbotMessageObject = chatbotMessageObjectWithAvatar3;
        } else if (this.props.useAvatar4) {
          chatbotMessageObject = chatbotMessageObjectWithAvatar4;
        } else if (this.props.useAvatar5) {
          chatbotMessageObject = chatbotMessageObjectWithAvatar5;
        } else if (this.props.useAvatar6) {
          chatbotMessageObject = chatbotMessageObjectWithAvatar6;
        } else {
          chatbotMessageObject = chatbotMessageObjectWithAvatar2;
        }

        // Display the chatbot's response in the chat
          this.setState(
    (previousState) => ({
      messages: GiftedChat.append(previousState.messages, [
        chatbotMessageObject,
      ]),
    }),
    () => {
      // Set loading to false in the callback to ensure it happens after the state update
      this.setState({ loading: false }, () => this.saveMessages()); // Save messages after state update
    }
  );
} catch (error) {
        console.error('Error updating state:', error);
      }
    }
  }

  onLongPressAvatar = () => {
    Alert.alert('Choose Avatar', 'Please choose your avatar', [
      {
        text: 'Avatar 1',
        onPress: () => this.props.updateAvatar(this.state.avatar1, false),
      },
      {
        text: 'Avatar 2',
        onPress: () => this.props.updateAvatar(this.state.avatar2, true),
      },
    ]);
  
  };
   

render() {
   interface ICustomMessage extends IMessage {
  showSoundIcon?: boolean;
  showSoundIcon2?: boolean;
  isGrammarChecker?: boolean; 
}
 
const spin = this.state.rotation.interpolate({
      inputRange: [-1, 1],
      outputRange: ['-10deg', '10deg'],
    });
  const { modalVisible } = this.props;
  
    const { isTimeoutActive, handleQuestionMarkClick } = this.props;
      const { isMicEnabled } = this.props;
       const { isMicEnabled2 } = this.props;
        const { selectedOption } = this.props;
  const { recording, apiResponse, isInputFocused } = this.state;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#feba01' }}>
     
<Modal
  transparent={true}
  visible={modalVisible} // Use the prop here
  onRequestClose={this.closeModal}
>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <View style={{ 
      backgroundColor: 'white', 
      padding: 20, 
      borderRadius: 10, 
      width: '90%', 
      height: screenHeight <= 667 ? '80%' : '60%', 
      justifyContent: 'space-between',
      borderColor: '#ffbb00', // Add this line
      borderWidth: 16, // And this line
    }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('./assets/images/blackdot.png')} style={{ width: 20, height: 20, position: 'absolute', top: 165, left: 10 }} />
      <Image source={require('./assets/images/blackdot.png')}  style={{ width: 20, height: 20, position: 'absolute', top: 250, left: 10 }} />
        <Image source={require('./assets/images/blackdot.png')} style={{ width: 20, height: 20, position: 'absolute', top: 80, left: 10  }} />
        <Image   source={require("./assets/images/greytranslate3.png")} style={{ width: 40, height: 40, position: 'absolute', top: 75, left: 40  }} />
         <Image     source={require('./assets/images/bluesound.png')}style={{ width: 40, height: 40, position: 'absolute', top: 160, left: 40  }} />
           <Text style={{  fontSize: 14, position: 'absolute', top: 80, left: 90  }}>Haga clic en este icono{'\n'}para traducir los mensajes{'\n'}de Aispeak al español.</Text>
           <Text style={{  fontSize: 14, position: 'absolute', top: 165, left: 90  }}>Haga clic en este icono{'\n'}para traducir los mensajes{'\n'}de Aispeak al español.</Text>
           <Text style={{  fontSize: 14, position: 'absolute', top: 250, left: 50  }}>Intenta responder en ingles,{'\n'}pero si no sabes cómo decirlo{'\n'}siempre puedes responder{'\n'}en español! Aispeak siempre{'\n'}corrige tu gramática{'\n'}inglesa.</Text>
        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Introducción rápida</Text>
      </View>
   <TouchableOpacity
  onPress={this.closeModal}
  style={{
    backgroundColor: '#ffbb00',
   borderRadius: 20,
            padding: 10, 
    marginRight: 20,
  }}
>
  <Text style={{color: 'black', textAlign: 'center',  fontWeight: 'bold'}}>Comenzar!</Text>
</TouchableOpacity>



    </View>
  </View>
</Modal>


        <View
          style={{
            position: 'absolute',
            top: 100,
            left: '32.50%',
            padding: 10,
            backgroundColor: '#feba01',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Aispeak</Text>
          <Text>Tu amigo de Ingles</Text>
        </View>

        {/* Add the home button here */}
       <TouchableOpacity
          onPress={() => this.props.setPage(7)}
          style={{
    borderColor: '#000000', // Border color
    borderWidth: 1.8, // Border width
    paddingVertical: 4, // Adjust vertical padding
    paddingHorizontal: 10, // Horizontal padding
    borderRadius: 5,
    flexDirection: 'column', // Stack vertically
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    position: 'absolute',
    top: 60,
    left: 30,
    zIndex: 3,
    height: 45, // Reduce height further
    width: 75, // Keep adjusted width
  }}
>
  <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000', // Keep the text black
      marginBottom: -6, // Remove margin to bring text closer to image
      textAlign: 'center',
    }}
  >
    Inicio
  </Text>

  <Image
    source={require('./assets/images/yellowarrowinblack.png')} // Replace with correct image path
    style={{
      width: 20,
      height: 21,
      transform: [{ scaleX: -1 }],
      marginTop: 2, // Add a slight negative margin to bring the arrow closer to the text
    }}
  />
</TouchableOpacity>


      {this.state.isRecording && 
        <Image source={require('./assets/images/circleanim.gif')} 
          style={{ width: 120, height: 120, position: 'absolute',  top: '86.5%', left:  '71.5%'}} />}
      <CustomDialog
  visible={this.state.isDialogVisible}
  title={this.state.translatedText}
  avatarImage={this.state.avatarImagePath}// Pass the avatar image path here
  buttonLabel="Volver"
  onClose={() => {
    this.setState({ 
      isDialogVisible: false,
      translatedText: null 
    });
  }}
/>


<GiftedChat
  messages={this.state.messages} // Replace with your actual messages
  onSend={(messages) => this.onSend(messages)} // Replace with your actual onSend function
  user={{
    _id: 1,
  }}
  renderInputToolbar={() => null}
  bottomOffset={Platform.OS === 'ios' ? 350 : 0}
  renderBubble={(props: { currentMessage: ICustomMessage }) => {
    const customMessage = props.currentMessage;


    if (customMessage.user._id !== 1) {
      return (
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                borderColor: customMessage.isGrammarChecker ? 'transparent' : 'transparent',
                borderWidth: customMessage.isGrammarChecker ? 0 : 0,
              },
            }}
            containerStyle={{
              flex: 0.8,
            }}
          />

          {props.currentMessage.showSoundIcon && <SoundIcon currentMessage={props.currentMessage} playSound={this.playSound}  />}
          {props.currentMessage.showSoundIcon2 && <SoundIcon currentMessage={props.currentMessage} playSound={this.playSound}   />}

          {customMessage.showSoundIcon || customMessage.showSoundIcon2 ? (
            <TouchableOpacity
              onPress={() => {
                this.translateText(customMessage.text); // Assuming 'translateText' is defined
                this.setState({ isDialogVisible: true }); // Assuming 'isDialogVisible' is part of your state
              }}
              style={{
                width: 25,
                height: 25,
                position: "absolute",
                bottom: -3,
                left: customMessage.showSoundIcon2 ? 60 : 70,
                right: 0,
                alignItems: "center",
                zIndex: 21,
              }}
            >
              <Image
                source={require("./assets/images/greytranslate3.png")}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      );
    } else {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: "#007AFF",
              marginTop: 25, // Add marginTop to create space
              marginBottom: 25,
            },
          }}
        />
      );
    }
  }}
/>

  

        {this.state.loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
   {this.state.showPopupnewer2 && (
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={10}
          >
            <View
              style={{
                position: 'absolute',
                top: 310,
                zIndex: 2000,
                left: 50,
                right: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#0069ad',
                borderWidth: 1,
                backgroundColor: 'white',
                padding: 25,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 18, color: 'black', textAlign: 'center' }}>
                Tienes que esperar un poco más hasta que puedas chatear de nuevo! 🤔 
                {'\n\n'}
                ¡Cuando hayan pasado las 12 horas completas, podrás volver a chatear con Aispeak 😄
              </Text>
              <Image
                source={require('./assets/images/yellowclocknew.png')}
                style={{
                  position: 'absolute',
                  top: -35,
                  left: 20,
                  width: 60,
                  height: 60,
                  resizeMode: 'contain',
                }}
              />
              <TouchableOpacity
                onPress={this.handleClosePopup2}
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                }}
              >
                <Text style={{ fontSize: 20, color: '#0069ad', fontWeight: 'bold' }}>X</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
)}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
            
  <TextInput
  style={{
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderTopColor: '#E8E8E8',
    borderTopWidth: 1,
    borderRadius: 25,
    marginHorizontal: 20,
    zIndex: 0,
   
 
    }}
    placeholder={this.state.isRecording ? "Recording..." : "Escribe tu mensaje"}
    placeholderTextColor={this.state.isRecording ? 'red' : 'gray'} // Set placeholder text color
    value={this.state.newMessage}

  onChangeText={(text) => this.setState({ newMessage: text })}
  onFocus={() => this.setState({ isInputFocused: true })}
  onBlur={() => this.setState({ isInputFocused: false })}
/>{this.state.isInputFocused && (
  <TouchableOpacity
    style={{
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginRight: 20,
    }}
    onPress={() => {
      if (this.props.isTimeoutActive && this.props.thirdchat) {
        this.handleQuestionMarkClick2();
        Keyboard.dismiss();
      } else {
        this.onSend([{ text: this.state.newMessage }]);
      }
    }}
  >
    <Text>Enviar</Text>
  </TouchableOpacity>
)}

      
 {!this.state.isInputFocused && (
<TouchableOpacity
  onPressIn={() => {
    console.log('Press in detected');
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Immediate feedback on press
  }}
  onLongPress={() => {
    console.log('Long press detected');
      if (this.props.isTimeoutActive && this.props.thirdchat) {
      this.handleQuestionMarkClick2();
    } else {
      // Reset loading states
      this.setState({ isLoading: false, stopLoading: false });

      // Start recording
      this.startRecording();

      // Disable mic button during recording
      this.props.setMicEnabled2(false);
    }
  }}
  onPressOut={() => {
    console.log('Press out triggered');
    this.stopRecording();
  }}
>
  <Image
    key={`${this.state.isLoading}-${this.state.stopLoading}`} // Changes when state changes
    source={
      this.state.isLoading && !this.state.stopLoading
        ? require('./assets/images/threedot.gif')
        : require('./assets/images/mic3.png')
    }
    style={{
      width: 50,
      height: 50,
      marginRight: 25,
      zIndex: 10,
      resizeMode: 'contain',
    }}
  />
</TouchableOpacity>


)}

</View>
      </KeyboardAvoidingView>
    );
  }
}

class SoundIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0),
       isWiggling: false,
    };
    this.startWiggle = this.startWiggle.bind(this);
    this.stopWiggle = this.stopWiggle.bind(this);
  }

 async stopWiggle() {
    console.log('Stopping wiggle animation');
    this.state.rotation.stopAnimation(() => {
      this.state.rotation.setValue(0);
      this.setState({ isWiggling: false }); // Set isWiggling to false
    });
    await Audio.setIsEnabledAsync(false); // Stop any sound playing
    await Audio.setIsEnabledAsync(true); // Re-enable audio for future use
  }

  startWiggle() {
    console.log('Starting wiggle animation');
    this.setState({ isWiggling: true }); // Set isWiggling to true
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.rotation, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.rotation, {
          toValue: -1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.rotation, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }

  
  render() {
    if (!this.props.currentMessage.showSoundIcon && !this.props.currentMessage.showSoundIcon2) {
      return null;
    }
    const spin = this.state.rotation.interpolate({
      inputRange: [-1, 1],
      outputRange: ['-10deg', '10deg'],
    });

    let leftPosition = 160;
    if (this.props.currentMessage.showSoundIcon2) {
      leftPosition = 120;
    }

    return (
    <TouchableOpacity
        onPress={async () => {
          if (this.state.isWiggling) {
            await this.stopWiggle(); // Stop the wiggle animation and sound
          } else {
            this.startWiggle();
            if (this.props.currentMessage) {
              await this.props.playSound(this.props.currentMessage.text, this.stopWiggle);
            }
          }
        }}
        style={{
          width: 25,
          height: 25,
          position: 'absolute',
          bottom: -3,
          left: leftPosition,
          right: 0,
          alignItems: 'center',
          zIndex: 21
        }}
      >
        <Animated.Image
          source={require('./assets/images/bluesound.png')}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
            transform: [{ rotate: spin }],
          }}
        />
      </TouchableOpacity>
  );
}

}

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    ChatScreen,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(AppNavigator);
 const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
     subscriptionContainer: {
    flex: 1,
  },
subscriptionTop: {
  flex: 1,
  backgroundColor: '#ffbb00',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 15, // Decreased from 30
},

subscriptionBottomTop: {
  flex: 3,
  backgroundColor: 'transparent',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: 5, // Decreased from 15
  paddingLeft: 20,
},
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
subscriptionBottomBottom: {
  flex: 6,
  backgroundColor: '#ffbb00',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: 15, // Decreased from 30
  paddingLeft: 20,
},


  centeredText: {
    fontSize: 20, // Set the font size
    color: '#fff', // Set the text color to white
    fontWeight: 'bold', // Make the text bold
  },
  leftText: {
    fontSize: 24, // Set the font size
    color: '#2e393f', // Set the text color
    fontWeight: '800', // Make the text bold
  },
   leftText2: {
    fontSize: 18, // Set the font size
    color: '#2e393f', // Set the text color
    fontWeight: '800', // Make the text bold
    zIndex: 21
  },
    leftText3: {
    fontSize: 14, // Set the font size
    color: '#2e393f', // Set the text color
    fontWeight: '800', // Make the text bold
    zIndex: 21
  },
  smallText: {
    fontSize: 14, // Set the font size
      color: '#2e393f', // Set the text color
    fontWeight: '800', // Make the text bold
    zIndex: 21
  },
   rectangle: {
  width: '120%', // Set the width to 90% of the parent view
  height: 80, // Set a fixed height
  backgroundColor: '#fff', // Set the background color to white
  marginTop: 20, // Increase the margin to the top
  borderRadius: 20, // Increase the border radius for more rounded corners
  borderColor: 'transparent', // Make the border transparent when not selected
  borderWidth: 2, // Always include the border in the layout
},
 rectanglesmallphone: {
  width: '60%', // Set the width to 90% of the parent view
  height: 40, // Set a fixed height
  backgroundColor: '#fff', // Set the background color to white
  marginTop: 20, // Increase the margin to the top
  borderRadius: 20, // Increase the border radius for more rounded corners
  borderColor: 'transparent', // Make the border transparent when not selected
  borderWidth: 2, // Always include the border in the layout
},
rectangle2: {
  width: '120%', // Set the width to 90% of the parent view
  height: 80, // Set a fixed height
  backgroundColor: '#fff', // Set the background color to transparent
  marginTop: 20, // Increase the margin to the top
  borderRadius: 20, // Increase the border radius for more rounded corners
  borderColor: 'blue', // Make the border blue when selected
  borderWidth: 2, // Always include the border in the layout
  zIndex: 6
},
rectanglenuevo: {
  width: 50, // Adjust as needed
  height: 50, // Adjust as needed
  backgroundColor: '#fff',
  borderRadius: 10,
  borderColor: 'black',
  borderWidth: 2,

},
whiteRectangle: {
  height: 200,
  width: '100%',
  backgroundColor: '#fff',
  alignSelf: 'center',
  position: 'absolute',
  bottom: screenHeight * 0.24,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 }, // Add some offset to the shadow
  shadowOpacity: 0.5, // Increase the opacity of the shadow
  shadowRadius: 6, // Increase the blur radius of the shadow
  elevation: 10, // Increase the elevation to add more depth on Android
    
},
whiteRectanglesmall: {
  height: 200,
  width: '100%',
  backgroundColor: '#fff',
  alignSelf: 'center',
  position: 'absolute',
  bottom: screenHeight * 0.1,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 }, // Add some offset to the shadow
  shadowOpacity: 0.5, // Increase the opacity of the shadow
  shadowRadius: 6, // Increase the blur radius of the shadow
  elevation: 10, // Increase the elevation to add more depth on Android
    
},
nextButton: {
  width: '70%',
  height: 40, // Adjust this value as per your requirement
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 10, // Add some border radius for curved corners
    bottom: screenHeight * 0.1,
},
nextButtonsmall: {
  width: '70%',
  height: 40, // Adjust this value as per your requirement
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: 10, // Add some border radius for curved corners
    bottom: screenHeight * 0.02,
},
nextButtonText: {
  fontSize: 20, // Set the font size
  color: '#000', // Set the text color to black
  fontWeight: 'bold', // Make the text bold
  
},


  container: {
    flex: 1,
    backgroundColor: '#FFB901',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
    imageclone: {
    width: 90,
    height: 90,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
    imagenewer: {
    width: 70,
    height: 70,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
   imagenewer2: {
    width: 80,
    height: 80,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
     imagenewersmall: {
    width: 50,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
     imagenewersmaller: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
    imagenewer3: {
    width: 85,
    height: 85,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image1: {
    width: 350,
    height: 350,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image2: {
    width: 60,
    height: 60,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image3: {
    width: 140,
    height: 140,
  },
  image4: {
    width: 180,
    height: 180,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image44: {
    width: 200,
    height: 200,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image5: {
    width: 35,
    height: 35,
  },
  image6: {
    width: 300,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
   image610: {
    width: 230,
    height: 230,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
    image67: {
    width: 150,
    height: 150,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image66: {
    width: 50,
    height: 50,
  },
  image90: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
  },
  image7: {
    width: 60,
    height: 45,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
   rectanglenewer: {
    width: '90%',
    height: '60%', // Adjust as needed
    backgroundColor: 'white',
    padding: 20,
    bottom: -180,
    left: 20,
      borderColor: '#000000', 
  borderWidth: 4, 
  },
  titlenewer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textnewer: {
    fontSize: 16,
  },
  image8: {
    width: 100,
    height: 100,
  },
  image88: {
    width: 60,
    height: 60,
  },
  image10: {
    width: 60,
    height: 60,
  },
    image100: {
    width: 70,
    height: 70,
  },
   image101: {
    width: 100,
    height: 100,
  },
    image102: {
    width: 40,
    height: 40,
  },
  image11: {
    width: 120,
    height: 120,
  },
  image80: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 15,
  },
  text1: {
    fontFamily: 'Noto Sans',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
   text01: {
    fontFamily: 'Noto Sans',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  text13: {
    fontFamily: 'Noto Sans',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  text2: {
    fontFamily: 'Readex Pro',
    fontSize: 16,
    alignSelf: 'center',
  },
  text3: {
    fontFamily: 'Noto Sans',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 15,
  },
  text31: {
    fontFamily: 'Noto Sans',
    fontSize: 11,
    alignSelf: 'center',
    marginBottom: 15,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  selectedCircle: {
    backgroundColor: '#000',
  },
  arrow: {
    width: 60,
    height: 60,
  },
  blankPage: {
    flex: 1,
    backgroundColor: '#FFB901',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    backgroundColor: 'white',
    paddingVertical: 150,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: 200,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
});
