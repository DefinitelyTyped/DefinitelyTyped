import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  Button,
} from 'react-native';
import * as OpenFile from 'react-native-doc-viewer';
import * as RNFS from 'react-native-fs';

const SavePath =
  Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

export default class DocViewerExample extends React.Component {
  /*
  * Handle WWW File Method
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url the File Extension is missing.
  */
  handlePress = () => {
    OpenFile.openDoc(
      [
        {
          url:
            'http://mail.hartl-haus.at/uploads/tx_hhhouses/htf13_classic153s(3_giebel_haus).jpg',
          fileName: 'sample',
        },
      ],
      (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url);
        }
      }
    );
  }

  /*
  * Binary in URL
  * Binary String in Url
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
  */
  handlePressBinaryinUrl = () => {
    OpenFile.openDocBinaryinUrl(
      [
        {
          url: 'https://storage.googleapis.com/need-sure/example',
          fileName: 'sample',
          fileType: 'xml',
        },
      ],
      (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url);
        }
      }
    );
  }

  /*
  * Base64String
  * put only the base64 String without data:application/octet-stream;base64
  * fileType Default == "" you can use it, to set the File Extension (pdf,doc,xls,ppt etc) when in the Url you dont have an File Extensions
  */
  handlePressb64 = () => {
    OpenFile.openDocb64(
      [
        {
          base64: '<<a long base64 string>',
          fileName: 'sample.png',
          fileType: 'png',
        },
      ],
      (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url);
        }
      }
    );
  }

  /*
  * mp4 Video
  */
  handlePressVideo(video: string) {
    OpenFile.playMovie(video, (error, url) => {
      if (error) {
        console.error(error);
      } else {
        console.log(url);
      }
    });
  }
  render() {
    return (
      <View>
        <Text>Doc Viewer React Native</Text>
        <Button
          onPress={this.handlePress}
          title="Press Me Open Doc Url"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={this.handlePressBinaryinUrl}
          title="Press Me Open BinaryinUrl"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={this.handlePressb64}
          title="Press Me Open Base64 String"
          accessibilityLabel="See a Document"
        />
        <Button
          onPress={() => this.handlePressVideo('Path/to/Video.mp4')}
          title="Press Me Open Video"
          accessibilityLabel="See a Document"
        />
      </View>
    );
  }
}
