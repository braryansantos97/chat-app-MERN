import { Box, Container, Text } from '@chakra-ui/layout'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import React from 'react'
import Login from '../Components/Authentication/Login'
import Signup from '../Components/Authentication/Signup'

const HomePage = () => {
    return (
        <Container maxW='xl'>
            <Box d='flex' justifyContent="center" p={3} bg={"gray"} w="100%" m="40px 0 15px 0" borderRadius="lg" borderWidth="1px">
                <Text fontSize="4xl" fontFamily="Work sans" color="white">
                    Let's Talk
                </Text>
            </Box>
            <Box bg={"gray"} w="100%" p={4} borderRadius="lg" borderWidth="1px" color="white">
                <Tabs variant="soft-rounded">
                    <TabList>
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

        </Container>
    )
}

export default HomePage
