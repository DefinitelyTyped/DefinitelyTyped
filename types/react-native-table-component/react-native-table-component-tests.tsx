// react-native-tables-component tests
// Copied from README of original repository.
// Modified to work with typescript.
// https://github.com/Gil2015/react-native-table-component

import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, Row, Rows, TableWrapper, Col, Cell } from 'react-native-table-component';

const styles1 = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});

interface ExampleOneState {
    tableHead: string[];
    tableData: string[][];
}

export class ExampleOne extends React.Component<{}, ExampleOneState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '456\n789'],
                ['a', 'b', 'c', 'd']
            ]
        };
    }

    render() {
        const state = this.state;
        return (
            <View style={styles1.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles1.head} textStyle={styles1.text}/>
                    <Rows data={state.tableData} textStyle={styles1.text}/>
                </Table>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {  height: 40,  backgroundColor: '#f1f8ff'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
    text: { textAlign: 'center' }
});

interface ExampleTwoState {
    tableHead: string[];
    tableTitle: string[];
    tableData: string[][];
}

export class ExampleTwo extends React.Component<{}, ExampleTwoState> {
    constructor(props: any) {
      super(props);
      this.state = {
        tableHead: ['', 'Head1', 'Head2', 'Head3'],
        tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
        tableData: [
          ['1', '2', '3'],
          ['a', 'b', 'c'],
          ['1', '2', '3'],
          ['a', 'b', 'c']
        ]
      };
    }

    render() {
      const state = this.state;
      return (
        <View style={styles2.container}>
          <Table borderStyle={{borderWidth: 1}}>
            <Row data={state.tableHead} flexArr={[1, 2, 1, 1]} style={styles2.head} textStyle={styles2.text}/>
            <TableWrapper style={styles2.wrapper}>
              <Col data={state.tableTitle} style={styles2.title} heightArr={[28, 28]} textStyle={styles2.text}/>
              <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles2.row} textStyle={styles2.text}/>
            </TableWrapper>
          </Table>
        </View>
      );
    }
}

const styles3 = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
});

interface ExampleThreeState {
    tableHead: string[];
    widthArr: number[];
}

export class ExampleThree extends React.Component<{}, ExampleThreeState> {
    constructor(props: any) {
      super(props);
      this.state = {
        tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
        widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
      };
    }

    render() {
      const state = this.state;
      const tableData = [];
      for (let i = 0; i < 30; i += 1) {
        const rowData = [];
        for (let j = 0; j < 9; j += 1) {
          rowData.push(`${i}${j}`);
        }
        tableData.push(rowData);
      }

      return (
        <View style={styles3.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={styles3.header} textStyle={styles3.text}/>
              </Table>
              <ScrollView style={styles3.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {
                    tableData.map((rowData, index) => {
                        const styles = styles3.row;
                        if (index % 2) {
                            styles['backgroundColor'] = '#F7F6E7';
                        }

                        return (
                            <Row
                              key={index}
                              data={rowData}
                              widthArr={state.widthArr}
                              style={styles}
                              textStyle={styles3.text}
                            />
                        );
                    })
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      );
    }
}

const styles4 = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
});

interface ExampleFourState {
    tableHead: string[];
    tableData: string[][];
}

export class ExampleFour extends React.Component<{}, ExampleFourState> {
    constructor(props: any) {
      super(props);
      this.state = {
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd']
        ]
      };
    }

    _alertIndex(index: number) {
      Alert.alert(`This is row ${index + 1}`);
    }

    render() {
      const state = this.state;
      const element = (data: string, index: number) => (
        <TouchableOpacity onPress={() => this._alertIndex(index)}>
          <View style={styles4.btn}>
            <Text style={styles4.btnText}>button</Text>
          </View>
        </TouchableOpacity>
      );

      return (
        <View style={styles4.container}>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={state.tableHead} style={styles4.head} textStyle={styles4.text}/>
            {
              state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles4.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles4.text}/>
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
        </View>
      );
    }
}
