// AppStyle.ts
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const Fonts: { [key: string]: TextStyle } = {
    f12w300: { fontSize: 12, fontWeight: '300' },
    f12w500: { fontSize: 12, fontWeight: '500' },
    f13w400: { fontSize: 13, fontWeight: '400' },
    f14: { fontSize: 14, fontWeight: '600', },
    f14w400: { fontSize: 14, fontWeight: '400', },
    f14w500: { fontSize: 14, fontWeight: '500', },
    f14w700: { fontSize: 14, fontWeight: '700', },
    f16: { fontSize: 16, fontWeight: '600' },
    f16w500: { fontSize: 16, fontWeight: '500' },
    f15: { fontSize: 15, fontWeight: '500' },
    f15w400: { fontSize: 15, fontWeight: '400' },
    f18: { fontSize: 18, fontWeight: '500' },
    f20w700:{fontSize:20, fontWeight:'700'},
    f24B: { fontSize: 24, fontWeight: 'bold', },
    f24w600: { fontSize: 24, fontWeight: '600' },
    f24w500: { fontSize: 24, fontWeight: '500' },
    f26w600: { fontSize: 26, fontWeight: '600' },
    f36w600: { fontSize: 36, fontWeight: '600' },
    f42w900: {fontSize:42, fontWeight:'900'},
    textcenter: { textAlign: 'center' },

};

export const FlexBox: { [key: string]: ViewStyle } = {
    flex1: { flex: 1 },
    flex020: { flex: 0.20 },
    flex015: { flex: 0.15 },
    flex025: { flex: 0.25 },
    flex030: { flex: 0.30, },
    flex035: { flex: 0.35, },
    flex040: { flex: 0.40, },
    flex045: { flex: 0.45, },
    flex050: { flex: 0.50 },
    flex060: { flex: 0.60 },
    flex070: { flex: 0.70 },
    flex080: { flex: 0.80 },
    flex090: { flex: 0.90 },
    flex095: { flex: 0.95 },
    row: { flexDirection: 'row' },
    justifyrowcenter: { flexDirection: 'row', alignItems:'center' , justifyContent:'center'},
    center: { justifyContent: 'center', alignItems: 'center' },
    rowspacebetween: { flexDirection: 'row', justifyContent: 'space-between' },
    rowspacebetweenalignscenter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    a: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    selfCenter: { alignSelf: 'center' },
    justifyContentEnd: {justifyContent:'flex-end'},
    alignItemCenter: {alignItems:'center'},
    justifyContentCenter:{justifyContent:'center'},
    justifyend: { justifyContent: 'flex-end' },
    rowend: { flexDirection: 'row', justifyContent: 'flex-end' },
    rowaligncenter: { flexDirection: 'row', alignItems: 'center', },
    justifyendaligncenter: { justifyContent: 'flex-end', alignItems: 'center' },
    rowjustCenter: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }
};

export const HeightStandard: ViewStyle = {
    flex: 1,
    height: '100%',
    width: '100%',
};

export const Margins: { [key: string]: ViewStyle } = {
    m5: { margin: 5 },


    mv15: { marginVertical: 15 },
    mv10: { marginVertical: 10 },
    mv20: { marginVertical: 20 },
    mv25: { marginVertical: 25 },
    mv30: { marginVertical: 30 },
    mv5: { marginVertical: 5 },


    ml10: { marginLeft: 10 },
    ml20: { marginLeft: 20 },
    ml30: { marginLeft: 30 },

    mt10: { marginTop: 10 },
    mt20: { marginTop: 20 },
    mt30: { marginTop: 30 },
    mt60: { marginTop: 60 },
    mt80: { marginTop: 80 },

    mh10: { marginHorizontal: 10 }



};

export const Padding: { [key: string]: ViewStyle } = {
    p5: { padding: 5 },
    p10: { padding: 10 },
    p16:{padding:16},
    p20: { padding: 20 },
    padding:{padding:16},
    ph10: { paddingHorizontal: 10 },
    ph20: { paddingHorizontal: 20 },
    ph16: {paddingHorizontal:16},
    pv: {paddingVertical:16},
    pv3: { paddingVertical: 3 },
    pv10: { paddingVertical: 10 },
    pv15: { paddingVertical: 15 },
    pv20: { paddingVertical: 20 },

};

// Combine all styles into a single object
const AppStyle = {
    Fonts,
    FlexBox,
    HeightStandard,
    Margins,
    Padding,
};

export default AppStyle;
