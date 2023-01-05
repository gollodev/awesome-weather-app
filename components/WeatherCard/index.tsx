import { Heading, HStack, Icon, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { WiCloudy, WiHumidity, WiWindDeg } from "react-icons/wi";

interface WeatherCardProps {
    mainTemp: number
    mainTempTitle: string
    humidity: number
    visibility: number
    clouds: number
    icon: string
}

export default function WeatherCard({ mainTemp, mainTempTitle, humidity, visibility, clouds, icon }: WeatherCardProps): JSX.Element {
    
    const loaderIcon = (): string => `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <>
            <VStack>
                <Heading as={'h1'}>Today&apos;s Report</Heading>
                <Image loader={loaderIcon} src={icon} alt="weather image" width={100} height={100}/>
                <Heading as={'h3'} size={'md'}>{mainTempTitle}</Heading>
                <Text fontSize={'4xl'} as={'span'}>{mainTemp}°C</Text>
            </VStack>
            <HStack spacing={8}>
                <VStack>
                    <Icon as={WiWindDeg} w="10" h="10" />
                    <Text fontSize={'lg'} as={'span'}>{visibility}km</Text>
                    <Text fontSize={'sm'} as={'span'}>Visibility</Text>
                </VStack>
                <VStack>
                    <Icon as={WiHumidity} w="10" h="10" />
                    <Text fontSize={'lg'} as={'span'}>{humidity}%</Text>
                    <Text fontSize={'sm'} as={'span'}>Humidity</Text>
                </VStack>
                <VStack>
                    <Icon as={WiCloudy} w="10" h="10" />
                    <Text fontSize={'lg'} as={'span'}>{clouds}%</Text>
                    <Text fontSize={'sm'} as={'span'}>Clouds</Text>
                </VStack>
            </HStack>
        </>
    )
}