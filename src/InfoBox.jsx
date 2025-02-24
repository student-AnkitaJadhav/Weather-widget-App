import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Haze from './haze.jpg'
import Hot from './hot.jpg'
import Cold from './cold.jpg'
import Rainy from './rain.jpg'
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = Haze;
    const HOT_URL = Hot;
    const COLD_URL = Cold;
    const RAIN_URL = Rainy;
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80?RAIN_URL:info.temp >15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {info.humidity > 80 ? <ThunderstormIcon/>:info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Min Temperature = {info.tempMin}&deg;C</p>
                            <p>Max Temperature = {info.tempMax}&deg;C</p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels Like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}