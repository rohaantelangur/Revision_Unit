import {
  Badge,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const TaskCard = ({
  id,
  title,
  description,
  tags,
  subTasks,
  colorScheme = "blue",
}) => {
  const [checkBox, setCheckBox] = useState(() => {
    let data = subTasks
      .filter((item) => {
        return item.status && item.subTaskTitle;
      })
      .map((item) => item.subTaskTitle);
    return data;
  });
  // console.log(checkBox);
  return (
    <Box bg="yellow.100" padding={"1.5"} mx={2} my={3} border={"1px solid black"}>
      <Flex justifyContent={"space-between"}>
        <Text>{title}</Text>
        <Link to={`/task/${id}`}>
          <EditIcon cursor={"pointer"} />
        </Link>
      </Flex>

      <Box>
        <HStack>
          {tags.length &&
            tags.map((item, index) => (
              <Badge key={index} colorScheme={colorScheme}>
                {item}
              </Badge>
            ))}
        </HStack>
      </Box>
      <Text>{description}</Text>
      <Box>
        <CheckboxGroup defaultValue={checkBox}>
          {subTasks.length &&
            subTasks.map((item, index) => (
              <HStack key={index}>
                <Checkbox value={item.subTaskTitle} key={index}>
                  {item.subTaskTitle}
                </Checkbox>
              </HStack>
            ))}
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default TaskCard;
