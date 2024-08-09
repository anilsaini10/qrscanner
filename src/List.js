import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";


const ListComp = () => {
    



    return (
        <>
            <ScrollView>

                <StatusBar backgroundColor={"#276975"} barStyle="dark-content" />
                <Text style={{ color: "#276975", fontSize: 20, fontWeight: '700', alignSelf: "center", marginTop: 20 }} >History</Text>

                {[1, 2, 2, 3, 4, 5, 6].map((item, index) => {
                    return (
                        <View style={{
                            width: "90%", height: 100, backgroundColor: "#276975",
                            marginTop: 10, alignSelf: "center",
                            borderRadius: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 15
                        }} >
                            <Text style={{ color: "white" }} >12344</Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 2 }} >
                                <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }} >12345</Text>
                                <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }} >12345</Text>
                            </View>
                            <Text style={{ color: "white" }} >12344</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </>
    )
};

export default ListComp;