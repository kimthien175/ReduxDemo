import React from 'react';
import { Button, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import * as ActionType from '../Actions/Type';

const Adjust = ({dispatch}) => (<Button title="Decrease" onPress={()=>{
    setTimeout(()=>{
        dispatch({type: ActionType.DECREASE});
        console.log('decrease');
    }, 5000)
}}/>);
    
const styles=StyleSheet.create({});

export default connect(null, null)(Adjust);