import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL =
        "https://plus.unsplash.com/premium_photo-1676404983628-52d779339c06?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21vZ3xlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://cdn.prod.website-files.com/638eae7425e098a77f09f1bf/648a6a2a6853962bcdf824f3_how-to-survive-heatwave_1600x1100.jpg";
    const COLD_URL = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-10/20241017-winter-weather-sj-319p-362841.jpg";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7jyGdeP0nKj3MOBMAGrq1Satx-3R1HoZ5Q&s";


    return (
        <div className="Infobox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? RAIN_URL : info.temp > 50 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 50 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperatur = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be describe as <b>{info.weather}</b> and Feels-Like = {info.feelslike}&deg;C</p>
          
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}

