import {
  BoxProps,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Input,
  InputElementProps,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Text,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { COLORS } from "../../styles/theme";

interface Props {
  formControlProps?: FormControlProps;
  isTouched?: boolean | any;
  error?: string | any;
  labelProps?: FormLabelProps;
  leftElement?: InputElementProps;
  rightElement?: InputElementProps;
  useTextForError?: boolean;
  tip?: BoxProps;
}

export type FormInputProps = Props & InputProps & TextareaProps;

const FormInput: React.FC<FormInputProps> = ({
  isRequired,
  isTouched,
  error,
  formControlProps,
  name,
  type = "text",
  w,
  leftElement,
  rightElement,
  labelProps,
  useTextForError,
  tip,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = () => setShowPassword(!showPassword);

  return (
    <FormControl
      id={name}
      isInvalid={!!(isTouched && error)}
      //mt={{ base: 1, md: 3 }}
      isRequired={isRequired}
      w={w || "100%"}
      {...formControlProps}
      pos="relative"
    >
      {labelProps?.children && (
        <FormLabel
          htmlFor={name}
          fontSize={{ base: "sm", md: "md" }}
          ml={2}
          color="black"
          mb="0"
          {...labelProps}
        >
          {labelProps?.children}
        </FormLabel>
      )}

      <InputGroup h={{ base: "2.5rem", md: "3rem" }}>
        {leftElement && <InputLeftElement {...leftElement} h="100%" />}

        {type === "textarea" ? (
          <Textarea fontSize="0.9rem" {...otherProps} />
        ) : (
          <Input
            type={showPassword ? "text" : type}
            rounded="5px"
            h={{ base: "2.5rem", md: "3rem" }}
            fontSize="1rem"
            borderColor="gainsboro"
            _focus={{ borderColor: "gainsboro" }}
            _hover={{ borderColor: `${COLORS.PRIMARY_COLOR}` }}
            {...otherProps}
          />
        )}
      </InputGroup>

      {tip && (
        <FormHelperText
          fontSize={{ base: "xs", sm: "sm" }}
          mb={2}
          mt={0}
          {...tip}
        />
      )}

      {error && useTextForError && (
        <Text mt={1} color="red.500" fontSize="0.8rem">
          {error}
        </Text>
      )}

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default React.memo(FormInput);
