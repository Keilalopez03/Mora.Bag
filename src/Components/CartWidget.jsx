import { Flex, Box,Spacer } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
const CardWidget = () => {
    return (
        <Flex>
            <Box>
                <StarIcon />
            </Box>
            <Spacer />
            <Box>
                <p>5</p>
            </Box>
        </Flex>
    )
}

export default CardWidget