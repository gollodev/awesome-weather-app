import { ChangeEvent, useCallback, useState } from 'react'
import { useEffect } from 'react'
import { getCurrentWeather } from './weatherService'
import PageLayout from '../components/PageLayout'
import UISelect from '../components/UISelect'
import WeatherCard from '../components/WeatherCard'
import { ICities } from '../common/interfaces'
import { v4 as uuidv4 } from 'uuid';

const initialCities: ICities[] = [
    { key: uuidv4(), value: 'medellin', label: 'Medellin' },
    { key: uuidv4(), value: 'caracas', label: 'Caracas' },
    { key: uuidv4(), value: 'miami', label: 'Miami' }
]

export default function Home() {
    const [mainTemp, setMainTemp] = useState<number>(0)
    const [mainTempTitle, setMainTempTitle] = useState<string>('')
    const [humidity, setHumidity] = useState<number>(0)
    const [visibility, setVisibility] = useState<number>(0)
    const [clouds, setClouds] = useState<number>(0)
    const [icon, setIcon] = useState<string>('')
    const [cities, setCities] = useState<ICities[]>(initialCities)
    const [selectedCity, setSelectedCity] = useState<string>('medellin')

    useEffect(() => {
        getCurrentWeather(selectedCity)
        .then(res => {
            setMainTemp(calculateCelsius(res.main.temp))
            setHumidity(res.main.humidity)
            setVisibility(res.visibility)
            setClouds(res.clouds.all)
            setMainTempTitle(res.weather[0].main)
            setIcon(res.weather[0].icon)
        })
    }, [selectedCity])

    const handleSelectCity = (e: ChangeEvent<HTMLSelectElement>): void => setSelectedCity(e.target.value) 

    const calculateCelsius = (k: number): number => Math.round(k - 273.15)

    return (
        <PageLayout titlePage='Awesome Weather App'>
            <UISelect
                placeholder='Select a city'
                onChange={handleSelectCity}
                value={selectedCity}
                cities={cities}
            />
            <WeatherCard 
                mainTemp={mainTemp} 
                mainTempTitle={mainTempTitle}
                humidity={humidity}
                visibility={visibility}
                clouds={clouds}
                icon={icon}
            />
        </PageLayout>
    )
}
