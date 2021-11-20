import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'

const Login = () => {
    const [show, setShow] = useState(false);
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const handleClick = () => setShow(!show);
    const submitHandler = () => {}

    return (
        <VStack spacing={4} align="stretch">
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                    placeholder="Enter your email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}  
                        placeholder="Enter your Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" color="black" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
                <Button width="100%" colorScheme="blue" onClick={submitHandler}>
                    Login
                </Button>
                <Button 
                    variant="solid" width="100%" 
                    colorScheme="red" 
                    onClick={() => {
                    setEmail("guest1@example.com");
                    setPassword("123456");
                    }}
                >
                    Login as Guest 
                </Button>
        </VStack>
    );
}

export default Login
