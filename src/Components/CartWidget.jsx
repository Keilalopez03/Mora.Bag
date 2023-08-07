import { Flex, Box, Spacer } from '@chakra-ui/react'
import carrito from  "../imagenes/carrito.png"
import { Link} from 'react-router-dom'

const CardWidget = () => {
    return (
        <Flex>
            <Box>
                <p className='clase-cinco'>5</p>
            </Box>
            <Spacer />
            <Box>
            <Link to={('/Cart')}>
            <img className='clase-carrito' src={carrito} />
            </Link>
            </Box>
        </Flex>
    )
}

export default CardWidget