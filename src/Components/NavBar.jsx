import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <Flex>
            <Box p='4' bg='black' color="white">
                Mora-Bag
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Carteras</MenuItem>
                        <MenuItem>Ubicacion</MenuItem>
                        <MenuItem>Conocenos</MenuItem>
                        <MenuItem>Inicio</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4' bg='blueviolet' color="white">
                <CartWidget />
            </Box>
        </Flex >

    )
}

export default NavBar