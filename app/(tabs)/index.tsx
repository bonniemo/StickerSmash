import Button from "@/components/Button";
import ImagePickerComponent from "@/components/ImagePicker";
import ImageViewer from "@/components/ImageViewer";
import { layoutStyles } from "@/styles/layoutStyles";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require("@/assets/images/library.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={layoutStyles.footerContainer}>
        <ImagePickerComponent onImageSelected={setSelectedImage} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
