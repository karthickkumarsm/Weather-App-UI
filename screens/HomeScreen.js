import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar } from 'expo-status-bar';
import  * as Progress from 'react-native-progress';
import { theme } from '../theme/index';
import  {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {CalendarDaysIcon,MagPinIcon} from 'react-native-heroicons/solid';
export default function HomeScreen(){
    const [showSearch,toggleSearch]=useState(false);
    const[locations,setLocations]=useState([]);
    const handleLocation=(loc)=>{
        console.log('locations',loc);
    }
    return(
        <View className="flex-1 relative">
            <StatusBar style="light"/>
            <Image source={require('../assets/images/bg.png')} blurRadius={70} 
                className="absolute h-full w-full"
                />
            <SafeAreaView className="flex flex-1">
                
                {/*search section */}
                
                <View style={{height:'7%'}} className="mx-4 relative z-50">
                    <View className="flex-row justify-end items-center rounded-full"
                      style={{backgroundColor:showSearch?theme.bgWhite(0.2):'transparent'}}>
                      {
                        showSearch?(
                            <TextInput placeholder='search city' placeholderTextColor={'lightgray'}
                            className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                        />
                        ):null
                      }
                        
                        <TouchableOpacity 
                        onPress={()=>toggleSearch(!showSearch)}
                        style={{backgroundColor:theme.bgWhite(0.3)}}
                        className="rounded-full p-3 m-1">
                            <MagnifyingGlassIcon size="25" color="white"/>
                        </TouchableOpacity>
                      </View>
                      {
                        locations.length>=0 && showSearch?(
                            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                {
                                    locations.map((loc,index)=>{
                                        let showBorder =index+1 != locations.length;
                                        let borderClass=showBorder?'border-b-2 border-b-gray-400':'';
                                        return(
                                            <TouchableOpacity
                                             key={index}
                                            onPress={()=>handleLocation(loc)}
                                             className={"flex-row items-center border-0 p-3 px-4 mb-1 "+borderClass}                                          
                                            >
                                                <MagPinIcon size="20" color="grey"/>
                                                <Text className="text-black text-lg ml-2">
                                                    London,United Kingdom
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })
                                }
                            </View>
                        ):null
                      }

                </View>
               
                {/*forecast section*/}
               
                <View className="mx-4 flex justify-around flex-1 mb-2">
                   
                    {/*location*/}
                   
                    <Text className="text-white text-center text-2xl font-bold">
                        London
                        <Text className="text-lg font-semibold text-grey-300">
                            ,United Kingdom
                        </Text>
                    </Text>
                   
                    {/*Weather image*/}
                   
                    <View className="flex-row justify-center">
                        <Image
                          source={(require('../assets/images/partlycloudy.png'))}
                          className="w-52 h-52"
                          />
                    </View>
                     {/* celcius*/}
                     <View className="space-y-2">
                        <Text className="text-center font-bold text-white text-6xl ml-5">
                            23&#176;
                        </Text>
                        <Text className="text-center text-white text-xl tracling-widest">
                            Partly cloudy
                        </Text>
                     </View>
                    
                    {/* other stats */}

                     <View className="flex-row justify-between mx-4">
                  <View className="flex-row space-x-2 items-center">
                    <Image source={require('../assets/icons/wind.png')} className="w-6 h-6" />
                    <Text className="text-white font-semibold text-base">22 km</Text>
                  </View>
                  <View className="flex-row space-x-2 items-center">
                    <Image source={require('../assets/icons/drop.png')} className="w-6 h-6" />
                    <Text className="text-white font-semibold text-base">23%</Text>
                  </View>
                  <View className="flex-row space-x-2 items-center">
                    <Image source={require('../assets/icons/sun.png')} className="w-6 h-6" />
                    <Text className="text-white font-semibold text-base">
                      6:05 AM
                    </Text>
                  </View>
                </View>

              </View>
                {/*Forecast session for next day*/}
                <View className="mb-2 space-y-3">
                    <View className='flex-row items-center mx-5 space-x-2'>
                        <CalendarDaysIcon size="22" color="white"/>
                        <Text className="text-white text-base">Daily forecast
                        </Text>
                    </View>
                <ScrollView
                 horizontal
                 contentContainerStyle={{paddingHorizontal:15}}
                 showsHorizontalScrollIndicator={false}
                 >
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Monday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                    
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Tuesday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                    
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Wednesday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                    
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Thursday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                    
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Friday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                    
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Saturdayday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                    
                    <View className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{backgroundColor:theme.bgWhite(0.15)}}>
                        <Image source={require('../assets/images/heavyrain.png')}
                        className="h-11 w-11"/>
                        <Text className="text-white">Sunday</Text>
                        <Text className="text-white text-xl font-semibold"> 23&#176;</Text>
                    </View>
                 </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}