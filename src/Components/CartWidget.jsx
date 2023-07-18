import { Flex, Box, Spacer } from '@chakra-ui/react'
import carrito from  "../imagenes/carrito.png"
const CardWidget = () => {
    return (
        <Flex>
            <Box>
                <p className='clase-cinco'>5</p>
            </Box>
            <Spacer />
            <Box>
            <img className='clase-carrito' src={carrito} />
                
            </Box>
        </Flex>
    )
}

export default CardWidget