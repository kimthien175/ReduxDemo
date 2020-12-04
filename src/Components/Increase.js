import React from 'react';
import { Button, StyleSheet } from "react-native";
import { connect } from 'react-redux';
import * as ActionType from '../Actions/Type';

const Adjust = ({dispatch}) => (<Button title="Increase" onPress={()=>{
    setTimeout(()=>{
        dispatch({type: ActionType.INCREASE});
        console.log('increase');
    }, 3000)
}}/>);
    
const styles=StyleSheet.create({});

export default connect(null, null)(Adjust);