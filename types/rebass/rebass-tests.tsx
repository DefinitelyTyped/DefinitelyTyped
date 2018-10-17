import * as React from 'react'
import * as rebassComponents from 'rebass'
const {Box} = rebassComponents
import {Flex, Text, Heading, Button, Link, Image, Card, RebassComponentsModule} from 'rebass'
import * as styledComponents from 'styled-components'
import {ThemedStyledComponentsModule} from 'styled-components'

const RebassTests = () => (
    <Box p={[1, 2, 3, 4]} m="0 auto" mx={13}>
        <Flex
            flexWrap="nowrap"
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent="center"
            width={1}
            css={{height: '100vh'}}
            fontSize={[1, 2]}
            color="red"
            bg="tomato"
        >
            <Heading
                width={1}
                css={{height: '100vh'}}
                fontSize={2}
                color="red"
                bg="tomato"
                fontWeight="bold"
            >
                Hi, I'm a heading.
            </Heading>
            <Text
                fontFamily="Sans Serif"
                letterSpacing="12"
                lineHeight={2}
                fontSize={3}
                width={1}
                css={{height: '100vh'}}
                color="red"
                bg="tomato"
            >
                Hi, I'm text.
            </Text>
            <Card
                fontSize={6}
                fontWeight="bold"
                width={[1, 1, 1 / 2]}
                p={5}
                my={5}
                bg="#f6f6ff"
                borderRadius={8}
                boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                css={{height: '100vh'}}
                color="red"
            >
                Card
            </Card>
            <Image
                alt="Random image from unsplash.com"
                height={1}
                width={[1, 1, 1 / 2]}
                src="https://source.unsplash.com/random/1280x720"
                borderRadius={8}
                css={{height: '100vh'}}
                fontSize={[1, 2]}
                color="red"
                bg="tomato"
            />
            <Link m="12px auto" href="https://rebassjs.org">
                Link
            </Link>
            <Button
                variant="primary"
                borderRadius={12}
                borderColor="teal"
                bg="magenta"
                css={{height: '100vh'}}
                fontSize={[1, 2]}
                color="red"
            >
                Button
            </Button>
        </Flex>
    </Box>
)

const HalfAndHalf = () => (
    <Flex mx={-2}>
        <Box width={1 / 2} px={2}>
            <Text p={1} color="white" bg="blue">
                Half
            </Text>
        </Box>
        <Box width={1 / 2} px={2}>
            <Text p={1} color="white" bg="blue">
                Half
            </Text>
        </Box>
    </Flex>
)

const Grid = () => (
    <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={1 / 2}>
            <Text p={1} color="white" bg="blue">
                1/2
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 2}>
            <Text p={1} color="white" bg="blue">
                1/2
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
            <Text p={1} color="white" bg="blue">
                1/3
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
            <Text p={1} color="white" bg="blue">
                1/3
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 3}>
            <Text p={1} color="white" bg="blue">
                1/3
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
            <Text p={1} color="white" bg="blue">
                1/4
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
            <Text p={1} color="white" bg="blue">
                1/4
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
            <Text p={1} color="white" bg="blue">
                1/4
            </Text>
        </Box>
        <Box px={2} py={2} width={1 / 4}>
            <Text p={1} color="white" bg="blue">
                1/4
            </Text>
        </Box>
    </Flex>
)

const HelloTest = () => (
    <Flex alignItems="center">
        <Box width={1 / 3}>
            <Heading py={4} fontSize={[5, 6]} color="white" bg="blue">
                Hello
            </Heading>
        </Box>
        <Box width={1 / 3} ml="auto">
            <Text>Grid</Text>
        </Box>
    </Flex>
)

const ImageCard = () => (
    <Flex>
        <Card width={[256, 320]} mx="auto" p={2} variant="basic">
            <Image
                src="https://source.unsplash.com/random/512x384"
                borderRadius={2}
            />
            <Text>Image Card</Text>
        </Card>
    </Flex>
)

const TopBar = () => (
    <Flex px={2} color="white" bg="black" alignItems="center">
        <Text p={2} fontWeight="bold">
            Rebass
        </Text>
        <Box mx="auto" />
        <Link href="#!" p={2} color="white">
            Profile
        </Link>
    </Flex>
)

const IFrameVideo = () => (
    <Box
        width={1}
        css={{
            height: 0,
            paddingBottom: 900 / 16 + '%',
            position: 'relative',
            overflow: 'hidden',
            '& > iframe': {
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                bottom: 0,
                left: 0,
                border: 0,
            },
        }}
    >
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GNCd_ERZvZM"
            frameBorder="0"
            allowFullScreen
        />
    </Box>
)

const BgImage = () => (
    <Card
        p={4}
        py={6}
        backgroundImage="url(https://source.unsplash.com/random/1024x768)"
        backgroundSize="cover"
        borderRadius={8}
        color="white"
        bg="darkgray"
    >
        <Heading textAlign="center" fontSize={[5, 6]}>
            Background Image
        </Heading>
    </Card>
)

const ReactHTMLAttributes = () => (
    <React.Fragment>
        <Box onMouseDown={() => console.log('Mouse down works!')}>
            <Card
                backgroundImage="url(https://source.unsplash.com/random/1024x768)"
                onMouseOver={() => {}}
                onClick={e => console.log(e.target)}
            />
            <Button
                onClick={e => {
                    e.preventDefault()
                    return e.target
                }}
                style={{width: 100}}
            >
                I am button
            </Button>
            <Image
                as="asdhehe"
                src="source.unsplash.com/random/1024x768"
                alt="randomm image"
                onMouseOver={() => {}}
            />
            <Flex style={{flex: '0 0 25%'}}>
                <Link href="https://github.com" rel="noopener">
                    Github
                </Link>
            </Flex>
        </Box>
    </React.Fragment>
)

const AsProp = () => (
    <Box as="div">
        <Heading as="h2">Hello</Heading>
        <Text as="p">Text rendered as paragraph</Text>
        <Flex as="span">Flex as span</Flex>
        <Box as={Flex}>Box as Flex</Box>
        <Flex as="input">Flex as input</Flex>
    </Box>
)

interface Theme {
    dark: {
        backgroundColor: string
    }
}

const WithTypedTheme = () => {
    const {Box} = rebassComponents as RebassComponentsModule<Theme>
    return (
        <Box theme={{dark: {backgroundColor: '#666666'}}} />
    )
}

const StyledExtended = () => {
    interface CustomBoxProps {
        customProp: number
        optionalProp?: string
    }

    const {default: styled} = styledComponents as ThemedStyledComponentsModule<Theme>

    const CustomBox = styled(Box)<CustomBoxProps>`
        ${props => props.customProp}
        ${props => props.mx}
        ${props => props.theme.dark}
    `

    return (
        <CustomBox customProp={3} as="header" css={{maxWidth: '200px'}} theme={{dark: {backgroundColor: '#666666'}}} />
    )
}
