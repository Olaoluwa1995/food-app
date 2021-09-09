import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";

import SignInSignUpLayout from "../../layout/sign-in-sign-up/sign-in-sign-up.component";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

type FormValues = {
  name: string;
  birthDate: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  birthDate: Yup.string().required("Birth date is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string().required("Address is required"),
});

const SignUpComponent: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    gender: "",
    address: "",
  };

  const [showData, setShowData] = React.useState(false);
  const [data, setData] = React.useState<FormValues>(initialValues);

  const handleSubmit = async (values: FormValues) => {
    console.log({ values });
    setData(values);
    setShowData(true);
  };

  return (
    <SignInSignUpLayout title="Register">
      <Text
        fontSize={{ base: "1.4rem", md: "1.8rem" }}
        fontWeight="bold"
        color="blackAlpha.900"
        mx="auto"
        mt="2rem"
      >
        Register
      </Text>
      <Text
        fontSize={{ base: "0.9rem", md: "1rem" }}
        color="blackAlpha.700"
        mx="auto"
        mt="0.5rem"
      >
        Don't have an account? Signup now
      </Text>
      {showData && (
        <Flex mx="auto" my="1rem">
          <Flex flexDir="column" mr="2rem">
            <Box>Name:</Box>
            <Box>BirthDate:</Box>
            <Box>Email:</Box>
            <Box>Phone Number:</Box>
            <Box>Gender:</Box>
            <Box>Address:</Box>
          </Flex>
          <Flex flexDir="column">
            <Box>{data.name}</Box>
            <Box>{data.birthDate}</Box>
            <Box>{data.email}</Box>
            <Box>{data.phoneNumber}</Box>
            <Box>{data.gender}</Box>
            <Box>{data.address}</Box>
          </Flex>
        </Flex>
      )}
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }: any) => (
          <Box
            as="form"
            mx="auto"
            px={{ base: "10%", md: "5%" }}
            maxW="520px"
            w="100%"
            minH="50vh"
            d="flex"
            flexDir="column"
            onSubmit={handleSubmit}
          >
            <Field name="name">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    isRequired
                    formControlProps={{ my: { base: 2 } }}
                    placeholder="Name"
                  />
                );
              }}
            </Field>

            <Field name="email">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    type="email"
                    h="3rem"
                    isRequired
                    formControlProps={{
                      my: { base: 2 },
                    }}
                    placeholder="Email Address"
                  />
                );
              }}
            </Field>

            <Field name="phoneNumber">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    type="tel"
                    isRequired
                    formControlProps={{ my: { base: 2 } }}
                    placeholder="Phone Number"
                  />
                );
              }}
            </Field>

            <Field name="birthDate">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    isRequired
                    formControlProps={{ my: { base: 2 } }}
                    placeholder="Date of Birth"
                  />
                );
              }}
            </Field>

            <Field name="gender">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    isRequired
                    formControlProps={{ my: { base: 2 } }}
                    placeholder="Gender"
                  />
                );
              }}
            </Field>

            <Field name="address">
              {({ field, form }: FieldProps) => {
                const { name } = field;
                const { errors, touched } = form;

                return (
                  <FormInput
                    {...field}
                    error={errors[name]}
                    isTouched={touched[name]}
                    h="3rem"
                    isRequired
                    formControlProps={{ my: { base: 2 } }}
                    placeholder="Address"
                  />
                );
              }}
            </Field>

            <CustomButton
              textTransform="capitalize"
              maxW="100%"
              fontWeight="700"
              type="submit"
              fontSize="1rem"
              mt="1rem"
              mb={{ base: "1rem", sm: "2rem" }}
            >
              Sign Up
            </CustomButton>
          </Box>
        )}
      </Formik>
    </SignInSignUpLayout>
  );
};

export default SignUpComponent;
