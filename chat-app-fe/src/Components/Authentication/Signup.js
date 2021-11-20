import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'

const SignUP = () => {
    const [show, setShow] = useState(false);
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, SetConfirmPassword ] = useState();
    const [ pic, setPic ] = useState();

    const handleClick = () => setShow(!show);
    const postDetails = (pics) => {}
    const submitHandler = () => {}

    return (
        <VStack spacing={4} align="stretch">
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                    placeholder="Enter your Name" 
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
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
                        placeholder="Enter Password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" color="black" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}  
                        placeholder="Confirm Password" 
                        onChange={(e) => SetConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" color="black" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input 
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
                <Button width="100%" colorScheme="blue" onClick={submitHandler}>
                    Sign Up
                </Button>
        </VStack>
    );
}

export default SignUP
