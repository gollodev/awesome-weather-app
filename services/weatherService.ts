const apiToken = 'a89cf9aceb37cf0e662485c0fa32f687';

export async function getCurrentWeather(city: string): Promise<any> {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiToken}`).then(res => res.json())
        return response
    } catch (error) {
        return error
    }
}