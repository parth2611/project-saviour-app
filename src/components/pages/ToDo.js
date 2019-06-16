import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Linking, FlatList ,Animated, StyleSheet, TouchableOpacity } from 'react-native';
import IMG from '../../Images/news1.jpg'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, ListItem, List, Form, Textarea, Item, Input} from 'native-base';
import { SearchBar } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ToDo extends Component {
                 static navigationOptions = {
                   header: null
                 };
            state = {
              search: '',
              data: []
            };

  componentWillMount() {
    this.fetchData();

  }

  fetchData = async () => {
    const response = await fetch(
      "http://192.168.43.62/environment/api/get-todotask.php?type_id=1"
    );
    const json = await response.json();
    this.setState({ data: json.data });
  } 
                 updateSearch = search => {
                   this.setState({ search });
                 };

                 render() {
                   return (
                     <ScrollView>
                       <View>
                         <Card style={{ flex: 0 }}>
                           <CardItem cardBody>
                             <Image
                               source={IMG}
                               style={{
                                 height: 200,
                                 width: null,
                                 flex: 1
                               }}
                             />
                           </CardItem>
                         </Card>
                         <SearchBar
                           placeholder="Search Land Tasks"
                           onChangeText={this.updateSearch}
                         />

                         <FlatList
                           style={{ flex: 0 }}
                           data={this.state.data}
                           keyExtractor={(x, i) => i}
                           renderItem={({ item }) => (
                             <View
                               style={{
                                 flex: 0,
                                 flexDirection: "row",    
                               }}

                               
                             >
                               <View
                                 style={{
                                   width: 330,
                                   height: 60,
                                   backgroundColor:
                                     "#408000",
                                   justifyContent: "center",
                                   alignItems: "center"
                                 }}
                               >
                                 <Text
                                   style={{
                                     textAlign: "center",
                                     fontSize: 20,
                                     fontWeight: "bold"
                                   }}
                                 >
                                   {item.post_details}
                                 </Text>
                               </View>
                               <View
                                 style={{
                                   width: 105,
                                   height: 60,
                                   justifyContent: "center",
                                   alignItems: "center",
                                   backgroundColor: "#ffff1a"
                                 }}
                               >
                                 <View >
                                   <TouchableOpacity
                                    // onPress={alert('Yes')}
                                   >
                                     <Icon
                                       raised
                                       name="thumbs-up"
                                       type="FontAwesome5"
                                     />
                                   </TouchableOpacity>
                                   <TouchableOpacity
                                   // onPress={alert('Yes')}
                                   >
                                   <Icon
                                     raised
                                     name="thumbs-down"
                                     type="FontAwesome5"
                                   />
                                   </TouchableOpacity>
                                   
                                 </View>
                               </View>
                             </View>
                           )}
                         />
                       </View>
                     </ScrollView>
                   );
                 }
               }
