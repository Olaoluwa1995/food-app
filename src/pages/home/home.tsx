import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CarouselSection from "../../components/homepage/carousel-section.component";

import PageContainer from "../../layout/page-container/page-container.component";
import { COLORS } from "../../styles/theme";

const HomePage: React.FC<any> = () => (
  <PageContainer>
    <CarouselSection />
    <Flex
      as="section"
      flexDir="column"
      px={{ base: "3%", sm: "5%", md: "7%", lg: "10%" }}
      mt="5%"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        mb="0.5rem"
        color={COLORS.PRIMARY_COLOR}
      >
        Vegetables
      </Text>
      <Box as="p" mb="0.5rem">
        Vegetable, in the broadest sense, any kind of plant life or plant
        product, namely “vegetable matter”; in common, narrow usage, the term
        vegetable usually refers to the fresh edible portions of certain
        herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds. These
        plant parts are either eaten fresh or prepared in a number of ways,
        usually as a savory, rather than sweet, dish.
      </Box>
      <Box as="p" mb="0.5rem">
        Virtually all of the more important vegetables were cultivated among the
        ancient civilizations of either the Old or the New World and have long
        been noted for their nutritional importance. Most fresh vegetables are
        low in calories and have a water content in excess of 70 percent, with
        only about 3.5 percent protein and less than 1 percent fat. Vegetables
        are good sources of minerals, especially calcium and iron, and vitamins,
        principally A and C. Nearly all vegetables are rich in dietary fibre and
        antioxidants.
      </Box>
      <Box as="p" mb="0.5rem">
        Vegetables are usually classified on the basis of the part of the plant
        that is used for food. The root vegetables include beets, carrots,
        radishes, sweet potatoes, and turnips. Stem vegetables include asparagus
        and kohlrabi. Among the edible tubers, or underground stems, are
        potatoes. The leaf and leafstalk vegetables include brussels sprouts,
        cabbage, celery, lettuce, rhubarb, and spinach. Among the bulb
        vegetables are garlic, leeks, and onions. The head, or flower,
        vegetables include artichokes, broccoli, and cauliflower. The fruits
        commonly considered vegetables by virtue of their use include cucumbers,
        eggplant, okra, sweet corn, squash, peppers, and tomatoes. Seed
        vegetables are usually legumes, such as peas and beans.
      </Box>
    </Flex>
  </PageContainer>
);

export default HomePage;
