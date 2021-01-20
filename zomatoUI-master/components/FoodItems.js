import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import colors from "../constants/colors";

const data = [
  {
    name: "Natural Ice Creams",
    uri:
      "https://media.gettyimages.com/photos/colorful-scoops-ice-cream-background-concept-picture-id965401258?b=1&k=6&m=965401258&s=612x612&w=0&h=7MwkS8b31-gc97Dituwyc0Cc21iylbT99uWJhcu5P0U=",
    type: "Ice Cream , Deserts",
    id: 1,
  },
  {
    name: "Samosa Wala",
    uri:
      "https://media.istockphoto.com/photos/samosa2-picture-id507066979?b=1&k=6&m=507066979&s=612x612&h=K9-54uD9jHAEfAIDfazlG-Z0d1KdQFUErIYV8EODJuk=",
    type: "Street Food, Chinese",
    id: 2,
  },
  {
    name: "Dominos Pizza ",
    uri:
      "https://images.freeimages.com/images/small-previews/c5e/roasted-tomato-pizza-1538009.jpg",
    type: "Pizza, Fast Food",
    id: 3,
  },
  {
    name: "Burger King",
    uri:
      "https://media.istockphoto.com/photos/burger-king-picture-id458406353?b=1&k=6&m=458406353&s=612x612&h=msD-mLa68mERGIkyp855KaxpEwZ8zXtGoSacubhmHbc=",
    type: "Burger, American",
    id: 4,
  },
  {
    name: "Gulaab",
    uri:
      "https://media.gettyimages.com/photos/nonvegetarian-indian-thali-picture-id174973324?b=1&k=6&m=174973324&s=612x612&w=0&h=MBnZh1-enX5h0P8Nsbpn5nNPE6_rYJur_8vENwnE450=",
    type: "North Indian, StreetFood, Mithai",
    id: 5,
  },
];

const Brands = [
  {
    uri:
      "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-Logo-500x319.png",
    name: "McDonalds ",
    id: 1,
  },
  {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png",
    name: "Dominos",
    id: 2,
  },
  {
    uri:
      "https://seeklogo.com/images/B/Burger_King-logo-EB00FAD8D3-seeklogo.com.png",
    name: "Burger king",
    id: 3,
  },
  {
    uri:
      "https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo-500x430.png",
    name: "KFC",
    id: 4,
  },
  {
    uri:
      "http://www.licensingcorner.com/wp-content/uploads/2017/12/Haldiram-768x489.jpg",
    name: "Haldirams",
    id: 5,
  },
  {
    uri:
      "https://www.designmantic.com/blog/wp-content/uploads/2016/08/SubWayNewLogo.png",
    name: "SubWay",
    id: 6,
  },
];

const Food = [
  {
    img:
      "https://media.istockphoto.com/photos/masala-dosa-picture-id481750586?b=1&k=6&m=481750586&s=170x170&h=k_r8RrtUYkJy2gR3VTWcPd0K1av3x-kJAVVIzlgHa1A=",
    name: "Dosa",
  },
  {
    img:
      "https://images.freeimages.com/images/small-previews/392/milk-shake-1326835.jpg",
    name: "Shakes",
  },
  {
    img:
      "https://media.gettyimages.com/photos/mutter-paneer-in-india-picture-id484591838?b=1&k=6&m=484591838&s=612x612&w=0&h=lKEu_Sx0BzY7UP7TSUqqt4nxUfHtPXEajzT-32vz3qw=",
    name: "Thali",
  },
  {
    img:
      "https://media.istockphoto.com/photos/spicy-indian-chicken-biriyani-rice-with-sliced-eggs-and-garnished-picture-id941715954?b=1&k=6&m=941715954&s=170x170&h=L4H9onPgYj87nfI0rkYuEXzxVuKl9clB_NjRaMyDj64=",
    name: "Biriyani",
  },
  {
    img:
      "https://media.gettyimages.com/photos/paneer-butter-masala-or-cheese-cottage-curry-popular-indian-menu-in-picture-id669312136?b=1&k=6&m=669312136&s=612x612&w=0&h=o5Gb4ZcK2NzchxBIg3AD4E_EY697FIW4cDCLBhSTF9Y=",
    name: "Paneer",
  },
  {
    img:
      "https://media.gettyimages.com/photos/idili-picture-id1129440333?b=1&k=6&m=1129440333&s=170x170&h=EGjhIG3MIDL2NnH_Mpai_PJBY6owqWEZvVitStxYweM=",
    name: "Idli",
  },
  {
    img:
      "https://media.istockphoto.com/photos/vada-a-south-indian-snack-picture-id469920431?b=1&k=6&m=469920431&s=170x170&h=LDZQ82668cYUa77fTp-lchDScWJINasc1BSAIo__33Q=",
    name: "Vada",
  },
  {
    img:
      "https://media.gettyimages.com/photos/caramel-cappuccino-frappe-coffee-picture-id513590204?b=1&k=6&m=513590204&s=612x612&w=0&h=kJLhEm-M6dfxfUefbM1n2ZAEKm8CZ8owBdYGogSgyvk=",
    name: "Cold Coffee",
  },
  {
    img:
      "https://images.freeimages.com/images/small-previews/acf/icecream-goodness-no1-1531356.jpg",
    name: "Ice cream",
  },
  {
    img:
      "https://media.gettyimages.com/photos/traditional-indian-bread-aloo-paratha-or-aalu-parotha-potato-stuffed-picture-id694739192?b=1&k=6&m=694739192&s=170x170&h=IGhUZltmhuo1Wxn5spQvEoTcbk3Zi9ksdiELNLvzXIk=",
    name: "paranthas",
  },

  {
    img:
      "https://media.gettyimages.com/photos/mouthwatering-delicious-homemade-burger-used-to-chop-beef-on-the-picture-id907077304?b=1&k=6&m=907077304&s=612x612&w=0&h=-6mvQkaRN8F9bHkvwi8-sC3O6M7Uc5_dQoZhKkgL1NY=",
    name: "burger",
  },
  {
    img:
      "https://media.istockphoto.com/photos/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-picture-id979916088?b=1&k=6&m=979916088&s=170x170&h=-qizQy0VBh4qhhxlVGJkpnut7WjPA0nG29Z-6Sd1-_Y=",
    name: "Chole Bhature",
  },
  {
    img:
      "https://images.freeimages.com/images/small-previews/d8c/pizzas-1329569.jpg",
    name: "Pizza",
  },
  {
    img:
      "https://media.istockphoto.com/photos/stuffed-sev-puri-is-a-popular-indian-roadside-chat-item-served-in-a-picture-id979811164",
    name: "chaat",
  },
  {
    img:
      "https://media.istockphoto.com/photos/samosa-and-chutney-picture-id967110094?b=1&k=6&m=967110094&s=612x612&h=8Dw3i-Hb8sRDG9LLhTwzBTVmq4Hh8K6gBfmS5Jj2JNA=",
    name: "samosa",
  },
];

const FoodItems = ({ numberofcolumns = 15 }) => {
  const BigCard = (props) => {
    return (
      <View style={styles.BigCards}>
        <Image source={{ uri: props.uri }} style={styles.bigCardImg} />
        <Text>{props.name}</Text>
        <Image
          resizeMode="contain"
          style={styles.img1}
          source={require("../assets/stars_zomato.jpeg")}
        />
        <Text> {props.type}</Text>
        <Image
          resizeMode="contain"
          style={styles.img2}
          source={require("../assets/safety_zomato.jpeg")}
        />
      </View>
    );
  };

  const Card = (props) => (
    <View style={styles.cardContainer}>
      <Image source={{ uri: props.uri }} style={styles.imageContainer} />
      <Text style={styles.subsubText}>{props.name}</Text>
    </View>
  );

  const MiniCard = (props) => (
    <View style={styles.miniCards}>
      <Image style={styles.miniItems} source={{ uri: props.uri }} />
      <Text styles={styles.miniText}>{props.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Lockdown cravings</Text>
      <Text style={styles.subText}> Most ordered in your city</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          data={Food}
          keyExtractor={(items) => items.name}
          numColumns={numberofcolumns}
          renderItem={({ item }) => {
            return <MiniCard uri={item.img} name={item.name} />;
          }}
        />
      </ScrollView>
      <View>
        <Text style={styles.text}>Quick Brands</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.brandContainer}
        >
          <FlatList
            data={Brands}
            keyExtractor={(item) => item.id}
            numColumns={numberofcolumns}
            renderItem={({ item }) => <Card name={item.name} uri={item.uri} />}
          />
        </ScrollView>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.text}>Best Selling Food</Text>
        </View>
        <View style={styles.main}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <BigCard uri={item.uri} name={item.name} type={item.type} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodItems;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 30,
    color: colors.dark,
  },
  container: {
    marginTop: 5,
  },
  subText: {
    color: colors.medium,
    marginLeft: 30,
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 30,
    marginBottom: 5,
  },
  scrollView: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  subsubText: {
    fontSize: 10,
  },
  cardContainer: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  miniCards: {
    marginTop: 10,
    margin: 6,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  miniItems: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 0.2,
  },
  brandContainer: {
    marginTop: 10,
  },
  BigCards: {
    width: 350,
    height: 300,
    borderWidth: 0.5,
    //borderRadius: 15,
    overflow: "hidden",
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderColor: colors.light,
  },
  bigCardImg: {
    width: "100%",
    height: "60%",
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
  },
  img1: {
    width: 300,
    height: 30,
  },
  img2: {
    width: "100%",
    height: 40,
    marginTop: 12,
  },
});
