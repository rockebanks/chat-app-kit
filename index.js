import React from 'react';
import RNKit from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-agora';
import 'lottie-react-native';
import Navigation from 'react-navigation';
import {Badge,Button,ButtonGroup,Card,Input,ListItem,PricingCard,Tooltip,SocialIcon,Text,Divider,CheckBox,SearchBar,Icon,colors,getIconType,registerCustomIconType,normalize,Tile,Slider,Avatar,Rating,AirbnbRating,Header,Overlay,ThemeProvider,ThemeConsumer,ThemeContext,withBadge,withTheme} from 'react-native-elements';
import WebView from 'react-native-webview';
import Chat from './src/Chat';
import Storage from './src/Storage';
import NavUtils from './src/NavUtils';
import ScrollableTabView from './src/ScrollableTabView';
import ViewShot from "react-native-view-shot";
import QRCode from 'react-native-qrcode-svg';
import Svg, {Circle,Ellipse,G,TSpan,TextPath,Path,Polygon,Polyline,Line,Rect,Use,Symbol,Defs,RadialGradient,Stop,ClipPath,Pattern,Mask} from 'react-native-svg';
import LocalizedStrings from 'react-native-localization';
import RNIdle from 'react-native-idle';
import {LivePlayer} from "react-native-dbb-rtmp";
import * as Sentry from '@sentry/react-native';
const {ScrollableTabBar} = ScrollableTabView;
const {View,Image}  = RNKit;
Sentry.init({ 
    dsn: 'https://c7ae4ca91093490b804738da406be0e0@o388939.ingest.sentry.io/5226463',
});
module.exports = { 
    Navigation,
    NavUtils,
    EUIKit:{Shot:ViewShot,QRCode,View,Badge,Button,ButtonGroup,Card,Input,ListItem,PricingCard,Tooltip,SocialIcon,Text,Divider,CheckBox,SearchBar,Icon,colors,getIconType,registerCustomIconType,normalize,Tile,Slider,Avatar,Rating,AirbnbRating,Header,Overlay,ThemeProvider,ThemeConsumer,ThemeContext,withBadge,withTheme,Image},
    RNKit,
    WebView,
    React,
    Chat,
    Storage,
    LocalizedStrings,
    ScrollableTabView,
    ScrollableTabBar,
    RNIdle,
    LivePlayer,
    Svg:{Svg,Circle,Ellipse,G,Text:Svg.Text,TSpan,TextPath,Path,Polygon,Polyline,Line,Rect,Use,Image:Svg.Image,Symbol,Defs,RadialGradient,Stop,ClipPath,Pattern,Mask}
}