import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/auth.js'
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  Text,
  Switch,
  useColorMode,
  useColorModeValue,
  FormErrorMessage,
  VStack,
  HStack,
} from '@chakra-ui/react';

const Login = () => {

  const formBackground = useColorModeValue('whiteAlpha.900', 'gray.700');
  const navigate = useNavigate()
  const {setSession} = useAuth()
  const { toggleColorMode } = useColorMode();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    axios.defaults.baseURL = 'http://127.0.0.1:5000'
    const response = await axios.post('/login', data)
    const user = response.data;
    if (user){
      localStorage.setItem('session',JSON.stringify({user, status:'authenticated'}))
      setSession({user,status:'authenticated'})
      navigate('/')  
    }
  };




  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading>Log In</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="4" align="stretch" my="6">
            <FormControl isInvalid={!!errors.email}>
              <Input
                placeholder="johndoe@gmail.com"
                type="email"
                variant="filled"
                {...register("email", {
                  required: 'email required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }
                })}
              />
              <FormErrorMessage m={0}>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <Input
                placeholder="••••••••"
                type="password"
                variant="filled"
                {...register("password", {
                  required: 'password required',
                  minLength: {
                    value: 8,
                    message: 'password must be 8 characters'
                  }
                })}
              />
              <FormErrorMessage m={0}>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button type='submit' colorScheme="teal">Log In</Button>
          </VStack>
        </form>
        <HStack justifyContent="end">
          <Text fontWeight="medium">Dark mode?</Text>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Login;
